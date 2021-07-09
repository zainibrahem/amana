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
import StoreCard from '../components/storecard/storecard';

import { Title1 } from '../components/title1/title1';

export default function Offer(props) {
    const [data,setData] = useState([]);
    const [searchs,setSearchs] = useState([]);
    const handleSearch = (e) =>{
        setSearchs(e.target.value);
    } 
    const search = () => {
        var sss ;
        if(searchs.length > 0){
            sss = searchs;
        }
        else{
            sss = ';';
        }
        fetch("https://amanacart.com/api/shop_search/"+sss)
        .then(res => res.json())
        .then(result =>{
            setData(result.data);
        })
        .catch(e => {
            setData(null);
        }); 
    } 
    useEffect(() => {
        fetch(`https://amanacart.com/api/shops`)
         .then(res => res.json())
         .then(result =>{
            setData(result.data);
         })
         .catch(e => {
       });
     },[])
    return (
        <div className="grid grid-cols-12 mt-6">
            <div className="col-span-12 flex flex-row-reverse justify-start items-center">
                <ul className="list-none flex flex-row-reverse justify-between items-center">
                    <li className="px-2 text-xs">الرئيسية</li>
                    |
                    <li className="px-2 text-xs">المتاجر</li>
                </ul>
            </div>
            <div className="col-span-12 mt-2 lg:mt-3">
                <div className="w-full relative">
                    <div className="absolute h-full w-full top-0 left-0" style={{background:"url(./images/signinback.png)",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"right"}}>
                        <Title1 title="قم بالوصول لجميع الزبائن في عمان"></Title1>
                        <p className="hidden lg:block text-white w-2/5 lg:w-1/5 text-xs text-right transform translate-x-1/2">إن كنت في البيت أو في أي مكان اخر</p>
                        <div className="bg-yellow-500 px-5 py-1 w-2/5 lg:w-1/5 text-xs transform translate-x-1/2 text-center text-white rounded mt-4">سجل الان</div>
                    </div>
                    <img className="rounded" src="./images/cover.png" alt="" />
                </div>
            </div>
            <div className="col-span-12">
            <div className="col-span-12 mt-6">
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
                            <div className="flex flex-row-reverse justify-between items-center pr-3 text-gray-500 w-full lg:w-1/2 ">
                                <div className="flex flex-row-reverse justify-between items-center mr-4 w-full">
                                    <div className='w-full relative'>
                                        <input type="text" onChange={handleSearch}  className={`rounded w-full border-2 focus:outline-none text-right text-sm py-1 `}/>
                                        <button onClick={search} className={`text-xs sm:text-md  focus:outline-none flex justify-between items-center absolute left-0 top-0 h-full px-3 sm:px-5 lg:px-10 rounded bg-yellow-500`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className='mr-3' width="18.179" height="18.179" viewBox="0 0 18.179 18.179">
                                                    <path id="search_icon" d="M6.817,0a6.817,6.817,0,0,0,0,13.634,6.817,6.817,0,0,0,3.693-.994l5.4,5.539,2.272-2.272-5.539-5.4a6.817,6.817,0,0,0,.994-3.693A6.817,6.817,0,0,0,6.817,0m0,2.272A4.545,4.545,0,1,1,2.272,6.817,4.545,4.545,0,0,1,6.817,2.272" fill="#000"/>
                                                </svg>
                                                بحث
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-between items-center mt-6">
                            <div className="grid grid-cols-12 gap-4 lg:grid-cols-10">
                                {data&&data.length>0?data.map(ele=>
                                <div key={ele.id} className="col-span-6 lg:col-span-2 flex justify-center items-center">
                                    {/* <ProductCard card={ele} type={"proposals"}></ProductCard> */}
                                    <StoreCard data={ele}></StoreCard>
                                </div>
                                ):""}
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
    );
}