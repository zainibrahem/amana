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
    interface Data{
        name:""
        nice_name:""
        sex:string
        email:""
        dob:""
    }
    interface Status{

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
    interface State{
        id:""
    }
    interface Country{
        name:""
        id:""
    }
    const closeModal = () => {
        setModal(false)
    }
    const closeModals = () => {
        setModals(false)
    }
    const openModal = () => {
        setModal(true)
    }
    const [addressType,setAddressType] = useState<string>()
    const [addresstitle,setAddressTitle] = useState<string>()
    const [addressdesc,setaddressdesc] = useState<string>()
    const [editadd,seteditadd] = useState<Address>()
    const [city,setcity] = useState<string>()
    const [state,setstate] = useState<string>()
    const [phone,setphone] = useState<string>()
    const [avatar,setAvatar] = useState([])
    const {getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setAvatar(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
          })));
        }
      });
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
    
    const datass = {
        address_title : addresstitle,
        address_type:addressType,
        city:city,
        state_id:state,
        address_line_1:addressdesc,
        phone:phone,
        avatar:avatar[0]
    }
    
    var formBodys = [];
    for (var property in datass) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(datass[property]);
      formBodys.push(encodedKey + "=" + encodedValue);
    }
    
    async function editAddress(id) {
        console.log(datass)
       const response = await fetch(`https://amanacart.com/api/address/${id}`, {
           method: 'put', // *GET, POST, PUT, DELETE, etc.
           headers: {
           'Authorization' : `Bearer ${localStorage.getItem('token')}`,
           'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
           },
           body: formBodys.join("&") // body data type must match "Content-Type" header
       });
       return response.json(); // parses JSON response into native JavaScript objects
    }
    async function addAddresss() {
        console.log(datass)
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
    const updateAddress = (id) =>{
        editAddress(id)
        .then(data => {
            window.location.reload(false)
          });
    }
    const deleteAddress = (id) => {
        fetch(`https://amanacart.com/api/address/${id}`,{
            method: 'delete',
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }})
         .then(res => res.json())
         .then(result =>{
            setAddressInfo(result.data);
            console.log(result.data)
            window.location.reload(false)
         })
         .catch(e => {
           console.log(e);
       });
    }
    const handleEdit = (id) =>{
        setModals(true)
        fetch(`https://amanacart.com/api/address/${id}`,{
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }})
         .then(res => res.json())
         .then(result =>{
            setAddressInfo(result.data);
            console.log(result.data)
            seteditadd(result.data.address)
            setAddressType(result.data.address.address_type)
            setAddressTitle(result.data.address.address_title)
            setaddressdesc(result.data.address.address_line_1)
            setcity(result.data.address.city)
            setstate(result.data.address.state)
            setphone(result.data.address.phone)
         })
         .catch(e => {
           console.log(e);
       });
    }

    const addAddress = () =>{
        addAddresss()
        .then(data => {
          console.log('address'); // JSON data parsed by `data.json()` call
          console.log(data); // JSON data parsed by `data.json()` call
          window.location.reload(false)
        });
    }
    const [modal,setModal] = useState<boolean>(false)
    const [modals,setModals] = useState<boolean>(false)
    
    const [addinfo,setAddressInfo] = useState<Address>()
    const handlModals = () =>{
        setModal(!modal)
        fetch(`https://amanacart.com/api/address/create`,{
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }})
         .then(res => res.json())
         .then(result =>{
            setAddressInfo(result.data);
            console.log(result.data)
         })
         .catch(e => {
           console.log(e);
       });
    }
    const [openTab,setOpenTab] = useState(2);
    const [data,setData] = useState<Data>();
    const [male,setMale] = useState(true);
    const [female,setFemale] = useState(false);
    const [name,setName] = useState<string>();
    const [nickname,setNickname] = useState<string>();
    const [email,setEmail] = useState<string>();
    const [dob,setDob] = useState<string>();
    const [adderss,setAddress] = useState<Address[]>();
    const [sex,setSex] = useState<string>('app.male');

    useEffect(() => {
        console.log(localStorage.getItem('token'));
        fetch(`https://amanacart.com/api/account/update`,{
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }})
         .then(res => res.json())
         .then(result =>{
            setData(result.data)
            setName(result.data.name)
            setNickname(result.data.nice_name)
            setEmail(result.data.email)
            setDob(result.data.dob)
            setSex(`app.${result.data.sex}`)
         })
         .catch(e => {
           console.log(e);
       });
     },[])
     useEffect(()=>{
        // 
        fetch(`https://amanacart.com/api/addresses`,{
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }})
         .then(res => res.json())
         .then(result =>{
            setAddress(result.data)
            
         })
     },[])
     
     const datas = {
         name : name,
         dob:dob,
         nice_name:nickname,
         email:email,
         sex:sex,   
         avatar:avatar[0]
     }
     var formBody = [];
     for (var property in datas) {
       var encodedKey = encodeURIComponent(property);
       var encodedValue = encodeURIComponent(datas[property]);
       formBody.push(encodedKey + "=" + encodedValue);
     }
     const formData = new FormData();
        formData.append('name',name)
        formData.append('nice_name',nickname)
        formData.append('avatar',avatar[0])
        formData.append('sex',sex)
        formData.append('dob',dob)
        formData.append('email',email)
        async function postData(data) {
        const response = await fetch('https://amanacart.com/api/account/update', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
            'Authorization' : `Bearer ${localStorage.getItem('token')}`,
            },
            body: formData // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
     }
    
     const handleSubmit = () =>{
         
        postData(datas)
        .then(data => {
            console.log(data);
            localStorage.setItem('name',data.data.name);
            localStorage.setItem('nice_name',data.data.nice_name);
            localStorage.setItem('avatar',data.data.avatar);
            localStorage.setItem('email',data.data.email);
            window.location.href="/dashboard"
        }).catch(e=>{
            console.log(e)
        });
        
        
     }
    return (
        <div className="grid grid-cols-12 bg-white rounded shadow p-4 px-9 mt-7" dir="ltr">
        <div className="col-span-12">
            <div className="grid grid-cols-12">
                <div className="hidden lg:block col-span-4"></div>
                <div className="col-span-12 lg:col-span-8">
                <ul
                className="flex mb-0 border-b-2 list-none  flex-row lg:mb-2"
                role="tablist"
                >
                     <li className="-mb-0.5 flex-auto text-center" >
                    <a
                    className={
                        "text-xs text-2xs font-bold uppercase px-1 lg:px-5 pb-2  border-black  block leading-normal " +
                        (openTab === 4
                        ? "text-black border-b-2"
                        : "text-black")
                    }
                    onClick={e => {
                        e.preventDefault();
                        setOpenTab(4);
                    }}
                    data-toggle="tab"
                    href={`#link3`}
                    role="tablist"
                    >
                    <i className="fas fa-space-shuttle text-base mr-1"></i> 
                        العناوين
                    </a>
                </li>
                <li className="-mb-0.5 flex-auto text-center" >
                    <a
                    className={
                        "text-xs text-2xs font-bold uppercase px-1 lg:px-5 pb-2  border-black  block leading-normal " +
                        (openTab === 3
                        ? "text-black border-b-2"
                        : "text-black")
                    }
                    onClick={e => {
                        e.preventDefault();
                        setOpenTab(3);
                    }}
                    data-toggle="tab"
                    href={`#link1`}
                    role="tablist"
                    >
                    <i className="fas fa-space-shuttle text-base mr-1"></i> 
                    تغيير كلمة السر
                    </a>
                </li>
                <li className="-mb-0.5 flex-auto text-center" >
                    <a
                    className={
                        "text-xs text-2xs font-bold uppercase px-1 lg:px-5 pb-2  border-black  block leading-normal " +
                        (openTab === 2
                        ? "text-black border-b-2"
                        : "text-black")
                    }
                    onClick={e => {
                        e.preventDefault();
                        setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href={`#link1`}
                    role="tablist"
                    >
                    <i className="fas fa-space-shuttle text-base mr-1"></i> 
                        
                        الحساب الشخصي
                    </a>
                </li>
            </ul>
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
                                    <option value={ele}>{ele}</option>
                            ):""}
                        </select>
                        <span className="text-sm pb-1 mt-4 w-full">
                            اسم العنوان
                        </span>
                        <input type="text" name="" onChange={(e) => {setAddressTitle(e.target.value)}} className="w-full h-6 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-1" id="" />

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
                                    <option value="">اختر ولاية</option>
                                    {addinfo?Object.entries(addinfo.states).map(([key, ele])=>
                                            <option value={key}>{ele}</option>
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
        <div className={`${modals?"flex":"hidden"} fixed z-50 top-0 left-0 h-screen w-full flex flex-col  justify-center items-center bg-black bg-opacity-70`}>
            <div onClick={closeModals} className="rounded-full border-2 border-white w-8 h-6 mb-4 text-white text-center text-md cursor-pointer">
                x
            </div>
            <div className={`${modals?"slideUpss":"slideDownss"} relative p-5 w-1/2 bg-white rounded shadow grid grid.cols-12 `} dir="rtl">
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
                            <option  value="">نوع العنوان</option>
                            {addinfo?Object.values(addinfo.address_types).map(ele=>
                                    <option selected={editadd&&editadd.address_type == ele?true:false} value={ele}>{ele}</option>
                            ):""}
                        </select>
                        <span className="text-sm pb-1 mt-4 w-full">
                            اسم العنوان
                        </span>
                        <input type="text" value={addresstitle?addresstitle:""} name="" onChange={(e) => {setAddressTitle(e.target.value)}} className="w-full h-6 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-1" id="" />

                        <span className="w-full text-sm mt-5">
                            تفاصيل العنوان
                        </span>
                        <input type="text" name="" value={addressdesc?addressdesc:""} onChange={(e) => {setaddressdesc(e.target.value)}} className="w-full h-6 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-1" id="" />
                        <div className="grid gap-4 grid-cols-12 mt-2">
                            <div className="col-span-6">
                                <span className="w-full text-sm ">
                                    المدينة
                                </span>
                                <input type="text" name="" value={city?city:""} onChange={(e) => {setcity(e.target.value)}} className="w-full h-6 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-1" id="" />
                            </div>
                            <div className="col-span-6">
                                <span className="w-full text-sm ">
                                    الولاية
                                </span>
                                <select name="" onChange={(e) => {setstate(e.target.value)}} id="" className="w-full border-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent">
                                    <option value="">اختر ولاية</option>
                                    {addinfo?Object.entries(addinfo.states).map(([key, ele])=>
                                            <option selected={editadd&&editadd.state.id == key? true:false} value={key}>{ele}</option>
                                    ):""}
                                </select>
                            </div>
                        </div>
                        <span className="w-full text-sm mt-5">
                            رقم الهاتف
                        </span>
                        <input type="text" name="" value={phone?phone:""} onChange={(e) => {setphone(e.target.value)}} className="w-full h-6 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-1" id="" />
                        <span onClick={()=>updateAddress(editadd?editadd.id:"")} className="text-sm text-white text-center w-56 cursor-pointer py-1 rounded bg-yellow-500 mt-4">
                            حفظ العنوان
                        </span>
                    </div>
            </div>
        </div>
     
        <div className="col-span-12 order-3 md:order-3 mt-12">
            <div className="order-0 relative flex flex-col min-w-0 break-words w-full ">
                <div className="sm:px-4 lg:px-0  flex-auto">
                <div className="tab-content tab-space" >
                    <div  className={`${openTab == 4?"block":"hidden"} text-right flex flex-col justify-between items-end p-2`} id={`link3`}>
                        <div className="grid grid-cols-12 w-full" dir="rtl">
                        {adderss?adderss.map(ele=>
                            <div className="col-span-12 flex justify-start items-center border-b-2 pb-5 pt-3">
                                <div className="flex w-1/3 flex-col items-center justify-between">
                                    <span className="text-sm mt-2">
                                        {ele.address_line_1}
                                    </span>
                                    <span className="text-sm mt-2">
                                        {ele.address_line_2}
                                    </span>
                                    <span className="text-sm mt-2">
                                        {ele.address_title}
                                    </span>
                                    <span className="text-sm mt-2">
                                        {ele.city}
                                    </span>
                                    <span className="text-sm mt-2">
                                        {ele.country.name}
                                    </span>
                                    <span className="text-sm mt-2">
                                        {ele.phone}
                                    </span>
                                </div>
                                <div className="flex flex-col justify-start items-center h-full mr-20">
                                    <span className="text-sm font-bold">
                                        {ele.address_type}
                                    </span>
                                    <div className="flex justify-between items-center mt-5">
                                        <span onClick={()=>handleEdit(ele.id)} className="cursor-pointer text-xs border-2 rounded  px-2">
                                            تعديل
                                        </span>
                                        <span onClick={()=>deleteAddress(ele.id)} className="cursor-pointer text-xs border-2 rounded mr-2 px-2">
                                            حذف
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ):""}
                            <div className="col-span-12 flex justify-center items-center">
                                <span onClick={handlModals} className="cursor-pointer text-sm bg-gray-700 text-white px-3 py-1 mt-5 rounded">
                                    إضافة عنوان جديد
                                </span>
                            </div>
                        </div>
                    </div>
                    <div  className={`${openTab == 2?"block":"hidden"} text-right flex flex-col justify-between items-end p-2`} id={`link2`}>
                        <div className="grid grid-cols-12 w-full">
                            <div className="hidden lg:block col-span-4"></div>
                            <div className="col-span-12 lg:col-span-4 flex flex-col justify-between items-end">
                                <label htmlFor="" className="w-full text-sm text-right">
                                    * الاسم الأول 
                                </label>
                                <input type="text" onChange={(e)=>setName(e.target.value)} value={name?name:""} placeholder="زين" className=" focus:outline-none w-full focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-right  px-2 border-2 rounded  mt-2 py-1" />
                                <label htmlFor=""  className="w-full text-sm text-right mt-4">
                                    * الاسم الأخير 
                                </label>
                                <input type="text" onChange={(e)=>setNickname(e.target.value)} value={nickname?nickname:""} placeholder="ابراهيم" className=" focus:outline-none w-full focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-right  px-2 border-2 rounded  mt-2 py-1" />
                                <label htmlFor="" className="w-full text-sm text-right mt-4">
                                    * البريد الالكتروني 
                                </label>
                                <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email?email:""} placeholder="example@gmail.com" className=" focus:outline-none w-full focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-right  px-2 border-2 rounded  mt-2 py-1" />
                                <label htmlFor="" className="w-full text-sm text-right mt-4">
                                    * تاريخ الولادة 
                                </label>
                                <input type="date" onChange={(e)=>setDob(e.target.value)} value={dob?dob:""} placeholder="example@gmail.com" className=" focus:outline-none w-full focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-right  px-2 border-2 rounded  mt-2 py-1" />
                                <label htmlFor="" className="w-full text-sm text-right mt-4">
                                    الصورة الشخصية
                                </label>
                                <section className="container border-dashed border-2 flex flex-col justify-center items-center py-5">
                                    <div {...getRootProps({className: 'dropzone'})}>
                                        <input {...getInputProps()} />
                                        <p className="cursor-pointer">قم بتحميل الملفات</p>
                                    </div>
                                    <aside style={thumbsContainer}>
                                        {thumbs}
                                    </aside>
                                </section>                                
                                <div className="flex w-full justify-between items-center">
                                    <div className="w-1/3 flex justify-between items-center mt-4 ml-16">
                                        <label className="mr-4 lg:mr-2" htmlFor="male">
                                            ذكر
                                        </label>
                                        <input  onChange={(e)=>{setMale(true),setFemale(false),setSex('app.male')}}  checked={male?true:false}   type="radio" name="sex" />
                                        <label className="mr-4 lg:mr-2 ml-2 lg:ml-0" htmlFor="male">
                                            أنثى
                                        </label>
                                        <input onChange={(e)=>{setMale(false),setFemale(true),setSex('app.female')}} checked={female?true:false}    type="radio" name="sex" />
                                    </div>
                                    <label htmlFor="" className=" text-sm text-right mt-4">
                                        الجنس
                                    </label>
                                </div>
                                <span onClick={()=> handleSubmit()} className="cursor-pointer w-full px-2 text-white bg-yellow-500 text-center mt-4 rounded">
                                    حفظ
                                </span>
                                
                            </div>
                            <div className="col-span-4"></div>
                        </div>
                    </div>
                   
                    <div  className={openTab === 3 ? "block" : "hidden"} id={`link3`}>
                    <div className="grid grid-cols-12 w-full">
                            <div className="hidden lg:block col-span-4"></div>
                            <div className="col-span-12 lg:col-span-4 flex flex-col justify-between items-end">
                                <label htmlFor="" className="w-full text-sm text-right">
                                    * كلمة السر القديمة 
                                </label>
                                <input type="password" onChange={(e)=>setName(e.target.value)} value={name?name:""} placeholder="زين" className=" focus:outline-none w-full focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-right  px-2 border-2 rounded  mt-2 py-1" />
                                <label htmlFor=""  className="w-full text-sm text-right mt-4">
                                    * كلمة السر الجديدة
                                </label>
                                <input type="password" onChange={(e)=>setNickname(e.target.value)} value={nickname?nickname:""} placeholder="ابراهيم" className=" focus:outline-none w-full focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-right  px-2 border-2 rounded  mt-2 py-1" />
                                                  
                              
                                <span onClick={()=> handleSubmit()} className="cursor-pointer w-full px-2 text-white bg-yellow-500 text-center mt-4 rounded">
                                    حفظ
                                </span>
                                
                            </div>
                            <div className="col-span-4"></div>
                        </div>
                    </div>
                </div>
                </div>
            </div> 
        </div>
    </div>

    );
}