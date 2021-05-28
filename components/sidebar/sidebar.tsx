import React, { useEffect, useState } from 'react';
import { useAppState } from '../../contexts/app/app.provider';

    export const SideBar = (props) => {

    const isDrawerOpen = useAppState('isDrawerOpen');
    const [shown,setShown] = useState(1);
    const toggleAccordoin = (event) => {
        
        
        if(event.currentTarget.children[1].classList.contains('block')){
           


            event.currentTarget.children[1].classList.remove('block');
            event.currentTarget.children[1].classList.add('hidden');
            event.currentTarget.classList.add('max-h-11');
            event.currentTarget.classList.remove('max-h-96');

            
            
        }
        else{
            var items = document.getElementsByClassName('items');

            for(var i = 0; i < items.length; i++)
                {
                    items[i].children[1].classList.remove('block');
                    items[i].children[1].classList.add('hidden');
                    items[i].classList.add('max-h-11');
                    items[i].classList.remove('max-h-96');
                }
            
            event.currentTarget.children[1].classList.remove('hidden');
            event.currentTarget.children[1].classList.add('block');
            event.currentTarget.classList.add('max-h-96');
            event.currentTarget.classList.remove('max-h-11');
        }
    }
    return (
            <div id="ads" style={{width:props.width}} className="fixed overflow-x-hidden bg-white dark:bg-gray-800  z-10">
            <div className="flex flex-col  sm:justify-around">
                <div className={isDrawerOpen?"w-full h-screen shadow":"w-full h-screen shadow flex items-center"}>
                    <nav className={isDrawerOpen?" pr-6 h-full flex flex-col items-end":"sticky top-0 w-full h-full flex flex-col items-end"}>
                        <div className="logo  flex items-center ">
                            <div className="w-2/12" />
                            <div  className="hamburger sm:w-2/12 md:w-2/12 lg:w-3/12 xl:w-2/12 sm:h-4 md:h-4 lg:h-5 xl:h-4  flex flex-col sm:justify-between sm:items-center">
                                {/* <div className="line h-0.5 w-full rounded-2xl bg-black"></div>
                                <div className="line h-0.5 w-full rounded-2xl bg-black"></div>
                                <div className="line h-0.5 w-full rounded-2xl bg-black"></div> */}  
                            </div>
                        </div>
                        <ul  className={isDrawerOpen?"flex flex-col justify-between items-center border-b-2 pb-2 w-11/12":"flex flex-col justify-between items-center  w-full"}>
                                <li className={isDrawerOpen?"pt-2  pb-2 w-full flex flex-row justify-end items-center":"pt-2 small-hover text-xs pb-2 w-full flex flex-col-reverse justify-center items-center"}>
                                    {isDrawerOpen?
                                        "الصفحة الرئيسية":"الرئيسية"
                                    }
                                    <svg className={isDrawerOpen?"ml-3 w-5":"w-5"} xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                        <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                    </svg>
                                </li>
                                <li className={isDrawerOpen?"pt-2 pb-2  w-full flex flex-row justify-end items-center":"pt-2 text-xs small-hover pb-2 w-full flex flex-col-reverse justify-center items-center"}>
                                    استكشاف
                                    <svg className={isDrawerOpen?"ml-3 w-5":"w-5"} xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                        <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                    </svg>
                                </li>
                                {/* <li className="w-full flex flex-row justify-end items-center">
                                    <input type="text"  className="w-full bg-gray-300 rounded" name="" id="" />
                                </li>    */}
                                {isDrawerOpen?
                                "":(
                                <li className={isDrawerOpen?"pt-2 pb-2  w-full flex flex-row justify-end items-center":"pt-2 text-xs small-hover pb-2 w-full flex flex-col-reverse justify-center items-center"}>
                                التصنيفات
                                <svg className={isDrawerOpen?"ml-3 w-5":"w-5"} xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                    <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                </svg>
                                </li>
                                )
                                }
                                    {isDrawerOpen?
                                "":(
                                <li className={isDrawerOpen?"pt-2 pb-2  w-full flex flex-row justify-end items-center":"pt-2 text-xs small-hover pb-2 w-full flex flex-col-reverse justify-center items-center"}>
                                التصنيفات
                                <svg className={isDrawerOpen?"ml-3 w-5":"w-5"} xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                    <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                </svg>
                                </li>
                                )
                                }
                            </ul>
                        <div className={isDrawerOpen?"scroll w-full h-9/12 overflow-y-scroll overflow-x-hidden":"hidden scroll overflow-x-hidden w-full h-9/12 overflow-y-scroll"}>
                            <div className="ul  mt-2 ltr  border-b-2 pb-2 w-11/12">
                                {shown==1?
                                
                                <ul className="centered flex h-full flex-col justify-between items-center">
                                    <li className="text-gray-400 w-full flex flex-row pb-2 justify-end items-center text-sm">
                                        تصنيفات
                                    </li>
                                    <li onClick={()=>setShown(2)} className="w-full flex flex-row pt-2 pb-2 px-3 justify-end items-center text-sm hover-side">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm hover-side px-3">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm hover-side px-3">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm hover-side px-3">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm hover-side px-3">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm hover-side px-3">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm hover-side px-3">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm hover-side px-3">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm hover-side px-3">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                </ul>
                                :
                                <ul className=" slideLeft flex h-full flex-col justify-between items-center">
                                        <li className="text-gray-400 w-full flex flex-row pb-2 justify-end items-center text-sm">
                                            تصنيفات
                                        </li>
                                        <li onClick={()=>setShown(2)} className="w-full flex flex-row pt-2 pb-2 px-3 justify-end items-center text-sm hover-side">
                                            ااستكشاف
                                            <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                                <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                            </svg>
                                        </li>
                                        <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm hover-side px-3">
                                            ااستكشاف
                                            <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                                <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                            </svg>
                                        </li>
                                        <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm hover-side px-3">
                                            ااستكشاف
                                            <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                                <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                            </svg>
                                        </li>
                                        <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm hover-side px-3">
                                            ااستكشاف
                                            <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                                <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                            </svg>
                                        </li>
                                        <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm hover-side px-3">
                                            ااستكشاف
                                            <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                                <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                            </svg>
                                        </li>
                                        <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm hover-side px-3">
                                            ااستكشاف
                                            <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                                <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                            </svg>
                                        </li>
                                        <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm hover-side px-3">
                                            ااستكشاف
                                            <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                                <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                            </svg>
                                        </li>
                                        <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm hover-side px-3">
                                            ااستكشاف
                                            <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                                <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                            </svg>
                                        </li>
                                        <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm hover-side px-3">
                                            ااستكشاف
                                            <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                                <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                            </svg>
                                        </li>
                                    </ul>
                                
                                }

                        {shown==2?
                            <ul className="slidesright flex h-full flex-col justify-between items-center">
                                    <li className="text-gray-400 w-full flex flex-row pb-2 justify-end items-center text-sm">
                                        الكترونيات
                                        <div className="rounded-full w-6 h-4 ml-2 cursor-pointer" onClick={()=> setShown(1)} style={{background:"url('./images/right-arrow.svg')",backgroundSize:"cover",backgroundPosition:"center"}}></div>
                                    </li>
                                    <li onClick={toggleAccordoin} className="duration-500 transition-all cursor-pointer w-full flex flex-col pt-2 pb-2 px-3 justify-start items-center text-sm hover-side items">
                                        <div className="flex justify-end items-center w-full">
                                            ااستكشاف
                                            <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                                <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                            </svg>
                                        </div>
                                        <div className="content w-full hidden">
                                            <ul className="flex h-full flex-col justify-between items-center">
                                                {/* <a href="/categories"> */}
                                                <li className="w-full flex flex-col pt-2 pb-2 px-3 justify-end items-center text-sm">
                                                    استكشاف
                                                </li>
                                                {/* </a> */}
                                                <li className="w-full flex flex-col pt-2 pb-2 px-3 justify-end items-center text-sm">
                                                    استكشاف
                                                </li>
                                                <li className="w-full flex flex-col pt-2 pb-2 px-3 justify-end items-center text-sm">
                                                    استكشاف
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li onClick={toggleAccordoin} className="duration-500 transition-all cursor-pointer w-full flex flex-col pt-2 pb-2 px-3 justify-start items-center text-sm hover-side items">
                                        <div className="flex justify-end items-center w-full">
                                            ااستكشاف
                                            <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                                <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                            </svg>
                                        </div>
                                        <div className="content w-full hidden">
                                            <ul className="flex h-full flex-col justify-between items-center">
                                                <li className="w-full flex flex-col pt-2 pb-2 px-3 justify-end items-center text-sm">
                                                    استكشاف
                                                </li>
                                                <li className="w-full flex flex-col pt-2 pb-2 px-3 justify-end items-center text-sm">
                                                    استكشاف
                                                </li>
                                                <li className="w-full flex flex-col pt-2 pb-2 px-3 justify-end items-center text-sm">
                                                    استكشاف
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li onClick={toggleAccordoin} className="duration-500 transition-all cursor-pointer w-full flex flex-col pt-2 pb-2 px-3 justify-start items-center text-sm hover-side items">
                                        <div className="flex justify-end items-center w-full">
                                            ااستكشاف
                                            <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                                <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                            </svg>
                                        </div>
                                        <div className="content w-full hidden">
                                            <ul className="flex h-full flex-col justify-between items-center">
                                                <li className="w-full flex flex-col pt-2 pb-2 px-3 justify-end items-center text-sm">
                                                    استكشاف
                                                </li>
                                                <li className="w-full flex flex-col pt-2 pb-2 px-3 justify-end items-center text-sm">
                                                    استكشاف
                                                </li>
                                                <li className="w-full flex flex-col pt-2 pb-2 px-3 justify-end items-center text-sm">
                                                    استكشاف
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li onClick={toggleAccordoin} className="duration-500 transition-all cursor-pointer w-full flex flex-col pt-2 pb-2 px-3 justify-start items-center text-sm hover-side items">
                                        <div className="flex justify-end items-center w-full">
                                            ااستكشاف
                                            <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                                <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                            </svg>
                                        </div>
                                        <div className="content w-full hidden">
                                            <ul className="flex h-full flex-col justify-between items-center">
                                                <li className="w-full flex flex-col pt-2 pb-2 px-3 justify-end items-center text-sm">
                                                    استكشاف
                                                </li>
                                                <li className="w-full flex flex-col pt-2 pb-2 px-3 justify-end items-center text-sm">
                                                    استكشاف
                                                </li>
                                                <li className="w-full flex flex-col pt-2 pb-2 px-3 justify-end items-center text-sm">
                                                    استكشاف
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li onClick={toggleAccordoin} className="duration-500 transition-all cursor-pointer w-full flex flex-col pt-2 pb-2 px-3 justify-start items-center text-sm hover-side items">
                                        <div className="flex justify-end items-center w-full">
                                            ااستكشاف
                                            <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                                <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                            </svg>
                                        </div>
                                        <div className="content w-full hidden">
                                            <ul className="flex h-full flex-col justify-between items-center">
                                                <li className="w-full flex flex-col pt-2 pb-2 px-3 justify-end items-center text-sm">
                                                    استكشاف
                                                </li>
                                                <li className="w-full flex flex-col pt-2 pb-2 px-3 justify-end items-center text-sm">
                                                    استكشاف
                                                </li>
                                                <li className="w-full flex flex-col pt-2 pb-2 px-3 justify-end items-center text-sm">
                                                    استكشاف
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li onClick={toggleAccordoin} className="duration-500 transition-all cursor-pointer w-full flex flex-col pt-2 pb-2 px-3 justify-start items-center text-sm hover-side items">
                                        <div className="flex justify-end items-center w-full">
                                            ااستكشاف
                                            <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                                <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                            </svg>
                                        </div>
                                        <div className="content w-full hidden">
                                            <ul className="flex h-full flex-col justify-between items-center">
                                                <li className="w-full flex flex-col pt-2 pb-2 px-3 justify-end items-center text-sm">
                                                    استكشاف
                                                </li>
                                                <li className="w-full flex flex-col pt-2 pb-2 px-3 justify-end items-center text-sm">
                                                    استكشاف
                                                </li>
                                                <li className="w-full flex flex-col pt-2 pb-2 px-3 justify-end items-center text-sm">
                                                    استكشاف
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li onClick={toggleAccordoin} className="duration-500 transition-all cursor-pointer w-full flex flex-col pt-2 pb-2 px-3 justify-start items-center text-sm hover-side items">
                                        <div className="flex justify-end items-center w-full">
                                            ااستكشاف
                                            <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                                <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                            </svg>
                                        </div>
                                        <div className="content w-full hidden">
                                            <ul className="flex h-full flex-col justify-between items-center">
                                                <li className="w-full flex flex-col pt-2 pb-2 px-3 justify-end items-center text-sm">
                                                    استكشاف
                                                </li>
                                                <li className="w-full flex flex-col pt-2 pb-2 px-3 justify-end items-center text-sm">
                                                    استكشاف
                                                </li>
                                                <li className="w-full flex flex-col pt-2 pb-2 px-3 justify-end items-center text-sm">
                                                    استكشاف
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li onClick={toggleAccordoin} className="duration-500 transition-all cursor-pointer w-full flex flex-col pt-2 pb-2 px-3 justify-start items-center text-sm hover-side items">
                                        <div className="flex justify-end items-center w-full">
                                            ااستكشاف
                                            <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                                <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                            </svg>
                                        </div>
                                        <div className="content w-full hidden">
                                            <ul className="flex h-full flex-col justify-between items-center">
                                                <li className="w-full flex flex-col pt-2 pb-2 px-3 justify-end items-center text-sm">
                                                    استكشاف
                                                </li>
                                                <li className="w-full flex flex-col pt-2 pb-2 px-3 justify-end items-center text-sm">
                                                    استكشاف
                                                </li>
                                                <li className="w-full flex flex-col pt-2 pb-2 px-3 justify-end items-center text-sm">
                                                    استكشاف
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li onClick={toggleAccordoin} className="duration-500 transition-all cursor-pointer w-full flex flex-col pt-2 pb-2 px-3 justify-start items-center text-sm hover-side items">
                                        <div className="flex justify-end items-center w-full">
                                            ااستكشاف
                                            <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                                <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                            </svg>
                                        </div>
                                        <div className="content w-full hidden">
                                            <ul className="flex h-full flex-col justify-between items-center">
                                                <li className="w-full flex flex-col pt-2 pb-2 px-3 justify-end items-center text-sm">
                                                    استكشاف
                                                </li>
                                                <li className="w-full flex flex-col pt-2 pb-2 px-3 justify-end items-center text-sm">
                                                    استكشاف
                                                </li>
                                                <li className="w-full flex flex-col pt-2 pb-2 px-3 justify-end items-center text-sm">
                                                    استكشاف
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            :
                            <ul className="slidesleft flex h-full flex-col justify-between items-center">
                                    <li className="text-gray-400 w-full flex flex-row pb-2 justify-end items-center text-sm">
                                        تصنيفات
                                    </li>
                                    <li onClick={()=>setShown(2)} className="w-full flex flex-row pt-2 pb-2 px-3 justify-end items-center text-sm hover-side items">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm hover-side px-3">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm hover-side px-3">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm hover-side px-3">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm hover-side px-3">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm hover-side px-3">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm hover-side px-3">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm hover-side px-3">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm hover-side px-3">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                </ul>
                               
                            }
                            </div>
                            <div className="ul  mt-2 ltr">
                                <ul className="flex h-full flex-col justify-between items-center">
                                    <li className="text-gray-400 w-full flex flex-row pb-2 justify-end items-center text-sm">
                                        تصنيفات
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className="w-full flex flex-row pt-2 pb-2 justify-end items-center text-sm">
                                        ااستكشاف
                                        <svg className="ml-3 w-5" xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* {shown?
                        <div className="hovered bg-white px-6 py-6 shadow rounded  absolute right-56 2xl:right-80 2xl:h-5/12 top-1/2 transform -translate-y-1/2 z-50" style={{width:"70vw"}}>
                        
                            <div className="grid grid-cols-12  h-full  2xl:top-1/2 2xl:relative 2xl:transform 2xl:-translate-y-1/2">
                                <div className="col-span-4 flex flex-col justify-between items-center ">
                                    <div className="flex flex-col justify-between items-center w-full ">
                                        <span className="text-sm 2xl:text-lg w-full text-right text-yellow-500">أفضل العلامات التجارية</span>
                                        <div className="grid grid-cols-12 w-full mt-4 gap-1">
                                            <div className="col-span-1"></div>
                                            <div className="col-span-5 flex flex-col justify-between items-center">
                                                <div style={{background:"url('./images/brands/ssssss.png')",backgroundPosition:"center",backgroundSize:"cover"}} className="w-full h-20 mt-1 rounded border-2"></div>
                                                <div style={{background:"url('./images/brands/ssssss.png')",backgroundPosition:"center",backgroundSize:"cover"}} className="w-full h-20 mt-1 rounded border-2"></div>
                                                <div style={{background:"url('./images/brands/ssssss.png')",backgroundPosition:"center",backgroundSize:"cover"}} className="w-full h-20 mt-1 rounded border-2"></div>
                                                <div style={{background:"url('./images/brands/ssssss.png')",backgroundPosition:"center",backgroundSize:"cover"}} className="w-full h-20 mt-1 rounded border-2"></div>
                                            </div>
                                            <div className="col-span-5 flex flex-col justify-between items-center">
                                                <div style={{background:"url('./images/brands/ssssss.png')",backgroundPosition:"center",backgroundSize:"cover"}} className="w-full h-20 mt-1 rounded border-2"></div>
                                                <div style={{background:"url('./images/brands/ssssss.png')",backgroundPosition:"center",backgroundSize:"cover"}} className="w-full h-20 mt-1 rounded border-2"></div>
                                                <div style={{background:"url('./images/brands/ssssss.png')",backgroundPosition:"center",backgroundSize:"cover"}} className="w-full h-20 mt-1 rounded border-2"></div>
                                                <div style={{background:"url('./images/brands/ssssss.png')",backgroundPosition:"center",backgroundSize:"cover"}} className="w-full h-20 mt-1 rounded border-2"></div>
                                            </div>
                                            <div className="col-span-1"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2  flex flex-col justify-between items-end">
                                    <div className="flex flex-col justify-between items-center">
                                        <span className="text-sm 2xl:text-lg w-full text-right text-yellow-500">الاهتمامات السابقة</span>
                                        <ul className="flex flex-col mt-3 w-full pr-3 justify-between items-end list-none">
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col justify-between items-end">
                                        <span className="text-sm 2xl:text-lg w-full text-right text-yellow-500">الاهتمامات السابقة</span>
                                        <ul className="flex flex-col mt-3 w-full pr-3 justify-between items-end list-none">
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-span-3  flex flex-col justify-between items-end">
                                <div className="flex flex-col justify-between items-center">
                                        <span className="text-sm 2xl:text-lg w-full text-right text-yellow-500">الاهتمامات السابقة</span>
                                        <ul className="flex flex-col mt-3 w-full pr-3 justify-between items-end list-none">
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col justify-between items-center">
                                        <span className="text-sm 2xl:text-lg w-full text-right text-yellow-500">الاهتمامات السابقة</span>
                                        <ul className="flex flex-col mt-3 w-full pr-3 justify-between items-end list-none">
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-span-3 flex flex-col justify-between items-end">
                                <div className="flex flex-col justify-between items-center">
                                        <span className="text-sm 2xl:text-lg w-full text-right text-yellow-500">الاهتمامات السابقة</span>
                                        <ul className="flex flex-col mt-3 w-full pr-3 justify-between items-end list-none">
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col justify-between items-center">
                                        <span className="text-sm 2xl:text-lg w-full text-right text-yellow-500">الاهتمامات السابقة</span>
                                        <ul className="flex flex-col mt-3 w-full pr-3 justify-between items-end list-none">
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                            <li className="text-xs 2xl:text-md mt-2">الكترونيات</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :""} */}
                    </nav>
                </div>
            </div>
        </div>   
        
        )
}
