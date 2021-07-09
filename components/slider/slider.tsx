import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination, Scrollbar } from 'swiper/core';
import { useAppDispatch, useAppState } from '../../contexts/app/app.provider';
import React, { useEffect, useState } from 'react';

// import Slide1 from '../../public/images/slider/maher.png';
export default function Slider (props) {
  SwiperCore.use([Navigation,Autoplay, Pagination, Scrollbar]);
  const Draggable = useAppState('Draggable');
  const [Loading,setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const [sliders,setSliders]=useState([]);
  const [userId,setUserId] = useState(0);

  const  toggleDrag = React.useCallback(() => {
    dispatch({
      type: 'Draggable',
    });
  }, [dispatch]
  );
  useEffect(()=>{
  })
  const LoadingFalse = () =>{
    setTimeout(function(){
      setLoading(false)
    },1000)
  }
  
    return (
      <div className="slider rounded" >
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
          delay:5000
        }}
        speed={400}
      >

        {props.sliders?props.sliders.map(ele => 
          <SwiperSlide key={ele.id}>
            <div className="w-full">
              <div className={`w-full h-41 skeleton-box ${Loading?"block":"hidden"}`}></div>
              <img onLoad={() => LoadingFalse()} src={ele.image?ele.image.path:""} className={`img hidden lg:block rounded w-full ${Loading?"hidden":"block"}`} alt="" />
              <img onLoad={() => LoadingFalse()} src={ele.image_mobile?ele.image_mobile.path:""} className={`img block lg:hidden rounded w-full ${Loading?"hidden":"block"}`} alt="" />
            </div>
          </SwiperSlide>
        ):""}
        {/* <SwiperSlide>
        <div className={`img rounded w-full h-36 sm:h-36 lg:h-90 ${Loading?"skeleton-box":""}`} style={Loading?{}:{backgroundImage:"url('./images/slider/maher.png')"}}></div>
        </SwiperSlide> */}
        {/* <SwiperPagination></SwiperPagination> */}
      </Swiper>
      </div>

);}