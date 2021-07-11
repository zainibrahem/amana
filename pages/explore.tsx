import React, { useState,useEffect } from 'react';
import { useAppState, useAppDispatch } from '../contexts/app/app.provider';
import Slider from '../components/slider/slider';
import SearchBar from '../components/seachbar/searchBar';
import Banners from '../components/banners/banners';
import Categories from '../components/categories/categories';
import Card from '../components/card/card';
import Deal from '../components/deal/deal';
import Specials from '../components/specials/specials';
import Cat from '../components/cat/cat';
import Proposals from '../components/proposals/proposals';
import { Waypoint } from 'react-waypoint';
import AllCatsSlider from '../components/allcatsSlider/allCatsSlider';
import Discover from '../components/discover/discover';
export default function Home() {
    useEffect(()=> 
        {
            document.title = "استكشاف | أمانة";
            setTimeout(() => {
                setLoading(false)
            }, 2000);
        }
        ,[])
    const [Loading,setLoading] = useState(true)
    return (
        <>
        <div className={`${Loading?"flex":"hidden"}  flex-col justify-center items-center h-140 height-2xl`}>
            <div className="w-96 h-95 skeleton-box"></div>
        </div>
      <div className={`${Loading?"hidden":"flex"}  flex-col justify-center items-center h-140 height-2xl`}>
          <img onLoad={()=>setLoading(false)} src="/images/123123.png" className="w-96" alt="" />
          <span className="text-md text-center">
              قريبا استكشاف منصة أمانة
          </span>
      </div>
      </>
    );
}