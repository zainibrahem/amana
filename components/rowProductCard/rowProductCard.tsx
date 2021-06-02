import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination, Scrollbar } from 'swiper/core';
import { useState } from 'react';
import { useAppDispatch, useAppState } from '../../contexts/app/app.provider';
import React from 'react';

// import Slide1 from '../../public/images/slider/maher.png';
export default function RowProductCard (props) {
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

        console.log(slug);
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
          
            console.log(data);
        })
    }
    return (
        props.card?
        <>
            <div className="flex bg-white justify-between items-center mt-2 rounded w-full sm:w-11/12 lg:w-11/12 2xl:w-8/12 ">
                <div className=" flex flex-col justify-around items-center h-36 p-2 w-2/3">
                    <div className="flex flex-row-reverse justify-between items-center w-full">
                        <span className="text-sm lg:text-md text-black text-right w-11/12">{props.card.title}</span>
                        <span className="hidden lg:block text-green-600 font-bold" style={Loading?{opacity:"0"}:{}}>
                            {props.card.rating}
                        </span>
                    </div>
                    <p className="text-xs h-16 w-full text-right overflow-hidden p-2 text-gray-400">{props.card.description}</p>
                    <div className={`flex justify-between items-center w-full`}>
                        <span className="text-xs lg:text-md text-black text-right numbers" style={{fontWeight:"bold"}} dir="ltr">{props.card.price}                               <span style={Loading?{opacity:"0"}:{}} className={`text-xs text-gray-500 relative discount self-end `}>2323 ر.ع</span></span>

                        <img className={counter?` ${Loading?"hidden":""} opacity-0 transition-all w-14 h-2 ml-1`:`${Loading?"hidden":""} w-14 2xl:w-16 h-2 ml-1 `} src="../images/SPEED AR.svg" alt="" />
                    </div>
                </div>
                <div className="h-36 w-1/3 relative" style={Loading?{}:{background:"url("+props.card.image+")",backgroundPosition:"center center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
               
                    <div className={`absolute ${props.card.discount?"hidden":""}  w-12 text-xs flex justify-center items-center text-center text-white discounts h-1 right-0 top-2 rounded-tl-full rounded-bl-full numbers`}>
                     {props.card.discount}
                    </div>
                    <div className="absolute left-1.5 top-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14.56" height="12.562" viewBox="0 0 14.56 12.562">
                            <path id="Path_11538" data-name="Path 11538" d="M1461.115,27.94s3.159-4.021,6.044-1.369-.148,6.685-.148,6.685l-5.994,4.972s-7.1-5.429-7.163-7.589.136-3.5,2.212-4.57S1461.115,27.94,1461.115,27.94Z" transform="translate(-1453.844 -25.666)" fill="red"/>
                        </svg>
                    </div>
                </div>
            </div>        
        </>
        :
        <>
        </>
    );
}