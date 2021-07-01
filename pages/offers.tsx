import React, { useState,useEffect } from 'react';
import { useAppState, useAppDispatch } from '../contexts/app/app.provider';
import Slider from '../components/slider/slider';
import FullSearchBar from '../components/FullSearch/fullsearch';
import Banners from '../components/banners/banners';
import Catgory from '../components/category/category';
import Categories from '../components/categories/categories';
import CategoryBannerSlider from '../components/categoryBannerSlider/categoryBannerSlider';
import Card1 from '../components/card1/card1';
import Brands1 from '../components/brands1/brands1';
import Deal from '../components/deal/deal';
import Specials from '../components/specials/specials';
import Cat from '../components/cat/cat';
import CatProducts from '../components/catProducts/carProducts';
import Offers from '../components/offers/offers';
import Nav from '../components/nav/nav';
import { Waypoint } from 'react-waypoint';
import Proposals from '../components/proposals/proposals';
import NewProposals from '../components/newProposals/newProposals';
import { useRouter } from 'next/router'
import { idText } from 'typescript';
import ProductCard from '../components/productCard/productCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination, Scrollbar } from 'swiper/core';

export default function Offer(props) {
    interface Data {
        cover_image: ""
        available_from: []
        description:[]
        image:[]
        name:[]
        phone:[]
        listing_count:[]
        origin:[]
        products_count:[]
      }
    const [data,setData] = useState([]);
    const [items,setItems] = useState([]);
    const [actives,setActives] = useState(0);
    const setac = (e) =>{
        setActives(e);
        setItems(data[e].items);
    }
    useEffect(() => {
        fetch(`https://amanacart.com/api/offers`)
         .then(res => res.json())
         .then(result =>{
            setData(result);
            setItems(result[0].items);
            console.log(result);
         })
         .catch(e => {
           console.log(e);
       });
     },[])
    return (
        <div className="grid grid-cols-12">
            <div className="hidden lg:block col-span-12">
                <div className="offers rounded h-28 px-2 flex justify-around items-center mt-8">
                        <div className="w-11/12 flex justify-between items-center">
                            {data?data.map((ele,index)=>
                                <div onClick={()=>setac(index)} key={index} className={`cursor-pointer flex flex-col py-6 px-2 justify-between items-center ${actives==index? "shadow-md w-24 active-offer":""}`}>
                                    <img className="w-11" src={ele.icon_image} alt="" />
                                    <span className="span text-gray-700 font-bold text-xs text-center mt-2">
                                        {ele.name}
                                    </span>
                                </div>
                            ):""}
                        </div>
                </div>
            </div>
            <div className="block  col-span-12 lg:hidden w-full">
            <div className="offers rounded h-28 px-2 flex justify-around items-center mt-8">

            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                draggable={false}
                resizeObserver={true}
                loop={true}
            >
                {data?data.map((ele,index)=>
                <SwiperSlide key={index}>
                    <div onClick={()=>setac(index)} key={index} className={`cursor-pointer w-full flex flex-col py-6 px-2 justify-between items-center ${actives==index? "shadow-md w-full active-offer":""}`}>
                        <img className="w-11" src={ele.icon_image} alt="" />
                        <span className="span text-gray-700 font-bold text-xs text-center mt-2">
                            {ele.name}
                        </span>
                    </div>
                </SwiperSlide>
                ):""}
            </Swiper>
            </div>
            </div>

            <div className="col-span-12">
            <div className="col-span-12 bg-white shadow rounded mt-6">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="flex flex-row-reverse justify-between w-full items-center flex-wrap">
                            {/* <div className="flex flex-row-reverse py-2 px-3 justify-start items-center">
                                <span className="text-xs">ترتيب</span>
                                <div className="flex flex-row-reverse justify-between items-center mr-4">
                                    <input type="checkbox" className="checkbox" name="checkbox" id="checkbox" />
                                    <label className="text-xs mr-2" htmlFor="">اختر نوعا</label>
                                </div>
                                <div className="flex flex-row-reverse justify-between items-center mr-4">
                                    <input type="checkbox" className="checkbox" name="checkbox" id="checkbox" />
                                    <label className="text-xs mr-2" htmlFor="">اختر نوعا</label>
                                </div>
                                <div className="flex flex-row-reverse justify-between items-center mr-4">
                                    <input type="checkbox" className="checkbox" name="checkbox" id="checkbox" />
                                    <label className="text-xs mr-2" htmlFor="">اختر نوعا</label>
                                </div>
                            </div> */}
                            <div className="flex flex-row-reverse justify-between items-center px-3 text-gray-500">
                                <div className="flex flex-row-reverse justify-between items-center mr-4">
                                    <span className="hidden lg:block text-xs">عرض</span>
                                </div>
                                <div className="flex flex-row-reverse justify-between items-center mr-4">
                                    <span className="text-xs mt-2 lg:mt-0">عدد المنتجات ضمن هذا التصنيف  <span className="text-xs numbers text-black" style={{fontWeight:"bold"}}>{items?items.length:0}</span> منتج</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-between items-center px-2">
                            <div className="grid grid-cols-12 lg:grid-cols-10 gap-2  mt-6 w-full">
                                {items&&items.length>0?items.map(ele=>
                                <div className="col-span-6 lg:col-span-2 flex justify-center items-center">
                                    <ProductCard card={ele} type={"proposals"}></ProductCard>
                                </div>
                                ):""}
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        
            </div>
        </div>
    );
}