import React, { useEffect, useState } from 'react';
import { electron } from 'webpack';
import { useAppDispatch, useAppState } from '../../contexts/app/app.provider';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { route } from 'next/dist/next-server/server/router';
import { withStyles, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';


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
    const [brand,setBrand] = useState([]);
    const [attr,setAttr] = useState([]);
    const [minPrice,setminPrice] = useState(0);
    const [maxPrice,setmaxPrice] = useState(0);
    const [color,setColor] = useState([]);
    const [radio,setRadio] = useState([]);
    const [hasOffers,setHasOffers] = useState(false);
    const [newArrivals,setNewArrivals] = useState(false);
    const [stings,setstings] = useState('');
    const [attrValues,setattrValues] = useState('');
    const router = useRouter()
    const { pid } = router.query;
    const { pids } = router.query;

    const [value, setValue] = React.useState<number | number[]>(1);

    const handleChange = (newValue,types) => {
      
      var priceString  ='';

      if(types == 'min'){
          
        setminPrice(parseInt(newValue))
        priceString = `price_min=${newValue}&price_max=${maxPrice}`;
      }
      if(types == 'max'){
        setmaxPrice(parseInt(newValue))
        priceString = `price_min=${minPrice}&price_max=${newValue}`;
      }
      
      brands= brand;
      attrs = attr;
      Filter(brands,attrs,'price',priceString)
    };

    const handlearrivals = (types) => {
      
        var priceString  = types == 'newss'?'new_arrivals=1':'has_offers=1';
       
        if(types == 'newss'){
            setNewArrivals(!newArrivals)
        }
        else{
            setHasOffers(!hasOffers)
        }
        brands= brand;
        attrs = attr;
        Filter(brands,attrs,'newss',priceString)
      };
   
        useEffect(()=>{
            fetch(`https://amanacart.com/api/filters?${pids?`sub_category=${pids}`:`category=${pid}`}`)
            .then(res => res.json())
            .then(result =>{
              setData(result);
              setmaxPrice(result.price_range.max)
              setminPrice(result.price_range.min)
            })
            .catch(e => {
          });
        },[])
        useEffect(()=>{
            setRoutes(window.location.href)
        })
        const marks = [
            {
                value: data?parseInt(data.price_range.min):0,
                label: `${data?data.price_range.min:0} ر.ع`,
            },
            {
                value: data?parseInt(data.price_range.max):1,
                label: `${data?data.price_range.max:1} ر.ع`,
            },
          ];
        var brands = [];
        var attrs = [];
        var colors = [];
        var radios = [];
        
        var string ='';
        var attrString ='';
        var colorString ='';
        var radioString ='';
        const dispatch = useAppDispatch();

        const setFilter = React.useCallback(() => {
            dispatch({
              type: 'ToggleFiltered'
            });
            }
            ,[dispatch]
          );
          const setFilters = React.useCallback((data) => {
            dispatch({
              type: 'SetFilters',payload:data
            });
            }
            ,[dispatch]
          );
        const addBrand = (type,id?,indexss?) => {
                    if(type=='brand'){
                        brands = brand;
                        attrs= attr;
                        colors = color;
                        radios = radio;
                        var indexs = brands.indexOf(id)

                        if(indexs != -1){
                            brands = brands.filter((item) => item !== id)
                            console.log(brands)
                            setBrand(brands)
                        }
                        else{
                            brands.push(id);
                            setBrand(brands);
                        }
                        Filter(brands,attrs,type)
                    }
                    if(type == 'attr'){
                        brands = brand;
                        attrs= attr;
                        colors = color;
                        radios = radio;
                        
                        attrString = '';
                        var indexs = attrs.indexOf(id)

                        if(indexs != -1){
                            attrs[indexss] = id;
                            setAttr(attrs)
                        }
                        else{
                            attrs[indexss] = id;
                            setAttr(attrs);
                        }

                        Filter(brands,attrs,type,indexss)
                    }
                    if(type == 'price'){
                        attrs= attr;
                        brands = brand;
                        // var price_min = ;
                        // var price_max = ;
                        Filter(brands,attrs,type)
                        
                    }
                    // if(type == 'new'){
                    //     brands = brand;
                    //     attrs= attr;
                    //     let news = !newArrivals;
                    //     if(news){
                    //         Filter(brands,attrs,type,indexss,news)
                    //     }
                    //     else{
                    //         Filter(brands,attrs,type,indexss)
                    //     }

                    // }
            
            
        }
       var newss = '';
    const Filter  = (brands,attrs,type,price?,indexs?,news?) => {
            brands&&brands.length > 0 ?brands.map((ele,index)=>
                {
                    if(string.indexOf(`brands[${indexs}]=${ele}`)==-1){
                        if(index != brands.length-1){
                            string+=`brands[${index}]=${ele}&&`
                        }
                        else{
                            string+=`brands[${index}]=${ele}`
                        }
                    }
                    else{
                        string.replace(`brands[${index}]=${ele}`,'');
                        string.replace(`brands[${index}]=${ele}&&`,'');
                    }
                    
                    
                }
            )
        : ""

        attrs&&attrs.length > 0?attrs.map((ele,index) => {
                
            if(attrString.indexOf(`attr_values[${index}]=${ele}`)==-1){
                if(index != attrs.length-1){
                    attrString+=`attr_values[${index}]=${ele}&&`
                }
                else{
                    attrString+=`attr_values[${index}]=${ele}`
                }
            }
            else{
                attrString.replace(`attr_values[${index}]=${ele}`,'');
                attrString.replace(`attr_values[${index}]=${ele}&&`,'');
            }
            }):""

        
            type=='price'?
              (
                price = price,
                brands.length > 0 ?brands.map((ele,index)=>
                {
                    if(string.indexOf(`brands[${index}]=${ele}`)==-1){
                        if(index != brands.length-1){
                            string+=`brands[${index}]=${ele}&&`
                        }
                        else{
                            string+=`brands[${index}]=${ele}`
                        }
                    }
                    else{
                        string.replace(`brands[${index}]=${ele}`,'');
                        string.replace(`brands[${index}]=${ele}&&`,'');
                    }
                    
                    
                }):"",
                attrs.length > 0?attrs.map((ele,index) => {
                
                    if(index != attrs.length-1){
                        attrString+=`attr_values[${index}]=${ele}&&`
                    }
                    else{
                        attrString+=`attr_values[${index}]=${ele}`
                    }
                })
                :""
              )
              :""
              type=='news'?
              (
                !newArrivals?price = price:price='',
                brands.length > 0 ?brands.map((ele,index)=>
                {
                    if(string.indexOf(`brands[${index}]=${ele}`)==-1){
                        if(index != brands.length-1){
                            string+=`brands[${index}]=${ele}&&`
                        }
                        else{
                            string+=`brands[${index}]=${ele}`
                        }
                    }
                    else{
                        string.replace(`brands[${index}]=${ele}`,'');
                        string.replace(`brands[${index}]=${ele}&&`,'');
                    }
                    
                    
                }):"",
                attrs.length > 0?attrs.map((ele,index) => {
                
                    if(index != attrs.length-1){
                        attrString+=`attr_values[${index}]=${ele}&&`
                    }
                    else{
                        attrString+=`attr_values[${index}]=${ele}`
                    }
                })
                :""
              )
              :""
            
        fetch(`https://amanacart.com/api/${pids?`sub_categories_filters_results/${pids}`:`categories_filters_results/${pid}`}?${string}&&${attrString}&&${price}&&${newss}`)
        .then(res => res.json())
        .then(result =>{
        setFilter()
        setFilters(result.data)
        })
        .catch(e => {
      });
        // amanacart.com/api/sub_categories_filters_results/47
    }
    const iOSBoxShadow =
    '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';
   
    function AirbnbThumbComponent(props: any) {
        return (
          <span {...props}>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </span>
        );
      }
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
                      
                        <div className={isDrawerOpen?`${Loading?"overflows":""} scroll w-full h-11/12  overflow-x-hidden ${Loading?"overflow-y-hidden":"overflow-y-scroll"}`:`hidden scroll ${Loading?"overflow-y-hidden":"overflow-y-scroll"} overflow-x-hidden w-full h-11/12 `}>
                            <div className="ul  mt-2 ltr  border-b-2 pb-2 w-11/12">
                                
                                
                                <ul className={`${shown == 0 ? "centered":"slideLeft"}  flex h-full flex-col justify-between items-start `}>
                                        
                                {routes&&routes.indexOf('subGroup') != -1?
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
                                                <li onClick={()=>addBrand('brand',ele.id,0)} className="w-full flex flex-row-reverse cursor-pointer  text-right pt-2 pb-2 px-3 justify-start items-center text-sm">
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
                                        {data?data.attributes.map((ele,index)=>
                                            <>
                                                <li className={`${Loading?"skeleton-box":""} text-right text-gray-400 w-full flex flex-row  justify-end items-center text-xs mt-2 mr-2 `}>
                                                    <div style={Loading?{opacity:"0"}:{}} className="w-full flex flex-row justify-end items-center">
                                                        {ele.name}
                                                    </div>
                                                </li>                                        
                                                <li className="w-full flex flex-row-reverse flex-wrap cursor-pointer  text-right pt-2 pb-2 px-3 justify-start items-center text-sm">
                                                        {ele.type=='Select'?
                                                            <select onChange={(e)=>addBrand('attr',e.target.value,index)} name="" id="" dir="rtl" className="w-28 border-2 rounded  focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent">
                                                                {ele.values?ele.values.map(eles=>
                                                                        <option key={eles.id} value={eles.id}>{eles.value}</option>
                                                                ):""}
                                                            </select>
                                                            :
                                                            ele.type=='Color/Pattern'?
                                                                ele.values.map(eles=>
                                                                        <div onClick={(e)=>addBrand('attr',eles.id,index)} className="rounded-full mr-1 mt-2 cursor-pointer w-6 h-2" style={{background:`${eles.color}`,border:"1px solid #929292"}}>
                                                                        </div>    
                                                                )
                                                                :
                                                            ele.type=="Radio"?
                                                                    ele.values.map(eles=>
                                                                        <div onClick={(e)=>addBrand('attr',eles.id,index)} className="rounded px-2 mr-1 mt-2" style={{border:"1px solid #929292"}}>
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
                                        <li className={`${Loading?"skeleton-box":""} text-right text-gray-400 w-full flex flex-row  justify-end items-center text-sm mt-2 `}>
                                       
                                        <div className="mt-2 w-36 ">
                                            {/* <Slider
                                                defaultValue={[data?parseInt(data.price_range.min):40, data?parseInt(data.price_range.max):100]}
                                                valueLabelDisplay="on"
                                                aria-labelledby="discrete-slider"
                                                step={30}
                                                onChange={handleChange}
                                                marks={marks}
                                                min={data?parseInt(data.price_range.min):40}
                                                max={data?parseInt(data.price_range.max):100}
                                            /> */}
                                            <div className="flex justify-end items-start w-36">
                                                <div className="flex flex-col mr-2 justify-between items-end">
                                                    <span className="text-xs text-right" dir="rtl">
                                                        إلى
                                                    </span>
                                                    <input type="number" min={minPrice} max={maxPrice} value={maxPrice} onChange={(e)=>handleChange(e.target.value,'max')} className="p-2 w-16 h-6 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-1" style={{border:"1px solid #eee"}} />
                                                </div>
                                                <div className="flex flex-col mr-2 justify-between items-end" >
                                                    <span className="text-xs text-right" dir="rtl">
                                                        من
                                                    </span>
                                                    <input type="number" min={minPrice} max={maxPrice} value={minPrice} onChange={(e)=>handleChange(e.target.value,'min')} className="p-2 w-16 h-6 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-1" style={{border:"1px solid #eee"}} />
                                                </div>
                                            </div>
                                        </div>
                                        </li>
                                        
                                        <li className="w-full flex flex-row-reverse cursor-pointer  text-right pt-2 pb-2 px-3 justify-start items-center text-sm">
                                            <input type="checkbox" onChange={()=>handlearrivals('newss')} className="ml-2" name="new_arrivals" checked={newArrivals?true:false} />  
                                            <label htmlFor="brands">وصل جديدا</label>
                                        </li>
                                        <li className="w-full flex flex-row-reverse cursor-pointer  text-right pt-2 pb-2 px-3 justify-start items-center text-sm">
                                            <input type="checkbox" checked={hasOffers?true:false} onChange={()=>handlearrivals('offers')} className="ml-2" name="has_offers" />  
                                            <label htmlFor="brands">عليها عروض</label>
                                        </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            </div>   
        )
}


// amanacart.com/api/categories_filters_results/47?brands[0]=30&brands[1]=31&price_min=12&price_max=20&attr_values[0]=81


// amanacart.com/api/sub_categories_filters_results/47?brands[0]=30&brands[1]=31&price_min=12&price_max=20&attr_values[0]=81