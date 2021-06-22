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
export default function Cart() {
    const [height,setHeight] = useState(0);
    const [carts,setCart] = useState([]);
    const [userId,setUserId] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                fetch(`https://amanacart.com/api/carts`,{
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(result =>{
           setCart(result.data);
           console.log(result.data)
        })
        .catch(e => {
          console.log(e);
      });
        if(carts.length>0){
          var element = document.querySelector('#width').clientWidth;
          setHeight(element);
        }
        const resizeListener = () => {
            var element = document.querySelector('#width').clientWidth;
            setHeight(element);
        };
        // set resize listener
        window.addEventListener('resize', resizeListener);
    
        // clean up function
        return () => {
          // remove resize listener
          window.removeEventListener('resize', resizeListener);
        }
            } catch(err) {
              // error handling code
            } 
          }
        
          // call the async fetchData function
          fetchData()
        
      },[])
      var totals = 0;
    return (
        <div className="grid grid-cols-12 p-3 mt-12">
            <div className="col-span-12 flex justify-end items-center">
                <span className="text-md text-right">السلة</span>
            </div>
            <div className="col-span-12 relative">
                
                {carts?carts.map(ele=>
                {
                    
                    var int = parseInt(ele.total_cart);
                    totals+= int
                    return (
                     
                     <div className="w-full mt-2 bg-white shadow rounded p-3">
                     <div className="grid grid-cols-12">
                         <div className="col-span-12 flex flex-col justify-between items-center">
                             <div className="w-full bg-gray-100 p-3 flex flex-row-reverse justify-between items-center">
                                 <span className="text-xs text-yellow-500 flex justify-between items-center" dir="rtl">
                                      المتجر 
                                     <div className="span text-black mr-2">
                                          {ele.shop.name}
                                     </div>
                                 </span>
                                 <span className="text-xs text-yellow-500 flex justify-between items-center" dir="rtl">
                                     توصيل إلى
                                     <div className="span text-black mr-2">
                                          عمان
                                     </div>
                                 </span>
                             </div>
                             <div className="w-full py-3 px-3 flex flex-col justify-end items-end">
                                 <span className="text-sm text-black">رقم السلة :{ele.id}</span>
                                 <div className="grid grid-cols-12 gap-4 w-full py-3" dir="rtl">
                                     <div className="col-span-12 lg:col-span-8">
                                         {ele.items.map(item=>
                                                <div className="rounded shadow mt-3 py-2 px-2 flex justify-between items-center">
                                                <div className="grid grid-cols-12 w-full">
                                                    <div className="col-span-1 flex justify-center items-center">
                                                        <div id="width" className=" border-2 w-14 h-16" style={{borderRadius:"100%",border:"1px solid rgba(245, 158, 11)",height:height,background:`url(${item.image})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}></div>
                                                    </div>
                                                    <div className="col-span-4 lg:col-span-6 flex justify-center items-center">
                                                        <span className="text-xs 2xl:text-sm px-2 h-4 lg:h-auto overflow-hidden">
                                                            {item.description}
                                                        </span>
                                                    </div>
                                                    <div className="col-span-1 flex flex-col justify-start items-center">
                                                        <span className="text-xs 2xl:text-sm text-gray-400 flex-col flex-justify-between items-center">
                                                            السعر
                                                        </span>
                                                        <span className="text-xs 2xl:text-sm text-gray-500 flex-col  mt-2 flex-justify-between items-center">
                                                            {item.unit_price}
                                                        </span>
                                                    </div>
                                                    <div className="col-span-3 lg:col-span-2 flex flex-col justify-start items-center">
                                                        <span className="text-xs 2xl:text-sm text-gray-400 flex-col flex-justify-between items-center">
                                                            الكمية
                                                        </span>
                                                        <div className="rounded border-2 borer-gray-300 flex mt-2  justify-between items-center">
                                                            <span className="text-xs 2xl:text-sm 2xl:py-1 px-1 lg:px-2 2xl:px-3">-</span>
                                                            <span className="text-xs 2xl:text-sm 2xl:py-1 px-1 lg:px-2 2xl:px-3">{item.quantity}</span>
                                                            <span className="text-xs 2xl:text-sm 2xl:py-1 px-1 lg:px-2 2xl:px-3">+</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-span-2 lg:col-span-1 flex flex-col justify-start items-center">
                                                        <span className="text-xs 2xl:text-sm text-gray-400 flex-col flex-justify-between items-center">
                                                            المجمل
                                                        </span>
                                                        <span className="text-xs 2xl:text-sm text-gray-500 flex-col  mt-2 flex-justify-between items-center">
                                                            {item.total}
                                                        </span>
                                                    </div>
                                                    <div className="col-span-1 flex justify-between 2xl:justify-around items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 2xl:mr-0" width="25.837" height="22.067" viewBox="0 0 25.837 22.067">
                                                            <path id="Path_1" data-name="Path 1" d="M28.9,81.5a7.7,7.7,0,0,0-5.982,3,7.7,7.7,0,0,0-5.974-2.99A6.927,6.927,0,0,0,10,88.719c0,4.819,4.274,8.184,7.4,10.641,1.181.933,2.049,1.592,2.755,2.13a21.634,21.634,0,0,1,2.278,1.875.7.7,0,0,0,.986,0,32.262,32.262,0,0,1,3.462-2.813l1.561-1.184c2.584-1.969,7.4-5.629,7.4-10.7A6.9,6.9,0,0,0,28.9,81.5ZM16.944,82.9a6.563,6.563,0,0,1,5.394,3.156.743.743,0,0,0,1.16,0A6.576,6.576,0,0,1,28.9,82.9a5.538,5.538,0,0,1,5.542,5.774c0,4.036-3.538,7.066-6.855,9.586L26.03,99.438c-1.621,1.229-2.41,1.827-3.114,2.468-.514-.459-1.086-.894-1.922-1.529-.675-.514-1.545-1.176-2.742-2.122-2.895-2.275-6.857-5.394-6.857-9.536A5.563,5.563,0,0,1,16.944,82.9Z" transform="translate(-10 -81.5)" fill="#5c5c5c"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 2xl:mr-0" width="22.659" height="22.659" viewBox="0 0 22.659 22.659">
                                                            <path id="Icon_ionic-md-close-circle" data-name="Icon ionic-md-close-circle" d="M14.7,3.375A11.33,11.33,0,1,0,26.034,14.7,11.29,11.29,0,0,0,14.7,3.375Zm5.665,15.408-1.586,1.586L14.7,16.291l-4.079,4.079L9.04,18.783,13.118,14.7,9.04,10.626,10.626,9.04,14.7,13.119,18.783,9.04l1.586,1.586L16.291,14.7Z" transform="translate(-3.375 -3.375)" fill="#ff5c60"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        )}
                                       
                                         </div>
                                     <div className="col-span-12 lg:col-span-4">
                                         <div className="bg-white mt-2 w-full shadow rounded p-3 flex flex-col justify-between items-center">
                                             <span className="text-sm">مجمل السلة</span>
                                             <div className="w-full bg-gray-100 text-xs mt-2 flex justify-between items-center">
                                                 <span className="text-xs py-2  px-2">السعر الأولي</span>
                                                 <span className="text-xs py-1  px-2 numbers">932.00$</span>
                                             </div>
                                             <div className="w-full bg-gray-50 text-xs flex justify-between items-center">
                                                 <span className="text-xs py-1  px-2 flex flex-col justify-between items-start">
                                                     التغليف
                                                     <span className="text-xs text-gray-400">
                                                         ملاحظة عن التغليف
                                                     </span>    
                                                 </span>
                                                 <span className="text-xs py-1  px-2 numbers">{ele.packaging}</span>
                                             </div>
                                             <div className="w-full bg-gray-100 text-xs flex justify-between items-center">
                                                 <span className="text-xs py-1  px-2 flex flex-col justify-between items-start">
                                                     الحسم
                                                     <span className="text-xs text-gray-400">
                                                        ملاحظة عن الحسم
                                                     </span>    
                                                 </span>
                                                <span className="text-xs py-1  px-2 numbers">
                                                     {ele.discount}
                                                </span>
                                             </div>
                                             <div className="w-full bg-gray-50 text-xs flex justify-between items-center">
                                                 <span className="text-xs py-1  px-2 flex flex-col justify-between items-start font-bold">
                                                     المجمل
                                                 </span>
                                                <span className="text-xs py-1  px-2 numbers">
                                                     {ele.total}
                                                </span>
                                             </div>
                                             <div className="rounded flex justify-between items-center bg-yellow-500 text-xs text-black px-12 py-1 shadow mb-1 mt-4">
                                                 شراء من هذا البائع
                                                 <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 w-12" width="15.119" height="15.501" viewBox="0 0 21.119 21.501">
                                                     <g id="Group_5442" data-name="Group 5442" transform="translate(0 -0.001)">
                                                         <path id="Path_4" data-name="Path 4" d="M30.979,6.135a.814.814,0,0,0-.675-.358h0l-16.061.037L12.9,1.76a.816.816,0,0,0-.776-.56H10.815a.816.816,0,0,0,0,1.631h.724l1.33,4.036.013.037,2.036,6.183-2.534,4.722a.816.816,0,0,0,.72,1.2H27.449a.815.815,0,1,0,0-1.629H14.467l1.823-3.4H27.675a.812.812,0,0,0,.756-.513L31.061,6.9A.821.821,0,0,0,30.979,6.135Zm-3.857,6.213H16.39l-1.614-4.9L29.1,7.411Z" transform="translate(-10 -1.199)"/>
                                                         <path id="Path_5" data-name="Path 5" d="M198.488,897.9a1.088,1.088,0,1,0,1.088,1.088A1.088,1.088,0,0,0,198.488,897.9Z" transform="translate(-193.362 -878.575)"/>
                                                         <path id="Path_6" data-name="Path 6" d="M659.088,897.9a1.088,1.088,0,1,0,1.088,1.088A1.088,1.088,0,0,0,659.088,897.9Z" transform="translate(-644.036 -878.575)"/>
                                                     </g>
                                                 </svg>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
              ) } ):""}
               

                
                
              
                
                <div className="flex justify-center items-center z-20">
                    <div className="fixed w-11/12 lg:w-2/4 border-2  bg-white rounded z-20 bottom-28 lg:bottom-3 shadow-lg drop-shadow-md px-4 py-3 flex flex-row-reverse justify-between items-center">
                        <span className="text-sm">
                            كل السلة رقم 9
                        </span>
                        <span className="text-sm" dir="rtl">
                            مجمل السعر : {totals} ر.ع
                        </span>
                        <span className="px-3 py-1 bg-gray-300 text-xs text-black flex justify-center items-center rounded">
                            متابعة الشراء
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}