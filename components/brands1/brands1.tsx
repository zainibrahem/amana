import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination, Scrollbar } from 'swiper/core';
import { useEffect, useState } from 'react';
import { useAppState } from '../../contexts/app/app.provider';
import React from 'react';
import { CardTitle } from '../cardTitle/cardTitle';

export default function Brands1 (props) {

    SwiperCore.use([Navigation,Autoplay, Pagination, Scrollbar]);
    
    const breakpoints =  {
        320: {
          slidesPerView: 3,
        },
    
        440: {
          slidesPerView: 3,
        },
    
        620: {
          slidesPerView:4,
        },
    
        820: {
          slidesPerView: 13,
        },
    
        1000: {
          slidesPerView: 9,
        },
    
        1280: {
          slidesPerView: 7,
        },
        1366: {
          slidesPerView: 9,
        },
        1900: {
          slidesPerView: 9,
        },
      };
        return (
        
            <div className="grid special-brands-slider  grid-cols-12 gap-2 mt-8  sm:mt-12 rounded bg-white shadow-md py-2  ">
                <div className="col-span-12 md:col-span-12 flex flex-row-reverse justify-between items-center px-2">
                    <CardTitle title={"العلامات التجارية"}></CardTitle>
                </div>
                <div className="col-span-12 md:col-span-12  pt-2 pb-4">
                <div className="px-3">
                    <Swiper
                    spaceBetween={5}
                    slidesPerView={10}
                    dir="rtl"
                    loop={true}
                    // resizeObserver={true}
                    autoplay={{
                      pauseOnMouseEnter:true,
                      delay:4000
                    }}
                    navigation={{
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    }}
                    breakpoints={breakpoints}
                    >
                      {props.data?
                        props.data.map(ele=>
                          <SwiperSlide>
                            <img src={ele.image} className="rounded border-2" alt="" />
                        </SwiperSlide>
                          )
                          :<></>
                        }
                    </Swiper>
                </div>
            </div>
          </div>
    );
}


