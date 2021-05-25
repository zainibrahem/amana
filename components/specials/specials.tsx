import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination, Scrollbar } from 'swiper/core';
import {CardTitle} from '../cardTitle/cardTitle';
import CardSlider from '../cardSlider/cardSlider';
import {Title} from '../title/title';
import SpecialBrands from '../specialBrands/SpecialBrands';
import React from "react";

// import Slide1 from '../../public/images/slider/maher.png';
export default function Specials () {
    const title = "الفئات المميزة";
    const brands = "العلامات التجارية";

return (
    <>
        <Title title={title}></Title>
        <div className="grid grid-cols-12  gap-4    ">
            <div className="col-span-12 md:col-span-4">
                <div className="grid grid-cols-12  gap-4 rounded bg-white shadow-md py-2">
                    <div className="col-span-12 flex flex-row-reverse justify-start px-2">
                        <CardTitle title={brands}></CardTitle>
                    </div>
                    <div className="col-span-12 smd:col-span-6 special-brands-slider ">
                        <SpecialBrands></SpecialBrands>
                    </div>
                </div>
            </div>
            <div className="col-span-12 md:col-span-8">
                <div className="grid grid-cols-12  gap-4">
                    <div className="col-span-6   rounded bg-white shadow-md ">
                        <div className="w-full h-41 rounded" style={{background:"url('https://k.nooncdn.com/cms/pages/20210213/3bc0a54552185869817ba573d97bba97/ar_cat-module-appliances.jpg')",backgroundSize:"cover",backgroundPosition:"center"}}></div>
                    </div>
                    <div className="col-span-6   rounded bg-white shadow-md ">
                        <div className="w-full h-41 rounded" style={{background:"url('https://k.nooncdn.com/cms/pages/20210120/800542152b0966457fa0968e13024ce3/ar_cat-kitchen_dining.jpg')",backgroundSize:"cover",backgroundPosition:"top left"}}></div>
                    </div>
                    <div className="col-span-6   rounded bg-white shadow-md ">
                        <div className="w-full h-41 rounded" style={{background:"url('https://k.nooncdn.com/cms/pages/20210120/800542152b0966457fa0968e13024ce3/ar_cat-bedding.jpg')",backgroundSize:"cover",backgroundPosition:"center"}}></div>
                    </div>
                    <div className="col-span-6   rounded bg-white shadow-md ">
                        <div className="w-full h-41 rounded" style={{background:"url('https://k.nooncdn.com/cms/pages/20210120/800542152b0966457fa0968e13024ce3/ar_cat-furniture.jpg')",backgroundSize:"cover",backgroundPosition:"center"}}></div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

}