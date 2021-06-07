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

export default function Brand(props) {
    const Route = useAppState('Route');
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
      interface Brand {
          brand:Data[]
          items:[]
      }
    const [data,setData] = useState<Data>();
    const [items,setItems] = useState([]);
    const router = useRouter()
    const { pids } = router.query;
    useEffect(() => {
        fetch(`https://amanacart.com/api/brand/${pids}`)
         .then(res => res.json())
         .then(result =>{
            setData(result.data.brand);
            setItems(result.data.items);
            console.log(result.data);
         })
         .catch(e => {
           console.log(e);
       });
     },[])
    return (
        <div className="grid grid-cols-12 mt-10">
            <div className="col-span-12 relative">
                <div className="absolute bg-black bg-opacity-50 w-full h-full left-0 top-0"></div>
                <img src={`${data?data.cover_image:""}`} className="w-full" alt="" />
            </div>
            <div className="col-span-12 flex  flex-row-reverse justify-between items-center relative shadow bg-white">
                <img src={`${Route}/images/brandlogo.png`} className="absolute w-2/12 right-0 -top-1/2 transform -translate-y-1/4" alt="" />
                <div className="flex flex-col justify-center items-center lg:mt-20 relative h-full lg:pr-12 pt-1 ">
                    <span className="text-xs lg:text-sm text-center ">{data?data.name:""}</span>
                    <span className="text-xs text-center text-gray-500 pb-4" dir="rtl">عضو منذ {data?data.available_from:""}</span>
                </div>
                <div className="relative  flex flex-row-reverse justify-between items-center h-full">
                    <div className="flex flex-col lg:ml-12 justify-center items-center">
                        <span className="text-xs text-center lg:text-sm">{data&&data.listing_count?data.listing_count:0}</span>
                        <span className="text-xs text-center lg:text-sm">منتجات مباعة</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span className="text-xs text-center lg:text-sm">{data?data.products_count:0}</span>
                        <span className="text-xs text-center lg:text-sm">منتجات فعالة</span>
                    </div>
                </div>
                <div className="relative flex flex-col-reverse justify-around items-center h-full ml-1 lg:ml-4 ">
                    <div className="flex flex-col justify-between items-end lg:pl-2">
                        <div className="flex flex-col-reverse w-full lg:w-auto lg:flex-row justify-start items-center">
                            <span className="text-xs mr-2 lg:block  hidden">
                                {data?data.origin:""}
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="lg:block  hidden" width="15.016" height="18.177" viewBox="0 0 15.016 18.177">
                                <path id="Icon_map-post-box" data-name="Icon map-post-box" d="M12.758,2.435a5.089,5.089,0,0,0-5.137,5.1V19.617H9.6V15.666H15.92v3.952H17.9V7.536a5.089,5.089,0,0,0-5.137-5.1Zm-9.878-1L5.79,6.182h.3a5.161,5.161,0,0,1,3.5-4.33V1.44Z" transform="translate(-2.88 -1.44)"/>
                            </svg>
                        </div>
                        <div className="flex w-full lg:w-auto flex-col-reverse lg:flex-row mt-2  justify-between items-center">
                            <span className="text-xs mr-2 lg:block  hidden">
                                {data?data.phone:""}
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="lg:block  hidden" width="14.483" height="14.483" viewBox="0 0 14.483 14.483">
                                <path id="Icon_awesome-phone-alt" data-name="Icon awesome-phone-alt" d="M14.07,10.234,10.9,8.877a.679.679,0,0,0-.792.2l-1.4,1.714A10.485,10.485,0,0,1,3.694,5.774l1.714-1.4a.677.677,0,0,0,.2-.792L4.246.411A.683.683,0,0,0,3.468.018L.526.7A.679.679,0,0,0,0,1.358,13.124,13.124,0,0,0,13.125,14.483a.679.679,0,0,0,.662-.526l.679-2.942a.687.687,0,0,0-.4-.781Z" transform="translate(0 0)"/>
                            </svg>
                        </div>
                        <div className="flex w-full lg:w-auto flex-col-reverse lg:flex-row mt-2  justify-between items-center">
                            <span className="text-xs mr-2 lg:block  hidden">
                                {data?data.phone:""}
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="lg:block  hidden" width="13.855" height="13.856" viewBox="0 0 13.855 13.856">
                                <path id="Union_4" data-name="Union 4" d="M.974,10.3A6.867,6.867,0,0,1,11.781,2.013a6.9,6.9,0,0,1,2.075,4.858A6.919,6.919,0,0,1,3.641,12.9L0,13.856Z"/>
                                <path id="Icon_awesome-phone-alt" data-name="Icon awesome-phone-alt" d="M7.021,5.108,5.44,4.43a.339.339,0,0,0-.4.1l-.7.855a5.232,5.232,0,0,1-2.5-2.5l.855-.7a.338.338,0,0,0,.1-.4L2.119.205a.341.341,0,0,0-.388-.2L.263.348A.339.339,0,0,0,0,.678a6.549,6.549,0,0,0,6.55,6.55.339.339,0,0,0,.33-.263L7.219,5.5A.343.343,0,0,0,7.021,5.108Z" transform="translate(3.468 3.467)"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-12 bg-white shadow rounded mt-3">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="flex flex-row-reverse justify-between w-full items-center flex-wrap">
                            <div className="flex flex-row-reverse py-2 px-3 justify-start items-center">
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
                            </div>
                            <div className="flex flex-row-reverse justify-between items-center px-3 text-gray-500">
                                <div className="flex flex-row-reverse justify-between items-center mr-4">
                                    <span className="text-xs">عرض</span>
                                </div>
                                <div className="flex flex-row-reverse justify-between items-center mr-4">
                                    <span className="text-xs">عدد المنتجات ضمن هذا التصنيف  <span className="text-xs numbers text-black" style={{fontWeight:"bold"}}>{items?items.length:0}</span> منتج</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-between items-center">

                        </div>
                    </div>
                </div>
            
                <div className="grid grid-cols-12 gap-2 lg:grid-cols-10">
                    {items&&items.length>0?items.map(ele=>
                    <div className="col-span-6 lg:col-span-2 flex justify-center items-center">
                        <ProductCard card={ele} type={"proposals"}></ProductCard>
                    </div>
                    ):""}
                </div>
            </div>
        </div>
    );
}