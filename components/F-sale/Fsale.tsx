
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,Thumbs
} from 'swiper/core';
import Price from "../price/price";

SwiperCore.use([Navigation,Thumbs]);


export default function FSlide(props) {
  
  
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [check1, setCheck1] = useState(true);
    const [checkss,setCheckss] = useState([]);
    const [price,setPrice] = useState(0);
    const [height,setHeight] = useState(0);
  useEffect(()=>{
    setPrice(parseInt(props.item.raw_price));

        setTimeout(()=>{
          if(props.items){
            props.items.forEach((element,index) => {
              setCheckss(checkss => [...checkss,element.id]);
            });
            setCheckss(checkss => [...checkss,props.item.id]);
            var prices = price;
            props.items.forEach(element => {
              if(checkss.includes(element.id)){
                prices +=  parseInt(element.raw_price);
                setPrice(prices);
              }
            });
          }
            var height = document.querySelector('.height').clientHeight;
            setHeight(height);
        },1000)
  },[height])

  const setchecks = (id) =>{
    console.log(checkss)
    if(checkss.includes(id)){
      const newList = checkss.filter((item) => item !== id);
      setCheckss(newList);
    }
    else{
      setCheckss(checkss => [...checkss,id]);
    }

    var prices = parseInt(props.item.raw_price);
    props.items.forEach(element => {
        if(checkss.includes(element.id)){
          prices +=  parseInt(element.raw_price);
        }
        setPrice(prices)
      });
        props.price(price);
    
  }
  return (
    props.items?
    props.items.length>1?
    <div className="w-full">
  <Swiper
    loop={false}
    spaceBetween={0}
    navigation={true}
    slidesPerView={2}
    dir="rtl"
    >
       <SwiperSlide>
              <div className="flex justify-between items-center w-full">
                <div className="height flex flex-col w-full justify-center relative  rounded bg-white pb-2" >
                    <input type="checkbox" onClick={()=>setchecks(props.item.id)}  className="form-checkbox absolute left-0 top-0 focus:ring-0 checked:bg-yellow-500"  checked={check1?true:false} />
                    
                    <img src={`${props.image}`} className="w-full" alt="" />
                   
                    <span className="text-xs w-full mt-1 text-center self-start px-2 numbers" style={{fontWeight:"bold"}}>
                      {props.item.offer_price}
                    </span>
                    <span className="text-xs text-center mt-1 h-4 overflow-hidden text-gray-500 relative self-start  ">
                      {props.item.title}
                    </span>
                </div>
                <div className="flex text-2xl mx-3 text-gray-500 justify-center w-3/12 items-center" style={{height:height}}>
                    <div className="w-4/6 h-full" style={{background:"url(../images/icons/colors/Icon.svg)",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}}></div>
                </div>
              </div>
          </SwiperSlide>
      
        {props.items.map((ele,index)=>
          index%2!=0? 
          <>
        
          <SwiperSlide>
            <div className="flex justify-between items-center">
              <div className="height flex flex-col w-full justify-center relative  rounded bg-white pb-2" >
                  <input type="checkbox" onClick={()=>setchecks(ele.id)}  className="form-checkbox absolute left-0 top-0 focus:ring-0 checked:bg-yellow-500"  checked={checkss.includes(ele.id)?true:false} />
                  
                  <img src={`${ele.image}`} className="w-full" alt="" />
                  <span className="text-xs w-full mt-1 text-center self-start px-2 numbers" style={{fontWeight:"bold"}}>
                    {ele.offer_price}
                  </span>
                  <span className="text-xs mt-1 h-4 overflow-hidden text-center text-gray-500 relative self-start  ">
                    {ele.title}
                  </span>
              </div>
              <div className="flex text-2xl mx-3 text-gray-500 justify-center w-3/12 items-center" style={{height:height}}>
                  {/* <div className="w-4/6 h-full" style={{background:"url(../images/icons/colors/Icon.svg)",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}}></div> */}
              </div>
            </div>
        </SwiperSlide>
        </>
       : <SwiperSlide>
              <div className="flex justify-between items-center">

                <div className="height flex flex-col w-full justify-center relative  rounded bg-white pb-2" >
                    <input type="checkbox" onClick={()=>setchecks(ele.id)}  className="form-checkbox absolute left-0 top-0 focus:ring-0 checked:bg-yellow-500"  checked={checkss.includes(ele.id)?true:false} />
                    
                    <img src={`${ele.image}`} className="w-full" alt="" />
                    <span className="text-xs w-full mt-1 text-center self-start px-2 numbers" style={{fontWeight:"bold"}}>
                    {ele.offer_price}
                  </span>
                  <span className="text-xs mt-1 text-center h-4 overflow-hidden text-gray-500 relative self-start ">
                    {ele.title}
                  </span>
                </div>
                <div className="flex text-2xl mx-3 text-gray-500 justify-center w-3/12 items-center" style={{height:height}}>
                    {/* <div className="w-4/6 h-full" style={{background:"url(../images/icons/colors/Icon.svg)",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}}></div> */}
                </div>
            </div>
          </SwiperSlide>
         
          )}
     
       
       
  </Swiper>
    </div>
    :
    <div className="w-full">
    <Swiper
      loop={false}
      spaceBetween={0}
      navigation={false}
      slidesPerView={2}
      dir="rtl"
      >
         <SwiperSlide>
                <div className="flex justify-between items-center w-full">
                  <div className="height flex flex-col w-full justify-center relative  rounded bg-white pb-2" >
                      <input type="checkbox" onClick={()=>setchecks(props.item.id)}  className="form-checkbox absolute left-0 top-0 focus:ring-0 checked:bg-yellow-500"  checked={checkss.includes(props.item.id)?true:false} />
                      
                      <img src={`${props.image}`} className="w-full" alt="" />
                     
                      <span className="text-xs w-full mt-1 text-center self-start px-2 numbers" style={{fontWeight:"bold"}}>
                        {props.item.offer_price}
                      </span>
                      <span className="text-xs text-center mt-1 h-4 overflow-hidden text-gray-500 relative self-start  ">
                        {props.item.title}
                      </span>
                  </div>
                  <div className="flex text-2xl mx-3 text-gray-500 justify-center w-3/12 items-center" style={{height:height}}>
                      <div className="w-4/6 h-full" style={{background:"url(../images/icons/colors/Icon.svg)",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}}></div>
                  </div>
                </div>
            </SwiperSlide>
        
          {props.items.map((ele,index)=>
            index%2!=0? 
            <>
          
            <SwiperSlide>
              <div className="flex justify-between items-center">
                <div className="height flex flex-col w-full justify-center relative  rounded bg-white pb-2" >
                    <input type="checkbox" onClick={()=>setchecks(ele.id)}  className="form-checkbox absolute left-0 top-0 focus:ring-0 checked:bg-yellow-500"  checked={checkss.includes(ele.id)?true:false} />
                    
                    <img src={`${ele.image}`} className="w-full" alt="" />
                    <span className="text-xs w-full mt-1 text-center self-start px-2 numbers" style={{fontWeight:"bold"}}>
                      {ele.offer_price}
                    </span>
                    <span className="text-xs mt-1 h-4 overflow-hidden text-center text-gray-500 relative self-start  ">
                      {ele.title}
                    </span>
                </div>
                <div className="flex text-2xl mx-3 text-gray-500 justify-center w-3/12 items-center" style={{height:height}}>
                    {/* <div className="w-4/6 h-full" style={{background:"url(../images/icons/colors/Icon.svg)",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}}></div> */}
                </div>
              </div>
          </SwiperSlide>
          </>
         : <SwiperSlide>
                <div className="flex justify-between items-center">
  
                  <div className="height flex flex-col w-full justify-center relative  rounded bg-white pb-2" >
                      <input type="checkbox" onClick={()=>setchecks(ele.id)}  className="form-checkbox absolute left-0 top-0 focus:ring-0 checked:bg-yellow-500"  checked={checkss.includes(ele.id)?true:false} />
                      
                      <img src={`${ele.image}`} className="w-full" alt="" />
                      <span className="text-xs w-full mt-1 text-center self-start px-2 numbers" style={{fontWeight:"bold"}}>
                      {ele.offer_price}
                    </span>
                    <span className="text-xs mt-1 text-center h-4 overflow-hidden text-gray-500 relative self-start ">
                      {ele.title}
                    </span>
                  </div>
                  <div className="flex text-2xl mx-3 text-gray-500 justify-center w-3/12 items-center" style={{height:height}}>
                      {/* <div className="w-4/6 h-full" style={{background:"url(../images/icons/colors/Icon.svg)",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}}></div> */}
                  </div>
              </div>
            </SwiperSlide>
           
            )}
       
         
         
    </Swiper>
      </div>
      :<></>
  )
}