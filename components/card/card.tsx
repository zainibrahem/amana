import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination, Scrollbar } from 'swiper/core';
import {CardTitle} from '../cardTitle/cardTitle';
import CardSlider from '../cardSlider/cardSlider';
import React from "react";

// import Slide1 from '../../public/images/slider/maher.png';
export default function Card (props) {
    const [openTab, setOpenTab] = React.useState(1);
return (
    <>
    <div className="grid grid-cols-12  gap-4 mt-8 sm:mt-12 rounded bg-white shadow-md p-2">
        <div className="col-span-12 md:col-span-5 order-1 md:order-0 ">
        <ul
            className="flex mb-0 border-b-2 list-none  flex-row"
            role="tablist"
          >
            <li className="-mb-0.5 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5  border-black  block leading-normal " +
                  (openTab === 1
                    ? "text-black border-b-2"
                    : "text-black")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <i className="fas fa-space-shuttle text-base mr-1"></i> شاشات
              </a>
            </li>
            <li className="-mb-0.5 flex-auto text-center">
              <a
                  className={
                    "text-xs font-bold uppercase px-5  border-black  block leading-normal " +
                    (openTab === 2
                      ? "text-black border-b-2"
                      : "text-black")
                  }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="fas fa-cog text-base mr-1"></i>  الكترونيات
              </a>
            </li>
            <li className="-mb-0.5 flex-auto text-center">
              <a
                  className={
                    "text-xs font-bold uppercase px-5  border-black  block leading-normal " +
                    (openTab === 3
                      ? "text-black border-b-2"
                      : "text-black")
                  }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <i className="fas fa-briefcase text-base mr-1"></i>  عرض الكل
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-7 order-0 md:order-1  flex flex-row-reverse justify-between items-center">
            <CardTitle title={props.title}></CardTitle>
        </div>
        <div className="col-span-12 order-3 md:order-3">
        <div className="order-0 relative flex flex-col min-w-0 break-words w-full ">
            <div className="sm:px-4 lg:px-0  flex-auto">
              <div className="tab-content tab-space" >
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                    <CardSlider></CardSlider>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                    <CardSlider></CardSlider>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                    <CardSlider></CardSlider>
                </div>
              </div>
            </div>
          </div> 
        </div>
    </div>
    </>
);
}