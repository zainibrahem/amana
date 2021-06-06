import React, { useEffect, useState } from 'react';
import { electron } from 'webpack';
import { useAppDispatch, useAppState } from '../../contexts/app/app.provider';
import Link from 'next/link'

    export default function SideBar (props) {

    const isDrawerOpen = useAppState('isDrawerOpen');
    const Loading = useAppState('Loading');
    const [shown,setShown] = useState(0);
    const [catss,setCatss] = useState(null);
    const [type,setType]=useState('home');
    const Route = useAppState('Route');
    // const [data,setData] = useState();
    // const [userId,setUserId] = useState(0);
    // const dispatch = useAppDispatch();

        useEffect(()=>{
            setCatss(props.cats);
            if(window.location.href.includes('categories')){
                setType('categories');
            }
        },[])
  

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
        catss?
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
                            <a href="/">
                                    <div style={Loading?{opacity:"0"}:{}} className={`w-full flex text-yellow-500 ${isDrawerOpen?"flex-row justify-end items-center":"flex-col-reverse justify-center items-center"}  `}>
                                        {isDrawerOpen?
                                            "الصفحة الرئيسية":"الرئيسية"
                                        }
                                        <svg className={isDrawerOpen?"ml-3 w-5":"w-5"}  xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="rgb(245, 158, 11,1)"/>
                                        </svg>
                                    </div>
                            </a>
                                </li>
                                <li className={isDrawerOpen?`cursor-pointer pt-2 pb-2  w-full flex flex-row justify-end items-center ${Loading?"skeleton-box mt-1":""}`:`pt-2 text-xs small-hover pb-2 w-full flex flex-col-reverse justify-center items-center cursor-pointer ${Loading?"skeleton-box mt-1":""}`}>
                                <div style={Loading?{opacity:"0"}:{}} className={`w-full flex ${isDrawerOpen?"flex-row justify-end items-center":"flex-col-reverse justify-center items-center"}  `}>
                                        استكشاف
                                        <svg className={isDrawerOpen?"ml-3 w-5":"w-5"} xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 149.824 145.112">
                                            <path id="Path_11747" data-name="Path 11747" d="M3677.091,340.627H3818.1a4.4,4.4,0,0,0,2.981-7.625l-40.892-37.755-1.454-1.341-1.487,1.306-16.92,14.876a2.195,2.195,0,0,1-1.452.55l-.153,0a2.225,2.225,0,0,1-1.517-.761l-34.226-39.831a2.2,2.2,0,0,1-.531-1.434v-7a2.2,2.2,0,0,1,2.2-2.2H3765a2.2,2.2,0,0,1,2.2,2.2v2.326a11.006,11.006,0,0,0,11,10.993h42.052l-2.507-3.483-20.206-28.081a2.193,2.193,0,0,1,0-2.568l20.206-28.086,2.507-3.483h-47.623a2.2,2.2,0,0,1-2-1.293,11.029,11.029,0,0,0-10.021-6.468h-35.957a2.2,2.2,0,0,1-2.2-2.2v-1.552a2.2,2.2,0,0,0-4.4,0v70.933a2.2,2.2,0,0,1-.392,1.253l-44.184,63.827a4.4,4.4,0,0,0,3.614,6.9Zm94.507-79.02V215.822a2.2,2.2,0,0,1,2.2-2.2h33.578a2.2,2.2,0,0,1,1.785,3.483l-17.04,23.684-.928,1.288.928,1.28,17.04,23.688a2.2,2.2,0,0,1-1.785,3.483H3778.2a6.6,6.6,0,0,1-6.6-6.6Zm-49.148-53.546a2.2,2.2,0,0,1,2.2-2.2H3760.6a6.6,6.6,0,0,1,6.6,6.6v40.354a2.2,2.2,0,0,1-2.2,2.2h-40.354a2.2,2.2,0,0,1-2.2-2.2Zm-42.971,124.721,39.26-56.708a2.2,2.2,0,0,1,1.692-.945h.114a2.2,2.2,0,0,1,1.667.765l34.558,40.218,1.452,1.684,1.67-1.469,17.282-15.2a2.2,2.2,0,0,1,2.946.035l33.851,31.252a2.2,2.2,0,0,1-1.5,3.813H3681.285a2.2,2.2,0,0,1-1.807-3.448Z" transform="translate(-3672.681 -195.515)"/>
                                        </svg>

                                    </div>
                                </li>
                                {/* <li className="w-full flex flex-row justify-end items-center">
                                    <input type="text"  className="w-full bg-gray-300 rounded" name="" id="" />
                                </li>    */}
                                {isDrawerOpen?
                                "":(
                                <li className={isDrawerOpen?`pt-2 pb-2 cursor-pointer  w-full flex flex-row justify-end items-center ${Loading?"skeleton-box mt-1":""}`:`pt-2 text-xs cursor-pointer small-hover pb-2 w-full flex flex-col-reverse justify-center items-center ${Loading?"skeleton-box mt-1":""}`}>
                                    <div style={Loading?{opacity:"0"}:{}} className={`w-full flex ${isDrawerOpen?"flex-row justify-end items-center":"flex-col-reverse justify-center items-center"}  `}>

                                        التصنيفات
                                        <svg className={isDrawerOpen?"ml-3 w-5":"w-5"} xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </div>
                                </li>
                                )
                                }
                                    {isDrawerOpen?
                                "":(
                                <li className={isDrawerOpen?`pt-2 cursor-pointer pb-2  w-full flex flex-row justify-end items-center ${Loading?"skeleton-box mt-1":""}`:`pt-2 cursor-pointer text-xs small-hover pb-2 w-full flex flex-col-reverse justify-center items-center ${Loading?"skeleton-box mt-1":""}`}>
                                    <div style={Loading?{opacity:"0"}:{}} className={`w-full flex ${isDrawerOpen?"flex-row justify-end items-center":"flex-col-reverse justify-center items-center"}  `}>
                                            التصنيفات
                                        <svg className={isDrawerOpen?"ml-3 w-5":"w-5"} xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </div>
                                </li>
                                )
                                }
                            </ul>
                            

                        {/* filter sidebar */}
                        
                        {/* <div className={isDrawerOpen?`${Loading?"overflows":""}  w-full h-9/12  `:`hidden   w-full h-9/12 `}>
                                <div className="ul  mt-2 ltr  border-b-2 pb-2 w-11/12">
                                    <ul className={`${shown == 0 ? "centered":"slideLeft"}  flex h-full flex-col justify-between items-center `}>
                                            <li className={`${Loading?"skeleton-box":""} text-gray-400 w-full flex flex-row pb-2 justify-end items-center text-sm `}>
                                            <div style={Loading?{opacity:"0"}:{}} className="w-full flex flex-row justify-end items-center">
                                                تصنيفات
                                            </div>
                                            </li>
                                                {catss.categories_groups.map(ele => 
                                                <li key={ele.id} onClick={()=>setShown(ele.id)} className={`${Loading?"skeleton-box mt-1":""} cursor-pointer w-full flex flex-row pt-2 pb-2 px-3 justify-end items-center text-sm hover-side`}>
                                                    <div style={Loading?{opacity:"0"}:{}} className="w-full flex flex-row justify-end items-center">
                                                        {ele.name}
                                                        <img className="w-5 ml-2" src={ele.icon} alt="" />
                                                    </div>
                                                </li>
                                            )}
                                    </ul>
                                
                                {catss.categories_groups.map(ele => 
                                <ul key={ele.id} className={`${shown==ele.id? "slidesright":"slidesleft"} flex h-full flex-col justify-between items-center`}>
                                        <li className="text-gray-400  cursor-pointer w-full flex flex-row pb-2 justify-end items-center text-sm">
                                            الكترونيات
                                            <div className="rounded-full w-6 h-4 ml-2 cursor-pointer" onClick={()=> setShown(0)} style={{background:"url('./images/right-arrow.svg')",backgroundSize:"cover",backgroundPosition:"center"}}></div>
                                        </li>
                                        {ele.sub_groups.map(sub =>
                                        <li onClick={toggleAccordoin} className="overflow-hidden  duration-1000 transition-all cursor-pointer w-full flex flex-col pt-2 pb-2 px-3 justify-start items-center text-sm hover-side items">
                                            <div className="flex justify-end items-center w-full">
                                                    {sub.name}
                                                <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                                    <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                                </svg>
                                            </div>
                                            <div className="content w-full hidden">
                                                <ul className="flex h-full flex-col justify-between items-center">
                                                    {sub.categories.map(secSub => 
                                                        <li className="w-full flex flex-col pt-2 pb-2 px-3 justify-end items-center text-sm">
                                                            {secSub.name}
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>
                                        </li>
                                    )}
                                        </ul>
                                )}

                                </div>
                        </div> */}
                            
                        {/* filter sidebar */}

                        <div className={isDrawerOpen?`${Loading?"overflows":""} scroll w-full h-9/12  overflow-x-hidden ${Loading?"overflow-y-hidden":"overflow-y-scroll"}`:`hidden scroll ${Loading?"overflow-y-hidden":"overflow-y-scroll"} overflow-x-hidden w-full h-9/12 `}>
                            <div className="ul  mt-2 ltr  border-b-2 pb-2 w-11/12">
                                
                                
                                <ul className={`${shown == 0 ? "centered":"slideLeft"}  flex h-full flex-col justify-between items-center `}>
                                        <li className={`${Loading?"skeleton-box":""} text-gray-400 w-full flex flex-row pb-2 justify-end items-center text-sm `}>
                                        <div style={Loading?{opacity:"0"}:{}} className="w-full flex flex-row justify-end items-center">
                                            تصنيفات
                                        </div>
                                        </li>
                                            {catss.categories_groups.map(ele => 
                                            <li key={ele.id} onClick={()=>setShown(ele.id)} className={`${Loading?"skeleton-box mt-1":""} cursor-pointer w-full flex flex-row pt-2 pb-2 px-3 justify-end items-center text-sm hover-side`}>
                                                <div style={Loading?{opacity:"0"}:{}} className="w-full flex flex-row justify-end items-center">
                                                    {ele.name}
                                                    <img className="w-5 ml-2" src={ele.icon} alt="" />
                                                </div>
                                            </li>
                                        )}
                                </ul>
                              
                            {catss.categories_groups.map(ele => 
                            <ul key={ele.id} className={`${shown==ele.id? "slidesright":"slidesleft"} flex h-full flex-col justify-between items-center`}>
                                    <li className="text-gray-400  cursor-pointer w-full flex flex-row pb-2 justify-end items-center text-sm">
                                        <Link href={`/categories/categories?pids=${ele.id}`}>
                                                {ele.name}
                                        </Link>
                                        <div className="rounded-full w-6 h-4 ml-2 cursor-pointer" onClick={()=> setShown(0)} style={{background:`url(${Route}/images/right-arrow.svg)`,backgroundSize:"cover",backgroundPosition:"center"}}></div>
                                    </li>
                                     {ele.sub_groups.map(sub =>
                                     <li onClick={toggleAccordoin} className="overflow-hidden  duration-1000 transition-all cursor-pointer w-full flex flex-col pt-2 pb-2 px-3 justify-start items-center text-sm hover-side items">
                                        <div className="flex justify-end items-center w-full">
                                                {sub.name}
                                            <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                                <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                            </svg>
                                        </div>
                                        <div className="content w-full hidden">
                                            <ul className="flex h-full flex-col justify-between items-center">
                                                {sub.categories.map(secSub => 
                                                    <Link href={`/category/category?pid=${secSub.id}`} key={secSub.id}>
                                                        <li className="w-full flex flex-col pt-2 pb-2 px-3 justify-end items-center text-sm">
                                                            {secSub.name}
                                                        </li>
                                                    </Link>
                                                )}
                                            </ul>
                                        </div>
                                    </li>
                                   )}
                                    </ul>
                            )}

                            </div>
                            <div className="ul  mt-2 ltr">
                                <ul className="flex h-full flex-col justify-between items-center">
                                    <li className="text-gray-400 w-full flex flex-row pb-2 justify-end items-center text-sm">
                                        تصنيفات
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* {shown?
                        <div className="hovered bg-white px-6 py-6 shadow rounded  absolute right-56 2xl:right-80 2xl:h-5/12 top-1/2 transform -translate-y-1/2 z-50" style={{width:"70vw"}}>
                        
                            <div className="grid grid-cols-12  h-full  2xl:top-1/2 2xl:relative 2xl:transform 2xl:-translate-y-1/2">
                                <div className="col-span-4 flex flex-col justify-between items-center ">
                                    <div className="flex flex-col justify-between items-center w-full ">
                                        <span className="text-sm 2xl:text-lg w-full text-right text-yellow-500">أفضل العلامات التجارية</span>
                                        <div className="grid grid-cols-12 w-full mt-4 gap-1">
                                            <div className="col-span-1"></div>
                                            <div className="col-span-5 flex flex-col justify-between items-center">
                                                <div style={{background:"url('./images/brands/ssssss.png')",backgroundPosition:"center",backgroundSize:"cover"}} className="w-full h-20 mt-1 rounded border-2"></div>
                                                <div style={{background:"url('./images/brands/ssssss.png')",backgroundPosition:"center",backgroundSize:"cover"}} className="w-full h-20 mt-1 rounded border-2"></div>
                                                <div style={{background:"url('./images/brands/ssssss.png')",backgroundPosition:"center",backgroundSize:"cover"}} className="w-full h-20 mt-1 rounded border-2"></div>
                                                <div style={{background:"url('./images/brands/ssssss.png')",backgroundPosition:"center",backgroundSize:"cover"}} className="w-full h-20 mt-1 rounded border-2"></div>
                                            </div>
                                            <div className="col-span-5 flex flex-col justify-between items-center">
                                                <div style={{background:"url('./images/brands/ssssss.png')",backgroundPosition:"center",backgroundSize:"cover"}} className="w-full h-20 mt-1 rounded border-2"></div>
                                                <div style={{background:"url('./images/brands/ssssss.png')",backgroundPosition:"center",backgroundSize:"cover"}} className="w-full h-20 mt-1 rounded border-2"></div>
                                                <div style={{background:"url('./images/brands/ssssss.png')",backgroundPosition:"center",backgroundSize:"cover"}} className="w-full h-20 mt-1 rounded border-2"></div>
                                                <div style={{background:"url('./images/brands/ssssss.png')",backgroundPosition:"center",backgroundSize:"cover"}} className="w-full h-20 mt-1 rounded border-2"></div>
                                            </div>
                                            <div className="col-span-1"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2  flex flex-col justify-between items-end">
                                    <div className="flex flex-col justify-between items-center">
                                        <span className="text-sm 2xl:text-lg w-full text-right text-yellow-500">الاهتمامات السابقة</span>
                                        <ul className="flex flex-col mt-3 w-full pr-3 justify-between items-end list-none">
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col justify-between items-end">
                                        <span className="text-sm 2xl:text-lg w-full text-right text-yellow-500">الاهتمامات السابقة</span>
                                        <ul className="flex flex-col mt-3 w-full pr-3 justify-between items-end list-none">
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-span-3  flex flex-col justify-between items-end">
                                <div className="flex flex-col justify-between items-center">
                                        <span className="text-sm 2xl:text-lg w-full text-right text-yellow-500">الاهتمامات السابقة</span>
                                        <ul className="flex flex-col mt-3 w-full pr-3 justify-between items-end list-none">
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col justify-between items-center">
                                        <span className="text-sm 2xl:text-lg w-full text-right text-yellow-500">الاهتمامات السابقة</span>
                                        <ul className="flex flex-col mt-3 w-full pr-3 justify-between items-end list-none">
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-span-3 flex flex-col justify-between items-end">
                                <div className="flex flex-col justify-between items-center">
                                        <span className="text-sm 2xl:text-lg w-full text-right text-yellow-500">الاهتمامات السابقة</span>
                                        <ul className="flex flex-col mt-3 w-full pr-3 justify-between items-end list-none">
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col justify-between items-center">
                                        <span className="text-sm 2xl:text-lg w-full text-right text-yellow-500">الاهتمامات السابقة</span>
                                        <ul className="flex flex-col mt-3 w-full pr-3 justify-between items-end list-none">
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :""} */}
                    </nav>
                </div>
            </div>
            </div>   
        :
        <>
        </>
        )
}
