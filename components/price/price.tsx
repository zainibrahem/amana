import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination, Scrollbar } from 'swiper/core';
import { useEffect, useState } from 'react';
import { useAppState } from '../../contexts/app/app.provider';
import React from 'react';
import { CardTitle } from '../cardTitle/cardTitle';

export default function Price () {

    SwiperCore.use([Navigation,Autoplay, Pagination, Scrollbar]);
    
    const breakpoints =  {
        320: {
          slidesPerView: 3,
        },
    
        440: {
          slidesPerView: 3,
        },
    
        620: {
          slidesPerView: 6,
        },
    
        820: {
          slidesPerView: 6,
        },
    
        1000: {
          slidesPerView: 6,
        },
    
        1280: {
          slidesPerView: 6,
        },
        1366: {
          slidesPerView: 6,
        },
        1900: {
          slidesPerView: 6,
        },
      };
        return (
            <div className="grid special-brands-slider margin-4 grid-cols-12  gap-2 mt-8 sm:mt-12 mb-12 rounded bg-white shadow-md p-2">
                <div className="col-span-12 md:col-span-12 flex flex-row-reverse justify-between items-center">
                    <CardTitle title={"تسوق حسب السعر"}></CardTitle>
                </div>
                <div className="col-span-2"></div>
                <div className="col-span-8 md:col-span-8">
                    <Swiper
                    spaceBetween={2}
                    slidesPerView={6}
                    breakpoints={breakpoints}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <img className="w-full" src="./images/capture.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-full" src="./images/capture.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-full" src="./images/capture.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-full" src="./images/capture.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-full" src="./images/capture.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-full" src="./images/capture.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-full" src="./images/capture.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-full" src="./images/capture.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-full" src="./images/capture.png" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="col-span-2"></div>
            </div>
    );
}


