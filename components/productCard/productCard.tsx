import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination, Scrollbar } from 'swiper/core';
import { useState } from 'react';
import { useAppDispatch, useAppState } from '../../contexts/app/app.provider';
import React from 'react';
import Link from 'next/link';

// import Slide1 from '../../public/images/slider/maher.png';
export default function ProductCard (props) {
    const [counter,setCounter] = useState(false);
    const isDrawerOpen = useAppState('isDrawerOpen');
    const Loading = useAppState("Loading");
    const [error,setError] = useState(null);
    const [modalType,setModalType] = useState(0);
    const [message,setMessgae] = useState(null);
    const [confirmation,setConfirmation] = useState(null);
    const dispatch = useAppDispatch();

    const addCart = React.useCallback(() => {
            dispatch({
              type: 'AddToCart',
            });
          
            }
            ,[dispatch]
          );
        const toggleNotification = React.useCallback((info,errortypes) => {
            dispatch({
              type: 'notification',payload:info,types:errortypes
            });
            }
            ,[dispatch]
          );

    const toggleCounter = (slug) => {
        setCounter(!counter);

        fetch(`https://amanacart.com/api/addToCart/${slug}`, {
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
            
            toggleNotification(data.message,'success');
            setTimeout(() => {
                dispatch({
                    type: 'Nonotification',
                  })
              }, 5000)
          
        })
    }
    return (
        props.card?
        <>
  

        {props.hidden?
            <div className="hidden md:block 2xl:hidden">
             <div className={props.type?`cards ${Loading?"skeleton-box":""} flex flex-col justify-center items-center rounded shadow-md card-responsive w-40 sm:w-48 mb-3`:`cards  flex flex-col justify-center items-center rounded shadow-md w-full sm:w-48 mb-3 ${Loading?"skeleton-box":""}`} style={{direction:"ltr"}}>
                <div className="w-full h-36 relative rounded-tl rounded-tr" style={Loading?{}:{background:"url("+props.card.image+")",backgroundPosition:"center center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>

                {Loading?"":
                    <>
                      <div className={`absolute w-12 text-xs flex justify-center items-center text-center text-white discounts h-1 right-0 top-2 rounded-tl-full rounded-bl-full numbers`}>
                        25%
                    </div>
                    <div className="absolute left-1.5 top-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14.56" height="12.562" viewBox="0 0 14.56 12.562">
                            <path id="Path_11538" data-name="Path 11538" d="M1461.115,27.94s3.159-4.021,6.044-1.369-.148,6.685-.148,6.685l-5.994,4.972s-7.1-5.429-7.163-7.589.136-3.5,2.212-4.57S1461.115,27.94,1461.115,27.94Z" transform="translate(-1453.844 -25.666)" fill="red"/>
                        </svg>
                    </div>
                    </>
                }
                  
                </div>
                <div className={`flex bg-white flex-col justify-between items-center w-full px-2 py-2  info`}>
                    
                        <span className={`${Loading?"skeleton-box":""} text-md self-end `}>
                            <span style={Loading?{opacity:"0"}:{}}>
                                المنتج الأول
                            </span>    
                        </span>
                        <div className="flex flex-row-reverse w-full justify-between mt-2">
                        <span className={`text-md self-end font-bold text-black ${Loading?"skeleton-box":""}`} style={{direction:"rtl"}}>
                            <span style={Loading?{opacity:"0"}:{}}>
                                800
                                ل.س
                            </span>
                        </span>
                        <div className={`${Loading?"skeleton-box":""}`}>
                            <span style={Loading?{opacity:"0"}:{}} className={`text-xs text-gray-500 relative discount self-end `}>
                                    1200$
                            </span>
                        </div>
                    </div>
                    <div className="text-xs flex flex-col justify-between items-center mt-2 relative desc">
                        <p className={!counter?`text-right leading-5  h-8 overflow-hidden ${Loading?"skeleton-box":""}`:`text-right leading-5  h-8 overflow-hidden ${Loading?"skeleton-box":""}`}>
                            <span style={Loading?{opacity:"0"}:{}}>
                                وصف المنتج الأول  الذي الذي ستقوم بشراءه ويمكنك استعراض تفاصيله عبر الضغط على الصورة أعلاه 
                            </span>
                        </p>
                        <p  className={counter?`text-right opacity-0 transition-all self-end lg:self-center text-xs  overflow-hidden text-gray-500 mt-2 before-hover ${Loading?"skeleton-box":""}`:`text-right opacity-1 transition-all self-end lg:self-center text-xs  overflow-hidden text-gray-500 mt-2 before-hover ${Loading?"skeleton-box":""}`}>
                            <span style={Loading?{opacity:"0"}:{}}>
                                تصلك يوم الثلاثاء
                            </span>
                        </p>
                        <div onClick={()=>toggleCounter(props.card.slug)} id={props.card.slug} className={!counter?"card-mobile z-20 transition-all flex flex-row justify-between  items-center lg:hidden absolute rounded-md w-10 h-7 bg-gray-100 left-0 bottom-0":"z-20  transition-all flex flex-row justify-between  items-center lg:hidden absolute rounded-md w-full h-7 bg-gray-100 left-0  bottom-0 card-mobile"}>
                            <span className={!counter?"hidden rounded  h-full  justify-center items-center text-2xl font-bold px-3":"text-2xl rounded-l font-bold px-3 bg-gray-200 h-full flex justify-center items-center"}>-</span>
                            <span className={!counter?"hidden rounded text-xl font-bold":"block rounded text-xl font-bold"}>1</span>
                            <span className={!counter?"text-2xl bg-gray-200 font-bold rounded h-full flex justify-center items-center w-full":"text-2xl font-bold  rounded-r h-full flex justify-center items-center px-3 bg-gray-200"}>+</span>
                        </div>
                        <div className={counter?"opacity-0 mt-2 transition-all flex flex-row-reverse justify-between w-full items-center before-hover":"opacity-1 mt-2 transition-all flex flex-row-reverse justify-between w-full items-center before-hover"}>
                                <div className={`${Loading?"w-14 h-2 skeleton-box":"hidden"}`}></div>
                                <img className={counter?` ${Loading?"hidden":""} opacity-0 transition-all w-14 h-2 ml-1`:`${Loading?"hidden":""} w-14 2xl:w-16 h-2 ml-1 `} src="../images/SPEED AR.svg" alt="" />

                            <p className={`hidden lg:flex text-xs  flex-row w-1/3 sm:w-1/2 justify-start lg:justify-between items-center ${Loading?"w-14 h-2 skeleton-box":""}`}>
                                <span className="hidden lg:block text-green-600 font-bold" style={Loading?{opacity:"0"}:{}}>
                                    4.5 stars
                                </span>
                            </p>
                        </div>
                        <div onClick={()=>toggleCounter(props.card.slug)} id={props.card.slug} className={`btn ${Loading?"skeleton-box":""} absolute left-1/2 transform -translate-x-2/4 w-full bottom-0.5 rounded hidden lg:flex flex-row justify-center items-center h-6 bg-yellow-500 text-white`}>
                            <div style={Loading?{opacity:"0"}:{}}>
                                إضافة للسلة 
                                <span className="text-lg ml-1 font-bold">+</span>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
   
            </div>
            :
            
                <div className={props.type?`cards ${Loading?"skeleton-box":""} flex flex-col justify-center items-center rounded shadow-md card-responsive w-40 sm:w-48 mb-3`:`cards  flex flex-col justify-center items-center rounded shadow-md w-full sm:w-48 mb-3 ${Loading?"skeleton-box":""}`} style={{direction:"ltr"}}>
                <Link href={`/product/product?pids=${props.card.id}`}>
                <div className="w-full cursor-pointer  relative rounded-tl rounded-tr">
                <img src={props.card.image} className="w-full relative rounded-tl rounded-tr" alt="" />

                {Loading?"":
                props.card.discount?
                    <>
                    <div className={`absolute w-12 text-xs flex justify-center items-center text-center text-white discounts h-1 right-0 top-2 rounded-tl-full rounded-bl-full numbers`}>
                     {props.card.discount}   
                    </div>
                    <div className="absolute left-1.5 top-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14.56" height="12.562" viewBox="0 0 14.56 12.562">
                            <path id="Path_11538" data-name="Path 11538" d="M1461.115,27.94s3.159-4.021,6.044-1.369-.148,6.685-.148,6.685l-5.994,4.972s-7.1-5.429-7.163-7.589.136-3.5,2.212-4.57S1461.115,27.94,1461.115,27.94Z" transform="translate(-1453.844 -25.666)" fill="red"/>
                        </svg>
                    </div>
                    </>
                    :""
                }
                  
                </div>
                </Link>
                <div className={`flex bg-white flex-col justify-between items-center w-full px-2 py-2  info`}>
                    
                        <span className={`${Loading?"skeleton-box ":""} h-14 overflow-hidden text-right text-md self-end `}>
                            <span style={Loading?{opacity:"0"}:{}}>
                                {props.card.title}
                            </span>    
                        </span>
                        <div className="flex flex-row-reverse w-full justify-between mt-2">
                        <span className={`text-md self-end  text-black ${Loading?"skeleton-box":""}`} style={{direction:"rtl"}}>
                            <span style={Loading?{opacity:"0",fontWeight:"bold"}:{}} className="numberss">
                                {props.card.has_offer?props.card.offer_price:props.card.price
                                }
                            </span>
                        </span>
                        {props.card.discount?
                        <div className={`${Loading?"skeleton-box numbers font-bold":"numbers font-bold"}`}>
                            <span style={Loading?{opacity:"0"}:{}} className={`text-xs text-gray-500 relative discount self-end `}>
                                    {props.card.price}
                            </span>
                        </div>
                        :""}
                    </div>
                    <div className="text-xs w-full flex flex-col justify-between items-center mt-2 relative desc">
                        {/* <p className={!counter?`text-right leading-5  h-8 overflow-hidden ${Loading?"skeleton-box":""}`:`text-right leading-5  h-8 overflow-hidden ${Loading?"skeleton-box":""}`}>
                            <span style={Loading?{opacity:"0"}:{}} className="text-gray-500">
                                {props.card.description}
                            </span>
                        </p> */}
                        <p  className={`text-right opacity-1 transition-all self-end lg:self-end text-xs  overflow-hidden text-gray-500 mt-2  ${Loading?"skeleton-box":""}`}>
                            <span style={Loading?{opacity:"0"}:{}}>
                                        تصلك &nbsp;
                                <span className="font-bold">
                                     يوم الثلاثاء
                                </span>
                            </span>
                        </p>
                        {/* <div onClick={()=>toggleCounter(props.card.slug)} id={props.card.slug} className={!counter?"card-mobile z-20 transition-all flex flex-row justify-between  items-center lg:hidden absolute rounded-md w-10 h-7 bg-gray-100 left-0 bottom-0":"z-20  transition-all flex flex-row justify-between  items-center lg:hidden absolute rounded-md w-full h-7 bg-gray-100 left-0  bottom-0 card-mobile"}>
                            <span className={!counter?"hidden rounded  h-full  justify-center items-center text-2xl font-bold px-3":"text-2xl rounded-l font-bold px-3 bg-gray-200 h-full flex justify-center items-center"}>-</span>
                            <span className={!counter?"hidden rounded text-xl font-bold":"block rounded text-xl font-bold"}>1</span>
                            <span className={!counter?"text-2xl bg-gray-200 font-bold rounded h-full flex justify-center items-center w-full":"text-2xl font-bold  rounded-r h-full flex justify-center items-center px-3 bg-gray-200"}>+</span>
                        </div> */}
                        <div className={"opacity-1 mt-2 transition-all flex flex-row-reverse justify-between w-full items-center "}>
                                <div className={`${Loading?"w-14 h-2 skeleton-box":"hidden"}`}></div>
                                <img className={`${Loading?"hidden":""} w-14 2xl:w-16 h-2 ml-1 `} src="../images/SPEED AR.svg" alt="" />

                            <p className={`hidden lg:flex text-xs  flex-row w-1/3 sm:w-1/2 justify-start lg:justify-between items-center ${Loading?"w-14 h-2 skeleton-box":""}`}>
                                <span className="hidden lg:block text-green-600 font-bold" style={Loading?{opacity:"0"}:{}}>
                                    {props.card.rating?
                                    props.card.rating:""
                                }
                                </span>
                            </p>
                        </div>
                        {/* <div onClick={()=>toggleCounter(props.card.slug)} id={props.card.slug} className={`btn ${Loading?"skeleton-box":""} absolute left-1/2 transform -translate-x-2/4 w-full bottom-0.5 rounded hidden lg:flex flex-row justify-center items-center h-6 bg-yellow-500 text-white`}>
                            <div style={Loading?{opacity:"0"}:{}}>
                                إضافة للسلة 
                                <span className="text-lg ml-1 font-bold">+</span>
                            </div>
                        </div> */}
                        {/* <div onClick={toggleCounter} id={props.card.slug} className={!counter?"opacity-0 z-20 transition-all  flex flex-row justify-between  items-center  absolute rounded-md w-full h-7 bg-gray-100 left-0 bottom-0":"z-20  transition-all flex flex-row justify-between  items-center  absolute rounded-md w-full h-7 bg-gray-100 left-0 opacity-100  bottom-0  delay-500 "} >
                            <span className={!counter?"rounded  h-full  justify-center items-center text-2xl font-bold px-3 bg-gray-200":"rounded  h-full  justify-center items-center text-2xl font-bold px-3 bg-gray-200"}>-</span>
                            <span className={!counter?"rounded text-xl font-bold":"block rounded text-xl font-bold"}>1</span>
                            <span className={!counter?"text-2xl order-0 bg-gray-200 font-bold rounded h-full flex justify-center items-center  px-3":"text-2xl font-bold  rounded-r h-full flex justify-center items-center px-3 bg-gray-200 order-0"}>+</span>
                        </div> */}
                    </div>
                   
                </div>
            </div>
          
    }
        
        </>
        :
        <>
        </>
    );
}