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
    const Route = useAppState('Route');    
    const [payment,setPayment] = useState<boolean>();
    const togglePayment = () => {
        setPayment(!payment)
        setDelivery(false)
        setSort(false)
    }
    const [delivery,setDelivery] = useState<boolean>();
    const toggleDelivery = () => {
        setDelivery(!delivery)
        setPayment(false)
        setSort(false)
    }

    const [sort,setSort] = useState<boolean>();
    const toggleSort = () => {
        setDelivery(false)
        setPayment(false)
        setSort(!sort)
    }
    const router = useRouter()
    const { pid } = router.query;
    interface Item{
        description:""
        quantity:""
        unit_price:""
        total:""
        image:""
        id:""
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
        order_status:string
        total:""
        payment_method:Payment
        payment_status:string
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
    const notreceived = () => {
        setRec(false)
    }
    const received = () => {
        setRec(true)
    }
    const [rec,setRec] = useState<boolean>(false)
    const [data,setData] = useState<Data[]>()
    const [orders,setOrders] = useState<Data[]>()
    const [order,setOrder] = useState<Data>()
    const [modal,setModal] = useState<boolean>(false)
    const [modals,setModals] = useState<boolean>(false)
    
    const [dispute,setDispute] = useState<Dispute>()
    const handlModals = () =>{
        setModal(!modal)
        setInfo(false)
        fetch(`https://amanacart.com/api/order/${order?order.id:""}/dispute`,{
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }})
         .then(res => res.json())
         .then(result =>{
            setDispute(result.data);
                setDispute(result.data.dispute_type)
            })
         .catch(e => {
       });
    }
    const closeModal = () => {
        setModal(false)
    }
    const closeModalss = () =>{
        setInfo(false)
    }
    const orderAgain = (id) => {
        fetch(`https://amanacart.com/api/order/again/${id}`,{
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }})
            .then(res => res.json())
            .then(result =>{
                // setDispute(result.data);
                setInfo(false)
                // window.location.reload(false)
            })
            .catch(e => {
            });
    }
    const handlModalss = () =>{
        setModals(!modals)
        setInfo(false)
   
    }
    const closeModals = () => {
        setModals(false)
    }
    const openModal = () => {
        setModal(true)
    }
    const changeDeliver = (number,e) => {
        let array = [];
        e.currentTarget.children[0].checked =true;
        if(number == 1) {
            data.map(ele=>{
                if(ele.order_status == '???? ???????????? ??????????'){
                    array.push(ele);
                }
            })
            setOrders(array);
        }
    }
    const [modalInfo,setModalInfo] = useState<Data>();
    const [info,setInfo] = useState<boolean>(false)

    const toggleInfo = (ele) => {
        setInfo(true)
        setModalInfo(ele)
        setOrder(ele)
    } 

    const allOrders = () =>{
        setOrders(data)
        setDelivery(false)
        setPayment(false)
        setSort(false)
        var  inputs = document.getElementsByTagName('input');
        for(var i = 0; i < inputs.length; i++) {
            inputs[i].checked = false;
        }
        
        
    }
    useEffect(() => {
        document.title = "?????????????? | ??????????"
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
            <div className="hidden lg:grid grid-cols-10 gap-2 mt-7" dir="rtl">
            
                <div className="col-span-10 bg-white shadow rounded pt-1 px-2">
                    <div className="grid grid-cols-12 gap-2">
                        <div className="col-span-4 pt-2 px-2">
                            <div className="w-full">
                                <span className="text-right  text-lg">
                                    ????????????
                                </span>
                                <div className="w-full pt-2  relative">
                                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className='mr-3 ml-3' width="18.179" height="18.179" viewBox="0 0 18.179 18.179">
                                            <path id="search_icon" d="M6.817,0a6.817,6.817,0,0,0,0,13.634,6.817,6.817,0,0,0,3.693-.994l5.4,5.539,2.272-2.272-5.539-5.4a6.817,6.817,0,0,0,.994-3.693A6.817,6.817,0,0,0,6.817,0m0,2.272A4.545,4.545,0,1,1,2.272,6.817,4.545,4.545,0,0,1,6.817,2.272" fill="rgba(107, 114, 128)"/>
                                        </svg>
                                    </div>
                                    <input type="text" onChange={(e) => handlesearch(e)} className="bg-white w-full rounded px-2 pr-6 py-1 border-2  focus:outline-none focus:shadow  focus:border-0" placeholder="???????? ???? ??????????????" />
                                </div>
                                <div className="w-full mt-2 flex justify-between items-center border-b-2 pb-2">
                                    <span className="text-sm cursor-pointer hover-black text-gray-500" onClick={allOrders}>????????</span>
                                    
                                    <span className="text-md  relative">
                                        <span onClick={toggleDelivery} className="text-sm cursor-pointer text-gray-500 hover-black">
                                            ???????? ??????????????&#9662;
                                        </span>

                                        <div className={`${delivery?"block":"hidden"} absolute  flex flex-col justify-between items-center  mt-2 bg-white  rounded`} style={{boxShadow:"0px 0px 2px #000"}}>
                                            <span onClick={(e)=>changeDeliver(1,e)} className="text-right filters cursor-pointer py-2 px-1 flex w-36 justify-between items-center text-gray-700 text-xs">
                                                ???? ??????????????
                                            <input type="radio" className="mr-2 radios" name="delivery" id="delivery" /> 
                                            <span className="radioImg"></span>
                                            </span>

                                            <span onClick={(e)=>changeDeliver(1,e)} className="text-right filters  cursor-pointer py-2 px-1 flex w-36 justify-between items-center text-gray-700 text-xs">
                                                ???? ??????????????
                                            <input type="radio" className="mr-2 radios" name="delivery" id="delivery" /> 
                                            <span className="radioImg"></span>
                                            </span>

                                            <span onClick={(e)=>changeDeliver(1,e)} className="text-right filters  cursor-pointer py-2 px-1 flex w-36 justify-between items-center text-gray-700 text-xs">
                                                ???? ??????????????
                                            <input type="radio" className="mr-2 radios" name="delivery" id="delivery" /> 
                                            <span className="radioImg"></span>
                                            </span>
                                        </div>
                                    </span>
                                    <span className="text-md  relative">
                                        <span onClick={togglePayment} className="text-sm cursor-pointer text-gray-500 hover-black">
                                            ???????? ??????????&#9662;
                                        </span>

                                        <div className={`${payment?"block":"hidden"} absolute  flex flex-col justify-between items-center  mt-2 bg-white  rounded`} style={{boxShadow:"0px 0px 2px #000"}}>
                                            <span onClick={(e)=>changeDeliver(1,e)} className="text-right filters cursor-pointer py-2 px-1 flex w-36 justify-between items-center text-gray-700 text-xs">
                                                ???? ??????????????
                                            <input type="radio" className="mr-2 radios" name="delivery" id="delivery" /> 
                                            <span className="radioImg"></span>
                                            </span>

                                            <span onClick={(e)=>changeDeliver(1,e)} className="text-right filters  cursor-pointer py-2 px-1 flex w-36 justify-between items-center text-gray-700 text-xs">
                                                ???? ??????????????
                                            <input type="radio" className="mr-2 radios" name="delivery" id="delivery" /> 
                                            <span className="radioImg"></span>
                                            </span>

                                            <span onClick={(e)=>changeDeliver(1,e)} className="text-right filters  cursor-pointer py-2 px-1 flex w-36 justify-between items-center text-gray-700 text-xs">
                                                ???? ??????????????
                                            <input type="radio" className="mr-2 radios" name="delivery" id="delivery" /> 
                                            <span className="radioImg"></span>
                                            </span>
                                        </div>
                                    </span>
                                    <span className="text-md  relative">
                                        <span onClick={toggleSort} className="text-sm cursor-pointer text-gray-500 hover-black">
                                            ??????????&#8645;
                                        </span>

                                        <div className={`${sort?"block":"hidden"} absolute  flex flex-col justify-between items-center  mt-2 bg-white  rounded`} style={{boxShadow:"0px 0px 2px #000"}}>
                                            <span onClick={(e)=>changeDeliver(1,e)} className="text-right filters cursor-pointer py-2 px-1 flex w-36 justify-between items-center text-gray-700 text-xs">
                                                ???? ??????????????
                                            <input type="radio" className="mr-2 radios" name="delivery" id="delivery" /> 
                                            <span className="radioImg"></span>
                                            </span>

                                            <span onClick={(e)=>changeDeliver(1,e)} className="text-right filters  cursor-pointer py-2 px-1 flex w-36 justify-between items-center text-gray-700 text-xs">
                                                ???? ??????????????
                                            <input type="radio" className="mr-2 radios" name="delivery" id="delivery" /> 
                                            <span className="radioImg"></span>
                                            </span>

                                            <span onClick={(e)=>changeDeliver(1,e)} className="text-right filters  cursor-pointer py-2 px-1 flex w-36 justify-between items-center text-gray-700 text-xs">
                                                ???? ??????????????
                                            <input type="radio" className="mr-2 radios" name="delivery" id="delivery" /> 
                                            <span className="radioImg"></span>
                                            </span>
                                        </div>
                                    </span>

                                </div>
                                <div className="w-full mt-2 scr pt-1  overflow-y-scroll" style={{height:"27rem"}}>
                                    {orders?orders.map(ele=>
                                        <div key={ele.id} className="w-full rounded mt-2  p-2 cursor-pointer shadow" onClick={()=>setOrder(ele)}  style={{border:"1px solid #eee"}}>
                                            
                                        <div className="w-full  flex justify-between items-center mt-3" >
                                            <span className="text-sm font-bold">
                                                ?????? ?????????? {ele.order_number.split('#')}
                                            </span>
                                            
                                        
                                            <span  className="text-xs text-green-500 ml-2">
                                                {ele?ele.payment_status:""}
                                            </span>
                                        </div>
                                        <div className="w-9/12  justify-between flex  items-center mt-2">
                                            <span className="text-sm  text-gray-500">
                                                ?????????? ?????????? :
                                            </span>
                                            
                                            <span className="text-xs text-right w-1/3 mr-7 text-gray-500">
                                                {ele.order_date}
                                            </span>
                                        </div>
                                        <div className="w-9/12  flex justify-between  items-center mt-2">
                                            <span className="text-sm  ">
                                                ?????????? ?????????? :
                                            </span>
                                            
                                            <span className="text-xs text-right w-1/3 mr-7 font-bold">
                                                {ele.grand_total}
                                            </span>
                                        </div>
                                    
                                        <div className="w-full flex justify-between mt-2">
                                            <span className="text-xs text-right   text-gray-500">
                                                {ele.items.length} ????????
                                            </span>
                                            <span style={{padding:"0.1rem .6rem"}} className={`${ele.order_status=='???? ??????????????'?"bg-green-500":""} ${ele.order_status=='???? ??????????????'?"bg-green-500":""} ${ele.order_status=="?????? ???? ??????????"?"bg-yellow-500":""} ${ele.payment_status=="?????? ??????????"?"bg-red-500":""} ${ele.payment_status=="?????????? ??????????????"?"bg-blue-500":""} ${ele.payment_status=="???????????? ????????"?"bg-gray-700":""} ${ele.payment_status=="?????????????? ??????????????"?"bg-yellow-500":""} ${ele.payment_status=="????????"?"bg-gray-500":""} ${ele.payment_status=="???? ??????????"?"bg-green-500":""} ${ele.order_status=="???? ???????????? ??????????"?"bg-yellow-500":""} ${ele.order_status=='?????????? ??????????????'?"bg-gray-700":""}  text-xs rounded text-white`}>
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
                            <div className="w-full flex justify-start items-center pt-2 px-4">
                                <span className="text-md font-bold ">
                                    ???????????? {order?order.order_number.split('#'):""}
                                </span>
                            </div>
                            <div className="w-full scr " style={{maxHeight:"28rem",overflowY:"scroll"}}>
                                <div className="w-full flex justify-between items-center   mt-3 ">
                                    
                                    <table className="w-full">
                                        <thead className="flex w-full justify-between">
                                            <tr className="bg-gray-100 flex w-full justify-between px-14">
                                                <th style={{padding:"0.7rem 0rem"}} className="text-xs 0 w-1/12 text-gray-700 font-bold">??????????</th>
                                                <th style={{padding:"0.7rem 0rem"}} className="text-xs 0 w-6/12 text-gray-700 font-bold">??????????????</th>
                                                <th style={{padding:"0.7rem 0rem"}} className="text-xs 0 w-2/12 text-gray-700 font-bold">????????????</th>
                                                <th style={{padding:"0.7rem 0rem"}} className="text-xs 0 w-3/12 text-gray-700 font-bold">?????????? ??????????</th>
                                            </tr>
                                        </thead>
                                        <tbody  className="flex scr flex-col  items-center justify-between overflow-y-scroll w-full" style={{maxHeight:"8rem"}}>
                                            {order.items.map(ele1=>
                                                <tr key={ele1.id} className="flex w-full justify-between px-12">
                                                    <td className="w-1/12 text-center py-2">
                                                        <div className="flex justify-center items-center">
                                                            <div className="w-12 h-14 border-2 border-yellow-500 rounded-full" style={{background:`url(${ele1.image})`,backgroundSize:"contain",backgroundPosition:"center center"}}></div>
                                                        </div>
                                                    </td>
                                                    <td className="w-6/12 text-right pr-3 py-2 overflow-hidden">
                                                        <span className="text-sm text-right">
                                                            {ele1.description}
                                                        </span> 
                                                    </td>
                                                    <td className="w-2/12 text-center py-2 numbers text-gray-600">
                                                        {ele1.quantity}
                                                    </td>
                                                    <td className="w-3/12 text-center py-2">
                                                        <span className="numbers text-center text-gray-600">
                                                            {ele1.total}
                                                        </span>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="w-full rounded shadow mt-2 p-2" style={{border:"1px solid #eee"}}>
                                    <div className="w-full flex justify-between items-center">
                                        <span className="text-md">
                                            ???????????? ??????????
                                        </span>
                                        <div>
                                            <span className="text-gray-500 text-sm">
                                                ???????????? : 
                                            </span>
                                            <span  style={{padding:"0.05rem .6rem"}} className="bg-yellow-500 rounded text-white mr-2 text-xs">
                                                {order?order.order_status:""}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="w-full mt-5 flex justify-between items-start">
                                                <div className="flex w-1/2 flex-col justify-between items-start">
                                                    <div className="flex justify-between w-full mt-2">
                                                        <span className="text-gray-500 w-1/2 text-md">
                                                            ??????????:
                                                        </span>
                                                        <span className="text-md  mr-4 text-right w-1/2 text-gray-600">
                                                            {order?order.grand_total:""}
                                                        </span>
                                                    </div>
                                                    {order.shipping?
                                                    <div className="flex justify-between w-full mt-2">
                                                        <span className="text-gray-500 w-1/2 text-md ">
                                                        ?????????? ??????????:
                                                        </span>
                                                        <span className="text-md mr-4 text-right w-1/2 text-gray-600">
                                                             {order?order.shipping:""}
                                                        </span>
                                                    </div>
                                                    :""}
                                                    {order.packaging?
                                                    <div
                                                    className="flex justify-between w-full mt-2">
                                                        <span className="text-gray-500 w-1/2 text-md">
                                                        ?????????? ??????????????:
                                                        </span>
                                                        <span className="text-md mr-4 w-1/2 text-right text-gray-600">
                                                            {order?order.packaging:""}
                                                        </span>
                                                    </div>
                                                    :""}
                                                    {order.discount?
                                                    <div className="flex justify-between w-full mt-2">
                                                        <span className="text-gray-500 w-1/2 text-md">
                                                        ??????????:
                                                        </span>
                                                        <span className="text-md mr-4 w-1/2 text-right text-gray-600">
                                                            {order?order.discount:""}
                                                        </span>
                                                    </div>
                                                    :""}
                                                </div>
                                                <div className="flex w-1/2 flex-col justify-between items-start mr-4">
                                                {order.payment_method?
                                                    <div className="flex justify-between w-full mt-2">
                                                        <span className="text-gray-500 w-1/2 text-md">
                                                            ?????????? ??????????:
                                                        </span>
                                                        <span className="text-sm text-blue-600 mr-4 w-1/2 text-right">
                                                            {order?order.payment_method.name:""}
                                                        </span>
                                                    </div>
                                                    :""}
                                                    {order.taxes?
                                                    <div className="flex justify-between w-full mt-2">
                                                        <span className="text-gray-500 w-1/2 text-md">
                                                        ??????????????:
                                                        </span>
                                                        <span className="text-md w-1/2 text-right mr-4">
                                                            {order?order.taxes:""}
                                                        </span>
                                                    </div>
                                                    :""}
                                                    <div
                                                    className="flex justify-between w-full mt-2">
                                                        <span className="text-gray-500 w-1/2 text-md">
                                                        ??????????????:
                                                        </span>
                                                        <span className="text-md mr-4 w-1/2 text-right text-gray-600">
                                                            {order.grand_total}
                                                        </span>
                                                    </div>
                                                </div>
                                            
                                    
                                        </div>
                                </div>
                                {order.dispute_id?
                                <div className="w-full rounded shadow mt-2 p-2" style={{border:"1px solid #eee"}}>
                                    <div className="w-full flex justify-between items-center">
                                        <span className="text-md">
                                            ???????????? ??????????????
                                        </span>
                                    </div>
                                    <div className="w-2/3 mt-5 flex justify-between items-start">
                                                <div className="flex w-1/2 flex-col justify-between items-start">
                                                    <div className="flex justify-between w-3/4 mt-2">
                                                        <span className="text-gray-500 text-md">
                                                            ????????????:
                                                        </span>
                                                        <span className="text-md mr-4">
                                                            1400$
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-between w-3/4 mt-2">
                                                        <span className="text-gray-500 text-md">
                                                        ????????????
                                                        </span>
                                                        <span className="text-md mr-4">
                                                            <span className="text-white text-xs rounded bg-blue-500 px-2">
                                                                ?????? ????????????????
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex w-1/2 flex-col justify-between items-start mr-4">
                                                    <div className="flex justify-between w-3/4 mt-2">
                                                        <span className="text-gray-500 text-md">
                                                            ???? ?????????????? ????????????:
                                                        </span>
                                                        <span className="text-md mr-4">
                                                            6 ????????
                                                        </span>
                                                    </div>
                                                </div>
                                    
                                        </div>
                                </div>
                                :""}
                                <div className="w-full rounded shadow mt-2 p-2" style={{border:"1px solid #eee"}}>
                                    <div className="w-full flex justify-between items-center">
                                        <span className="text-md">
                                            ??????????
                                        </span>
                                    </div>
                                    <div className="w-full flex justify-start items-center mt-2">
                                        <span className="text-sm">
                                            ?????????????? ??????
                                        </span>
                                        <span className="text-xs font-bold mr-2">
                                            {order?order.shipping_address:""}
                                        </span>
                                    </div>
                                  
                                    
                                    
                                
                                
                                </div>
                            </div>
                            
                        </div>
                        :
                            <div className="col-span-8 flex flex-col justify-center items-center">
                                <img src={`${Route}/images/icons/ordersblack.svg`} className="w-1/2 ml-2" alt="" />
                                <span className="text-md text-center mt-4 font-bold mr-10">
                                    ???????? ???????? ???????? ????????????????
                                </span>
                            </div>
                        }
                        <div className="col-span-4"></div>
                        <div className="col-span-8">
                            
                        {order?
                                        <div className="col-span-12">
                                            <div className="w-full flex relative justify-end items-center">
                                                <div className="w-full p-2 shadow  bg-white absolute bottom-2 flex justify-between items-center rounded" style={{border:"1px solid #eee"}}>
                                                    <div className="flex flex-col justify-between-items-center">
                                                        <span className="text-sm font-bold">?????????? {order?order.order_number.split('#'):""}</span>
                                                        <span className="text-xs text-gray-500">
                                                            {order?order.items.length:""} ???????? 
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span onClick={handlModals} className=" w-28 text-center cursor-pointer rounded border-2 mr-2 border-gray-500 px-2 text-gray-600 flex justify-between items-center">
                                                            {/* cancelation */}
                                                            {/* <img className="w-4" src={`${Route}/images/icons/cancel.svg`} alt="" /> */}
                                                            ?????????? ??????????
                                                        </span>
                                                        <span onClick={()=>orderAgain(order?order.id:"")} className="cursor-pointer w-28 text-center rounded border-2 mr-2 border-gray-500 px-2 text-gray-600">
                                                            ?????????? ??????????
                                                        </span>
                                                        <span className="cancelation w-28 text-center rounded border-2 mr-2 border-gray-500 px-2 text-gray-600">
                                                            ????????????????
                                                        </span>
                                                        <span onClick={handlModalss} className="cursor-pointer cancelation w-28 text-center rounded border-2 mr-2 border-gray-500 px-2 text-gray-600">
                                                            ?????? ????????
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    :""}
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div className="grid lg:hidden grid-cols-10 gap-2 mt-7" dir="rtl">
                {/* <div className="col-span-10">
                    <div className="col-span-4 pt-2 px-2">
                                <div className="w-full ">
                                    <span className="text-right  text-lg">
                                        ????????????
                                    </span>
                                    <div className="w-full pt-2  relative">
                                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className='mr-3 ml-3' width="18.179" height="18.179" viewBox="0 0 18.179 18.179">
                                                <path id="search_icon" d="M6.817,0a6.817,6.817,0,0,0,0,13.634,6.817,6.817,0,0,0,3.693-.994l5.4,5.539,2.272-2.272-5.539-5.4a6.817,6.817,0,0,0,.994-3.693A6.817,6.817,0,0,0,6.817,0m0,2.272A4.545,4.545,0,1,1,2.272,6.817,4.545,4.545,0,0,1,6.817,2.272" fill="rgba(107, 114, 128)"/>
                                            </svg>
                                        </div>
                                        <input type="text" onChange={(e) => handlesearch(e)} className="bg-white w-full rounded px-2 pr-6 py-1 border-2  focus:outline-none focus:shadow  focus:border-0" placeholder="???????? ???? ??????????????" />
                                    </div>
                                    <div className="w-full mt-2 flex justify-between items-center border-b-2 pb-2">
                                        <span className="text-sm cursor-pointer hover-black text-gray-500" onClick={allOrders}>????????</span>
                                        
                                        <span className="text-md  relative">
                                            <span onClick={toggleDelivery} className="text-sm cursor-pointer text-gray-500 hover-black">
                                                ???????? ??????????????&#9662;
                                            </span>

                                            <div className={`${delivery?"block":"hidden"} absolute  flex flex-col justify-between items-center  mt-2 bg-white  rounded`} style={{boxShadow:"0px 0px 2px #000"}}>
                                                <span onClick={(e)=>changeDeliver(1,e)} className="text-right filters cursor-pointer py-2 px-1 flex w-36 justify-between items-center text-gray-700 text-xs">
                                                    ???? ??????????????
                                                <input type="radio" className="mr-2 radios" name="delivery" id="delivery" /> 
                                                <span className="radioImg"></span>
                                                </span>

                                                <span onClick={(e)=>changeDeliver(1,e)} className="text-right filters  cursor-pointer py-2 px-1 flex w-36 justify-between items-center text-gray-700 text-xs">
                                                    ???? ??????????????
                                                <input type="radio" className="mr-2 radios" name="delivery" id="delivery" /> 
                                                <span className="radioImg"></span>
                                                </span>

                                                <span onClick={(e)=>changeDeliver(1,e)} className="text-right filters  cursor-pointer py-2 px-1 flex w-36 justify-between items-center text-gray-700 text-xs">
                                                    ???? ??????????????
                                                <input type="radio" className="mr-2 radios" name="delivery" id="delivery" /> 
                                                <span className="radioImg"></span>
                                                </span>
                                            </div>
                                        </span>
                                        <span className="text-md  relative">
                                            <span onClick={togglePayment} className="text-sm cursor-pointer text-gray-500 hover-black">
                                                ???????? ??????????&#9662;
                                            </span>

                                            <div className={`${payment?"block":"hidden"} absolute  flex flex-col justify-between items-center  mt-2 bg-white  rounded`} style={{boxShadow:"0px 0px 2px #000"}}>
                                                <span onClick={(e)=>changeDeliver(1,e)} className="text-right filters cursor-pointer py-2 px-1 flex w-36 justify-between items-center text-gray-700 text-xs">
                                                    ???? ??????????????
                                                <input type="radio" className="mr-2 radios" name="delivery" id="delivery" /> 
                                                <span className="radioImg"></span>
                                                </span>

                                                <span onClick={(e)=>changeDeliver(1,e)} className="text-right filters  cursor-pointer py-2 px-1 flex w-36 justify-between items-center text-gray-700 text-xs">
                                                    ???? ??????????????
                                                <input type="radio" className="mr-2 radios" name="delivery" id="delivery" /> 
                                                <span className="radioImg"></span>
                                                </span>

                                                <span onClick={(e)=>changeDeliver(1,e)} className="text-right filters  cursor-pointer py-2 px-1 flex w-36 justify-between items-center text-gray-700 text-xs">
                                                    ???? ??????????????
                                                <input type="radio" className="mr-2 radios" name="delivery" id="delivery" /> 
                                                <span className="radioImg"></span>
                                                </span>
                                            </div>
                                        </span>
                                        <span className="text-md  relative">
                                            <span onClick={toggleSort} className="text-sm cursor-pointer text-gray-500 hover-black">
                                                ??????????&#8645;
                                            </span>

                                            <div className={`${sort?"block":"hidden"} absolute  flex flex-col justify-between items-center  mt-2 bg-white  rounded`} style={{boxShadow:"0px 0px 2px #000"}}>
                                                <span onClick={(e)=>changeDeliver(1,e)} className="text-right filters cursor-pointer py-2 px-1 flex w-36 justify-between items-center text-gray-700 text-xs">
                                                    ???? ??????????????
                                                <input type="radio" className="mr-2 radios" name="delivery" id="delivery" /> 
                                                <span className="radioImg"></span>
                                                </span>

                                                <span onClick={(e)=>changeDeliver(1,e)} className="text-right filters  cursor-pointer py-2 px-1 flex w-36 justify-between items-center text-gray-700 text-xs">
                                                    ???? ??????????????
                                                <input type="radio" className="mr-2 radios" name="delivery" id="delivery" /> 
                                                <span className="radioImg"></span>
                                                </span>

                                                <span onClick={(e)=>changeDeliver(1,e)} className="text-right filters  cursor-pointer py-2 px-1 flex w-36 justify-between items-center text-gray-700 text-xs">
                                                    ???? ??????????????
                                                <input type="radio" className="mr-2 radios" name="delivery" id="delivery" /> 
                                                <span className="radioImg"></span>
                                                </span>
                                            </div>
                                        </span>

                                    </div>
                                    <div className="w-full mt-2 scr bg-white px-2 pt-1  overflow-y-scroll" style={{height:"27rem"}}>
                                        {orders?orders.map(ele=>
                                            <div onClick={()=>toggleInfo(ele)} className="w-full rounded mt-2  p-2 cursor-pointer shadow"   style={{border:"1px solid #eee"}}>
                                                
                                                <div className="w-full  flex justify-between items-center mt-3" >
                                                    <span className="text-sm font-bold">
                                                        ?????? ?????????? {ele.order_number.split('#')}
                                                    </span>
                                                    
                                                
                                                    <span  className="text-xs text-green-500 ml-2">
                                                        {ele?ele.payment_status:""}
                                                    </span>
                                                </div>
                                                <div className="w-9/12  justify-between flex  items-center mt-2">
                                                    <span className="text-sm  text-gray-500">
                                                        ?????????? ?????????? :
                                                    </span>
                                                    
                                                    <span className="text-xs text-right w-1/3 mr-7 text-gray-500">
                                                        {ele.order_date}
                                                    </span>
                                                </div>
                                                <div className="w-9/12  flex justify-between  items-center mt-2">
                                                    <span className="text-sm  ">
                                                        ?????????? ?????????? :
                                                    </span>
                                                    
                                                    <span className="text-xs text-right w-1/3 mr-7 font-bold">
                                                        {ele.grand_total}
                                                    </span>
                                                </div>
                                            
                                                <div className="w-full flex justify-between mt-2">
                                                    <span className="text-xs text-right   text-gray-500">
                                                        {ele.items.length} ????????
                                                    </span>
                                                    <span style={{padding:"0.1rem .6rem"}} className={`${ele.order_status=='???? ??????????????'?"bg-green-500":""} ${ele.order_status=='???? ??????????????'?"bg-green-500":""} ${ele.order_status=="?????? ???? ??????????"?"bg-yellow-500":""} ${ele.payment_status=="?????? ??????????"?"bg-red-500":""} ${ele.payment_status=="?????????? ??????????????"?"bg-blue-500":""} ${ele.payment_status=="???????????? ????????"?"bg-gray-700":""} ${ele.payment_status=="?????????????? ??????????????"?"bg-yellow-500":""} ${ele.payment_status=="????????"?"bg-gray-500":""} ${ele.payment_status=="???? ??????????"?"bg-green-500":""} ${ele.order_status=="???? ???????????? ??????????"?"bg-yellow-500":""} ${ele.order_status=='?????????? ??????????????'?"bg-gray-700":""}  text-xs rounded text-white`}>
                                                        {ele.order_status}
                                                    </span>
                                                </div>
                                            </div>
                                    
                                        ):""}
                                    </div>
                                </div>
                            </div>
                </div> */}
                <div className="col-span-10 bg-white shadow rounded pt-1 px-2">
                        {orders?orders.map(ele=>
                                        <div key={ele.id} className="w-full  rounded mt-2  p-2 cursor-pointer shadow" onClick={()=>setOrder(ele)}  style={{border:"1px solid #eee"}}>
                                            
                                        <div className="w-full  flex justify-between items-center mt-3" >
                                            <span className="text-sm font-bold">
                                                ?????? ?????????? {ele.order_number.split('#')}
                                            </span>
                                            
                                        
                                            <span  className="text-xs text-green-500 ml-2">
                                                {ele?ele.payment_status:""}
                                            </span>
                                        </div>
                                        <div className="w-9/12  justify-between flex  items-center mt-2">
                                            <span className="text-sm  text-gray-500">
                                                ?????????? ?????????? :
                                            </span>
                                            
                                            <span className="text-xs text-right w-1/3 mr-7 text-gray-500">
                                                {ele.order_date}
                                            </span>
                                        </div>
                                        <div className="w-9/12  flex justify-between  items-center mt-2">
                                            <span className="text-sm  ">
                                                ?????????? ?????????? :
                                            </span>
                                            
                                            <span className="text-xs text-right w-1/3 mr-7 font-bold">
                                                {ele.grand_total}
                                            </span>
                                        </div>
                                    
                                        <div className="w-full flex justify-between mt-2">
                                            <span className="text-xs text-right   text-gray-500">
                                                {ele.items.length} ????????
                                            </span>
                                            <span style={{padding:"0.1rem .6rem"}} className={`${ele.order_status=='???? ??????????????'?"bg-green-500":""} ${ele.order_status=='???? ??????????????'?"bg-green-500":""} ${ele.order_status=="?????? ???? ??????????"?"bg-yellow-500":""} ${ele.payment_status=="?????? ??????????"?"bg-red-500":""} ${ele.payment_status=="?????????? ??????????????"?"bg-blue-500":""} ${ele.payment_status=="???????????? ????????"?"bg-gray-700":""} ${ele.payment_status=="?????????????? ??????????????"?"bg-yellow-500":""} ${ele.payment_status=="????????"?"bg-gray-500":""} ${ele.payment_status=="???? ??????????"?"bg-green-500":""} ${ele.order_status=="???? ???????????? ??????????"?"bg-yellow-500":""} ${ele.order_status=='?????????? ??????????????'?"bg-gray-700":""}  text-xs rounded text-white`}>
                                                {ele.order_status}
                                            </span>
                                        </div>
                                    </div>
                                
                                    ):""}
                </div>
            </div>
            
            
            
            <div className={`${modal?"flex":"hidden"} fixed z-50 px-3 top-0 left-0 h-screen w-full flex flex-col  justify-center items-center bg-black bg-opacity-70`}>
                <div onClick={closeModal} className="rounded-full border-2 border-white w-8 h-6 mb-4 text-white text-center text-md cursor-pointer">
                    x
                </div>
                <div className={`${modal?"slideUpss":"slideDownss"} relative p-5 w-full lg:w-1/2 bg-white rounded shadow grid grid.cols-12 `} dir="rtl">
                        <div className="col-span-12">
                            <span className="text-sm font-bold">
                                ?????????? ??????????????
                            </span>
                        </div>
                        <div className="col-span-12 mt-5 flex flex-col justify-between items-start">
                            <span className="text-sm">
                                ???????? ??????????
                            </span>
                            <select name="" id="" className="w-full border-2 rounded mt-3 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent">
                                <option value="">???????? ????????</option>
                                {/* {dispute?Object.values(dispute.dispute_type).map((ele, i)=>
                                    <option value={ele}>{ele}</option>
                                ):""} */}
                            </select>
                            <span className="text-sm border-b-2 pb-1 mt-4 w-full">
                                ???????? ??????????
                            </span>
                            {order?order.items.map(ele=>
                                <div key={ele.id} className="w-full flex justify-between items-center py-2 mt-2 border-b-2">
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
                                ??????????
                            </span>
                            <textarea className="w-full h-16 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-3" name="" id=""></textarea>

                            <span className="text-xs w-full mt-2">
                                ???????????? : ?????????????? ?????? ??????????   !
                            </span>
                            <span className="text-sm text-white self-center text-center w-56 cursor-pointer py-1 rounded bg-yellow-500 mt-4">
                                ?????????? ??????????
                            </span>
                        </div>
                </div>
            </div>
        
            <div className={`${modals?"flex":"hidden"} fixed z-50 top-0 left-0 h-screen w-full flex flex-col  justify-center items-center bg-black bg-opacity-70`}>
            <div onClick={closeModals} className="rounded-full border-2 border-white w-8 h-6 mb-4 text-white text-center text-md cursor-pointer">
                    x
                </div>
                <div className={`${modals?"slideUpss":"slideDownss"} relative p-5 w-2/3 lg:w-1/4 bg-white rounded shadow grid grid.cols-12 `} dir="rtl">
                    <div className="col-span-12">
                        <span className="text-md font-bold">
                            ??????????
                        </span>
                    </div>
                    <div className="col-span-12">
                        <span className="text-gray-700 text-right text-sm">
                            ?????? ?????? ???????? ???? ???????? ???????????? ???? ??????????????
                        </span>
                    </div>
                    <div className="col-span-12 mt-3">
                        <div className="w-1/3 flex justify-between items-center">
                            <a href={`/dashboard/dispute/dispute?pid=${order?order.id:""}`}>
                                <span className="text-xs cursor-pointer bg-red-400 text-center text-white rounded w-12 px-2 py-1 border-red-400">
                                    ????????????
                                </span>
                            </a>
                            <span onClick={closeModals} className="text-xs cursor-pointer text-center border-2 text-gray-500 rounded w-12 px-2 py-1">
                                ??????????
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        
                <div className={`${info?"flex":"hidden"} px-3 fixed z-50 top-0 left-0 h-screen w-full flex flex-col  justify-center items-center bg-black bg-opacity-70`}>
                    <div onClick={closeModalss} className="rounded-full border-2 border-white w-8 h-6 mb-4 text-white text-center text-md cursor-pointer">
                        x
                    </div>
                    <div className={`${info?"slideUpss":"slideDownss"} relative p-5 w-full bg-white rounded shadow gap-2 grid grid.cols-12 overflow-y-scroll overflow-x-hidden `} style={{maxHeight:"70vh"}} dir="rtl">
                        <div className="col-span-12">
                            <span className="text-xs lg:text-sm font-bold">
                                ???????????? ?????????? <span className="text-yellow-500">{modalInfo?modalInfo.order_number.split('#'):""}</span>
                            </span>
                        </div>     
                        <div className="col-span-6 flex justify-between pl-2 mt-2 items-center">
                            <span className="text-xs text-gray-500">
                                ?????????? ??????????
                            </span>
                            <span className="text-xs text-gray-500 text-right">
                                {modalInfo?modalInfo.order_date:""}
                            </span>
                        </div>
                        <div className="col-span-6 flex justify-between  mt-2 items-center">
                            <span className="text-xs text-gray-500">
                                ??????????
                            </span>
                            <span className="text-xs text-gray-500 text-right">
                                {modalInfo?modalInfo.total:""}
                            </span>
                        </div>
                        <div className="col-span-6 flex justify-between pl-2 mt-2 items-center">
                            <span className="text-xs text-gray-500">
                                ?????????? ??????????
                            </span>
                            <span className="text-xs text-gray-500 text-right">
                                {modalInfo&&modalInfo.shipping?modalInfo.shipping:'0 ??.??'}
                            </span>
                        </div>
                        <div className="col-span-6 flex justify-between  mt-2 items-center">
                            <span className="text-xs text-gray-500">
                                ?????????? ??????????????
                            </span>
                            <span className="text-xs text-gray-500 text-right">
                                {modalInfo&&modalInfo.packaging?modalInfo.packaging:"0 ??.??"}
                            </span>
                        </div>
                        <div className="col-span-6 flex justify-between pl-2 mt-2 items-center">
                            <span className="text-xs text-gray-500">
                                ?????????? ??????????
                            </span>
                            <span className="text-xs text-green-500 text-right" style={{fontSize:"10px"}}>
                                {modalInfo?modalInfo.payment_method.name:""}
                            </span>
                        </div>
                        <div className="col-span-6 flex justify-between mt-2 items-center">
                            <span className="text-xs text-gray-500">
                                ??????????????
                            </span>
                            <span className="text-xs text-gray-500 text-right" style={{fontSize:"10px"}}>
                                {modalInfo&&modalInfo.taxes?modalInfo.taxes:"0 ??.??"}
                            </span>
                        </div>
                        <div className="col-span-6 flex justify-between pl-2 mt-2 items-center">
                            <span className="text-xs text-gray-500">
                                ?????????? ??????????
                            </span>
                            <span className="text-xs text-gray-500 text-right">
                                {modalInfo?modalInfo.grand_total:""}
                            </span>
                        </div>
                        <div className="col-span-6 flex justify-between  mt-2 items-center">
                            <span className="text-xs text-gray-500">
                                ????????????
                            </span>
                            <span  style={{padding:"0.05rem .6rem",fontSize:"10px"}} className="bg-yellow-500 rounded text-white mr-2 text-xs">
                                {modalInfo?modalInfo.order_status:""}
                            </span>
                        </div>
                           
                            <div className="col-span-12">
                                <span className="text-xs lg:text-sm font-bold">
                                    ???????????? ?????????????? 
                                </span>
                            </div> 
                            <div className="col-span-6 flex justify-between  mt-2 items-center">
                                <span className="text-xs text-gray-500">
                                    ????????????
                                </span>
                                <span  style={{padding:"0.05rem .6rem",fontSize:"10px"}} className=" text-gray-500 mr-2 text-xs">
                                    1400$
                                </span>
                            </div>
                            <div className="col-span-6 flex justify-between  mt-2 items-center">
                                <span className="text-xs text-gray-500">
                                    ????????????
                                </span>
                                <span  style={{padding:"0.05rem .6rem",fontSize:"10px"}} className="bg-green-500 rounded text-white mr-2 text-xs">
                                    ???? ??????????????
                                </span>
                            </div>

                            


                        <div className="col-span-3 flex justify-between  mt-2 items-center">
                          
                          <span onClick={handlModals} style={{fontSize:"10px"}} className=" text-center cursor-pointer rounded border-2 mr-2 border-gray-500 px-2 text-gray-600 flex justify-between items-center">
                              {/* cancelation */}
                              {/* <img className="w-4" src={`${Route}/images/icons/cancel.svg`} alt="" /> */}
                              ?????????? ??????????
                          </span>
                          </div>
                          <div className="col-span-3 flex justify-between mt-2 items-center">

                          <span onClick={()=>orderAgain(order?order.id:"")} style={{fontSize:"10px"}} className=" text-center cursor-pointer rounded border-2 mr-2 border-gray-500 px-1 text-gray-600 flex justify-between items-center">
                              {/* cancelation */}
                              {/* <img className="w-4" src={`${Route}/images/icons/cancel.svg`} alt="" /> */}
                              ?????????? ??????????
                          </span>
                          </div>

                          <div className="cancelation col-span-3 flex justify-between mt-2 items-center">
                              <span onClick={()=>orderAgain(order?order.id:"")} style={{fontSize:"10px"}} className=" text-center cursor-pointer rounded border-2 mr-2 border-gray-500 px-1 text-gray-600 flex justify-between items-center">
                                  {/* cancelation */}
                                  {/* <img className="w-4" src={`${Route}/images/icons/cancel.svg`} alt="" /> */}
                                  ????????????????
                              </span>
                          </div>
                          <div className=" col-span-3 flex justify-between mt-2 items-center">
                              <span onClick={handlModalss} style={{fontSize:"10px"}} className=" text-center cursor-pointer rounded border-2 mr-2 border-gray-500 px-1 text-gray-600 flex justify-between items-center">
                                  {/* cancelation */}
                                  {/* <img className="w-4" src={`${Route}/images/icons/cancel.svg`} alt="" /> */}
                                  ?????? ????????
                              </span>
                          </div>
                                                                                     
                        </div>
                    </div>                
                </div>                
            
     
      
   
    );
}