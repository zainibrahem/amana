import React, { useState } from 'react';
import { useAppState, useAppDispatch } from '../../contexts/app/app.provider';

export const Menu = (props) => {

return (
   
    <div className="px-2 py-2 ">
    <div className="hidden col-span-12 border-t-2 px-2 py-3  justify-between relative items-center">
        <div className="flex  flex-col justify-between items-start">
            <span className="text-sm text-gray-700">المنتج الأول</span>
            <span className="text-xs text-gray-300">من غوغل</span>
        </div>
        <div className="z-50  transition-all flex flex-row justify-between  items-center  rounded-md w-28 h-4 bg-gray-100 ">
            <span className="text-xs cursor-pointer font-bold px-3 bg-gray-200 h-full flex justify-center items-center">-</span>
            <span className="block rounded text-xs font-bold">1</span>
            <span className="text-xs cursor-pointer font-bold h-full flex justify-center items-center px-3 bg-gray-200">+</span>
        </div>
        <span className="text-xs">1200 ل.س</span>
        <div className="absolute top-1 left-3">x</div>
    </div>
    <div className="col-span-12 rounded px-5 py-3 flex justify-start relative items-center">
        <div className="rounded-full w-10 h-8 cursor-pointer" style={{background:"url('./images/right-arrow.svg')",backgroundSize:"cover",backgroundPosition:"center"}}></div>
        <div className="flex  flex-col justify-between items-start mr-2">
            <span className="text-xs text-black">الإعدادات والخصوصية</span>
            <span className="text-xs text-gray-500 mt-2">الرصيد : 500 ر.ل </span>
        </div>
    </div>
    <div className="col-span-12 rounded px-5 noti-hover py-3 flex justify-between relative items-center" style={{borderTop:"1px solid #dcdcdc"}}>
        <div className="w-2/3 flex justify-start relative items-center">
            <div className="rounded-full w-10 h-8 bg-gray-500 "></div>
            <div  className="flex  flex-col justify-between items-start mr-2">
                <span className="text-xs text-black">الإعدادات والخصوصية</span>
            </div>
        </div>
        <div className="arrow">
            <img className="w-4 relative" src="./images/left-arrow.svg" alt="" />
        </div>
    </div>
    <div className="col-span-12 rounded px-5 noti-hover py-3 flex justify-between relative items-center" >
        <div className="w-2/3 flex justify-start relative items-center">
            <div className="rounded-full w-10 h-8 bg-gray-500 "></div>
            <div className="flex  flex-col justify-between items-start mr-2">
                <span className="text-xs text-black">المساعدة والدعم</span>
            </div>
        </div>
        <div className="arrow">
            <img className="w-4 relative" src="./images/left-arrow.svg" alt="" />
        </div>
    </div>
    <div className="col-span-12  rounded px-5 noti-hover py-3 flex justify-between relative items-center" >
        <div className="w-2/3 flex justify-start relative items-center">
            <div className="rounded-full w-10 h-8 bg-gray-500 "></div>
            <div className="flex  flex-col justify-between items-start mr-2">
                <span className="text-xs text-black">العرض وإمكانية الوصول</span>
            </div>
        </div>
        <div className="arrow">
            <img className="w-4 relative" src="./images/left-arrow.svg" alt="" />
        </div>
    </div>
    <div className="col-span-12 rounded px-5 noti-hover py-3 flex justify-start relative items-center" >
        <div className="rounded-full w-10 h-8 bg-gray-500 "></div>
        <div className="flex  flex-col justify-between items-start mr-2">
            <span className="text-xs text-black">تسجيل الخروج</span>
        </div>
    </div>
</div>

);

}