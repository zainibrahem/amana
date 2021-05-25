import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination, Scrollbar } from 'swiper/core';
import {CardTitle} from '../cardTitle/cardTitle';
import CardSlider from '../cardSlider/cardSlider';
import React from "react";

// import Slide1 from '../../public/images/slider/maher.png';
export default function Deal () {
    return (
        <div className="grid grid-cols-12  gap-4 mt-8 sm:mt-12 mb-8 sm:mb-12 rounded bg-white shadow-md pb-2">
            <div className="col-span-12 flex flex-row-reverse flex-wrap justify-between items-start">
                <div className="dealTitle  w-28 bg-red-500 text-right pr-2 text-white rounded-bl-full ">
                    صفقة اليوم
                </div>
                <span className="pt-1 pl-2">جميع الصفقات</span>
            </div>
            <div className="col-span-12 px-2">
                <CardSlider></CardSlider>
            </div>
        </div>

    );
}