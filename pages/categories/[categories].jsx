import React, { useState,useEffect } from 'react';
import { useAppState, useAppDispatch } from '../../contexts/app/app.provider';
import Slider from '../../components/slider/slider';
import SearchBar from '../../components/seachbar/searchBar';
import Banners from '../../components/banners/banners';
import Catgory from '../../components/category/category';
import Categories from '../../components/categories/categories';
import CategoryBannerSlider from '../../components/categoryBannerSlider/categoryBannerSlider';
import Card1 from '../../components/card1/card1';
import Brands1 from '../../components/brands1/brands1';
import Deal from '../../components/deal/deal';
import Specials from '../../components/specials/specials';
import Cat from '../../components/cat/cat';
import Proposals from '../../components/proposals/proposals';
import Offers from '../../components/offers/offers';
import { Waypoint } from 'react-waypoint';
import { useRouter } from 'next/router'

export default function categories(props) {

    const [data,setData] = useState();
    const [userId,setUserId] = useState(0);
    const router = useRouter()
    const { pids } = router.query;

    useEffect(() => {
        fetch(`https://amanacart.com/api/category_group/${pids}`)
         .then(res => res.json())
         .then(result =>{
           setData(result.data);
         })
         .catch(e => {
       });
     },[pids])
     const loaded = useAppState('loaded');
    return (
        <>
            <div className="special-brands-slider mt-6 md:mt-6">
                <Slider sliders={data?data.first_slider:""}></Slider>
            </div>
            
            <div className="categories mt-5">
                <Catgory data={data?data.sub_groups:""}></Catgory>
            </div>
            <Brands1 data={data?data.brands:""}></Brands1>
            <Card1 color="pink" title="الشائع في أمانة" data={data?data.trending_now:""}></Card1>
            <Banners data={data?data.banners:""}></Banners>
            <Deal data={data?data.deal_of_the_day:""}></Deal>
            <CategoryBannerSlider data={data?data.price_banners:""}></CategoryBannerSlider>
            <Proposals slider={data?data.second_slider:""} data={data?data.suggested:""}></Proposals>
            <div className="categories">
                <Categories type="categories" data={data?data.suggested_categories:""}></Categories>
            </div>
            <Offers data={data?data.offers:""}></Offers>
        </>
    );
}