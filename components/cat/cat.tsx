import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination, Scrollbar } from 'swiper/core';
import {CardTitle} from '../cardTitle/cardTitle';
import CardSlider from '../cardSlider/cardSlider';
import {Title} from '../title/title';
import SpecialBrands from '../specialBrands/SpecialBrands';
import React from "react";

// import Slide1 from '../../public/images/slider/maher.png';
export default function Cat () {
    const title = "الكترونيات";

    return (
      <>
        <Title title={title}></Title>
        <div className="grid grid-cols-12 gap-4 py-2 bg-white shadow-md md:shadow-none sm:bg-transparent rounded pt-6 md:pt-0">
            <div className="col-span-12 sm:col-span-4 px-2.5 md:px-0 ">
                <div className="w-full relative left-1/2 transform shadow -translate-x-2/4 h-41 rounded" style={{background:"url('https://k.nooncdn.com/cms/pages/20210213/3bc0a54552185869817ba573d97bba97/ar_cat-module-appliances.jpg')",backgroundSize:"cover",backgroundPosition:"center"}}></div>
            </div>
            <div className="col-span-12 sm:col-span-4 px-2.5 md:px-0">
                <div className="w-full relative left-1/2 transform shadow -translate-x-2/4 h-41 rounded" style={{background:"url('https://k.nooncdn.com/cms/pages/20210213/3bc0a54552185869817ba573d97bba97/ar_cat-module-appliances.jpg')",backgroundSize:"cover",backgroundPosition:"center"}}></div>
            </div>
            <div className="col-span-12 sm:col-span-4 px-2.5 md:px-0 ">
                <div className="w-full relative left-1/2 transform shadow -translate-x-2/4 h-41 rounded" style={{background:"url('https://k.nooncdn.com/cms/pages/20210213/3bc0a54552185869817ba573d97bba97/ar_cat-module-appliances.jpg')",backgroundSize:"cover",backgroundPosition:"center"}}></div>
            </div>
            <div className="col-span-12  rounded md:bg-white md:shadow-md p-2">
                <CardSlider></CardSlider>
            </div>
        </div>
      </>
    );
}