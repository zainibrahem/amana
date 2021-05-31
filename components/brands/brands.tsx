import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination, Scrollbar } from 'swiper/core';
import { useEffect, useState } from 'react';
import { useAppState } from '../../contexts/app/app.provider';

export default function Brands (props) {
  const isDrawerOpen = useAppState('isDrawerOpen');
  const Loading = useAppState("Loading");
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
          slidesPerView: 4,
        },
    
        440: {
          slidesPerView: 4,
        },
    
        620: {
          slidesPerView:5,
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
          <div className="grid grid-cols-12 gap-4 p-2">
            <div className="col-span-12 px-2">

            
            <Swiper
            spaceBetween={5}
            slidesPerView={10}
            dir="rtl"
            loop={true}
            // resizeObserver={true}
            autoplay={{
              pauseOnMouseEnter:true,
              delay:4000
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            breakpoints={isDrawerOpen? breakpoints:breakpoints1}
            speed={500}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {props.data.map(ele => 
              <SwiperSlide key={ele.id}>
                  <img id="element" className={`rounded-full bg-white elements left-2/4 relative transform -translate-x-1/2 w-11/12 ${Loading?"element skeleton-box":""}`} src={ele.image} alt="" />
                  <h4 className={`text-center mt-2 ${Loading?"skeleton-box w-full h-6":""}`}>{Loading?"":ele.title}</h4>
              </SwiperSlide>
            )}

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </Swiper>
          </div>
          </div>
    );
}


