import { useState } from "react";
import { useAppState } from "../../contexts/app/app.provider";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination, Scrollbar } from 'swiper/core';

export default function AllCatsSlider (props) {
    SwiperCore.use([Navigation,Autoplay, Pagination, Scrollbar]);
    const isDrawerOpen = useAppState('isDrawerOpen');
  
      const breakpoints =  {
          0: {
            slidesPerView: 3,
          },
      
          500: {
            slidesPerView: 3,
          },
      
          691: {
            slidesPerView: 3,
          },
      
          850: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 3,
          },
          1250: {
            slidesPerView: 3,
            
          },
          1366: {
            slidesPerView: 3,
          },
          1900: {
            slidesPerView: 3,
          },
        };
   return (
       <>
        <div className={`grid grid-cols-12  gap-4 mt-8 sm:mt-12 rounded bg-white shadow-md p-2 `}>
            <div className="col-span-12">
                <Swiper
                spaceBetween={12}
                dir="rtl"
                observer={true}
                centeredSlidesBounds={true}
                observeParents={true}
                breakpoints={breakpoints}
                loop={true}
                navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                }}
                resizeObserver={true}
                >
                    {props.data?
                    props.data.map(ele=>{
                        <SwiperSlide>
                            <img src="./images/banners/gift-card-1.png" className="py-4 w-full" alt="" />
                        </SwiperSlide>
                    }):""    
                }
                
                
                <div className="swiper-button-prev swiper-button-hidden"></div>
                <div className="swiper-button-next swiper-button-hidden"></div>
                {/* <SwiperPagination></SwiperPagination> */}
                </Swiper>
            </div>
        </div>
       </>
   ); 
}