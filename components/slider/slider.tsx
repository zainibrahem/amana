import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination, Scrollbar } from 'swiper/core';
import { useAppDispatch, useAppState } from '../../contexts/app/app.provider';
import React, { useEffect, useState } from 'react';

// import Slide1 from '../../public/images/slider/maher.png';
export default function Slider (props) {
  SwiperCore.use([Navigation,Autoplay, Pagination, Scrollbar]);
  const Draggable = useAppState('Draggable');
  const Loading = useAppState('Loading');
  const dispatch = useAppDispatch();
  const [sliders,setSliders]=useState([]);
  const [userId,setUserId] = useState(0);

  const  toggleDrag = React.useCallback(() => {
    dispatch({
      type: 'Draggable',
    });
    console.log('dragging');
  }, [dispatch]
  );
//   useEffect(() => {
//     setSliders(props.sliders);
//     console.log('props.sliders');
//     console.log(props.sliders);
//  },[userId])
  
    return (
      props.sliders?
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
        {props.sliders.map(ele => 
          <SwiperSlide key={ele.id}>
            {ele.image!=null?
            <div className={`img rounded w-full h-36 sm:h-36 lg:h-90 ${Loading?"skeleton-box":""}`} style={Loading?{}:{backgroundImage:"url("+ele.image.path+")"}}></div>
            :"sss"
            }
          </SwiperSlide>
        )}
        {/* <SwiperSlide>
        <div className={`img rounded w-full h-36 sm:h-36 lg:h-90 ${Loading?"skeleton-box":""}`} style={Loading?{}:{backgroundImage:"url('./images/slider/maher.png')"}}></div>
        </SwiperSlide> */}
        {/* <SwiperPagination></SwiperPagination> */}
      </Swiper>
      </div>

      :
      <>
     
      </>
);}