import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination, Scrollbar } from 'swiper/core';
import {CardTitle} from '../cardTitle/cardTitle';
import CardSlider from '../cardSlider/cardSlider';
import React from "react";

// import Slide1 from '../../public/images/slider/maher.png';
export default function Cards (props) {
    const [openTab, setOpenTab] = React.useState(1);
return (
    <>
    <div className="grid grid-cols-12  gap-4 mt-8 sm:mt-12 rounded bg-white shadow-md p-2">
        <div className="col-span-12  flex flex-row-reverse justify-between items-center">
            <CardTitle title={props.title}></CardTitle>
        </div>
        <div className="col-span-12 order-3 md:order-3">
            <CardSlider></CardSlider>
        </div>
    </div>
    </>
);
}