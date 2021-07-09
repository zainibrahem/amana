import React, { useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination, Scrollbar } from 'swiper/core';
import { useAppState, useAppDispatch } from '../../contexts/app/app.provider';
import Slider from '../../components/slider/slider';
import SearchBar from '../../components/seachbar/searchBar';
import Banners from '../../components/banners/banners';
import Categories from '../../components/categories/categories';
import Card from '../../components/card/card';
import Deal from '../../components/deal/deal';
import Specials from '../../components/specials/specials';
import Cat from '../../components/cat/cat';
import Proposals from '../../components/proposals/proposals';
import { Waypoint } from 'react-waypoint';
import AllCatsSlider from '../../components/allcatsSlider/allCatsSlider';
import Discover from '../../components/discover/discover';
import Link from 'next/link';
export default function Orders() {
    interface Data{
        id:""
        title:""
        image:""
        price:""
        product_id:""
        listing_id:""
    }
    const [heightt,setHeightt] = useState(0);
    const [anything,setAny] = useState(0);
    const [data,setData] = useState<Data[]>();
    const dispatch = useAppDispatch();

    const toggleNotification = React.useCallback((info,errortypes) => {
        dispatch({
          type: 'notification',payload:info,types:errortypes
        });
        }
        ,[dispatch]
      );
    const removeFav = (ele,e) =>{
        
        fetch(`https://amanacart.com/api/wishlist/${ele}/remove`,{
            method: 'DELETE', 
           headers:{
               'Authorization' : `Bearer ${localStorage.getItem('token')}`
           }})
        .then(res => res.json())
        .then(result =>{
            console.log(e.target.parentNode.parentNode)
            e.target.parentNode.parentNode.remove();
           toggleNotification(result.message,'success');
           console.log(result)
           
           setTimeout(() => {
               dispatch({
                   type: 'Nonotification',
                 })
             }, 5000)
        })
        .catch(e => {
           toggleNotification(e.message,'error');
           setTimeout(() => {
               dispatch({
                   type: 'Nonotification',
                 })
             }, 5000)
      });
    }
    useEffect(()=>{
        document.title = "المفضلة | أمانة"
        fetch(`https://amanacart.com/api/dashboard/wishlist`,{
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }})
         .then(res => res.json())
         .then(result =>{
            setData(result.data)
            console.log(result.data)
         })
         .catch(e => {
       });
    },[])
   
    

    return (
        <div className="grid grid-cols-10 gap-2 mt-12" dir="rtl">
               
                <div className="col-span-10 bg-white shadow rounded mt-4">
                    <div className="flex w-full justify-start items-center px-3 py-3">
                        <span className="text-lg">المفضلة</span>
                    </div>
                    <div className="rounded orders pb-3 lg-pb-0" >
                        <Swiper
                        spaceBetween={20}
                        slidesPerView={3.5}
                        draggable={true}
                        breakpoints={{
                            0:{
                                slidesPerView:2.5
                            },
                            1000:{
                                slidesPerView:3.5
                            }
                        }}
                    >
                        {data?data.map(ele=>
                            <SwiperSlide>
                                <div className={`absolute flex flex-col justify-center items-center rounded heights w-full h-full left-0 top-o bg-black bg-opacity-70 z-20`}>
                                    <span onClick={(e)=>removeFav(ele.id,e)} className="rounded-full cursor-pointer w-4 h-4 flex justify-center items-center absolute top-1 left-1 lg:top-2 lg:left-2  text-white">
                                        x
                                    </span>
                                    <span className="text-xs lg:text-sm w-full px-1 lg:px-0  text-white text-center">
                                        {ele.title}
                                    </span>
                                    <span className="text-md numbers lg:mt-4 text-white" style={{fontWeight:"bold"}}>{ele.price}</span>
                                    <Link href={`/product/product?pids=${ele.listing_id}`}>
                                        <span className="text-white cursor-pointer text-xs lg:text-md bg-red-700 lg:py-2 rounded px-1 lg:px-3 lg:mt-3">اشتري الان</span>
                                    </Link>
                                </div>
                                <img id="height" src={ele.image} style={{background:"black"}} className="w-full rounded" alt="" />
                            </SwiperSlide>
                        ):""}

                    </Swiper>
                    </div>
                </div>
        </div>
    );
}