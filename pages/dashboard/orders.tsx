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
export default function Orders() {
    interface Data{

    }
    const [heightt,setHeightt] = useState(0);
    const [anything,setAny] = useState(0);
    const [data,setData] = useState<Data>();
    
    useEffect(()=>{
        fetch(`https://amanacart.com/api/dashboard/orders`,{
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }})
         .then(res => res.json())
         .then(result =>{
            setData(result.data)
            console.log(result);
         })
         .catch(e => {
           console.log(e);
       });
    },[])
    useEffect(() => {   
        const height = document.querySelector('#height').clientHeight;
        if(anything<100){
            setAny(anything+1);
        }
        setHeightt(height)

        
    },[anything])
    

    return (
        <div className="grid grid-cols-10 gap-2 mt-12" dir="rtl">
                <div className="col-span-5 lg:col-span-2">
                <div className="w-full bg-white shadow flex justify-between py-6 p-3 items-center">
                    <div className=" bg-gray-200 flex justify-start items-center  p-1 lg:p-2 rounded ">
                        <svg className="w-4 h-4 lg:w-auto lg:h-auto"  xmlns="http://www.w3.org/2000/svg" width="35.95" height="43.347" viewBox="0 0 35.95 43.347">
                            <g id="Group_5287" data-name="Group 5287" transform="translate(0)">
                                <path id="Path_337" data-name="Path 337" d="M74.976,248.645a12.061,12.061,0,0,0-.036-1.251,3.825,3.825,0,0,0-2.488-3.272,3.932,3.932,0,0,0-1.284-.237c-.1,0-.194,0-.295,0s-.187,0-.28,0c-1.244-.014-2.492,0-3.74,0-.234,0-.467-.032-.748-.058a3.183,3.183,0,0,0-2.114-3.585H50.12l-.054.022a3.184,3.184,0,0,0-2.057,3.56c-.309.022-.565.061-.82.061-1.215.007-2.435-.011-3.65,0-.093,0-.187,0-.28,0-.133,0-.266,0-.4,0a3.921,3.921,0,0,0-2.079.629l-.1.065A3.268,3.268,0,0,0,39.469,246c-.018.036-.036.076-.054.111s-.032.083-.05.126a4.031,4.031,0,0,0-.291,1.154l-.011.14c-.032.367-.029.737-.029,1.111q-.005,11.732,0,23.471v6.548a8.25,8.25,0,0,0,.245,2.309c.37,1.223,1.208,1.874,2.945,2.6H71.8c1.654-.7,2.492-1.327,2.88-2.452a7.609,7.609,0,0,0,.295-2.46V271.2Q74.98,259.916,74.976,248.645Zm-23.245-4.754h10.6v3.51h-10.6Zm19.7,35.158c-.007.723-.237.928-.975.921-3.826-.022-7.652-.018-11.479-.018H55.112c-3.848,0-7.692,0-11.54.018-.759.007-.982-.209-.978-.978v-.011q.016-6.246.018-12.5.005-9.057-.014-18.113a2.259,2.259,0,0,1,.025-.367V248a.6.6,0,0,1,.554-.579h1.187a.087.087,0,0,1,.043,0c.917.007,1.841,0,2.787,0h.795c.011.086.018.173.022.252a7.48,7.48,0,0,0,.011.816,2.735,2.735,0,0,0,1.356,2.19c.058.032.115.065.173.09a1.79,1.79,0,0,0,.173.076c.079.032.158.058.241.083a2.017,2.017,0,0,0,.255.058c.086.018.176.029.266.04s.18.011.273.011q6.279.022,12.565,0h.029a2.705,2.705,0,0,0,2.747-2.546c.029-.313,0-.633,0-1.068h.737c.946,0,1.87.011,2.791,0a.1.1,0,0,1,.047,0h1.169c.471.072.583.381.583.953q-.011,7.023-.014,14.043v4q0,1.359,0,2.715,0,2.228,0,4.448.005,2.708.011,5.412Z" transform="translate(-39.03 -240.23)" fill="#4791ff"/>
                                <path id="Path_338" data-name="Path 338" d="M73.314,302.531a1.951,1.951,0,0,1-2.128,2.067c-1.034.008-2.063.012-3.1.012-2.262.008-4.524,0-6.781-.012a1.99,1.99,0,0,1-2.169-2.039,1.892,1.892,0,0,1,1.532-1.865,2.948,2.948,0,0,1,.616-.073c1.666-.02,3.332-.008,4.994-.008,1.629,0,3.255-.012,4.884,0C72.515,300.638,73.285,301.339,73.314,302.531Z" transform="translate(-52.402 -279.143)" fill="#4791ff"/>
                                <path id="Path_339" data-name="Path 339" d="M101.394,282.409c.012,1.265-.8,2.019-2.266,2.047-1.265.024-2.529,0-3.794,0s-2.529.02-3.8,0a2.047,2.047,0,1,1,.053-4.053q3.739-.024,7.483,0C100.514,280.41,101.378,281.18,101.394,282.409Z" transform="translate(-72.162 -266.116)" fill="#4791ff"/>
                                <path id="Path_340" data-name="Path 340" d="M66.326,322.636a2.043,2.043,0,0,1-2.1,1.986q-.128.012-.255.012c-1.265.012-2.533,0-3.794,0s-2.533.016-3.8,0a1.973,1.973,0,0,1-2.213-1.99,2.017,2.017,0,0,1,2.266-2.059q3.362-.024,6.729,0c.288,0,.576,0,.863,0A2.078,2.078,0,0,1,66.326,322.636Z" transform="translate(-49.022 -292.013)" fill="#4791ff"/>
                                <path id="Path_341" data-name="Path 341" d="M67.21,282.359a1.92,1.92,0,0,1-1.909,2.063c-.272.02-.539.028-.811.028-.178,0-.357,0-.535-.008-.041,0-.081,0-.118,0-.142,0-.276,0-.418,0-.045,0-.093,0-.142,0h-.146c-.105,0-.211,0-.316,0-.158,0-.316,0-.474.008-.292.008-.58.008-.871,0-.13,0-.263-.012-.4-.02a1.99,1.99,0,0,1-1.933-2.063,1.963,1.963,0,0,1,1.929-1.958c1.407-.065,2.821-.061,4.228,0A1.936,1.936,0,0,1,67.21,282.359Z" transform="translate(-52.136 -266.093)" fill="#4791ff"/>
                            </g>
                        </svg>
                    </div>
                    <div className="flex flex-col justify-between items-start ">
                        <span className="text-sm lg:text-lg text-gray-500">
                            Total Tasks
                        </span>
                        <span className="text-lg lg:text-4xl text-black numbers" style={{fontWeight:"bold"}}>
                            34
                        </span>
                    </div>
                    <div className="flex flex-col justify-between items-end lg:ml-2">
                        <span className="text-xs lg:text-sm  text-red-500">
                            -25%
                        </span>
                    </div>
                </div>
            </div>
                <div className="col-span-5 lg:col-span-2">
                    <div className="w-full bg-white shadow flex justify-between py-6 p-3 items-center">
                        <div className=" bg-gray-200 flex justify-start items-center  p-1 lg:p-2 rounded ">
                            <svg className="w-4 h-4 lg:w-auto lg:h-auto"  xmlns="http://www.w3.org/2000/svg" width="35.95" height="43.347" viewBox="0 0 35.95 43.347">
                                <g id="Group_5287" data-name="Group 5287" transform="translate(0)">
                                    <path id="Path_337" data-name="Path 337" d="M74.976,248.645a12.061,12.061,0,0,0-.036-1.251,3.825,3.825,0,0,0-2.488-3.272,3.932,3.932,0,0,0-1.284-.237c-.1,0-.194,0-.295,0s-.187,0-.28,0c-1.244-.014-2.492,0-3.74,0-.234,0-.467-.032-.748-.058a3.183,3.183,0,0,0-2.114-3.585H50.12l-.054.022a3.184,3.184,0,0,0-2.057,3.56c-.309.022-.565.061-.82.061-1.215.007-2.435-.011-3.65,0-.093,0-.187,0-.28,0-.133,0-.266,0-.4,0a3.921,3.921,0,0,0-2.079.629l-.1.065A3.268,3.268,0,0,0,39.469,246c-.018.036-.036.076-.054.111s-.032.083-.05.126a4.031,4.031,0,0,0-.291,1.154l-.011.14c-.032.367-.029.737-.029,1.111q-.005,11.732,0,23.471v6.548a8.25,8.25,0,0,0,.245,2.309c.37,1.223,1.208,1.874,2.945,2.6H71.8c1.654-.7,2.492-1.327,2.88-2.452a7.609,7.609,0,0,0,.295-2.46V271.2Q74.98,259.916,74.976,248.645Zm-23.245-4.754h10.6v3.51h-10.6Zm19.7,35.158c-.007.723-.237.928-.975.921-3.826-.022-7.652-.018-11.479-.018H55.112c-3.848,0-7.692,0-11.54.018-.759.007-.982-.209-.978-.978v-.011q.016-6.246.018-12.5.005-9.057-.014-18.113a2.259,2.259,0,0,1,.025-.367V248a.6.6,0,0,1,.554-.579h1.187a.087.087,0,0,1,.043,0c.917.007,1.841,0,2.787,0h.795c.011.086.018.173.022.252a7.48,7.48,0,0,0,.011.816,2.735,2.735,0,0,0,1.356,2.19c.058.032.115.065.173.09a1.79,1.79,0,0,0,.173.076c.079.032.158.058.241.083a2.017,2.017,0,0,0,.255.058c.086.018.176.029.266.04s.18.011.273.011q6.279.022,12.565,0h.029a2.705,2.705,0,0,0,2.747-2.546c.029-.313,0-.633,0-1.068h.737c.946,0,1.87.011,2.791,0a.1.1,0,0,1,.047,0h1.169c.471.072.583.381.583.953q-.011,7.023-.014,14.043v4q0,1.359,0,2.715,0,2.228,0,4.448.005,2.708.011,5.412Z" transform="translate(-39.03 -240.23)" fill="#4791ff"/>
                                    <path id="Path_338" data-name="Path 338" d="M73.314,302.531a1.951,1.951,0,0,1-2.128,2.067c-1.034.008-2.063.012-3.1.012-2.262.008-4.524,0-6.781-.012a1.99,1.99,0,0,1-2.169-2.039,1.892,1.892,0,0,1,1.532-1.865,2.948,2.948,0,0,1,.616-.073c1.666-.02,3.332-.008,4.994-.008,1.629,0,3.255-.012,4.884,0C72.515,300.638,73.285,301.339,73.314,302.531Z" transform="translate(-52.402 -279.143)" fill="#4791ff"/>
                                    <path id="Path_339" data-name="Path 339" d="M101.394,282.409c.012,1.265-.8,2.019-2.266,2.047-1.265.024-2.529,0-3.794,0s-2.529.02-3.8,0a2.047,2.047,0,1,1,.053-4.053q3.739-.024,7.483,0C100.514,280.41,101.378,281.18,101.394,282.409Z" transform="translate(-72.162 -266.116)" fill="#4791ff"/>
                                    <path id="Path_340" data-name="Path 340" d="M66.326,322.636a2.043,2.043,0,0,1-2.1,1.986q-.128.012-.255.012c-1.265.012-2.533,0-3.794,0s-2.533.016-3.8,0a1.973,1.973,0,0,1-2.213-1.99,2.017,2.017,0,0,1,2.266-2.059q3.362-.024,6.729,0c.288,0,.576,0,.863,0A2.078,2.078,0,0,1,66.326,322.636Z" transform="translate(-49.022 -292.013)" fill="#4791ff"/>
                                    <path id="Path_341" data-name="Path 341" d="M67.21,282.359a1.92,1.92,0,0,1-1.909,2.063c-.272.02-.539.028-.811.028-.178,0-.357,0-.535-.008-.041,0-.081,0-.118,0-.142,0-.276,0-.418,0-.045,0-.093,0-.142,0h-.146c-.105,0-.211,0-.316,0-.158,0-.316,0-.474.008-.292.008-.58.008-.871,0-.13,0-.263-.012-.4-.02a1.99,1.99,0,0,1-1.933-2.063,1.963,1.963,0,0,1,1.929-1.958c1.407-.065,2.821-.061,4.228,0A1.936,1.936,0,0,1,67.21,282.359Z" transform="translate(-52.136 -266.093)" fill="#4791ff"/>
                                </g>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-between items-start ">
                            <span className="text-sm lg:text-lg text-gray-500">
                                Total Tasks
                            </span>
                            <span className="text-lg lg:text-4xl text-black numbers" style={{fontWeight:"bold"}}>
                                34
                            </span>
                        </div>
                        <div className="flex flex-col justify-between items-end lg:ml-2">
                            <span className="text-xs lg:text-sm  text-red-500">
                                -25%
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-span-5 lg:col-span-2">
                    <div className="w-full bg-white shadow flex justify-between py-6 p-3 items-center">
                        <div className=" bg-gray-200 flex justify-start items-center  p-1 lg:p-2 rounded ">
                            <svg className="w-4 h-4 lg:w-auto lg:h-auto"  xmlns="http://www.w3.org/2000/svg" width="35.95" height="43.347" viewBox="0 0 35.95 43.347">
                                <g id="Group_5287" data-name="Group 5287" transform="translate(0)">
                                    <path id="Path_337" data-name="Path 337" d="M74.976,248.645a12.061,12.061,0,0,0-.036-1.251,3.825,3.825,0,0,0-2.488-3.272,3.932,3.932,0,0,0-1.284-.237c-.1,0-.194,0-.295,0s-.187,0-.28,0c-1.244-.014-2.492,0-3.74,0-.234,0-.467-.032-.748-.058a3.183,3.183,0,0,0-2.114-3.585H50.12l-.054.022a3.184,3.184,0,0,0-2.057,3.56c-.309.022-.565.061-.82.061-1.215.007-2.435-.011-3.65,0-.093,0-.187,0-.28,0-.133,0-.266,0-.4,0a3.921,3.921,0,0,0-2.079.629l-.1.065A3.268,3.268,0,0,0,39.469,246c-.018.036-.036.076-.054.111s-.032.083-.05.126a4.031,4.031,0,0,0-.291,1.154l-.011.14c-.032.367-.029.737-.029,1.111q-.005,11.732,0,23.471v6.548a8.25,8.25,0,0,0,.245,2.309c.37,1.223,1.208,1.874,2.945,2.6H71.8c1.654-.7,2.492-1.327,2.88-2.452a7.609,7.609,0,0,0,.295-2.46V271.2Q74.98,259.916,74.976,248.645Zm-23.245-4.754h10.6v3.51h-10.6Zm19.7,35.158c-.007.723-.237.928-.975.921-3.826-.022-7.652-.018-11.479-.018H55.112c-3.848,0-7.692,0-11.54.018-.759.007-.982-.209-.978-.978v-.011q.016-6.246.018-12.5.005-9.057-.014-18.113a2.259,2.259,0,0,1,.025-.367V248a.6.6,0,0,1,.554-.579h1.187a.087.087,0,0,1,.043,0c.917.007,1.841,0,2.787,0h.795c.011.086.018.173.022.252a7.48,7.48,0,0,0,.011.816,2.735,2.735,0,0,0,1.356,2.19c.058.032.115.065.173.09a1.79,1.79,0,0,0,.173.076c.079.032.158.058.241.083a2.017,2.017,0,0,0,.255.058c.086.018.176.029.266.04s.18.011.273.011q6.279.022,12.565,0h.029a2.705,2.705,0,0,0,2.747-2.546c.029-.313,0-.633,0-1.068h.737c.946,0,1.87.011,2.791,0a.1.1,0,0,1,.047,0h1.169c.471.072.583.381.583.953q-.011,7.023-.014,14.043v4q0,1.359,0,2.715,0,2.228,0,4.448.005,2.708.011,5.412Z" transform="translate(-39.03 -240.23)" fill="#4791ff"/>
                                    <path id="Path_338" data-name="Path 338" d="M73.314,302.531a1.951,1.951,0,0,1-2.128,2.067c-1.034.008-2.063.012-3.1.012-2.262.008-4.524,0-6.781-.012a1.99,1.99,0,0,1-2.169-2.039,1.892,1.892,0,0,1,1.532-1.865,2.948,2.948,0,0,1,.616-.073c1.666-.02,3.332-.008,4.994-.008,1.629,0,3.255-.012,4.884,0C72.515,300.638,73.285,301.339,73.314,302.531Z" transform="translate(-52.402 -279.143)" fill="#4791ff"/>
                                    <path id="Path_339" data-name="Path 339" d="M101.394,282.409c.012,1.265-.8,2.019-2.266,2.047-1.265.024-2.529,0-3.794,0s-2.529.02-3.8,0a2.047,2.047,0,1,1,.053-4.053q3.739-.024,7.483,0C100.514,280.41,101.378,281.18,101.394,282.409Z" transform="translate(-72.162 -266.116)" fill="#4791ff"/>
                                    <path id="Path_340" data-name="Path 340" d="M66.326,322.636a2.043,2.043,0,0,1-2.1,1.986q-.128.012-.255.012c-1.265.012-2.533,0-3.794,0s-2.533.016-3.8,0a1.973,1.973,0,0,1-2.213-1.99,2.017,2.017,0,0,1,2.266-2.059q3.362-.024,6.729,0c.288,0,.576,0,.863,0A2.078,2.078,0,0,1,66.326,322.636Z" transform="translate(-49.022 -292.013)" fill="#4791ff"/>
                                    <path id="Path_341" data-name="Path 341" d="M67.21,282.359a1.92,1.92,0,0,1-1.909,2.063c-.272.02-.539.028-.811.028-.178,0-.357,0-.535-.008-.041,0-.081,0-.118,0-.142,0-.276,0-.418,0-.045,0-.093,0-.142,0h-.146c-.105,0-.211,0-.316,0-.158,0-.316,0-.474.008-.292.008-.58.008-.871,0-.13,0-.263-.012-.4-.02a1.99,1.99,0,0,1-1.933-2.063,1.963,1.963,0,0,1,1.929-1.958c1.407-.065,2.821-.061,4.228,0A1.936,1.936,0,0,1,67.21,282.359Z" transform="translate(-52.136 -266.093)" fill="#4791ff"/>
                                </g>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-between items-start ">
                            <span className="text-sm lg:text-lg text-gray-500">
                                Total Tasks
                            </span>
                            <span className="text-lg lg:text-4xl text-black numbers" style={{fontWeight:"bold"}}>
                                34
                            </span>
                        </div>
                        <div className="flex flex-col justify-between items-end lg:ml-2">
                            <span className="text-xs lg:text-sm  text-red-500">
                                -25%
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-span-5 lg:col-span-2">
                    <div className="w-full bg-white shadow flex justify-between py-6 p-3 items-center">
                        <div className=" bg-gray-200 flex justify-start items-center  p-1 lg:p-2 rounded ">
                            <svg className="w-4 h-4 lg:w-auto lg:h-auto"  xmlns="http://www.w3.org/2000/svg" width="35.95" height="43.347" viewBox="0 0 35.95 43.347">
                                <g id="Group_5287" data-name="Group 5287" transform="translate(0)">
                                    <path id="Path_337" data-name="Path 337" d="M74.976,248.645a12.061,12.061,0,0,0-.036-1.251,3.825,3.825,0,0,0-2.488-3.272,3.932,3.932,0,0,0-1.284-.237c-.1,0-.194,0-.295,0s-.187,0-.28,0c-1.244-.014-2.492,0-3.74,0-.234,0-.467-.032-.748-.058a3.183,3.183,0,0,0-2.114-3.585H50.12l-.054.022a3.184,3.184,0,0,0-2.057,3.56c-.309.022-.565.061-.82.061-1.215.007-2.435-.011-3.65,0-.093,0-.187,0-.28,0-.133,0-.266,0-.4,0a3.921,3.921,0,0,0-2.079.629l-.1.065A3.268,3.268,0,0,0,39.469,246c-.018.036-.036.076-.054.111s-.032.083-.05.126a4.031,4.031,0,0,0-.291,1.154l-.011.14c-.032.367-.029.737-.029,1.111q-.005,11.732,0,23.471v6.548a8.25,8.25,0,0,0,.245,2.309c.37,1.223,1.208,1.874,2.945,2.6H71.8c1.654-.7,2.492-1.327,2.88-2.452a7.609,7.609,0,0,0,.295-2.46V271.2Q74.98,259.916,74.976,248.645Zm-23.245-4.754h10.6v3.51h-10.6Zm19.7,35.158c-.007.723-.237.928-.975.921-3.826-.022-7.652-.018-11.479-.018H55.112c-3.848,0-7.692,0-11.54.018-.759.007-.982-.209-.978-.978v-.011q.016-6.246.018-12.5.005-9.057-.014-18.113a2.259,2.259,0,0,1,.025-.367V248a.6.6,0,0,1,.554-.579h1.187a.087.087,0,0,1,.043,0c.917.007,1.841,0,2.787,0h.795c.011.086.018.173.022.252a7.48,7.48,0,0,0,.011.816,2.735,2.735,0,0,0,1.356,2.19c.058.032.115.065.173.09a1.79,1.79,0,0,0,.173.076c.079.032.158.058.241.083a2.017,2.017,0,0,0,.255.058c.086.018.176.029.266.04s.18.011.273.011q6.279.022,12.565,0h.029a2.705,2.705,0,0,0,2.747-2.546c.029-.313,0-.633,0-1.068h.737c.946,0,1.87.011,2.791,0a.1.1,0,0,1,.047,0h1.169c.471.072.583.381.583.953q-.011,7.023-.014,14.043v4q0,1.359,0,2.715,0,2.228,0,4.448.005,2.708.011,5.412Z" transform="translate(-39.03 -240.23)" fill="#4791ff"/>
                                    <path id="Path_338" data-name="Path 338" d="M73.314,302.531a1.951,1.951,0,0,1-2.128,2.067c-1.034.008-2.063.012-3.1.012-2.262.008-4.524,0-6.781-.012a1.99,1.99,0,0,1-2.169-2.039,1.892,1.892,0,0,1,1.532-1.865,2.948,2.948,0,0,1,.616-.073c1.666-.02,3.332-.008,4.994-.008,1.629,0,3.255-.012,4.884,0C72.515,300.638,73.285,301.339,73.314,302.531Z" transform="translate(-52.402 -279.143)" fill="#4791ff"/>
                                    <path id="Path_339" data-name="Path 339" d="M101.394,282.409c.012,1.265-.8,2.019-2.266,2.047-1.265.024-2.529,0-3.794,0s-2.529.02-3.8,0a2.047,2.047,0,1,1,.053-4.053q3.739-.024,7.483,0C100.514,280.41,101.378,281.18,101.394,282.409Z" transform="translate(-72.162 -266.116)" fill="#4791ff"/>
                                    <path id="Path_340" data-name="Path 340" d="M66.326,322.636a2.043,2.043,0,0,1-2.1,1.986q-.128.012-.255.012c-1.265.012-2.533,0-3.794,0s-2.533.016-3.8,0a1.973,1.973,0,0,1-2.213-1.99,2.017,2.017,0,0,1,2.266-2.059q3.362-.024,6.729,0c.288,0,.576,0,.863,0A2.078,2.078,0,0,1,66.326,322.636Z" transform="translate(-49.022 -292.013)" fill="#4791ff"/>
                                    <path id="Path_341" data-name="Path 341" d="M67.21,282.359a1.92,1.92,0,0,1-1.909,2.063c-.272.02-.539.028-.811.028-.178,0-.357,0-.535-.008-.041,0-.081,0-.118,0-.142,0-.276,0-.418,0-.045,0-.093,0-.142,0h-.146c-.105,0-.211,0-.316,0-.158,0-.316,0-.474.008-.292.008-.58.008-.871,0-.13,0-.263-.012-.4-.02a1.99,1.99,0,0,1-1.933-2.063,1.963,1.963,0,0,1,1.929-1.958c1.407-.065,2.821-.061,4.228,0A1.936,1.936,0,0,1,67.21,282.359Z" transform="translate(-52.136 -266.093)" fill="#4791ff"/>
                                </g>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-between items-start ">
                            <span className="text-sm lg:text-lg text-gray-500">
                                Total Tasks
                            </span>
                            <span className="text-lg lg:text-4xl text-black numbers" style={{fontWeight:"bold"}}>
                                34
                            </span>
                        </div>
                        <div className="flex flex-col justify-between items-end lg:ml-2">
                            <span className="text-xs lg:text-sm  text-red-500">
                                -25%
                            </span>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block lg:col-span-2">
                <div className="w-full bg-white shadow flex justify-between py-6 p-3 items-center">
                    <div className="bg-gray-200 flex justify-start items-center  p-2 rounded ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35.95" height="43.347" viewBox="0 0 35.95 43.347">
                            <g id="Group_5287" data-name="Group 5287" transform="translate(0)">
                                <path id="Path_337" data-name="Path 337" d="M74.976,248.645a12.061,12.061,0,0,0-.036-1.251,3.825,3.825,0,0,0-2.488-3.272,3.932,3.932,0,0,0-1.284-.237c-.1,0-.194,0-.295,0s-.187,0-.28,0c-1.244-.014-2.492,0-3.74,0-.234,0-.467-.032-.748-.058a3.183,3.183,0,0,0-2.114-3.585H50.12l-.054.022a3.184,3.184,0,0,0-2.057,3.56c-.309.022-.565.061-.82.061-1.215.007-2.435-.011-3.65,0-.093,0-.187,0-.28,0-.133,0-.266,0-.4,0a3.921,3.921,0,0,0-2.079.629l-.1.065A3.268,3.268,0,0,0,39.469,246c-.018.036-.036.076-.054.111s-.032.083-.05.126a4.031,4.031,0,0,0-.291,1.154l-.011.14c-.032.367-.029.737-.029,1.111q-.005,11.732,0,23.471v6.548a8.25,8.25,0,0,0,.245,2.309c.37,1.223,1.208,1.874,2.945,2.6H71.8c1.654-.7,2.492-1.327,2.88-2.452a7.609,7.609,0,0,0,.295-2.46V271.2Q74.98,259.916,74.976,248.645Zm-23.245-4.754h10.6v3.51h-10.6Zm19.7,35.158c-.007.723-.237.928-.975.921-3.826-.022-7.652-.018-11.479-.018H55.112c-3.848,0-7.692,0-11.54.018-.759.007-.982-.209-.978-.978v-.011q.016-6.246.018-12.5.005-9.057-.014-18.113a2.259,2.259,0,0,1,.025-.367V248a.6.6,0,0,1,.554-.579h1.187a.087.087,0,0,1,.043,0c.917.007,1.841,0,2.787,0h.795c.011.086.018.173.022.252a7.48,7.48,0,0,0,.011.816,2.735,2.735,0,0,0,1.356,2.19c.058.032.115.065.173.09a1.79,1.79,0,0,0,.173.076c.079.032.158.058.241.083a2.017,2.017,0,0,0,.255.058c.086.018.176.029.266.04s.18.011.273.011q6.279.022,12.565,0h.029a2.705,2.705,0,0,0,2.747-2.546c.029-.313,0-.633,0-1.068h.737c.946,0,1.87.011,2.791,0a.1.1,0,0,1,.047,0h1.169c.471.072.583.381.583.953q-.011,7.023-.014,14.043v4q0,1.359,0,2.715,0,2.228,0,4.448.005,2.708.011,5.412Z" transform="translate(-39.03 -240.23)" fill="#4791ff"/>
                                <path id="Path_338" data-name="Path 338" d="M73.314,302.531a1.951,1.951,0,0,1-2.128,2.067c-1.034.008-2.063.012-3.1.012-2.262.008-4.524,0-6.781-.012a1.99,1.99,0,0,1-2.169-2.039,1.892,1.892,0,0,1,1.532-1.865,2.948,2.948,0,0,1,.616-.073c1.666-.02,3.332-.008,4.994-.008,1.629,0,3.255-.012,4.884,0C72.515,300.638,73.285,301.339,73.314,302.531Z" transform="translate(-52.402 -279.143)" fill="#4791ff"/>
                                <path id="Path_339" data-name="Path 339" d="M101.394,282.409c.012,1.265-.8,2.019-2.266,2.047-1.265.024-2.529,0-3.794,0s-2.529.02-3.8,0a2.047,2.047,0,1,1,.053-4.053q3.739-.024,7.483,0C100.514,280.41,101.378,281.18,101.394,282.409Z" transform="translate(-72.162 -266.116)" fill="#4791ff"/>
                                <path id="Path_340" data-name="Path 340" d="M66.326,322.636a2.043,2.043,0,0,1-2.1,1.986q-.128.012-.255.012c-1.265.012-2.533,0-3.794,0s-2.533.016-3.8,0a1.973,1.973,0,0,1-2.213-1.99,2.017,2.017,0,0,1,2.266-2.059q3.362-.024,6.729,0c.288,0,.576,0,.863,0A2.078,2.078,0,0,1,66.326,322.636Z" transform="translate(-49.022 -292.013)" fill="#4791ff"/>
                                <path id="Path_341" data-name="Path 341" d="M67.21,282.359a1.92,1.92,0,0,1-1.909,2.063c-.272.02-.539.028-.811.028-.178,0-.357,0-.535-.008-.041,0-.081,0-.118,0-.142,0-.276,0-.418,0-.045,0-.093,0-.142,0h-.146c-.105,0-.211,0-.316,0-.158,0-.316,0-.474.008-.292.008-.58.008-.871,0-.13,0-.263-.012-.4-.02a1.99,1.99,0,0,1-1.933-2.063,1.963,1.963,0,0,1,1.929-1.958c1.407-.065,2.821-.061,4.228,0A1.936,1.936,0,0,1,67.21,282.359Z" transform="translate(-52.136 -266.093)" fill="#4791ff"/>
                            </g>
                        </svg>
                    </div>
                    <div className="flex flex-col justify-between items-start ">
                        <span className="text-lg text-gray-500">
                            Total Tasks
                        </span>
                        <span className="text-4xl text-black numbers" style={{fontWeight:"bold"}}>
                            34
                        </span>
                    </div>
                    <div className="flex flex-col justify-between items-end ml-2">
                        <span className="text-sm text-gray-500 text-red-500">
                            -25%
                        </span>
                    </div>
                </div>
            </div>
       
                <div className="col-span-10 bg-white shadow rounded mt-4">
                    <div className="flex w-full justify-start items-center px-3 py-3">
                        <span className="text-lg">طلباتك</span>
                    </div>
                    <div className="rounded orders pb-3 lg-pb-0" >
                        <Swiper
                        spaceBetween={20}
                        slidesPerView={3.5}
                        draggable={true}
                        breakpoints={{
                            0:{
                                slidesPerView:2.5
                            },
                            1000:{
                                slidesPerView:3.5
                            }
                        }}
                    >
                        <SwiperSlide>
                            <div style={{height:heightt+'px'}} className={`absolute flex flex-col justify-center items-center rounded heights w-full h-full left-0 top-o bg-black bg-opacity-70 z-20`}>
                                <span className="rounded-full w-4 h-4 flex justify-center items-center absolute top-1 left-1 lg:top-2 lg:left-2  bg-white">
                                    x
                                </span>
                                <span className="text-xs lg:text-lg w-full px-1 lg:px-0 lg:w-1/2 text-white text-right">
                                    المنتج الأول بخصائص متعددة
                                </span>
                                <span className="text-md numbers lg:mt-4 text-white" style={{fontWeight:"bold"}}>1400$</span>
                                <span className="text-white text-xs lg:text-md bg-red-700 lg:py-2 rounded px-1 lg:px-3 lg:mt-3">اشتري الان</span>
                            </div>
                            <img id="height" src="/images/med-1.jpg" style={{background:"black"}} className="w-full rounded" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{height:heightt}} className={`absolute flex flex-col justify-center items-center rounded heights w-full h-full left-0 top-o bg-black bg-opacity-70 z-20`}>
                                <span className="rounded-full w-4 h-4 flex justify-center items-center absolute top-1 left-1 lg:top-2 lg:left-2  bg-white">
                                    x
                                </span>
                                <span className="text-xs lg:text-lg w-full px-1 lg:px-0 lg:w-1/2 text-white text-right">
                                    المنتج الأول بخصائص متعددة
                                </span>
                                <span className="text-md numbers lg:mt-4 text-white" style={{fontWeight:"bold"}}>1400$</span>
                                <span className="text-white text-xs lg:text-md bg-red-700 lg:py-2 rounded px-1 lg:px-3 lg:mt-3">اشتري الان</span>
                            </div>
                            <img  src="/images/med-1.jpg" style={{background:"black"}} className="w-full rounded" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{height:heightt}} className={`absolute flex flex-col justify-center items-center rounded heights w-full h-full left-0 top-o bg-black bg-opacity-70 z-20`}>
                                <span className="rounded-full w-4 h-4 flex justify-center items-center absolute top-1 left-1 lg:top-2 lg:left-2  bg-white">
                                    x
                                </span>
                                <span className="text-xs lg:text-lg w-full px-1 lg:px-0 lg:w-1/2 text-white text-right">
                                    المنتج الأول بخصائص متعددة
                                </span>
                                <span className="text-md numbers lg:mt-4 text-white" style={{fontWeight:"bold"}}>1400$</span>
                                <span className="text-white text-xs lg:text-md bg-red-700 lg:py-2 rounded px-1 lg:px-3 lg:mt-3">اشتري الان</span>
                            </div>
                            <img  src="/images/med-1.jpg" style={{background:"black"}} className="w-full rounded" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{height:heightt}} className={`absolute flex flex-col justify-center items-center rounded heights w-full h-full left-0 top-o bg-black bg-opacity-70 z-20`}>
                                <span className="rounded-full w-4 h-4 flex justify-center items-center absolute top-1 left-1 lg:top-2 lg:left-2  bg-white">
                                    x
                                </span>
                                <span className="text-xs lg:text-lg w-full px-1 lg:px-0 lg:w-1/2 text-white text-right">
                                    المنتج الأول بخصائص متعددة
                                </span>
                                <span className="text-md numbers lg:mt-4 text-white" style={{fontWeight:"bold"}}>1400$</span>
                                <span className="text-white text-xs lg:text-md bg-red-700 lg:py-2 rounded px-1 lg:px-3 lg:mt-3">اشتري الان</span>
                            </div>
                            <img  src="/images/med-1.jpg" style={{background:"black"}} className="w-full rounded" alt="" />
                        </SwiperSlide>
                    </Swiper>
                    </div>
                </div>
        </div>
    );
}