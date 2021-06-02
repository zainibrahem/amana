import React, { useState,useEffect } from 'react';
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
import {CardTitle} from '../../components/cardTitle/cardTitle';

export default function Home() {
    return(
        <>
            <div className="grid grid-cols-12 bg-white rounded mt-12">
                <div className="col-span-4 flex flex-col justify-end items-center">
                    <div className="bg-gray-100 w-full flex flex-col p-3 justify-between items-center">
                        <div className="flex justify-between w-full items-center">
                            <div className="text-green-500 text-md font-bold">
                                2850 ل.س
                            </div>
                            <CardTitle title={"مبيع متكرر لهذا المنتج"}></CardTitle>
                        </div>
                        <div className="flex mt-2 justify-between items-center w-full">
                            <div className="flex flex-col justify-center items-center rounded bg-white pb-2">
                                <img src="../images/med-1.jpeg" className="w-44" alt="" />
                                <span className="font-bold text-sm self-end px-2">8000 ل.س</span>
                                <span className="font-bold text-xs discount text-gray-500 relative self-end px-2">8000 ل.س</span>
                            </div>
                            <div className="flex ml-2 flex-col justify-center items-center rounded bg-white pb-2">
                                <img src="../images/med-1.jpeg" className="w-44" alt="" />
                                <span className="font-bold text-sm self-end px-2">8000 ل.س</span>
                                <span className="font-bold text-xs discount text-gray-500 relative self-end px-2">8000 ل.س</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 flex flex-col justify-start items-end">
                    <span className="text-gray-500 text-right text-md mt-3">
                        مايكروسوفت
                    </span>
                    <span className="text-black font-bold text-right text-lg mt-3">
                        ويندوز 10 بريميم
                    </span>
                    <span className="text-black text-right text-md mt-3">
                        رقم الموديل : 10
                    </span>
                    <span className="bg-green-300 text-white rounded flex justify-center items-center px-2 py-1 text-xs mt-1">
                        5 تقييم 
                    </span>
                    <span className="text-xs mt-6">
                        المخزون:
                    </span>
                    <div className="flex justify-end-items-center">
                        <div className="rounded ml-2 bg-white text-xs border-2 px-3 py-1 mt-6">
                            64GB
                        </div>
                        <div className="rounded ml-2 bg-yellow-500 text-xs text-white px-3 flex justify-center items-center py-1 mt-6">
                            64GB
                        </div>
                        <div className="rounded ml-2 bg-white text-xs border-2 px-3 py-1 mt-6">
                            64GB
                        </div>
                    </div>
                    <span className="text-xs mt-6">
                        القياس:
                    </span>
                    <div className="flex justify-end-items-center">
                        <div className="rounded ml-2 bg-white text-xs border-2 px-3 py-1 mt-6">
                            64GB
                        </div>
                        <div className="rounded ml-2 bg-yellow-500 text-xs text-white px-3 flex justify-center items-center py-1 mt-6">
                            64GB
                        </div>
                        <div className="rounded ml-2 bg-white text-xs border-2 px-3 py-1 mt-6">
                            64GB
                        </div>
                    </div>
                    <select name="" id="" className="py-0 w-full text-right mt-6 form-select rounded focus:border-yellow-500" dir="rtl">
                        <option value="">
                            أول خيار
                        </option>
                        <option value="">
                            أول خيار
                        </option>
                    </select>
                    <div className="flex justify-end items-center mt-6">
                        <div className="rounded-full bg-red-500   border-2 ml-2 w-8 h-6"></div>
                        <div className="rounded-full bg-blue-500  border-2 ml-2 w-8 h-6"></div>
                        <div className="rounded-full bg-green-500 border-2 ml-2 w-8 h-6"></div>
                        <div className="rounded-full bg-gray-500  border-2 ml-2 w-8 h-6"></div>
                        <div className="rounded-full bg-white  border-2 ml-2 w-8 h-6"></div>
                    </div>
                </div>
                <div className="col-span-5 flex flex-col justify-start items-start">
                    <div className="m-3 w-11/12 flex flex-col justify-start items-end p-2">
                        <div className="bg-gray-100 w-full flex flex-col justify-start items-end p-2">
                        <div className="flex justify-end items-center border-b-2 pb-2 border-gray-300 w-full">
                            <span className="text-black">
                                (
                                <span className="text-xs text-yellow-500">تغيير المدينة</span>
                                )
                            </span>
                            
                            <span className="text-sm text-gray-500 ml-2">شحن إلى دمشق</span>
                        </div>
                        <span className="text-xs text-gray-500 mt-2">يصلك خلال 14 ساعة و 20 دقيقة</span>
                        <div className="flex justify-between items-center w-full px-2 mt-2">
                            <span className="text-black font-bold text-xs">
                                 توصيل مجاني 
                                <span className="text-blue-300 text-xs"> غدا - 22 أيار </span>
                            </span>
                                <img className={`w-14 2xl:w-16 h-2  `} src="../images/SPEED AR.svg" alt="" />
                        </div>
                        <div className="flex flex-col self-center mt-2 bg-white rounded  w-11/12 p-2">
                            <span className="text-xs text-black text-right px-2 w-full">
                                <span dir="rtl" className="text-xs font-bold">
                                    ملاحظة من السائق:
                                    <span className="text-gray-500 font-normal px-2" style={{fontSize:"12px"}}>توصيل مباشر عن طريق شركة أمانة</span>
                                </span>
                            </span>
                            <span className="text-xs mt-2 text-black text-right px-2 w-full">
                                <span dir="rtl" className="text-xs font-bold">
                                    ملاحظة من السائق:
                                    <span className="text-gray-500 font-normal px-2" style={{fontSize:"12px"}}>توصيل مباشر عن طريق شركة أمانة</span>
                                </span>
                            </span>
                        </div>
                        </div>
                        <div className="flex justify-end w-full items-center mt-2">
                            <span className="text-sm text-gray-500 discount relative">1200</span>
                            <span className="text-sm font-bold text-black ml-4">ل.س. 800</span>
                        </div>
                        <span className="text-xs mt-2 font-bold text-black">شحن مجاني للطلبات التي تتجاوز 12000 ل.س</span>
                        <span className="text-xs mt-2 text-gray-500">كل الاسعار تتضمن VAT</span>
                        <div className="flex flex-row-reverse mt-2 pl-2 justify-between items-center w-full">
                            <span dir="rtl" className="font-bold text-xs">الكمية:</span>
                            <span className="text-red-500 text-xs">شحن مجاني للطلبات التي تتجاوز 12000 ل.س</span>
                        </div>
                        <div className="flex flex-row-reverse justify-between items-center w-full">
                            <span className="border-2 flex flex-row-reverse mt-2 rounded">
                                <span className="px-2 py-1 flex justify-center border-l-2 items-center">+</span>
                                <span className="px-3 py-1 text-xs flex justify-center items-center">1</span>
                                <span className="px-2 py-1 flex justify-center border-r-2 items-center">-</span>
                            </span>
                            <div className="mt-2 rounded flex justify-center items-center bg-yellow-500 text-white px-24  py-1">إضافة للسلة</div>
                        </div>
                        <div className="flex justify-between items-center mt-3 border-b-2 pb-2">
                            <p className="text-xs text-right text gray-300 mr-2">هذا المنتج لا يمكن إعادته أو تبديله تعلم المزيد عن سياسة الإرجاع لدينا</p>
                            <img className={`w-14 2xl:w-16 h-2  `} src="../images/SPEED AR.svg" alt="" />
                        </div>
                        <div className="flex justify-between items-center mt-3 border-b-2 pb-2">
                            <p className="text-xs text-right text gray-300 mr-2">هذا المنتج لا يمكن إعادته أو تبديله تعلم المزيد عن سياسة الإرجاع لدينا</p>
                            <img className={`w-14 2xl:w-16 h-2  `} src="../images/SPEED AR.svg" alt="" />
                        </div>
                        <div className="flex justify-between items-center mt-3 border-b-2 pb-2">
                            <div className="flex flex-col justify-between items-end mr-2">
                                <span className="text-xs text-black font-bold">
                                    شحن موثوق
                                </span>
                                <p className="text-xs text-right text gray-300 ">هذا المنتج لا يمكن إعادته أو تبديله تعلم المزيد عن سياسة الإرجاع لدينا</p>
                            </div>
                            
                            <img className={`w-14 2xl:w-16 h-2  `} src="../images/SPEED AR.svg" alt="" />
                        </div>
                        <div className="flex justify-between items-center mt-3 border-b-2 pb-2">
                            <div className="flex flex-col justify-between items-end mr-2">
                                <span className="text-xs text-black font-bold">
                                    شحن موثوق
                                </span>
                                <p className="text-xs text-right text gray-300 ">هذا المنتج لا يمكن إعادته أو تبديله تعلم المزيد عن سياسة الإرجاع لدينا</p>
                            </div>
                            
                            <img className={`w-14 2xl:w-16 h-2  `} src="../images/SPEED AR.svg" alt="" />
                        </div>
                        <div className="flex justify-between items-center mt-3 border-b-2 pb-2">
                            <div className="flex flex-col justify-between items-end mr-2">
                                <span className="text-xs text-black font-bold">
                                    شحن موثوق
                                </span>
                                <p className="text-xs text-right text gray-300 ">هذا المنتج لا يمكن إعادته أو تبديله تعلم المزيد عن سياسة الإرجاع لدينا</p>
                            </div>
                            
                            <img className={`w-14 2xl:w-16 h-2  `} src="../images/SPEED AR.svg" alt="" />
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </>
    );
}