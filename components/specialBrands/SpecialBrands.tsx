import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination, Scrollbar } from 'swiper/core';

// import Slide1 from '../../public/images/slider/maher.png';
export default function SpecialBrands (props) {
  SwiperCore.use([Navigation,Autoplay, Pagination, Scrollbar]);

    return (
      console.log(props.specs['featured_brands1']),
      props.specs?
      <div className="slider">

        <Swiper
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        // pagination={{ clickable: true }}
        // autoplay={{
        //   pauseOnMouseEnter:true,
        //   delay:4000
        // }}
        // speed={500}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        
        {props.specs['featured_brands1']&&props.specs['featured_brands1'].length>0?
        <SwiperSlide>
        <div className="grid grid-cols-12  gap-2 py-4">
          <div className="col-span-1 sm:col-span-2 md:col-span-1"></div>
          <div className="col-span-5 relative sm:col-span-4 md:col-span-5">
              <div className="img rounded w-full sm:w-36 md:w-full lg-w-36 left-1/2 transform -translate-x-2/4 shadow relative h-24 sm:h-20 mb-2" style={{background:"url("+props.specs['featured_brands1'][0].image+")",backgroundPosition:"center",backgroundSize:"contain"}}></div>
              <div className="img rounded w-full sm:w-36 md:w-full lg-w-36 left-1/2 transform -translate-x-2/4 shadow relative h-24 sm:h-20 mb-2" style={{background:"url("+props.specs['featured_brands1'][1].image+")",backgroundPosition:"center",backgroundSize:"contain"}}></div>
              <div className="img rounded w-full sm:w-36 md:w-full lg-w-36 left-1/2 transform -translate-x-2/4 shadow relative h-24 sm:h-20 mb-2" style={{background:"url("+props.specs['featured_brands1'][2].image+")",backgroundPosition:"center",backgroundSize:"contain"}}></div>
          </div>
          <div className="col-span-5 relative sm:col-span-4 md:col-span-5">
              <div className="img rounded w-full sm:w-36 md:w-full lg-w-36 left-1/2 transform -translate-x-2/4 shadow relative h-24 sm:h-20 mb-2" style={{background:"url("+props.specs['featured_brands1'][3].image+")",backgroundPosition:"center",backgroundSize:"contain"}}></div>
              <div className="img rounded w-full sm:w-36 md:w-full lg-w-36 left-1/2 transform -translate-x-2/4 shadow relative h-24 sm:h-20 mb-2" style={{background:"url("+props.specs['featured_brands1'][4].image+")",backgroundPosition:"center",backgroundSize:"contain"}}></div>
              <div className="img rounded w-full sm:w-36 md:w-full lg-w-36 left-1/2 transform -translate-x-2/4 shadow relative h-24 sm:h-20 mb-2" style={{background:"url("+props.specs['featured_brands1'][5].image+")",backgroundPosition:"center",backgroundSize:"contain"}}></div>
          </div>
          <div className="col-span-1 sm:col-span-2 md:col-span-1"></div>
        </div>
    </SwiperSlide>
    :<></>
        }
          {props.specs['featured_brands2']&&props.specs['featured_brands2'].length>0?
        <SwiperSlide>
        <div className="grid grid-cols-12  gap-2 py-4">
          <div className="col-span-1 sm:col-span-2 md:col-span-1"></div>
          <div className="col-span-5 relative sm:col-span-4 md:col-span-5">
              <div className="img rounded w-full sm:w-36 md:w-full lg-w-36 left-1/2 transform -translate-x-2/4 shadow relative h-24 sm:h-20 mb-2" style={{background:"url("+props.specs['featured_brands2'][0].image+")",backgroundPosition:"center",backgroundSize:"cover"}}></div>
              <div className="img rounded w-full sm:w-36 md:w-full lg-w-36 left-1/2 transform -translate-x-2/4 shadow relative h-24 sm:h-20 mb-2" style={{background:"url("+props.specs['featured_brands2'][1].image+")",backgroundPosition:"center",backgroundSize:"cover"}}></div>
              <div className="img rounded w-full sm:w-36 md:w-full lg-w-36 left-1/2 transform -translate-x-2/4 shadow relative h-24 sm:h-20 mb-2" style={{background:"url("+props.specs['featured_brands2'][2].image+")",backgroundPosition:"center",backgroundSize:"cover"}}></div>
          </div>
          <div className="col-span-5 relative sm:col-span-4 md:col-span-5">
              <div className="img rounded w-full sm:w-36 md:w-full lg-w-36 left-1/2 transform -translate-x-2/4 shadow relative h-24 sm:h-20 mb-2" style={{background:"url("+props.specs['featured_brands2'][3].image+")",backgroundPosition:"center",backgroundSize:"cover"}}></div>
              <div className="img rounded w-full sm:w-36 md:w-full lg-w-36 left-1/2 transform -translate-x-2/4 shadow relative h-24 sm:h-20 mb-2" style={{background:"url("+props.specs['featured_brands2'][4].image+")",backgroundPosition:"center",backgroundSize:"cover"}}></div>
              <div className="img rounded w-full sm:w-36 md:w-full lg-w-36 left-1/2 transform -translate-x-2/4 shadow relative h-24 sm:h-20 mb-2" style={{background:"url("+props.specs['featured_brands2'][5].image+")",backgroundPosition:"center",backgroundSize:"cover"}}></div>
          </div>
          <div className="col-span-1 sm:col-span-2 md:col-span-1"></div>
        </div>
    </SwiperSlide>
    :<></>
        }
          
        
        
        {/* <SwiperPagination></SwiperPagination> */}
      </Swiper>
      </div>
    :<></>
)
;}