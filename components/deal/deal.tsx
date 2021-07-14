import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination, Scrollbar } from 'swiper/core';
import {CardTitle} from '../cardTitle/cardTitle';
import CardSlider from '../cardSlider/cardSlider';
import React from "react";
import { useAppState } from '../../contexts/app/app.provider';

// import Slide1 from '../../public/images/slider/maher.png';
export default function Deal (props) {
    const Loading = useAppState("Loading");
    return (
        !Loading?
        <>
        <div className="grid grid-cols-12  gap-4 mt-8 sm:mt-12 mb-8 sm:mb-12 rounded border-red-500 bg-white shadow-md pt-0 pr-0 p-2" style={{border:"1px solid rgba(239, 68, 68)"}}>
            <div className="col-span-12 flex flex-row-reverse flex-wrap justify-between items-start">
                <div className="dealTitle  w-28 bg-red-500 text-right pr-2 text-white rounded-bl-full ">
                    صفقة اليوم
                </div>
                <span className="pt-1 pl-2">جميع الصفقات</span>
            </div>
            <div className="col-span-12 sm:px-4 lg:px-0">
                <CardSlider cards={props.data}></CardSlider>
            </div>
        </div>
        </>
        :
        <>
        <div className={`grid grid-cols-12 h-90 gap-4 mt-8 sm:mt-12 rounded skeleton-box shadow-md p-2 `}></div>
        </>
    );
}