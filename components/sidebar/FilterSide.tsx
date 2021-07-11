import React, { useEffect, useState } from 'react';
import { electron } from 'webpack';
import { useAppDispatch, useAppState } from '../../contexts/app/app.provider';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { route } from 'next/dist/next-server/server/router';

    export default function SideBar (props) {
        
        interface Range{
            min:""
            max:""
        }
        interface Ranges{
            lower:""
            upper:""
            text:""
        }
        interface Category{
            id:""
            name:""
            slug:""
        }
        interface Brand{
            id:""
            name:""
        }
        interface Attr{
            id:""
            type:string
            order:string
            name:""
            values:Value[]
        }
        interface Value{
            id:""
            value:""
            color:""
            selected:""
        }
        interface Data{
            categories:Category[]
            brands:Brand[]
            price_range:Range
            ranges:Ranges[]
            attributes:Attr[]
        }
    const isDrawerOpen = useAppState('isDrawerOpen');
    const Loading = useAppState('Loading');
    const [shown,setShown] = useState(0);
    const [catss,setCatss] = useState(null);
    const [type,setType]=useState('home');
    const Route = useAppState('Route');
    const [routes,setRoutes] = useState<string>();
    const [data,setData] = useState<Data>();
    const router = useRouter()
    const { pid } = router.query;
    const { pids } = router.query;
        useEffect(()=>{
            fetch(`https://amanacart.com/api/filters?${pids?`sub_category=${pids}`:`category=${pid}`}`)
            .then(res => res.json())
            .then(result =>{
              setData(result);
              console.log(result)
            })
            .catch(e => {
          });
        },[])
        useEffect(()=>{
            setRoutes(window.location.href)
        })
  

    const toggleAccordoin = (event) => {
        
        
        if(event.currentTarget.children[1].classList.contains('block')){

            event.currentTarget.children[1].classList.remove('block');
            event.currentTarget.children[1].classList.add('hidden');
            event.currentTarget.classList.add('duration-1000');
            event.currentTarget.classList.add('transition-all');
            event.currentTarget.classList.add('max-h-11');
            event.currentTarget.classList.remove('max-h-96');
            event.currentTarget.style.background="#fff";
            
        }
        else{
            var items = document.getElementsByClassName('items');

            for(var i = 0; i < items.length; i++)
                {
                    items[i].children[1].classList.remove('block');
                    items[i].children[1].classList.add('hidden');
                    items[i].classList.add('max-h-11');
                    items[i].classList.add('backgroundwhite');
                    items[i].classList.remove('max-h-96');
                    items[i].classList.remove('transition-all');
                    items[i].classList.remove('duration-1000');
                }
            
            event.currentTarget.children[1].classList.remove('hidden');
            event.currentTarget.children[1].classList.add('block');
            event.currentTarget.classList.add('max-h-96');
            event.currentTarget.classList.remove('max-h-11');
            event.currentTarget.classList.add('duration-1000');
            event.currentTarget.classList.add('transition-all');
            event.currentTarget.style.background="#eee";
        }
    }

    return (
            <div id="ads" style={{width:props.width}} className="fixed overflow-x-hidden bg-white dark:bg-gray-800  z-10">
                <div className="flex flex-col  sm:justify-around">
                <div className={isDrawerOpen?"w-full h-screen shadow":"w-full h-screen shadow flex items-center"}>
                    <nav className={isDrawerOpen?" pr-6 h-full flex flex-col items-end":"sticky top-0 w-full h-full flex flex-col items-end"}>
                        <div className="logo  flex items-center ">
                            <div className="w-2/12" />
                            <div  className="hamburger sm:w-2/12 md:w-2/12 lg:w-3/12 xl:w-2/12 sm:h-4 md:h-4 lg:h-5 xl:h-4  flex flex-col sm:justify-between sm:items-center">
                                {/* <div className="line h-0.5 w-full rounded-2xl bg-black"></div>
                                <div className="line h-0.5 w-full rounded-2xl bg-black"></div>
                                <div className="line h-0.5 w-full rounded-2xl bg-black"></div> */}  
                            </div>
                        </div>
                        <ul  className={isDrawerOpen?"flex flex-col justify-between items-center border-b-2 pb-2 w-11/12":"flex flex-col justify-between items-center  w-full"}>
                                <li className={isDrawerOpen?`cursor-pointer pt-2 pb-2  w-full flex flex-row justify-end items-center ${Loading?"skeleton-box mt-1":""}`:`cursor-pointer pt-2 small-hover text-xs pb-2 w-full flex flex-col-reverse justify-center items-center ${Loading?"skeleton-box mt-1":""}`}>
                            <Link href="/">
                                    <div style={Loading?{opacity:"0"}:{}} className={`w-full text-right flex ${routes == Route+'/' ? "text-yellow-500":""}  ${isDrawerOpen?"flex-row justify-end items-center":"flex-col-reverse justify-center items-center"}  `}>
                                        {isDrawerOpen?
                                            "الصفحة الرئيسية":"الرئيسية"
                                        }
                                        {routes == Route+'/'?
                                         <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="167.941" height="23.53" viewBox="0 0 167.941 169">
                                         <path fill="rgba(245, 158, 11)" id="Path_12039" data-name="Path 12039" d="M167.2,77.115,84.152,0,1.107,77.115A2.9,2.9,0,0,0,5.048,81.36L17.554,69.746V169H63.883V116.88a20.269,20.269,0,0,1,40.538,0V169H150.75V69.746L163.256,81.36a2.9,2.9,0,0,0,3.944-4.245Z" transform="translate(-0.183)"/>
                                         </svg>
                                         :
                                         <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="171.942" height="23.53" viewBox="0 0 171.942 173.729">
                                             <path fill="none" id="Path_12055" data-name="Path 12055" d="M167.2,77.115,84.152,0,1.107,77.115A2.9,2.9,0,0,0,5.048,81.36L17.554,69.746V169H63.883V116.88a20.269,20.269,0,0,1,40.538,0V169H150.75V69.746L163.256,81.36a2.9,2.9,0,0,0,3.944-4.245Z" transform="translate(1.818 2.729)" stroke="#000" strokeWidth="4"/>
                                         </svg>
                                         }
                                    </div>
                            </Link>
                                </li>
                                <li className={isDrawerOpen?`cursor-pointer pt-2 pb-2  w-full flex flex-row justify-end items-center ${Loading?"skeleton-box mt-1":""}`:`pt-2 text-xs small-hover pb-2 w-full flex flex-col-reverse justify-center items-center cursor-pointer ${Loading?"skeleton-box mt-1":""}`}>
                                    <Link href="/explore">
                                        <div style={Loading?{opacity:"0"}:{}} className={`w-full text-right flex  ${routes == Route+'/explore' ? "text-yellow-500":""} ${isDrawerOpen?"flex-row justify-end items-center":"flex-col-reverse justify-center items-center"}  `}>
                                            استكشاف
                                            <svg className={isDrawerOpen?"ml-3 w-5":"w-5"} xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 149.824 145.112">
                                                <path fill={`${routes == Route+'/explore'?"rgba(245, 158, 11)":""}`} id="Path_11747" data-name="Path 11747" d="M3677.091,340.627H3818.1a4.4,4.4,0,0,0,2.981-7.625l-40.892-37.755-1.454-1.341-1.487,1.306-16.92,14.876a2.195,2.195,0,0,1-1.452.55l-.153,0a2.225,2.225,0,0,1-1.517-.761l-34.226-39.831a2.2,2.2,0,0,1-.531-1.434v-7a2.2,2.2,0,0,1,2.2-2.2H3765a2.2,2.2,0,0,1,2.2,2.2v2.326a11.006,11.006,0,0,0,11,10.993h42.052l-2.507-3.483-20.206-28.081a2.193,2.193,0,0,1,0-2.568l20.206-28.086,2.507-3.483h-47.623a2.2,2.2,0,0,1-2-1.293,11.029,11.029,0,0,0-10.021-6.468h-35.957a2.2,2.2,0,0,1-2.2-2.2v-1.552a2.2,2.2,0,0,0-4.4,0v70.933a2.2,2.2,0,0,1-.392,1.253l-44.184,63.827a4.4,4.4,0,0,0,3.614,6.9Zm94.507-79.02V215.822a2.2,2.2,0,0,1,2.2-2.2h33.578a2.2,2.2,0,0,1,1.785,3.483l-17.04,23.684-.928,1.288.928,1.28,17.04,23.688a2.2,2.2,0,0,1-1.785,3.483H3778.2a6.6,6.6,0,0,1-6.6-6.6Zm-49.148-53.546a2.2,2.2,0,0,1,2.2-2.2H3760.6a6.6,6.6,0,0,1,6.6,6.6v40.354a2.2,2.2,0,0,1-2.2,2.2h-40.354a2.2,2.2,0,0,1-2.2-2.2Zm-42.971,124.721,39.26-56.708a2.2,2.2,0,0,1,1.692-.945h.114a2.2,2.2,0,0,1,1.667.765l34.558,40.218,1.452,1.684,1.67-1.469,17.282-15.2a2.2,2.2,0,0,1,2.946.035l33.851,31.252a2.2,2.2,0,0,1-1.5,3.813H3681.285a2.2,2.2,0,0,1-1.807-3.448Z" transform="translate(-3672.681 -195.515)"/>
                                            </svg>

                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        <div className={isDrawerOpen?`${Loading?"overflows":""} scroll w-full h-9/12  overflow-x-hidden ${Loading?"overflow-y-hidden":"overflow-y-scroll"}`:`hidden scroll ${Loading?"overflow-y-hidden":"overflow-y-scroll"} overflow-x-hidden w-full h-9/12 `}>
                            <div className="ul  mt-2 ltr  border-b-2 pb-2 w-11/12">
                                
                                
                                <ul className={`${shown == 0 ? "centered":"slideLeft"}  flex h-full flex-col justify-between items-center `}>
                                        
                                {routes.indexOf('subGroup') != -1?
                                        <li className={`${Loading?"skeleton-box":""} text-right text-gray-400 w-full flex flex-row pb-2 justify-end items-center text-sm `}>
                                            <div style={Loading?{opacity:"0"}:{}} className="w-full flex flex-row justify-end items-center">
                                                تصنيفات
                                            </div>
                                        </li>
                                        :""}
                                        
                                        {data&&routes.indexOf('subGroup') != -1?data.categories.map(ele=>
                                             <Link href={`/category/category?pid=${ele.id}`} key={ele.id} >
                                                <li className="w-full flex flex-row-reverse cursor-pointer  text-right pt-2 pb-2 px-3 justify-start items-center text-sm">
                                                    <div className="rounded-full border-2 border-gray-200  ml-2" style={{width:".6rem",height:".6rem"}}></div> {ele.name}
                                                </li>
                                            </Link>
                                        ):""}

                                        <li className={`${Loading?"skeleton-box":""} text-right text-gray-400 w-full flex flex-row pb-2 justify-end items-center text-sm `}>
                                            <div style={Loading?{opacity:"0"}:{}} className="w-full flex flex-row justify-end items-center">
                                                العلامات التجارية
                                            </div>
                                        </li>
                                        {data?data.brands.map(ele=>
                                                <li className="w-full flex flex-row-reverse cursor-pointer  text-right pt-2 pb-2 px-3 justify-start items-center text-sm">
                                                        <input type="checkbox" className="ml-2" name="brands" />  
                                                        <label htmlFor="brands">{ele.name}</label>
                                                </li>
                                            
                                        ):""}
                                        {data&&data.brands.length > 5? 
                                            <li className="w-full flex flex-row-reverse cursor-pointer text-blue-500 text-right pt-2 pb-2 px-3 justify-start items-center text-sm">
                                                    عرض الجميع
                                            </li>
                                            :""
                                        }
                                        <li className={`${Loading?"skeleton-box":""} text-right text-gray-400 w-full flex flex-row pb-2 justify-end items-center text-sm mt-2 `}>
                                            <div style={Loading?{opacity:"0"}:{}} className="w-full flex flex-row justify-end items-center">
                                                الخصائص
                                            </div>
                                        </li>
                                        {data?data.attributes.map(ele=>
                                            <>
                                                <li className={`${Loading?"skeleton-box":""} text-right text-gray-400 w-full flex flex-row  justify-end items-center text-xs mt-2 mr-2 `}>
                                                    <div style={Loading?{opacity:"0"}:{}} className="w-full flex flex-row justify-end items-center">
                                                        {ele.name}
                                                    </div>
                                                </li>                                        
                                                <li className="w-full flex flex-row-reverse cursor-pointer  text-right pt-2 pb-2 px-3 justify-start items-center text-sm">
                                                        {ele.type=='Select'?
                                                            <select name="" id="" dir="rtl" className="w-full border-2 rounded  focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent">
                                                                {ele.values?ele.values.map(eles=>
                                                                        <option key={eles.id} value={eles.value}>{eles.value}</option>
                                                                ):""}
                                                            </select>
                                                            :ele.type=='Color/Pattern'?
                                                                ele.values.map(eles=>
                                                                    <div className="flex flex-row-reverse w-full justify-start items-center flex-wrap">
                                                                        <div className="rounded-full cursor-pointer w-6 h-2" style={{background:`${eles.color}`,border:"1px solid #929292"}}></div>    
                                                                    </div>
                                                                )
                                                                :
                                                                ele.type=="Radio"?
                                                                        ele.values.map(eles=>
                                                                            <div className="rounded px-2" style={{border:"1px solid #929292"}}>
                                                                                {eles.value}
                                                                            </div>
                                                                        )
                                                                    :
                                                                    ""
                                                        }
                                                </li>
                                            </>    
                                        ):""}
                                        <li className={`${Loading?"skeleton-box":""} text-right text-gray-400 w-full flex flex-row  justify-end items-center text-sm mt-2 `}>
                                            <div style={Loading?{opacity:"0"}:{}} className="w-full flex flex-row justify-end items-center">
                                                السعر
                                            </div>
                                        </li>
                                        <li className="w-full flex flex-row-reverse cursor-pointer  text-right  pb-2 px-3 justify-start items-center text-sm">
                                                <select name="" id="" dir="rtl" className="w-full border-2 rounded  focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent mt-2">
                                                    {data?data.ranges.map(eles=>
                                                        <option value="">
                                                            {eles.text}
                                                        </option>
                                                    ):""}
                                                </select>
                                        </li>
                                        <li className="w-full flex flex-row-reverse cursor-pointer  text-right pt-2 pb-2 px-3 justify-start items-center text-sm">
                                            <input type="checkbox" className="ml-2" name="new_arrivals" />  
                                            <label htmlFor="brands">وصل جديدا</label>
                                        </li>
                                        <li className="w-full flex flex-row-reverse cursor-pointer  text-right pt-2 pb-2 px-3 justify-start items-center text-sm">
                                            <input type="checkbox" className="ml-2" name="has_offers" />  
                                            <label htmlFor="brands">عليها عروض</label>
                                        </li>

                                </ul>
                            </div>
                            {/* catss */}
                            
                            {/* <div className="ul  mt-2 ltr">
                                <ul className="flex h-full flex-col justify-between items-center">
                                <li className={`${Loading?"skeleton-box":""} text-right text-gray-400 w-full flex flex-row pb-2 justify-end items-center text-sm `}>
                                        <div style={Loading?{opacity:"0"}:{}} className="w-full flex flex-row justify-end items-center">
                                            اخر زياراتك
                                        </div>
                                </li>
                                {catss.visited_categories.length>0?catss.visited_categories[0].map(ele => 
                                    ele.name!=null?
                                    <li key={ele.id} className="text-gray-600 w-full flex flex-row pb-2 justify-end items-center text-sm text-right">
                                        <Link href={`/category/category?pid=${ele.id}`}>
                                            <div className="flex cursor-pointer flex-row-reverse justify-between items-center">
                                                <img src="/images/lastseen.png" className="w-4 ml-1" alt="" /> {ele.name}
                                            </div>
                                        </Link>
                                    </li>
                            :""
                            ):
                                    <span className="text-xs text-right">هنا يتم عرض اخر زياراتك</span>
                            }
                                </ul>
                            </div> */}
                           
                        
                        </div>
                    </nav>
                </div>
            </div>
            </div>   
        )
}
