import React, { useEffect, useRef, useState } from 'react';
import { useAppState, useAppDispatch } from '../../contexts/app/app.provider';
import {Menu} from './menu';
import Link from 'next/link'

export const NavBar = (props) => {
    const isDrawerOpen = useAppState('isDrawerOpen');
    const [cart , setCart]  = useState(false);
    const [notifications , setNotifications]  = useState(false);
    const [messages , setMessages]  = useState(false);
    const [profile , setProfile]  = useState(false);
    const [menu,setMenu] = useState(1);
    const [routes,setRoutes] = useState<string>();
    const Draggable = useAppState('Draggable');
    const dispatch = useAppDispatch();
    const search = useAppState('search');
    const searchIcon = useAppState('toggleIcon');
    const Loading = useAppState('Loading');
    const Cart = useAppState('Cart');
    const Route = useAppState('Route');
    const Token = useAppState('Token');
    const [homeicon ,setHomeIcon] = useState(false)
    const [brand ,setBrandIcon] = useState(false)
    const [vendoricon ,setVendorIcon] = useState(false)
    const [offericon ,setOfferIcon] = useState(false)

    const handlelogout = () =>{
        fetch('https://amanacart.com/api/auth/logout', {
            method: 'post',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Bearer ${localStorage.getItem('token')}`
            }
        })
        .then( async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();
            if (!response.ok) {
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }
            
            localStorage.removeItem('token');
            window.location.href="/";
        })
    }
    useEffect(()=>{
        setRoutes(window.location.href);
    },[])
    const toggleprofile = () => {
        setProfile(!profile);
        setCart(false);
        setMenu(1);
    }
    const togglecart = () => {
        setCart(!cart);
    }
   
    const togglemessages = () => {
        setMessages(!messages);
        setCart(false);
    }
    const togglenotifications = () => {
        setNotifications(!notifications);
        setCart(false);
    }
   
    const togglesearch = React.useCallback(() => {
        dispatch({
          type: 'ToggleSearch',
        });
      }, [dispatch]
      );
      useEffect(()=>{
          setRoutes(window.location.href)
      })
    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                   if (ref.current && !ref.current.contains(event.target) && !ref.current.nextSibling.contains(event.target)) {
                       if(ref.current.id == "messages"){
                           setMessages(false);
                        }
                        if(ref.current.id == "notifications"){
                            setNotifications(false);
                        }
                        if(ref.current.id == "profile"){
                            setProfile(false);
                        }
                    }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("click", handleClickOutside);
            document.addEventListener("mouseup", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
  
    const toggleModal = React.useCallback(() => {
        dispatch({
          type: 'TOGGLE_Modal',
        });
      }, [dispatch]
      );
    const profileRef = useRef(null);
    const cartRef = useRef(null);
    const messagesRef = useRef(null);
    const notificationsRef = useRef(null);
    
    useOutsideAlerter(profileRef);
    useOutsideAlerter(cartRef);
    useOutsideAlerter(messagesRef);
    useOutsideAlerter(notificationsRef);
    
        return (
            <div className="fixed top-0 w-full z-50 md:z-30" style={{direction:"rtl"}}>
                <nav className="w-full bg-white shadow-md h-16 flex justify-between items-center ">
                        <div className="w-full lg:w-4/6 xl:w-full  h-full flex items-center md:pr-1 lg:px-4 ">
                        <div className="flex border-b-4 border-white">
                                {routes&&routes.indexOf('dashboard')==-1?
                                        <button onClick={props.toggleHandler} className="hidden items-center h-full w-16 md:flex md:w-12  lg:w-9 xl:w-9 justify-center  bg-white hover:bg-gray-200 focus:outline-none rounded-md">
                                            <svg className="fill-current text-gray-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth="3" strokeLinecap="square" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                                        </button>
                                :""}
                        </div>
                        <Link href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" className="hidden cursor-pointer sm:block pr-3" width="134.034" height="22.087" viewBox="0 0 134.034 22.087">
                                <g id="Group_4845" data-name="Group 4845" transform="translate(0 0)">
                                    <path id="Path_5" data-name="Path 5" d="M-3960.62,856.149a.575.575,0,0,1-.575-.576v-9.935a7.655,7.655,0,0,0-1.87-5.363,6.268,6.268,0,0,0-4.857-2.053,6.375,6.375,0,0,0-4.869,2.031,7.351,7.351,0,0,0-1.9,5.234,7.507,7.507,0,0,0,1.956,5.352,6.537,6.537,0,0,0,4.986,2.085,7.774,7.774,0,0,0,2.676-.473,9.267,9.267,0,0,0,1.739-.86.575.575,0,0,1,.873.493v2.626a.571.571,0,0,1-.3.506,10.725,10.725,0,0,1-2.419.922,12.417,12.417,0,0,1-3,.355,10,10,0,0,1-2.988-.462,9.73,9.73,0,0,1-2.687-1.3,10.547,10.547,0,0,1-3.482-3.923,11.324,11.324,0,0,1-1.2-5.234,10.773,10.773,0,0,1,2.988-7.813,10.112,10.112,0,0,1,7.588-3.084,10.486,10.486,0,0,1,5.546,1.526,10.213,10.213,0,0,1,3.869,4.192,9.532,9.532,0,0,1,.892,2.633,24.956,24.956,0,0,1,.269,4.267v8.28a.576.576,0,0,1-.576.576Z" transform="translate(3978.542 -834.406)" fill="#191919"/>
                                    <path id="Path_6" data-name="Path 6" d="M-3705.708,856.149a.653.653,0,0,1-.653-.652V843.962a9.745,9.745,0,0,1,2.257-6.793,7.8,7.8,0,0,1,6.083-2.493,7.962,7.962,0,0,1,3.611.828,7.931,7.931,0,0,1,2.38,1.835.648.648,0,0,0,.963,0,8.1,8.1,0,0,1,2.4-1.849,7.912,7.912,0,0,1,3.59-.817,7.766,7.766,0,0,1,6.051,2.5,9.723,9.723,0,0,1,2.268,6.782V855.5a.652.652,0,0,1-.653.652h-2.435a.652.652,0,0,1-.652-.652V843.252a5.01,5.01,0,0,0-1.268-3.568,4.327,4.327,0,0,0-3.31-1.354,4.326,4.326,0,0,0-3.31,1.354,5.007,5.007,0,0,0-1.268,3.568V855.5a.653.653,0,0,1-.653.652h-2.435a.653.653,0,0,1-.653-.652V843.252a4.959,4.959,0,0,0-1.29-3.568,4.4,4.4,0,0,0-3.332-1.354,4.318,4.318,0,0,0-3.321,1.354,5.035,5.035,0,0,0-1.257,3.568V855.5a.652.652,0,0,1-.652.652Z" transform="translate(3732.025 -834.406)" fill="#191919"/>
                                    <path id="Path_7" data-name="Path 7" d="M-3335.563,856.149a.576.576,0,0,1-.576-.576v-9.935a7.655,7.655,0,0,0-1.87-5.363,6.269,6.269,0,0,0-4.858-2.053,6.376,6.376,0,0,0-4.869,2.031,7.351,7.351,0,0,0-1.9,5.234,7.508,7.508,0,0,0,1.956,5.352,6.537,6.537,0,0,0,4.987,2.085,7.773,7.773,0,0,0,2.676-.473,9.44,9.44,0,0,0,1.937-.987.436.436,0,0,1,.675.366v2.962a.437.437,0,0,1-.227.385,10.731,10.731,0,0,1-2.491.96,12.416,12.416,0,0,1-3,.355,10,10,0,0,1-2.988-.462,9.731,9.731,0,0,1-2.687-1.3,10.542,10.542,0,0,1-3.482-3.923,11.321,11.321,0,0,1-1.2-5.234,10.773,10.773,0,0,1,2.988-7.813,10.113,10.113,0,0,1,7.588-3.084,10.487,10.487,0,0,1,5.546,1.526,10.212,10.212,0,0,1,3.869,4.192,9.532,9.532,0,0,1,.892,2.633,25.023,25.023,0,0,1,.268,4.267v8.419a.437.437,0,0,1-.437.437Z" transform="translate(3412.424 -834.406)" fill="#191919"/>
                                    <path id="Path_8" data-name="Path 8" d="M-3080.606,856.149a.7.7,0,0,1-.7-.7v-10.8a10.4,10.4,0,0,1,2.45-7.287,8.416,8.416,0,0,1,6.535-2.687,8.35,8.35,0,0,1,6.513,2.687,10.46,10.46,0,0,1,2.429,7.287v10.8a.7.7,0,0,1-.7.7h-2.346a.7.7,0,0,1-.7-.7v-11.49a5.748,5.748,0,0,0-1.451-4.063,4.877,4.877,0,0,0-3.751-1.569,4.919,4.919,0,0,0-3.751,1.569,5.7,5.7,0,0,0-1.472,4.063v11.49a.7.7,0,0,1-.7.7Z" transform="translate(3165.907 -834.406)" fill="#191919"/>
                                    <path id="Path_9" data-name="Path 9" d="M-2834.057,856.149a.576.576,0,0,1-.576-.576v-9.935a7.656,7.656,0,0,0-1.87-5.363,6.269,6.269,0,0,0-4.858-2.053,6.375,6.375,0,0,0-4.869,2.031,7.35,7.35,0,0,0-1.9,5.234,7.508,7.508,0,0,0,1.956,5.352,6.538,6.538,0,0,0,4.987,2.085,7.771,7.771,0,0,0,2.676-.473,9.269,9.269,0,0,0,1.739-.86.574.574,0,0,1,.873.493v2.626a.57.57,0,0,1-.3.506,10.721,10.721,0,0,1-2.418.922,12.417,12.417,0,0,1-3,.355,10,10,0,0,1-2.988-.462,9.728,9.728,0,0,1-2.687-1.3,10.541,10.541,0,0,1-3.482-3.923,11.321,11.321,0,0,1-1.2-5.234,10.773,10.773,0,0,1,2.988-7.813,10.113,10.113,0,0,1,7.588-3.084,10.486,10.486,0,0,1,5.546,1.526,10.211,10.211,0,0,1,3.869,4.192,9.524,9.524,0,0,1,.892,2.633,25.017,25.017,0,0,1,.269,4.267v8.28a.576.576,0,0,1-.576.576Z" transform="translate(2958.207 -834.406)" fill="#191919"/>
                                    <path id="Path_10" data-name="Path 10" d="M-2594.73,833.78a1.957,1.957,0,0,1-1.95,1.982,1.969,1.969,0,0,1-1.969-1.982,1.967,1.967,0,0,1,1.976-1.969A1.952,1.952,0,0,1-2594.73,833.78Zm-3.5.006a1.566,1.566,0,0,0,1.541,1.611,1.561,1.561,0,0,0,1.534-1.611,1.57,1.57,0,0,0-1.541-1.611A1.569,1.569,0,0,0-2598.228,833.787Zm2.308-.639a1.387,1.387,0,0,0-.607-.141.729.729,0,0,0-.793.793.755.755,0,0,0,.786.8,1.255,1.255,0,0,0,.639-.153l.1.326a1.455,1.455,0,0,1-.793.2,1.1,1.1,0,0,1-1.177-1.157,1.186,1.186,0,0,1,1.241-1.189,1.215,1.215,0,0,1,.7.179Z" transform="translate(2728.765 -831.811)" fill="#141414"/>
                                </g>
                            </svg>
                        </Link>
                        <Link href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" className="block cursor-pointer pr-3 mr-3 sm:hidden" width="38.07" height="43" viewBox="0 0 38.07 43">
                                <path id="Path_11" data-name="Path 11" d="M-4353.608,780.454l-15.933-9.2a3.1,3.1,0,0,0-3.1,0l-15.933,9.2a3.1,3.1,0,0,0-1.551,2.686v18.4a3.1,3.1,0,0,0,1.551,2.686l15.933,9.2a3.1,3.1,0,0,0,3.1,0l15.933-9.2a3.1,3.1,0,0,0,1.551-2.686v-18.4A3.1,3.1,0,0,0-4353.608,780.454Zm-6.419,22.938a3.981,3.981,0,0,1-3.981-3.98V792.4a8.009,8.009,0,0,0-1.956-5.611,6.559,6.559,0,0,0-5.083-2.148,6.672,6.672,0,0,0-5.094,2.125,7.691,7.691,0,0,0-1.99,5.475,7.856,7.856,0,0,0,2.046,5.6,6.839,6.839,0,0,0,5.218,2.182,8.139,8.139,0,0,0,2.8-.495,10.57,10.57,0,0,0,2.732-1.529V799.7a3.769,3.769,0,0,1-2.815,3.672l-.03.008a12.983,12.983,0,0,1-3.136.371,10.451,10.451,0,0,1-3.126-.484,10.192,10.192,0,0,1-2.811-1.36,11.041,11.041,0,0,1-3.644-4.1,11.851,11.851,0,0,1-1.259-5.476,11.272,11.272,0,0,1,3.125-8.174,10.58,10.58,0,0,1,7.939-3.227,10.97,10.97,0,0,1,5.8,1.6,10.687,10.687,0,0,1,4.048,4.385,9.962,9.962,0,0,1,.933,2.755,26.191,26.191,0,0,1,.281,4.464Z" transform="translate(4390.127 -770.839)" fill="#ffbc00"/>
                            </svg>
                        </Link>
                        <div className="relative mx-3" x-data="{dropdown : false}">
                        </div>
                        </div>
                        <div className={`hidden md:flex w-full  h-full justify-center ${Loading?"items-center":""}`}>
                            <div onMouseEnter={()=>setHomeIcon(true)} onMouseLeave={()=>setHomeIcon(false)} className={`${Loading?"skeleton-box rounded ":routes == Route+'/'?"border-yellow-500  border-b-4":""} `}>
                                <div  className={`h-full md:w-16 lg:w-24 xl:w-16`} style={Loading?{height:"55px",overflow:"hidden",opacity:"0"}:{}}>
                                    <Link href="/">
                                        <div className="flex cursor-pointer overflow-hidden items-center h-full md:w-16 lg:w-24 xl:w-16 justify-center  bg-white hover:bg-gray-200 focus:outline-none rounded-md">
                                            {/* <svg className=" fill-current text-yellow-500 w-4 h-6"   viewBox="0 0 80 78" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.8212 1.30204C39.0046 0.0516549 40.9954 0.0516556 42.1788 1.30204L78.51 39.6878C80.32 41.6002 78.9643 44.75 76.3312 44.75H3.66882C1.03568 44.75 -0.320033 41.6002 1.48999 39.6878L37.8212 1.30204Z" /><path d="M12 75.5V45C12 43.8954 12.8954 43 14 43H66.5C67.6046 43 68.5 43.8954 68.5 45V75.5C68.5 76.6046 67.6046 77.5 66.5 77.5H49.5C48.3954 77.5 47.5 76.6046 47.5 75.5V62C47.5 60.8954 46.6046 60 45.5 60H35C33.8954 60 33 60.8954 33 62V75.5C33 76.6046 32.1046 77.5 31 77.5H14C12.8954 77.5 12 76.6046 12 75.5Z" /></svg> */}
                                            {homeicon ||routes &&  routes == `${Route}/`?
                                            <svg className="w-6" xmlns="http://www.w3.org/2000/svg" width="167.941" height="169" viewBox="0 0 167.941 169">
                                            <path fill="rgba(245, 158, 11)" id="Path_12039" data-name="Path 12039" d="M167.2,77.115,84.152,0,1.107,77.115A2.9,2.9,0,0,0,5.048,81.36L17.554,69.746V169H63.883V116.88a20.269,20.269,0,0,1,40.538,0V169H150.75V69.746L163.256,81.36a2.9,2.9,0,0,0,3.944-4.245Z" transform="translate(-0.183)"/>
                                            </svg>
                                            :
                                            <svg className="w-6" xmlns="http://www.w3.org/2000/svg" width="171.942" height="173.729" viewBox="0 0 171.942 173.729">
                                                <path fill="none" id="Path_12055" data-name="Path 12055" d="M167.2,77.115,84.152,0,1.107,77.115A2.9,2.9,0,0,0,5.048,81.36L17.554,69.746V169H63.883V116.88a20.269,20.269,0,0,1,40.538,0V169H150.75V69.746L163.256,81.36a2.9,2.9,0,0,0,3.944-4.245Z" transform="translate(1.818 2.729)" stroke="#000" strokeWidth="4"/>
                                            </svg>
                                        }
                                        </div>
                                        {/* <img className="w-6" src="/images/icons/wwwww.svg" alt="" /> */}
                                    </Link>
                                </div>
                            </div>
                           
                            <div onMouseLeave={()=>setVendorIcon(false)} onMouseEnter={()=> setVendorIcon(true)} className={`${Loading?"skeleton-box rounded  mr-2":routes && routes.indexOf('stores')!=-1?"border-yellow-500  border-b-4":""} border-white`}>
                                <div className={`h-full md:w-16 lg:w-24 xl:w-16`} style={Loading?{height:"55px",overflow:"hidden",opacity:"0"}:{}}>
                                    <Link href="/stores">
                                <div className="flex cursor-pointer overflow-hidden items-center h-full md:w-16 lg:w-24 xl:w-16 justify-center  bg-white hover:bg-gray-200 focus:outline-none rounded-md">
                                
                                    {/* <img className="w-6" src="/images/vendor out.svg" alt="" /> */}
                                    {vendoricon|| routes && routes.indexOf('stores') != -1?
                                    <svg className="w-6" xmlns="http://www.w3.org/2000/svg" width="172" height="172.003" viewBox="0 0 172 172.003">
                                    <g id="Group_6" data-name="Group 6" transform="translate(-6 -9.132)">
                                      <g id="Group_2" data-name="Group 2" transform="translate(6 9.132)">
                                        <g id="Group_1" data-name="Group 1">
                                          <path id="Path_1" data-name="Path 1" d="M172.29,9.132H11.714L6,65.508a21.5,21.5,0,0,0,43,0,21.5,21.5,0,0,0,43,.009v-.009a21.5,21.5,0,0,0,43,0,21.5,21.5,0,0,0,43,0Z" transform="translate(-6 -9.132)" fill="#f59e0c"/>
                                        </g>
                                      </g>
                                      <g id="Group_5" data-name="Group 5" transform="translate(12.069 90.15)">
                                        <g id="Group_4" data-name="Group 4">
                                          <g id="Group_3" data-name="Group 3">
                                            <path id="Path_2" data-name="Path 2" d="M167.989,251.546a32.588,32.588,0,0,1-21.5-8.075,32.659,32.659,0,0,1-43,0,32.66,32.66,0,0,1-43,0,32.663,32.663,0,0,1-36.937,4.2v86.786H45.775V268.641H83.411v65.813H183.423V247.67A32.518,32.518,0,0,1,167.989,251.546Zm-6.8,55.585H107.35v-38.49h53.84v38.49Z" transform="translate(-23.553 -243.471)" fill="#f59e0c"/>
                                            <path id="Path_3" data-name="Path 3" d="M485.963,255.616" transform="translate(-326.093 -251.417)" fill="#f59e0c"/>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                  :
                                    <svg className="w-6" xmlns="http://www.w3.org/2000/svg" width="171.934" height="171.938" viewBox="0 0 171.934 171.938">
                                    <g id="Group_6" data-name="Group 6" transform="translate(-4 -7.132)">
                                        <g id="Group_2" data-name="Group 2" transform="translate(6 9.132)">
                                        <g id="Group_1" data-name="Group 1">
                                            <path id="Path_1" data-name="Path 1" d="M168.359,9.132H11.579L6,64.175a20.992,20.992,0,0,0,41.984,0,20.992,20.992,0,0,0,41.984.009v-.009a20.992,20.992,0,0,0,41.984,0,20.992,20.992,0,0,0,41.984,0Z" transform="translate(-6 -9.132)" fill="none" stroke="#000" strokeWidth="4"/>
                                        </g>
                                        </g>
                                        <g id="Group_5" data-name="Group 5" transform="translate(11.925 88.235)">
                                        <g id="Group_4" data-name="Group 4">
                                            <g id="Group_3" data-name="Group 3">
                                            <path id="Path_2" data-name="Path 2" d="M164.575,251.355a31.818,31.818,0,0,1-20.992-7.884,31.887,31.887,0,0,1-41.983,0,31.888,31.888,0,0,1-41.984,0,31.891,31.891,0,0,1-36.063,4.1v84.735h21.7V268.046H82V332.3h97.648V247.571A31.749,31.749,0,0,1,164.575,251.355Zm-6.635,54.271H105.37v-37.58h52.568v37.58Z" transform="translate(-23.553 -243.471)" fill="none" stroke="#000" strokeWidth="4"/>
                                            <path id="Path_3" data-name="Path 3" d="M485.963,255.616" transform="translate(-329.872 -251.516)" fill="none" stroke="#000" strokeWidth="4"/>
                                            </g>
                                        </g>
                                        </g>
                                    </g>
                                    </svg>
                                    }
                                </div>
                                </Link>
                                </div>
                            </div>
                            <div onMouseEnter={()=>setBrandIcon(true)} onMouseLeave={()=>setBrandIcon(false)} className={`${Loading?"skeleton-box rounded  mr-2":routes && routes.indexOf('brands')!=-1 ?"border-yellow-500  border-b-4":""} border-white`}>
                                <div className={`h-full md:w-16 lg:w-24 xl:w-16`} style={Loading?{height:"55px",overflow:"hidden",opacity:"0"}:{}}>
                                <Link href="/brands">
                                    <div className="overflow-hidden cursor-pointer flex items-center h-full md:w-16 lg:w-24 xl:w-16 justify-center  bg-white hover:bg-gray-200 focus:outline-none rounded-md">
                                  
                                    {brand || routes && routes.indexOf('brands')!=-1?
                                    <svg className="w-6" xmlns="http://www.w3.org/2000/svg" width="168.719" height="169" viewBox="0 0 168.719 169">
                                    <g id="Group_5463" data-name="Group 5463" transform="translate(-85.061 -21.01)">
                                      <path id="Path_12050" data-name="Path 12050" d="M246.127,90.357a16.807,16.807,0,0,1-2.725-10.1l.578-10.5a11.749,11.749,0,0,0-6.428-11.126l-9.293-4.7a16.559,16.559,0,0,1-7.357-7.365l-4.7-9.308a11.729,11.729,0,0,0-11.1-6.429l-10.484.578a16.782,16.782,0,0,1-10.083-2.736l-8.669-5.725a11.689,11.689,0,0,0-12.894,0L154.3,28.673a16.733,16.733,0,0,1-10.079,2.735l-10.487-.577a11.723,11.723,0,0,0-11.1,6.428l-4.7,9.307a16.56,16.56,0,0,1-7.357,7.367l-9.293,4.7a11.75,11.75,0,0,0-6.421,11.129l.578,10.5a16.81,16.81,0,0,1-2.725,10.1L87,99.046a11.75,11.75,0,0,0,0,12.93l5.716,8.682a16.808,16.808,0,0,1,2.725,10.1l-.578,10.5a11.753,11.753,0,0,0,6.422,11.129l9.292,4.7a16.561,16.561,0,0,1,7.357,7.367l4.694,9.308a11.734,11.734,0,0,0,11.107,6.429l10.484-.579q.44-.024.882-.024a16.774,16.774,0,0,1,9.2,2.76l8.669,5.725a11.685,11.685,0,0,0,12.9,0l8.67-5.725a16.773,16.773,0,0,1,10.079-2.736l10.488.579a11.726,11.726,0,0,0,11.1-6.428l4.695-9.309a16.558,16.558,0,0,1,7.357-7.367l9.293-4.7a11.752,11.752,0,0,0,6.421-11.127l-.578-10.5a16.8,16.8,0,0,1,2.725-10.1l5.716-8.682a11.75,11.75,0,0,0,0-12.93Zm-76.706,77.664A62.518,62.518,0,1,1,231.85,105.5,62.544,62.544,0,0,1,169.421,168.022Z" transform="translate(0 0)" fill="#f59e0c"/>
                                      <path id="Path_12051" data-name="Path 12051" d="M236.475,152.833l-7.586-15.394L221.3,152.833a2.469,2.469,0,0,1-1.858,1.352l-16.97,2.468,12.283,11.99a2.467,2.467,0,0,1,.709,2.182l-2.9,16.927,15.174-7.989a2.464,2.464,0,0,1,2.3,0l15.173,7.988-2.9-16.927a2.467,2.467,0,0,1,.709-2.182l12.283-11.99-16.972-2.468A2.468,2.468,0,0,1,236.475,152.833Z" transform="translate(-59.468 -58.97)" fill="#f59e0c"/>
                                      <path id="Path_12053" data-name="Path 12053" d="M196.994,75.54a57.583,57.583,0,1,0,57.494,57.584A57.6,57.6,0,0,0,196.994,75.54Zm33.439,49.806L215.5,139.92l3.524,20.579a2.468,2.468,0,0,1-3.582,2.6l-18.448-9.714-18.45,9.714a2.468,2.468,0,0,1-3.581-2.6l3.525-20.579-14.929-14.574a2.467,2.467,0,0,1,1.368-4.208l20.629-3,9.229-18.722A2.468,2.468,0,0,1,197,98.037h0a2.468,2.468,0,0,1,2.213,1.377l9.226,18.722,20.629,3a2.468,2.468,0,0,1,1.368,4.208Z" transform="translate(-27.573 -27.619)" fill="#f59e0c"/>
                                    </g>
                                  </svg>
                                    :
                                    <svg className="w-6" xmlns="http://www.w3.org/2000/svg" width="168.726" height="169" viewBox="0 0 168.726 169">
                                        <g id="Group_5462" data-name="Group 5462" transform="translate(-81.061 -17.01)">
                                            <path id="Path_12045" data-name="Path 12045" d="M240.379,86.7l1.614-1.057a14.5,14.5,0,0,1-2.37-7.943c0-.254.007-.509.02-.764v0l.565-10.26c.014-.247.02-.492.02-.736a13.41,13.41,0,0,0-7.357-11.964L223.79,49.39h0a14.253,14.253,0,0,1-6.332-6.339l-4.591-9.1a13.39,13.39,0,0,0-11.953-7.36q-.361,0-.724.02h0l-10.245.565h.007q-.374.02-.747.019a14.472,14.472,0,0,1-7.948-2.378l-8.467-5.592h0a13.353,13.353,0,0,0-14.728,0h0l-8.472,5.594h0a14.419,14.419,0,0,1-7.931,2.377q-.378,0-.757-.02h.005l-10.248-.564h0c-.244-.014-.487-.02-.729-.02a13.384,13.384,0,0,0-11.949,7.359h0l-4.592,9.1v0a14.251,14.251,0,0,1-6.331,6.341l0,0-9.081,4.594h0a13.411,13.411,0,0,0-7.349,11.96q0,.37.021.743l.565,10.26v0c.014.255.02.51.02.764a14.5,14.5,0,0,1-2.37,7.943l0,0-5.585,8.488h0a13.41,13.41,0,0,0,0,14.757h0l5.585,8.484,0,0a14.5,14.5,0,0,1,2.37,7.942q0,.382-.02.764v0l-.565,10.261q-.02.371-.02.739a13.413,13.413,0,0,0,7.35,11.962h0l9.08,4.591h0a14.259,14.259,0,0,1,6.332,6.342v0l4.588,9.095h0a13.4,13.4,0,0,0,11.956,7.36c.24,0,.482-.007.723-.02l10.248-.566h0c.244-.014.488-.021.731-.021h.023a14.453,14.453,0,0,1,7.932,2.38l8.468,5.592h0a13.348,13.348,0,0,0,14.736,0h0l8.473-5.594,0,0a14.461,14.461,0,0,1,7.944-2.378q.373,0,.746.019h-.007l10.249.566h0q.365.02.726.02a13.39,13.39,0,0,0,11.951-7.359l4.588-9.1v0a14.252,14.252,0,0,1,6.332-6.341l0,0,9.081-4.593h0a13.413,13.413,0,0,0,7.348-11.961q0-.368-.02-.739l-.565-10.262v0q-.02-.383-.02-.764a14.49,14.49,0,0,1,2.37-7.942l0,0,5.585-8.483h0a13.41,13.41,0,0,0,0-14.758l-5.592-8.5.011.016L240.379,86.7l-1.612,1.06,5.584,8.491h0a9.552,9.552,0,0,1,0,10.512h0l-5.585,8.484,0,0a18.35,18.35,0,0,0-3,10.056q0,.483.026.968l.565,10.266c.01.176.014.352.014.527a9.555,9.555,0,0,1-5.234,8.519l-9.08,4.592,0,0a18.11,18.11,0,0,0-8.046,8.057l0,0-4.588,9.1a9.531,9.531,0,0,1-8.506,5.239q-.258,0-.518-.014h0l-10.251-.566h0q-.473-.024-.945-.024a18.32,18.32,0,0,0-10.063,3.012l-8.475,5.6h0a9.489,9.489,0,0,1-10.477,0l-8.473-5.6,0,0a18.314,18.314,0,0,0-10.049-3.015h-.026q-.475,0-.946.027h0l-10.245.566h0q-.259.014-.516.014a9.538,9.538,0,0,1-8.512-5.24h0l-4.588-9.095,0,0a18.113,18.113,0,0,0-8.046-8.057l-9.077-4.59h0a9.556,9.556,0,0,1-5.236-8.521q0-.263.014-.527l.565-10.263v0q.026-.485.026-.968a18.354,18.354,0,0,0-3-10.056l0,0L86.5,106.767h0a9.552,9.552,0,0,1,0-10.512h0l5.586-8.489v0a18.356,18.356,0,0,0,3-10.057c0-.322-.008-.645-.026-.967l-.565-10.265q-.015-.266-.015-.53a9.553,9.553,0,0,1,5.235-8.518l9.08-4.594,0,0a18.112,18.112,0,0,0,8.045-8.057l0,0,4.591-9.094h0a9.526,9.526,0,0,1,8.5-5.238q.259,0,.52.014h.022l10.236.564H140.7q.48.025.959.025a18.275,18.275,0,0,0,10.053-3.013l8.474-5.6h0a9.5,9.5,0,0,1,10.472,0h0l8.471,5.595,0,0A18.327,18.327,0,0,0,189.2,31.052q.472,0,.945-.025h0l10.264-.566H200.4q.258-.014.516-.014a9.532,9.532,0,0,1,8.508,5.239l4.589,9.1,0,0a18.109,18.109,0,0,0,8.046,8.055l9.077,4.592a9.553,9.553,0,0,1,5.241,8.521q0,.261-.014.525l-.565,10.26v0q-.026.485-.026.968a18.357,18.357,0,0,0,3,10.056l0,0ZM165.425,162.6v-1.929a59.191,59.191,0,1,1,41.751-17.349,58.843,58.843,0,0,1-41.751,17.349v3.858a63.046,63.046,0,1,0-44.481-18.479,62.7,62.7,0,0,0,44.481,18.479Z" transform="translate(0)" fill="#020202"/>
                                            <path id="Path_12054" data-name="Path 12054" d="M232.033,129.745l-14.591,14.241,3.443,20.11a2.411,2.411,0,0,1-3.5,2.54l-18.027-9.493-18.029,9.492a2.411,2.411,0,0,1-3.5-2.54l3.444-20.11-14.588-14.241a2.411,2.411,0,0,1,1.337-4.112L188.18,122.7,197.2,104.4a2.411,2.411,0,0,1,4.326,0l9.015,18.294,20.158,2.933a2.411,2.411,0,0,1,1.337,4.112Z" transform="translate(-33.933 -35.84)" fill="none" stroke="#000" strokeWidth="3"/>
                                        </g>
                                    </svg>
                                    
                                    }
                                    </div>
                                    </Link>
                                </div>
                            </div>
                            <div onMouseEnter={()=>setOfferIcon(true)} onMouseLeave={()=>setOfferIcon(false)} className={`${Loading?"skeleton-box rounded  mr-2":routes && routes.indexOf('offers')!=-1?"border-yellow-500  border-b-4":""} border-white`}>
                                <div className={`h-full md:w-16 lg:w-24 xl:w-16`} style={Loading?{height:"55px",overflow:"hidden",opacity:"0"}:{}}>
                                    <Link href="/offers">
                                <div  className="flex cursor-pointer overflow-hidden items-center h-full md:w-16 lg:w-24 xl:w-16 justify-center  bg-white hover:bg-gray-200 focus:outline-none rounded-md">
                                    {/* <img className="w-6" src="/images/offers out.svg" alt="" /> */}
          
                                    {offericon || routes && routes.indexOf('offers') != -1?
                                <svg className="w-6" xmlns="http://www.w3.org/2000/svg" width="162.161" height="169" viewBox="0 0 162.161 169">
                                    <g id="Group_5460" data-name="Group 5460" transform="translate(-10.359 0.002)">
                                    <g id="Group_5453" data-name="Group 5453" transform="translate(10.359 -0.002)">
                                        <g id="Group_5452" data-name="Group 5452" transform="translate(0 0)">
                                        <path fill="rgba(245, 158, 11)" id="Path_12041" data-name="Path 12041" d="M164.7,86.687a4.953,4.953,0,0,1,0-4.378L171,69.415a14.671,14.671,0,0,0-6.33-19.482L152,43.206a4.953,4.953,0,0,1-2.573-3.541l-2.48-14.137a14.672,14.672,0,0,0-16.572-12.041L116.16,15.5A4.953,4.953,0,0,1,112,14.144L101.682,4.166a14.67,14.67,0,0,0-20.485,0l-10.315,9.98A4.954,4.954,0,0,1,66.719,15.5l-14.211-2.01A14.67,14.67,0,0,0,35.935,25.529l-2.48,14.136a4.954,4.954,0,0,1-2.573,3.542L18.2,49.934a14.671,14.671,0,0,0-6.33,19.482l6.3,12.894a4.953,4.953,0,0,1,0,4.378l-6.3,12.894a14.671,14.671,0,0,0,6.33,19.482l12.678,6.727a4.953,4.953,0,0,1,2.573,3.541l2.48,14.137A14.662,14.662,0,0,0,50.4,155.659a15.075,15.075,0,0,0,2.111-.149l14.211-2.01a4.951,4.951,0,0,1,4.163,1.353L81.2,164.831a14.67,14.67,0,0,0,20.484,0L112,154.852a4.958,4.958,0,0,1,4.163-1.353l14.211,2.01a14.669,14.669,0,0,0,16.572-12.041l2.48-14.136A4.954,4.954,0,0,1,152,125.791l12.678-6.727A14.671,14.671,0,0,0,171,99.582ZM71.945,40.636a17.87,17.87,0,1,1-17.87,17.87A17.89,17.89,0,0,1,71.945,40.636Zm-9.224,79.472a4.873,4.873,0,0,1-6.892-6.892l64.328-64.328a4.874,4.874,0,0,1,6.892,6.892Zm48.212,8.253a17.87,17.87,0,1,1,17.87-17.87A17.89,17.89,0,0,1,110.933,128.361Z" transform="translate(-10.359 0.002)"/>
                                        </g>
                                    </g>
                                    </g>
                              </svg>
                                    :
                                    <svg className="w-6" xmlns="http://www.w3.org/2000/svg" width="166.243" height="173" viewBox="0 0 166.243 173">
                                        <g id="Group_5459" data-name="Group 5459" transform="translate(-8.318 2.002)">
                                            <g id="Group_5453" data-name="Group 5453" transform="translate(10.359 -0.002)">
                                            <g id="Group_5452" data-name="Group 5452" transform="translate(0 0)">
                                                <path id="Path_12041" data-name="Path 12041" d="M164.7,86.687a4.953,4.953,0,0,1,0-4.378L171,69.415a14.671,14.671,0,0,0-6.33-19.482L152,43.206a4.953,4.953,0,0,1-2.573-3.541l-2.48-14.137a14.672,14.672,0,0,0-16.572-12.041L116.16,15.5A4.953,4.953,0,0,1,112,14.144L101.682,4.166a14.67,14.67,0,0,0-20.485,0l-10.315,9.98A4.954,4.954,0,0,1,66.719,15.5l-14.211-2.01A14.67,14.67,0,0,0,35.935,25.529l-2.48,14.136a4.954,4.954,0,0,1-2.573,3.542L18.2,49.934a14.671,14.671,0,0,0-6.33,19.482l6.3,12.894a4.953,4.953,0,0,1,0,4.378l-6.3,12.894a14.671,14.671,0,0,0,6.33,19.482l12.678,6.727a4.953,4.953,0,0,1,2.573,3.541l2.48,14.137A14.662,14.662,0,0,0,50.4,155.659a15.075,15.075,0,0,0,2.111-.149l14.211-2.01a4.951,4.951,0,0,1,4.163,1.353L81.2,164.831a14.67,14.67,0,0,0,20.484,0L112,154.852a4.958,4.958,0,0,1,4.163-1.353l14.211,2.01a14.669,14.669,0,0,0,16.572-12.041l2.48-14.136A4.954,4.954,0,0,1,152,125.791l12.678-6.727A14.671,14.671,0,0,0,171,99.582ZM71.945,40.636a17.87,17.87,0,1,1-17.87,17.87A17.89,17.89,0,0,1,71.945,40.636Zm38.988,87.725a17.87,17.87,0,1,1,17.87-17.87A17.89,17.89,0,0,1,110.933,128.361Z" transform="translate(-10.359 0.002)" fill="none" stroke="#000" strokeWidth="4"/>
                                                <rect id="Rectangle_1774" data-name="Rectangle 1774" width="100" height="7" rx="3.5" transform="translate(43.25 117.381) rotate(-45)"/>
                                            </g>
                                            </g>
                                        </g>
                                    </svg>
                                    }
                                </div>
                                </Link>
                                </div>
                            </div>
                        
                                
                        </div>
                        <div className="w-full  h-full flex justify-end  items-center px-3">
                        
                        {/* <svg onClick={togglesearch} xmlns="http://www.w3.org/2000/svg" className='mr-3 ml-3 block md:hidden' width="18.179" height="18.179" viewBox="0 0 18.179 18.179">
                            <path id="search_icon" d="M6.817,0a6.817,6.817,0,0,0,0,13.634,6.817,6.817,0,0,0,3.693-.994l5.4,5.539,2.272-2.272-5.539-5.4a6.817,6.817,0,0,0,.994-3.693A6.817,6.817,0,0,0,6.817,0m0,2.272A4.545,4.545,0,1,1,2.272,6.817,4.545,4.545,0,0,1,6.817,2.272" fill="#000"/>
                        </svg> */}

                        <div ref={cartRef} id="cart" className={cart?`cart hidden md:block w-80 shadow-2xl bg-white rounded absolute ${localStorage.getItem('token')?"left-44":"left-16" }  -bottom-2 transform translate-y-full `:`cart overflow-hidden hidden w-96 shadow-2xl bg-white rounded absolute  ${localStorage.getItem('token')?"left-60":"left-16" }  bottom-0 transform translate-y-full`}>
                        <div className="grid grid-cols-12 shadow-md 2xl:shadow-lg">
                                <div className="col-span-12 flex justify-between items-center  py-2">
                                    <span className="px-5">
                                        <Link href="/cart">السلة</Link>
                                    </span>
                                    <span className="mx-4 rounded bg-red-400 px-2 text-sm text-white">{Cart} منتجات</span>
                                </div>
                            </div>
                            <div className="scrolls h-110 overflow-y-scroll">
                                <div className="hidden col-span-12 border-t-2 px-2 py-3  justify-between relative items-center">
                                    
                                    <div className="flex  flex-col justify-between items-start">
                                        <span className="text-sm text-gray-700">المنتج الأول</span>
                                        <span className="text-xs text-gray-300">من غوغل</span>
                                    </div>
                                    <div className="z-50  transition-all flex flex-row justify-between  items-center  rounded-md w-28 h-4 bg-gray-100 ">
                                        <span className="text-xs cursor-pointer font-bold px-3 bg-gray-200 h-full flex justify-center items-center">-</span>
                                        <span className="block rounded text-xs font-bold">1</span>
                                        <span className="text-xs cursor-pointer font-bold h-full flex justify-center items-center px-3 bg-gray-200">+</span>
                                    </div>
                                    <span className="text-xs">1200 ل.س</span>
                                    <div className="absolute top-1 left-3">x</div>
                                </div>
                                <div className="col-span-12" style={{borderTop:"1px solid #dcdcdc"}}>
                                    <div className="col-span-12">
                                        {props.carts&&props.carts.length>0?props.carts.carts.map(ele=>
                                            <div className="grid grid-cols-12 w-full">
                                            <div className="col-span-12 bg-gray-100 flex flex-row-reverse px-5 py-2 items-center justify-end">
                                                <span className="text-yellow-500 text-xs">
                                                     {ele.shop.name} 
                                                </span>
                                            </div>
                                            {ele.items.map(ele1=>
                                                        <a className="col-span-12  px-5 noti-hover py-4 flex justify-between relative items-center" href={`/product/product?pids=${ele1.id}`}>
                                                        <div className="flex  flex-col justify-between items-start max-w-2xl max-h-12 overflow-hidden">
                                                            <span className="text-xs text-gray-500 leading-5 mt-2">
                                                                {ele1.description}
                                                            </span>
                                                        </div>
                                                        <div className="flex flex-col h-full justify-between items-center">
                                                            <span className="text-xs  text-gray-700 mt-2  rounded text-center w-20 flex items-center justify-center h-full">
                                                                {ele1.unit_price}
                                                            </span>
                                                        </div>
                                                        <div className="absolute top-2 left-5">
                                                        </div>
                                                </a>
                                            )}
                                            
                                            </div>
                                        ):
                                        <div className="flex justify-center items-center h-80">
                                            <img src="/images/icons/empty-cart.svg" className="w-64" alt="" />
                                        </div>
                                        }
                                    </div>
                                    {/* <img className="w-6 h-2 rounded-full" src="./images/med-1.jpg" alt="" /> */}
                                </div>
                                </div>
                            <div className="col-span-12 py-2  border-t-2 flex flex-col justify-between items-center">
                                <div className="flex flex-row w-full justify-center cursor-pointer items-center px-5">
                                    <span className="font-bold text-gray-700 text-center text-sm">
                                        المجموع الكلي : {props.alls} ر.ع
                                    </span>
                                </div>
                            </div>
                        </div>
                        <a href="/cart" className="lg:hidden">
                            <button onClick={togglecart} className={`ml-3 w-8 md:w-10  h-6  md:h-8 lg:h-10 lg:w-10  focus:outline-none rounded-full  flex items-center justify-center ${Loading?"skeleton-box":""}`}>
                                <div className="relative " style={Loading?{opacity:"0"}:{}}>
                                    <div className="absolute -right-1 w-4 h-4 -top-1 rounded-full text-xs text-white bg-red-400 flex justify-center items-center">{Cart}</div>
                                    <img src={`${Route}/images/shopping-cart.svg`} className="w-4 h-4 lg:w-6 lg:h-6 fill-current text-gray-600 stroke-current " alt="" />
                                    
                                </div>
                            </button>
                        </a>
                        <button onClick={togglecart} className={`ml-3 w-8 md:w-10 hidden h-6  md:h-8 lg:h-10 lg:w-10  focus:outline-none rounded-full  lg:flex items-center justify-center ${Loading?"skeleton-box":""}`}>
                            <div className="relative " style={Loading?{opacity:"0"}:{}}>
                                <div className="absolute -right-1 w-4 h-4 -top-1 rounded-full text-xs text-white bg-red-400 flex justify-center items-center">{Cart}</div>
                                <img src={`${Route}/images/shopping-cart.svg`} className="w-4 h-4 lg:w-6 lg:h-6 fill-current text-gray-600 stroke-current " alt="" />
                                
                            </div>
                        </button>
                        
                            {/* <button className={`hidden ${Loading?"skeleton-box":""} ml-3 w-8 md:w-10 h-6  md:h-8 lg:h-10 lg:w-10 bg-gray-300 focus:outline-none hover:bg-gray-400 rounded-full md:flex items-center justify-center`}>
                                <div style={Loading?{opacity:"0"}:{}}>
                                    <svg className="w-4 h-4 lg:w-6 lg:h-6 fill-current text-gray-600 stroke-current "  xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth="3" strokeLinecap="square" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                </div>
                            </button> */}
                        <div ref={messagesRef} id="messages" className={messages?"cart hidden md:block w-96 shadow-2xl bg-white rounded absolute left-32  -bottom-2 transform translate-y-full ":"cart hidden w-96 shadow-2xl bg-white rounded absolute  left-60 bottom-0 transform translate-y-full"}>
                            <div className="grid grid-cols-12 shadow-md 2xl:shadow-lg">
                                <div className="col-span-12 flex justify-between items-center  py-2">
                                    <span className="px-5">الرسائل</span>
                                    <span className="mx-4 rounded bg-red-400 px-2 text-sm text-white">4 جديد  </span>
                                </div>
                            </div>
                            <div className="scrolls h-110 overflow-y-scroll">
                                <div className="hidden col-span-12 border-t-2 px-2 py-3  justify-between relative items-center">
                                    <div className="flex  flex-col justify-between items-start">
                                        <span className="text-sm text-gray-700">المنتج الأول</span>
                                        <span className="text-xs text-gray-300">من غوغل</span>
                                    </div>
                                    <div className="z-50  transition-all flex flex-row justify-between  items-center  rounded-md w-28 h-4 bg-gray-100 ">
                                        <span className="text-xs cursor-pointer font-bold px-3 bg-gray-200 h-full flex justify-center items-center">-</span>
                                        <span className="block rounded text-xs font-bold">1</span>
                                        <span className="text-xs cursor-pointer font-bold h-full flex justify-center items-center px-3 bg-gray-200">+</span>
                                    </div>
                                    <span className="text-xs">1200 ل.س</span>
                                    <div className="absolute top-1 left-3">x</div>
                                </div>
                                
                                {props.carts&&props.carts.messages?props.carts.messages.map(ele=>
                                    <div className="col-span-12  px-5 noti-hover py-4 flex justify-between relative items-center" style={{borderTop:"1px solid #dcdcdc"}}>
                                        <div className="rounded-full w-2 h-0.7 bg-red-400 absolute right-1.5"></div>
                                        <div className="flex  flex-col justify-between items-start">
                                            <span className="text-xs text-black">متجر الأمين</span>
                                            <span className="text-xs text-gray-500 leading-5 mt-2">مرحبا ليث, تم استلام طلبك سيتم إعلامك بكل تغيير يحصل على الطلب</span>
                                        </div>
                                        <div className="flex flex-col h-full justify-between items-center">
                                            <span className="text-xs text-gray-700">رقم الطلب</span>
                                            <span className="text-xs border-gray-300 border-2 text-gray-700 mt-2  rounded text-center w-20 py-0.5">#321422</span>
                                        </div>
                                        <div className="absolute top-2 left-5">
                                            {/* <img src="./images/x.svg" className="w-2" alt="" /> */}
                                        </div>
                                    </div>
                                ):
                                <div className="flex justify-center items-center h-80">
                                <img src="/images/icons/empty-mas.svg" className="w-64" alt="" />
                            </div>}
                                
                            </div>
                            <div className="col-span-12 py-2  border-t-2 flex flex-col justify-between items-center">
                                <Link href="/dashboard/conversations">
                                <div  className="flex flex-col justify-between items-center">
                                    <div className="flex flex-row w-full justify-center cursor-pointer items-center px-5">
                                        <span className="font-bold text-gray-700 text-center text-sm">جميع الرسائل</span>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </div>
                        {localStorage.getItem('token')?
                        <>
                        <button onClick={togglemessages} className={`ml-3 w-8 md:w-10 h-6  md:h-8 lg:h-10 lg:w-10  focus:outline-none  rounded-full hidden lg:flex items-center justify-center ${Loading?"skeleton-box":""}`}>
                            <div style={Loading?{opacity:"0"}:{}}>
                                <svg id="Group_5411" className="w-4 h-4 lg:w-6 lg:h-6 stroke-current" data-name="Group 5411" xmlns="http://www.w3.org/2000/svg" width="700.033" height="613.995" viewBox="0 0 700.033 613.995">
                                    <rect id="Rectangle_1740" data-name="Rectangle 1740" width="333.821" height="21.213" transform="translate(183.105 182.522)"/>
                                    <rect id="Rectangle_1741" data-name="Rectangle 1741" width="67.545" height="21.213" transform="translate(449.383 280.785)"/>
                                    <rect id="Rectangle_1742" data-name="Rectangle 1742" width="200.681" height="21.213" transform="translate(183.105 280.785)"/>
                                    <path id="Path_11864" data-name="Path 11864" d="M4049.672,616.224h17a10.587,10.587,0,0,1,10.43,12.495l-16.649,91.662-3.985,21.935L4076,731.582,4283.36,617.519a10.632,10.632,0,0,1,5.116-1.294H4558.8a95.576,95.576,0,0,0,95.455-95.459V223.78a95.563,95.563,0,0,0-95.455-95.459H4049.672a95.545,95.545,0,0,0-95.455,95.459V520.765A95.559,95.559,0,0,0,4049.672,616.224ZM3975.427,223.78a74.328,74.328,0,0,1,74.245-74.246H4558.8a74.329,74.329,0,0,1,74.246,74.246V520.765a74.329,74.329,0,0,1-74.246,74.246H4280.278l-2.365,1.294-173.054,95.2a10.839,10.839,0,0,1-5.126,1.294A10.578,10.578,0,0,1,4089.3,680.31l13.238-72.8,2.271-12.495h-55.138a74.328,74.328,0,0,1-74.245-74.246Z" transform="translate(-3954.217 -128.321)"/>
                                </svg>
                            </div>
                        </button>
                        <a href="/dashboard/conversations" className={`ml-3 w-8 md:w-10 h-6  md:h-8 lg:h-10 lg:w-10  focus:outline-none  rounded-full flex lg:hidden items-center justify-center ${Loading?"skeleton-box":""}`}>
                            <div style={Loading?{opacity:"0"}:{}}>
                                <svg id="Group_5411" className="w-4 h-4 lg:w-6 lg:h-6 stroke-current" data-name="Group 5411" xmlns="http://www.w3.org/2000/svg" width="700.033" height="613.995" viewBox="0 0 700.033 613.995">
                                    <rect id="Rectangle_1740" data-name="Rectangle 1740" width="333.821" height="21.213" transform="translate(183.105 182.522)"/>
                                    <rect id="Rectangle_1741" data-name="Rectangle 1741" width="67.545" height="21.213" transform="translate(449.383 280.785)"/>
                                    <rect id="Rectangle_1742" data-name="Rectangle 1742" width="200.681" height="21.213" transform="translate(183.105 280.785)"/>
                                    <path id="Path_11864" data-name="Path 11864" d="M4049.672,616.224h17a10.587,10.587,0,0,1,10.43,12.495l-16.649,91.662-3.985,21.935L4076,731.582,4283.36,617.519a10.632,10.632,0,0,1,5.116-1.294H4558.8a95.576,95.576,0,0,0,95.455-95.459V223.78a95.563,95.563,0,0,0-95.455-95.459H4049.672a95.545,95.545,0,0,0-95.455,95.459V520.765A95.559,95.559,0,0,0,4049.672,616.224ZM3975.427,223.78a74.328,74.328,0,0,1,74.245-74.246H4558.8a74.329,74.329,0,0,1,74.246,74.246V520.765a74.329,74.329,0,0,1-74.246,74.246H4280.278l-2.365,1.294-173.054,95.2a10.839,10.839,0,0,1-5.126,1.294A10.578,10.578,0,0,1,4089.3,680.31l13.238-72.8,2.271-12.495h-55.138a74.328,74.328,0,0,1-74.245-74.246Z" transform="translate(-3954.217 -128.321)"/>
                                </svg>
                            </div>
                        </a>
                        </>
                        :
                        <>
                        
                        </>
                        }
                        {localStorage.getItem('token')?
                        <>
                            <div ref={notificationsRef} id="notifications" className={notifications?"cart  hidden md:block w-96 shadow-2xl bg-white rounded absolute left-20  -bottom-2 transform translate-y-full ":"cart hidden w-96 shadow-2xl bg-white rounded absolute  left-40 bottom-0 transform translate-y-full"}>
                            <div className="grid grid-cols-12 shadow-md 2xl:shadow-lg ">
                                <div className="col-span-12 flex justify-between items-center  py-2">
                                    <span className="px-5">الإشعارات</span>
                                    <span className="mx-4 rounded bg-red-400 px-2 text-sm text-white">4 جديد  </span>
                                </div>
                            </div>
                            <div className="scrolls h-90 overflow-y-scroll">
                                <div className="hidden col-span-12 border-t-2 px-2 py-3  justify-between relative items-center">
                                    <div className="flex  flex-col justify-between items-start">
                                        <span className="text-sm text-gray-700">المنتج الأول</span>
                                        <span className="text-xs text-gray-300">من غوغل</span>
                                    </div>
                                    <div className="z-50  transition-all flex flex-row justify-between  items-center  rounded-md w-28 h-4 bg-gray-100 ">
                                        <span className="text-xs cursor-pointer font-bold px-3 bg-gray-200 h-full flex justify-center items-center">-</span>
                                        <span className="block rounded text-xs font-bold">1</span>
                                        <span className="text-xs cursor-pointer font-bold h-full flex justify-center items-center px-3 bg-gray-200">+</span>
                                    </div>
                                    <span className="text-xs">1200 ل.س</span>
                                    <div className="absolute top-1 left-3">x</div>
                                </div>
                                <div className="col-span-12  px-5 noti-hover py-4 flex justify-between relative items-center" style={{borderTop:"1px solid #dcdcdc"}}>
                                    {/* <img className="w-6 h-2 rounded-full" src="./images/med-1.jpg" alt="" /> */}
                                    <div className="rounded-full w-2 h-0.7 bg-red-400 absolute right-1.5"></div>
                                    <div className="flex  flex-col justify-between items-start">
                                        <span className="text-xs text-black">المنتج الأول المنتج الأول المنتج الأول </span>
                                        <span className="text-xs text-gray-500 mt-2">من غوغل من غوغل من غوغل من غوغل </span>
                                    </div>
                                    {/* <div className="z-50  transition-all flex flex-row justify-between  items-center  rounded-md w-24 border-2 h-6 ">
                                        <span className="text-xs cursor-pointer  font-bold px-2  h-2/3 flex justify-center text-gray-700 border-l-2 items-center">-</span>
                                        <span className="block rounded text-xs font-bold text-gray-700">1</span>
                                        <span className="text-xs cursor-pointer font-bold  text-gray-700  h-2/3 flex justify-center items-center px-2 border-r-2">+</span>
                                    </div> */}
                                    <div className="flex flex-col h-full justify-between items-center">
                                        <span className="text-xs">الطلب تم رفضه</span>
                                        <span className="text-xs bg-yellow-500 mt-2 text-white rounded text-center w-20 py-0.5">معلق</span>
                                    </div>
                                    <div className="absolute top-2 left-5">
                                        {/* <img src="./images/x.svg" className="w-2" alt="" /> */}
                                    </div>
                                </div>
                                <div className="col-span-12   px-5 noti-hover py-4 flex justify-between relative items-center" style={{borderTop:"1px solid #dcdcdc"}}>
                                    {/* <img className="w-6 h-2 rounded-full" src="./images/med-1.jpg" alt="" /> */}
                                    <div className="rounded-full w-2 h-0.7 bg-red-400 absolute right-1.5"></div>
                                    <div className="flex  flex-col justify-between items-start">
                                        <span className="text-xs text-black">المنتج الأول المنتج الأول المنتج الأول </span>
                                        <span className="text-xs text-gray-500 mt-2">من غوغل من غوغل من غوغل من غوغل </span>
                                    </div>
                                    {/* <div className="z-50  transition-all flex flex-row justify-between  items-center  rounded-md w-24 border-2 h-6 ">
                                        <span className="text-xs cursor-pointer  font-bold px-2  h-2/3 flex justify-center text-gray-700 border-l-2 items-center">-</span>
                                        <span className="block rounded text-xs font-bold text-gray-700">1</span>
                                        <span className="text-xs cursor-pointer font-bold  text-gray-700  h-2/3 flex justify-center items-center px-2 border-r-2">+</span>
                                    </div> */}
                                    <div className="flex flex-col h-full justify-between items-center">
                                        <span className="text-xs">الطلب تم رفضه</span>
                                        <span className="text-xs bg-gray-700 mt-2 text-white rounded text-center w-20 py-0.5">متنازع عليه</span>
                                    </div>
                                    <div className="absolute top-2 left-5">
                                    </div>
                                </div>
                                
                                <div className="col-span-12   px-5 noti-hover py-4 flex justify-between relative items-center" style={{borderTop:"1px solid #dcdcdc"}}>
                                    <div className="rounded-full w-2 h-0.7 bg-red-400 absolute right-1.5"></div>
                                    <div className="flex  flex-col justify-between items-start">
                                        <span className="text-xs text-black">المنتج الأول المنتج الأول المنتج الأول </span>
                                        <span className="text-xs text-gray-500 mt-2">من غوغل من غوغل من غوغل من غوغل </span>
                                    </div>
                                    <div className="flex flex-col h-full justify-between items-center">
                                        <span className="text-xs">الطلب تم رفضه</span>
                                        <span className="text-xs bg-gray-300 mt-2 text-white rounded text-center w-20 py-0.5">ملغى</span>
                                    </div>
                                    <div className="absolute top-2 left-5">
                                    </div>
                                </div>
                                
                                <div className="col-span-12   px-5 noti-hover py-4 flex justify-between relative items-center" style={{borderTop:"1px solid #dcdcdc"}}>
                                    <div className="rounded-full w-2 h-0.7 bg-red-400 absolute right-1.5"></div>
                                    <div className="flex  flex-col justify-between items-start">
                                        <span className="text-xs text-black">المنتج الأول المنتج الأول المنتج الأول </span>
                                        <span className="text-xs text-gray-500 mt-2">من غوغل من غوغل من غوغل من غوغل </span>
                                    </div>
                                    <div className="flex flex-col h-full justify-between items-center">
                                        <span className="text-xs">الطلب تم رفضه</span>
                                        <span className="text-xs bg-blue-500 mt-2 text-white rounded text-center w-20 py-0.5">إعادة الأموال</span>
                                    </div>
                                    <div className="absolute top-2 left-5">
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                            <button onClick={togglenotifications} className={`relative ml-3 w-8 md:w-10 h-6  md:h-8 lg:h-10 lg:w-10  focus:outline-none  rounded-full flex items-center justify-center ${Loading?"skeleton-box":""}`}>
                            <div style={Loading?{opacity:"0"}:{}}>
                                <img src="/images/notis (1).svg" className="w-4 h-4 lg:w-6 lg:h-6"  alt="" />
                                <div className="absolute top-0 right-2 w-4  h-4 text-xs text-white -mr-2 rounded-full bg-red-400">
                                    3
                                </div>
                            </div>
                        </button>
                        </>
                        :
                        <></>    
                        }
                        <div ref={profileRef} id="profile" className={profile?"cart hidden md:block w-80 shadow-2xl bg-white rounded absolute left-4  -bottom-2 transform translate-y-full ":"cart overflow-hidden hidden w-96 shadow-2xl bg-white rounded absolute  left-60 bottom-0 transform translate-y-full"}>
                            <div className="overflow-hidden">
                            <div className={menu==2?"px-2 py-2 slidesright":"px-2 py-2  slidesleft"}>
                                    <div className="hidden col-span-12 border-t-2 px-2 py-3  justify-between relative items-center">
                                        <div className="flex  flex-col justify-between items-start">
                                            <span className="text-sm text-gray-700">المنتج الأول</span>
                                            <span className="text-xs text-gray-300">من غوغل</span>
                                        </div>
                                        <div className="z-50  transition-all flex flex-row justify-between  items-center  rounded-md w-28 h-4 bg-gray-100 ">
                                            <span className="text-xs cursor-pointer font-bold px-3 bg-gray-200 h-full flex justify-center items-center">-</span>
                                            <span className="block rounded text-xs font-bold">1</span>
                                            <span className="text-xs cursor-pointer font-bold h-full flex justify-center items-center px-3 bg-gray-200">+</span>
                                        </div>
                                        <span className="text-xs">1200 ل.س</span>
                                        <div className="absolute top-1 left-3">x</div>
                                    </div>
                                    <div className="col-span-12 rounded px-5 py-3 flex justify-start relative items-center">
                                        

                                            <div className="rounded-full  w-6 h-4  cursor-pointer" onClick={()=> setMenu(1)} style={{background:`url(${Route}/images/right-arrow.svg)`,backgroundSize:"cover",backgroundPosition:"center"}}></div>
                                        


                                        <div className="flex  flex-col justify-between items-start mr-2">
                                            <span className="text-md text-black">إعدادات الحساب</span>
                                            {/* <span className="text-xs text-gray-500 mt-2">الرصيد : 500 ر.ل </span> */}
                                        </div>
                                    
                                    </div>
                                    <div className="col-span-12 rounded px-5 noti-hover py-3 flex justify-between relative items-center" style={{borderTop:"1px solid #dcdcdc"}} >
                                        <Link href="/dashboard/profile">
                                        <div  className="w-full">
                                        <div className="w-2/3 flex justify-start relative items-center">
                                        <img src={`${Route}/images/profile.svg`} className=" w-10 h-6 "/>
                                            <div className="flex  flex-col justify-between items-start mr-2">
                                                <span className="text-xs text-black">المعلومات الأساسية</span>
                                            </div>
                                        </div>
                                        </div>
                                        </Link>
                                    </div>
                                    <div className="col-span-12 rounded px-5 noti-hover py-3 flex justify-between relative items-center" >
                                        <div className="w-2/3 flex justify-start relative items-center">
                                            <img src={`${Route}/images/password.svg`} className=" w-10 h-6 "/>
                                            <div  className="flex  flex-col justify-between items-start mr-2">
                                                <span className="text-xs text-black">تغيير كلمة المرور</span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-span-12 rounded px-5 noti-hover py-3 flex justify-between relative items-center" >
                                        <div className="w-2/3 flex justify-start relative items-center">
                                        <img src={`${Route}/images/shipping.svg`} className="w-9 h-6 "/>
                                            <div className="flex  flex-col justify-between items-start mr-2">
                                                <span className="text-xs text-black">عناوين الشحن</span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            <div className={menu==3?"px-2 py-2 slidesright":"px-2 py-2  slidesleft"}>
                                    <div className="hidden col-span-12 border-t-2 px-2 py-3  justify-between relative items-center">
                                        <div className="flex  flex-col justify-between items-start">
                                            <span className="text-sm text-gray-700">المنتج الأول</span>
                                            <span className="text-xs text-gray-300">من غوغل</span>
                                        </div>
                                        <div className="z-50  transition-all flex flex-row justify-between  items-center  rounded-md w-28 h-4 bg-gray-100 ">
                                            <span className="text-xs cursor-pointer font-bold px-3 bg-gray-200 h-full flex justify-center items-center">-</span>
                                            <span className="block rounded text-xs font-bold">1</span>
                                            <span className="text-xs cursor-pointer font-bold h-full flex justify-center items-center px-3 bg-gray-200">+</span>
                                        </div>
                                        <span className="text-xs">1200 ل.س</span>
                                        <div className="absolute top-1 left-3">x</div>
                                    </div>
                                    <div className="col-span-12 rounded px-5 py-3 flex justify-start relative items-center">
                                        <div className="rounded-full  w-6 h-4  cursor-pointer" onClick={()=> setMenu(1)} style={{background:`url(${Route}/images/right-arrow.svg)`,backgroundSize:"cover",backgroundPosition:"center"}}></div>
                                        <div className="flex  flex-col justify-between items-start mr-2">
                                            <span className="text-md text-black">المعاملات التجارية</span>
                                            {/* <span className="text-xs text-gray-500 mt-2">الرصيد : 500 ر.ل </span> */}
                                        </div>
                                    </div>
                                    <div className="col-span-12 rounded px-2 noti-hover py-3 flex justify-between relative items-center" style={{borderTop:"1px solid #dcdcdc"}} >
                                        <Link href="/dashboard/order">
                                        <div  className="flex justify-between relative items-center">

                                        <div className="w-2/3 flex justify-start relative items-center">
                                        <img src={`${Route}/images/icons/ordersblack.svg`} className=" w-6/12 h-6 "/>
                                            <div className="flex  flex-col justify-between items-start mr-2 w-6/12">
                                                <span className="text-xs text-black">الطلبات</span>
                                            </div>
                                        </div>
                                        </div>
                                        </Link>
                                    </div>
                                    <div className="col-span-12 rounded px-2 noti-hover py-3 flex justify-between relative items-center"  >
                                        <Link href="/dashboard/disputes">
                                    <div  className="flex justify-between relative items-center">
                                        <div className="w-2/3 flex justify-start relative items-center">
                                        <img src={`${Route}/images/bill.svg`} className=" w-1/2 h-6 "/>
                                            <div className="flex  flex-col justify-between items-start mr-2 ">
                                                <span className="text-xs text-black">النزاعات</span>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>                                      
                                    </div>
                                    <div className="col-span-12 rounded px-2 noti-hover py-3 flex justify-between relative items-center"  >
                                        <Link href="/dashboard/disputes">
                                    <div  className="flex justify-between relative items-center">
                                        <div className="w-2/3 flex justify-start relative items-center">
                                            <img src={`${Route}/images/payment.svg`} className=" w-1/2 h-6 "/>
                                            <div className="flex  flex-col justify-between items-start mr-2 ">
                                                <span className="text-xs text-black">النزاعات</span>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>                                      
                                    </div>
                                    
                                    <div className="col-span-12 rounded px-2 noti-hover py-3 flex justify-between relative items-center"  >
                                        <Link href="/dashboard/disputes">
                                    <div  className="flex justify-between relative items-center">
                                        <div className="w-2/3 flex justify-start relative items-center">
                                            <img src={`${Route}/images/wallet.svg`} className="w-1/2 h-6 "/>
                                            <div className="flex  flex-col justify-between items-start mr-2 ">
                                                <span className="text-xs text-black">المحفظة</span>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>                                      
                                    </div>

                                </div> 
                            <div className={menu==1?"px-2 py-2 centered":"px-2 py-2  slideLeft"}>
                                <div className="hidden col-span-12 border-t-2 px-2 py-3  justify-between relative items-center">
                                    <div className="flex  flex-col justify-between items-start">
                                        <span className="text-sm text-gray-700">المنتج الأول</span>
                                        <span className="text-xs text-gray-300">من غوغل</span>
                                    </div>
                                    <div className="z-50  transition-all flex flex-row justify-between  items-center  rounded-md w-28 h-4 bg-gray-100 ">
                                        <span className="text-xs cursor-pointer font-bold px-3 bg-gray-200 h-full flex justify-center items-center">-</span>
                                        <span className="block rounded text-xs font-bold">1</span>
                                        <span className="text-xs cursor-pointer font-bold h-full flex justify-center items-center px-3 bg-gray-200">+</span>
                                    </div>
                                    <span className="text-xs">1200 ل.س</span>
                                    <div className="absolute top-1 left-3">x</div>
                                </div>
                                <div className="col-span-12 rounded px-5 noti-hover py-3 flex justify-start relative items-center">
                                    <Link href="/dashboard">
                                    <div  className="w-full flex justify-start relative items-center">
                                    <div className="rounded-full w-10 h-8 " style={{background:`url(${localStorage.getItem('avatar')?localStorage.getItem('avatar'):""})`,backgroundSize:"cover",backgroundPosition:"center"}}></div>
                                    <div className="flex  flex-col justify-between items-start mr-2">
                                        <span className="text-xs text-black">{localStorage.getItem('nice_name')?localStorage.getItem('nice_name'):""}</span>
                                        <span className="text-xs text-gray-500 mt-2">الرصيد : 500 ر.ل </span>
                                    </div>
                                    </div>
                                    </Link>
                                </div>
                                <div onClick={()=>setMenu(2)} className="col-span-12 rounded px-5 noti-hover py-3 flex justify-between relative items-center" style={{borderTop:"1px solid #dcdcdc"}}>
                                    <div   className="w-2/3 flex justify-start relative items-center">
                                        <img src={`${Route}/images/setting.svg`} className="w-7 h-8"/>
                                        <div className="flex  flex-col justify-between items-start mr-2">
                                            <span className="text-xs text-black">إعدادات الحساب</span>
                                        </div>
                                    </div>
                                    <div className="arrow">
                                        <img className="w-4 relative" src={`${Route}/images/left-arrow.svg`} alt="" />
                                    </div>
                                </div>
                                <div onClick={()=>setMenu(3)} className="col-span-12 rounded px-5 noti-hover py-3 flex justify-between relative items-center" >
                                    <div className="w-2/3 flex justify-start relative items-center">
                                    <img src={`${Route}/images/cashier.svg`} className="w-7 h-8"/>
                                        <div  className="flex  flex-col justify-between items-start mr-2">
                                            <span className="text-xs text-black">المعاملات التجارية</span>
                                        </div>
                                    </div>
                                    <div className="arrow">
                                        <img className="w-4 relative" src={`${Route}/images/left-arrow.svg`} alt="" />
                                    </div>
                                </div>
                                <div className="col-span-12  rounded px-5 noti-hover py-3 flex justify-between relative items-center" >
                                    <div className="w-full flex justify-start relative items-center">
                                    <img src={`${Route}/images/support.svg`} className="w-7 h-8"/>
                                        <div className="flex  flex-col justify-between items-start mr-2">
                                            <span className="text-xs text-black">مركز المساعدة</span>
                                            <span className="text-xs text-gray-500 mt-2">فريق الدعم الفني متوفر 24/7</span>

                                        </div>
                                    </div>
                                    {/* <div className="arrow">
                                        <img className="w-4 relative" src="./images/left-arrow.svg" alt="" />
                                    </div> */}
                                </div>
                                <div className="col-span-12 rounded px-5 noti-hover py-3 flex justify-start relative items-center" >
                                <img src={`${Route}/images/logout.svg`} className="w-7 h-8"/>
                                    <div className="flex  flex-col justify-between items-start mr-2">
                                        <span onClick={handlelogout} className="text-xs text-black">تسجيل الخروج</span>
                                    </div>
                                </div>
                            </div>
                            
                            {menu==1?
                            <div className="col-span-12 py-2  border-t-2 flex flex-col justify-between items-center">
                                <div className="flex flex-row w-full justify-between items-center px-5">
                                    <span className="text-xs text-gray-500 mt-2">
                                        الشحن                                    
                                    </span>
                                    <span className="text-xs border-r-2 pr-2 text-gray-500 mt-2">
                                        سياسة الإرجاع وإعادة الأموال
                                    </span>
                                    <span className="text-xs border-r-2 pr-2 text-gray-500 mt-2">
                                        المدونة
                                    </span>
                                </div>
                            </div>
                            :""}
                            </div>
                        </div>
                        {localStorage.getItem('token')?
                            <div onClick={toggleprofile} className={`hidden ml-3 cursor-pointer w-8 md:w-10 h-6  md:h-8 lg:h-10 lg:w-10 focus:outline-none hover:bg-gray-400 rounded-full md:flex items-center justify-center ${Loading?"skeleton-box":""}`}  style={Loading?{}:{background:`url(${localStorage.getItem('avatar')!=null?localStorage.getItem('avatar'):""})`,backgroundSize:"cover",backgroundPosition:"center"}}>
                            </div>
                            :
                            <span className="text-xs block bg-yellow-500 text-white py-1 px-3 rounded cursor-pointer " onClick={toggleModal}>
                                دخول
                            </span>    
                        }
                        </div>
                </nav>
            </div>
);
}