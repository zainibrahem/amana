import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination, Scrollbar } from 'swiper/core';
import ProductCard from '../productCard/productCard';
// import Slide1 from '../../public/images/slider/maher.png';
export default function CardSlider () {
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
    
        909: {
          slidesPerView: 4,
        },
    
        1000: {
          slidesPerView: 4,
        },
    
        1280: {
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
        <>
        <Swiper
        spaceBetween={5}
        slidesPerView={5}
        breakpoints={breakpoints}
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

        {/* <SwiperPagination></SwiperPagination> */}
      </Swiper>
        </>
    );
}