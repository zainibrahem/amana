import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination, Scrollbar } from 'swiper/core';
import {CardTitle} from '../cardTitle/cardTitle';
import CardSlider from '../cardSlider/cardSlider';
import {Title} from '../title/title';
import SpecialBrands from '../specialBrands/SpecialBrands';
import React from "react";
import { useAppState } from '../../contexts/app/app.provider';

// import Slide1 from '../../public/images/slider/maher.png';
export default function Cat (props) {
    const title = "الكترونيات";
    const Loading = useAppState("Loading");
    return (
      <>
        <Title title={props.data.name}></Title>
        <div className="grid grid-cols-12 gap-4 py-2 bg-white shadow-md md:shadow-none sm:bg-transparent rounded pt-6 md:pt-0">
            {props.data.banners.map((ele,index) => 
                <div key={ele.id} className="col-span-12 sm:col-span-4 px-2.5 md:px-0 ">
                    {/* <div className={`w-full relative left-1/2 transform shadow -translate-x-2/4 h-41 rounded ${Loading?"skeleton-box":""}`} style={Loading?{}:{background:"url(https://amanacart.com/image/"+ele.feature_image.path+")",backgroundSize:"cover",backgroundPosition:"center"}}></div> */}
                    {ele.image?
                    <img src={`${ele.image}`} className={`w-full relative left-1/2 transform shadow -translate-x-2/4  rounded ${Loading?"skeleton-box":""}`} alt="" />
                    :<></>
                    }
                </div>
            )}
            {/* <div className="col-span-12 sm:col-span-4 px-2.5 md:px-0">
                <div className={`w-full relative left-1/2 transform shadow -translate-x-2/4 h-41 rounded ${Loading?"skeleton-box":""}`} style={Loading?{}:{background:"url('https://k.nooncdn.com/cms/pages/20210213/3bc0a54552185869817ba573d97bba97/ar_cat-module-appliances.jpg')",backgroundSize:"cover",backgroundPosition:"center"}}></div>
            </div>
            <div className="col-span-12 sm:col-span-4 px-2.5 md:px-0 ">
                <div className={`w-full relative left-1/2 transform shadow -translate-x-2/4 h-41 rounded ${Loading?"skeleton-box":""}`} style={Loading?{}:{background:"url('https://k.nooncdn.com/cms/pages/20210213/3bc0a54552185869817ba573d97bba97/ar_cat-module-appliances.jpg')",backgroundSize:"cover",backgroundPosition:"center"}}></div>
            </div> */}
            <div className="col-span-12  rounded md:bg-white md:shadow-md p-2">
                <CardSlider cards={props.data.products}></CardSlider>
            </div>
        </div>
      </>
    );
}