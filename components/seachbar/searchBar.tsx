import { useState } from "react";
import { useAppState } from "../../contexts/app/app.provider";

export default function SearchBar (props) {
        const [Filter,setFilter] = useState(false);
        const search = useAppState('search');
        const Loading = useAppState("Loading");
        const loaded = useAppState("loaded");
        const [brands,setBrands] = useState([]);
        const [data,setData] = useState(null);
        const [advanced,setAdvanced] = useState<boolean>(false);
        
        var brandss =[];
        const toggleSearch = (r) =>{
            if(r.target.value.length > 3){
                fetch("https://amanacart.com/api/search/"+r.target.value+"")
                .then(res => res.json())
                .then(result =>{
                    setData(result.data);
                    for(var i = 0 ; i < result.data.products.length ; i ++){
                        brandss.push(result.data.products[i].brand)
                    }
                    setBrands(brandss);
                })
                .catch(e => {
                    setData(null);
                }); 
            }
            else{
                setData(null);
                setBrands(null);
            }
        }


    return (
      <div>
        <div className={data&&data.products.length >0|| Filter?"transition-all duration-300 overflow-hidden	 ease-in-out delay-300 rounded w-full flex flex-col justify-start items-center content-between  h-36 sm:h-80 bg-white shadow-md mt-7 mb-5 sm:mb-7":"transition-all overflow-hidden   delay-300 ease-in-out rounded w-full flex flex-col justify-start items-center content-between h-16 bg-white shadow-md mt-7 mb-5 sm:mb-7 duration-300"}>
        <div className="w-full flex justify-around items-center pt-3">
            <div className='w-9/12 relative'>
                <input type="text" onChange={toggleSearch} className={`rounded w-full border-2 focus:outline-none text-right text-sm py-1 ${Loading?"skeleton-box":""}`}/>
                <button style={Loading?{opacity:"0"}:{}} className={`text-xs sm:text-md  focus:outline-none flex justify-between items-center absolute left-0 top-0 h-full px-3 sm:px-5 lg:px-10 rounded bg-yellow-500`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className='mr-3' width="18.179" height="18.179" viewBox="0 0 18.179 18.179">
                            <path id="search_icon" d="M6.817,0a6.817,6.817,0,0,0,0,13.634,6.817,6.817,0,0,0,3.693-.994l5.4,5.539,2.272-2.272-5.539-5.4a6.817,6.817,0,0,0,.994-3.693A6.817,6.817,0,0,0,6.817,0m0,2.272A4.545,4.545,0,1,1,2.272,6.817,4.545,4.545,0,0,1,6.817,2.272" fill="#000"/>
                        </svg>
                        بحث
                </button>
            </div>
            <span className={`advanced cursor-pointer text-xs flex justify-between items-center ${Loading?"skeleton-box":""}`}>
                <div style={Loading?{opacity:"0"}:{}} className="flex justify-between items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 sm:mr-3' width="8.631" height="10.33" viewBox="0 0 8.631 10.33">
                        <g id="Group_4846" data-name="Group 4846" transform="translate(-410.485 -239.835)">
                            <path id="Icon_material-navigate-next" data-name="Icon material-navigate-next" d="M13.9,9l-1.014,1.014,3.294,3.3-3.294,3.3L13.9,17.631l4.316-4.316Z" transform="translate(428.116 231.95) rotate(90)" fill="#707070"/>
                            <path id="Icon_material-navigate-next-2" data-name="Icon material-navigate-next" d="M13.9,9l-1.014,1.014,3.294,3.3-3.294,3.3L13.9,17.631l4.316-4.316Z" transform="translate(428.116 226.95) rotate(90)" fill="#707070"/>
                        </g>
                    </svg>
                    البحث المتقدم
                </div>
            </span>
        </div>
        <div className={data&&data.products.length>0&&!Filter?"mt-6 sm:mt-8 w-full":"mt-6 hidden sm:mt-8 w-full"}>
            <div className="grid grid-cols-12 gap-4">
                <div className="hidden sm:flex col-span-3  flex-col justify-around items-end pr-5">
                <span className="text-xs sm:text-xs text-md text-gray-400">العلامات التجارية المطابقة</span>
                    <ul className="w-full">
                        {brands&&brands.length>0?
                            brands.map((ele,index)=>
                            index<5?
                                <li className="flex justify-end items-center">
                                    <span className="text-xs sm:text-xs lg:text-sm xl:text-md"><span className="font-bold text-gray-500">{ele.name}</span></span>
                                </li>
                                :""
                            )
                        :
                        <></>}
                        
                     
                    </ul>
                </div>
                <div className="col-span-12 sm:col-span-8 xl:col-span-5 ">
                    <ul className="px-5">
                        {data?data.products.map((ele,index)=>
                            index<5?
                            <li className="flex justify-end items-center">
                                
                                <span dir="rtl" className="w-5/12 whitespace-nowrap text-right  text-xs sm:text-xs lg:text-sm xl:text-md">
                                     في تصنيف  <span className="sm:hidden  lg:contents text-xs font-bold  sm:text-xs lg:text-sm xl:text-md text-yellow-500">
                                    {ele.category.name}
                                    </span>
                                </span>
                                <span dir="rtl" className="w-7/12 whitespace-nowrap text-xs font-bold text-right text-gray-500 ml-1  overflow-hidden"> {ele.title} 
                                </span>
                            </li>    
                            :""
                        ):""}
                    </ul>
                </div>
                <div className="col-span-3 hidden xl:block ">
                    {data&&data.special_item?
                        <div className="border-green-500 border-r-2 flex flex-col justify-around items-end px-3 mr-5  h-full choosen">
                            <span className="text-xs sm:text-xs text-right xl:text-md  self-end text-gray-400">اخترنا لك</span>
                            <span className="text-xs sm:text-xs text-right xl:text-md  self-end pr-2 text-gray-500">{data&&data.special_item?data.special_item.title:""}</span>
                            {data&&data.special_item.discount?
                            <span className="text-xs sm:text-xs text-right xl:text-md  self-end pr-2 text-gray-500" style={{direction:"ltr"}}><span className="text-red-300">حسم بنسبة {data.special_item.discount}</span></span>
                            :<></> 
                            }
                            
                        </div>
                        :<></>
                    }
                        
                </div>
            </div>
        </div>
    
        <div className={Filter?"mt-6 sm:mt-8 w-full":"mt-6 hidden sm:mt-8 w-full"}>
                    
        </div>

    </div>
        
        
        
        
        
        {/* {search?
            <div className={Filter?`fixed slide-top left-0  transition-all overflow-hidden	duration-1000 ease-in-out delay-300 rounded w-full flex flex-col justify-start items-center content-between  h-36 sm:h-80 bg-white shadow-md mt-7 mb-5 sm:mb-7 ${search?"flex":"hidden"}`:`${search?"flex":"hidden"} transition-all overflow-hidden  duration-1000 delay-300 ease-in-out rounded w-full flex flex-col justify-start items-center content-between h-16 bg-white shadow-md mt-7 mb-5 sm:mb-7 fixed slide-top left-0 `}>
                <div className="w-full flex justify-around items-center pt-3">
                    <div className='w-9/12 relative'>
                        <input type="text" className='rounded w-full border-2 focus:outline-none text-right text-sm py-1'/>
                        <button className='text-xs sm:text-md bg-yellow-500 focus:outline-none flex justify-between items-center absolute left-0 top-0 h-full px-3 sm:px-5 lg:px-10 rounded'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='mr-3' width="18.179" height="18.179" viewBox="0 0 18.179 18.179">
                                <path id="search_icon" d="M6.817,0a6.817,6.817,0,0,0,0,13.634,6.817,6.817,0,0,0,3.693-.994l5.4,5.539,2.272-2.272-5.539-5.4a6.817,6.817,0,0,0,.994-3.693A6.817,6.817,0,0,0,6.817,0m0,2.272A4.545,4.545,0,1,1,2.272,6.817,4.545,4.545,0,0,1,6.817,2.272" fill="#000"/>
                            </svg>
                            بحث
                            </button>
                    </div>
                    <span onClick={ ()=> {setFilter(!Filter)} } className='advanced cursor-pointer text-xs flex justify-between items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 sm:mr-3' width="8.631" height="10.33" viewBox="0 0 8.631 10.33">
                            <g id="Group_4846" data-name="Group 4846" transform="translate(-410.485 -239.835)">
                                <path id="Icon_material-navigate-next" data-name="Icon material-navigate-next" d="M13.9,9l-1.014,1.014,3.294,3.3-3.294,3.3L13.9,17.631l4.316-4.316Z" transform="translate(428.116 231.95) rotate(90)" fill="#707070"/>
                                <path id="Icon_material-navigate-next-2" data-name="Icon material-navigate-next" d="M13.9,9l-1.014,1.014,3.294,3.3-3.294,3.3L13.9,17.631l4.316-4.316Z" transform="translate(428.116 226.95) rotate(90)" fill="#707070"/>
                            </g>
                        </svg>
                        البحث المتقدم
                    </span>
                </div>
                <div className={Filter?"mt-6 sm:mt-8 w-full":"mt-6 sm:mt-8 w-full"}>
                    <div className="grid grid-cols-12 gap-4">
                        <div className="hidden sm:flex col-span-4  flex-col justify-around items-end px-3">
                        <span className="text-xs sm:text-xs text-md text-gray-400">العلامات التجارية المطابقة</span>
                            <ul className="w-full">
                                <li className="flex justify-end items-center">
                                    <span className="text-xs sm:text-xs lg:text-sm xl:text-md"><span className="font-bold text-gray-500">any product that exists</span></span>
                                </li>
                                <li className="flex justify-end items-center">
                                    <span className="text-xs sm:text-xs lg:text-sm xl:text-md"><span className="font-bold text-gray-500">any product that exists </span></span>
                                </li>
                                <li className="flex justify-end items-center">
                                    <span className="text-xs sm:text-xs lg:text-sm xl:text-md"><span className="font-bold text-gray-500">any product that exists</span></span>
                                </li>
                                <li className="flex justify-end items-center">
                                    <span className="text-xs sm:text-xs lg:text-sm xl:text-md"><span className="font-bold text-gray-500">any product that exists</span></span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-12 sm:col-span-8 xl:col-span-4 ">
                            <ul className="px-5">
                                <li className="flex justify-end items-center">
                                    <span className="w-full text-center text-xs sm:text-xs lg:text-sm xl:text-md"><span className="font-bold text-gray-500">any product that exists</span> in <span className="sm:hidden lg:contents text-xs sm:text-xs lg:text-sm xl:text-md text-yellow-500">any Category</span></span>
                                </li>
                                <li className="flex justify-end items-center">
                                    <span className="w-full text-center text-xs sm:text-xs lg:text-sm xl:text-md"><span className="font-bold text-gray-500">any product that exists</span> in <span className="sm:hidden lg:contents text-xs sm:text-xs lg:text-sm xl:text-md text-yellow-500">any Category</span></span>
                                </li>
                                <li className="flex justify-end items-center">
                                    <span className="w-full text-center text-xs sm:text-xs lg:text-sm xl:text-md"><span className="font-bold text-gray-500">any product that exists</span> in <span className="sm:hidden lg:contents text-xs sm:text-xs lg:text-sm xl:text-md text-yellow-500">any Category</span></span>
                                </li>
                                <li className="flex justify-end items-center">
                                    <span className="w-full text-center text-xs sm:text-xs lg:text-sm xl:text-md"><span className="font-bold text-gray-500">any product that exists</span> in <span className="sm:hidden lg:contents text-xs sm:text-xs lg:text-sm xl:text-md text-yellow-500">any Category</span></span>
                                </li>
                                <li className="hidden xl:flex justify-end items-center">
                                    <span className="w-full text-center text-xs sm:text-xs lg:text-sm xl:text-md"><span className="font-bold text-gray-500">any product that exists</span> in <span className="sm:hidden lg:contents text-xs sm:text-xs lg:text-sm xl:text-md text-yellow-500">any Category</span></span>
                                </li>
                                <li className="hidden xl:flex justify-end items-center">
                                    <span className="w-full text-center text-xs sm:text-xs lg:text-sm xl:text-md"><span className="font-bold text-gray-500">any product that exists</span> in <span className="sm:hidden lg:contents text-xs sm:text-xs lg:text-sm xl:text-md text-yellow-500">any Category</span></span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-3 hidden xl:block ">
                                <div className="border-green-500 border-r-2 flex flex-col justify-around items-end px-3 mr-5  h-full choosen">
                                    <span className="text-xs sm:text-xs xl:text-md  self-end text-gray-400">اخترنا لك</span>
                                    <span className="text-xs sm:text-xs xl:text-md  self-end pr-2 text-gray-500">ايفون 12 برو</span>
                                    <span className="text-xs sm:text-xs xl:text-md  self-end pr-2 text-gray-500" style={{direction:"ltr"}}><span className="text-red-300">حسم بنسبة %30</span></span>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div className={Filter?"fixed slide-bottom left-0  transition-all overflow-hidden	duration-1000 ease-in-out delay-300 rounded w-full flex flex-col justify-start items-center content-between  h-36 sm:h-80 bg-white shadow-md mt-7 mb-5 sm:mb-7":"transition-all overflow-hidden  duration-1000 delay-300 ease-in-out rounded w-full flex flex-col justify-start items-center content-between h-16 bg-white shadow-md mt-7 mb-5 sm:mb-7 fixed slide-bottom left-0 "}>
            <div className="w-full flex justify-around items-center pt-3">
                <div className='w-9/12 relative'>
                    <input type="text" className='rounded w-full border-2 focus:outline-none text-right text-sm py-1'/>
                    <button className='text-xs sm:text-md bg-yellow-500 focus:outline-none flex justify-between items-center absolute left-0 top-0 h-full px-3 sm:px-5 lg:px-10 rounded'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='mr-3' width="18.179" height="18.179" viewBox="0 0 18.179 18.179">
                            <path id="search_icon" d="M6.817,0a6.817,6.817,0,0,0,0,13.634,6.817,6.817,0,0,0,3.693-.994l5.4,5.539,2.272-2.272-5.539-5.4a6.817,6.817,0,0,0,.994-3.693A6.817,6.817,0,0,0,6.817,0m0,2.272A4.545,4.545,0,1,1,2.272,6.817,4.545,4.545,0,0,1,6.817,2.272" fill="#000"/>
                        </svg>
                        بحث
                        </button>
                </div>
                <span onClick={ ()=> {setFilter(!Filter)} } className='advanced cursor-pointer text-xs flex justify-between items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 sm:mr-3' width="8.631" height="10.33" viewBox="0 0 8.631 10.33">
                        <g id="Group_4846" data-name="Group 4846" transform="translate(-410.485 -239.835)">
                            <path id="Icon_material-navigate-next" data-name="Icon material-navigate-next" d="M13.9,9l-1.014,1.014,3.294,3.3-3.294,3.3L13.9,17.631l4.316-4.316Z" transform="translate(428.116 231.95) rotate(90)" fill="#707070"/>
                            <path id="Icon_material-navigate-next-2" data-name="Icon material-navigate-next" d="M13.9,9l-1.014,1.014,3.294,3.3-3.294,3.3L13.9,17.631l4.316-4.316Z" transform="translate(428.116 226.95) rotate(90)" fill="#707070"/>
                        </g>
                    </svg>
                    البحث المتقدم
                </span>
            </div>
            <div className={Filter?"mt-6 sm:mt-8 w-full":"mt-6 sm:mt-8 w-full"}>
                <div className="grid grid-cols-12 gap-4">
                    <div className="hidden sm:flex col-span-4  flex-col justify-around items-end px-3">
                    <span className="text-xs sm:text-xs text-md text-gray-400">العلامات التجارية المطابقة</span>
                        <ul className="w-full">
                            <li className="flex justify-end items-center">
                                <span className="text-xs sm:text-xs lg:text-sm xl:text-md"><span className="font-bold text-gray-500">any product that exists</span></span>
                            </li>
                            <li className="flex justify-end items-center">
                                <span className="text-xs sm:text-xs lg:text-sm xl:text-md"><span className="font-bold text-gray-500">any product that exists </span></span>
                            </li>
                            <li className="flex justify-end items-center">
                                <span className="text-xs sm:text-xs lg:text-sm xl:text-md"><span className="font-bold text-gray-500">any product that exists</span></span>
                            </li>
                            <li className="flex justify-end items-center">
                                <span className="text-xs sm:text-xs lg:text-sm xl:text-md"><span className="font-bold text-gray-500">any product that exists</span></span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-12 sm:col-span-8 xl:col-span-4 ">
                        <ul className="px-5">
                            <li className="flex justify-end items-center">
                                <span className="w-full text-center text-xs sm:text-xs lg:text-sm xl:text-md"><span className="font-bold text-gray-500">any product that exists</span> in <span className="sm:hidden lg:contents text-xs sm:text-xs lg:text-sm xl:text-md text-yellow-500">any Category</span></span>
                            </li>
                            <li className="flex justify-end items-center">
                                <span className="w-full text-center text-xs sm:text-xs lg:text-sm xl:text-md"><span className="font-bold text-gray-500">any product that exists</span> in <span className="sm:hidden lg:contents text-xs sm:text-xs lg:text-sm xl:text-md text-yellow-500">any Category</span></span>
                            </li>
                            <li className="flex justify-end items-center">
                                <span className="w-full text-center text-xs sm:text-xs lg:text-sm xl:text-md"><span className="font-bold text-gray-500">any product that exists</span> in <span className="sm:hidden lg:contents text-xs sm:text-xs lg:text-sm xl:text-md text-yellow-500">any Category</span></span>
                            </li>
                            <li className="flex justify-end items-center">
                                <span className="w-full text-center text-xs sm:text-xs lg:text-sm xl:text-md"><span className="font-bold text-gray-500">any product that exists</span> in <span className="sm:hidden lg:contents text-xs sm:text-xs lg:text-sm xl:text-md text-yellow-500">any Category</span></span>
                            </li>
                            <li className="hidden xl:flex justify-end items-center">
                                <span className="w-full text-center text-xs sm:text-xs lg:text-sm xl:text-md"><span className="font-bold text-gray-500">any product that exists</span> in <span className="sm:hidden lg:contents text-xs sm:text-xs lg:text-sm xl:text-md text-yellow-500">any Category</span></span>
                            </li>
                            <li className="hidden xl:flex justify-end items-center">
                                <span className="w-full text-center text-xs sm:text-xs lg:text-sm xl:text-md"><span className="font-bold text-gray-500">any product that exists</span> in <span className="sm:hidden lg:contents text-xs sm:text-xs lg:text-sm xl:text-md text-yellow-500">any Category</span></span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-3 hidden xl:block ">
                            <div className="border-green-500 border-r-2 flex flex-col justify-around items-end px-3 mr-5  h-full choosen">
                                <span className="text-xs sm:text-xs xl:text-md  self-end text-gray-400">اخترنا لك</span>
                                <span className="text-xs sm:text-xs xl:text-md  self-end pr-2 text-gray-500">ايفون 12 برو</span>
                                <span className="text-xs sm:text-xs xl:text-md  self-end pr-2 text-gray-500" style={{direction:"ltr"}}><span className="text-red-300">حسم بنسبة %30</span></span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        } */}
      </div>
);}