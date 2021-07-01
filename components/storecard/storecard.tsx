import React, { useState,useEffect } from 'react';
import { useAppState, useAppDispatch } from '../../contexts/app/app.provider';
import Slider from '../../components/slider/slider';
import FullSearchBar from '../../components/FullSearch/fullsearch';
import Banners from '../../components/banners/banners';
import Catgory from '../../components/category/category';
import Categories from '../../components/categories/categories';
import CategoryBannerSlider from '../../components/categoryBannerSlider/categoryBannerSlider';
import Card1 from '../../components/card1/card1';
import Brands1 from '../../components/brands1/brands1';
import Deal from '../../components/deal/deal';
import Specials from '../../components/specials/specials';
import Cat from '../../components/cat/cat';
import CatProducts from '../../components/catProducts/carProducts';
import Offers from '../../components/offers/offers';
import Nav from '../../components/nav/nav';
import { Waypoint } from 'react-waypoint';
import Proposals from '../../components/proposals/proposals';
import NewProposals from '../../components/newProposals/newProposals';
import { useRouter } from 'next/router'
import { idText } from 'typescript';
import ProductCard from '../../components/productCard/productCard';

export default function Offer(props) {
    const Route = useAppState('Route');
    const [route,setRoute] = useState<string>();
      
    useEffect(()=>{
        setRoute(window.location.href);
    })
    return (
        <div className="flex flex-col hover:shadow justify-start bg-white w-full items-center mt-12 rounded" style={{minHeight:"16rem"}}>
            <div className="w-full relative rounded" style={{height:"100px"}}>
                <a href={`/brand/brand?pids=${props.data?props.data.id:""}`} >
                    <img src={`${props.data?props.data.cover_image:""}`} style={{height:"100px"}} className="rounded" alt="" />
                    <div className="bg-black bg-opacity-70 absolute rounded-t w-full h-full top-0"></div>
                    <span className="text-md text-center w-full px-2 mt-2 absolute text-white top-1/2 transform -translate-y-1/2">{props.data?props.data.name:""}</span>
                    <img src={`${props.data?props.data.image:""}`} className="shadwo w-24 h-16 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded"  alt="" style={{border:"1px solid #eee"}} />
                </a>
            </div>
            
            <div className="w-full relative px-3  flex  flex-col justify-between  items-center">
                

                {route&&route.indexOf('brands')==-1?"": 
                    <div className="w-full  pb-2 mt-3 border-b-2">
                        <p className="text-xs text-right" style={{height:"3rem",overflow:"hidden"}}>
                            {props.data.description}
                        </p>
                    </div>
                }
               {route&&route.indexOf('brands')!=-1?"":
                <span className="text-center w-full text-xs" dir="rtl">عضو  : {props.data?props.data.member_since:""} </span>
               }
               {route&&route.indexOf('brands')==-1?
                <div className="flex justify-between items-center w-2/3 mt-3">
                    <div className="rounded-full bg-white w-8 h-6 shadow flex justify-center items-center">
                        <img className="w-3 " src="./images/face.png" alt="" />
                    </div>
                    <div className="rounded-full bg-white w-8 h-6 shadow flex justify-center items-center">
                        <img className="w-4" src="./images/twi.png" alt="" />
                    </div>
                    <div className="rounded-full bg-white w-8 h-6 shadow flex justify-center items-center">
                        <img className="w-4" src="./images/insta.png" alt="" />
                    </div>
                </div>
                :""}
            </div>
            <div className="w-full relative mt-2 mb-2 flex flex-col justify-center items-end pr-3">
                <span className="text-xs text-blue-500" dir="rtl">
                    مسجل منذ: {props.data.available_from}
                </span>
                {props.data.shops.map((ele,index)=>{
                    if(index<5){
                        return (
                            <div className="rounded-full h-8 w-10" style={{background:`url(${ele.image})`,backgroundSize:"cover",backgroundPosition:"center center"}}></div>
                            );
                    }
                }
                )}
            </div>
        </div>
    );
}