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
import { useRouter } from 'next/router';
export default function Orders() {
    const router = useRouter()
    const { pid } = router.query;
    interface Item{
        description:""
        quantity:""
        unit_price:""
        total:""
        image:""
    }
    interface Payment{
        code:""
        name:""
    }
    interface Data{
        billing_address:""
        buyer_note:""
        grand_total:""
        items:Item[]
        order_date:""
        order_number:""
        packaging:""
        order_status:""
        payment_method:Payment
        payment_status:""
        shipping:""
        shipping_address:""
        shipping_weight:""
        discount:""
        shop:Shop
        taxes:""
        dispute_id:""
        id:""
    }
    interface Shop{
        cover_image:""
        image:""
        member_since:""
        name:""
        total:""
        tracking_id:""
    }
    interface Order{
        payment_method:Payment
        items:Item
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
    
    const [data,setData] = useState<Data[]>()
    const [orders,setOrders] = useState<Data[]>()
    const [order,setOrder] = useState<Data>()
    const [modal,setModal] = useState<boolean>(false)
    const [dispute,setDispute] = useState<Dispute>()
    const handlModals = () =>{
        setModal(!modal)
        fetch(`https://amanacart.com/api/order/${order?order.id:""}/dispute`,{
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
    const closeModal = () => {
        setModal(false)
    }
    const openModal = () => {
        setModal(true)
    }
    useEffect(() => {
        console.log('asdasd');
        fetch(`https://amanacart.com/api/dashboard/orders`,{
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }})
         .then(res => res.json())
         .then(result =>{
            setData(result.data);
            setOrders(result.data);
         })
         .catch(e => {
           console.log(e);
       });
     },[pid])
     const handlesearch = (e) =>{
        
        let array = [];
        data.map(ele => {
            if(ele.order_number.indexOf(e.target.value)!=-1){
                array.push(ele);
            }
        })
        setOrders(array);
     }
    return (
        <div className="">
        <div className="grid grid-cols-10 gap-2 mt-12" dir="rtl">
            <div className="col-span-2">
            <div className="w-full bg-white shadow flex rounded justify-between py-6 p-3 items-center">
                <div className="bg-gray-200 flex justify-start items-center  p-2 rounded ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35.95" height="43.347" viewBox="0 0 35.95 43.347">
                        <g id="Group_5287" data-name="Group 5287" transform="translate(0)">
                            <path id="Path_337" data-name="Path 337" d="M74.976,248.645a12.061,12.061,0,0,0-.036-1.251,3.825,3.825,0,0,0-2.488-3.272,3.932,3.932,0,0,0-1.284-.237c-.1,0-.194,0-.295,0s-.187,0-.28,0c-1.244-.014-2.492,0-3.74,0-.234,0-.467-.032-.748-.058a3.183,3.183,0,0,0-2.114-3.585H50.12l-.054.022a3.184,3.184,0,0,0-2.057,3.56c-.309.022-.565.061-.82.061-1.215.007-2.435-.011-3.65,0-.093,0-.187,0-.28,0-.133,0-.266,0-.4,0a3.921,3.921,0,0,0-2.079.629l-.1.065A3.268,3.268,0,0,0,39.469,246c-.018.036-.036.076-.054.111s-.032.083-.05.126a4.031,4.031,0,0,0-.291,1.154l-.011.14c-.032.367-.029.737-.029,1.111q-.005,11.732,0,23.471v6.548a8.25,8.25,0,0,0,.245,2.309c.37,1.223,1.208,1.874,2.945,2.6H71.8c1.654-.7,2.492-1.327,2.88-2.452a7.609,7.609,0,0,0,.295-2.46V271.2Q74.98,259.916,74.976,248.645Zm-23.245-4.754h10.6v3.51h-10.6Zm19.7,35.158c-.007.723-.237.928-.975.921-3.826-.022-7.652-.018-11.479-.018H55.112c-3.848,0-7.692,0-11.54.018-.759.007-.982-.209-.978-.978v-.011q.016-6.246.018-12.5.005-9.057-.014-18.113a2.259,2.259,0,0,1,.025-.367V248a.6.6,0,0,1,.554-.579h1.187a.087.087,0,0,1,.043,0c.917.007,1.841,0,2.787,0h.795c.011.086.018.173.022.252a7.48,7.48,0,0,0,.011.816,2.735,2.735,0,0,0,1.356,2.19c.058.032.115.065.173.09a1.79,1.79,0,0,0,.173.076c.079.032.158.058.241.083a2.017,2.017,0,0,0,.255.058c.086.018.176.029.266.04s.18.011.273.011q6.279.022,12.565,0h.029a2.705,2.705,0,0,0,2.747-2.546c.029-.313,0-.633,0-1.068h.737c.946,0,1.87.011,2.791,0a.1.1,0,0,1,.047,0h1.169c.471.072.583.381.583.953q-.011,7.023-.014,14.043v4q0,1.359,0,2.715,0,2.228,0,4.448.005,2.708.011,5.412Z" transform="translate(-39.03 -240.23)" fill="#4791ff"/>
                            <path id="Path_338" data-name="Path 338" d="M73.314,302.531a1.951,1.951,0,0,1-2.128,2.067c-1.034.008-2.063.012-3.1.012-2.262.008-4.524,0-6.781-.012a1.99,1.99,0,0,1-2.169-2.039,1.892,1.892,0,0,1,1.532-1.865,2.948,2.948,0,0,1,.616-.073c1.666-.02,3.332-.008,4.994-.008,1.629,0,3.255-.012,4.884,0C72.515,300.638,73.285,301.339,73.314,302.531Z" transform="translate(-52.402 -279.143)" fill="#4791ff"/>
                            <path id="Path_339" data-name="Path 339" d="M101.394,282.409c.012,1.265-.8,2.019-2.266,2.047-1.265.024-2.529,0-3.794,0s-2.529.02-3.8,0a2.047,2.047,0,1,1,.053-4.053q3.739-.024,7.483,0C100.514,280.41,101.378,281.18,101.394,282.409Z" transform="translate(-72.162 -266.116)" fill="#4791ff"/>
                            <path id="Path_340" data-name="Path 340" d="M66.326,322.636a2.043,2.043,0,0,1-2.1,1.986q-.128.012-.255.012c-1.265.012-2.533,0-3.794,0s-2.533.016-3.8,0a1.973,1.973,0,0,1-2.213-1.99,2.017,2.017,0,0,1,2.266-2.059q3.362-.024,6.729,0c.288,0,.576,0,.863,0A2.078,2.078,0,0,1,66.326,322.636Z" transform="translate(-49.022 -292.013)" fill="#4791ff"/>
                            <path id="Path_341" data-name="Path 341" d="M67.21,282.359a1.92,1.92,0,0,1-1.909,2.063c-.272.02-.539.028-.811.028-.178,0-.357,0-.535-.008-.041,0-.081,0-.118,0-.142,0-.276,0-.418,0-.045,0-.093,0-.142,0h-.146c-.105,0-.211,0-.316,0-.158,0-.316,0-.474.008-.292.008-.58.008-.871,0-.13,0-.263-.012-.4-.02a1.99,1.99,0,0,1-1.933-2.063,1.963,1.963,0,0,1,1.929-1.958c1.407-.065,2.821-.061,4.228,0A1.936,1.936,0,0,1,67.21,282.359Z" transform="translate(-52.136 -266.093)" fill="#4791ff"/>
                        </g>
                    </svg>
                </div>
                <div className="flex flex-col justify-between items-start ">
                    <span className="text-lg text-gray-500">
                        Total Tasks
                    </span>
                    <span className="text-4xl text-black numbers" style={{fontWeight:"bold"}}>
                        34
                    </span>
                </div>
                <div className="flex flex-col justify-between items-end ml-2">
                    <span className="text-sm  text-red-500">
                        -25%
                    </span>
                </div>
            </div>
        </div>
            <div className="col-span-2">
            <div className="w-full bg-white shadow flex rounded justify-between py-6 p-3 items-center">
                <div className="bg-gray-200 flex justify-start items-center  p-2 rounded ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35.95" height="43.347" viewBox="0 0 35.95 43.347">
                        <g id="Group_5287" data-name="Group 5287" transform="translate(0)">
                            <path id="Path_337" data-name="Path 337" d="M74.976,248.645a12.061,12.061,0,0,0-.036-1.251,3.825,3.825,0,0,0-2.488-3.272,3.932,3.932,0,0,0-1.284-.237c-.1,0-.194,0-.295,0s-.187,0-.28,0c-1.244-.014-2.492,0-3.74,0-.234,0-.467-.032-.748-.058a3.183,3.183,0,0,0-2.114-3.585H50.12l-.054.022a3.184,3.184,0,0,0-2.057,3.56c-.309.022-.565.061-.82.061-1.215.007-2.435-.011-3.65,0-.093,0-.187,0-.28,0-.133,0-.266,0-.4,0a3.921,3.921,0,0,0-2.079.629l-.1.065A3.268,3.268,0,0,0,39.469,246c-.018.036-.036.076-.054.111s-.032.083-.05.126a4.031,4.031,0,0,0-.291,1.154l-.011.14c-.032.367-.029.737-.029,1.111q-.005,11.732,0,23.471v6.548a8.25,8.25,0,0,0,.245,2.309c.37,1.223,1.208,1.874,2.945,2.6H71.8c1.654-.7,2.492-1.327,2.88-2.452a7.609,7.609,0,0,0,.295-2.46V271.2Q74.98,259.916,74.976,248.645Zm-23.245-4.754h10.6v3.51h-10.6Zm19.7,35.158c-.007.723-.237.928-.975.921-3.826-.022-7.652-.018-11.479-.018H55.112c-3.848,0-7.692,0-11.54.018-.759.007-.982-.209-.978-.978v-.011q.016-6.246.018-12.5.005-9.057-.014-18.113a2.259,2.259,0,0,1,.025-.367V248a.6.6,0,0,1,.554-.579h1.187a.087.087,0,0,1,.043,0c.917.007,1.841,0,2.787,0h.795c.011.086.018.173.022.252a7.48,7.48,0,0,0,.011.816,2.735,2.735,0,0,0,1.356,2.19c.058.032.115.065.173.09a1.79,1.79,0,0,0,.173.076c.079.032.158.058.241.083a2.017,2.017,0,0,0,.255.058c.086.018.176.029.266.04s.18.011.273.011q6.279.022,12.565,0h.029a2.705,2.705,0,0,0,2.747-2.546c.029-.313,0-.633,0-1.068h.737c.946,0,1.87.011,2.791,0a.1.1,0,0,1,.047,0h1.169c.471.072.583.381.583.953q-.011,7.023-.014,14.043v4q0,1.359,0,2.715,0,2.228,0,4.448.005,2.708.011,5.412Z" transform="translate(-39.03 -240.23)" fill="#4791ff"/>
                            <path id="Path_338" data-name="Path 338" d="M73.314,302.531a1.951,1.951,0,0,1-2.128,2.067c-1.034.008-2.063.012-3.1.012-2.262.008-4.524,0-6.781-.012a1.99,1.99,0,0,1-2.169-2.039,1.892,1.892,0,0,1,1.532-1.865,2.948,2.948,0,0,1,.616-.073c1.666-.02,3.332-.008,4.994-.008,1.629,0,3.255-.012,4.884,0C72.515,300.638,73.285,301.339,73.314,302.531Z" transform="translate(-52.402 -279.143)" fill="#4791ff"/>
                            <path id="Path_339" data-name="Path 339" d="M101.394,282.409c.012,1.265-.8,2.019-2.266,2.047-1.265.024-2.529,0-3.794,0s-2.529.02-3.8,0a2.047,2.047,0,1,1,.053-4.053q3.739-.024,7.483,0C100.514,280.41,101.378,281.18,101.394,282.409Z" transform="translate(-72.162 -266.116)" fill="#4791ff"/>
                            <path id="Path_340" data-name="Path 340" d="M66.326,322.636a2.043,2.043,0,0,1-2.1,1.986q-.128.012-.255.012c-1.265.012-2.533,0-3.794,0s-2.533.016-3.8,0a1.973,1.973,0,0,1-2.213-1.99,2.017,2.017,0,0,1,2.266-2.059q3.362-.024,6.729,0c.288,0,.576,0,.863,0A2.078,2.078,0,0,1,66.326,322.636Z" transform="translate(-49.022 -292.013)" fill="#4791ff"/>
                            <path id="Path_341" data-name="Path 341" d="M67.21,282.359a1.92,1.92,0,0,1-1.909,2.063c-.272.02-.539.028-.811.028-.178,0-.357,0-.535-.008-.041,0-.081,0-.118,0-.142,0-.276,0-.418,0-.045,0-.093,0-.142,0h-.146c-.105,0-.211,0-.316,0-.158,0-.316,0-.474.008-.292.008-.58.008-.871,0-.13,0-.263-.012-.4-.02a1.99,1.99,0,0,1-1.933-2.063,1.963,1.963,0,0,1,1.929-1.958c1.407-.065,2.821-.061,4.228,0A1.936,1.936,0,0,1,67.21,282.359Z" transform="translate(-52.136 -266.093)" fill="#4791ff"/>
                        </g>
                    </svg>
                </div>
                <div className="flex flex-col justify-between items-start ">
                    <span className="text-lg text-gray-500">
                        Total Tasks
                    </span>
                    <span className="text-4xl text-black numbers" style={{fontWeight:"bold"}}>
                        34
                    </span>
                </div>
                <div className="flex flex-col justify-between items-end ml-2">
                    <span className="text-sm  text-red-500">
                        -25%
                    </span>
                </div>
            </div>
        </div>
            <div className="col-span-2">
                <div className="w-full bg-white shadow flex rounded justify-between py-6 p-3 items-center">
                    <div className="bg-gray-200 flex justify-start items-center  p-2 rounded ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35.95" height="43.347" viewBox="0 0 35.95 43.347">
                            <g id="Group_5287" data-name="Group 5287" transform="translate(0)">
                                <path id="Path_337" data-name="Path 337" d="M74.976,248.645a12.061,12.061,0,0,0-.036-1.251,3.825,3.825,0,0,0-2.488-3.272,3.932,3.932,0,0,0-1.284-.237c-.1,0-.194,0-.295,0s-.187,0-.28,0c-1.244-.014-2.492,0-3.74,0-.234,0-.467-.032-.748-.058a3.183,3.183,0,0,0-2.114-3.585H50.12l-.054.022a3.184,3.184,0,0,0-2.057,3.56c-.309.022-.565.061-.82.061-1.215.007-2.435-.011-3.65,0-.093,0-.187,0-.28,0-.133,0-.266,0-.4,0a3.921,3.921,0,0,0-2.079.629l-.1.065A3.268,3.268,0,0,0,39.469,246c-.018.036-.036.076-.054.111s-.032.083-.05.126a4.031,4.031,0,0,0-.291,1.154l-.011.14c-.032.367-.029.737-.029,1.111q-.005,11.732,0,23.471v6.548a8.25,8.25,0,0,0,.245,2.309c.37,1.223,1.208,1.874,2.945,2.6H71.8c1.654-.7,2.492-1.327,2.88-2.452a7.609,7.609,0,0,0,.295-2.46V271.2Q74.98,259.916,74.976,248.645Zm-23.245-4.754h10.6v3.51h-10.6Zm19.7,35.158c-.007.723-.237.928-.975.921-3.826-.022-7.652-.018-11.479-.018H55.112c-3.848,0-7.692,0-11.54.018-.759.007-.982-.209-.978-.978v-.011q.016-6.246.018-12.5.005-9.057-.014-18.113a2.259,2.259,0,0,1,.025-.367V248a.6.6,0,0,1,.554-.579h1.187a.087.087,0,0,1,.043,0c.917.007,1.841,0,2.787,0h.795c.011.086.018.173.022.252a7.48,7.48,0,0,0,.011.816,2.735,2.735,0,0,0,1.356,2.19c.058.032.115.065.173.09a1.79,1.79,0,0,0,.173.076c.079.032.158.058.241.083a2.017,2.017,0,0,0,.255.058c.086.018.176.029.266.04s.18.011.273.011q6.279.022,12.565,0h.029a2.705,2.705,0,0,0,2.747-2.546c.029-.313,0-.633,0-1.068h.737c.946,0,1.87.011,2.791,0a.1.1,0,0,1,.047,0h1.169c.471.072.583.381.583.953q-.011,7.023-.014,14.043v4q0,1.359,0,2.715,0,2.228,0,4.448.005,2.708.011,5.412Z" transform="translate(-39.03 -240.23)" fill="#4791ff"/>
                                <path id="Path_338" data-name="Path 338" d="M73.314,302.531a1.951,1.951,0,0,1-2.128,2.067c-1.034.008-2.063.012-3.1.012-2.262.008-4.524,0-6.781-.012a1.99,1.99,0,0,1-2.169-2.039,1.892,1.892,0,0,1,1.532-1.865,2.948,2.948,0,0,1,.616-.073c1.666-.02,3.332-.008,4.994-.008,1.629,0,3.255-.012,4.884,0C72.515,300.638,73.285,301.339,73.314,302.531Z" transform="translate(-52.402 -279.143)" fill="#4791ff"/>
                                <path id="Path_339" data-name="Path 339" d="M101.394,282.409c.012,1.265-.8,2.019-2.266,2.047-1.265.024-2.529,0-3.794,0s-2.529.02-3.8,0a2.047,2.047,0,1,1,.053-4.053q3.739-.024,7.483,0C100.514,280.41,101.378,281.18,101.394,282.409Z" transform="translate(-72.162 -266.116)" fill="#4791ff"/>
                                <path id="Path_340" data-name="Path 340" d="M66.326,322.636a2.043,2.043,0,0,1-2.1,1.986q-.128.012-.255.012c-1.265.012-2.533,0-3.794,0s-2.533.016-3.8,0a1.973,1.973,0,0,1-2.213-1.99,2.017,2.017,0,0,1,2.266-2.059q3.362-.024,6.729,0c.288,0,.576,0,.863,0A2.078,2.078,0,0,1,66.326,322.636Z" transform="translate(-49.022 -292.013)" fill="#4791ff"/>
                                <path id="Path_341" data-name="Path 341" d="M67.21,282.359a1.92,1.92,0,0,1-1.909,2.063c-.272.02-.539.028-.811.028-.178,0-.357,0-.535-.008-.041,0-.081,0-.118,0-.142,0-.276,0-.418,0-.045,0-.093,0-.142,0h-.146c-.105,0-.211,0-.316,0-.158,0-.316,0-.474.008-.292.008-.58.008-.871,0-.13,0-.263-.012-.4-.02a1.99,1.99,0,0,1-1.933-2.063,1.963,1.963,0,0,1,1.929-1.958c1.407-.065,2.821-.061,4.228,0A1.936,1.936,0,0,1,67.21,282.359Z" transform="translate(-52.136 -266.093)" fill="#4791ff"/>
                            </g>
                        </svg>
                    </div>
                    <div className="flex flex-col justify-between items-start ">
                        <span className="text-lg text-gray-500">
                            Total Tasks
                        </span>
                        <span className="text-4xl text-black numbers" style={{fontWeight:"bold"}}>
                            34
                        </span>
                    </div>
                    <div className="flex flex-col justify-between items-end ml-2">
                        <span className="text-sm  text-red-500">
                            -25%
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-span-2">
                <div className="w-full bg-white shadow flex rounded justify-between py-6 p-3 items-center">
                    <div className="bg-gray-200 flex justify-start items-center  p-2 rounded ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35.95" height="43.347" viewBox="0 0 35.95 43.347">
                            <g id="Group_5287" data-name="Group 5287" transform="translate(0)">
                                <path id="Path_337" data-name="Path 337" d="M74.976,248.645a12.061,12.061,0,0,0-.036-1.251,3.825,3.825,0,0,0-2.488-3.272,3.932,3.932,0,0,0-1.284-.237c-.1,0-.194,0-.295,0s-.187,0-.28,0c-1.244-.014-2.492,0-3.74,0-.234,0-.467-.032-.748-.058a3.183,3.183,0,0,0-2.114-3.585H50.12l-.054.022a3.184,3.184,0,0,0-2.057,3.56c-.309.022-.565.061-.82.061-1.215.007-2.435-.011-3.65,0-.093,0-.187,0-.28,0-.133,0-.266,0-.4,0a3.921,3.921,0,0,0-2.079.629l-.1.065A3.268,3.268,0,0,0,39.469,246c-.018.036-.036.076-.054.111s-.032.083-.05.126a4.031,4.031,0,0,0-.291,1.154l-.011.14c-.032.367-.029.737-.029,1.111q-.005,11.732,0,23.471v6.548a8.25,8.25,0,0,0,.245,2.309c.37,1.223,1.208,1.874,2.945,2.6H71.8c1.654-.7,2.492-1.327,2.88-2.452a7.609,7.609,0,0,0,.295-2.46V271.2Q74.98,259.916,74.976,248.645Zm-23.245-4.754h10.6v3.51h-10.6Zm19.7,35.158c-.007.723-.237.928-.975.921-3.826-.022-7.652-.018-11.479-.018H55.112c-3.848,0-7.692,0-11.54.018-.759.007-.982-.209-.978-.978v-.011q.016-6.246.018-12.5.005-9.057-.014-18.113a2.259,2.259,0,0,1,.025-.367V248a.6.6,0,0,1,.554-.579h1.187a.087.087,0,0,1,.043,0c.917.007,1.841,0,2.787,0h.795c.011.086.018.173.022.252a7.48,7.48,0,0,0,.011.816,2.735,2.735,0,0,0,1.356,2.19c.058.032.115.065.173.09a1.79,1.79,0,0,0,.173.076c.079.032.158.058.241.083a2.017,2.017,0,0,0,.255.058c.086.018.176.029.266.04s.18.011.273.011q6.279.022,12.565,0h.029a2.705,2.705,0,0,0,2.747-2.546c.029-.313,0-.633,0-1.068h.737c.946,0,1.87.011,2.791,0a.1.1,0,0,1,.047,0h1.169c.471.072.583.381.583.953q-.011,7.023-.014,14.043v4q0,1.359,0,2.715,0,2.228,0,4.448.005,2.708.011,5.412Z" transform="translate(-39.03 -240.23)" fill="#4791ff"/>
                                <path id="Path_338" data-name="Path 338" d="M73.314,302.531a1.951,1.951,0,0,1-2.128,2.067c-1.034.008-2.063.012-3.1.012-2.262.008-4.524,0-6.781-.012a1.99,1.99,0,0,1-2.169-2.039,1.892,1.892,0,0,1,1.532-1.865,2.948,2.948,0,0,1,.616-.073c1.666-.02,3.332-.008,4.994-.008,1.629,0,3.255-.012,4.884,0C72.515,300.638,73.285,301.339,73.314,302.531Z" transform="translate(-52.402 -279.143)" fill="#4791ff"/>
                                <path id="Path_339" data-name="Path 339" d="M101.394,282.409c.012,1.265-.8,2.019-2.266,2.047-1.265.024-2.529,0-3.794,0s-2.529.02-3.8,0a2.047,2.047,0,1,1,.053-4.053q3.739-.024,7.483,0C100.514,280.41,101.378,281.18,101.394,282.409Z" transform="translate(-72.162 -266.116)" fill="#4791ff"/>
                                <path id="Path_340" data-name="Path 340" d="M66.326,322.636a2.043,2.043,0,0,1-2.1,1.986q-.128.012-.255.012c-1.265.012-2.533,0-3.794,0s-2.533.016-3.8,0a1.973,1.973,0,0,1-2.213-1.99,2.017,2.017,0,0,1,2.266-2.059q3.362-.024,6.729,0c.288,0,.576,0,.863,0A2.078,2.078,0,0,1,66.326,322.636Z" transform="translate(-49.022 -292.013)" fill="#4791ff"/>
                                <path id="Path_341" data-name="Path 341" d="M67.21,282.359a1.92,1.92,0,0,1-1.909,2.063c-.272.02-.539.028-.811.028-.178,0-.357,0-.535-.008-.041,0-.081,0-.118,0-.142,0-.276,0-.418,0-.045,0-.093,0-.142,0h-.146c-.105,0-.211,0-.316,0-.158,0-.316,0-.474.008-.292.008-.58.008-.871,0-.13,0-.263-.012-.4-.02a1.99,1.99,0,0,1-1.933-2.063,1.963,1.963,0,0,1,1.929-1.958c1.407-.065,2.821-.061,4.228,0A1.936,1.936,0,0,1,67.21,282.359Z" transform="translate(-52.136 -266.093)" fill="#4791ff"/>
                            </g>
                        </svg>
                    </div>
                    <div className="flex flex-col justify-between items-start ">
                        <span className="text-lg text-gray-500">
                            Total Tasks
                        </span>
                        <span className="text-4xl text-black numbers" style={{fontWeight:"bold"}}>
                            34
                        </span>
                    </div>
                    <div className="flex flex-col justify-between items-end ml-2">
                        <span className="text-sm  text-red-500">
                            -25%
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-span-2">
            <div className="w-full bg-white shadow flex rounded justify-between py-6 p-3 items-center">
                <div className="bg-gray-200 flex justify-start items-center  p-2 rounded ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35.95" height="43.347" viewBox="0 0 35.95 43.347">
                        <g id="Group_5287" data-name="Group 5287" transform="translate(0)">
                            <path id="Path_337" data-name="Path 337" d="M74.976,248.645a12.061,12.061,0,0,0-.036-1.251,3.825,3.825,0,0,0-2.488-3.272,3.932,3.932,0,0,0-1.284-.237c-.1,0-.194,0-.295,0s-.187,0-.28,0c-1.244-.014-2.492,0-3.74,0-.234,0-.467-.032-.748-.058a3.183,3.183,0,0,0-2.114-3.585H50.12l-.054.022a3.184,3.184,0,0,0-2.057,3.56c-.309.022-.565.061-.82.061-1.215.007-2.435-.011-3.65,0-.093,0-.187,0-.28,0-.133,0-.266,0-.4,0a3.921,3.921,0,0,0-2.079.629l-.1.065A3.268,3.268,0,0,0,39.469,246c-.018.036-.036.076-.054.111s-.032.083-.05.126a4.031,4.031,0,0,0-.291,1.154l-.011.14c-.032.367-.029.737-.029,1.111q-.005,11.732,0,23.471v6.548a8.25,8.25,0,0,0,.245,2.309c.37,1.223,1.208,1.874,2.945,2.6H71.8c1.654-.7,2.492-1.327,2.88-2.452a7.609,7.609,0,0,0,.295-2.46V271.2Q74.98,259.916,74.976,248.645Zm-23.245-4.754h10.6v3.51h-10.6Zm19.7,35.158c-.007.723-.237.928-.975.921-3.826-.022-7.652-.018-11.479-.018H55.112c-3.848,0-7.692,0-11.54.018-.759.007-.982-.209-.978-.978v-.011q.016-6.246.018-12.5.005-9.057-.014-18.113a2.259,2.259,0,0,1,.025-.367V248a.6.6,0,0,1,.554-.579h1.187a.087.087,0,0,1,.043,0c.917.007,1.841,0,2.787,0h.795c.011.086.018.173.022.252a7.48,7.48,0,0,0,.011.816,2.735,2.735,0,0,0,1.356,2.19c.058.032.115.065.173.09a1.79,1.79,0,0,0,.173.076c.079.032.158.058.241.083a2.017,2.017,0,0,0,.255.058c.086.018.176.029.266.04s.18.011.273.011q6.279.022,12.565,0h.029a2.705,2.705,0,0,0,2.747-2.546c.029-.313,0-.633,0-1.068h.737c.946,0,1.87.011,2.791,0a.1.1,0,0,1,.047,0h1.169c.471.072.583.381.583.953q-.011,7.023-.014,14.043v4q0,1.359,0,2.715,0,2.228,0,4.448.005,2.708.011,5.412Z" transform="translate(-39.03 -240.23)" fill="#4791ff"/>
                            <path id="Path_338" data-name="Path 338" d="M73.314,302.531a1.951,1.951,0,0,1-2.128,2.067c-1.034.008-2.063.012-3.1.012-2.262.008-4.524,0-6.781-.012a1.99,1.99,0,0,1-2.169-2.039,1.892,1.892,0,0,1,1.532-1.865,2.948,2.948,0,0,1,.616-.073c1.666-.02,3.332-.008,4.994-.008,1.629,0,3.255-.012,4.884,0C72.515,300.638,73.285,301.339,73.314,302.531Z" transform="translate(-52.402 -279.143)" fill="#4791ff"/>
                            <path id="Path_339" data-name="Path 339" d="M101.394,282.409c.012,1.265-.8,2.019-2.266,2.047-1.265.024-2.529,0-3.794,0s-2.529.02-3.8,0a2.047,2.047,0,1,1,.053-4.053q3.739-.024,7.483,0C100.514,280.41,101.378,281.18,101.394,282.409Z" transform="translate(-72.162 -266.116)" fill="#4791ff"/>
                            <path id="Path_340" data-name="Path 340" d="M66.326,322.636a2.043,2.043,0,0,1-2.1,1.986q-.128.012-.255.012c-1.265.012-2.533,0-3.794,0s-2.533.016-3.8,0a1.973,1.973,0,0,1-2.213-1.99,2.017,2.017,0,0,1,2.266-2.059q3.362-.024,6.729,0c.288,0,.576,0,.863,0A2.078,2.078,0,0,1,66.326,322.636Z" transform="translate(-49.022 -292.013)" fill="#4791ff"/>
                            <path id="Path_341" data-name="Path 341" d="M67.21,282.359a1.92,1.92,0,0,1-1.909,2.063c-.272.02-.539.028-.811.028-.178,0-.357,0-.535-.008-.041,0-.081,0-.118,0-.142,0-.276,0-.418,0-.045,0-.093,0-.142,0h-.146c-.105,0-.211,0-.316,0-.158,0-.316,0-.474.008-.292.008-.58.008-.871,0-.13,0-.263-.012-.4-.02a1.99,1.99,0,0,1-1.933-2.063,1.963,1.963,0,0,1,1.929-1.958c1.407-.065,2.821-.061,4.228,0A1.936,1.936,0,0,1,67.21,282.359Z" transform="translate(-52.136 -266.093)" fill="#4791ff"/>
                        </g>
                    </svg>
                </div>
                <div className="flex flex-col justify-between items-start ">
                    <span className="text-lg text-gray-500">
                        Total Tasks
                    </span>
                    <span className="text-4xl text-black numbers" style={{fontWeight:"bold"}}>
                        34
                    </span>
                </div>
                <div className="flex flex-col justify-between items-end ml-2">
                    <span className="text-sm  text-red-500">
                        -25%
                    </span>
                </div>
            </div>
        </div>
            <div className="col-span-10 bg-white shadow rounded py-1 px-2">
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-4 py-1 px-2">
                        <div className="w-full">
                            <span className="text-right text-lg">
                                طلباتك
                            </span>
                            <div className="w-full mt-2">
                                <div className="absolute">
                                    <svg className="w-4 top-1/2 right-1 transform translate-y-1/2 absolute h-4" xmlns="http://www.w3.org/2000/svg" width="163.369" height="163.374" viewBox="0 0 163.369 163.374">
                                        <g id="Group_5411" data-name="Group 5411" transform="translate(-2692.438 -2976.185)">
                                            <path id="Path_11959" data-name="Path 11959" d="M4109.79,769.512a48.37,48.37,0,1,0,0-68.4A48.056,48.056,0,0,0,4109.79,769.512Zm3.109-65.3a43.973,43.973,0,1,1,0,62.187A43.686,43.686,0,0,1,4112.9,704.216Z" transform="translate(-1387.793 2304.637)"/>
                                            <path id="Path_11960" data-name="Path 11960" d="M4110.817,792.286a63.8,63.8,0,0,0,78.416,9.287,2.193,2.193,0,0,1,2.705.321l7.5,7.493,3.109,3.109,31.094,31.094a10.988,10.988,0,0,0,15.549,0l3.109-3.109a11.008,11.008,0,0,0,0-15.544L4221.2,793.843l-3.107-3.113-7.5-7.493a2.192,2.192,0,0,1-.318-2.7,63.774,63.774,0,1,0-99.461,11.754Zm105.721,4.019a2.182,2.182,0,0,1,1.551.646l31.1,31.094a6.6,6.6,0,0,1,0,9.327l-3.109,3.109a6.594,6.594,0,0,1-9.332,0l-31.092-31.093a2.2,2.2,0,0,1,0-3.109l9.328-9.327A2.193,2.193,0,0,1,4216.538,796.3Zm-4.666-5.576a2.2,2.2,0,0,1,0,3.113l-9.328,9.327a2.2,2.2,0,0,1-3.109,0l-3.342-3.342a2.2,2.2,0,0,1,.162-3.254c1.637-1.341,3.229-2.783,4.732-4.287s2.951-3.1,4.293-4.731a2.2,2.2,0,0,1,1.586-.8h.109a2.2,2.2,0,0,1,1.557.642Zm-97.941-85.506a59.364,59.364,0,1,1,0,83.954A58.952,58.952,0,0,1,4113.931,705.223Z" transform="translate(-1399.701 2292.746)"/>
                                        </g>
                                    </svg>
                                </div>
                                <input type="text" onChange={(e) => handlesearch(e)} className="bg-white rounded px-2 pr-6 py-1 border-2" placeholder="ابحث في منتجاتك" />
                            </div>
                            <div className="w-full mt-2">
                                <span className="text-md">ترتيب</span>
                            </div>
                            <div className="w-full mt-2 py-1">
                                {orders?orders.map(ele=>
                                    <div className="w-full rounded shadow-md p-2 cursor-pointer" onClick={()=>setOrder(ele)}>
                                    <div className="w-full  flex justify-start items-center " >
                                        <span className="text-md font-bold">
                                            الطلب {ele.order_number}
                                        </span>
                                        
                                        <span className="text-sm mr-7 text-gray-500">
                                            {ele.items.length} عنصر
                                        </span>
                                    </div>
                                    <div className="w-full flex justify-start items-center mt-2">
                                        <span className="text-sm  text-gray-500">
                                            تاريخ الطلب :
                                        </span>
                                        
                                        <span className="text-xs mr-7 text-gray-500">
                                            {ele.order_date}
                                        </span>
                                    </div>
                                    <div className="w-full flex justify-start items-center mt-2">
                                        <span className="text-sm  ">
                                            السعر الكلي :
                                        </span>
                                        
                                        <span className="text-xs mr-7 font-bold">
                                            {ele.grand_total}
                                        </span>
                                    </div>
                                    <div className="w-full flex justify-end">
                                        <span className="text-md text-white px-4  rounded bg-gray-500">
                                            {ele.order_status}
                                        </span>
                                    </div>
                                </div>
                            
                                ):""}
                               </div>
                        </div>
                    </div>
                    {order?
                    <div className="col-span-8">
                        <div className="w-full flex justify-start items-center py-2 px-4 border-b-2">
                            <span className="text-sm">
                                الطلبات
                            </span>
                        </div>
                        <div className="w-full flex justify-between items-center px-3 py-2 mt-3 ">
                            
                            <table className="w-full">
                                <thead className="">
                                    <tr className="bg-gray-200">
                                        <th className="text-xs py-2 px-2 font-bold">الطلب</th>
                                        <th className="text-xs py-2 px-2 font-bold">العناصر</th>
                                        <th className="text-xs py-2 px-2 font-bold">الكمية</th>
                                        <th className="text-xs py-2 px-2 font-bold">السعر الكلي</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.items.map(ele1=>
                                        <tr>
                                        <td className="text-center py-2">
                                            <div className="flex justify-center items-center">
                                                <div className="w-12 h-14 border-2 border-yellow-500 rounded-full" style={{background:`url(${ele1.image})`,backgroundSize:"contain",backgroundPosition:"center center"}}></div>
                                            </div>
                                        </td>

                                        <td className="text-center py-2 w-1/2 overflow-hidden">
                                            <span>
                                                {ele1.description}
                                            </span> 
                                        </td>
                                        <td className="text-center py-2 numbers" style={{fontWeight:"bold"}}>
                                            {ele1.quantity}
                                        </td>
                                        <td className="text-center py-2">
                                            <span className="numbers" style={{fontWeight:"bold"}}>
                                                {ele1.total}
                                            </span>
                                        </td>
                                        </tr>
                                    )}
                                  
                                </tbody>
                            </table>
                        </div>
                        <div className="w-full rounded shadow-md mt-2 p-2">
                            <div className="w-full flex justify-between items-center">
                                <span className="text-lg">
                                    تفاصيل الدفع
                                </span>
                                <div>
                                    <span className="text-gray-500 text-sm">
                                        الحالة : 
                                    </span>
                                    <span className="px-3 bg-gray-500 rounded text-white mr-2 text-xs">
                                        {order?order.order_status:""}
                                    </span>
                                </div>
                            </div>
                            <div className="w-2/3 mt-5 flex justify-between items-start">
                                        <div className="flex w-1/2 flex-col justify-between items-start">
                                            <div className="flex justify-between w-3/4 mt-2">
                                                <span className="text-gray-500 text-md">
                                                    السعر:
                                                </span>
                                                <span className="text-md mr-4">
                                                    {order?order.grand_total:""}
                                                </span>
                                            </div>
                                            {order.shipping?
                                            <div className="flex justify-between w-3/4 mt-2">
                                                <span className="text-gray-500 text-md">
                                                تكلفة الشحن:
                                                </span>
                                                <span className="text-md mr-4">
                                                    {order?order.shipping:""}
                                                </span>
                                            </div>
                                            :""}
                                            {order.packaging?
                                            <div
                                            className="flex justify-between w-3/4 mt-2">
                                                <span className="text-gray-500 text-md">
                                                تكلفة التغليف:
                                                </span>
                                                <span className="text-md mr-4">
                                                    {order?order.packaging:""}
                                                </span>
                                            </div>
                                             :""}
                                             {order.discount?
                                            <div className="flex justify-between w-3/4 mt-2">
                                                <span className="text-gray-500 text-md">
                                                الحسم:
                                                </span>
                                                <span className="text-md mr-4">
                                                    {order?order.discount:""}
                                                </span>
                                            </div>
                                            :""}
                                        </div>
                                        <div className="flex w-1/2 flex-col justify-between items-start mr-4">
                                        {order.payment_method?
                                            <div className="flex justify-between w-full mt-2">
                                                <span className="text-gray-500 text-md">
                                                    طريقة الدفع:
                                                </span>
                                                <span className="text-md mr-4">
                                                    {order?order.payment_method.name:""}
                                                </span>
                                            </div>
                                            :""}
                                            {order.taxes?
                                            <div className="flex justify-between w-3/4 mt-2">
                                                <span className="text-gray-500 text-md">
                                                الضرائب:
                                                </span>
                                                <span className="text-md mr-4">
                                                    {order?order.taxes:""}
                                                </span>
                                            </div>
                                            :""}
                                            <div
                                            className="flex justify-between w-3/4 mt-2">
                                                <span className="text-gray-500 text-md">
                                                المجموع:
                                                </span>
                                                <span className="text-md mr-4">
                                                    {order.grand_total}
                                                </span>
                                            </div>
                                        </div>
                                       
                            
                                </div>
                        </div>
                        {order.dispute_id?
                        <div className="w-full rounded shadow-md mt-2 p-2">
                            <div className="w-full flex justify-between items-center">
                                <span className="text-lg">
                                    تغاصيل الإرجاع
                                </span>
                            </div>
                            <div className="w-2/3 mt-5 flex justify-between items-start">
                                        <div className="flex w-1/2 flex-col justify-between items-start">
                                            <div className="flex justify-between w-3/4 mt-2">
                                                <span className="text-gray-500 text-md">
                                                    الكمية:
                                                </span>
                                                <span className="text-md mr-4">
                                                    1400$
                                                </span>
                                            </div>
                                            <div className="flex justify-between w-3/4 mt-2">
                                                <span className="text-gray-500 text-md">
                                                الحالة
                                                </span>
                                                <span className="text-md mr-4">
                                                    <span className="text-white text-xs rounded bg-blue-500 px-2">
                                                        تمت الموافقة
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex w-1/2 flex-col justify-between items-start mr-4">
                                            <div className="flex justify-between w-3/4 mt-2">
                                                <span className="text-gray-500 text-md">
                                                    تم التعديل بتاريخ:
                                                </span>
                                                <span className="text-md mr-4">
                                                    6 أيار
                                                </span>
                                            </div>
                                        </div>
                            
                                </div>
                        </div>
                        :""}
                        <div className="w-full rounded shadow-md mt-2 p-2">
                            <div className="w-full flex justify-between items-center">
                                <span className="text-lg">
                                    التوصيل
                                </span>
                            </div>
                            <div className="w-full flex justify-start items-center mt-2">
                                <span className="text-sm">
                                    التوصيل إلى
                                </span>
                                <span className="text-xs font-bold mr-2">
                                    {order?order.shipping_address:""}
                                </span>
                            </div>
                            <div className="w-full mt-12 mb-6">
                                <div className="w-11/12 bg-yellow-500 rounded relative" style={{height:"2px"}}>
                                    <div className="flex justify-center items-center rounded-full w-8 h-6 bg-yellow-500 absolute right-0 top-1/2 transform -translate-y-1/2">
                                        <span className="text-white text-xs font-bold">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14.712" height="10.513" viewBox="0 0 14.712 10.513">
                                                <path id="Path_293" data-name="Path 293" d="M1187.471,717.879l4.9,4.833,8.407-8.4" transform="translate(-1186.769 -713.608)" fill="none" stroke="#fff" stroke-width="2"/>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="flex justify-center items-center rounded-full w-8 h-6 bg-yellow-500 absolute right-1/4 top-1/2 transform -translate-y-1/2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14.712" height="10.513" viewBox="0 0 14.712 10.513">
                                            <path id="Path_293" data-name="Path 293" d="M1187.471,717.879l4.9,4.833,8.407-8.4" transform="translate(-1186.769 -713.608)" fill="none" stroke="#fff" stroke-width="2"/>
                                        </svg>
                                    </div>
                                    <div className="flex justify-center items-center rounded-full w-8 h-6 bg-yellow-500 absolute right-1/2 top-1/2 transform -translate-y-1/2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14.712" height="10.513" viewBox="0 0 14.712 10.513">
                                            <path id="Path_293" data-name="Path 293" d="M1187.471,717.879l4.9,4.833,8.407-8.4" transform="translate(-1186.769 -713.608)" fill="none" stroke="#fff" stroke-width="2"/>
                                        </svg>
                                    </div>
                                    <div className="flex justify-center items-center rounded-full w-8 h-6 bg-yellow-500 absolute right-3/4 top-1/2 transform -translate-y-1/2">
                                        <span className="text-white text-xs font-bold">4</span>
                                    </div>
                                    <div className="flex justify-center items-center rounded-full w-8 h-6 border-dashed border-2 border-yellow-500 absolute right-full top-1/2 transform -translate-y-1/2">
                                        <span className="text-yellow-500 text-xs font-bold">5</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                      
                    </div>
                    :""}
                    {order?
                    <div className="col-span-12">
                        <div className="w-full flex justify-center items-center">
                            <div className="w-1/2 p-2 shadow-md bg-white fixed bottom-10 flex justify-between items-center rounded">
                                <div className="flex flex-col justify-between-items-center">
                                    <span className="text-sm font-bold">الطلب {order?order.order_number:""}</span>
                                    <span className="text-xs text-gray-500">
                                        {order?order.items.length:""} عنصر
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span onClick={handlModals} className="cursor-pointer rounded border-2 mr-2 border-gray-500 px-2 text-gray-600">
                                        - الغاء عناصر
                                    </span>
                                    <span className="rounded border-2 mr-2 border-gray-500 px-2 text-gray-600">
                                        - الغاء عناصر
                                    </span>
                                    <span className="rounded border-2 mr-2 border-gray-500 px-2 text-gray-600">
                                        - الغاء عناصر
                                    </span>
                                    <span className="rounded border-2 mr-2 border-gray-500 px-2 text-gray-600">
                                        - الغاء عناصر
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    :""}
                </div>
            </div>
        </div>
        

        <div className={`${modal?"flex":"hidden"} fixed z-50 top-0 left-0 h-screen w-full flex flex-col  justify-center items-center bg-black bg-opacity-70`}>
            <div onClick={closeModal} className="rounded-full border-2 border-white w-8 h-6 mb-4 text-white text-center text-md cursor-pointer">
                x
            </div>
            <div className={`${modal?"slideUpss":"slideDownss"} relative p-5 w-1/2 bg-white rounded shadow grid grid.cols-12 `} dir="rtl">
                    <div className="col-span-12">
                        <span className="text-sm font-bold">
                            الغاء العناصر
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
                        <span className="text-sm border-b-2 pb-1 mt-4 w-full">
                            اختر منتجا
                        </span>
                        {order?order.items.map(ele=>
                            <div className="w-full flex justify-between items-center py-2 mt-2 border-b-2">
                                <div className="w-10/12 flex justify-between items-center">
                                    <input type="checkbox" name="" id="" />
                                    <div className="w-12 h-14 mr-2 rounded-full border-2 border-yellow-500" style={{background:`url(${ele.image})`,backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"contain"}}></div>
                                    <span className="text-xs mr-2 max-h-6 overflow-hidden">
                                        {ele.description}
                                    </span>
                                    </div>
                                <span className="text-xs">
                                    ({ele.quantity})
                                </span>
                                <span className="text-xs">
                                    {ele.total}
                                </span>
                            </div>
                            ):""}
                      


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
    );
}