import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination, Scrollbar } from 'swiper/core';
import { useEffect, useState } from 'react';
import { useAppState } from '../../contexts/app/app.provider';

export default function Brands () {
  const isDrawerOpen = useAppState('isDrawerOpen');

  const [Height, setHeight] = useState(0);
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      const eleWidth = document.querySelector('#element').clientWidth;
      
      
      // Set window width/height to state
      setHeight(eleWidth);
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
          slidesPerView: 10,
        },
      };
    const breakpoints1 =  {
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
        slidesPerView: 8,
      },
      1366: {
        slidesPerView: 11,
      },
      1900: {
        slidesPerView: 11,
      },
    };
        return (
            <Swiper
            spaceBetween={5}
            slidesPerView={10}
            autoplay={{
              pauseOnMouseEnter:true,
              delay:4000
            }}
            breakpoints={isDrawerOpen? breakpoints:breakpoints1}
            speed={500}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
                <div id="element" className="rounded-full elements left-2/4 relative transform -translate-x-1/2 w-full" style={{height:Height,backgroundColor:'white',backgroundImage:'url(/images/brands/ssss.png)',backgroundPosition:"center center !important",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                <h4 className="text-center mt-2">Lemon Lemon</h4>
            </SwiperSlide>
            <SwiperSlide>
                <div className="rounded-full elements left-2/4 relative transform -translate-x-1/2 w-full" style={{height:Height,backgroundColor:'white',backgroundImage:'url(/images/brands/ssss.png)',backgroundPosition:"center center !important",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                <h4 className="text-center mt-2">Lemon Lemon</h4>
            </SwiperSlide>
            <SwiperSlide>
                <div className="rounded-full elements left-2/4 relative transform -translate-x-1/2 w-full" style={{height:Height,backgroundColor:'white',backgroundImage:'url(/images/brands/ssss.png)',backgroundPosition:"center center !important",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                <h4 className="text-center mt-2">Lemon Lemon</h4>
            </SwiperSlide>
            <SwiperSlide>
                <div className="rounded-full elements left-2/4 relative transform -translate-x-1/2 w-full" style={{height:Height,backgroundColor:'white',backgroundImage:'url(/images/brands/ssss.png)',backgroundPosition:"center center !important",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                <h4 className="text-center mt-2">Lemon Lemon</h4>
            </SwiperSlide>
            <SwiperSlide>
                <div className="rounded-full elements left-2/4 relative transform -translate-x-1/2 w-full" style={{height:Height,backgroundColor:'white',backgroundImage:'url(/images/brands/ssss.png)',backgroundPosition:"center center !important",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                <h4 className="text-center mt-2">Lemon Lemon</h4>
            </SwiperSlide>
            <SwiperSlide>
                <div className="rounded-full elements left-2/4 relative transform -translate-x-1/2 w-full" style={{height:Height,backgroundColor:'white',backgroundImage:'url(/images/brands/ssss.png)',backgroundPosition:"center center !important",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                <h4 className="text-center mt-2">Lemon Lemon</h4>
            </SwiperSlide>
            <SwiperSlide>
                <div className="rounded-full elements left-2/4 relative transform -translate-x-1/2 w-full" style={{height:Height,backgroundColor:'white',backgroundImage:'url(/images/brands/ssss.png)',backgroundPosition:"center center !important",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                <h4 className="text-center mt-2">Lemon Lemon</h4>
            </SwiperSlide>
            <SwiperSlide>
                <div className="rounded-full elements left-2/4 relative transform -translate-x-1/2 w-full" style={{height:Height,backgroundColor:'white',backgroundImage:'url(/images/brands/ssss.png)',backgroundPosition:"center center !important",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                <h4 className="text-center mt-2">Lemon Lemon</h4>
            </SwiperSlide>
            <SwiperSlide>
                <div className="rounded-full elements left-2/4 relative transform -translate-x-1/2 w-full" style={{height:Height,backgroundColor:'white',backgroundImage:'url(/images/brands/ssss.png)',backgroundPosition:"center center !important",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                <h4 className="text-center mt-2">Lemon Lemon</h4>
            </SwiperSlide>
            <SwiperSlide>
                <div className="rounded-full elements left-2/4 relative transform -translate-x-1/2 w-full" style={{height:Height,backgroundColor:'white',backgroundImage:'url(/images/brands/ssss.png)',backgroundPosition:"center center !important",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                <h4 className="text-center mt-2">Lemon Lemon</h4>
            </SwiperSlide>
            <SwiperSlide>
                <div className="rounded-full elements left-2/4 relative transform -translate-x-1/2 w-full" style={{height:Height,backgroundColor:'white',backgroundImage:'url(/images/brands/ssss.png)',backgroundPosition:"center center !important",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                <h4 className="text-center mt-2">Lemon Lemon</h4>
            </SwiperSlide>
            <SwiperSlide>
                <div className="rounded-full elements left-2/4 relative transform -translate-x-1/2 w-full" style={{height:Height,backgroundColor:'white',backgroundImage:'url(/images/brands/ssss.png)',backgroundPosition:"center center !important",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                <h4 className="text-center mt-2">Lemon Lemon</h4>
            </SwiperSlide>
            <SwiperSlide>
                <div className="rounded-full elements left-2/4 relative transform -translate-x-1/2 w-full" style={{height:Height,backgroundColor:'white',backgroundImage:'url(/images/brands/ssss.png)',backgroundPosition:"center center !important",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                <h4 className="text-center mt-2">Lemon Lemon</h4>
            </SwiperSlide>
            <SwiperSlide>
                <div className="rounded-full elements left-2/4 relative transform -translate-x-1/2 w-full" style={{height:Height,backgroundColor:'white',backgroundImage:'url(/images/brands/ssss.png)',backgroundPosition:"center center !important",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                <h4 className="text-center mt-2">Lemon Lemon</h4>
            </SwiperSlide>
            {/* <SwiperPagination></SwiperPagination> */}
          </Swiper>
    );
}


