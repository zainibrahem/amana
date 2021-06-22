import React, { useEffect, useState } from 'react';
import { electron } from 'webpack';
import { useAppDispatch, useAppState } from '../../contexts/app/app.provider';
import Link from 'next/link'

    export default function SideBar (props) {

        interface Data {
            balance:""
            lastDeposit:""
            lastDebited:""
            transactions:Transaction[]
            wallet_code:""
        }
        interface Transaction{
            id:""
            payable_type:""
            payable_id:""
            wallet_id:""
            type:""
            amount:""
            balance:""
            confirmed:boolean
            approved:""
            meta:Meta
            uuid:""
            created_at:""
            updated_at:""
        }
        
        interface Meta{
            type:""
            to:""
            description:""
        }
        const [modal, setModal] = useState<boolean>(false);
        const [modals, setModals] = useState<boolean>(false);
        const [type, setType] = useState<string>('1');
        const [code,setCode] = useState<string>()
        const [email,setEmail] = useState<string>()
        const [amount,setAmount] = useState<string>()
        const [data,setData] = useState<Data>()
        
        const transferModal = () =>{
            setModal(!modal)
        }
        const dispositModal = () =>{
            setModals(!modals)
        }
        const closeModal = () =>{
            setModal(false)
        }
        const closeModals = () =>{
            setModals(false)
        }
        useEffect(()=>{
            fetch(`https://amanacart.com/api/dashboard/wallet`,{
                headers:{
                    'Authorization' : `Bearer ${localStorage.getItem('token')}`
                }})
             .then(res => res.json())
             .then(result =>{
                setData(result)
                console.log(result);
             })
             .catch(e => {
               console.log(e);
           });
        },[])
        let datass = {};
        if(type=='1'){
             datass = {
                type:'code',
                code:code,
                amount:amount
            }
        }
        else{
             datass = {
                type:'email',
                email:email,
                amount:amount
            }
        }
       
        var formBodys = [];
        for (var property in datass) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(datass[property]);
          formBodys.push(encodedKey + "=" + encodedValue);
        }
        async function Transfer() {
            
           const response = await fetch('https://amanacart.com/api/dashboard/wallet/transfer', {
               method: 'post', // *GET, POST, PUT, DELETE, etc.
               headers: {
               'Authorization' : `Bearer ${localStorage.getItem('token')}`,
               'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
               },
               body: formBodys.join("&") // body data type must match "Content-Type" header
           });
           return response.json(); // parses JSON response into native JavaScript objects
        }
        const handletransfer = () =>{
            console.log(datass)
            Transfer()
            .then(data => {
                console.log(data)
                window.location.reload(false)
            }).catch(e => {
                console.log(e)
            });
        }
     
        return (
            <>
            <div className={`${modal?"flex":"hidden"} fixed z-50 top-0 left-0 h-screen w-full flex flex-col  justify-center items-center bg-black bg-opacity-70`}>
                <div onClick={closeModal} className="rounded-full border-2 border-white w-8 h-6 mb-4 text-white text-center text-md cursor-pointer">
                x
                </div>
                <div className={`${modal?"slideUpss":"slideDownss"} relative p-5 w-1/3 bg-white rounded shadow grid grid.cols-12 `} dir="rtl">
                        <div className="col-span-12 flex flex-col justify-between items-start">
                            <span className="text-sm font-bold">
                                تحويل أموال
                            </span>
                            <span className="text-xs mt-12 w-full">
                                نوع النقل
                            </span>
                            <select name="" id="" onChange={(e) => {setType(e.target.value)}} className="w-full text-xs border-2 rounded mt-3 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent">
                                <option value="1">رمز المحفظة</option>
                                <option value="2">البريد الالكتروني</option>
                            </select>
                            <div className={`w-full ${type=='1'?"flex":"hidden"} flex-col justify-between items-center`}>
                                <span className="text-xs mt-4 w-full">
                                    أدخل الرمز
                                </span>
                                <input type="text" name="" onChange={(e) => {setCode(e.target.value)}} className="w-full h-6 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-1" id="" />
                            </div>
                            <div className={`w-full ${type=='2'?"flex":"hidden"} flex-col justify-between items-center`}>
                                <span className="text-xs mt-4 w-full">
                                    أدخل البريد الالكتروني
                                </span>
                                <input type="text" name="" onChange={(e) => {setEmail(e.target.value)}} className="w-full h-6 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-1" id="" />
                            </div>
                            <span className="text-xs mt-4 w-full">
                                    الكمية المراد تحويلها
                            </span>
                            <input type="text" name="" onChange={(e) => {setAmount(e.target.value)}} className="w-full h-6 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-1" id="" />
                            <span onClick={handletransfer} className="text-white cursor-pointer bg-yellow-500 rounded px-2 py-1 text-sm self-center mt-12">
                                تحويل
                            </span>
                        </div>
                </div>
            </div>
            <div className={`${modals?"flex":"hidden"} fixed z-50 top-0 left-0 h-screen w-full flex flex-col  justify-center items-center bg-black bg-opacity-70`}>
                <div onClick={closeModals} className="rounded-full border-2 border-white w-8 h-6 mb-4 text-white text-center text-md cursor-pointer">
                x
                </div>
                <div className={`${modals?"slideUpss":"slideDownss"} relative p-5 w-1/3 bg-white rounded shadow grid grid.cols-12 `} dir="rtl">
                        <div className="col-span-12 flex flex-col justify-between items-start">
                            <span className="text-sm font-bold">
                                تصريف أموال
                            </span>
                            <span className="text-xs mt-12 w-full">
                                الكمية
                            </span>
                            <select name="" id="" onChange={(e) => {setType(e.target.value)}} className="w-full text-xs border-2 rounded mt-3 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent">
                                <option value="1">رمز المحفظة</option>
                                <option value="2">البريد الالكتروني</option>
                            </select>
                            <div className={`w-full ${type=='1'?"flex":"hidden"} flex-col justify-between items-center`}>
                                <span className="text-xs mt-4 w-full">
                                    أدخل الرمز
                                </span>
                                <input type="text" name="" onChange={(e) => {setCode(e.target.value)}} className="w-full h-6 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-1" id="" />
                            </div>
                            <div className={`w-full ${type=='2'?"flex":"hidden"} flex-col justify-between items-center`}>
                                <span className="text-xs mt-4 w-full">
                                    أدخل البريد الالكتروني
                                </span>
                                <input type="text" name="" onChange={(e) => {setEmail(e.target.value)}} className="w-full h-6 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-1" id="" />
                            </div>
                            <span className="text-xs mt-4 w-full">
                                    الكمية المراد تحويلها
                            </span>
                            <input type="text" name="" onChange={(e) => {setAmount(e.target.value)}} className="w-full h-6 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent rounded mt-1" id="" />
                            <span onClick={handletransfer} className="text-white cursor-pointer bg-yellow-500 rounded px-2 py-1 text-sm self-center mt-12">
                                تحويل
                            </span>
                        </div>
                </div>
            </div>
            <div className="grid grid-cols-12 rounded bg-white shadow mt-12" dir="rtl">
                <div className="col-span-12 p-5 border-b-2">
                    <span className="text-md font-bold">
                        المحفظة
                    </span>
                    <span className="text-md font-bold">
                        {data?data.wallet_code:""}
                    </span>
                </div>
                <div className="col-span-12 p-5 flex justify-center items-center">
                    <div className="flex justify-between items-center w-1-3">
                        <div className="flex flex-col justify-between items-center border-l-2 pl-20">
                            <span className="text-yellow-500 font-bold">
                                {data?data.balance:""}
                            </span>
                            <span className="text-sm text-center mt-2">
                                الرصيد الحالي
                            </span>
                        </div>
                        <div className="flex flex-col justify-between items-center border-l-2 pl-20 pr-20">
                            <span className="text-yellow-500 font-bold">
                                {data?data.lastDebited:""}
                            </span>
                            <span className="text-sm text-center mt-2">
                                اخر عملية تحويل
                            </span>
                        </div>
                        <div className="flex flex-col justify-between items-center  pl-20 pr-20">
                            <span className="text-yellow-500 font-bold">
                                {data?data.lastDeposit:""}
                            </span>
                            <span className="text-sm text-center mt-2">
                                اخر عملية سحب
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 flex justify-center items-center">
                    <div className="flex justify-between items-center mt-3 mb-3">
                        <span onClick={dispositModal} className="text-white cursor-pointer text-center text-sm w-32 rounded px-3 py-1 bg-yellow-500 ml-12">
                            تصريف الأموال
                        </span>
                        <span onClick={transferModal} className="text-white cursor-pointer text-center text-sm w-32 rounded px-3 py-1 bg-yellow-500 ml-12">
                            نقل الأموال
                        </span>
                    </div>
                </div>
                <div className="col-span-12">
                    <table className="w-full mt-6">
                        <thead>
                            <tr className="bg-gray-100 ">
                                <th className="py-2">التاريخ</th>
                                <th className="py-2">نوع التحويل</th>
                                <th className="py-2">الوصف</th>
                                <th className="py-2">الكمية</th>
                                <th className="py-2">الحالة</th>
                                <th className="py-2">الخيارات</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?data.transactions.map(ele=>
                                  <tr>
                                  <td className="text-center text-xs py-3">
                                      {ele.updated_at}
                                  </td>
                                  <td className="text-center text-xs py-3">
                                      {ele.type}
                                  </td>
                                  <td className="text-center text-xs py-3">
                                      {ele.meta.description}
                                  </td>
                                  <td className="text-center text-xs py-3">
                                      {ele.amount}
                                  </td>
                                  <td className="text-center text-xs py-3">
                                      {ele.confirmed?"قيد الانتظار":"تمت الموافقة"}
                                  </td>
                                  <td className="text-center text-xs py-3">
                                      <span className="cursor-pointer text-xs border-2 px-2 rounded">
                                          عرض الفاتورة
                                      </span>
                                  </td>
                              </tr>
                            ):""}
                        </tbody>
                    </table>
                </div>
            </div>
            </>
        );
    }