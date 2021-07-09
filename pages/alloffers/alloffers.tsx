import React, { useState,useEffect } from 'react';
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
import { useRouter } from 'next/router';

export default function AllOffers() {
    interface Pro{
        gtin:""
        images:Image[]
    }
    interface Image{
        path:""
    }
    interface Shop {
        name:""
        image:""
    }
    interface Data {
        title:""
        shop:Shop
        product:Pro
        items:Items[]
        item:Item
    }
    interface Item{
        title:""
        brand:""
        description:""
        price:""
        gtin:""
        name:""
       
        shop:Shop
        product:Pro
      
    }
    interface Items {
        title:""
        brand:""
        description:""
        price:""
        condition:""
        condition_note:""
        slug:""
        shop:Shop
    }
    const router = useRouter()
    const { pids } = router.query;
    const [data,setData] = useState<Data>();
    const renderHTML = (rawHTML: string) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const [error,setError] = useState(null);
    const dispatch = useAppDispatch();

    const toggleNotification = React.useCallback((info,errortypes) => {
        dispatch({
          type: 'notification',payload:info,types:errortypes
        });
        }
        ,[dispatch]
      );
      const addCart = React.useCallback(() => {
        dispatch({
          type: 'AddToCart',
        });
      
        }
        ,[dispatch]
      );
      const changeCart = React.useCallback(() => {
        dispatch({
          type: 'CartChange'
        });
        }
        ,[dispatch]
      );
    const AddToCart = (ele) =>{
        fetch(`https://amanacart.com/api/addToCart/${ele}`, {
            method: 'post',
            headers: {'Content-Type':'application/json'},
        })
        .then( async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                setError(error);
                toggleNotification(error,'error');
                setTimeout(() => {
                    dispatch({
                        type: 'Nonotification',
                      })
                  }, 5000)
                return Promise.reject(error);
            }
            // setMessgae(data.message);
            addCart();
            changeCart();
            toggleNotification(data.message,'success');
            setTimeout(() => {
                dispatch({
                    type: 'Nonotification',
                  })
              }, 5000)
          
        })
    }
    useEffect(() => {
        document.title = "كل العروض | أمانة"
        fetch(`https://amanacart.com/api/product/${pids}`)
         .then(res => res.json())
         .then(result =>{
             setData(result.data)
         })
         .catch(e => {
       });  
     },[pids])
    return (
        <div className="grid grid-cols-12" dir="rtl">
            <div className="col-span-12 flex justify-start items-center mt-6 rounded bg-white shadow p-2">
                <img className="w-48 rounded" src={data?data.item.product.images[0].path:""} alt="" />
                <div className="flex flex-col justify-between items-start">
                    <span className="text-md text-right mr-3 mt-2">{data?data.item.title:""}</span>
                    <span className="text-sm text-right mr-3 ">من <span className="text-yellow-500">{data?data.item.shop.name:""}</span></span>
                    <span className="text-xs mr-3 mt-2">الرمز : <span className="text-yellow-500">{data?data.item.product.gtin:""}</span></span>
                </div>
            </div>
            <div className="col-span-12 flex justify-start items-center mt-2 rounded bg-white shadow p-2">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="w-2/12">السعر</th>
                            <th className="w-4/12">الحالة</th>
                            <th className="w-3/12">الخصائص</th>
                            <th className="w-1/12">البائع</th>
                            <th className="w-2/12">الخيارات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?data.items.map(ele=>
                        <tr className="border-b-2 pb-2">
                            
                            <td className="p-2 text-center"><span className="text-xl numbers" style={{fontWeight:"bold"}}>120</span><span style={{fontWeight:"bold"}}>ر.ع</span></td>
                            <td className="text-right p-2">
                                <div className="h-full flex flex-col items-start">
                                    <span className="font-bold text-sm ">
                                        {ele.condition}
                                    </span>
                                    <span>
                                    {ele.condition_note}
                                    </span>
                                </div>
                            </td>
                            <td className="text-center p-2">
                                <span className="text-sm">
                                    {renderHTML(ele.description)}
                                </span>
                            </td>
                            <td className="text-center p-2">
                                <div className="flex flex-col items-center">
                                    <img className="w-full" src={ele.shop.image} alt="" />
                                    <span className="text-yellow-500">
                                        {ele.shop.name}
                                    </span>
                                </div>
                            </td>
                            <td className="text-center p-2">
                                <div className="flex flex-col items-center">
                                    <button onClick={()=>AddToCart(ele.slug)} className="bg-yellow-500 border-0 shadow rounded px-3 py-1 text-white w-full">إضافة للسلة</button>
                                    <button className="bg-yellow-300 border-0 mt-2 shadow rounded px-3 py-1 text-white w-full">شراء الان</button>
                                </div>
                            </td>
                        </tr>
                        ):""}

                    </tbody>
                </table>
            </div>
        </div>
    );
}