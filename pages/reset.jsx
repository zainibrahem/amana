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

export default function Reset(props) {
    const [confirmation,setConfirmation] = useState(null);
    const[password,setPassword] = useState();
    const [statics,setStatics] =  useState();
    const [token,setToken] = useState();
    useEffect(() => {
        document.title = "ضبط كلمة المرور | أمانة";
        const queryParams = new URLSearchParams(window.location.search);
        setToken(queryParams.get('token'));
    }),[statics];

    const handlepassword = (e) =>{
        setPassword(e.target.value)
    }
    const handleconfirmation = (e) =>{
        setConfirmation(e.target.value)
    }
const handleForget = () =>{
  
    fetch('https://amanacart.com/api/auth/reset', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            token: token,
            password: password,
            password_confirmation:confirmation,
        })
    })
    .then( async response => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson && await response.json();

        // check for error response
        if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
        }
        else{
            // window.location.href="/";
        }
        // localStorage.setItem('token', data.data.api_token)
        // handleLogin();
        // setModalType(0);
    })
    
}
return (
    <>
        <div className="grid grid-cols-12 pt-12 pb-11">
            <div className="col-span-4"></div>
            <div  className={`col-span-12 md:col-span-4  bg-white rounded relative flex flex-col justify-between items-center pt-0 md:pt-12 p-3 md:p-12`}>
                <div className="col-span-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="hidden sm:block pr-3" width="134.034" height="22.087" viewBox="0 0 134.034 22.087">
                        <g id="Group_4845" data-name="Group 4845" transform="translate(0 0)">
                            <path id="Path_5" data-name="Path 5" d="M-3960.62,856.149a.575.575,0,0,1-.575-.576v-9.935a7.655,7.655,0,0,0-1.87-5.363,6.268,6.268,0,0,0-4.857-2.053,6.375,6.375,0,0,0-4.869,2.031,7.351,7.351,0,0,0-1.9,5.234,7.507,7.507,0,0,0,1.956,5.352,6.537,6.537,0,0,0,4.986,2.085,7.774,7.774,0,0,0,2.676-.473,9.267,9.267,0,0,0,1.739-.86.575.575,0,0,1,.873.493v2.626a.571.571,0,0,1-.3.506,10.725,10.725,0,0,1-2.419.922,12.417,12.417,0,0,1-3,.355,10,10,0,0,1-2.988-.462,9.73,9.73,0,0,1-2.687-1.3,10.547,10.547,0,0,1-3.482-3.923,11.324,11.324,0,0,1-1.2-5.234,10.773,10.773,0,0,1,2.988-7.813,10.112,10.112,0,0,1,7.588-3.084,10.486,10.486,0,0,1,5.546,1.526,10.213,10.213,0,0,1,3.869,4.192,9.532,9.532,0,0,1,.892,2.633,24.956,24.956,0,0,1,.269,4.267v8.28a.576.576,0,0,1-.576.576Z" transform="translate(3978.542 -834.406)" fill="#191919"/>
                            <path id="Path_6" data-name="Path 6" d="M-3705.708,856.149a.653.653,0,0,1-.653-.652V843.962a9.745,9.745,0,0,1,2.257-6.793,7.8,7.8,0,0,1,6.083-2.493,7.962,7.962,0,0,1,3.611.828,7.931,7.931,0,0,1,2.38,1.835.648.648,0,0,0,.963,0,8.1,8.1,0,0,1,2.4-1.849,7.912,7.912,0,0,1,3.59-.817,7.766,7.766,0,0,1,6.051,2.5,9.723,9.723,0,0,1,2.268,6.782V855.5a.652.652,0,0,1-.653.652h-2.435a.652.652,0,0,1-.652-.652V843.252a5.01,5.01,0,0,0-1.268-3.568,4.327,4.327,0,0,0-3.31-1.354,4.326,4.326,0,0,0-3.31,1.354,5.007,5.007,0,0,0-1.268,3.568V855.5a.653.653,0,0,1-.653.652h-2.435a.653.653,0,0,1-.653-.652V843.252a4.959,4.959,0,0,0-1.29-3.568,4.4,4.4,0,0,0-3.332-1.354,4.318,4.318,0,0,0-3.321,1.354,5.035,5.035,0,0,0-1.257,3.568V855.5a.652.652,0,0,1-.652.652Z" transform="translate(3732.025 -834.406)" fill="#191919"/>
                            <path id="Path_7" data-name="Path 7" d="M-3335.563,856.149a.576.576,0,0,1-.576-.576v-9.935a7.655,7.655,0,0,0-1.87-5.363,6.269,6.269,0,0,0-4.858-2.053,6.376,6.376,0,0,0-4.869,2.031,7.351,7.351,0,0,0-1.9,5.234,7.508,7.508,0,0,0,1.956,5.352,6.537,6.537,0,0,0,4.987,2.085,7.773,7.773,0,0,0,2.676-.473,9.44,9.44,0,0,0,1.937-.987.436.436,0,0,1,.675.366v2.962a.437.437,0,0,1-.227.385,10.731,10.731,0,0,1-2.491.96,12.416,12.416,0,0,1-3,.355,10,10,0,0,1-2.988-.462,9.731,9.731,0,0,1-2.687-1.3,10.542,10.542,0,0,1-3.482-3.923,11.321,11.321,0,0,1-1.2-5.234,10.773,10.773,0,0,1,2.988-7.813,10.113,10.113,0,0,1,7.588-3.084,10.487,10.487,0,0,1,5.546,1.526,10.212,10.212,0,0,1,3.869,4.192,9.532,9.532,0,0,1,.892,2.633,25.023,25.023,0,0,1,.268,4.267v8.419a.437.437,0,0,1-.437.437Z" transform="translate(3412.424 -834.406)" fill="#191919"/>
                            <path id="Path_8" data-name="Path 8" d="M-3080.606,856.149a.7.7,0,0,1-.7-.7v-10.8a10.4,10.4,0,0,1,2.45-7.287,8.416,8.416,0,0,1,6.535-2.687,8.35,8.35,0,0,1,6.513,2.687,10.46,10.46,0,0,1,2.429,7.287v10.8a.7.7,0,0,1-.7.7h-2.346a.7.7,0,0,1-.7-.7v-11.49a5.748,5.748,0,0,0-1.451-4.063,4.877,4.877,0,0,0-3.751-1.569,4.919,4.919,0,0,0-3.751,1.569,5.7,5.7,0,0,0-1.472,4.063v11.49a.7.7,0,0,1-.7.7Z" transform="translate(3165.907 -834.406)" fill="#191919"/>
                            <path id="Path_9" data-name="Path 9" d="M-2834.057,856.149a.576.576,0,0,1-.576-.576v-9.935a7.656,7.656,0,0,0-1.87-5.363,6.269,6.269,0,0,0-4.858-2.053,6.375,6.375,0,0,0-4.869,2.031,7.35,7.35,0,0,0-1.9,5.234,7.508,7.508,0,0,0,1.956,5.352,6.538,6.538,0,0,0,4.987,2.085,7.771,7.771,0,0,0,2.676-.473,9.269,9.269,0,0,0,1.739-.86.574.574,0,0,1,.873.493v2.626a.57.57,0,0,1-.3.506,10.721,10.721,0,0,1-2.418.922,12.417,12.417,0,0,1-3,.355,10,10,0,0,1-2.988-.462,9.728,9.728,0,0,1-2.687-1.3,10.541,10.541,0,0,1-3.482-3.923,11.321,11.321,0,0,1-1.2-5.234,10.773,10.773,0,0,1,2.988-7.813,10.113,10.113,0,0,1,7.588-3.084,10.486,10.486,0,0,1,5.546,1.526,10.211,10.211,0,0,1,3.869,4.192,9.524,9.524,0,0,1,.892,2.633,25.017,25.017,0,0,1,.269,4.267v8.28a.576.576,0,0,1-.576.576Z" transform="translate(2958.207 -834.406)" fill="#191919"/>
                            <path id="Path_10" data-name="Path 10" d="M-2594.73,833.78a1.957,1.957,0,0,1-1.95,1.982,1.969,1.969,0,0,1-1.969-1.982,1.967,1.967,0,0,1,1.976-1.969A1.952,1.952,0,0,1-2594.73,833.78Zm-3.5.006a1.566,1.566,0,0,0,1.541,1.611,1.561,1.561,0,0,0,1.534-1.611,1.57,1.57,0,0,0-1.541-1.611A1.569,1.569,0,0,0-2598.228,833.787Zm2.308-.639a1.387,1.387,0,0,0-.607-.141.729.729,0,0,0-.793.793.755.755,0,0,0,.786.8,1.255,1.255,0,0,0,.639-.153l.1.326a1.455,1.455,0,0,1-.793.2,1.1,1.1,0,0,1-1.177-1.157,1.186,1.186,0,0,1,1.241-1.189,1.215,1.215,0,0,1,.7.179Z" transform="translate(2728.765 -831.811)" fill="#141414"/>
                        </g>
                    </svg>
                </div>
                <div className="flex flex-col w-full justify-center items-center ">
                    <div className="w-full h-20 flex justify-center items-center" style={{background:"url(/images/border.png)",backgroundPosition:"center bottom",backgroundRepeat:"no-repeat"}}>
                        <span className="text-sm md:text-md">إعادة ضبط كلمة السر</span>
                    </div>
                </div>
                
                <div className="form w-full grid grid-cols-12">
                    <div className="col-span-1 2xl:col-span-2"></div>
                    <div className="col-span-10 2xl:col-span-8 flex flex-col justify-center items-center">
                    
                        <label htmlFor="" className="self-end text-xs">كلمة السر الجديدة</label>
                        <input type="password" onChange={handlepassword}    className=" w-full mt-4 rounded h-13  bg-gray-100 px-2 focus:bg-white focus:text-gray-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent" dir="rtl" placeholder="***" />

                        <label htmlFor="" className="self-end text-xs">تأكيد كلمة السر</label>
                        <input type="password" onChange={handleconfirmation}    className=" w-full mt-4 rounded h-13  bg-gray-100 px-2 focus:bg-white focus:text-gray-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent" dir="rtl" placeholder="***" />
                        
                        <button onClick={handleForget} className="w-full mt-4 text-white flex justify-center items-center rounded bg-yellow-500  h-13">
                            إرسال
                        </button>

                    
                    </div>
                    <div className="col-span-1 2xl:col-span-2"></div>
                </div>
                
                
                <div className="hidden md:blockgrid grid-cols-12 w-full">
                        <div className="hidden md:block col-span-3"></div>
                        <div className="col-span-12 md:col-span-6">
                            <div className="flex w-full flex-col justify-start items-center text-white">
                                <span className="text-xs">حمل التطبيق</span>
                                <div className="flex justify-between items-center mt-2">
                                    <img className="w-24" src={`${Route}/images/google.png`} alt="" />
                                    <img className="w-24 ml-2" src={`${Route}/images/appstore.png`} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block col-span-3"></div>
                    </div>
                
                <div className="grid grid-cols-12">
                    
                    <div className="col-span-1 2xl:col-span-2  mt-6"></div>
                
                    <div className="col-span-1 2xl:col-span-2 mt-6"></div>
                </div>
            
            </div>
            <div className="col-span-4"></div>
        </div>
         </>
);
}