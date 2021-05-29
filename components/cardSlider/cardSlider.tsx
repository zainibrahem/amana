import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination, Scrollbar } from 'swiper/core';
import ProductCard from '../productCard/productCard';
import { useState } from 'react';
import { useAppState } from '../../contexts/app/app.provider';
// import Slide1 from '../../public/images/slider/maher.png';
export default function CardSlider (props) {
  SwiperCore.use([Navigation,Autoplay, Pagination, Scrollbar]);
  const isDrawerOpen = useAppState('isDrawerOpen');

    const breakpoints =  {
        0: {
          slidesPerView: 2,
        },
    
        500: {
          slidesPerView: 2,
        },
    
        691: {
          slidesPerView: 3,
        },
    
        850: {
          slidesPerView: 4,
        },
        1000: {
          slidesPerView: 5,
        },
        1250: {
          slidesPerView: 5,
          
        },
        1366: {
          slidesPerView: 5,
        },
        1900: {
          slidesPerView: 7,
        },
      };
   
      
    return (
      props.cards?
        <>
        <div className="block md:hidden card-slider">

        
        <Swiper
        spaceBetween={3}
        slidesPerView={5}
        breakpoints={breakpoints}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        scrollbar={{ "hide": true }}
        // on={{
        //   touchMove: function(){
        //     document.querySelector('.swiper-scrollbar').style.opacity="1";
        //     console.log('asdads');
        //   },
        //   touchEnd: function(){
        //     document.querySelector('.swiper-scrollbar').style.opacity="0";
        //   },
        // }}
        resizeObserver={true}
        // pagination={{ clickable: true }}
        // autoplay={{
        //   pauseOnMouseEnter:true,
        //   delay:4000
        // }}
        // speed={500}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
            <ProductCard></ProductCard>
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard></ProductCard>
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard></ProductCard>
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard></ProductCard>
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard></ProductCard>
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard></ProductCard>
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard></ProductCard>
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard></ProductCard>
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard></ProductCard>
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard></ProductCard>
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard></ProductCard>
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard></ProductCard>
        </SwiperSlide>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        {/* <SwiperPagination></SwiperPagination> */}
      </Swiper>
      </div>
       

      <div className="hidden md:block card-slider">
        <Swiper
        spaceBetween={3}
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
        {props.cards.map(ele => 
          <SwiperSlide key={ele.id}>
              <ProductCard card={ele}></ProductCard>
          </SwiperSlide>
        )}
        
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        {/* <SwiperPagination></SwiperPagination> */}
        </Swiper>
      </div>

        </>
      :
      <>
      </>
    );
}