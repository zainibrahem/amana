import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAppState } from '../../contexts/app/app.provider';
export default function Orders() {
    const Route = useAppState('Route');
    
    interface Data {
        id:""
        subject:""
        message:""
        status:string
        time:""
        replies_count:""
        shop:Shop
        order:Order
    }
    interface Shop{
        name:""
        image:Image
       
    }
    interface Order{
        id:""
        order_number:""
    }
    interface Image{
        path:""
    }
    const [data,setData] = useState<Data[]>();
    useEffect(() => {
        fetch(`https://amanacart.com/api/dashboard/messages`,{
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }})
         .then(res => res.json())
         .then(result =>{
            setData(result.data);
         })
         .catch(e => {
       });
     },[])
    return (
        <div className="grid grid-cols-12 bg-white shadow rounded mt-12 p-4" dir="rtl">
            <div className="col-span-12 flex justify-between items-center border-b-2 pb-2">
                <span className="text-md font-bold pb-4">
                    الرسائل
                </span>
                <span className="text-gray-500 self-end text-xs">
                    10-1 من 12 محادثة
                </span>
            </div>
            <div className="col-span-12 overflow-x-scroll  border-b-2 flex justify-between items-center py-2">
                <table className="conversation lgw-full " >
                    {data?data.map(ele=>
                        <a key={ele.id} href={`/dashboard/conversation/conversation?pid=${ele.id}`}>
                            <tr className="w-full">
                                <td className="py-3 w-1/12">
                                    <img className="w-full rounded-full" src={`https://amanacart.com/image/${ele.shop.image.path}`} alt="" />
                                </td>
                                <td className="w-1/12 text-center">
                                    <span className="text-xs text-center text-gray-700">
                                        {ele.shop.name}
                                    </span>
                                </td>
                                <td className="w-80 lg:w-1/2 px-2">
                                    <p className="text-xs font-bold">
                                        {ele.message}
                                    </p>
                                </td>
                                <td className="w-20">
                                    <span className="text-white bg-red-600 px-1   rounded">
                                        {ele.replies_count}
                                    </span>
                                </td>
                                <td className="w-40">
                                    <span className="text-white bg-red-600 px-1   rounded">
                                        {ele.status=="ddd"?ele.status:"New"}
                                    </span>
                                </td>
                                <td className="w-40">
                                    <span className="text-xs font-bold">
                                        الطلب رقم : <span className="text-blue-500"> {ele.order?ele.order.order_number:""}</span>
                                    </span>
                                </td>
                                <td  className="w-40">
                                    <span className="text-xs">
                                        {ele.time}
                                    </span>
                                </td>
                                <td className="w-20">
                                    <span>
                                        <img src={`${Route}/images/shopping-cart.svg`} className="w-4 h-4 lg:w-6 lg:h-6 fill-current text-gray-600 stroke-current " alt="" />
                                    </span>
                                </td>
                            </tr>
                        </a>
                    ):""}
                   
                </table>
            </div>
            
           
           
        </div>
    );
}