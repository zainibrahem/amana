
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";






// import Swiper core and required modules
import SwiperCore, {
  Navigation,Thumbs
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation,Thumbs]);


export default function ThumbSlider(props) {
  
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  
  return (
    props.images?
    <>
    
    <div className="grid grid-cols-12 gap-3 product-gallery">
    
      <div className="col-span-12 rounded overflow-hidden">
        <Swiper
          loop={true}
          spaceBetween={0}
          navigation={true}
          observer={true}
          observeParents={true}
          thumbs={{ swiper: thumbsSwiper }}
          dir="rtl"
          className="mySwiper2">
             <SwiperSlide>
                <img className="rounded w-full" src={`${props.defaults}`} />
             </SwiperSlide>
            {props.images.map(ele=>
              <SwiperSlide>
                <img className="rounded w-full" src={`${ele.path}`} />
              </SwiperSlide>
              )}
          
        </Swiper>
        <div className="mt-4"></div>
        <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={15}
        slidesPerView={5}
        freeMode={false}
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
        className="mySwiper">
            <SwiperSlide>
                <img className="rounded shadow w-full" src={`${props.defaults}`} style={{border:"1px solid #eee"}} />
             </SwiperSlide>
          {props.images.map(ele=>
              <SwiperSlide>
                <img className="rounded shadow w-full" src={`${ele.path}`} style={{border:"1px solid #eee"}} />
              </SwiperSlide>
              )}
      </Swiper>
      
      </div>
    </div>
  
   </>
    :<></>
  )
}