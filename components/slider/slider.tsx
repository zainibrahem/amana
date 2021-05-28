import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination, Scrollbar } from 'swiper/core';
import { useAppDispatch, useAppState } from '../../contexts/app/app.provider';
import React from 'react';

// import Slide1 from '../../public/images/slider/maher.png';
export default function Slider () {
  SwiperCore.use([Navigation,Autoplay, Pagination, Scrollbar]);
  const Draggable = useAppState('Draggable');
  const dispatch = useAppDispatch();

  const  toggleDrag = React.useCallback(() => {
    dispatch({
      type: 'Draggable',
    });
    console.log('dragging');
  }, [dispatch]
  );
  
    return (
      <div className="slider rounded" onClick={()=>console.log('asdasd')}>
        <Swiper
        spaceBetween={20}
        onClick={toggleDrag}
        slidesPerView={1}
        draggable={false}
        resizeObserver={true}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          pauseOnMouseEnter:true,
          delay:4000
        }}
        speed={500}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
            <div className="img rounded w-full h-36 sm:h-36 lg:h-90" style={{background:"url('./images/slider/maher.png')"}}></div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="img rounded w-full h-36 sm:h-36 lg:h-90" style={{background:"url('./images/slider/maher.png')"}}></div>
        </SwiperSlide>
        {/* <SwiperPagination></SwiperPagination> */}
      </Swiper>
      </div>
);}