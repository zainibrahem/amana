import React, { useState,useEffect,useCallback } from 'react';
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
import Dropzone from 'react-dropzone'
import ImgUploader from '../../../components/dropzone/ImgUploader'
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
  width: 100,
  height: 100,
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
        order_status:string
        payment_method:Payment
        payment_status:""
        shipping:""
        shipping_address:""
        shipping_weight:""
        discount:""
        shop:Shop
        taxes:""
        dispute_id:""
        total:""
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
    const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ));
  const [reply,setReply] = useState<string>();
  const setMessage = (e) =>{
    setReply(e.target.value);
  } 
     
  const datas = {
    attachments : files[0],
    reply:reply,
}
  var formBody = [];
  for (var property in datas) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(datas[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  async function postData(datas) {
      console.log(datas)
   const response = await fetch(`https://amanacart.com/api/dispute/${data?data.dispute_id:""}/response`, {
       method: 'POST', // *GET, POST, PUT, DELETE, etc.
       headers: {
       'Authorization' : `Bearer ${localStorage.getItem('token')}`,
       },
       body: datas // body data type must match "Content-Type" header
   });
   return response.json(); // parses JSON response into native JavaScript objects
}
let formData = new FormData();
const sendMessage = () =>{
    formData.append('reply',reply);
    formData.append('attachments',files[0]);
    postData(formData)
    .then(data => {
      console.log('data'); 
      console.log(data); 
    })
    .catch(e=>{
        console.log('e')
        console.log(e)
    });
}
  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);
    const [data,setData] = useState<Data>()
    useEffect(() => {
        fetch(`https://amanacart.com/api/dashboard/order_details/${pid}`,{
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }})
         .then(res => res.json())
         .then(result =>{
            setData(result.data);
            console.log(result.data);
         })
         .catch(e => {
           console.log(e);
       });
     },[pid])
    return (
        <div className="grid grid-cols-12 mt-12" dir="rtl">
            <div className="col-span-12 bg-white shadow rounded p-7" >
                <span className="text-md font-bold">
                    تفاصيل الدفع
                </span>
                <div className="bg-gray-100 p-4 shadow-md w-full mt-4">
                    <div className="grid grid-cols-12" dir="rtl">
                        <div className="col-span-4 flex flex-col justify-between items-start">
                        <span className="text-sm font-bold text-gray-700">
                                السعر : <span className="text-blue-500 numbers text-xs" style={{fontWeight:"bold"}}>
                                    {data&&data.total?data.total:0}
                                </span>
                            </span>
                            <span className="text-sm mt-3 font-bold text-gray-700">
                                نكلفة الشحن : <span className="text-blue-500 numbers text-xs" style={{fontWeight:"bold"}}>
                                {data&&data.shipping?data.shipping:0}
                                </span>
                            </span>
                            <span className="text-sm mt-3 font-bold text-gray-700">
                                تكلفة التغليف : <span className="text-blue-500 numbers text-xs" style={{fontWeight:"bold"}}>
                                    {data&&data.packaging?data.packaging:0}
                                </span>
                            </span>
                            <span className="text-sm mt-3 font-bold text-gray-700">
                                الضرائب : <span className="text-blue-500 numbers text-xs" style={{fontWeight:"bold"}}>
                                    {data&&data.taxes?data.taxes:0}
                                </span>
                            </span>
                        </div>
                        <div className="col-span-4 flex flex-col justify-between items-start">
                            
                            <span className="text-sm mt-3 font-bold text-gray-700">
                                الحسم : <span className="text-blue-500 numbers text-xs" style={{fontWeight:"bold"}}>
                                    {data&&data.discount?data.discount:0}
                                </span>
                            </span>
                            <span className="text-sm mt-3 font-bold text-gray-700">
                                المجمل : <span className="text-blue-500 numbers text-xs" style={{fontWeight:"bold"}}>
                                    {data&&data.grand_total?data.grand_total:0}
                                </span>
                            </span>
                            <span className="text-sm mt-3 font-bold text-gray-700">
                                طريقة الدفع : <span className="text-blue-500 numbers text-xs" style={{fontWeight:"bold"}}>
                                    {data&&data.payment_method.name?data.payment_method.name:0}
                                </span>
                            </span>
                            
                        </div>
                        <div className="col-span-4 flex justify-start items-start">
                            <span className="text-sm">
                                الحالة : <span className={`${data&&data.order_status == 'WAITING FOR PAYMENT'? "bg-yellow-500":""} rounded text-white px-4 text-xs`}>
                                    {data?data.order_status:""}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-span-12 mt-4 bg-white rounded shadow p-7">
                <span className="text-md font-bold">
                    تفاصيل الطلب
                </span>
                <div className="grid grid-cols-12" dir="rtl">
                    <div className="col-span-5 flex flex-col justify-between items-start p-4">
                        <span className=" font-bold text-yellow-500 text-sm">
                            عنوان الشحن :
                        </span>
                       
                        {data?data.shipping_address.split(', ,').map(ele=>
                             <span className=" font-bold text-xs mt-3 text-gray-700">
                             {ele}
                         </span>
                        ):""}
                    </div>
                    <div className="col-span-5 flex flex-col justify-between items-start p-4">
                        <span className=" font-bold text-yellow-500 text-sm">
                            عنوان الفاتورة :
                        </span>

                        {data?data.billing_address.split(', ,').map(ele=>
                             <span className=" font-bold text-xs mt-3 text-gray-700">
                             {ele}
                         </span>
                        ):""}
                     
                    </div>
                    <div className="col-span-2"></div>
                </div>


                <div className="bg-gray-100 p-4 shadow-md w-full mt-4">
                    <div className="grid grid-cols-12" dir="rtl">
                        <div className="col-span-4 flex flex-col justify-between items-start">
                        <span className="text-sm font-bold text-gray-700">
                                السعر : <span className="text-blue-500 numbers text-xs" style={{fontWeight:"bold"}}>
                                    {data&&data.total?data.total:0}
                                </span>
                            </span>
                            <span className="text-sm mt-3 font-bold text-gray-700">
                                نكلفة الشحن : <span className="text-blue-500 numbers text-xs" style={{fontWeight:"bold"}}>
                                {data&&data.shipping?data.shipping:0}
                                </span>
                            </span>
                            <span className="text-sm mt-3 font-bold text-gray-700">
                                تكلفة التغليف : <span className="text-blue-500 numbers text-xs" style={{fontWeight:"bold"}}>
                                    {data&&data.packaging?data.packaging:0}
                                </span>
                            </span>
                            <span className="text-sm mt-3 font-bold text-gray-700">
                                الضرائب : <span className="text-blue-500 numbers text-xs" style={{fontWeight:"bold"}}>
                                    {data&&data.taxes?data.taxes:0}
                                </span>
                            </span>
                        </div>
                        <div className="col-span-4 flex flex-col justify-between items-start">
                            
                            <span className="text-sm mt-3 font-bold text-gray-700">
                                الحسم : <span className="text-blue-500 numbers text-xs" style={{fontWeight:"bold"}}>
                                    {data&&data.discount?data.discount:0}
                                </span>
                            </span>
                            <span className="text-sm mt-3 font-bold text-gray-700">
                                المجمل : <span className="text-blue-500 numbers text-xs" style={{fontWeight:"bold"}}>
                                    {data&&data.grand_total?data.grand_total:0}
                                </span>
                            </span>
                            <span className="text-sm mt-3 font-bold text-gray-700">
                                طريقة الدفع : <span className="text-blue-500 numbers text-xs" style={{fontWeight:"bold"}}>
                                    {data&&data.payment_method.name?data.payment_method.name:0}
                                </span>
                            </span>
                            
                        </div>
                        <div className="col-span-4 flex justify-start items-start">
                            <span className="text-sm">
                                الحالة : <span className={`${data&&data.order_status == 'WAITING FOR PAYMENT'? "bg-yellow-500":""} rounded text-white px-4 text-xs`}>
                                    {data?data.order_status:""}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full p-4 flex justify-between items-start">
                    <div className="flex flex-col justify-between items-center">
                        {data?data.items.map(ele=>
                            <div className="flex justify-between items-center mt-4">
                                <div className="w-12 h-14 rounded-full border-2 border-yellow-500" style={{background:`url(${ele.image})`,backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"contain"}}></div>
                                <div className="flex flex-col justify-between items-start">
                                    <span className="text-sm font-bold mr-2">
                                        {ele.description}
                                    </span>
                                    <span className="text-xs text-gray-500 font-bold text-right mr-2" dir="ltr">
                                        {ele.unit_price} x {ele.quantity}
                                    </span>
                                </div>
                            </div>
                            ):""}
                    </div>
                    <div className="flex flex-col justify-between items-start h-full mt-4">
                        <span className="bg-blue-500 text-center rounded text-sm text-white px-2 w-40">
                            إعادة الطلب
                        </span>
                        <span className="bg-blue-500 mt-4 text-center rounded text-sm text-white px-2 w-40">
                            إعادة الطلب
                        </span>
                        <span className="bg-blue-500 mt-4 text-center rounded text-sm text-white px-2 w-40">
                            إعادة الطلب
                        </span>
                        {data&&data.dispute_id?
                        <a className="w-full text-center mt-2" href={`/dashboard/dispute/dispute?pid=${data.dispute_id}`}>
                            <span className="cursor-pointer text-blue-500 text-xs text-center w-full mt-3 font-bold">
                                تفاصيل النزاع
                            </span>
                        </a>
                        :""}
                    </div>
                </div>
            </div>
        
        
            <div className="col-span-12 mt-4 bg-white rounded shadow p-7">
                <span className="text-md font-bold">
                    ارسل رسالة للبائع
                </span>
                <div className="grid grid-cols-12">
                    <div className="col-span-6 py-2 flex flex-col justify-between items-start">
                        <textarea onChange={(e)=>setMessage(e)} className="p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded focus:border-transparent border-2 w-full mt-2 text-xs h-full" name="" placeholder="رسالتك هنا" id="" ></textarea>
                    </div>
                    

                    <div className="col-span-6 flex flex-col justify-between items-start pr-12">
                        <span className="text-xs mb-2">
                            قم بتحميل صورة
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
                      <span className="text-xs text-center mt-2">
                          يمكنك تحميل صورة واحدة فقط وبحجم لا يتعدى ال 10MB
                      </span>
                      <span onClick={sendMessage} className="cursor-pointer rounded px-3 py-1 w-24 text-center self-center mt-4 bg-blue-500 text-white text-xs">
                        إرسال
                      </span>
                    </div>
                </div>
            </div>
        </div>
    );
}