import React, { useEffect } from 'react';
import { useAppState } from '../../contexts/app/app.provider';

    export const SideBar = (props) => {

    const isDrawerOpen = useAppState('isDrawerOpen');

        return (
                <div id="ads" style={{width:props.width}} className="fixed  bg-white dark:bg-gray-800">
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
                            <ul className={isDrawerOpen?"flex flex-col justify-between items-center border-b-2 pb-2 w-11/12":"flex flex-col justify-between items-center  w-full"}>
                                    <li className={isDrawerOpen?"pt-2 pb-2 w-full flex flex-row justify-end items-center":"pt-2 text-xs pb-2 w-full flex flex-col-reverse justify-center items-center"}>
                                        {isDrawerOpen?
                                            "الصفحة الرئيسية":"الرئيسية"
                                        }
                                        <svg className={isDrawerOpen?"ml-3 w-5":"w-5"} xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                        </svg>
                                    </li>
                                    <li className={isDrawerOpen?"pt-2 pb-2 w-full flex flex-row justify-end items-center":"pt-2 text-xs pb-2 w-full flex flex-col-reverse justify-center items-center"}>
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
                                    <li className={isDrawerOpen?"pt-2 pb-2 w-full flex flex-row justify-end items-center":"pt-2 text-xs pb-2 w-full flex flex-col-reverse justify-center items-center"}>
                                    التصنيفات
                                    <svg className={isDrawerOpen?"ml-3 w-5":"w-5"} xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                        <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                    </svg>
                                    </li>
                                    )
                                    }
                                       {isDrawerOpen?
                                    "":(
                                    <li className={isDrawerOpen?"pt-2 pb-2 w-full flex flex-row justify-end items-center":"pt-2 text-xs pb-2 w-full flex flex-col-reverse justify-center items-center"}>
                                    التصنيفات
                                    <svg className={isDrawerOpen?"ml-3 w-5":"w-5"} xmlns="http://www.w3.org/2000/svg" width="30.259" height="23.53" viewBox="0 0 30.259 23.53">
                                        <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M14.727,8.358,5.042,16.334v8.609a.84.84,0,0,0,.84.84l5.886-.015a.84.84,0,0,0,.836-.84V19.9a.84.84,0,0,1,.84-.84h3.362a.84.84,0,0,1,.84.84v5.024a.84.84,0,0,0,.84.843l5.884.016a.84.84,0,0,0,.84-.84V16.328L15.531,8.358A.64.64,0,0,0,14.727,8.358Zm15.3,5.421-4.391-3.62V2.884a.63.63,0,0,0-.63-.63H22.062a.63.63,0,0,0-.63.63V6.7l-4.7-3.869a2.521,2.521,0,0,0-3.2,0L.228,13.779a.63.63,0,0,0-.084.888L1.483,16.3a.63.63,0,0,0,.888.086L14.727,6.2a.64.64,0,0,1,.8,0L27.887,16.381a.63.63,0,0,0,.888-.084l1.339-1.628a.63.63,0,0,0-.089-.889Z" transform="translate(0.001 -2.254)" fill="#2c2c2c"/>
                                    </svg>
                                    </li>
                                    )
                                    }
                                </ul>
                            <div className={isDrawerOpen?"scroll w-full h-9/12 overflow-y-scroll":"hidden scroll w-full h-9/12 overflow-y-scroll"}>
                                <div className="ul  mt-2 ltr  border-b-2 pb-2 w-11/12">
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
                        </nav>
                    </div>
                </div>
            </div>   
           
             )
}
