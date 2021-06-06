import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination, Scrollbar } from 'swiper/core';
import {CardTitle} from '../cardTitle/cardTitle';
import CardSlider from '../cardSlider/cardSlider';
import React from "react";
import { useAppState } from '../../contexts/app/app.provider';

// import Slide1 from '../../public/images/slider/maher.png';
export default function Card (props) {
    const [openTab, setOpenTab] = React.useState(1);
    const Loading = useAppState("Loading");
return (
  props.data?
    !Loading?
    <>
    <div className={`grid grid-cols-12  gap-4 mt-8 sm:mt-12 rounded bg-white shadow-md p-2 `}>
        
        <div className="col-span-12 md:col-span-5 order-1 md:order-0 ">
          <ul
              className="flex mb-0 border-b-2 list-none  flex-row"
              role="tablist"
            >
              {props.data.map(ele => 

              <li className="-mb-0.5 flex-auto text-center" key={ele.category_id}>
                <a
                  className={
                    "text-xs text-2xs font-bold uppercase px-1 lg:px-5  border-black  block leading-normal " +
                    (openTab === ele.category_id
                      ? "text-black border-b-2"
                      : "text-black")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(ele.category_id);
                  }}
                  data-toggle="tab"
                  href={`#link${ele.category_id}`}
                  role="tablist"
                >
                  <i className="fas fa-space-shuttle text-base mr-1"></i> 
                  {ele.category_name}
                </a>
              </li>
              )}
            </ul>
        </div>
        <div className="col-span-12 md:col-span-7 order-0 md:order-1  flex flex-row-reverse justify-between items-center">
            <CardTitle title={props.title}></CardTitle>
        </div>
        <div className="col-span-12 order-3 md:order-3">
        <div className="order-0 relative flex flex-col min-w-0 break-words w-full ">
            <div className="sm:px-4 lg:px-0  flex-auto">
              <div className="tab-content tab-space" >
              {props.data.map(ele => 
                <div key={ele.category_id} className={openTab === ele.category_id ? "block" : "hidden"} id={`link${ele.category_id}`}>
                    <CardSlider cards={ele.items}></CardSlider>
                </div>
              )}
              </div>
            </div>
          </div> 
        </div>
    </div>
    </>
    :
    <>
    <div className={`grid grid-cols-12 h-90 gap-4 mt-8 sm:mt-12 rounded skeleton-box shadow-md p-2 `}></div>
    </>
    :<>
    </>
);
}