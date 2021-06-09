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

export default function Category(props) {
    const [userId,setUserId] = useState(0);
    const [sort,setSort] = useState();
    const [pros,setPros] = useState([]);
    const [view,setView] = useState(1);
    const Loading = useAppState("Loading");
    const router = useRouter()
    const { pid } = router.query;
    const Route = useAppState('Route');
    interface Data {
        products: [];
        suggested_products:[];
        suggested_categories:[];
        deals:[]
      }
    const [data,setData] = useState<Data>(); 



    const toggleSort = (e) =>{
        setSort(e);
    }

    const toggleView = (e) => {
        setView(e);
    }
    useEffect(() => {
        
        fetch(`https://amanacart.com/api/sort_category/${pid}?sort_by=${sort}`)
         .then(res => res.json())
         .then(result =>{
            setPros(result.data.products);
            console.log(result.data);
         })
         .catch(e => {
           console.log(e);
       });
     },[sort])
    useEffect(() => {
        fetch(`https://amanacart.com/api/category/${pid}`)
         .then(res => res.json())
         .then(result =>{
           setData(result.data);
           setPros(result.data.products);
            console.log(result.data);
         })
         .catch(e => {
           console.log(e);
       });
     },[pid])
     const toggleSearch = (r) =>{
        if(r.target.value.length > 3){
            fetch("https://amanacart.com/api/search/"+r.target.value+"?in_category="+pid+"")
            .then(res => res.json())
            .then(result =>{
                setPros(result.data.products);
                console.log(result.data);
            })
            .catch(e => {
                console.log(e);
            }); 
        }
        else{
                setPros(data.products);
        }
    }
  
    return(
    <>
        <Nav></Nav>
        <div>
            <div className={"transition-all duration-300 overflow-hidden ease-in-out delay-300 rounded w-full hidden md:flex flex-col justify-start items-center content-between  h-16  bg-white shadow-md mt-5 mb-5 sm:mb-7"}>
                <div className="w-full flex justify-around items-center pt-3">
                    <div className='w-11/12 relative'>
                        <input type="text" onChange={toggleSearch} className={`rounded w-full border-2 focus:outline-none text-right text-sm py-1 ${Loading?"skeleton-box":""}`}/>
                        <button style={Loading?{opacity:"0"}:{}} className={`text-xs sm:text-md  focus:outline-none flex justify-between items-center absolute left-0 top-0 h-full px-3 sm:px-5 lg:px-10 rounded bg-yellow-500`}>
                                <svg xmlns="http://www.w3.org/2000/svg" className='mr-3' width="18.179" height="18.179" viewBox="0 0 18.179 18.179">
                                    <path id="search_icon" d="M6.817,0a6.817,6.817,0,0,0,0,13.634,6.817,6.817,0,0,0,3.693-.994l5.4,5.539,2.272-2.272-5.539-5.4a6.817,6.817,0,0,0,.994-3.693A6.817,6.817,0,0,0,6.817,0m0,2.272A4.545,4.545,0,1,1,2.272,6.817,4.545,4.545,0,0,1,6.817,2.272" fill="#000"/>
                                </svg>
                                بحث
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-12 w-full">
            <div className="col-span-4">
                <span dir="rtl" className="text-sm text-right text-gray-500">
                     عدد المنتجات  
                    <span className="text-black numbers mx-1" style={{fontWeight:"bold"}}>{pros?pros.length:0}</span>
                     منتج
                </span>
            </div>
            <div className="col-span-2"></div>
            <div className="col-span-4"></div>
            <div dir="rtl" className="col-span-2  mb-2 flex justify-between items-center relative">
                <span className="text-sm sort">ترتيب حسب</span>
                <ul className="w-auto bg-white shadow py-0 shows overflow-hidden transition-all duration-500 absolute z-20 bottom-0 transform translate-y-full">
                    <li onClick={()=>toggleSort('newest')} className="text-xs cursor-pointer my-1 py-2 px-4 hover:bg-gray-300" >الأحدث للأقدم</li>
                    <li onClick={()=>toggleSort('oldest')} className="text-xs cursor-pointer my-1 py-2 px-4 hover:bg-gray-300" >الأقدم للأحدث</li>
                    <li onClick={()=>toggleSort('price_acs')} className="text-xs cursor-pointer my-1 py-2 px-4 hover:bg-gray-300" >الأعلى سعرا للأقل سعرا</li>
                    <li onClick={()=>toggleSort('price_desc')} className="text-xs cursor-pointer my-1 py-2 px-4 hover:bg-gray-300" >الأقل سعرا للأعلى سعرا</li>
                </ul>
                <div className="flex justify-between items-center">
                    <span className="text-sm mr-3">العرض</span>
                    {/* <div onClick={()=>toggleView(1)} className="w-4 h-4 bg-gray-300"></div> */}
                    <img onClick={()=>toggleView(1)} className="w-5 cursor-pointer" src={`${Route}/images/icons/dayview.svg`} alt="" />
                    <img onClick={()=>toggleView(2)} className="w-5 cursor-pointer" src={`${Route}/images/icons/dayview.svg`} alt="" />
                    {/* <div onClick={()=>toggleView(2)} className="w-4 h-4 bg-gray-500"></div> */}
                </div>
            </div>              
        </div>
        {view==1?
        <CatProducts data={pros?pros:""}></CatProducts>
           :
        <NewProposals data={pros?pros:""}></NewProposals>
        }
        <Deal data={data?data.deals:""}></Deal>
        <Proposals data={data?data.suggested_products:""}></Proposals>
        
        <div className="categories">
        <Categories type="category" data={data?data.suggested_categories:""}></Categories>
        </div>
    </>
    );

}