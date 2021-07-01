import React, { useState,useEffect, useRef } from 'react';
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
import {useDropzone} from 'react-dropzone';
const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row' as 'row',
    flexWrap: 'wrap' as 'wrap',
    marginTop: 16
  };
  
  const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    maxWidth: "100%",
    padding: 4,
    boxSizing: 'border-box' as 'border-box'
  };
  
  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  };
  
  const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
  };
export default function Orders() {
    interface Item{
        id:""
        description:""
        image:""
        quantity:""
        total:""
        unit_price:""
    }
    const [avatar,setAvatar] = useState([])
    
    const thumbs = avatar.map(file => (
        <div style={thumb} key={file.name}>
          <div style={thumbInner}>
            <img
              src={file.preview}
              style={img}
            />
          </div>
        </div>
      ));  
    interface Shop{
        cover_image:""
        image:""
        member_since:""
        name:""
        rating:""
        verified_text:""
    }
    interface Order{
        id:""
        grand_total:""
        grand_total_raw:""
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
        id:number
        order_number:""
        order_status:""
        total:""
        grand_total:""
        items:Item
        dispute_types:Dis
        status:""
    }
    interface Dis{
        detail:""
        id:""
    }
    interface Reply{
        user:User
        customer:Customer
        reply:""
    }

    const {getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setAvatar(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
          })));
        }
      });
     
    
  
    interface Data {
        id:""
        dispute_type:[]
        goods_received:""
        grand_total_raw:""
        items:Item[]
        message_to_customer:""
        order_date:""
        order_number:""
        order_status:""
        dispute_id:""
        payment_status:""
        tracking_id:""
        tracking_url:""
        total:""
        total_raw:""
        progress:""
        description:""
        reason:""
        messages:Message[]
        replies:Reply[]
        return_goods:""
        shop:Shop
        status:string
        updated_at:""
    }
    interface Message{
        attachment:[]
        customer:Customer
        id:""
        item:""
        label:""
        message:""
        order_id:""
        replies:Reply[]
        user:User
        shop:Shop
        shop_id:""
        status:""
        subject:""
    }
    interface User{
        avatar:""
        email:""
        name:""
    }
    interface Customer{
        id:""
        name:""
        email:""
        avatar:""
    }
    const [dispute,setDispute] = useState<Dispute>()

    const router = useRouter()
    const { pid } = router.query;
    const [rec,setRec] = useState<boolean>(false)
    const [modals,setModals] = useState<boolean>(false)
    const [modalmessage,setModalMessage] = useState<boolean>(false)
    const [messageSection,setMessageSection] = useState<boolean>(false)
    const [messages,setMessages] = useState<Message[]>()
    const [pidss,setPidess] = useState<number>(1)
    const [reply,setReply] = useState<string>()
    const ReplyData = new FormData();
    const [step,setStep] = useState(1)
    const [orders,setOrders] = useState<Order>()
    const [desc,setDesc] = useState<string>()
    const [amm,setAmm] = useState<string>()
    const [pro,setPro] = useState<string>()
    const [type,setType] = useState<string>()
    const [appealmodal,setappealmodal] = useState<boolean>()
    const [disputes,setDisputes] = useState<Dispute>()
    
    const closeModalsAppeal = () => {
        setappealmodal(false)
    }
    async function postAppeal(appealData) {
        const response = await fetch(`https://amanacart.com/api/dispute/${data?data.dispute_id:""}/appeal`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
            'Authorization' : `Bearer ${localStorage.getItem('token')}`,
            },
            body:appealData
        });
        return response.json(); // parses JSON response into native JavaScript objects
     }
     const appealData = new FormData();
     const storeAppeal = () =>{
        appealData.append('reply',reply)
        appealData.append('attachment',avatar[0])
        postAppeal(appealData)
        .then(result =>{
            setStep(3);
            console.log(result.data)
        })
        .catch(e => {
          console.log(e);
        });
     }
    const handlAppealModal = (appealData) =>{
        setappealmodal(!appealmodal)
    }
    const refInput = useRef();
    const handleReplyss = (refInput) => {
        ReplyData.append('reply',reply)
        postReply(ReplyData).then(data => {
            setPidess(pidss + 1)
            setReply('testing')
            refInput.current.value ='';
          });
    }
    let formData = new FormData(); 
    async function postDatas() {
        const response = await fetch(`https://amanacart.com/api/dashboard/send_message/${data?data.id:""}`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
            'Authorization' : `Bearer ${localStorage.getItem('token')}`,
            },
            body: formData
        });
        return response.json(); // parses JSON response into native JavaScript objects
     }

     async function postReply(data) {
         console.log(pid)
        const response = await fetch(`https://amanacart.com/api/dashboard/send_reply/${messages[0].id}`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
            'Authorization' : `Bearer ${localStorage.getItem('token')}`,
            },
            body: data
        });
        return response.json(); // parses JSON response into native JavaScript objects
     }
     const handleReply = () => {
        console.log(reply);
        formData.append('message',reply);
        formData.append('attachment',avatar[0]);
        postDatas()
        
        .then(data => {
            console.log('data'); // JSON data parsed by `data.json()` call
            console.log(data);
            closeModalsMessgae();
            setMessageSection(true)
            setPidess(pidss + 1)
            // window.location.reload() // JSON data parsed by `data.json()` call
          });
     }
    const handlModalss = () =>{
        setModals(!modals)
        fetch(`https://amanacart.com/api/order/${pid?pid:""}/dispute`,{
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }})
         .then(res => res.json())
         .then(result =>{
            setDispute(result.data);
            setOrders(result.data.order)
            console.log(result.data)
         })
         .catch(e => {
           console.log(e);
       });
    }
    const handlModalssMessage = () =>{
        setModalMessage(!modalmessage)
    }
    const closeModalsMessgae = () =>{
        setModalMessage(false)
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
       const response = await fetch(`https://amanacart.com/api/dispute/${disputes?disputes.id:""}/solved`, {
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
    const notSolved = () => {

    }
    const [data,setData] = useState<Data>()

    const DisForm = new FormData();

    async function postDis(datas) {
        const response = await fetch(`https://amanacart.com/api/order/${pid?pid:""}/dispute`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
            'Authorization' : `Bearer ${localStorage.getItem('token')}`,
            },
            body:datas
            
        });
        return response.json(); // parses JSON response into native JavaScript objects
     }
    const StoreDis = () =>{
        DisForm.append('dispute_type_id',type)
        DisForm.append('order_received',rec?"1":"0")
        DisForm.append('description',desc)
        DisForm.append('product_id',pro)
        DisForm.append('refund_amount',amm)
        DisForm.append('return_goods','1')
        postDis(DisForm)
        .then(data => {
            console.log('data'); // JSON data parsed by `data.json()` call
            console.log(data);
            window.location.reload() 
          });
    }
    useEffect(() => {
        
        fetch(`https://amanacart.com/api/order/${pid}/dispute`,{
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }})
         .then(res => res.json())
         .then(result =>{
            console.log(result.data);
            setData(result.data.order);
            setDisputes(result.data.dispute)
            setMessages(result.data.messages)
            if(result.data.dispute.status == "استأنف"){
                setStep(3);
            }
            if(result.data.dispute.status == "تم حلها"){
                setStep(4);
            }
           
         })
         .catch(e => {
           console.log(e);
       });
     },[pidss])
    return (
        <div className="grid grid-cols-12 gap-2 mt-6" dir="rtl">
            <div className="col-span-12 lg:col-span-4 bg-white shadow rounded flex flex-col justify-between items-start ">
                <img src="/images/brands/Capture.png" className="w-full" alt="" />
                <span className="text-md font-bold p-4">
                    كيف يمكنك فتح بطاقة نزاع
                </span>
                <div className="flex flex-col justify-between  items-start px-4 pb-12">
                    <span className="text-sm font-bold">
                        الخطوة الأولى
                    </span>
                    <span className="text-xs">
                        قبل فتح النزاع, نحن ننصح أن تتواصل مع التاجر للنقاش حول المشكلة.
                        أغلب حالات النزاع يتم حليها من قبل التاجر
                    </span>
                    <span className="text-sm font-bold mt-2">
                        الخطوة الأولى
                    </span>
                    <span className="text-xs">
                        قبل فتح النزاع, نحن ننصح أن تتواصل مع التاجر للنقاش حول المشكلة.
                        أغلب حالات النزاع يتم حليها من قبل التاجر
                    </span>
                    <span className="text-sm font-bold mt-2">
                        الخطوة الأولى
                    </span>
                    <span className="text-xs">
                        قبل فتح النزاع, نحن ننصح أن تتواصل مع التاجر للنقاش حول المشكلة.
                        أغلب حالات النزاع يتم حليها من قبل التاجر
                    </span>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-8 bg-white shadow rounded p-4 overflow-x-hidden overflow-y-scroll scr" style={{maxHeight:"35rem"}}>
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
                            <span className="text-xs absolute w-24 transform text-center translate-y-full mt-7">
                                البائع يمكنه مساعدتك
                            </span>
                        </div>
                        {step==2||step==3||step==4?
                            <div className="flex justify-center items-center rounded-full w-8 h-6 bg-yellow-500 absolute right-1/3 top-1/2 transform -translate-y-1/2">
                                <span className="text-white text-xs font-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.712" height="10.513" viewBox="0 0 14.712 10.513">
                                        <path id="Path_293" data-name="Path 293" d="M1187.471,717.879l4.9,4.833,8.407-8.4" transform="translate(-1186.769 -713.608)" fill="none" stroke="#fff" stroke-width="2"/>
                                    </svg>
                                </span>
                                <span className="text-xs absolute w-24 transform text-center translate-y-full mt-7">
                                    فتح نزاع
                                </span>
                            </div>
                            :
                            <div className="flex justify-center items-center rounded-full w-8 h-6 border-dashed border-2 border-yellow-500 bg-white absolute right-1/3 top-1/2 transform -translate-y-1/2">
                                <span className="text-yellow-500 text-xs font-bold">2</span>

                                <span className="text-xs absolute w-32 transform text-center translate-y-full mt-7">
                                    فتح نزاع
                                </span>
                            </div>
                        }
                         {step==3||step==4?
                            <div className="flex justify-center items-center rounded-full w-8 h-6 bg-yellow-500 absolute right-2/3 top-1/2 transform -translate-y-1/2">
                                <span className="text-white text-xs font-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.712" height="10.513" viewBox="0 0 14.712 10.513">
                                        <path id="Path_293" data-name="Path 293" d="M1187.471,717.879l4.9,4.833,8.407-8.4" transform="translate(-1186.769 -713.608)" fill="none" stroke="#fff" stroke-width="2"/>
                                    </svg>
                                </span>
                                <span className="text-xs absolute w-24 transform text-center translate-y-full mt-7">
                                تتدخل أمانة
                                </span>
                            </div>
                            :
                            <div className="flex justify-center items-center rounded-full w-8 h-6 border-dashed border-2 border-yellow-500 bg-white absolute right-2/3 top-1/2 transform -translate-y-1/2">
                                <span className="text-yellow-500 text-xs font-bold">3</span>

                                <span className="text-xs absolute w-32 transform text-center translate-y-full mt-7">
                                تتدخل أمانة
                                </span>
                            </div>
                        }
                      {step==4?
                            <div className="flex justify-center items-center rounded-full w-8 h-6 bg-yellow-500 absolute right-full  top-1/2 transform -translate-y-1/2">
                                <span className="text-white text-xs font-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.712" height="10.513" viewBox="0 0 14.712 10.513">
                                        <path id="Path_293" data-name="Path 293" d="M1187.471,717.879l4.9,4.833,8.407-8.4" transform="translate(-1186.769 -713.608)" fill="none" stroke="#fff" stroke-width="2"/>
                                    </svg>
                                </span>
                                <span className="text-xs absolute w-24 transform text-center translate-y-full mt-7">
                                ينتهي النزاع
                                </span>
                            </div>
                            :
                            <div className="flex justify-center items-center rounded-full w-8 h-6 border-dashed border-2 border-yellow-500 bg-white absolute right-full  top-1/2 transform -translate-y-1/2">
                                <span className="text-yellow-500 text-xs font-bold">4</span>

                                <span className="text-xs absolute w-32 transform text-center translate-y-full mt-7">
                                ينتهي النزاع
                                </span>
                            </div>
                        }
                      
                    </div>
                </div>
                <div className="w-full bg-gray-100 p-5 mt-16 shadow">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 lg:col-span-5 flex flex-col justify-start items-start">
                            <div className="text-sm font-bold flex justify-between text-gray-700 w-full">
                                <span className="w-1/2">
                                    رقم الطلب : 
                                </span>
                                <span className="text-blue-500 w-1/2   text-xs text-right" >
                                    {data?data.order_number.split('#'):""}
                                </span>
                            </div>
                            <div className="text-sm w-full flex justify-between font-bold text-gray-700 mt-2">
                                <span className="w-1/2">
                                    تاريخ الطلب :
                                </span>
                                <span className="text-blue-500  w-1/2 text-right text-xs" style={{fontWeight:"bold"}}>
                                        {data?data.order_date:""}
                                </span>
                            </div>
                            <div className="text-sm w-full flex justify-between font-bold text-gray-700 mt-2">
                                <span>
                                    المتجر :
                                </span>
                                <span className="text-blue-500 w-1/2 text-xs" style={{fontWeight:"bold"}}>
                                    {data?data.shop.name:""}
                                </span>
                            </div>
                            <div className="text-sm flex w-full justify-between font-bold text-gray-700 mt-2">
                                <span>
                                    الحالة : 
                                </span>
                                <span className="w-1/2 text-right">
                                    <span className="bg-green-500  text-center text-xs  text-white px-1 rounded">
                                        {data?data.order_status:""}
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="col-span-5 flex flex-col justify-start items-start">
                            <span className="text-sm font-bold text-gray-700">
                                كمية الطلب : <span className="text-blue-500 numbers text-xs" style={{fontWeight:"bold"}}>
                                    {data?data.total:""}
                                </span>
                            </span>
                            <span className="text-sm font-bold text-gray-700 mt-2">
                                إعادة المنتجات : <span className="text-blue-500 text-xs" style={{fontWeight:"bold"}}>
                                    {data&&data.return_goods?"لا":"نعم"}
                                </span>
                            </span>
                        </div>
                        <div className="col-span-2 flex flex-col justify-between items-start">

                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center mt-8">
                      {data&&data.dispute_id?
                            ""
                        :
                            <span onClick={handlModalss} className="bg-blue-500 cursor-pointer w-40 text-center text-white py-2 text-sm rounded">
                                فتح نزاع
                            </span>
                        }
                        {messages&&messages.length>0?"":
                        <span onClick={handlModalssMessage} className="bg-yellow-500 cursor-pointer py-2 mr-3 w-40 text-center text-white  text-sm rounded">
                            تواصل مع البائع
                        </span>
                        }
                </div>
                {disputes&&disputes.status&&disputes.status!="تم حلها"?
                    <div className="w-full flex justify-center items-center mt-8">
                            <span onClick={solved} className="bg-green-500 cursor-pointer py-2 mr-3 w-40 text-center text-white  text-sm rounded">
                                تم حل النزاع
                            </span>
                           {step!=3?
                                <span onClick={handlAppealModal} className="bg-red-500 cursor-pointer py-2 mr-3 w-40 text-center text-white  text-sm rounded">
                                    لم يتم حل النزاع
                                </span>
                            :""   
                            } 
                    </div>
                        :""
                }
                {messages&&messages.length>0?
                    
                <div className="grid-grid-cols-12 rounded  p-4 overflow-y-scroll scr mt-10" style={{maxHeight:"20rem"}}>
                    {messages?
                        messages[0].customer?
                        <div className="col-span-6 flex justify-start items-center mt-4">
                            <span className="text-xs text-gray-700 ml-6">
                                {messages[0].customer.name}
                            </span>
                            <span className="text-xs bg-gray-100 shadow rounded p-4">
                                {messages[0].message}
                            </span>
                        </div>
                        :
                        <div className="col-span-6 flex flex-row-reverse justify-start items-center mt-4">
                        <span className="text-xs text-gray-700 mr-6">
                            {messages[0].customer.name}
                        </span>

                        <span className="text-xs bg-gray-100 shadow rounded p-4">
                            {messages[0].message}
                        </span>
                    </div>
                    :""}
                    {messages&&messages[0].replies.length>0?
                        messages[0].replies.map(ele=>
                            ele.customer?
                                <div className="col-span-6 flex flex-row justify-start items-center mt-4">
                                    <span className="text-xs text-gray-700 ml-6">
                                        {ele.customer.name}
                                    </span>

                                    <span className="text-xs bg-gray-100 shadow rounded p-4">
                                        {ele.reply}
                                    </span>
                                </div>    
                            :
                                <div className="col-span-6 flex flex-row-reverse justify-start items-center mt-4">
                                    <span className="text-xs text-gray-700 mr-6">
                                        {ele.user.name}
                                    </span>

                                    <span className="text-xs bg-gray-100 shadow rounded p-4">
                                        {ele.reply}
                                    </span>
                                </div>    
                            )
                
                
                :
                   ""
                
                }

                        <div className="col-span-12">
                            <span className="text-xs font-bold">
                                الرد:
                            </span>
                            <textarea onChange={(e)=>setReply(e.target.value)} ref={refInput} className="text-xs mb-4  p-3 w-full h-28 border-2 mt-2" name="" id="" placeholder="اكتب رسالتك هنا" ></textarea>
                            <span onClick={(e) => handleReplyss(refInput)} className="cursor-pointer  bg-blue-500 mr-2 text-white px-2 rounded w-24 text-center">
                                إرسال
                            </span>
                        </div>
                    {/* <div className="col-span-6 flex flex-row-reverse justify-start items-center mt-4">
                        <span className="text-xs text-gray-700 mr-6">
                            مني
                        </span>

                        <span className="text-xs bg-gray-100 shadow rounded p-4">
                            رسالة مني رسالة مني رسالة مني رسالة مني رسالة مني رسالة مني رسالة مني 
                        </span>
                    </div> */}
                </div>
                
                :
                <div className="w-full p-4 flex flex-col justify-between items-start border-t-2 mt-2">
                <span className="text-sm text-right mb-2 mt-2 font-bold">
                    طلب الإرجاع
                </span>
                <span className="text-xs text-right mt-1">
                    لم أقم باستلام طلبي وأريد إعادة أموالي
                </span>
                <span className="text-xs text-right mt-1">
                    المنتج لا يطابق المواصفات وأريد إعادة جزئية لأموالي
                </span>

                <span className="text-sm text-right mb-2 mt-4 font-bold">
                    إعادة المنتجات
                </span>
                <span className="text-xs text-right mt-1">
                    أنا غير راض بالمنتج الذي استلمته وأرغب بإعادته مع استرداد كامل كلفته (من الممكن أن تدفع كلفة عملية الإرجاع)
                </span>
                
        </div>
        
                
                }
               
               
                
                <div className={`${modals?"flex":"hidden"} fixed z-50 -top-7 lg:top-0 px-3 left-0 h-screen w-full flex flex-col  justify-center items-center bg-black bg-opacity-70`}>
                    <div onClick={closeModals} className="rounded-full border-2 border-white w-8 h-6 mb-4 text-white text-center text-md cursor-pointer">
                        x
                    </div>
                    <div className={`${modals?"slideUpss":"slideDownss"} relative p-5 w-full lg:w-1/2 bg-white rounded shadow grid grid.cols-12 `} dir="rtl">
                        <div className="col-span-12">
                            <span className="text-md font-bold">
                                فتح نزاع
                            </span>
                        </div>
                        <div className="col-span-12 mt-5 flex flex-col justify-between items-start">
                            <span className="text-sm">
                                اختر السبب
                            </span>
                            <select name="" id="" onChange={(e) => setType(e.target.value)} className="w-full border-2 rounded mt-3 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent">
                                <option value="">اختر سببا</option>
                                {dispute?Object.entries(dispute.dispute_types).map(([ele, i])=>
                                    <option value={ele}>{i.detail}</option>
                                ):
                                    ""
                                }
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
                                    <select name="" id=""  onChange={(e)=>setPro(e.target.value)} className="w-full border-2 rounded mt-3 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent">
                                        <option value="all">كل المنتجات</option>
                                        {orders?orders.items.map(ele=>
                                            <option value={ele.id}>{ele.description}</option>
                                        ):""}
                                    </select>
                                </div>
                            :""}

                            <span className="text-sm  pb-1 mt-4 w-full">
                                قيمة المرجعات
                            </span>
                            <input type="text" onChange={(e)=>setAmm(e.target.value)} className="w-full rounded border-2 py-1  mt-3 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent" />
                            <span className="text-xs text-gray-500 text-right mt-1">
                                    لقد قمت بدفع <span className="font-bold">{orders?orders.grand_total:""}</span> غير شاملة الشحن والضرائب
                            </span>
                            
                                
                            <span className="w-full text-sm mt-5">
                                الوصف
                            </span>
                            <textarea onChange={(e)=>setDesc(e.target.value)} className="w-full h-16 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-3" name="" id=""></textarea>

                            <span className="text-xs w-full mt-2">
                                ملاحظة : الإرجاع غير مضمون   !
                            </span>
                            <span onClick={StoreDis} className="text-sm self-center text-white text-center w-56 cursor-pointer py-1 rounded bg-yellow-500 mt-4">
                                إرسال الطلب
                            </span>
                        </div>
                    </div>
                </div>
            
                <div className={`${modalmessage?"flex":"hidden"} fixed z-50 top-0 px-3 left-0 h-screen w-full flex flex-col  justify-center items-center bg-black bg-opacity-70`}>
                        <div onClick={closeModalsMessgae} className="rounded-full border-2 border-white w-8 h-6 mb-4 text-white text-center text-md cursor-pointer">
                            x
                        </div>
                        <div className={`${modalmessage?"slideUpss":"slideDownss"} relative  p-5 w-full lg:w-1/3 bg-white rounded shadow grid grid.cols-12 `} dir="rtl">
                            <div className="col-span-12">
                                <span className="text-md font-bold">
                                    تواصل مع البائع
                                </span>
                            </div>
                            <div className="col-span-12 mt-5 flex flex-col justify-between items-start">
                               
                                    
                                <span className="w-full text-sm mt-5">
                                    رسالتك
                                </span>
                                <textarea onChange={(e)=>setReply(e.target.value)} className="w-full h-16 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-3" name="" id=""></textarea>

                                <span className="w-full text-sm mt-5">
                                    ارفق ملفا
                                </span>
                                <section className="container border-dashed border-2 flex flex-col justify-center items-center py-5">
                                    <div {...getRootProps({className: 'dropzone'})}>
                                        <input {...getInputProps()} />
                                        <p className="cursor-pointer">قم بتحميل الملفات</p>
                                    </div>
                                    <aside style={thumbsContainer}>
                                        {thumbs}
                                    </aside>
                                </section>  
                              
                                <span onClick={handleReply} className="text-sm self-center text-white text-center w-56 cursor-pointer py-1 rounded bg-yellow-500 mt-4">
                                    إرسال الرسالة
                                </span>
                            </div>
                    </div>
                </div>
            
            
                <div className={`${appealmodal?"flex":"hidden"} fixed z-50 top-0 left-0 h-screen w-full flex flex-col  justify-center items-center bg-black bg-opacity-70`}>
                        <div onClick={closeModalsAppeal} className="rounded-full border-2 border-white w-8 h-6 mb-4 text-white text-center text-md cursor-pointer">
                            x
                        </div>
                        <div className={`${appealmodal?"slideUpss":"slideDownss"} relative p-5 w-1/3 bg-white rounded shadow grid grid.cols-12 `} dir="rtl">
                            <div className="col-span-12">
                                <span className="text-md font-bold">
                                    تواصل مع أمانة
                                </span>
                            </div>
                            <div className="col-span-12 mt-5 flex flex-col justify-between items-start">
                               
                                    
                                <span className="w-full text-sm mt-5">
                                    رسالتك
                                </span>
                                <textarea onChange={(e)=>setReply(e.target.value)} className="w-full h-16 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-3" name="" id=""></textarea>

                                <span className="w-full text-sm mt-5">
                                    ارفق ملفا
                                </span>
                                <section className="container border-dashed border-2 flex flex-col justify-center items-center py-5">
                                    <div {...getRootProps({className: 'dropzone'})}>
                                        <input {...getInputProps()} />
                                        <p className="cursor-pointer">قم بتحميل الملفات</p>
                                    </div>
                                    <aside style={thumbsContainer}>
                                        {thumbs}
                                    </aside>
                                </section>  
                              
                                <span onClick={storeAppeal} className="text-sm text-white text-center w-56 cursor-pointer py-1 rounded bg-yellow-500 mt-4">
                                    إرسال الرسالة
                                </span>
                            </div>
                    </div>
                </div>
            
                                
            </div>
            
            <div className="col-span-12">
               
            </div>
        </div>
    );
}