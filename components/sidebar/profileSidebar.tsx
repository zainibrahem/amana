import React, { useEffect, useState } from 'react';
import { electron } from 'webpack';
import { useAppDispatch, useAppState } from '../../contexts/app/app.provider';
import Link from 'next/link'

    export default function SideBar (props) {

    const isDrawerOpen = useAppState('isDrawerOpen');
    const Loading = useAppState('Loading');
    const [shown,setShown] = useState(0);
    const [catss,setCatss] = useState(null);
    const [type,setType]=useState('home');
    const [routes,setRoutes]=useState<string>();
    const Route = useAppState('Route');
    // const [data,setData] = useState();
    // const [userId,setUserId] = useState(0);
    // const dispatch = useAppDispatch();

        useEffect(()=>{
            setRoutes(window.location.href)
        })
  

    const toggleAccordoin = (event) => {
        
        
        if(event.currentTarget.children[1].classList.contains('block')){

            event.currentTarget.children[1].classList.remove('block');
            event.currentTarget.children[1].classList.add('hidden');
            event.currentTarget.classList.add('duration-1000');
            event.currentTarget.classList.add('transition-all');
            event.currentTarget.classList.add('max-h-11');
            event.currentTarget.classList.remove('max-h-96');
            event.currentTarget.style.background="#fff";
            
        }
        else{
            var items = document.getElementsByClassName('items');

            for(var i = 0; i < items.length; i++)
                {
                    items[i].children[1].classList.remove('block');
                    items[i].children[1].classList.add('hidden');
                    items[i].classList.add('max-h-11');
                    items[i].classList.add('backgroundwhite');
                    items[i].classList.remove('max-h-96');
                    items[i].classList.remove('transition-all');
                    items[i].classList.remove('duration-1000');
                }
            
            event.currentTarget.children[1].classList.remove('hidden');
            event.currentTarget.children[1].classList.add('block');
            event.currentTarget.classList.add('max-h-96');
            event.currentTarget.classList.remove('max-h-11');
            event.currentTarget.classList.add('duration-1000');
            event.currentTarget.classList.add('transition-all');
            event.currentTarget.style.background="#eee";
        }
    }

    return (
            <div id="ads" style={{width:props.width}} className="fixed overflow-x-hidden bg-white dark:bg-gray-800  z-10">
                <div className="flex flex-col  sm:justify-around">
                    <div className={"w-full h-screen shadow"}>
                    <nav className={"h-full flex flex-col justify-start items-end pr-5 pt-10"}>
                        <div className="rounded-full shadow-md w-24 h-24 flex flex-col items-center self-center relative" style={{background:`url(${localStorage.getItem('avatar')?localStorage.getItem('avatar'):""})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center center"}}>
                                {/* <a href="/dashboard/profile" className='absolute -bottom-5 bg-yellow-500 rounded-full px-3 text-sm cursor-pointer text-white py-1 '>
                                        تعديل
                                </a> */}
                        </div>
                        <div className="flex flex-col justify-between items-center mt-3 self-center  ">
                            <div className="text-md font-bold">
                                    {localStorage.getItem('nice_name')?localStorage.getItem('nice_name'):""}
                            </div>
                            <div className="mt-1" style={{fontSize:"12px"}}>
                                 الرصيد : 2500 ر.ع
                            </div>
                        </div>
                        <div className="flex flex-col justify-between items-center w-full mt-7" dir="rtl">
                            <ul className="list-none w-full" >
                                <li className={`${routes==`${Route}/dashboard`?"text-yellow-500":""} flex justify-start items-center mt-2 hoverme`}>
                                    <Link href="/dashboard">
                                    <div  className="flex justify-start cursor-pointer items-center">
                                        {/* <svg className={` ml-2`} xmlns="http://www.w3.org/2000/svg" width="19.165" height="14.837" viewBox="0 0 19.165 14.837">
                                            <path fill={`${routes==`${Route}/dashboard`?"rgba(245, 158, 11)":""}`} id="Path_4533" data-name="Path 4533" d="M19.065,66.342l-4.452-4.779,1.363-1.36a1.237,1.237,0,0,0,.009-1.75,1.248,1.248,0,0,0-1.752-.014l0,0-1.869,1.865h-.7V58.869a.374.374,0,0,0-.374-.374H9.306v-.306a.374.374,0,1,0-.749,0V58.5H7.19v-.306a.374.374,0,1,0-.749,0V58.5H5.074v-.306a.374.374,0,1,0-.749,0V58.5H2.958v-.306a.374.374,0,1,0-.749,0V58.5H.374A.374.374,0,0,0,0,58.869V72.278a.374.374,0,0,0,.374.374H4.2a.374.374,0,0,0,0-.749H.749V59.244h1.46v.34a.374.374,0,0,0,.749,0v-.34H4.325v.34a.374.374,0,0,0,.749,0v-.34H6.441v.34a.374.374,0,0,0,.749,0v-.34H8.557v.34a.374.374,0,0,0,.749,0v-.34h1.608v1.065a2.706,2.706,0,0,0-1.791.785L6.368,63.849a.378.378,0,0,0,.061.579,2.546,2.546,0,0,0,1.021.383,2.579,2.579,0,0,0,.368.026h0l-.43.429a.374.374,0,0,0-.074.106l-1.2,1.8a.817.817,0,0,0-.136.528h-3.4a.374.374,0,0,0,0,.749H6.8a.829.829,0,0,0,.459-.145l1.825-1.24a.388.388,0,0,0,.061-.049l.847-.845.924.922V71.9H7.488a.374.374,0,0,0,0,.749h3.8a.374.374,0,0,0,.374-.374V67.826a2.625,2.625,0,0,0,1.686.607h1.493a1.146,1.146,0,0,1,.824.351l2.852,3.031a.378.378,0,0,0,.647-.257V66.6A.374.374,0,0,0,19.065,66.342ZM9.652,61.624a1.946,1.946,0,0,1,1.372-.568h.586L9.278,63.382a2.611,2.611,0,0,1-.7.538A1.83,1.83,0,0,1,7.271,64Zm5.1-2.649a.5.5,0,0,1,.7.005.489.489,0,0,1,0,.692l-3.912,3.9-.189-.189a1.46,1.46,0,0,0-.64-.373ZM6.837,67.688a.064.064,0,0,1-.09-.008.061.061,0,0,1-.009-.09l.978-1.469.578.577ZM8.88,66.224l-.694-.694.713-.712a1.471,1.471,0,0,0,.379.645l.183.182Zm9.537,4.391L16.21,68.27a1.9,1.9,0,0,0-1.368-.585H13.349a1.884,1.884,0,0,1-1.339-.553l-2.2-2.2a.718.718,0,0,1,0-1.019.732.732,0,0,1,1.012,0l1.791,1.791a.378.378,0,0,0,.529,0,.374.374,0,0,0,0-.529L12.065,64.1l2.017-2.012,4.334,4.653Z" transform="translate(0 -57.815)" />
                                        </svg> */}
                                        <img src={`${Route}/images/icons/DASHBOARD.svg`} className="w-6 h-8 ml-2" alt="" />
                                        لوحة التحكم
                                    </div>
                                    </Link>
                                </li>
                                <li className={`${routes==`${Route}/dashboard/order`?"text-yellow-500":""} flex justify-start items-center mt-2 hoverme`}>
                                    <Link href="/dashboard/order">
                                    <div  className="flex justify-start cursor-pointer items-center ">
                                        {/* <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="19.165" height="14.837" viewBox="0 0 19.165 14.837">
                                            <path fill={`${routes==`${Route}/dashboard/order`?"rgba(245, 158, 11)":""}`} id="Path_4533" data-name="Path 4533" d="M19.065,66.342l-4.452-4.779,1.363-1.36a1.237,1.237,0,0,0,.009-1.75,1.248,1.248,0,0,0-1.752-.014l0,0-1.869,1.865h-.7V58.869a.374.374,0,0,0-.374-.374H9.306v-.306a.374.374,0,1,0-.749,0V58.5H7.19v-.306a.374.374,0,1,0-.749,0V58.5H5.074v-.306a.374.374,0,1,0-.749,0V58.5H2.958v-.306a.374.374,0,1,0-.749,0V58.5H.374A.374.374,0,0,0,0,58.869V72.278a.374.374,0,0,0,.374.374H4.2a.374.374,0,0,0,0-.749H.749V59.244h1.46v.34a.374.374,0,0,0,.749,0v-.34H4.325v.34a.374.374,0,0,0,.749,0v-.34H6.441v.34a.374.374,0,0,0,.749,0v-.34H8.557v.34a.374.374,0,0,0,.749,0v-.34h1.608v1.065a2.706,2.706,0,0,0-1.791.785L6.368,63.849a.378.378,0,0,0,.061.579,2.546,2.546,0,0,0,1.021.383,2.579,2.579,0,0,0,.368.026h0l-.43.429a.374.374,0,0,0-.074.106l-1.2,1.8a.817.817,0,0,0-.136.528h-3.4a.374.374,0,0,0,0,.749H6.8a.829.829,0,0,0,.459-.145l1.825-1.24a.388.388,0,0,0,.061-.049l.847-.845.924.922V71.9H7.488a.374.374,0,0,0,0,.749h3.8a.374.374,0,0,0,.374-.374V67.826a2.625,2.625,0,0,0,1.686.607h1.493a1.146,1.146,0,0,1,.824.351l2.852,3.031a.378.378,0,0,0,.647-.257V66.6A.374.374,0,0,0,19.065,66.342ZM9.652,61.624a1.946,1.946,0,0,1,1.372-.568h.586L9.278,63.382a2.611,2.611,0,0,1-.7.538A1.83,1.83,0,0,1,7.271,64Zm5.1-2.649a.5.5,0,0,1,.7.005.489.489,0,0,1,0,.692l-3.912,3.9-.189-.189a1.46,1.46,0,0,0-.64-.373ZM6.837,67.688a.064.064,0,0,1-.09-.008.061.061,0,0,1-.009-.09l.978-1.469.578.577ZM8.88,66.224l-.694-.694.713-.712a1.471,1.471,0,0,0,.379.645l.183.182Zm9.537,4.391L16.21,68.27a1.9,1.9,0,0,0-1.368-.585H13.349a1.884,1.884,0,0,1-1.339-.553l-2.2-2.2a.718.718,0,0,1,0-1.019.732.732,0,0,1,1.012,0l1.791,1.791a.378.378,0,0,0,.529,0,.374.374,0,0,0,0-.529L12.065,64.1l2.017-2.012,4.334,4.653Z" transform="translate(0 -57.815)" />
                                        </svg> */}
                                        <img src={`${Route}/images/icons/ordersblack.svg`} className="w-6 h-8 ml-2" alt="" />
                                        طلباتك
                                    </div>
                                    </Link>
                                </li>
                                <li className={`${routes==`${Route}/dashboard/coupons`?"text-yellow-500":""} flex justify-start items-center mt-2 hoverme`}>
                                    <Link href="/dashboard/coupons">
                                    <div  className="flex justify-start cursor-pointer items-center ">
                                        {/* <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="19.165" height="14.837" viewBox="0 0 19.165 14.837">
                                            <path fill={`${routes==`${Route}/dashboard/order`?"rgba(245, 158, 11)":""}`} id="Path_4533" data-name="Path 4533" d="M19.065,66.342l-4.452-4.779,1.363-1.36a1.237,1.237,0,0,0,.009-1.75,1.248,1.248,0,0,0-1.752-.014l0,0-1.869,1.865h-.7V58.869a.374.374,0,0,0-.374-.374H9.306v-.306a.374.374,0,1,0-.749,0V58.5H7.19v-.306a.374.374,0,1,0-.749,0V58.5H5.074v-.306a.374.374,0,1,0-.749,0V58.5H2.958v-.306a.374.374,0,1,0-.749,0V58.5H.374A.374.374,0,0,0,0,58.869V72.278a.374.374,0,0,0,.374.374H4.2a.374.374,0,0,0,0-.749H.749V59.244h1.46v.34a.374.374,0,0,0,.749,0v-.34H4.325v.34a.374.374,0,0,0,.749,0v-.34H6.441v.34a.374.374,0,0,0,.749,0v-.34H8.557v.34a.374.374,0,0,0,.749,0v-.34h1.608v1.065a2.706,2.706,0,0,0-1.791.785L6.368,63.849a.378.378,0,0,0,.061.579,2.546,2.546,0,0,0,1.021.383,2.579,2.579,0,0,0,.368.026h0l-.43.429a.374.374,0,0,0-.074.106l-1.2,1.8a.817.817,0,0,0-.136.528h-3.4a.374.374,0,0,0,0,.749H6.8a.829.829,0,0,0,.459-.145l1.825-1.24a.388.388,0,0,0,.061-.049l.847-.845.924.922V71.9H7.488a.374.374,0,0,0,0,.749h3.8a.374.374,0,0,0,.374-.374V67.826a2.625,2.625,0,0,0,1.686.607h1.493a1.146,1.146,0,0,1,.824.351l2.852,3.031a.378.378,0,0,0,.647-.257V66.6A.374.374,0,0,0,19.065,66.342ZM9.652,61.624a1.946,1.946,0,0,1,1.372-.568h.586L9.278,63.382a2.611,2.611,0,0,1-.7.538A1.83,1.83,0,0,1,7.271,64Zm5.1-2.649a.5.5,0,0,1,.7.005.489.489,0,0,1,0,.692l-3.912,3.9-.189-.189a1.46,1.46,0,0,0-.64-.373ZM6.837,67.688a.064.064,0,0,1-.09-.008.061.061,0,0,1-.009-.09l.978-1.469.578.577ZM8.88,66.224l-.694-.694.713-.712a1.471,1.471,0,0,0,.379.645l.183.182Zm9.537,4.391L16.21,68.27a1.9,1.9,0,0,0-1.368-.585H13.349a1.884,1.884,0,0,1-1.339-.553l-2.2-2.2a.718.718,0,0,1,0-1.019.732.732,0,0,1,1.012,0l1.791,1.791a.378.378,0,0,0,.529,0,.374.374,0,0,0,0-.529L12.065,64.1l2.017-2.012,4.334,4.653Z" transform="translate(0 -57.815)" />
                                        </svg> */}
                                        <img className="w-6 h-8 ml-2" src={`${Route}/images/icons/Group 1black.svg`} alt="" />
                                        الكوبونات
                                    </div>
                                    </Link>
                                </li>
                                <li className={`${routes==`${Route}/dashboard/wallet`?"text-yellow-500":""} flex flex-col justify-start items-start mt-2 hoverme`}>
                                    <Link href="/dashboard/wallet">
                                    <div  className="flex justify-start cursor-pointer items-center ">
                                        {/* <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="19.165" height="14.837" viewBox="0 0 19.165 14.837">
                                            <path fill={`${routes==`${Route}/dashboard/wallet`?"rgba(245, 158, 11)":""}`} id="Path_4533" data-name="Path 4533" d="M19.065,66.342l-4.452-4.779,1.363-1.36a1.237,1.237,0,0,0,.009-1.75,1.248,1.248,0,0,0-1.752-.014l0,0-1.869,1.865h-.7V58.869a.374.374,0,0,0-.374-.374H9.306v-.306a.374.374,0,1,0-.749,0V58.5H7.19v-.306a.374.374,0,1,0-.749,0V58.5H5.074v-.306a.374.374,0,1,0-.749,0V58.5H2.958v-.306a.374.374,0,1,0-.749,0V58.5H.374A.374.374,0,0,0,0,58.869V72.278a.374.374,0,0,0,.374.374H4.2a.374.374,0,0,0,0-.749H.749V59.244h1.46v.34a.374.374,0,0,0,.749,0v-.34H4.325v.34a.374.374,0,0,0,.749,0v-.34H6.441v.34a.374.374,0,0,0,.749,0v-.34H8.557v.34a.374.374,0,0,0,.749,0v-.34h1.608v1.065a2.706,2.706,0,0,0-1.791.785L6.368,63.849a.378.378,0,0,0,.061.579,2.546,2.546,0,0,0,1.021.383,2.579,2.579,0,0,0,.368.026h0l-.43.429a.374.374,0,0,0-.074.106l-1.2,1.8a.817.817,0,0,0-.136.528h-3.4a.374.374,0,0,0,0,.749H6.8a.829.829,0,0,0,.459-.145l1.825-1.24a.388.388,0,0,0,.061-.049l.847-.845.924.922V71.9H7.488a.374.374,0,0,0,0,.749h3.8a.374.374,0,0,0,.374-.374V67.826a2.625,2.625,0,0,0,1.686.607h1.493a1.146,1.146,0,0,1,.824.351l2.852,3.031a.378.378,0,0,0,.647-.257V66.6A.374.374,0,0,0,19.065,66.342ZM9.652,61.624a1.946,1.946,0,0,1,1.372-.568h.586L9.278,63.382a2.611,2.611,0,0,1-.7.538A1.83,1.83,0,0,1,7.271,64Zm5.1-2.649a.5.5,0,0,1,.7.005.489.489,0,0,1,0,.692l-3.912,3.9-.189-.189a1.46,1.46,0,0,0-.64-.373ZM6.837,67.688a.064.064,0,0,1-.09-.008.061.061,0,0,1-.009-.09l.978-1.469.578.577ZM8.88,66.224l-.694-.694.713-.712a1.471,1.471,0,0,0,.379.645l.183.182Zm9.537,4.391L16.21,68.27a1.9,1.9,0,0,0-1.368-.585H13.349a1.884,1.884,0,0,1-1.339-.553l-2.2-2.2a.718.718,0,0,1,0-1.019.732.732,0,0,1,1.012,0l1.791,1.791a.378.378,0,0,0,.529,0,.374.374,0,0,0,0-.529L12.065,64.1l2.017-2.012,4.334,4.653Z" transform="translate(0 -57.815)" />
                                        </svg> */}
                                        <img className="w-6  ml-2" src={`${Route}/images/icons/wallet.svg`} alt="" />
                                        محفظتي
                                    </div>
                                    </Link>
                                    {/* <span className="text-xs mr-9 text-gray-500">
                                        الرصيد 2500
                                    </span> */}
                                </li>
                                <li className="flex justify-start cursor-pointer items-center mt-2 hoverme">
                                    {/* <svg className="ml-2 mr-1" xmlns="http://www.w3.org/2000/svg" width="14.819" height="14.819" viewBox="0 0 14.819 14.819">
                                        <path id="Icon_metro-help" data-name="Icon metro-help" d="M9.98,1.928a7.41,7.41,0,1,0,7.41,7.41,7.41,7.41,0,0,0-7.41-7.41ZM7.2,9.338A2.779,2.779,0,1,1,9.98,12.116,2.779,2.779,0,0,1,7.2,9.338Zm8.77,2.482L13.4,10.756a3.714,3.714,0,0,0,0-2.836l2.568-1.064a6.5,6.5,0,0,1,0,4.963ZM12.462,3.347,11.4,5.914a3.714,3.714,0,0,0-2.836,0L7.5,3.347a6.5,6.5,0,0,1,4.963,0ZM3.989,6.856,6.557,7.92a3.714,3.714,0,0,0,0,2.836L3.989,11.819a6.5,6.5,0,0,1,0-4.963ZM7.5,15.329l1.064-2.568a3.714,3.714,0,0,0,2.836,0l1.064,2.568a6.5,6.5,0,0,1-4.963,0Z" transform="translate(-2.571 -1.928)" fill="#2c2c2c"/>
                                    </svg> */}

                                    <img src={`${Route}/images/setting.svg`} className="w-6 h-8 ml-2" alt="" />
                                    تحتاج مساعدة
                                </li>
                               
                                <li className={`${routes==`${Route}/dashboard/profile`?"text-yellow-500":""} flex justify-start items-center hoverme`}>
                                    <Link href="/dashboard/profile">
                                    <div  className="flex justify-start cursor-pointer items-center mt-2">
                                        {/* <svg className="w-4 ml-2 mr-1" xmlns="http://www.w3.org/2000/svg" width="19.165" height="14.82" viewBox="0 0 13.81 14.82">
                                            <g id="Group_4845" data-name="Group 4845" transform="translate(-17.44)">
                                                <g id="Group_996" data-name="Group 996" transform="translate(17.44 8.348)">
                                                <g id="Group_995" data-name="Group 995">
                                                    <path fill={`${routes==`${Route}/dashboard/profile`?"rgba(245, 158, 11)":""}`} id="Path_4534" data-name="Path 4534" d="M24.345,288.389c-4.453,0-6.9,2.106-6.9,5.931a.541.541,0,0,0,.541.541H30.709a.541.541,0,0,0,.541-.541C31.25,290.5,28.8,288.389,24.345,288.389Zm-5.8,5.391c.213-2.86,2.162-4.309,5.8-4.309s5.591,1.449,5.8,4.309Z" transform="translate(-17.44 -288.389)" />
                                                </g>
                                                </g>
                                                <path fill={`${routes==`${Route}/dashboard/profile`?"rgba(245, 158, 11)":""}`} id="Path_4535" data-name="Path 4535" d="M135.637,0a3.545,3.545,0,0,0-3.588,3.66,3.6,3.6,0,1,0,7.175,0A3.545,3.545,0,0,0,135.637,0Zm0,6.472a2.675,2.675,0,0,1-2.506-2.812,2.459,2.459,0,0,1,2.506-2.578,2.487,2.487,0,0,1,2.506,2.578A2.675,2.675,0,0,1,135.637,6.472Z" transform="translate(-111.292)" />
                                            </g>
                                        </svg> */}
                                        <img className="w-6 h-8 ml-2" src={`${Route}/images/icons/profile.svg`} alt="" />

                                        الملف الشخصي
                                    </div>
                                    </Link>
                                </li>
                             

                                {/* <li className="flex justify-start cursor-pointer items-center mt-2 hoverme">
                                    <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="19.165" height="14.837" viewBox="0 0 19.165 14.837">
                                        <path id="Path_4533" data-name="Path 4533" d="M19.065,66.342l-4.452-4.779,1.363-1.36a1.237,1.237,0,0,0,.009-1.75,1.248,1.248,0,0,0-1.752-.014l0,0-1.869,1.865h-.7V58.869a.374.374,0,0,0-.374-.374H9.306v-.306a.374.374,0,1,0-.749,0V58.5H7.19v-.306a.374.374,0,1,0-.749,0V58.5H5.074v-.306a.374.374,0,1,0-.749,0V58.5H2.958v-.306a.374.374,0,1,0-.749,0V58.5H.374A.374.374,0,0,0,0,58.869V72.278a.374.374,0,0,0,.374.374H4.2a.374.374,0,0,0,0-.749H.749V59.244h1.46v.34a.374.374,0,0,0,.749,0v-.34H4.325v.34a.374.374,0,0,0,.749,0v-.34H6.441v.34a.374.374,0,0,0,.749,0v-.34H8.557v.34a.374.374,0,0,0,.749,0v-.34h1.608v1.065a2.706,2.706,0,0,0-1.791.785L6.368,63.849a.378.378,0,0,0,.061.579,2.546,2.546,0,0,0,1.021.383,2.579,2.579,0,0,0,.368.026h0l-.43.429a.374.374,0,0,0-.074.106l-1.2,1.8a.817.817,0,0,0-.136.528h-3.4a.374.374,0,0,0,0,.749H6.8a.829.829,0,0,0,.459-.145l1.825-1.24a.388.388,0,0,0,.061-.049l.847-.845.924.922V71.9H7.488a.374.374,0,0,0,0,.749h3.8a.374.374,0,0,0,.374-.374V67.826a2.625,2.625,0,0,0,1.686.607h1.493a1.146,1.146,0,0,1,.824.351l2.852,3.031a.378.378,0,0,0,.647-.257V66.6A.374.374,0,0,0,19.065,66.342ZM9.652,61.624a1.946,1.946,0,0,1,1.372-.568h.586L9.278,63.382a2.611,2.611,0,0,1-.7.538A1.83,1.83,0,0,1,7.271,64Zm5.1-2.649a.5.5,0,0,1,.7.005.489.489,0,0,1,0,.692l-3.912,3.9-.189-.189a1.46,1.46,0,0,0-.64-.373ZM6.837,67.688a.064.064,0,0,1-.09-.008.061.061,0,0,1-.009-.09l.978-1.469.578.577ZM8.88,66.224l-.694-.694.713-.712a1.471,1.471,0,0,0,.379.645l.183.182Zm9.537,4.391L16.21,68.27a1.9,1.9,0,0,0-1.368-.585H13.349a1.884,1.884,0,0,1-1.339-.553l-2.2-2.2a.718.718,0,0,1,0-1.019.732.732,0,0,1,1.012,0l1.791,1.791a.378.378,0,0,0,.529,0,.374.374,0,0,0,0-.529L12.065,64.1l2.017-2.012,4.334,4.653Z" transform="translate(0 -57.815)" fill="#2c2c2c"/>
                                    </svg>
                                    الأمان
                                </li>
                                <li className="flex justify-start cursor-pointer items-center mt-2 hoverme cursor-pointer">
                                    <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="19.165" height="14.837" viewBox="0 0 19.165 14.837">
                                        <path id="Path_4533" data-name="Path 4533" d="M19.065,66.342l-4.452-4.779,1.363-1.36a1.237,1.237,0,0,0,.009-1.75,1.248,1.248,0,0,0-1.752-.014l0,0-1.869,1.865h-.7V58.869a.374.374,0,0,0-.374-.374H9.306v-.306a.374.374,0,1,0-.749,0V58.5H7.19v-.306a.374.374,0,1,0-.749,0V58.5H5.074v-.306a.374.374,0,1,0-.749,0V58.5H2.958v-.306a.374.374,0,1,0-.749,0V58.5H.374A.374.374,0,0,0,0,58.869V72.278a.374.374,0,0,0,.374.374H4.2a.374.374,0,0,0,0-.749H.749V59.244h1.46v.34a.374.374,0,0,0,.749,0v-.34H4.325v.34a.374.374,0,0,0,.749,0v-.34H6.441v.34a.374.374,0,0,0,.749,0v-.34H8.557v.34a.374.374,0,0,0,.749,0v-.34h1.608v1.065a2.706,2.706,0,0,0-1.791.785L6.368,63.849a.378.378,0,0,0,.061.579,2.546,2.546,0,0,0,1.021.383,2.579,2.579,0,0,0,.368.026h0l-.43.429a.374.374,0,0,0-.074.106l-1.2,1.8a.817.817,0,0,0-.136.528h-3.4a.374.374,0,0,0,0,.749H6.8a.829.829,0,0,0,.459-.145l1.825-1.24a.388.388,0,0,0,.061-.049l.847-.845.924.922V71.9H7.488a.374.374,0,0,0,0,.749h3.8a.374.374,0,0,0,.374-.374V67.826a2.625,2.625,0,0,0,1.686.607h1.493a1.146,1.146,0,0,1,.824.351l2.852,3.031a.378.378,0,0,0,.647-.257V66.6A.374.374,0,0,0,19.065,66.342ZM9.652,61.624a1.946,1.946,0,0,1,1.372-.568h.586L9.278,63.382a2.611,2.611,0,0,1-.7.538A1.83,1.83,0,0,1,7.271,64Zm5.1-2.649a.5.5,0,0,1,.7.005.489.489,0,0,1,0,.692l-3.912,3.9-.189-.189a1.46,1.46,0,0,0-.64-.373ZM6.837,67.688a.064.064,0,0,1-.09-.008.061.061,0,0,1-.009-.09l.978-1.469.578.577ZM8.88,66.224l-.694-.694.713-.712a1.471,1.471,0,0,0,.379.645l.183.182Zm9.537,4.391L16.21,68.27a1.9,1.9,0,0,0-1.368-.585H13.349a1.884,1.884,0,0,1-1.339-.553l-2.2-2.2a.718.718,0,0,1,0-1.019.732.732,0,0,1,1.012,0l1.791,1.791a.378.378,0,0,0,.529,0,.374.374,0,0,0,0-.529L12.065,64.1l2.017-2.012,4.334,4.653Z" transform="translate(0 -57.815)" fill="#2c2c2c"/>
                                    </svg>
                                    تسجيل خروج
                                </li> */}
                            </ul>
                        </div>
                    </nav>
                    </div>
                </div>
            </div>
    )
    }