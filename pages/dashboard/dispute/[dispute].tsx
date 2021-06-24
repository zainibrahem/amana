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
    interface Dispute{
        id:""
        order_number:""
        order_status:""
        total:""
        grand_total:""
        items:Item
        dispute_type:[]
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
    const [dispute,setDispute] = useState<Dispute>()

    const router = useRouter()
    const { pid } = router.query;
    const [rec,setRec] = useState<boolean>(false)
    const [modals,setModals] = useState<boolean>(false)
    const handlModalss = () =>{
        setModals(!modals)
        fetch(`https://amanacart.com/api/order/${pid?pid:""}/dispute`,{
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }})
         .then(res => res.json())
         .then(result =>{
            setDispute(result.data);
         })
         .catch(e => {
           console.log(e);
       });
    }
    const closeModals = () => {
        setModals(false)
    }
      const notreceived = () => {
        setRec(false)
    }
    const received = () => {
        setRec(true)
    }
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
                 <div className={`${modals?"flex":"hidden"} fixed z-50 top-0 left-0 h-screen w-full flex flex-col  justify-center items-center bg-black bg-opacity-70`}>
            <div onClick={closeModals} className="rounded-full border-2 border-white w-8 h-6 mb-4 text-white text-center text-md cursor-pointer">
                x
            </div>
            <div className={`${modals?"slideUpss":"slideDownss"} relative p-5 w-1/2 bg-white rounded shadow grid grid.cols-12 `} dir="rtl">
                    <div className="col-span-12">
                        <span className="text-md font-bold">
                            فتح نزاع
                        </span>
                    </div>
                    <div className="col-span-12 mt-5 flex flex-col justify-between items-start">
                        <span className="text-sm">
                            اختر السبب
                        </span>
                        <select name="" id="" className="w-full border-2 rounded mt-3 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent">
                            <option value="">اختر سببا</option>
                            {dispute?Object.values(dispute.dispute_type).map((ele, i)=>
                                <option value={ele}>{ele}</option>
                            ):""}
                        </select>
                        <span className="text-sm  pb-1 mt-4 w-full">
                                وصلت المنتجات؟
                        </span>
                        <div className="flex flex-col px-3 ">
                            <div className="flex w-full justify-between items-center">
                                <input onClick={received} type="radio" className="ml-2" name="returned" id="" />
                                <label className="w-8 text-right" htmlFor="">نعم</label>
                            </div>

                            <div className="flex w-full justify-between items-center">
                                <input onClick={notreceived} type="radio" className="ml-2" name="returned" id="" />
                                <label className="w-8 text-right" htmlFor="">لا</label>
                            </div>
                        </div>
                        {rec?
                            <div className="w-full">
                                 <span className="text-sm">
                                    اختر المنتج
                                </span>
                                <select name="" id="" className="w-full border-2 rounded mt-3 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent">
                                    <option value="">كل المنتجات</option>
                                    {dispute?Object.values(dispute.dispute_type).map((ele, i)=>
                                        <option value={ele}>{ele}</option>
                                    ):""}
                                </select>
                            </div>
                        :""}

                        <span className="text-sm  pb-1 mt-4 w-full">
                               قيمة المرجعات
                        </span>
                        <input type="text" className="w-full rounded border-2 py-1  mt-3 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent" />
                        <span className="text-xs text-gray-500 text-right mt-1">
                                لقد قمت بدفع <span className="font-bold">1500</span> غير شاملة الشحن والضرائب
                        </span>
                        
                            
                        <span className="w-full text-sm mt-5">
                            الوصف
                        </span>
                        <textarea className="w-full h-16 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-3" name="" id=""></textarea>

                        <span className="text-xs w-full mt-2">
                            ملاحظة : الإرجاع غير مضمون   !
                        </span>
                        <span className="text-sm text-white text-center w-56 cursor-pointer py-1 rounded bg-yellow-500 mt-4">
                            إرسال الطلب
                        </span>
                    </div>
            </div>
        </div>
       
            </div>
        </div>
    );
}