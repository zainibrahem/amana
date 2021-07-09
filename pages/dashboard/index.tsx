import React, { useState,useEffect } from 'react';
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
import Link from 'next/link';
export default function Index() {
    interface Order {
        order_date:""
        order_status:string
        order_number:""
        items_count:""
        total:""
        id:""
    }
    interface Shop{
        name:""
        image:Image
    }
    interface Image{
        path:""
    }
    interface Message {
        message:""
        id:""
        shop:Shop
    }
    interface Dispute {
        shop:Shop
        updated_at:""
        status:""
        items_count:""
        order_number:""
        reason:""
    }
    interface Wishlist {
        id:""
        image:""
        slug:""
        title:""
    }
    const dispatch = useAppDispatch();

    interface Data {
        orders:Order[]
        messages:Message[]
        disputes:Dispute[]
        orders_count:""
        wishlist:Wishlist[]
        wishlists_count:number
        disputes_count:""
        messages_count:""
        coupons_count:""
    }
    const [data,setData] = useState<Data>();
    const Route = useAppState('Route');
    const toggleNotification = React.useCallback((info,errortypes) => {
        dispatch({
          type: 'notification',payload:info,types:errortypes
        });
        }
        ,[dispatch]
      );
    const removeFav = (ele,e) =>{
        
        fetch(`https://amanacart.com/api/wishlist/${ele}/remove`,{
            method: 'DELETE', 
           headers:{
               'Authorization' : `Bearer ${localStorage.getItem('token')}`
           }})
        .then(res => res.json())
        .then(result =>{
            console.log(e.target.parentNode.parentNode)
            e.target.parentNode.parentNode.remove();
           toggleNotification(result.message,'success');
           console.log(result)
           
           setTimeout(() => {
               dispatch({
                   type: 'Nonotification',
                 })
             }, 5000)
        })
        .catch(e => {
           toggleNotification(e.message,'error');
           setTimeout(() => {
               dispatch({
                   type: 'Nonotification',
                 })
             }, 5000)
      });
    }
    // removeFav
    useEffect(() => {
        document.title = "لوحة التحكم | أمانة"
        fetch(`https://amanacart.com/api/dashboard/index`,{
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }})
         .then(res => res.json())
         .then(result =>{
            setData(result.data)
            console.log(result.data)
         })
         .catch(e => {
       });
     },[])

    return (
        <div className="grid grid-cols-12 gap-6 mt-12 pb-4" dir="rtl">
            <div className="col-span-6 lg:col-span-3">
                <div className="w-full shadow rounded flex justify-between py-6 p-3 items-center bg-blue-400">
                    <div className=" flex justify-start items-center  p-1 lg:p-2 rounded ">
                       <img className="w-12 statistics-icon" src={`${Route}/images/icons/orders.svg`} alt="" />
                    </div>
                    <div className="flex flex-col justify-between items-start ">
                        <span className="text-sm lg:text-lg text-white">
                            الطلبات
                        </span>
                        <span className="text-lg lg:text-4xl text-white numbers" style={{fontWeight:"bold"}}>
                            {data?data.orders_count:""}
                        </span>
                    </div>
                    <div className="flex flex-col justify-between items-end lg:ml-2">
                      
                    </div>
                </div>
            </div>
            <div className="col-span-6 lg:col-span-3">
                <div className="w-full bg-green-400 rounded shadow flex justify-between py-6 p-3 items-center">
                    <div className="flex justify-start items-center  p-1 lg:p-2 rounded ">
                        <img className="w-10 statistics-icon" src={`${Route}/images/icons/Group 1.svg`} alt="" />
                    </div>
                    <div className="flex flex-col justify-between items-start ">
                        <span className="text-sm lg:text-lg text-white">
                            الكوبونات
                        </span>
                        <span className="text-lg lg:text-4xl text-white numbers" style={{fontWeight:"bold"}}>
                            {data?data.coupons_count:""}
                        </span>
                    </div>
                    <div className="flex flex-col justify-between items-end lg:ml-2">
                    </div>
                </div>
            </div>
            <div className="col-span-6 lg:col-span-3">
                <div className="w-full rounded bg-red-400 shadow flex justify-between py-6 p-3 items-center">
                    <div className="flex justify-start items-center  p-1 lg:p-2 rounded ">
                        <img className="w-10 statistics-icon" src={`${Route}/images/icons/edit-list.svg`} alt="" />
                    </div>
                    <div className="flex flex-col justify-between items-start ">
                        <span className="text-sm lg:text-lg text-white">
                            النزاعات
                        </span>
                        <span className="text-lg lg:text-4xl text-white numbers" style={{fontWeight:"bold"}}>
                            {data?data.disputes_count:""}
                        </span>
                    </div>
                    <div className="flex flex-col justify-between items-end lg:ml-2">
                    </div>
                </div>
            </div>
            <div className="col-span-6 lg:col-span-3">
                <div className="w-full rounded bg-yellow-400 min-h-full shadow flex justify-between py-6 p-3 items-center">
                    <div className="flex justify-start  items-center p-1  lg:p-2 rounded ">
                        <img className="w-96 lg:w-16 statistics-icon" src={`${Route}/images/icons/email-mail-sent.svg`} alt="" />
                    </div>
                    <div className="flex flex-col justify-between items-start ">
                        <span className="text-sm text-white font-bold">
                            الرسائل
                        </span>
                        <span className="text-xl lg:text-4xl text-white numbers" style={{fontWeight:"bold"}}>
                            {data?data.messages_count:""}
                        </span>
                    </div>
                    <div className="flex flex-col justify-between items-end ml-2">
                    </div>
                </div>
            </div>
            <div className={`col-span-12 lg:col-span-4 rounded bg-white shadow  `} style={{minHeight:"200px"}}>
                <div className="w-full flex justify-start items-center py-3 px-4 " style={{border:"1px solid #eee"}}>
                    <span className="text-sm font-bold">
                        المفضلة
                    </span>
                </div>
                {data&&data.wishlist.length>0?data.wishlist.map(ele=>
                <div key={ele.id} className="w-full flex flex-col justify-between items-center mt-2 mb-2 scr overflow-y-scroll">
                    <div className="w-full flex justify-between items-center px-2">
                        
                        <div className="w-12 h-14 rounded-full" style={{background:`url(${ele.image})`,backgroundPosition:"center center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}></div>
                        <div className="flex w-3/4 justify-center items-center px-2">
                            <span className="text-sm overflow-hidden text-right" style={{maxHeight:"1.5rem"}}>
                                {ele.title}
                            </span>
                        </div>
                      
                        <div onClick={(e)=>removeFav(ele.id,e)} className="w-4 h-4 cursor-pointer rounded-full flex justify-center items-center">x</div>
                    </div>
                   
                </div>
                ):
                <div className="flex justify-center items-center h-full">
                    <span className="text-xs text-center font-bold">
                        لا توجد منتجات في قائمة المفضلة لديك
                    </span>
                </div>
                }
            </div>
            <div className={` lg:col-span-8 col-span-12   rounded bg-white shadow `} >
                <div className="w-full flex justify-start items-center py-3 px-5 ">
                    <span className="text-sm font-bold">
                        الطلبات
                    </span>
                </div>
                <div className="w-full flex justify-between max-h-72 overflow-y-scroll scr overflow-x-scroll lg:overflow-visible items-center" style={{minHeight:"200px"}}>
                {data&&data.orders.length>0?
                    <table className="w-full">
                        <thead className="">
                            <tr className="bg-gray-200">
                                <th style={{padding:"0.7rem 0rem"}} className="text-xs 0  text-gray-700 font-bold">الطلب</th>
                                <th style={{padding:"0.7rem 0rem"}} className="text-xs 0  text-gray-700 font-bold">التاريخ</th>
                                <th style={{padding:"0.7rem 0rem"}} className="text-xs 0  text-gray-700 font-bold">الحالة</th>
                                <th style={{padding:"0.7rem 0rem"}} className="text-xs 0  text-gray-700 font-bold">العناصر</th>
                                <th style={{padding:"0.7rem 0rem"}} className="text-xs 0  text-gray-700 font-bold">الإجمالي</th>
                                <th style={{padding:"0.7rem 0rem"}} className="text-xs 0  text-gray-700 font-bold">الفاتورة</th>
                            </tr>
                        </thead>
                        <tbody>
                          {data.orders.map((ele,index)=>
                                <tr key={index} className="hover-gray-200" style={data.orders.length==index+1?{}:{borderBottom:"1px solid rgb(224 225 225)"}}>
                                    <td className="text-center " style={{padding:".4rem 0rem"}}>
                                        <a className="w-full" href={`dashboard/payment/payment?pid=${ele.id}`}>
                                        <div className="flex justify-center items-center">
                                            <span className="mr-2 numbers text-gray-600 text-right" dir="ltr">
                                                {ele.order_number.split('#')}
                                            </span>
                                        </div>
                                        </a>
                                    </td>
                                <td className="text-center " style={{padding:".4rem 0rem"}}>
                                    <a className="w-full text-gray-600 numbers" href={`dashboard/payment/payment?pid=${ele.id}`}>
                                        12-4-2020
                                    </a>
                                </td>
                                <td className="text-center " style={{padding:".4rem 0rem"}}>
                                    <a className="w-full" href={`dashboard/payment/payment?pid=${ele.id}`}>
                                    <span style={{padding:"0.1rem .6rem"}}  className={`text-xs text-white inline-block    px-2 ${ele.order_status=="CONFIRMED"?"bg-green-500":"bg-yellow-500"} text-white rounded-full text-amber-600 bg-amber-200 uppercase last:mr-0 mr-1`}>
                                        قيد الانتظار
                                    </span>
                                    </a>
                                </td>
                                <td className="text-center " style={{padding:".4rem 0rem"}}>
                                    <a className="w-full" href={`dashboard/payment/payment?pid=${ele.id}`}>
                                    <span className="numbers text-gray-600 ">{ele.items_count}</span> 
                                    </a>
                                </td>
                                <td className="text-center " style={{padding:".4rem 0rem"}}>
                                    <a className="w-full"  href={`dashboard/payment/payment?pid=${ele.id}`}>
                                    <span className=" text-gray-600" >
                                        1000 ريال
                                        </span>
                                    </a>
                                </td>
                                <td className="text-center flex justify-center items-center" style={{padding:".4rem 0rem"}}>
                                    <svg  width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#8899a4" strokeWidth="2" strokeLinecap="square" ><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"></path></svg>
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                    :
                    <div className="flex flex-col justify-center items-center h-full w-full mt-10">
                        <span className="text-xs text-center font-bold">
                            لا توجد طلبات بعد لديك
                        </span>
                        <Link href="/">
                            <button className="rounded bg-yellow-500 text-white px-2 py-1 text-center text-xs mt-5">
                                ابدأ التسوق
                            </button>
                        </Link>
                    </div>
            }
                </div>
            </div>
            <div className="col-span-12 lg:col-span-6  rounded bg-white shadow ">
                <div className="w-full flex justify-start items-center py-3 px-5">
                    <span className="text-sm font-bold">
                        النزاعات   
                    </span>
                </div>
                <div className="w-full flex justify-between overflow-x-scroll max-h-80 overflow-y-scroll scr lg:overflow-visible items-center  pb-2  " style={{minHeight:"200px"}}>
                {data&&data.disputes.length>0?
                    <table className="w-full">
                        <thead className="">
                            <tr className="bg-gray-200">
                                <th style={{padding:"0.7rem 0rem"}} className="text-xs py-2 px-2 text-gray-700 font-bold">الطلب</th>
                                <th style={{padding:"0.7rem 0rem"}} className="text-xs py-2 px-2 text-gray-700 font-bold">التاريخ</th>
                                <th style={{padding:"0.7rem 0rem"}} className="text-xs py-2 px-2 text-gray-700 font-bold">الحالة</th>
                                <th style={{padding:"0.7rem 0rem"}} className="text-xs py-2 px-2 text-gray-700 font-bold">السبب</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.disputes.map((ele,index)=>
                                 <tr key={index} className="hover-gray-200" style={data.orders.length==index+1?{}:{borderBottom:"1px solid rgb(224 225 225)"}}>
                                
                                 <td className="text-center py-2">
                                     <div className="flex justify-center items-center">
                                         <span className="mr-2 numbers text-gray-600 text-right">{ele.order_number.split('#')}</span>
                                     </div>
                                 </td>
                                 <td className="text-center py-2 text-gray-600">
                                     {ele.updated_at}
                                 </td>
                                 <td className="text-center py-2">
                                     <span style={{padding:"0rem .6rem 0.1rem .6rem"}} className="text-xs inline-block  bg-yellow-500 text-white rounded-full text-amber-600 bg-amber-200 uppercase last:mr-0 mr-1">
                                         تم الحل
                                     </span>
                                 </td>
                                
                                 <td className="text-center py-2">
                                     <span className="text-gray-600">{ele.reason}</span>
                                 </td>
                             </tr>
                            )}
                        </tbody>
                    </table>
                           :
                           <div className="flex justify-center items-center h-full w-full mt-10">
                                <span className="text-xs text-center font-bold">
                                    لا توجد نزاعات بعد لديك
                                </span>
                            </div>
                           }
                </div>
            </div>
            <div className={` col-span-12 lg:col-span-6 rounded bg-white shadow `}>
            <div className="w-full flex justify-start items-center pt-3 pb-3 px-4" style={{border:"1px #eee solid"}}>
                    <span className="text-sm font-bold">
                        الرسائل
                    </span>
                </div>
            <div className="w-full flex flex-col justify-between items-center max-h-72 overflow-y-scroll scr mt-3   pb-2 " style={{minHeight:"200px"}}>
                    {data&&data.messages.length>0?data.messages.map((ele,index)=>
                        <a key={index} className="w-full hover-gray-200" href={`/dashboard/conversation/conversation?pid=${ele.id}`}>
                            <div className="w-full flex justify-between items-center px-2 pb-2" style={data.orders.length==index+1?{}:{borderBottom:"1px solid rgb(224 225 225)"}}>
                                <div className="w-24 lg:w-12 h-14 rounded-full  shadow " style={{border:"1px solid #eee",background:`url(https://amanacart.com/image/${ele.shop.image.path})`,backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}}></div>
                                <div className="flex  flex-col items-start px-2 w-11/12">
                                    <span className="text-sm font-bold  text-gray-600 pt-2">
                                        {/* {ele.shop.name} */}
                                        متجر هرمس
                                    </span>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs  max-w-md h-14 text-gray-600 leading-6 overflow-hidden text-right mt-1">
                                            {/* {ele.message} */}
                                            الرسالة المرسلة من الزبون الى التاجر وعلى عيني يا معلم وابو جعفر يصبرني واحلى 500 محروقة للاستاذ المحترم
                                        </span>
                                        <div className="flex flex-col justify-center items-center rounded w-3/12 " style={{border:"1px solid rgba(96, 165, 250)"}}>
                                            <span className="text-xs  bg-blue-400 color-white w-full   text-white text-center" style={{padding:".1rem .6rem"}}>
                                                رقم الطلب
                                            </span>
                                            <span className="px-2 text-xs my-1">
                                                123423
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ):
                    <div className="flex justify-center items-center h-full w-full mt-24">
                        <span className="text-xs text-center font-bold">
                            لا توجد رسائل بعد لديك
                        </span>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
}