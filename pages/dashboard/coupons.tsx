import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAppState } from '../../contexts/app/app.provider';
export default function Orders() {
    interface Data{
        code:""
        validity:""
        name:""
        amount:""
        shop:Shop
    }
    interface Shop{
        name:""
    }
    const Route = useAppState('Route');
    const [data,setData] = useState<Data[]>();

    
    useEffect(()=>{
        fetch(`https://amanacart.com/api/coupons`,{
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }})
         .then(res => res.json())
         .then(result =>{
            setData(result.data)
            console.log(result.data);
         })
         .catch(e => {
           console.log(e);
       });
    },[])

    return (
        <div className="grid grid-cols-12 bg-white shadow rounded mt-12 py-4" dir="rtl">
            <div className="col-span-12 px-4">
                <span className="text-md font-bold">
                    الكوبونات
                </span>
            </div>
            <div className="col-span-12 mt-4 ">
                <div className="flex justify-between overflow-x-scroll lg:overflow-visible items-center">
                    <table className="lg:w-full" style={{width:"200%"}}>
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="text-xs  lg:text-sm py-1">القيمة</th>
                                <th className="text-xs  lg:text-sm py-1">المتجر</th>
                                <th className="text-xs  lg:text-sm py-1">الرمز</th>
                                <th className="text-xs  lg:text-sm py-1">الصلاحية</th>
                            </tr>
                        </thead>
                        <tbody >
                        {data?data.map((ele,index)=>
                                <tr className={`${index+1 != data.length?"border-b-2":""}`}>
                                    <td className="px-4  text-center py-5">
                                        <span className="hidden lg:block text-sm  lg:text-2xl text-white rounded bg-yellow-500 px-2 lg:px-4">
                                            خصم {ele.amount}
                                        </span>
                                        <span className="block lg:hidden text-sm  lg:text-2xl text-white rounded bg-yellow-500 px-2 lg:px-4">
                                            55%
                                        </span>
                                        
                                    </td>
                                    <td className="text-center">
                                        <span className="text-xs font-bold text-blue-500">
                                            {ele.shop.name}
                                        </span>
                                    </td>
                                    <td className="text-center">
                                        <span className="text-xs font-bold ">
                                            {ele.code}
                                        </span>
                                    </td>
                                    <td className="text-center ">
                                        <span className="text-xs w-96 font-bold">
                                                {ele.validity}
                                        </span>
                                    </td>
                                </tr>
                            
                        ):""}
                            </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}