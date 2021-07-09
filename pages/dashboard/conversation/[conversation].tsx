import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAppState } from '../../../contexts/app/app.provider';
export default function Orders() {

    const Route = useAppState('Route');
    const router = useRouter()
    const [reply,setReply] = useState<string>()
    const { pid } = router.query;
    interface Order{
        order_number:""

    }
    interface Photo{

    }
    interface Message{
        message:""
        order:Order
        photo:Photo
        shop:Shop
        replies_count:""
        time:""
        status:""
    }
    interface Image{
        path:""
    }
    interface Shop{
        image:Image
        name:""
        id:""
    }
    interface Reply{
        id:""
        reply:""
        read:boolean
        created_at:""
        customer_id:string
    }
    interface Data {
        message:Message
        replies:Reply[]
    }
    const [data,setData] = useState<Data>()
    
    useEffect(() => {
        fetch(`https://amanacart.com/api/dashboard/messages/${pid}`)
         .then(res => res.json())
         .then(result =>{
            setData(result.data);
         })
         .catch(e => {
       });
     },[pid])
     let formData = new FormData(); 

     async function postData(formData) {
       const response = await fetch(`https://amanacart.com/api/dashboard/send_reply/${data?data.message.shop.id:""}`, {
           method: 'POST',
           headers: {
           'Authorization' : `Bearer ${localStorage.getItem('token')}`,
           },
           body: formData
       });
       return response.json(); // parses JSON response into native JavaScript objects
    }
     const handleReply = () => {
        formData.append('reply',reply);
        postData(formData)
        .then(data => {
            // window.location.reload() // JSON data parsed by `data.json()` call
          });
     }
    return (
        <div className="grid grid-cols-12 bg-white p-4 rounded shadow mt-12" dir="rtl">
            <div className="col-span-12 border-b-2 pb-2">
                <span className="text-md font-bold">
                    الرسائل
                </span>
            </div>
            <div className="col-span-12 flex flex-col justify-between items-start my-5">
                <span className="text-sm font-bold">
                    مني
                </span>
                <div className="text-gray-500 text-xs font-bold">
                    {data?data.message.time:""}
                </div>
            </div>
            <div className="col-span-12 overflow-x-scroll lg:overflow-x-hidden border-b-2 flex justify-between items-center py-2">
                <table className="conversation lg:w-full">
                    <td>
                        <img className="w-16 rounded-full" src={`https://amanacart.com/image/${data?data.message.shop.image.path:""}`} alt="" />
                    </td>
                    <td>
                        <span className="text-xs text-gray-700">
                            {data?data.message.shop.name:""}
                        </span>
                    </td>
                    <td>
                        <p className="text-xs font-bold w-6/12">
                            {data?data.message.message:""}
                        </p>
                    </td>
                    <td>
                        <span className="text-white bg-red-600 px-1  rounded">
                            {data?data.message.replies_count:""}
                        </span>
                    </td>
                    <td>
                        <span className="text-white bg-red-600 px-1  rounded">
                            {data?data.message.status:""}
                        </span>
                    </td>
                    <td>
                        <span className="text-xs font-bold">
                            الطلب رقم : <span className="text-blue-500"> {data&&data.message&&data.message.order?data.message.order.order_number:""}</span>
                        </span>
                    </td>
                    <td>
                        <span className="text-xs">
                            {data?data.message.time:""}
                        </span>
                    </td>
                    <td>
                        <span>
                            <img src={`${Route}/images/shopping-cart.svg`} className="w-4 h-4 lg:w-6 lg:h-6 fill-current text-gray-600 stroke-current " alt="" />
                        </span>
                    </td>
                </table>
            </div>
        
        
         
            {data?data.replies.map(ele=>
                <div key={ele.id} className="col-span-12 my-4">
                    <div className="flex justify-start items-center">
                        <div className="flex flex-col justify-between items-start">
                            <span className="text-xs font-bold">
                                {data&&ele.customer_id?"مني":data.message.shop.name}
                            </span>
                            <span className="text-xs text-gray-500 mt-1">
                                {ele.created_at}
                            </span>
                        </div>
                        <div className="border-2 px-2 py-5 text-xs font-bold bg-gray-50 shadow w-8/12 mr-4">
                            {ele.reply}
                        </div>
                    </div>
                </div>
            ):""}
            <div className="col-span-1 lg:col-span-3"></div>
            <div className="col-span-10 lg:col-span-6">
                <span className="text-xs font-bold">
                    الرد:
                </span>
                <textarea onChange={(e)=>setReply(e.target.value)} className="text-xs  p-3 w-full h-28 border-2 mt-2" name="" id="" placeholder="اكتب رسالتك هنا" ></textarea>
            </div>
            <div className="col-span-1 lg:col-span-3">
            </div>

            <div className="col-span-3"></div>
            <div className="col-span-6 flex justify-end items-center">
                <span onClick={handleReply} className="self-center cursor-pointer bg-blue-500 mt-3 text-white px-2 rounded w-24 text-center">
                    إرسال
                </span>
            </div>
            <div className="col-span-3"></div>
        </div>
    );
}