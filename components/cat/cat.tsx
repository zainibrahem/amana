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
        <div className="grid grid-cols-12 gap-4 py-2">
            <div className="col-span-12 sm:col-span-4 ">
                <div className="w-full h-41 rounded" style={{background:"url('https://k.nooncdn.com/cms/pages/20210213/3bc0a54552185869817ba573d97bba97/ar_cat-module-appliances.jpg')",backgroundSize:"cover",backgroundPosition:"center"}}></div>
            </div>
            <div className="col-span-12 sm:col-span-4">
                <div className="w-full h-41 rounded" style={{background:"url('https://k.nooncdn.com/cms/pages/20210213/3bc0a54552185869817ba573d97bba97/ar_cat-module-appliances.jpg')",backgroundSize:"cover",backgroundPosition:"center"}}></div>
            </div>
            <div className="col-span-12 sm:col-span-4 ">
                <div className="w-full h-41 rounded" style={{background:"url('https://k.nooncdn.com/cms/pages/20210213/3bc0a54552185869817ba573d97bba97/ar_cat-module-appliances.jpg')",backgroundSize:"cover",backgroundPosition:"center"}}></div>
            </div>
            <div className="col-span-12 rounded bg-white shadow-md pt-2">
                <CardSlider></CardSlider>
            </div>
        </div>
      </>
    );
}