import React, { useEffect, useRef, useState } from 'react';
import { useAppState, useAppDispatch } from '../../contexts/app/app.provider';
import {Menu} from './menu';

export const NavBar = (props) => {
    const isDrawerOpen = useAppState('isDrawerOpen');
    const [cart , setCart]  = useState(false);
    const [notifications , setNotifications]  = useState(false);
    const [messages , setMessages]  = useState(false);
    const [profile , setProfile]  = useState(false);
    const [menu,setMenu] = useState(1);
    const Draggable = useAppState('Draggable');
    const dispatch = useAppDispatch();
    const search = useAppState('search');
    const searchIcon = useAppState('toggleIcon');
    const Loading = useAppState('Loading');
    const Cart = useAppState('Cart');

    
    const Token = useAppState('Token');
    

    const handlelogout = () =>{
        console.log('asdasd');
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

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }
            
            localStorage.removeItem('token');
            window.location.reload(false);
        })
    }
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
    // const  toggleDrag = React.useCallback(() => {
    //     dispatch({
    //       type: 'Draggable',
    //     });
    //     console.log('dragging');
    //   }, [dispatch]
    //   );
    const togglesearch = React.useCallback(() => {
        dispatch({
          type: 'ToggleSearch',
        });
      }, [dispatch]
      );
      

        // if(Draggable == true){
           
        //     // setCart(false);
        //     // setProfile(false);
        //     // setNotifications(false);
        //     // setMessages(false);
        // }
       
   
    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            
            function handleClickOutside(event) {

                   if (ref.current && !ref.current.contains(event.target) && !ref.current.nextSibling.contains(event.target)) {
                        console.log('inside');
                       if(ref.current.id == "messages"){
                           setMessages(false);
                           console.log('messages');
                        }
                        // if(ref.current.id == "carts"){
                        //     setCart(false)
                        // }
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
                // Unbind the event listener on clean up
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
    // useOutsideAlerter(cartRef);
    useOutsideAlerter(messagesRef);
    useOutsideAlerter(notificationsRef);
    
        return (
            <div className="fixed top-0 w-full z-50 md:z-30" style={{direction:"rtl"}}>
            <nav className="w-full bg-white shadow-md h-16 flex justify-between items-center ">
                    <div className="w-full lg:w-4/6 xl:w-full  h-full flex items-center md:pr-1 lg:px-4 ">
                    <div className="flex border-b-4 border-white">
                            <button onClick={props.toggleHandler} className="hidden items-center h-full w-16 md:flex md:w-12  lg:w-9 xl:w-9 justify-center  bg-white hover:bg-gray-200 focus:outline-none rounded-md">
                                <svg className="fill-current text-gray-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth="3" strokeLinecap="square" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                            </button>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="hidden sm:block pr-3" width="134.034" height="22.087" viewBox="0 0 134.034 22.087">
                        <g id="Group_4845" data-name="Group 4845" transform="translate(0 0)">
                            <path id="Path_5" data-name="Path 5" d="M-3960.62,856.149a.575.575,0,0,1-.575-.576v-9.935a7.655,7.655,0,0,0-1.87-5.363,6.268,6.268,0,0,0-4.857-2.053,6.375,6.375,0,0,0-4.869,2.031,7.351,7.351,0,0,0-1.9,5.234,7.507,7.507,0,0,0,1.956,5.352,6.537,6.537,0,0,0,4.986,2.085,7.774,7.774,0,0,0,2.676-.473,9.267,9.267,0,0,0,1.739-.86.575.575,0,0,1,.873.493v2.626a.571.571,0,0,1-.3.506,10.725,10.725,0,0,1-2.419.922,12.417,12.417,0,0,1-3,.355,10,10,0,0,1-2.988-.462,9.73,9.73,0,0,1-2.687-1.3,10.547,10.547,0,0,1-3.482-3.923,11.324,11.324,0,0,1-1.2-5.234,10.773,10.773,0,0,1,2.988-7.813,10.112,10.112,0,0,1,7.588-3.084,10.486,10.486,0,0,1,5.546,1.526,10.213,10.213,0,0,1,3.869,4.192,9.532,9.532,0,0,1,.892,2.633,24.956,24.956,0,0,1,.269,4.267v8.28a.576.576,0,0,1-.576.576Z" transform="translate(3978.542 -834.406)" fill="#191919"/>
                            <path id="Path_6" data-name="Path 6" d="M-3705.708,856.149a.653.653,0,0,1-.653-.652V843.962a9.745,9.745,0,0,1,2.257-6.793,7.8,7.8,0,0,1,6.083-2.493,7.962,7.962,0,0,1,3.611.828,7.931,7.931,0,0,1,2.38,1.835.648.648,0,0,0,.963,0,8.1,8.1,0,0,1,2.4-1.849,7.912,7.912,0,0,1,3.59-.817,7.766,7.766,0,0,1,6.051,2.5,9.723,9.723,0,0,1,2.268,6.782V855.5a.652.652,0,0,1-.653.652h-2.435a.652.652,0,0,1-.652-.652V843.252a5.01,5.01,0,0,0-1.268-3.568,4.327,4.327,0,0,0-3.31-1.354,4.326,4.326,0,0,0-3.31,1.354,5.007,5.007,0,0,0-1.268,3.568V855.5a.653.653,0,0,1-.653.652h-2.435a.653.653,0,0,1-.653-.652V843.252a4.959,4.959,0,0,0-1.29-3.568,4.4,4.4,0,0,0-3.332-1.354,4.318,4.318,0,0,0-3.321,1.354,5.035,5.035,0,0,0-1.257,3.568V855.5a.652.652,0,0,1-.652.652Z" transform="translate(3732.025 -834.406)" fill="#191919"/>
                            <path id="Path_7" data-name="Path 7" d="M-3335.563,856.149a.576.576,0,0,1-.576-.576v-9.935a7.655,7.655,0,0,0-1.87-5.363,6.269,6.269,0,0,0-4.858-2.053,6.376,6.376,0,0,0-4.869,2.031,7.351,7.351,0,0,0-1.9,5.234,7.508,7.508,0,0,0,1.956,5.352,6.537,6.537,0,0,0,4.987,2.085,7.773,7.773,0,0,0,2.676-.473,9.44,9.44,0,0,0,1.937-.987.436.436,0,0,1,.675.366v2.962a.437.437,0,0,1-.227.385,10.731,10.731,0,0,1-2.491.96,12.416,12.416,0,0,1-3,.355,10,10,0,0,1-2.988-.462,9.731,9.731,0,0,1-2.687-1.3,10.542,10.542,0,0,1-3.482-3.923,11.321,11.321,0,0,1-1.2-5.234,10.773,10.773,0,0,1,2.988-7.813,10.113,10.113,0,0,1,7.588-3.084,10.487,10.487,0,0,1,5.546,1.526,10.212,10.212,0,0,1,3.869,4.192,9.532,9.532,0,0,1,.892,2.633,25.023,25.023,0,0,1,.268,4.267v8.419a.437.437,0,0,1-.437.437Z" transform="translate(3412.424 -834.406)" fill="#191919"/>
                            <path id="Path_8" data-name="Path 8" d="M-3080.606,856.149a.7.7,0,0,1-.7-.7v-10.8a10.4,10.4,0,0,1,2.45-7.287,8.416,8.416,0,0,1,6.535-2.687,8.35,8.35,0,0,1,6.513,2.687,10.46,10.46,0,0,1,2.429,7.287v10.8a.7.7,0,0,1-.7.7h-2.346a.7.7,0,0,1-.7-.7v-11.49a5.748,5.748,0,0,0-1.451-4.063,4.877,4.877,0,0,0-3.751-1.569,4.919,4.919,0,0,0-3.751,1.569,5.7,5.7,0,0,0-1.472,4.063v11.49a.7.7,0,0,1-.7.7Z" transform="translate(3165.907 -834.406)" fill="#191919"/>
                            <path id="Path_9" data-name="Path 9" d="M-2834.057,856.149a.576.576,0,0,1-.576-.576v-9.935a7.656,7.656,0,0,0-1.87-5.363,6.269,6.269,0,0,0-4.858-2.053,6.375,6.375,0,0,0-4.869,2.031,7.35,7.35,0,0,0-1.9,5.234,7.508,7.508,0,0,0,1.956,5.352,6.538,6.538,0,0,0,4.987,2.085,7.771,7.771,0,0,0,2.676-.473,9.269,9.269,0,0,0,1.739-.86.574.574,0,0,1,.873.493v2.626a.57.57,0,0,1-.3.506,10.721,10.721,0,0,1-2.418.922,12.417,12.417,0,0,1-3,.355,10,10,0,0,1-2.988-.462,9.728,9.728,0,0,1-2.687-1.3,10.541,10.541,0,0,1-3.482-3.923,11.321,11.321,0,0,1-1.2-5.234,10.773,10.773,0,0,1,2.988-7.813,10.113,10.113,0,0,1,7.588-3.084,10.486,10.486,0,0,1,5.546,1.526,10.211,10.211,0,0,1,3.869,4.192,9.524,9.524,0,0,1,.892,2.633,25.017,25.017,0,0,1,.269,4.267v8.28a.576.576,0,0,1-.576.576Z" transform="translate(2958.207 -834.406)" fill="#191919"/>
                            <path id="Path_10" data-name="Path 10" d="M-2594.73,833.78a1.957,1.957,0,0,1-1.95,1.982,1.969,1.969,0,0,1-1.969-1.982,1.967,1.967,0,0,1,1.976-1.969A1.952,1.952,0,0,1-2594.73,833.78Zm-3.5.006a1.566,1.566,0,0,0,1.541,1.611,1.561,1.561,0,0,0,1.534-1.611,1.57,1.57,0,0,0-1.541-1.611A1.569,1.569,0,0,0-2598.228,833.787Zm2.308-.639a1.387,1.387,0,0,0-.607-.141.729.729,0,0,0-.793.793.755.755,0,0,0,.786.8,1.255,1.255,0,0,0,.639-.153l.1.326a1.455,1.455,0,0,1-.793.2,1.1,1.1,0,0,1-1.177-1.157,1.186,1.186,0,0,1,1.241-1.189,1.215,1.215,0,0,1,.7.179Z" transform="translate(2728.765 -831.811)" fill="#141414"/>
                        </g>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="block  pr-3 mr-3 sm:hidden" width="38.07" height="43" viewBox="0 0 38.07 43">
                        <path id="Path_11" data-name="Path 11" d="M-4353.608,780.454l-15.933-9.2a3.1,3.1,0,0,0-3.1,0l-15.933,9.2a3.1,3.1,0,0,0-1.551,2.686v18.4a3.1,3.1,0,0,0,1.551,2.686l15.933,9.2a3.1,3.1,0,0,0,3.1,0l15.933-9.2a3.1,3.1,0,0,0,1.551-2.686v-18.4A3.1,3.1,0,0,0-4353.608,780.454Zm-6.419,22.938a3.981,3.981,0,0,1-3.981-3.98V792.4a8.009,8.009,0,0,0-1.956-5.611,6.559,6.559,0,0,0-5.083-2.148,6.672,6.672,0,0,0-5.094,2.125,7.691,7.691,0,0,0-1.99,5.475,7.856,7.856,0,0,0,2.046,5.6,6.839,6.839,0,0,0,5.218,2.182,8.139,8.139,0,0,0,2.8-.495,10.57,10.57,0,0,0,2.732-1.529V799.7a3.769,3.769,0,0,1-2.815,3.672l-.03.008a12.983,12.983,0,0,1-3.136.371,10.451,10.451,0,0,1-3.126-.484,10.192,10.192,0,0,1-2.811-1.36,11.041,11.041,0,0,1-3.644-4.1,11.851,11.851,0,0,1-1.259-5.476,11.272,11.272,0,0,1,3.125-8.174,10.58,10.58,0,0,1,7.939-3.227,10.97,10.97,0,0,1,5.8,1.6,10.687,10.687,0,0,1,4.048,4.385,9.962,9.962,0,0,1,.933,2.755,26.191,26.191,0,0,1,.281,4.464Z" transform="translate(4390.127 -770.839)" fill="#ffbc00"/>
                    </svg>

                <div className="relative mx-3" x-data="{dropdown : false}">
                </div>
                    </div>
                    <div className={`hidden md:flex w-full  h-full justify-center ${Loading?"items-center":""}`}>
                        <div className={`${Loading?"skeleton-box rounded ":"border-yellow-500 "}border-b-4 `}>
                            <div className={`h-full md:w-16 lg:w-24 xl:w-16`} style={Loading?{opacity:"0"}:{}}>
                                <button className="flex items-center h-full md:w-16 lg:w-24 xl:w-16 justify-center  bg-white hover:bg-gray-200 focus:outline-none rounded-md">
                                    <svg className=" fill-current text-yellow-500 w-4 h-6"   viewBox="0 0 80 78" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.8212 1.30204C39.0046 0.0516549 40.9954 0.0516556 42.1788 1.30204L78.51 39.6878C80.32 41.6002 78.9643 44.75 76.3312 44.75H3.66882C1.03568 44.75 -0.320033 41.6002 1.48999 39.6878L37.8212 1.30204Z" /><path d="M12 75.5V45C12 43.8954 12.8954 43 14 43H66.5C67.6046 43 68.5 43.8954 68.5 45V75.5C68.5 76.6046 67.6046 77.5 66.5 77.5H49.5C48.3954 77.5 47.5 76.6046 47.5 75.5V62C47.5 60.8954 46.6046 60 45.5 60H35C33.8954 60 33 60.8954 33 62V75.5C33 76.6046 32.1046 77.5 31 77.5H14C12.8954 77.5 12 76.6046 12 75.5Z" /></svg>
                                </button>
                            </div>
                        </div>
                        <div className={`${Loading?"skeleton-box rounded  mr-2":"border-b-4 "} border-white`}>
                            <div className={`h-full md:w-16 lg:w-24 xl:w-16`} style={Loading?{opacity:"0"}:{}}>
                                <button className="flex items-center h-full md:w-16 lg:w-24 xl:w-16 justify-center  bg-white hover:bg-gray-200 focus:outline-none rounded-md">
                                    <svg className="w-4 h-6" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth="3" strokeLinecap="square" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
                                </button>
                            </div>
                        </div>
                        <div className={`${Loading?"skeleton-box rounded  mr-2":"border-b-4 "} border-white`}>
                            <div className={`h-full md:w-16 lg:w-24 xl:w-16`} style={Loading?{opacity:"0"}:{}}>
                            <button className="flex items-center h-full md:w-16 lg:w-24 xl:w-16 justify-center  bg-white hover:bg-gray-200 focus:outline-none rounded-md">
                                <svg className=" fill-current text-gray-500 w-4 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z"/></svg>
                            </button>
                            </div>
                        </div>
                        <div className={`${Loading?"skeleton-box rounded  mr-2":"border-b-4 "} border-white`}>
                            <div className={`h-full md:w-16 lg:w-24 xl:w-16`} style={Loading?{opacity:"0"}:{}}>
                            <button className="flex items-center h-full md:w-16 lg:w-24 xl:w-16 justify-center  bg-white hover:bg-gray-200 focus:outline-none rounded-md">
                                <svg className=" fill-current text-gray-500 w-4 h-6" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            </button>
                            </div>
                        </div>
                    
                            
                    </div>
                    <div className="w-full  h-full flex justify-end  items-center px-3">
                      
                        <svg onClick={togglesearch} xmlns="http://www.w3.org/2000/svg" className='mr-3 ml-3 block md:hidden' width="18.179" height="18.179" viewBox="0 0 18.179 18.179">
                            <path id="search_icon" d="M6.817,0a6.817,6.817,0,0,0,0,13.634,6.817,6.817,0,0,0,3.693-.994l5.4,5.539,2.272-2.272-5.539-5.4a6.817,6.817,0,0,0,.994-3.693A6.817,6.817,0,0,0,6.817,0m0,2.272A4.545,4.545,0,1,1,2.272,6.817,4.545,4.545,0,0,1,6.817,2.272" fill="#000"/>
                        </svg>
                        <button onClick={togglecart} className={`ml-3 w-8 md:w-10  h-6  md:h-8 lg:h-10 lg:w-10  focus:outline-none rounded-full  flex items-center justify-center ${Loading?"skeleton-box":""}`}>
                                    <div className="relative " style={Loading?{opacity:"0"}:{}}>
                                        <div className="absolute -right-1 w-4 h-4 -top-1 rounded-full text-xs text-white bg-red-400 flex justify-center items-center">{Cart}</div>
                                        <img src="./images/shopping-cart.svg" className="w-4 h-4 lg:w-6 lg:h-6 fill-current text-gray-600 stroke-current " alt="" />
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
                                    <img className="w-14" src="./images/med-3.jpg" alt="" />
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
                                        <span className="text-xs text-black">متجر الأمين</span>
                                        <span className="text-xs text-gray-500 leading-5 mt-2">مرحبا ليث, تم استلام طلبك سيتم إعلامك بكل تغيير يحصل على الطلب</span>
                                    </div>
                                    <div className="flex flex-col h-full justify-between items-center">
                                        <span className="text-xs text-gray-700">رقم الطلب</span>
                                        <span className="text-xs border-gray-300 border-2 text-gray-700 mt-2  rounded text-center w-20 py-0.5">#321422</span>
                                    </div>
                                    <div className="absolute top-2 left-5">
                                    </div>
                                </div>
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
                                    </div>
                                </div>
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
                                    </div>
                                </div>
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
                            </div>
                            <div className="col-span-12 py-2  border-t-2 flex flex-col justify-between items-center">
                                <div className="flex flex-row w-full justify-center cursor-pointer items-center px-5">
                                    <span className="font-bold text-gray-700 text-center text-sm">جميع الرسائل</span>
                                </div>
                            </div>
                        </div>
                        {localStorage.getItem('token')?
                        <button onClick={togglemessages} className={`ml-3 w-8 md:w-10 h-6  md:h-8 lg:h-10 lg:w-10 bg-gray-300 focus:outline-none hover:bg-gray-400 rounded-full flex items-center justify-center ${Loading?"skeleton-box":""}`}>
                            <div style={Loading?{opacity:"0"}:{}}>
                                <svg className="w-4 h-4 lg:w-6 lg:h-6 fill-current text-gray-600 stroke-current " xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                            </div>
                        </button>
                        :
                        <></>
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
                                    <img className="w-14" src="./images/med-3.jpg" alt="" />
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
                       
                            <button onClick={togglenotifications} className={`relative ml-3 w-8 md:w-10 h-6  md:h-8 lg:h-10 lg:w-10 bg-gray-300 focus:outline-none hover:bg-gray-400 rounded-full flex items-center justify-center ${Loading?"skeleton-box":""}`}>
                            <div style={Loading?{opacity:"0"}:{}}>
                                <svg  className="w-4 h-4 lg:w-6 lg:h-6 fill-current text-gray-600 stroke-current "  xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path></svg>
                                <div className="absolute top-0 right-0 w-5 sm:w-6 h-1 sm:h-2 text-white -mr-2 rounded-full bg-red-400">
                                    3
                                </div>
                            </div>
                        </button>
                        </>
                        :
                        <></>    
                    }
                        {/* <div ref={cartRef} id="carts" className={cart?"cart hidden  w-96 shadow-2xl bg-white rounded absolute left-20 -bottom-2 transform translate-y-full ":"cart hidden w-96 shadow-2xl bg-white rounded absolute  left-20 bottom-0 transform translate-y-full"}>
                            <div className="grid grid-cols-12 shadow-md 2xl:shadow-lg">
                                <div className="col-span-12 flex justify-between items-center  py-2">
                                    <span className="px-5">السلة</span>
                                    <span className="mx-4 rounded bg-yellow-500 px-2 text-sm text-white">{Cart} منتجات</span>
                                </div>
                            </div>
                            <div className="scrolls h-90 overflow-y-scroll">
                                <div className="hidden col-span-12 border-t-2 px-2 py-2  justify-between relative items-center">
                                    <img className="w-14" src="./images/med-3.jpg" alt="" />
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
                                <div className="col-span-12  px-5 py-3 flex justify-between relative items-center" style={{borderTop:"1px solid #dcdcdc"}}>
                                    <img className="w-14 rounded" src="./images/med-1.jpeg" alt="" />
                                    <div className="flex  flex-col justify-between items-start">
                                        <span className="text-sm text-black">المنتج الأول</span>
                                        <span className="text-xs text-gray-500">من غوغل</span>
                                    </div>
                                    <div className="z-50  transition-all flex flex-row justify-between  items-center  rounded-md w-24 border-2 h-6 ">
                                        <span className="text-xs cursor-pointer  font-bold px-2  h-2/3 flex justify-center text-gray-700 border-l-2 items-center">-</span>
                                        <span className="block rounded text-xs font-bold text-gray-700">1</span>
                                        <span className="text-xs cursor-pointer font-bold  text-gray-700  h-2/3 flex justify-center items-center px-2 border-r-2">+</span>
                                    </div>
                                    <span className="text-md numbers">1200</span>
                                    <div className="absolute top-2 left-5">
                                        <img src="./images/x.svg" className="w-2" alt="" />
                                    </div>
                                </div>
                                <div className="col-span-12  px-5 py-3 flex justify-between relative items-center" style={{borderTop:"1px solid #dcdcdc"}}>
                                    <img className="w-14 rounded" src="./images/med-1.jpeg" alt="" />
                                    <div className="flex  flex-col justify-between items-start">
                                        <span className="text-sm text-black">المنتج الأول</span>
                                        <span className="text-xs text-gray-500">من غوغل</span>
                                    </div>
                                    <div className="z-50  transition-all flex flex-row justify-between  items-center  rounded-md w-24 border-2 h-6 ">
                                        <span className="text-xs cursor-pointer  font-bold px-2  h-2/3 flex justify-center text-gray-700 border-l-2 items-center">-</span>
                                        <span className="block rounded text-xs font-bold text-gray-700">1</span>
                                        <span className="text-xs cursor-pointer font-bold  text-gray-700  h-2/3 flex justify-center items-center px-2 border-r-2">+</span>
                                    </div>
                                    <span className="text-md numbers">1200</span>
                                    <div className="absolute top-2 left-5">
                                        <img src="./images/x.svg" className="w-2" alt="" />
                                    </div>
                                </div>
                                <div className="col-span-12  px-5 py-3 flex justify-between relative items-center" style={{borderTop:"1px solid #dcdcdc"}}>
                                    <img className="w-14 rounded" src="./images/med-1.jpeg" alt="" />
                                    <div className="flex  flex-col justify-between items-start">
                                        <span className="text-sm text-black">المنتج الأول</span>
                                        <span className="text-xs text-gray-500">من غوغل</span>
                                    </div>
                                    <div className="z-50  transition-all flex flex-row justify-between  items-center  rounded-md w-24 border-2 h-6 ">
                                        <span className="text-xs cursor-pointer  font-bold px-2  h-2/3 flex justify-center text-gray-700 border-l-2 items-center">-</span>
                                        <span className="block rounded text-xs font-bold text-gray-700">1</span>
                                        <span className="text-xs cursor-pointer font-bold  text-gray-700  h-2/3 flex justify-center items-center px-2 border-r-2">+</span>
                                    </div>
                                    <span className="text-md numbers">1200</span>
                                    <div className="absolute top-2 left-5">
                                        <img src="./images/x.svg" className="w-2" alt="" />
                                    </div>
                                </div>
                                <div className="col-span-12  px-5 py-3 flex justify-between relative items-center" style={{borderTop:"1px solid #dcdcdc"}}>
                                    <img className="w-14 rounded" src="./images/med-1.jpeg" alt="" />
                                    <div className="flex  flex-col justify-between items-start">
                                        <span className="text-sm text-black">المنتج الأول</span>
                                        <span className="text-xs text-gray-500">من غوغل</span>
                                    </div>
                                    <div className="z-50  transition-all flex flex-row justify-between  items-center  rounded-md w-24 border-2 h-6 ">
                                        <span className="text-xs cursor-pointer  font-bold px-2  h-2/3 flex justify-center text-gray-700 border-l-2 items-center">-</span>
                                        <span className="block rounded text-xs font-bold text-gray-700">1</span>
                                        <span className="text-xs cursor-pointer font-bold  text-gray-700  h-2/3 flex justify-center items-center px-2 border-r-2">+</span>
                                    </div>
                                    <span className="text-md numbers">1200</span>
                                    <div className="absolute top-2 left-5">
                                        <img src="./images/x.svg" className="w-2" alt="" />
                                    </div>
                                </div>
                            </div>
                               
                            <div className="col-span-12 py-2  border-t-2 flex flex-col justify-between items-center">
                                <div className="flex flex-row w-full justify-between items-center px-5">
                                    <span>المجموع:</span>
                                    <span className="numbers">3600 ل.س</span>
                                </div>
                                <div className="rounded w-11/12  bg-yellow-500 text-white text-center py-1 mt-3">متابعة</div>
                            </div>
                        </div>
                     
                         */}
                      
                        
                        <div ref={profileRef} id="profile" className={profile?"cart hidden md:block w-80 shadow-2xl bg-white rounded absolute left-4  -bottom-2 transform translate-y-full ":"cart overflow-hidden hidden w-96 shadow-2xl bg-white rounded absolute  left-60 bottom-0 transform translate-y-full"}>
                            <div className="overflow-hidden">
                            <div className={menu==2?"px-2 py-2 slidesright":"px-2 py-2  slidesleft"}>
                                   <div className="hidden col-span-12 border-t-2 px-2 py-3  justify-between relative items-center">
                                       <img className="w-14" src="./images/med-3.jpg" alt="" />
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
                                       <div className="rounded-full  w-6 h-4  cursor-pointer" onClick={()=> setMenu(1)} style={{background:"url('./images/right-arrow.svg')",backgroundSize:"cover",backgroundPosition:"center"}}></div>
                                       <div className="flex  flex-col justify-between items-start mr-2">
                                           <span className="text-md text-black">إعدادات الحساب</span>
                                           {/* <span className="text-xs text-gray-500 mt-2">الرصيد : 500 ر.ل </span> */}
                                       </div>
                                   </div>
                                   <div className="col-span-12 rounded px-5 noti-hover py-3 flex justify-between relative items-center" style={{borderTop:"1px solid #dcdcdc"}} >
                                       <div className="w-2/3 flex justify-start relative items-center">
                                       <img src='./images/profile.svg' className=" w-10 h-6 "/>
                                           <div className="flex  flex-col justify-between items-start mr-2">
                                               <span className="text-xs text-black">المعلومات الأساسية</span>
                                           </div>
                                       </div>
                                      
                                   </div>
                                   <div className="col-span-12 rounded px-5 noti-hover py-3 flex justify-between relative items-center" >
                                       <div className="w-2/3 flex justify-start relative items-center">
                                           <img src='./images/password.svg' className=" w-10 h-6 "/>
                                           <div  className="flex  flex-col justify-between items-start mr-2">
                                               <span className="text-xs text-black">تغيير كلمة المرور</span>
                                           </div>
                                       </div>
                                      
                                   </div>
                                   <div className="col-span-12 rounded px-5 noti-hover py-3 flex justify-between relative items-center" >
                                       <div className="w-2/3 flex justify-start relative items-center">
                                       <img src='./images/shipping.svg' className="w-9 h-6 "/>
                                           <div className="flex  flex-col justify-between items-start mr-2">
                                               <span className="text-xs text-black">عناوين الشحن</span>
                                           </div>
                                       </div>
                                      
                                   </div>
                               </div>
                            <div className={menu==3?"px-2 py-2 slidesright":"px-2 py-2  slidesleft"}>
                                   <div className="hidden col-span-12 border-t-2 px-2 py-3  justify-between relative items-center">
                                       <img className="w-14" src="./images/med-3.jpg" alt="" />
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
                                       <div className="rounded-full  w-6 h-4  cursor-pointer" onClick={()=> setMenu(1)} style={{background:"url('./images/right-arrow.svg')",backgroundSize:"cover",backgroundPosition:"center"}}></div>
                                       <div className="flex  flex-col justify-between items-start mr-2">
                                           <span className="text-md text-black">المعاملات التجارية</span>
                                           {/* <span className="text-xs text-gray-500 mt-2">الرصيد : 500 ر.ل </span> */}
                                       </div>
                                   </div>
                                   <div className="col-span-12 rounded px-5 noti-hover py-3 flex justify-between relative items-center" style={{borderTop:"1px solid #dcdcdc"}} >
                                       <div className="w-2/3 flex justify-start relative items-center">
                                       <img src='./images/orders.svg' className=" w-10 h-6 "/>
                                           <div className="flex  flex-col justify-between items-start mr-2">
                                               <span className="text-xs text-black">الطلبات</span>
                                           </div>
                                       </div>
                                      
                                   </div>
                                   <div className="col-span-12 rounded px-5 noti-hover py-3 flex justify-between relative items-center"  >
                                       <div className="w-2/3 flex justify-start relative items-center">
                                       <img src='./images/bill.svg' className=" w-10 h-6 "/>
                                           <div className="flex  flex-col justify-between items-start mr-2">
                                               <span className="text-xs text-black">الفواتير</span>
                                           </div>
                                       </div>
                                      
                                   </div>
                                   <div className="col-span-12 rounded px-5 noti-hover py-3 flex justify-between relative items-center" >
                                       <div className="w-2/3 flex justify-start relative items-center">
                                           <img src='./images/payment.svg' className=" w-10 h-6 "/>
                                           <div  className="flex  flex-col justify-between items-start mr-2">
                                               <span className="text-xs text-black">طرق الدفع</span>
                                           </div>
                                       </div>
                                      
                                   </div>
                                   <div className="col-span-12 rounded px-5 noti-hover py-3 flex justify-between relative items-center" >
                                       <div className="w-2/3 flex justify-start relative items-center">
                                       <img src='./images/wallet.svg' className="w-9 h-6 "/>
                                           <div className="flex  flex-col justify-between items-start mr-2">
                                               <span className="text-xs text-black">المحفظة</span>
                                           </div>
                                       </div>
                                   </div>

                               </div> 
                            <div className={menu==1?"px-2 py-2 centered":"px-2 py-2  slideLeft"}>
                               <div className="hidden col-span-12 border-t-2 px-2 py-3  justify-between relative items-center">
                                   <img className="w-14" src="./images/med-3.jpg" alt="" />
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
                                   <div className="rounded-full w-10 h-8 " style={{background:"url('./images/user.jpg')",backgroundSize:"cover",backgroundPosition:"center"}}></div>
                                   <div className="flex  flex-col justify-between items-start mr-2">
                                       <span className="text-xs text-black">زين ابراهيم</span>
                                       <span className="text-xs text-gray-500 mt-2">الرصيد : 500 ر.ل </span>
                                   </div>
                               </div>
                               <div onClick={()=>setMenu(2)} className="col-span-12 rounded px-5 noti-hover py-3 flex justify-between relative items-center" style={{borderTop:"1px solid #dcdcdc"}}>
                                   <div   className="w-2/3 flex justify-start relative items-center">
                                       <img src='./images/setting.svg' className="w-7 h-8"/>
                                       <div className="flex  flex-col justify-between items-start mr-2">
                                           <span className="text-xs text-black">إعدادات الحساب</span>
                                       </div>
                                   </div>
                                   <div className="arrow">
                                       <img className="w-4 relative" src="./images/left-arrow.svg" alt="" />
                                   </div>
                               </div>
                               <div onClick={()=>setMenu(3)} className="col-span-12 rounded px-5 noti-hover py-3 flex justify-between relative items-center" >
                                   <div className="w-2/3 flex justify-start relative items-center">
                                    <img src='./images/cashier.svg' className="w-7 h-8"/>
                                       <div  className="flex  flex-col justify-between items-start mr-2">
                                           <span className="text-xs text-black">المعاملات التجارية</span>
                                       </div>
                                   </div>
                                   <div className="arrow">
                                       <img className="w-4 relative" src="./images/left-arrow.svg" alt="" />
                                   </div>
                               </div>
                               <div className="col-span-12  rounded px-5 noti-hover py-3 flex justify-between relative items-center" >
                                   <div className="w-full flex justify-start relative items-center">
                                   <img src='./images/support.svg' className="w-7 h-8"/>
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
                               <img src='./images/logout.svg' className="w-7 h-8"/>
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
                            <div onClick={toggleprofile} className={`hidden ml-3 cursor-pointer w-8 md:w-10 h-6  md:h-8 lg:h-10 lg:w-10 focus:outline-none hover:bg-gray-400 rounded-full md:flex items-center justify-center ${Loading?"skeleton-box":""}`}  style={Loading?{}:{background:"url('./images/user.jpg')",backgroundSize:"cover",backgroundPosition:"center"}}>
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