import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination, Scrollbar } from 'swiper/core';
import { useEffect, useState } from 'react';
import { useAppState } from '../../contexts/app/app.provider';
import React from 'react';
import { CardTitle } from '../cardTitle/cardTitle';

export default function Brands1 () {

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
          slidesPerView: 10,
        },
        1900: {
          slidesPerView: 11,
        },
      };
        return (
            <div className="grid special-brands-slider margin-4 grid-cols-12 gap-2 mt-8  sm:mt-12 rounded bg-white shadow-md p-2 ">
                <div className="col-span-12 md:col-span-12 flex flex-row-reverse justify-between items-center">
                    <CardTitle title={"العلامات التجارية"}></CardTitle>
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-10 md:col-span-10  pt-4 pb-4">
                    <Swiper
                    spaceBetween={2}
                    slidesPerView={10}
                    breakpoints={breakpoints}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div className="rounded border-2 h-16  w-11/12" style={{backgroundColor:'white',backgroundImage:'url(/images/brands/ssss.png)',backgroundPosition:"center center !important",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rounded border-2 h-16 relative left-1/2 transform -translate-x-1/2 w-11/12" style={{backgroundColor:'white',backgroundImage:'url(/images/brands/ssss.png)',backgroundPosition:"center center !important",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rounded border-2 h-16 relative left-1/2 transform -translate-x-1/2 w-11/12" style={{backgroundColor:'white',backgroundImage:'url(/images/brands/ssss.png)',backgroundPosition:"center center !important",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rounded border-2 h-16 relative left-1/2 transform -translate-x-1/2 w-11/12" style={{backgroundColor:'white',backgroundImage:'url(/images/brands/ssss.png)',backgroundPosition:"center center !important",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rounded border-2 h-16 relative left-1/2 transform -translate-x-1/2 w-11/12" style={{backgroundColor:'white',backgroundImage:'url(/images/brands/ssss.png)',backgroundPosition:"center center !important",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rounded border-2 h-16 relative left-1/2 transform -translate-x-1/2 w-11/12" style={{backgroundColor:'white',backgroundImage:'url(/images/brands/ssss.png)',backgroundPosition:"center center !important",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rounded border-2 h-16 relative left-1/2 transform -translate-x-1/2 w-11/12" style={{backgroundColor:'white',backgroundImage:'url(/images/brands/ssss.png)',backgroundPosition:"center center !important",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rounded border-2 h-16 relative left-1/2 transform -translate-x-1/2 w-11/12" style={{backgroundColor:'white',backgroundImage:'url(/images/brands/ssss.png)',backgroundPosition:"center center !important",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rounded border-2 h-16 relative left-1/2 transform -translate-x-1/2 w-11/12" style={{backgroundColor:'white',backgroundImage:'url(/images/brands/ssss.png)',backgroundPosition:"center center !important",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rounded border-2 h-16 relative left-1/2 transform -translate-x-1/2 w-11/12" style={{backgroundColor:'white',backgroundImage:'url(/images/brands/ssss.png)',backgroundPosition:"center center !important",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rounded border-2 h-16 relative left-1/2 transform -translate-x-1/2 w-11/12" style={{backgroundColor:'white',backgroundImage:'url(/images/brands/ssss.png)',backgroundPosition:"center center !important",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rounded border-2 h-16 relative left-1/2 transform -translate-x-1/2 w-11/12" style={{backgroundColor:'white',backgroundImage:'url(/images/brands/ssss.png)',backgroundPosition:"center center !important",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rounded border-2 h-16 relative left-1/2 transform -translate-x-1/2 w-11/12" style={{backgroundColor:'white',backgroundImage:'url(/images/brands/ssss.png)',backgroundPosition:"center center !important",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rounded border-2 h-16 relative left-1/2 transform -translate-x-1/2 w-11/12" style={{backgroundColor:'white',backgroundImage:'url(/images/brands/ssss.png)',backgroundPosition:"center center !important",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="col-span-1"></div>
            </div>
    );
}


