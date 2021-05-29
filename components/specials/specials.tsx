import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination, Scrollbar } from 'swiper/core';
import {CardTitle} from '../cardTitle/cardTitle';
import CardSlider from '../cardSlider/cardSlider';
import {Title} from '../title/title';
import SpecialBrands from '../specialBrands/SpecialBrands';
import React from "react";
import { useAppState } from '../../contexts/app/app.provider';

// import Slide1 from '../../public/images/slider/maher.png';
export default function Specials (props) {
    const title = "الفئات المميزة";
    const brands = "العلامات التجارية";
    const Loading = useAppState('Loading');
return (
   
    <>
        <Title title={title}></Title>
        <div className="grid grid-cols-12  gap-4">
            {Loading?
                <div className={`col-span-12 md:col-span-4 order-1 md:order-0 skeleton-box h-full`}>
                </div>
            :
            <div className={`col-span-12 md:col-span-4 order-1 md:order-0`}>
                <div className="grid grid-cols-12  gap-4 rounded bg-white shadow-md py-2">
                    <div className="col-span-12 flex flex-row-reverse justify-start px-2">
                        <CardTitle title={brands}></CardTitle>
                    </div>
                    <div className="col-span-12 smd:col-span-6 special-brands-slider ">
                        <SpecialBrands data={props.brands}></SpecialBrands>
                    </div>
                </div>
            </div>
            }
            
            <div className="col-span-12 md:col-span-8 order-0 md:order-1">
                <div className="grid grid-cols-12 gap-4">
                {props.cats.map((ele,index) => 
                    index<=3?
                    <div key={ele.id} className="col-span-6   rounded bg-white shadow-md ">
                        <div className={`w-full ${Loading?"skeleton-box":""} h-41 rounded`} style={Loading?{}:{background:"url("+ele.cover_image+")",backgroundSize:"cover",backgroundPosition:"center"}}></div>
                    </div>
                    :""
                )}
                </div>
            </div>
        </div>
    </>
);

}