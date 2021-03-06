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
    borderRadius: "100%",
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
    borderRadius: "100%",
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
    const Route = useAppState('Route');    
    const [addressType,setAddressType] = useState<string>()
    const [addresstitle,setAddressTitle] = useState<string>()
    const [addressdesc,setaddressdesc] = useState<string>()
    const [editadd,seteditadd] = useState<Address>()
    const [city,setcity] = useState<string>()
    const [state,setstate] = useState<string>()
    const [phone,setphone] = useState<string>()
    const [avatar,setAvatar] = useState([])
    const [change,setChange] = useState<boolean>(false)
    const [yearsse,setyear] = useState('1970')
    const [monthss,setmonth] = useState('01')
    const [day,setday] = useState('12')
    
    const list  = []
   
    const {getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setAvatar(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
          })));
          setChange(true)
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
            window.location.reload(false)
         })
         .catch(e => {
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
             console.log(result)
            setAddressInfo(result.data);
            seteditadd(result.data.address)
            setAddressType(result.data.address.address_type)
            setAddressTitle(result.data.address.address_title)
            setaddressdesc(result.data.address.address_line_1)
            setcity(result.data.address.city)
            setstate(result.data.address.state.id)
            setphone(result.data.address.phone)
         })
         .catch(e => {
       });
    }

    const addAddress = () =>{
        addAddresss()
        .then(data => {
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
         })
         .catch(e => {
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
    const [newlist,setnewlist] = useState([]);
    const [year,setyears] = useState([]);
    const [dateOfBirth,setdateOfBirth] = useState<string>()
    const month = []
    const yearss = []
    useEffect(() => {
        for(var i = 0 ; i < 30 ; i++){
            list.push(i)            
        }
        
        for(var j = 2021 ; j > 1900 ; j-- ){
            yearss.push(j)            
        }
        setyears(yearss)
        setnewlist(list)
        fetch(`https://amanacart.com/api/account/update`,{
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }})
         .then(res => res.json())
         .then(result =>{
            setdateOfBirth(yearsse+'-'+monthss+'-'+day)
            setData(result.data)
            setName(result.data.name)
            setNickname(result.data.nice_name)
            setEmail(result.data.email)
            setDob(result.data.dob)
            console.log('result.data.dob')
            console.log(result.data.dob)
            setSex(`app.${result.data.sex}`)
         })
         .catch(e => {
       });
     },[])
     useEffect(()=>{
        document.title = "???????????? ???????????? | ??????????"
        fetch(`https://amanacart.com/api/addresses`,{
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }})
         .then(res => res.json())
         .then(result =>{
            setAddress(result.data)
            
         })
     },[])
     const checked = (e) => {
         console.log(e.target.nextSibling)
     }
     const datas = {
         name : name,
         dob:dateOfBirth,
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
        formData.append('dob',dateOfBirth)
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
        setdateOfBirth(yearsse+'-'+monthss+'-'+day)
        postData(datas)
        .then(data => {
            localStorage.setItem('name',data.data.name);
            localStorage.setItem('nice_name',data.data.nice_name);
            localStorage.setItem('avatar',data.data.avatar);
            localStorage.setItem('email',data.data.email);
            window.location.href="/dashboard"
        }).catch(e=>{
        });
        
        
     }
    return (
        <div className="grid grid-cols-12 bg-white rounded shadow p-4 px-9 mt-7" dir="ltr">
        <div className="col-span-12">
            <div className="grid grid-cols-12">
                <div className="hidden lg:block col-span-4"></div>
                <div className="col-span-12 lg:col-span-12">
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
                        ????????????????
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
                    ?????????? ???????? ????????
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
                        
                        ???????????? ????????????
                    </a>
                </li>
            </ul>
            </div>
            </div>
        </div>
        <div className={`${modal?"flex":"hidden"} fixed z-50 top-0 left-0 h-screen w-full flex flex-col  justify-center items-center bg-black bg-opacity-70`}>
            <div onClick={closeModal} className="rounded-full border-2 border-white w-8 h-6 mb-4 text-white text-center text-md cursor-pointer -mt-20 lg:mt-0">
                x
            </div>
            <div className={`${modal?"slideUpss":"slideDownss"} relative p-5 w-3/4 lg:w-1/2 bg-white rounded shadow grid grid.cols-12 `} dir="rtl">
                    <div className="col-span-12">
                        <span className="text-sm font-bold">
                            ?????????? ?????????? ????????
                        </span>
                    </div>
                    <div className="col-span-12 mt-5 flex flex-col justify-between items-start">
                        <span className="text-sm">
                            ???????? ?????? ??????????????
                        </span>
                        <select name="" id="" onChange={(e) => {setAddressType(e.target.value)}} className="w-full border-2 rounded mt-3 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent">
                            <option value="">?????? ??????????????</option>
                            {addinfo?Object.values(addinfo.address_types).map(ele=>
                                    <option key={ele} value={ele}>{ele}</option>
                            ):""}
                        </select>
                        <span className="text-sm pb-1 mt-4 w-full">
                            ?????? ??????????????
                        </span>
                        <input type="text"  name="" onChange={(e) => {setAddressTitle(e.target.value)}} className="w-full h-6 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-1" id="" />


                        <span className="w-full text-sm mt-5">
                            ???????????? ??????????????
                        </span>
                        <input type="text" name="" onChange={(e) => {setaddressdesc(e.target.value)}} className="w-full h-6 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-1" id="" />
                        <div className="grid gap-4 grid-cols-12 mt-2">
                            <div className="col-span-6">
                                <span className="w-full text-sm ">
                                    ??????????????
                                </span>
                                <input type="text" name="" onChange={(e) => {setcity(e.target.value)}} className="w-full h-6 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-1" id="" />
                            </div>
                            <div className="col-span-6">
                                <span className="w-full text-sm ">
                                    ??????????????
                                </span>
                                <select name="" onChange={(e) => {setstate(e.target.value),console.log(e.target.value)}} id="" className="w-full h-6 border-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent">
                                    <option value="">???????? ??????????</option>
                                    {addinfo?Object.entries(addinfo.states).map(([key, ele])=>
                                            <option key={key}  value={key}>{ele}</option>
                                    ):""}
                                </select>

                            </div>
                        </div>
                        <span className="w-full text-sm mt-5">
                            ?????? ????????????
                        </span>
                        <input type="text" name="" onChange={(e) => {setphone(e.target.value)}} className="w-full h-6 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-1" id="" />
                        <span onClick={addAddress} className="text-sm text-white self-center text-center w-56 cursor-pointer py-1 rounded bg-yellow-500 mt-4">
                            ?????? ??????????????
                        </span>
                    </div>
            </div>
        </div>
        <div className={`${modals?"flex":"hidden"} fixed z-50 top-0 left-0 h-screen w-full flex flex-col  justify-center items-center bg-black bg-opacity-70`}>
            <div onClick={closeModals} className="rounded-full border-2 border-white w-8 h-6 mb-4 text-white text-center text-md cursor-pointer  -mt-20 lg:mt-0">
                x
            </div>
            <div className={`${modals?"slideUpss":"slideDownss"} relative p-5 w-3/4 lg:w-1/2 bg-white rounded shadow grid grid.cols-12 `} dir="rtl">
                    <div className="col-span-12">
                        <span className="text-sm font-bold">
                            ?????????? ??????????????
                        </span>
                    </div>
                    <div className="col-span-12 mt-5 flex flex-col justify-between items-start">
                        <span className="text-sm">
                            ???????? ?????? ??????????????
                        </span>
                        <select name="" id="" onChange={(e) => {setAddressType(e.target.value)}} className="w-full border-2 rounded mt-3 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent">
                            <option  value="">?????? ??????????????</option>
                            {addinfo?Object.values(addinfo.address_types).map(ele=>
                                    <option key={ele} selected={editadd&&editadd.address_type == ele?true:false} value={ele}>{ele}</option>
                            ):""}
                        </select>
                        <span className="text-sm pb-1 mt-4 w-full">
                            ?????? ??????????????
                        </span>
                        <input type="text" value={addresstitle?addresstitle:""} name="" onChange={(e) => {setAddressTitle(e.target.value)}} className="w-full h-6 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-1" id="" />

                        <span className="w-full text-sm mt-5">
                            ???????????? ??????????????
                        </span>
                        <input type="text" name="" value={addressdesc?addressdesc:""} onChange={(e) => {setaddressdesc(e.target.value)}} className="w-full h-6 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-1" id="" />
                        <div className="grid gap-4 grid-cols-12 mt-2">
                            <div className="col-span-6">
                                <span className="w-full text-sm ">
                                    ??????????????
                                </span>
                                <input type="text" name="" value={city?city:""} onChange={(e) => {setcity(e.target.value)}} className="w-full h-6 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-1" id="" />
                            </div>
                            <div className="col-span-6">
                                <span className="w-full text-sm ">
                                    ??????????????
                                </span>
                                <select name="" onChange={(e) => {setstate(e.target.value),console.log(e.target.value)}} id="" className="w-full h-6 border-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent">
                                    <option value="">???????? ??????????</option>
                                    {addinfo?Object.entries(addinfo.states).map(([key, ele])=>
                                            <option key={key} selected={editadd&&editadd.state.id == key? true:false} value={key}>{ele}</option>
                                    ):""}
                                </select>
                            </div>
                        </div>
                        <span className="w-full text-sm mt-5">
                            ?????? ????????????
                        </span>
                        <input type="text" name="" value={phone?phone:""} onChange={(e) => {setphone(e.target.value)}} className="w-full h-6 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-1" id="" />
                        <span onClick={()=>updateAddress(editadd?editadd.id:"")} className="text-sm text-white text-center self-center w-56 cursor-pointer py-1 rounded bg-yellow-500 mt-4">
                            ?????? ??????????????
                        </span>
                    </div>
            </div>
        </div>
     
        <div className="col-span-12 order-3 md:order-3 mt-12" style={{minHeight:"28rem"}}>
            <div className="order-0 relative flex flex-col min-w-0 break-words w-full ">
                <div className="sm:px-4 lg:px-0  flex-auto">
                <div className="tab-content tab-space" >
                    <div  className={`${openTab == 4?"block":"hidden"} text-right flex flex-col justify-between items-end p-2`} id={`link3`}>
                        <div className="grid grid-cols-12 w-full gap-4" dir="rtl">
                        {adderss?adderss.map(ele=>
                            <>
                              <div key={ele.id} className={`col-span-6 lg:col-span-3 flex justify-center items-center`} >
                                  <div className="border-2 h-full border-gray-100 w-full mt-1 flex cursor-pointer  flex-col justify-between items-start rounded  p-2">

                                        <span className="text-xs  font-bold flex justify-start">
                                            <img className="w-4 ml-1" src={`${Route}/images/icons/ssdasdasdasd.svg`} alt="" />
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
                                        <div className="flex justify-between items-center mt-1">
                                            <span onClick={()=>handleEdit(ele.id)} className="cursor-pointer text-xs border-2 rounded  px-2">
                                                ??????????
                                            </span>
                                            <span onClick={()=>deleteAddress(ele.id)} className="cursor-pointer text-xs border-2 rounded mr-2 px-2">
                                                ??????
                                            </span>
                                        </div>
                                    </div>
                                  </div>
                                        
                            </>
                        ):""}
                          <div onClick={handlModals} className={`col-span-6 lg:col-span-3 flex justify-start items-center`} >
                              <div className="w-full lg:w-9/12 h-full border-dashed border-2 flex cursor-pointer  flex-col justify-center items-center rounded  p-2">
                                        <span className="text-xs m-1 text-yellow-500 font-bold flex flex-col justify-center items-center">
                                            <span className="text-4xl ">+</span> <span className="mt-1  text-center">?????????? ?????????? ????????</span>
                                        </span>
                            </div>
                           
                        </div>
                        </div>
                    </div>
                    <div  className={`${openTab == 2?"block":"hidden"} text-right flex flex-col justify-between items-end p-2`} id={`link2`}>
                        <div className="grid gap-4 grid-cols-12 w-full">
                            
                            <div className="col-span-12 lg:col-span-6 flex flex-col justify-between items-end">
                                <label htmlFor=""  className="w-full text-sm text-right">
                                    * ?????????? ???????????? 
                                </label>
                                <input type="text" onChange={(e)=>setNickname(e.target.value)} value={nickname?nickname:""}  className=" focus:outline-none w-full focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-right  px-2 border-2 rounded  mt-2 py-1" />
                            </div>
                            <div className="col-span-12 lg:col-span-6 flex flex-col justify-between items-end">
                                <label htmlFor="" className="w-full text-sm text-right">
                                    * ?????????? ?????????? 
                                </label>
                                <input type="text" onChange={(e)=>setName(e.target.value)} value={name?name:""}  className=" focus:outline-none w-full focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-right  px-2 border-2 rounded  mt-2 py-1" />
                            </div>
                            <div className="hidden lg:block lg:col-span-2"></div>
                            <div className="col-span-12 lg:col-span-4 flex flex-col justify-between items-end">
                                <div className="flex w-full flex-col justify-between items-end">
                                    <label htmlFor="" className=" text-sm text-right ">
                                        ??????????
                                    </label>
                                    <div className="flex justify-between items-center mr-8 lg:mr-0 mt-4 ">
                                        <div onClick={(e)=>{setMale(true),setFemale(false),setSex('app.male')}} className="border-2 cursor-pointer px-3 p-2  flex justify-between items-center rounded mr-2">
                                            <label className="cursor-pointer lg:mr-2" htmlFor="male">
                                                ??????
                                            </label>
                                            <input className="ml-2"  onChange={(e)=>{setMale(true),setFemale(false),setSex('app.male')}}  checked={male?true:false}   type="radio" name="sex" />
                                        </div>
                                        <div onClick={(e)=>{setMale(false),setFemale(true),setSex('app.female')}} className="border-2 cursor-pointer px-3 p-2  flex justify-between items-center rounded">
                                            <label className="cursor-pointer lg:mr-2 ml-2 " htmlFor="male">
                                                ???????? 
                                            </label>
                                            <input className="ml-2" onChange={(e)=>{setMale(false),setFemale(true),setSex('app.female')}} checked={female?true:false}    type="radio" name="sex" />
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-6 flex flex-col justify-between items-end">
                                <label htmlFor="" className="w-full text-sm text-right">
                                    * ?????????? ?????????????? 
                                </label>
                                {/* <input type="date" onChange={(e)=>{setDob(e.target.value),console.log(e.target.value)}} value={"2021-07-14"}  className=" focus:outline-none w-full focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-right  px-2 border-2 rounded mt-2 py-1" /> */}
                             <div className="flex justify-between items-center">
                                <select onChange={(e)=>setyear(e.target.value)} className="focus:outline-none mr-2 focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-right  px-2 border-2 rounded ">
                                    {year.map(ele=>
                                        <option value={ele}>{ele}</option>    
                                    )}
                                </select>
                                <select onChange={(e)=>setmonth(e.target.value)} className="focus:outline-none mr-2 focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-right  px-2 border-2 rounded ">
                                        <option value="01">?????????? ????????????</option>
                                        <option value="02">????????</option>
                                        <option value="03">????????</option>
                                        <option value="04">??????????</option>
                                        <option value="05">????????</option>
                                        <option value="06">????????????</option>
                                        <option value="07">????????</option>
                                        <option value="08">????</option>
                                        <option value="09">??????????</option>
                                        <option value="10">?????????? ??????????</option>
                                        <option value="11">?????????? ????????????</option>
                                        <option value="12">?????????? ??????????</option>
                                </select>
                                <select onChange={(e)=>setday(e.target.value)}  className="focus:outline-none  focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-right  px-2 border-2 rounded ">
                                    {newlist.map((ele,index)=>
                                        <option value={ele+1}>{ele+1}</option>
                                        )}
                                </select>
                            </div>
                              
                            </div>
                            <div className="col-span-12 lg:col-span-6 flex flex-col justify-end items-end">
                                <span onClick={()=> setOpenTab(3)} className="cursor-pointer text-xs text-blue-500 mb-2">
                                    ?????????? ???????? ????????
                                </span>
                            </div>
                            <div className="col-span-12 lg:col-span-6 flex flex-col justify-between items-end">
                                <label htmlFor="" className="w-full text-sm text-right mt-4">
                                    * ???????????? ???????????????????? 
                                </label>
                                <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email?email:""} placeholder="example@gmail.com" className=" focus:outline-none w-full focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-right  px-2 border-2 rounded  mt-2 py-1" />
                            </div>
                            <div className="col-span-12 flex flex-col justify-between items-end">
                                <label htmlFor="" className="w-full text-sm text-right mt-4">
                                    ???????????? ??????????????
                                </label>
                                <section className="container border-dashed border-2 flex flex-col justify-center items-center py-5">
                                    <div {...getRootProps({className: 'dropzone'})}>
                                        <input {...getInputProps()} />
                                        <p className="cursor-pointer">?????????? ???????????? ??????????????</p>
                                    </div>
                                    <aside style={thumbsContainer}>
                                        {thumbs}
                                    </aside>
                                    {change?
                                        <div {...getRootProps({className: 'dropzone'})}>
                                            <input {...getInputProps()} />
                                            <p className="cursor-pointer">?????????? ???????????? ??????????????</p>
                                        </div>                            
                                    :""
                                    }
                                </section>   
                             </div>
                             <div className="col-span-4 flex flex-col justify-between items-end"></div>
                             <div className="col-span-4 flex flex-col justify-between items-end">
                                <span onClick={()=> handleSubmit()} className="cursor-pointer w-full px-2 text-white py-1 bg-yellow-500 text-center mt-4 rounded">
                                    ??????
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
                                    * ???????? ???????? ?????????????? 
                                </label>
                                <input type="password" onChange={(e)=>setName(e.target.value)} value={name?name:""} placeholder="***" className=" focus:outline-none w-full focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-right  px-2 border-2 rounded  mt-2 py-1" />
                                <label htmlFor=""  className="w-full text-sm text-right mt-4">
                                    * ???????? ???????? ??????????????
                                </label>
                                <input type="password" onChange={(e)=>setNickname(e.target.value)} value={nickname?nickname:""} placeholder="***" className=" focus:outline-none w-full focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-right  px-2 border-2 rounded  mt-2 py-1" />
                                                  
                              
                                <span onClick={()=> handleSubmit()} className="cursor-pointer w-full px-2 text-white bg-yellow-500 text-center py-1 mt-4 rounded">
                                    ??????
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