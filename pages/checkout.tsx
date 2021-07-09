import React, { useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination, Scrollbar } from 'swiper/core';
import { useAppState, useAppDispatch } from '../contexts/app/app.provider';
import Slider from '../components/slider/slider';
import SearchBar from '../components/seachbar/searchBar';
import Banners from '../components/banners/banners';
import Categories from '../components/categories/categories';
import Card from '../components/card/card';
import Deal from '../components/deal/deal';
import Specials from '../components/specials/specials';
import Cat from '../components/cat/cat';
import Proposals from '../components/proposals/proposals';
import { Waypoint } from 'react-waypoint';
import AllCatsSlider from '../components/allcatsSlider/allCatsSlider';
import Discover from '../components/discover/discover';
import { useRouter } from 'next/router';
export default function Orders() {
    interface Address{
        address_type:""
        address_title:""
        address_line_1:""
        address_line_2:""
        city:""
        zip_code:""
        country:Country
        state:State
        phone:""
        id:""
        states:[]
        address_types:[]
    }
    interface State{
        id:""
    }
    interface Country{
        name:""
        id:""
    }
    interface Address{
        id:""
        states:[]
        address_types:[]
       
    }
    interface Address{
        address_type:""
        address_title:""
        address_line_1:""
        address_line_2:""
        city:""
        zip_code:""
        country:Country
        state:State
        phone:""
    }
    const [ship,setShip] = useState(false);    
    const [ships,setShips] = useState(false);  
    const [addaddress,setAddAddress] = useState<boolean>() 
    const [addinfo,setaddinfo] = useState<Address>(); 
    const [addressType,setAddressType] = useState<string>()
    const [addresstitle,setAddressTitle] = useState<string>()
    const [addressdesc,setaddressdesc] = useState<string>()
    const [editadd,seteditadd] = useState<Address>()
    const [city,setcity] = useState<string>()
    const [state,setstate] = useState<string>()
    const [phone,setphone] = useState<string>()
    const [avatar,setAvatar] = useState([])
    const [coupon,setCoupon] = useState<string>()
    const [email,setEmail] = useState<string>()
    const [account,setAccount] = useState<boolean>(false)
    const [subs,setSubs] = useState<boolean>(false)
    
    const [message,setMessage] = useState<string>()
    const [payment,setPayments] = useState<string>()
    const [address,setAddress] = useState<Address[]>()
    const [active,setActive] = useState<number>(0)
    const [packaging,setPackaging] = useState<string>()
    const [shipping,setShipping] = useState<string>()
    const [password,setPassword] = useState<string>()
    const [confirmation,setConfirmation] = useState<string>()
    
    const router = useRouter()
    const { cart,tax_id,taxrate,zone_id,handling_cost,shipping_rate_id,shippings,pack,coupons } = router.query;

    const closeModal = () =>{
        setAddAddress(false)
    }
    const datass = {
        address_title : addresstitle,
        address_type:addressType,
        city:city,
        state_id:state,
        address_line_1:addressdesc,
        phone:phone,
        avatar:avatar[0]
    }
    async function postCart(appealData) {
        const response = await fetch(`https://amanacart.com/api/cart/${cart}/checkout`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
            'Authorization' : `Bearer ${localStorage.getItem('token')}`,
            },
            body:appealData
        });
        return response.json(); // parses JSON response into native JavaScript objects
     }
     const form = new FormData();
     useEffect(()=>{
        // 
        fetch(`https://amanacart.com/api/addresses`,{
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }})
         .then(res => res.json())
         .then(result =>{
            setAddress(result.data)
            setActive(result.data[0].id)
         })
     },[])
    const handleCheckout = () => {
        // form.append('coupon',coupons.toString())
        form.append('cart_id',cart.toString())
        form.append('free_shipping',"0")
        form.append('tax_id',tax_id.toString())
        form.append('taxrate',taxrate.toString())
        form.append('packaging_id',packaging?packaging.toString():"")
        form.append('zone_id',zone_id.toString())
        form.append('shipping_rate_id',shipping?shipping:shipping_rate_id.toString())
        form.append('ship_to_country_id','512')
        form.append('ship_to_state_id',state?state:"")
        // form.append('discount_id',coupons.toString())
        form.append('handling_cost',handling_cost.toString())
        form.append('country_id','512')
        form.append('state_id',state?state:"")
        if(!localStorage.getItem('token')){
            form.append('city',city?city:"")
            form.append('phone',phone?phone:"")
            form.append('address_line_1',addressdesc?addressdesc:"")
            form.append('address_title',addresstitle?addresstitle:"")
            form.append('email',email?email:"")
            if(account){
                form.append('create-account',"on")
                form.append('password',password)
                if(subs){
                    form.append('accepts_marketing',"on")
                }
                form.append('password_confirmation',confirmation)
            }
        }
        else{
            form.append('ship_to',active.toString())
        }
        form.append('payment_method',payment)
        postCart(form)
        .then(res=>{
            (res)
        })
        .catch(e=>{
        })

    }
   
   
   
    var formBodys = [];
    for (var property in datass) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(datass[property]);
      formBodys.push(encodedKey + "=" + encodedValue);
    }
    const addAddress = () =>{
        addAddresss()
        .then(data => {
          window.location.reload(false)
        });
    }
    async function addAddresss() {
       const response = await fetch('https://amanacart.com/api/address/store', {
           method: 'post', // *GET, POST, PUT, DELETE, etc.
           headers: {
           'Authorization' : `Bearer ${localStorage.getItem('token')}`,
           'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
           },
           body: formBodys.join("&") // body data type must match "Content-Type" header
       });
       return response.json(); // parses JSON response into native JavaScript objects
    }
    const handleModal = () =>{
        setAddAddress(!addaddress)
        fetch(`https://amanacart.com/api/address/create`,{
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        })
         .then(res => res.json())
         .then(result =>{
            setaddinfo(result.data)
         })
         .catch(e => {
       });
    }
    const toggleShipping = () =>{
        setShip(!ship);
    }
    const toggleShippings = () =>{
        setShips(!ships);
    }
    return (
        <div className="grid grid-cols-12 gap-2 bg-white rounded shadow p-4 mt-12" style={{border:"1px solid #eee"}} dir="rtl">
            <div className="col-span-12 lg:col-span-4  p-2 flex flex-col justify-start items-start" >
                <div className="rounded bg-gray-50  p-2 flex flex-col w-full justify-between items-start" style={{border:"1px solid #eee"}}>
                <span className="text-xs flex justify-between items-center">
                    <svg className="w-4 ml-2" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 145.254 136.317">
                        <path id="Path_11710" data-name="Path 11710" d="M4241.016,542.33v63.906a6.6,6.6,0,0,0,6.6,6.6h118.434a6.6,6.6,0,0,0,6.6-6.6V542.33a2.2,2.2,0,0,1,2.2-2.2h.219a4.4,4.4,0,0,0,4.4-4.4v-16.89a15.375,15.375,0,0,0-2.166-7.876l-17.332-29.084a11.034,11.034,0,0,0-9.439-5.369h-87.373a11.05,11.05,0,0,0-9.447,5.369l-17.33,29.084a15.413,15.413,0,0,0-2.166,7.876v16.89a4.4,4.4,0,0,0,4.4,4.4A2.4,2.4,0,0,1,4241.016,542.33Zm51.611,65.388a2.268,2.268,0,0,1-1.557.717h-25.285a2.2,2.2,0,0,1-2.2-2.2v-48a2.2,2.2,0,0,1,2.2-2.2h25.285a2.195,2.195,0,0,1,2.2,2.2v47.856A2.358,2.358,0,0,1,4292.627,607.718Zm75.617-1.482a2.2,2.2,0,0,1-2.2,2.2h-66.182a2.2,2.2,0,0,1-2.2-2.2v-48a2.2,2.2,0,0,1,2.2-2.2h48.006a2.2,2.2,0,0,1,2.2,2.2v45.657h4.4V556.036a4.4,4.4,0,0,0-4.4-4.4h-86.482a4.4,4.4,0,0,0-4.4,4.4v50.2a2.2,2.2,0,0,1-2.2,2.2h-9.379a2.2,2.2,0,0,1-2.2-2.2V542.33a2.2,2.2,0,0,1,2.2-2.2h118.434a2.2,2.2,0,0,1,2.2,2.2Zm-95.566-72.7V519.609a2.2,2.2,0,0,1,2.2-2.2h63.906a2.2,2.2,0,0,1,2.2,2.2v13.926a2.2,2.2,0,0,1-2.2,2.2h-63.906A2.2,2.2,0,0,1,4272.678,533.535Zm-34.08,0V518.844a11.009,11.009,0,0,1,1.547-5.624l17.33-29.084a6.629,6.629,0,0,1,5.67-3.223h87.373a6.635,6.635,0,0,1,5.664,3.219l17.328,29.088a10.973,10.973,0,0,1,1.549,5.624v14.691a2.2,2.2,0,0,1-2.2,2.2h-25.283a2.2,2.2,0,0,1-2.2-2.2V519.609a6.6,6.6,0,0,0-6.6-6.6h-63.906a6.6,6.6,0,0,0-6.6,6.6v13.926a2.2,2.2,0,0,1-2.2,2.2H4240.8A2.2,2.2,0,0,1,4238.6,533.535Z" transform="translate(-4234.201 -476.515)"/>
                    </svg>
                    تباع بواسطة
                    <span className="text-blue-400 text-xs mr-2">
                        متجر هرمس
                    </span>
                </span>
              
                <div className="flex w-full flex-col justify-between items-start mt-3 px-1">
                    <span className="text-sm">
                        تفاصيل الطلب
                    </span>
                    <span className="text-xs  w-full flex justify-between items-center mt-4">
                        <span>
                        عدد المنتجات
                        </span>
                        <span>
                            {JSON.parse(localStorage.getItem("carts")).item_count}
                        </span>
                    </span>
                    <span className="text-xs  w-full flex justify-between items-center mt-4">
                        <span>
                            السعر
                        </span>
                        <span>
                            {JSON.parse(localStorage.getItem("carts")).total}
                        </span>
                    </span>
                    <span className="text-xs  w-full flex justify-between relative items-center mt-4" onMouseEnter={toggleShippings} onMouseLeave={toggleShippings}>
                        <span>
                            التغليف
                        </span>
                        <span>
                        {localStorage.getItem('packagins')}
                        </span>
                    </span>
                    {localStorage.getItem('shippings')?
                    <span className="text-xs w-full flex justify-between relative items-center mt-4" onMouseEnter={toggleShipping} onMouseLeave={toggleShipping}>
                        <span>
                            الشحن
                        </span>
                        <span>
                        {/* 
                        packagins
shipping  */}
                            {parseInt(shippings.toString()) + parseInt(handling_cost.toString())}
                        </span>
                    </span>
                    :""}
                    <span className="text-xs  w-full flex justify-between items-center mt-4">
                        <span>
                            السعر الكلي
                        </span>
                        <span className="font-bold">
                            
                        {
                       JSON.parse(localStorage.getItem("carts")).grand_total
                       }
                        </span>
                    </span>

                    </div>
                    </div>
                    
                <span className="text-sm mt-6 flex justify-start items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 ml-2" width="25" height="25" viewBox="0 0 145.111 145.111">
                    <g id="Group_5344" data-name="Group 5344" transform="translate(-546.886 -2369.691)">
                        <rect id="Rectangle_1724" data-name="Rectangle 1724" width="9.22" height="4.681" transform="translate(637.527 2440.342)"/>
                        <path id="Path_11834" data-name="Path 11834" d="M3738.336,595.446H3656.2a2.2,2.2,0,0,1-2.2-2.2v-4.824a2.2,2.2,0,0,1,2.2-2.2h9.361a6.6,6.6,0,0,0,6.6-6.6V552.111a6.6,6.6,0,0,0-6.6-6.6h-54.751a6.6,6.6,0,0,0-6.6,6.6V579.63a6.6,6.6,0,0,0,6.6,6.6h9.361a2.2,2.2,0,0,1,2.2,2.2v4.824a2.2,2.2,0,0,1-2.2,2.2h-4.964a11.005,11.005,0,0,0-10.993,10.993v77.591a6.6,6.6,0,0,0,6.6,6.6h131.92a6.6,6.6,0,0,0,6.6-6.6V606.44A11.009,11.009,0,0,0,3738.336,595.446Zm-127.522-13.618a2.2,2.2,0,0,1-2.2-2.2V552.111a2.2,2.2,0,0,1,2.2-2.2h54.751a2.2,2.2,0,0,1,2.2,2.2V579.63a2.2,2.2,0,0,1-2.2,2.2Zm38.793,6.6v4.824a2.2,2.2,0,0,1-2.2,2.2H3628.97a2.2,2.2,0,0,1-2.2-2.2v-4.824a2.2,2.2,0,0,1,2.2-2.2h18.438A2.2,2.2,0,0,1,3649.606,588.424Zm95.325,95.607a2.2,2.2,0,0,1-2.2,2.2h-131.92a2.2,2.2,0,0,1-2.2-2.2V661.054a2.2,2.2,0,0,1,2.2-2.2h131.92a2.2,2.2,0,0,1,2.2,2.2Zm0-31.771a2.2,2.2,0,0,1-2.2,2.2h-131.92a2.2,2.2,0,0,1-2.2-2.2V606.44a6.6,6.6,0,0,1,6.6-6.6h123.125a6.6,6.6,0,0,1,6.6,6.6Z" transform="translate(-3057.332 1824.176)"/>
                        <rect id="Rectangle_1725" data-name="Rectangle 1725" width="9.22" height="4.681" transform="translate(614.832 2440.342)"/>
                        <rect id="Rectangle_1726" data-name="Rectangle 1726" width="9.22" height="4.681" transform="translate(660.223 2440.342)"/>
                        <path id="Path_11835" data-name="Path 11835" d="M3621.182,582.353h22.693a4.621,4.621,0,0,0,4.613-4.613v-4.608H3643.8v2.339a2.2,2.2,0,0,1-2.2,2.2H3623.45a2.2,2.2,0,0,1-2.2-2.2v-2.339h-4.679v4.608A4.617,4.617,0,0,0,3621.182,582.353Z" transform="translate(-3015.357 1917.998)"/>
                        <rect id="Rectangle_1727" data-name="Rectangle 1727" width="9.22" height="4.681" transform="translate(660.223 2456.156)"/>
                        <rect id="Rectangle_1728" data-name="Rectangle 1728" width="31.916" height="4.681" transform="translate(564.9 2387.707)"/>
                        <rect id="Rectangle_1729" data-name="Rectangle 1729" width="9.22" height="4.681" transform="translate(614.832 2456.156)"/>
                        <rect id="Rectangle_1730" data-name="Rectangle 1730" width="9.22" height="4.681" transform="translate(637.527 2456.156)"/>
                    </g>
                    </svg>
                    خيارات الدفع
                </span>
                {localStorage.getItem('paymentMethods')?JSON.parse(localStorage.getItem("paymentMethods")).map(ele=>
                    <div key={ele.id} className="flex w-full justify-start items-center mt-2">
                        <input onChange={(e)=>setPayments(e.target.value)} type="radio" value={ele.code} name="payment" id="" />
                        <span className="text-xs mr-2 text-gray-500">{ele.company_name}</span>
                    </div>
                ):""}
                <span onClick={handleCheckout} className="text-white cursor-pointer bg-green-500 px-2 mt-6 rounded w-full text-center py-2 flex justify-center">
                    CHECKOUT
                <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 158.304 113.622">
                    <g id="Group_5322" data-name="Group 5322" transform="translate(-848.104 -1769.811)">
                        <path fill="#fff" id="Path_11811" data-name="Path 11811" d="M3820.027,409.1H3683.71a11,11,0,0,0-10.993,10.993v91.636a11.005,11.005,0,0,0,10.993,10.993h136.317a11.009,11.009,0,0,0,10.993-10.993V420.089A11.006,11.006,0,0,0,3820.027,409.1Zm6.6,102.629a6.6,6.6,0,0,1-6.6,6.6H3683.71a6.6,6.6,0,0,1-6.6-6.6V462.858a2.2,2.2,0,0,1,2.2-2.2h145.111a2.2,2.2,0,0,1,2.2,2.2Zm0-57.662a2.2,2.2,0,0,1-2.2,2.2H3679.313a2.2,2.2,0,0,1-2.2-2.2V440.515a2.2,2.2,0,0,1,2.2-2.2h145.111a2.2,2.2,0,0,1,2.2,2.2Zm0-22.343a2.2,2.2,0,0,1-2.2,2.2H3679.313a2.2,2.2,0,0,1-2.2-2.2V420.089a6.6,6.6,0,0,1,6.6-6.6h136.317a6.6,6.6,0,0,1,6.6,6.6Z" transform="translate(-2824.613 1360.715)"/>
                        <rect fill="#fff" id="Rectangle_1723" data-name="Rectangle 1723" width="25.391" height="5.222" transform="translate(961.139 1858.211)"/>
                        <path fill="#fff" id="Path_11812" data-name="Path 11812" d="M3688.566,450.111a12.13,12.13,0,1,0-12.128-12.128A12.143,12.143,0,0,0,3688.566,450.111Zm0-19.863a7.733,7.733,0,1,1-7.73,7.735A7.743,7.743,0,0,1,3688.566,430.248Z" transform="translate(-2811.973 1417.639)"/>
                    </g>
                </svg>
                </span>
                {/* <div className="flex justify-around items-center mt-7 w-full border-t-2 pt-7"> */}
                    {/* <span className="cursor-pointer text-sm text-white rounded bg-gray-700 w-24 text-center">
                        تحديث السلة
                    </span> */}
                    {/* <span className="cursor-pointer text-sm text-white rounded bg-gray-700 w-24 text-center">
                        متابعة الشراء
                    </span> */}
                {/* </div> */}
               
            </div>
            <div className="col-span-12 lg:col-span-8 p-5 flex flex-col items-start justify-start">
                {localStorage.getItem('token')? 
                    <>
                        <span className="text-sm flex justify-around items-center">
                            <svg className="w-4 ml-2" xmlns="http://www.w3.org/2000/svg" width="25" height="10" viewBox="0 0 171.496 114.128">
                                <path id="Path_11855" data-name="Path 11855" d="M4315.651,220.493a6.588,6.588,0,0,0-4.963-2.256h-28.676a2.2,2.2,0,0,1-2.2-2.2v-10.4a6.6,6.6,0,0,0-6.6-6.6h-105.4a6.6,6.6,0,0,0-6.6,6.6v77.111a6.6,6.6,0,0,0,6.6,6.6h13.176a2.2,2.2,0,0,1,2.193,2.357c-.035.475-.051.954-.051,1.442a20.03,20.03,0,0,0,37.063,10.536,2.2,2.2,0,0,1,1.871-1.042h58.975a2.189,2.189,0,0,1,1.871,1.042,20.03,20.03,0,0,0,37.063-10.488,2.2,2.2,0,0,1,2.2-2.194h3.943a6.6,6.6,0,0,0,6.6-6.6V242.466a6.612,6.612,0,0,0-1.631-4.345Zm-112.492,88.276a15.63,15.63,0,1,1,15.629-15.628A15.646,15.646,0,0,1,4203.159,308.769Zm17.709-24.994a20.038,20.038,0,0,0-35.42,0,2.2,2.2,0,0,1-1.943,1.17h-15.691a2.2,2.2,0,0,1-2.2-2.2V205.634a2.2,2.2,0,0,1,2.2-2.2h105.4a2.2,2.2,0,0,1,2.2,2.2v77.111a2.2,2.2,0,0,1-2.2,2.2h-50.406A2.2,2.2,0,0,1,4220.868,283.774Zm58.691,13.715a2.2,2.2,0,0,1-1.65.747H4225.2a2.2,2.2,0,0,1-2.182-2.484,20.729,20.729,0,0,0,.168-2.612c0-.488-.018-.967-.051-1.442a2.2,2.2,0,0,1,2.191-2.357h52.289a2.377,2.377,0,0,1,1.688.7,2.287,2.287,0,0,1,.67,1.653c-.037.479-.055.959-.055,1.447a20.243,20.243,0,0,0,.172,2.616A2.2,2.2,0,0,1,4279.56,297.49Zm20.391,11.279a15.63,15.63,0,1,1,15.627-15.628A15.648,15.648,0,0,1,4299.95,308.769Zm28.365-24.37a2.2,2.2,0,0,1-2.2,2.2h-5.723a2.2,2.2,0,0,1-2.023-1.332,20.037,20.037,0,0,0-34.586-3.958,2.192,2.192,0,0,1-1.771.9,2.333,2.333,0,0,1-.687-.106,2.207,2.207,0,0,1-1.512-2.093V224.833a2.2,2.2,0,0,1,2.2-2.2h28.676a2.21,2.21,0,0,1,1.656.752l15.426,17.633a2.192,2.192,0,0,1,.545,1.447Z" transform="translate(-4161.218 -199.038)"/>
                            </svg>
                            توصيل إلى : 
                        </span>
                            <div className="grid w-full grid-cols-12 gap-2 mt-2 overflow-y-scroll overflow-x-hidden scr" style={{maxHeight:"28rem"}}>
                                {address?address.map((ele,index)=>
                                    <div key={index} onClick={()=>setActive(parseInt(ele.id))} className={`${active == parseInt(ele.id)?"border-2 border-yellow-500":"border-2 border-gray-100"} col-span-4 flex cursor-pointer  flex-col justify-between items-start rounded  p-2`} >
                                        <span className="text-xs  font-bold flex justify-start">
                                            <img className="w-4 ml-1" src="./images/icons/ssdasdasdasd.svg" alt="" />
                                            {ele.address_type}
                                        </span>

                                        <span className="text-xs mt-2 m-1">
                                            {ele.address_title}
                                        </span>
                                        
                                        <span className="text-xs m-1">
                                            {ele.address_line_1}
                                        </span>
                                        <span className="text-xs m-1">
                                            {ele.city}
                                        </span>
                                        <span className="text-xs m-1">
                                            {ele.phone}
                                        </span>
                                    </div>
                                ):""}

                                    <div onClick={handleModal} className={`border-dashed border-2 col-span-4 flex cursor-pointer  flex-col justify-between items-start rounded  p-2`} >
                                        <span className="text-xs m-1 text-yellow-500 font-bold">
                                        <span className="text-lg ">+</span> إضافة عنوان جديد
                                        </span>
                                    </div>
                                {/* <div className="col-span-4 flex justify-start items-center mt-2">
                                    <span onClick={handleModal} className="bg-white cursor-pointer text-xs py-1 rounded px-2 shadow" style={{border:"1px solid #eee"}}>
                                        إضافة عنوان جديد
                                    </span>
                                </div> */}
                                <div className="col-span-12 pt-4 border-t-2 border-dashed mt-2 flex flex-col justify-start items-start">
                                    <span className="text-xs flex justify-center items-center">  
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 ml-2" width="25" height="25" viewBox="0 0 145.111 127.276">
                                        <g id="Group_5279" data-name="Group 5279" transform="translate(-2085.948 -535.155)">
                                            <rect id="Rectangle_1740" data-name="Rectangle 1740" width="69.198" height="4.397" transform="translate(2123.904 572.99)"/>
                                            <rect id="Rectangle_1741" data-name="Rectangle 1741" width="14.001" height="4.397" transform="translate(2179.102 593.359)"/>
                                            <rect id="Rectangle_1742" data-name="Rectangle 1742" width="41.6" height="4.397" transform="translate(2123.904 593.359)"/>
                                            <path id="Path_11864" data-name="Path 11864" d="M3974,229.459h3.523a2.194,2.194,0,0,1,2.162,2.59l-3.451,19-.826,4.547,4.049-2.225,42.984-23.644a2.2,2.2,0,0,1,1.061-.268h56.035a19.812,19.812,0,0,0,19.787-19.788V148.109a19.81,19.81,0,0,0-19.787-19.788H3974a19.806,19.806,0,0,0-19.787,19.788v61.563A19.809,19.809,0,0,0,3974,229.459Zm-15.391-81.35A15.408,15.408,0,0,1,3974,132.718h105.537a15.408,15.408,0,0,1,15.391,15.391v61.563a15.408,15.408,0,0,1-15.391,15.391h-57.734l-.49.268-35.873,19.735a2.245,2.245,0,0,1-1.062.268,2.193,2.193,0,0,1-2.162-2.59l2.744-15.092.471-2.59H3974a15.408,15.408,0,0,1-15.391-15.391Z" transform="translate(-1868.27 406.834)"/>
                                        </g>
                                    </svg>

                                    اترك رسالة للبائع</span>
                                    <textarea  onChange={(e)=>setMessage(e.target.value)} className="text-xs mb-4  p-3 w-full h-28 border-2 mt-2" name="" id="" placeholder="اكتب رسالتك هنا" ></textarea>
                                </div>
                            </div>
                    </>
                
                :
                <>
                        <span className="text-sm flex justify-around items-center">
                            <svg className="w-4 ml-2" xmlns="http://www.w3.org/2000/svg" width="25" height="10" viewBox="0 0 171.496 114.128">
                                <path id="Path_11855" data-name="Path 11855" d="M4315.651,220.493a6.588,6.588,0,0,0-4.963-2.256h-28.676a2.2,2.2,0,0,1-2.2-2.2v-10.4a6.6,6.6,0,0,0-6.6-6.6h-105.4a6.6,6.6,0,0,0-6.6,6.6v77.111a6.6,6.6,0,0,0,6.6,6.6h13.176a2.2,2.2,0,0,1,2.193,2.357c-.035.475-.051.954-.051,1.442a20.03,20.03,0,0,0,37.063,10.536,2.2,2.2,0,0,1,1.871-1.042h58.975a2.189,2.189,0,0,1,1.871,1.042,20.03,20.03,0,0,0,37.063-10.488,2.2,2.2,0,0,1,2.2-2.194h3.943a6.6,6.6,0,0,0,6.6-6.6V242.466a6.612,6.612,0,0,0-1.631-4.345Zm-112.492,88.276a15.63,15.63,0,1,1,15.629-15.628A15.646,15.646,0,0,1,4203.159,308.769Zm17.709-24.994a20.038,20.038,0,0,0-35.42,0,2.2,2.2,0,0,1-1.943,1.17h-15.691a2.2,2.2,0,0,1-2.2-2.2V205.634a2.2,2.2,0,0,1,2.2-2.2h105.4a2.2,2.2,0,0,1,2.2,2.2v77.111a2.2,2.2,0,0,1-2.2,2.2h-50.406A2.2,2.2,0,0,1,4220.868,283.774Zm58.691,13.715a2.2,2.2,0,0,1-1.65.747H4225.2a2.2,2.2,0,0,1-2.182-2.484,20.729,20.729,0,0,0,.168-2.612c0-.488-.018-.967-.051-1.442a2.2,2.2,0,0,1,2.191-2.357h52.289a2.377,2.377,0,0,1,1.688.7,2.287,2.287,0,0,1,.67,1.653c-.037.479-.055.959-.055,1.447a20.243,20.243,0,0,0,.172,2.616A2.2,2.2,0,0,1,4279.56,297.49Zm20.391,11.279a15.63,15.63,0,1,1,15.627-15.628A15.648,15.648,0,0,1,4299.95,308.769Zm28.365-24.37a2.2,2.2,0,0,1-2.2,2.2h-5.723a2.2,2.2,0,0,1-2.023-1.332,20.037,20.037,0,0,0-34.586-3.958,2.192,2.192,0,0,1-1.771.9,2.333,2.333,0,0,1-.687-.106,2.207,2.207,0,0,1-1.512-2.093V224.833a2.2,2.2,0,0,1,2.2-2.2h28.676a2.21,2.21,0,0,1,1.656.752l15.426,17.633a2.192,2.192,0,0,1,.545,1.447Z" transform="translate(-4161.218 -199.038)"/>
                            </svg>
                            توصيل إلى : 
                        </span>
                        
                      
                        <span className="w-full text-sm mt-5">
                            معلومات التواصل 
                        </span>
                        <input type="text" name="" onChange={(e) => {setaddressdesc(e.target.value)}} className="w-full h-6 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-1" id="" />
                        
                        <span className="w-full text-sm mt-5">
                            تفاصيل العنوان
                        </span>
                        <input type="text" name="" onChange={(e) => {setaddressdesc(e.target.value)}} className="w-full h-6 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-1" id="" />
                        
                        <div className="grid gap-4 grid-cols-12 mt-2">
                            <div className="col-span-6">
                                <span className="w-full text-sm ">
                                    المدينة
                                </span>
                                <input type="text" name="" onChange={(e) => {setcity(e.target.value)}} className="w-full h-6 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-1" id="" />
                            </div>
                            <div className="col-span-6">
                                <span className="w-full text-sm ">
                                    الولاية
                                </span>
                                <select name="" onChange={(e) => {setstate(e.target.value)}} id="" className="w-full border-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent">
                                 {localStorage.getItem("states").length>0?JSON.parse(localStorage.getItem("states")).map(ele=>{
                                     return (<option key={ele.id} value={ele.id}>{ele.name}</option>)   
                                    }
                                    ):""}
                                </select>
                            </div>
                        </div>
                        <span className="w-full text-sm mt-5">
                            رقم الهاتف
                        </span>
                        <input type="text" name="" onChange={(e) => {setphone(e.target.value)}} className="w-full h-6 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-1" id="" />
                        <span className="w-full text-sm mt-5">
                            البريد الالكتروني
                        </span>
                        <input type="email" name="" onChange={(e) => {setEmail(e.target.value)}} className="w-full h-6 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-1" id="" />
                        <div className="flex justify-between items-center mt-5">
                            <input type="checkbox" onChange={(e)=>setAccount(!account)} name="" id="" />
                            <span className="w-full mr-2 text-sm ">
                                إنشاء حساب
                            </span>
                        </div>

                        
                        {account?
                    
                        <>
                        
                            <span className="w-full text-sm mt-5">
                                كلمة السر
                            </span>
                            <input type="password" name="" onChange={(e) => {setPassword(e.target.value)}} className="w-full h-6 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-1" id="" />


                            <span className="w-full text-sm mt-5">
                                تأكيد كلمة السر
                            </span>
                            <input type="password" name="" onChange={(e) => {setConfirmation(e.target.value)}} className="w-full h-6 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-1" id="" />

                            <div className="flex justify-between items-center mt-5">
                            <input type="checkbox" onChange={(e)=>setSubs(!subs)} name="" id="" />
                            <span className="w-full mr-2 text-sm ">
                                اشتراك باخر الاخبار
                            </span>

                            <div className="col-span-12 pt-4 border-t-2 border-dashed mt-2 flex flex-col justify-start items-start">
                                    <span className="text-xs flex justify-center items-center">  
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 ml-2" width="25" height="25" viewBox="0 0 145.111 127.276">
                                        <g id="Group_5279" data-name="Group 5279" transform="translate(-2085.948 -535.155)">
                                            <rect id="Rectangle_1740" data-name="Rectangle 1740" width="69.198" height="4.397" transform="translate(2123.904 572.99)"/>
                                            <rect id="Rectangle_1741" data-name="Rectangle 1741" width="14.001" height="4.397" transform="translate(2179.102 593.359)"/>
                                            <rect id="Rectangle_1742" data-name="Rectangle 1742" width="41.6" height="4.397" transform="translate(2123.904 593.359)"/>
                                            <path id="Path_11864" data-name="Path 11864" d="M3974,229.459h3.523a2.194,2.194,0,0,1,2.162,2.59l-3.451,19-.826,4.547,4.049-2.225,42.984-23.644a2.2,2.2,0,0,1,1.061-.268h56.035a19.812,19.812,0,0,0,19.787-19.788V148.109a19.81,19.81,0,0,0-19.787-19.788H3974a19.806,19.806,0,0,0-19.787,19.788v61.563A19.809,19.809,0,0,0,3974,229.459Zm-15.391-81.35A15.408,15.408,0,0,1,3974,132.718h105.537a15.408,15.408,0,0,1,15.391,15.391v61.563a15.408,15.408,0,0,1-15.391,15.391h-57.734l-.49.268-35.873,19.735a2.245,2.245,0,0,1-1.062.268,2.193,2.193,0,0,1-2.162-2.59l2.744-15.092.471-2.59H3974a15.408,15.408,0,0,1-15.391-15.391Z" transform="translate(-1868.27 406.834)"/>
                                        </g>
                                    </svg>

                                    اترك رسالة للبائع</span>
                                    <textarea  onChange={(e)=>setMessage(e.target.value)} className="text-xs mb-4  p-3 w-full h-28 border-2 mt-2" name="" id="" placeholder="اكتب رسالتك هنا" ></textarea>
                            </div>
                        </div>
                        </>
                        :""

                    }

                       


                       

                </>}
              
            </div>
         
            <div className={`${addaddress?"flex":"hidden"} fixed z-50 top-0 left-0 h-screen w-full flex flex-col  justify-center items-center bg-black bg-opacity-70`}>
                        <div onClick={closeModal} className="rounded-full border-2 border-white w-8 h-6 mb-4 text-white text-center text-md cursor-pointer">
                            x
                        </div>
                        <div className={`${addaddress?"slideUpss":"slideDownss"} relative p-5 w-1/2 bg-white rounded shadow grid grid.cols-12 `} dir="rtl">
                    <div className="col-span-12">
                        <span className="text-sm font-bold">
                            إضافة عنوان جديد
                        </span>
                    </div>
                    <div className="col-span-12 mt-5 flex flex-col justify-between items-start">
                        <span className="text-sm">
                            اختر نوع العنوان
                        </span>
                        <select name="" id="" onChange={(e) => {setAddressType(e.target.value)}} className="w-full border-2 rounded mt-3 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent">
                            <option value="">نوع العنوان</option>
                            {addinfo?Object.values(addinfo.address_types).map(ele=>
                                    <option key={ele} value={ele}>{ele}</option>
                            ):""}
                        </select>
                        

                        <span className="w-full text-sm mt-5">
                            تفاصيل العنوان
                        </span>
                        <input type="text" name="" onChange={(e) => {setaddressdesc(e.target.value)}} className="w-full h-6 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-1" id="" />
                        <div className="grid gap-4 grid-cols-12 mt-2">
                            <div className="col-span-6">
                                <span className="w-full text-sm ">
                                    المدينة
                                </span>
                                <input type="text" name="" onChange={(e) => {setcity(e.target.value)}} className="w-full h-6 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-1" id="" />
                            </div>
                            <div className="col-span-6">
                                <span className="w-full text-sm ">
                                    الولاية
                                </span>
                                {/* country_id: 512
                                id: 24
                                iso_code: "T"
                                name: "Tucumán  */}
                                <select name="" onChange={(e) => {setstate(e.target.value)}} id="" className="w-full border-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent">
                                    <option value="">اختر ولاية</option>
                                    {localStorage.getItem("states").length>0?JSON.parse(localStorage.getItem("states")).map(ele=>{
                                     return (<option key={ele.id} value={ele.id}>{ele.name}</option>)   
                                    }
                                    ):""}
                                </select>
                            </div>
                        </div>
                        <span className="w-full text-sm mt-5">
                            رقم الهاتف
                        </span>
                        <input type="text" name="" onChange={(e) => {setphone(e.target.value)}} className="w-full h-6 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-1" id="" />
                        <span onClick={addAddress} className="text-sm text-white text-center w-56 cursor-pointer py-1 rounded bg-yellow-500 mt-4">
                            حفظ العنوان
                        </span>
                    </div>
            </div>
                </div>
        </div>
    );
}