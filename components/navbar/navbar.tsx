import React from 'react';
import { useAppState, useAppDispatch } from '../../contexts/app/app.provider';

export const NavBar = (props) => {
    const isDrawerOpen = useAppState('isDrawerOpen');
 
        return (
            <div className="fixed top-0 w-full z-30" style={{direction:"rtl"}}>
            <nav className="w-full bg-white shadow-md h-16 flex justify-between items-center ">
                    <div className="w-full lg:w-4/6 xl:w-full  h-full flex items-center md:pr-1 lg:px-4 ">
                    <div className="flex border-b-4 border-white">
                            <button onClick={props.toggleHandler} className="hidden items-center h-full w-16 md:flex md:w-12  lg:w-9 xl:w-9 justify-center  bg-white hover:bg-gray-200 focus:outline-none rounded-md">
                                <svg className="fill-current text-gray-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" stroke-width="3" stroke-linecap="square" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                            </button>
                    </div>
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="block  pr-3 sm:hidden" width="38.07" height="43" viewBox="0 0 38.07 43">
                        <path id="Path_11" data-name="Path 11" d="M-4353.608,780.454l-15.933-9.2a3.1,3.1,0,0,0-3.1,0l-15.933,9.2a3.1,3.1,0,0,0-1.551,2.686v18.4a3.1,3.1,0,0,0,1.551,2.686l15.933,9.2a3.1,3.1,0,0,0,3.1,0l15.933-9.2a3.1,3.1,0,0,0,1.551-2.686v-18.4A3.1,3.1,0,0,0-4353.608,780.454Zm-6.419,22.938a3.981,3.981,0,0,1-3.981-3.98V792.4a8.009,8.009,0,0,0-1.956-5.611,6.559,6.559,0,0,0-5.083-2.148,6.672,6.672,0,0,0-5.094,2.125,7.691,7.691,0,0,0-1.99,5.475,7.856,7.856,0,0,0,2.046,5.6,6.839,6.839,0,0,0,5.218,2.182,8.139,8.139,0,0,0,2.8-.495,10.57,10.57,0,0,0,2.732-1.529V799.7a3.769,3.769,0,0,1-2.815,3.672l-.03.008a12.983,12.983,0,0,1-3.136.371,10.451,10.451,0,0,1-3.126-.484,10.192,10.192,0,0,1-2.811-1.36,11.041,11.041,0,0,1-3.644-4.1,11.851,11.851,0,0,1-1.259-5.476,11.272,11.272,0,0,1,3.125-8.174,10.58,10.58,0,0,1,7.939-3.227,10.97,10.97,0,0,1,5.8,1.6,10.687,10.687,0,0,1,4.048,4.385,9.962,9.962,0,0,1,.933,2.755,26.191,26.191,0,0,1,.281,4.464Z" transform="translate(4390.127 -770.839)" fill="#ffbc00"/>
                    </svg>

                <div className="relative mx-3" x-data="{dropdown : false}">
                {/* <input
                type="text" name="" id="" className="relative z-30 text-md justify-center w-8 h-8 lg:w-10 lg:h-10 xl:w-56 bg-gray-200 rounded-full  xl:px-10 py-2 focus:outline-none placeholder-gray-200 xl:placeholder-gray-600 " placeholder="cari di facebook" />
                <svg className="absolute z-30 top-0 my-2 mx-2  stroke-current text-gray-600  w-4 h-4 lg:w-5 lg:h-5 " xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><circle cx="11" cy="11" r="7"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> */}


                    {/* <div 
                    className=" absolute w-full   top-0 z-10 bg-white shadow-lg rounded  px-3 py-5">
                
                        <ul className="flex flex-col w-full items-left mt-10">
                        
                        <li className="my-2"><a href="user/{{$result->slug}}">sudana</a></li>
                
                        </ul>
                
                    </div> */}
            
                
                </div>
                    </div>
                    <div className="hidden md:flex w-full  h-full justify-center">
                        <div className="border-b-4 border-yellow-500">
                            <button className="flex items-center h-full md:w-16 lg:w-24 xl:w-16 justify-center  bg-white hover:bg-gray-200 focus:outline-none rounded-md">
                                <svg className=" fill-current text-yellow-500 w-4 h-6"   viewBox="0 0 80 78" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.8212 1.30204C39.0046 0.0516549 40.9954 0.0516556 42.1788 1.30204L78.51 39.6878C80.32 41.6002 78.9643 44.75 76.3312 44.75H3.66882C1.03568 44.75 -0.320033 41.6002 1.48999 39.6878L37.8212 1.30204Z" /><path d="M12 75.5V45C12 43.8954 12.8954 43 14 43H66.5C67.6046 43 68.5 43.8954 68.5 45V75.5C68.5 76.6046 67.6046 77.5 66.5 77.5H49.5C48.3954 77.5 47.5 76.6046 47.5 75.5V62C47.5 60.8954 46.6046 60 45.5 60H35C33.8954 60 33 60.8954 33 62V75.5C33 76.6046 32.1046 77.5 31 77.5H14C12.8954 77.5 12 76.6046 12 75.5Z" /></svg>
                            </button>
                        </div>
                        <div className="border-b-4 border-white">
                        <button className="flex items-center h-full md:w-16 lg:w-24 xl:w-16 justify-center  bg-white hover:bg-gray-200 focus:outline-none rounded-md">
                            <svg className="w-4 h-6" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" stroke-width="3" stroke-linecap="square" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
                        </button>
                        </div>
                        <div className="border-b-4 border-white">
                        <button className="flex items-center h-full md:w-16 lg:w-24 xl:w-16 justify-center  bg-white hover:bg-gray-200 focus:outline-none rounded-md">
                            <svg className=" fill-current text-gray-500 w-4 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z"/></svg>
                            </button>
                        </div>
                        <div className="border-b-4 border-white">
                            <button className="flex items-center h-full md:w-16 lg:w-24 xl:w-16 justify-center  bg-white hover:bg-gray-200 focus:outline-none rounded-md">
                                <svg className=" fill-current text-gray-500 w-4 h-6" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            </button>
                        </div>
                    
                            
                    </div>
                    <div className="w-full  h-full flex justify-end  items-center px-3">
                        {/* <div x-data="{ open: false }"> 
                            <button className="hidden xl:flex h-10 w-24 xl:w-32  rounded-full flex bg-white hover:bg-gray-200 text-gray-600 text-lg font-semibold">
                                <div className="h-8 w-8 mx-2 flex items-center">
                                    <img className=" rounded-full" src="https://scontent.fsub1-1.fna.fbcdn.net/v/t1.0-9/37921553_1447009505400641_8037753745087397888_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_oc=AQnDTnRBxV3QgnhKOtk9AiziIOXw0K68iIUQfdK_rlUSFgs8fkvnQ6FjP6UBEkA6Zd8&_nc_ht=scontent.fsub1-1.fna&oh=728962e2c233fec37154419ef79c3998&oe=5EFA545A" alt=""/>
                                </div>
                                sudana
                            </button>
                            <ul
                            x-show="open"
                            className="absolute bg-white w-32 shadow-md py-3 px-2"
                        >
                        <a className="w-full h-5" href="{{ route('logout') }}">
                            Logout
                        </a>

                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style={{display:"none"}}>
                        @csrf
                    </form>
                        </ul>
                        </div> */}
                
                        <button className="ml-3 w-8 md:w-10 h-6  md:h-8 lg:h-10 lg:w-10 bg-gray-300 focus:outline-none hover:bg-gray-400 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 lg:w-6 lg:h-6 fill-current text-gray-600 stroke-current "  xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" stroke-width="3" stroke-linecap="square" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        </button>
                        <button className="ml-3 w-8 md:w-10 h-6  md:h-8 lg:h-10 lg:w-10 bg-gray-300 focus:outline-none hover:bg-gray-400 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 lg:w-6 lg:h-6 fill-current text-gray-600 stroke-current "  xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" stroke-width="3" stroke-linecap="square" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        </button>
                        <button className="ml-3 w-8 md:w-10 h-6  md:h-8 lg:h-10 lg:w-10 bg-gray-300 focus:outline-none hover:bg-gray-400 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 lg:w-6 lg:h-6 fill-current text-gray-600 stroke-current " xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                        </button>
                        <button className="relative ml-3 w-8 md:w-10 h-6  md:h-8 lg:h-10 lg:w-10 bg-gray-300 focus:outline-none hover:bg-gray-400 rounded-full flex items-center justify-center">
                            <svg  className="w-4 h-4 lg:w-6 lg:h-6 fill-current text-gray-600 stroke-current "  xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path></svg>
                            <div className="absolute top-0 right-0 w-5 sm:w-6 h-1 sm:h-2 text-white -mr-2 rounded-full bg-red-500">
                                3
                            </div>
                        </button>
                        <button className="ml-3 w-8 md:w-10  h-6  md:h-8 lg:h-10 lg:w-10 bg-gray-300 focus:outline-none hover:bg-gray-400 rounded-full  flex items-center justify-center">
                            <svg className="w-4 h-4 lg:w-6 lg:h-6 fill-current text-gray-600 stroke-current "  xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" stroke-width="3" stroke-linecap="square" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                        </button>
                    </div>
            </nav>
            </div>
);
}