
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
      <div className="col-span-2">
        <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={15}
        slidesPerView={5}
        direction={'vertical'}
        freeMode={false}
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
        className="mySwiper">

          {props.images.map(ele=>
              <SwiperSlide>
                <img className="rounded w-full" src={`https://amanacart.com/image/${ele.path}`} />
              </SwiperSlide>
              )}
      </Swiper>
      </div>
      <div className="col-span-10 rounded">
        <Swiper
          loop={true}
          spaceBetween={0}
          navigation={true}
          observer={true}
          observeParents={true}
          thumbs={{ swiper: thumbsSwiper }}
          dir="rtl"
          className="mySwiper2">
            {props.images.map(ele=>
              <SwiperSlide>
                <img className="rounded w-full" src={`https://amanacart.com/image/${ele.path}`} />
              </SwiperSlide>
              )}
          
        </Swiper>
      </div>
    </div>
  
   </>
    :<></>
  )
}