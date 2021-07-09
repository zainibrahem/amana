import React, { useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination, Scrollbar } from 'swiper/core';
import { useAppState, useAppDispatch } from '../../contexts/app/app.provider';
import Slider from '../../components/slider/slider';
import SearchBar from '../../components/seachbar/searchBar';
import Banners from '../../components/banners/banners';
import Categories from '../../components/categories/categories';
import Card from '../../components/card/card';
import Deal from '../../components/deal/deal';
import Specials from '../../components/specials/specials';
import Cat from '../../components/cat/cat';
import Proposals from '../../components/proposals/proposals';
import { Waypoint } from 'react-waypoint';
import AllCatsSlider from '../../components/allcatsSlider/allCatsSlider';
import Discover from '../../components/discover/discover';
export default function Orders() {
    interface Data {
        id:""
        reason:""
        status:""
        updated_at:""
        shop:Shop
        order_details:Order
    }
    interface Order{
        order_number:""
        order_status:""
        payment_status:""
        grand_total:""
        items:Item[]
        order_date:""
        id:""
    }
    interface Item{
        name:""
        quantity :""
        price:""
    }
    interface Shop{
        name:""
    }
    const [data,setData] = useState<Data[]>();
    useEffect(() => {
        fetch(`https://amanacart.com/api/disputes`,{
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }})
         .then(res => res.json())
         .then(result =>{
            setData(result.data)
         })
         .catch(e => {
       });
     },[])
    return (
        <div className="grid grid-cols-10 gap-2 mt-12" dir="rtl">
            <div className="col-span-10 bg-white rounded shadow p-3">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <span className="text-lg">
                            المرجعات
                        </span>
                    </div>
                    {data?data.map(ele=>
                         <div key={ele.id} className="col-span-12 mt-4 border-b-2 pb-5">
                         <div className="grid grid-cols-12 gap-4">
                             <div className="col-span-12 lg:col-span-6">
                                 <div className="bg-gray-100 rounded p-2 flex flex-col justify-between items-start shadow">
                                     <div className="flex w-full justify-between items-center">
                                         <div className="text-sm font-bold w-full flex justify-between items-center">
                                             <div className="flex w-1/3 justify-start items-center">
                                                 الطلب: <span className="text-blue-500 mr-2" dir="rtl"> <a href={`/dashboard/payment/payment?pid=${ele.order_details.id}`}> {ele.order_details.order_number}  </a></span>
                                             </div>
                                             <div className="flex w-1/3 justify-center items-center">
                                                 مجمل الطلب: <span  className="text-blue-500 mr-2"> {ele.order_details.grand_total} </span>
                                             </div>
                                         </div>
                                     </div>
                                     <div className="flex w-full  justify-between items-start mt-2">
                                         <div className="flex flex-col">
                                             <div className="flex text-sm font-bold justify-between items-center mt-2">
                                                 تاريخ الطلب :   <span className="text-blue-500 text-xs mr-2" dir="rtl"> {ele.order_details.order_date}</span>
                                             </div>
                                             <div className="flex text-sm justify-between items-center font-bold mt-2">
                                                 المتجر : <span className="text-blue-500 text-xs mr-2">{ele.shop.name}</span>
                                             </div>
                                             <div className="flex text-sm justify-between items-center font-bold mt-2">
                                                 الحالة : <span className="text-white bg-green-500 px-2  rounded text-xs mr-2">{ele.status} </span>
                                             </div>
                                         </div>
                                         <div className="w-1/3 flex flex-col justify-between items-center">
                                             <a href={`/dashboard/payment/payment?pid=${ele.order_details.id}`}>
                                                <span className="bg-blue-500 text-xs px-2 rounded mt-2 text-white">
                                                    تفاصيل الطلب
                                                </span>
                                             </a>
                                             <span className="bg-blue-500 text-xs px-2 rounded mt-2 text-white">
                                                 تفاصيل الطلب
                                             </span>
                                         </div>
                                     </div>
                                  
 
                                 </div>
                             </div>
                             <div className="col-span-12 lg:col-span-6 flex justify-between items-center ">
                                 <div className="w-2/3">
                                     <div className="flex flex-col justify-between items-center">
                                         <div className="flex justify-between items-center">
                                             <div className="w-20 lg:w-12 h-14 bg-gray-300 rounded-full border-2 border-yellow-500"></div>
                                             <div className="flex flex-col justify-between items-start mr-2">
                                                 <span className="text-sm font-bold">
                                                     اسم المنتج الأول الذي سيتم إرجاعه
                                                 </span>
                                                 <span className="text-xs text-right mt-2">
                                                     $398 x 2
                                                 </span>
                                             </div>
                                         </div>
                                         <div className="flex mt-4 justify-between items-center">
                                             <div className="w-20 lg:w-12 h-14 bg-gray-300 rounded-full border-2 border-yellow-500"></div>
                                             <div className="flex flex-col justify-between items-start mr-2">
                                                 <span className="text-sm font-bold">
                                                     اسم المنتج الأول الذي سيتم إرجاعه
                                                 </span>
                                                 <span className="text-xs text-right mt-2">
                                                     $398 x 2
                                                 </span>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                 <div className="w-1/3 flex flex-col justify-center h-full items-center">
                                    <a href={`/dashboard/dispute/dispute?pid=${ele.id}`}>
                                        <span className="text-xs text-white bg-blue-500 px-2 text-center rounded py-1">
                                            تفاصيل عملية الإرجاع
                                        </span>
                                     </a>
                                     <span className="text-xs text-white bg-yellow-500 px-2 text-center rounded py-1 mt-2">
                                         تفاصيل عملية الإرجاع
                                     </span>
                                 </div>
                             </div>
                         </div>
                     </div>
                    ):""}
                   
                </div>
            </div>
        </div>
           
    );
}