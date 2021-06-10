import React, { useEffect, useState } from "react";
import { useAppState } from "../../contexts/app/app.provider";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination, Scrollbar } from 'swiper/core';
import { Title } from "../title/title";

export default function Discover (props) {
    const [sort,setSort] = useState();
    const [acc,setAcc] = useState([0]);
    
    const toggleSort = (e) =>{
        setSort(e);
    }

    const toggleAcc = (e) =>{
        if(e.currentTarget.nextSibling.classList.contains('h-auto')){
            e.currentTarget.nextSibling.classList.remove('h-auto');
            e.currentTarget.nextSibling.classList.add('h-0');
            e.currentTarget.nextSibling.classList.remove('pb-5');
        }
        else{
            e.currentTarget.nextSibling.classList.add('h-auto');
            e.currentTarget.nextSibling.classList.add('pb-5');
        }
        

        //  
            // if(acc.includes(e)){
            //     const newList = acc.filter((item) => item !== e);
            //     setAcc(newList);
            //     console.log(acc);
            // }
            // else{
            //     if(acc.length!=0){
            //         setAcc(acc => [...acc, e]);

            //     }
            //     else{
            //         setAcc([e])
            //     }
            // }
            
    }
    useEffect(()=>{
        if(props.data && props.data.length > 0){
            for(var i = 0 ; i < props.data.length ; i ++){
                    setAcc(acc => [...acc,i+1]);
            }
            console.log(acc);
            console.log(props.data);
        }
    },[props.data])
    return(
        <div className="mt-4">
            <Title title="اكتشف كل التصنيفات"></Title>
            <div className="grid grid-cols-12 mt-5">
                <div className="col-span-11">
                    <div className="grid grid-cols-12 w-full">
                        <div className="col-span-12 order-1 mt-2 md:mt-0 justify-between md:order-0 md:col-span-6 flex flex-row-reverse md:justify-around items-center relative">
                            <span className="text-sm px-2 py-1 bg-gray-300 font-bold cursor-pointer ">عرض الكل</span>
                            <span className="text-sm px-2 py-1 font-bold sort">ترتيب
                            </span>
                            <ul className="w-auto bg-white shadow py-0 shows overflow-hidden transition-all duration-500 absolute z-20 left-0 bottom-0 transform translate-y-full">
                                <li onClick={()=>toggleSort('newest')} className="text-xs cursor-pointer text-right my-1 py-2 px-4 hover:bg-gray-300" >الأحدث للأقدم</li>
                                <li onClick={()=>toggleSort('oldest')} className="text-xs text-right cursor-pointer my-1 py-2 px-4 hover:bg-gray-300" >الأقدم للأحدث</li>
                                <li onClick={()=>toggleSort('price_acs')} className="text-xs text-right cursor-pointer my-1 py-2 px-4 hover:bg-gray-300" >الأعلى سعرا للأقل سعرا</li>
                                <li onClick={()=>toggleSort('price_desc')} className="text-xs text-right cursor-pointer my-1 py-2 px-4 hover:bg-gray-300" >الأقل سعرا للأعلى سعرا</li>
                            </ul>
                        </div>
                        <div className="col-span-12 md:col-span-6 order-0 md:order-1">
                            <div className="flex flex-row-reverse flex-wrap justify-between items-center w-full">
                            {/* px-2 bg-yellow-500 font-bold*/}
                                <span className="text-xs cursor-pointer py-1  bg-opacity-75 rounded">ا</span>
                                <span className="text-xs cursor-pointer p-1">ب</span>
                                <span className="text-xs cursor-pointer p-1">ت</span>
                                <span className="text-xs cursor-pointer p-1">ث</span>
                                <span className="text-xs cursor-pointer p-1">ج</span>
                                <span className="text-xs cursor-pointer p-1">ح</span>
                                <span className="text-xs cursor-pointer p-1">خ</span>
                                <span className="text-xs cursor-pointer p-1">د</span>
                                <span className="text-xs cursor-pointer p-1">ذ</span>
                                <span className="text-xs cursor-pointer p-1">ر</span>
                                <span className="text-xs cursor-pointer p-1">ز</span>
                                <span className="text-xs cursor-pointer p-1">س</span>
                                <span className="text-xs cursor-pointer p-1">ش</span>
                                <span className="text-xs cursor-pointer p-1">ص</span>
                                <span className="text-xs cursor-pointer p-1">ض</span>
                                <span className="text-xs cursor-pointer p-1">ط</span>
                                <span className="text-xs cursor-pointer p-1">ظ</span>
                                <span className="text-xs cursor-pointer p-1">ع</span>
                                <span className="text-xs cursor-pointer p-1">غ</span>
                                <span className="text-xs cursor-pointer p-1">ف</span>
                                <span className="text-xs cursor-pointer p-1">ق</span>
                                <span className="text-xs cursor-pointer p-1">ك</span>
                                <span className="text-xs cursor-pointer p-1">ل</span>
                                <span className="text-xs cursor-pointer p-1">م</span>
                                <span className="text-xs cursor-pointer p-1">ن</span>
                                <span className="text-xs cursor-pointer p-1">ه</span>
                                <span className="text-xs cursor-pointer p-1">و</span>
                                <span className="text-xs cursor-pointer p-1">ي</span>
                                <span className="text-xs cursor-pointer p-1">ه</span>
                                <span className="text-xs cursor-pointer p-1">ئ</span>
                            </div>
                        </div>
                        <div className="col-span-12 order-3 mt-7">
                            {props.data? props.data.map((ele,index)=>
                                <div className="flex flex-col justify-center items-center w-full">
                                    <div  onClick={toggleAcc} className="cursor-pointer flex flex-row-reverse justify-start items-center mb-3 w-full">
                                        <span className="text-md font-bold text-yellow-500 text-right">
                                            {ele.name}
                                        </span>
                                    </div>
                                        <div className={`transition-all h-auto pb-5 duration-500 overflow-hidden flex flex-row-reverse justify-between items-center flex-wrap w-full  border-b-2`}>
                                        {ele.sub_groups?ele.sub_groups.map(ele1=>
                                            <span className="w-1/3 text-right mt-1 text-black" >{ele1.name}
                                                <div className={`w-full  flex flex-col justify-between items-center `}>
                                                    {ele1.categories?ele1.categories.map(ele2=>{
                                                        <span className="w-full text-right text-xs text-black p-2">{ele2.name}</span>
                                                    }) :""}
                                                </div>
                                            </span>
                                        ) :""}
                                    </div>
                                </div>
                            ):""}
                        </div>
                        </div>
                </div>
                <div className="col-span-1"></div>
              
            </div>
        </div>
    );

}