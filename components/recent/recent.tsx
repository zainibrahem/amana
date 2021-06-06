import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination, Scrollbar } from 'swiper/core';
import {CardTitle} from '../cardTitle/cardTitle';
import CardSlider from '../cardSlider/cardSlider';
import React from "react";
import { useAppState } from '../../contexts/app/app.provider';

// import Slide1 from '../../public/images/slider/maher.png';
export default function Recent (props) {
    const [openTab, setOpenTab] = React.useState(1);
    const Loading = useAppState("Loading");
return (
  props.data?
    !Loading?
    <>
    <div className={`grid grid-cols-12  gap-4 mt-8 sm:mt-12 rounded bg-white shadow-md p-2 `}>
        
        <div className="col-span-12 md:col-span-5 order-1 md:order-0 ">
         
        </div>
        <div className="col-span-12 md:col-span-7 order-0 md:order-1  flex flex-row-reverse justify-between items-center">
            <CardTitle title={props.title}></CardTitle>
        </div>
        <div className="col-span-12 order-3 md:order-3">
            <div className="order-0 relative flex flex-col min-w-0 break-words w-full ">
                    <CardSlider cards={props.data}></CardSlider>
            </div> 
        </div>
    </div>
    </>
    :
    <>
    <div className={`grid grid-cols-12 h-90 gap-4 mt-8 sm:mt-12 rounded skeleton-box shadow-md p-2 `}></div>
    </>
    :<>
    </>
);
}