import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination, Scrollbar } from 'swiper/core';

// import Slide1 from '../../public/images/slider/maher.png';
export default function SpecialBrands () {
  SwiperCore.use([Navigation,Autoplay, Pagination, Scrollbar]);

    return (
      <div className="slider">

        <Swiper
        spaceBetween={20}
        slidesPerView={1}
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
            <div className="grid grid-cols-12  gap-1 py-5">
                <div className="col-span-1 sm:col-span-2 md:col-span-1"></div>
                <div className="col-span-5 relative sm:col-span-4 md:col-span-5">
                    <div className="img rounded w-full sm:w-36 left-1/2 transform -translate-x-2/4 relative h-24 sm:h-20 my-1" style={{background:"url('https://k.nooncdn.com/cms/pages/20210213/3bc0a54552185869817ba573d97bba97/ar_cat-module-appliances.jpg')",backgroundPosition:"center",backgroundSize:"cover"}}></div>
                    <div className="img rounded w-full sm:w-36 left-1/2 transform -translate-x-2/4 relative h-24 sm:h-20 my-1" style={{background:"url('https://k.nooncdn.com/cms/pages/20210120/800542152b0966457fa0968e13024ce3/ar_cat-kitchen_dining.jpg')",backgroundPosition:"center",backgroundSize:"cover"}}></div>
                    <div className="img rounded w-full sm:w-36 left-1/2 transform -translate-x-2/4 relative h-24 sm:h-20 my-1" style={{background:"url('https://k.nooncdn.com/cms/pages/20210120/800542152b0966457fa0968e13024ce3/ar_cat-bedding.jpg')",backgroundPosition:"center",backgroundSize:"cover"}}></div>
                </div>
                <div className="col-span-5 relative sm:col-span-4 md:col-span-5">
                <div className="img rounded w-full sm:w-36 left-1/2 transform -translate-x-2/4 relative h-24 sm:h-20 my-1" style={{background:"url('https://k.nooncdn.com/cms/pages/20210120/800542152b0966457fa0968e13024ce3/ar_cat-furniture.jpg')",backgroundPosition:"center",backgroundSize:"cover"}}></div>
                    <div className="img rounded w-full sm:w-36 left-1/2 transform -translate-x-2/4 relative h-24 sm:h-20 my-1" style={{background:"url('https://k.nooncdn.com/cms/pages/20210213/3bc0a54552185869817ba573d97bba97/ar_cat-module-appliances.jpg')",backgroundPosition:"center",backgroundSize:"cover"}}></div>
                    <div className="img rounded w-full sm:w-36 left-1/2 transform -translate-x-2/4 relative h-24 sm:h-20 my-1" style={{background:"url('https://k.nooncdn.com/cms/pages/20210120/800542152b0966457fa0968e13024ce3/ar_cat-bedding.jpg')",backgroundPosition:"center",backgroundSize:"cover"}}></div>
                </div>
                <div className="col-span-1 sm:col-span-2 md:col-span-1"></div>
            </div>
        </SwiperSlide>
        {/* <SwiperPagination></SwiperPagination> */}
      </Swiper>
      </div>
);}