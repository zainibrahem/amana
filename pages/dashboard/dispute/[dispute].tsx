import React, { useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination, Scrollbar } from 'swiper/core';
import { useAppState, useAppDispatch } from '../../../contexts/app/app.provider';
import Slider from '../../../components/slider/slider';
import SearchBar from '../../../components/seachbar/searchBar';
import Banners from '../../../components/banners/banners';
import Categories from '../../../components/categories/categories';
import Card from '../../../components/card/card';
import Deal from '../../../components/deal/deal';
import Specials from '../../../components/specials/specials';
import Cat from '../../../components/cat/cat';
import Proposals from '../../../components/proposals/proposals';
import { Waypoint } from 'react-waypoint';
import AllCatsSlider from '../../../components/allcatsSlider/allCatsSlider';
import Discover from '../../../components/discover/discover';
import { useRouter } from 'next/router';
export default function Orders() {
    interface Item{

    }
    interface Shop{
        cover_image:""
        image:""
        member_since:""
        name:""
        rating:""
        verified_text:""
    }
    interface Order{
        grand_total:""
        grand_total_raw:""
        id:""
        items:Item[]
        message_to_customer:""
        order_date:""
        order_number:""
        order_status:""
        payment_status:""
        shop:Shop
        tracking_id:""
        tracking_url:""
      
    }
    interface Reply{

    }
    interface Data {
        id:""
        order_details:Order
        progress:""
        description:""
        reason:""
        replies:Reply[]
        return_goods:""
        shop:Shop
        status:string
        updated_at:""
    }
    const router = useRouter()
    const { pid } = router.query;
    async function postData() {
       const response = await fetch(`https://amanacart.com/api/dispute/${data?data.id:""}/solved`, {
           method: 'PUT', // *GET, POST, PUT, DELETE, etc.
           headers: {
           'Authorization' : `Bearer ${localStorage.getItem('token')}`,
           },
       });
       return response.json(); // parses JSON response into native JavaScript objects
    }
    const solved = () => {
        postData()
        .then(data => {
          console.log('data'); // JSON data parsed by `data.json()` call
          console.log(data); // JSON data parsed by `data.json()` call
          window.location.reload();
        });
    }
    const [data,setData] = useState<Data>()
    useEffect(() => {
        console.log('asdasd');
        fetch(`https://amanacart.com/api/dispute/${pid}`,{
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }})
         .then(res => res.json())
         .then(result =>{
            console.log(result);
            setData(result.data);
         })
         .catch(e => {
           console.log(e);
       });
     },[pid])
    return (
        <div className="grid grid-cols-12 gap-2 mt-6" dir="rtl">
            <div className="col-span-4 bg-white shadow rounded flex flex-col justify-between items-start ">
                <img src="/images/signinback.png" className="w-full" alt="" />
                <span className="text-sm font-bold p-4">
                    كيف يمكنك فتح بطاقة نزاع
                </span>
                <p className="text-xs p-4">
                    الخطوة الأولى :
                    <br />
                    يجب عليك ان تقوم بتقديم طلب فتح بطاقة نزاع
                    <br />
                    الخطوة الأولى :
                    <br />
                    يجب عليك ان تقوم بتقديم طلب فتح بطاقة نزاع
                    <br />
                    الخطوة الأولى :
                    <br />
                    يجب عليك ان تقوم بتقديم طلب فتح بطاقة نزاع
                    <br />
                    الخطوة الأولى :
                    <br />
                    يجب عليك ان تقوم بتقديم طلب فتح بطاقة نزاع
                </p>
            </div>
            <div className="col-span-8 bg-white shadow rounded p-4">
                <span className="text-lg w-full">
                    تفاصيل النزاع
                </span>
                <div className="w-full mt-12 mb-6">
                    <div className="w-11/12 bg-yellow-500 rounded relative" style={{height:"2px"}}>
                        <div className="flex justify-center items-center rounded-full w-8 h-6 bg-yellow-500 absolute right-0 top-1/2 transform -translate-y-1/2">
                            <span className="text-white text-xs font-bold">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14.712" height="10.513" viewBox="0 0 14.712 10.513">
                                    <path id="Path_293" data-name="Path 293" d="M1187.471,717.879l4.9,4.833,8.407-8.4" transform="translate(-1186.769 -713.608)" fill="none" stroke="#fff" stroke-width="2"/>
                                </svg>
                            </span>
                            <span className="text-xs absolute w-24 transform text-center translate-y-full mt-4">
                                فتح نزاع
                            </span>
                        </div>
                        <div className="flex justify-center items-center rounded-full w-8 h-6 bg-yellow-500 absolute right-1/4 top-1/2 transform -translate-y-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14.712" height="10.513" viewBox="0 0 14.712 10.513">
                                <path id="Path_293" data-name="Path 293" d="M1187.471,717.879l4.9,4.833,8.407-8.4" transform="translate(-1186.769 -713.608)" fill="none" stroke="#fff" stroke-width="2"/>
                            </svg>
                            <span className="text-xs absolute w-24 transform text-center translate-y-full mt-4">
                                فتح نزاع
                            </span>
                        </div>
                        <div className="flex justify-center items-center rounded-full w-8 h-6 bg-yellow-500 absolute right-1/2 top-1/2 transform -translate-y-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14.712" height="10.513" viewBox="0 0 14.712 10.513">
                                <path id="Path_293" data-name="Path 293" d="M1187.471,717.879l4.9,4.833,8.407-8.4" transform="translate(-1186.769 -713.608)" fill="none" stroke="#fff" stroke-width="2"/>
                            </svg>
                            <span className="text-xs absolute w-24 transform text-center translate-y-full mt-4">
                                فتح نزاع
                            </span>
                        </div>
                        <div className="flex justify-center items-center rounded-full w-8 h-6 bg-yellow-500 absolute right-3/4 top-1/2 transform -translate-y-1/2">
                            <span className="text-white text-xs font-bold">4</span>
                            <span className="text-xs absolute w-24 transform text-center translate-y-full mt-4">
                                فتح نزاع
                            </span>
                        </div>
                        <div className="flex justify-center items-center rounded-full w-8 h-6 border-dashed border-2 border-yellow-500 absolute right-full top-1/2 transform -translate-y-1/2">
                            <span className="text-yellow-500 text-xs font-bold">5</span>
                            <span className="text-xs absolute w-24 transform text-center translate-y-full mt-4">
                                فتح نزاع
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-gray-100 p-5 mt-16 shadow">
                    <div className="grid grid-cols-12">
                        <div className="col-span-4 flex flex-col justify-between items-start">
                            <span className="text-sm font-bold text-gray-700">
                                رقم الطلب : <span className="text-blue-500 numbers text-xs" style={{fontWeight:"bold"}}>
                                <a href={`/dashboard/payment/payment?pid=${data?data.order_details.id:""}`}>
                                    {data?data.order_details.order_number:""}
                                    </a>
                                </span>
                            </span>
                            <span className="text-sm font-bold text-gray-700 mt-2">
                                تاريخ الطلب : <span className="text-blue-500 text-xs" style={{fontWeight:"bold"}}>
                                    {data?data.order_details.order_date:""}
                                </span>
                            </span>
                            <span className="text-sm font-bold text-gray-700 mt-2">
                                المتجر : <span className="text-blue-500 text-xs" style={{fontWeight:"bold"}}>
                                    {data?data.order_details.shop.name:""}
                                </span>
                            </span>
                            <span className="text-sm font-bold text-gray-700 mt-2">
                                الحالة : 
                                <span className="bg-green-300 text-xs mr-1 text-white px-2 rounded">
                                    {data?data.status:""}
                                </span>
                            </span>
                        </div>
                        <div className="col-span-4 flex flex-col justify-between items-start">
                            <span className="text-sm font-bold text-gray-700">
                                كمية الطلب : <span className="text-blue-500 numbers text-xs" style={{fontWeight:"bold"}}>
                                    {data?data.order_details.grand_total_raw:""}
                                </span>
                            </span>
                            <span className="text-sm font-bold text-gray-700 mt-2">
                                إعادة المنتجات : <span className="text-blue-500 text-xs" style={{fontWeight:"bold"}}>
                                    {data&&data.return_goods?"لا":"نعم"}
                                </span>
                            </span>
                            <span className="text-sm font-bold text-gray-700 mt-2">
                                إعادة المنتجات : <span className="text-blue-500 text-xs" style={{fontWeight:"bold"}}>
                                    {data&&data.return_goods?"لا":"نعم"}
                                </span>
                            </span>
                            <span className="text-sm font-bold text-gray-700 mt-2">
                                إعادة المنتجات : <span className="text-blue-500 text-xs" style={{fontWeight:"bold"}}>
                                    {data&&data.return_goods?"لا":"نعم"}
                                </span>
                            </span>
                        </div>
                        <div className="col-span-4 flex flex-col justify-between items-start">
                        <span className="text-sm font-bold text-gray-700">
                                كمية الطلب : <span className="text-blue-500 numbers text-xs" style={{fontWeight:"bold"}}>
                                    {data?data.order_details.grand_total_raw:""}
                                </span>
                            </span>
                            <span className="text-sm font-bold text-gray-700 mt-2">
                                إعادة المنتجات : <span className="text-blue-500 text-xs" style={{fontWeight:"bold"}}>
                                    {data&&data.return_goods?"لا":"نعم"}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full p-5 font-bold">
                    <span>السبب : {data?data.reason:""}</span>
                    <br />
                    <span className="text-sm font-normal">
                        {data?data.description:""}
                    </span>
                </div>
                {data&&(data.status!=="SOLVED"&&data.status!=="CLOSED")?
                <div className="w-full flex justify-center items-center">
                    <span className="bg-blue-500 w-40 text-center text-white px-10 text-sm rounded">
                        رد
                    </span>
                    <span onClick={solved} className="bg-yellow-500 cursor-pointer mr-3 w-40 text-center text-white px-10 text-sm rounded">
                        تم حل النزاع؟
                    </span>
                </div>
                :""}
            </div>
        </div>
    );
}