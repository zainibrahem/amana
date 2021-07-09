
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
    <div className="w-full">
  <Swiper
    loop={false}
    spaceBetween={0}
    navigation={true}
    slidesPerView={3}
    dir="rtl"
    >
       <SwiperSlide>
              <div className="height flex flex-col w-full justify-center relative  rounded bg-white pb-2">
                  <input type="checkbox" onClick={()=>setCheck1(!check1)}  className="form-checkbox absolute left-0 top-0 focus:ring-0 checked:bg-yellow-500"  checked={check1?true:false} />
                  
                  <img src={`https://amanacart.com/image/${props.image}`} className="w-full" alt="" />
                  <span className="text-xs text-right self-start px-2 numbers" style={{fontWeight:"bold"}}>
                    {props.item.price}
                  </span>
                  <span className="text-xs text-right discount text-gray-500 relative self-start mr-2 numbers">
                    {props.item.offer_price}
                  </span>
              </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex text-2xl text-gray-500 justify-center items-center w-full" style={{height:height}}>
                {/* <img src="../images/icons/plus.svg" className="w-1/3 imgs" alt="" /> */}
                <div className="w-1/3 h-full" style={{background:"url(../images/icons/plus.svg)",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}}></div>
            </div>
        </SwiperSlide>
      
        {props.items.map((ele,index)=>
          index%2!=0? 
          <>
          <SwiperSlide>
            <div className="flex text-2xl text-gray-500 justify-center items-center w-full" style={{height:height}}>
                {/* <img src="../images/icons/plus.svg" className="w-1/3 imgs" alt="" /> */}
                <div className="w-1/3 h-full" style={{background:"url(../images/icons/plus.svg)",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}}></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="height flex flex-col w-full justify-center relative  rounded bg-white pb-2">
                <input type="checkbox" onClick={()=>setchecks(ele.id)}  className="form-checkbox absolute left-0 top-0 focus:ring-0 checked:bg-yellow-500"  checked={checkss.includes(ele.id)?true:false} />
                
                <img src={`${ele.image}`} className="w-full" alt="" />
                <span className="text-xs text-right self-start px-2 numbers" style={{fontWeight:"bold"}}>
                  {ele.price}
                </span>
                <span className="text-xs text-right discount text-gray-500 relative self-start mr-2 numbers">
                  {ele.offer_price}
                </span>
            </div>
        </SwiperSlide>
        </>
       : <SwiperSlide>
              <div className="height flex flex-col w-full justify-center relative  rounded bg-white pb-2">
                  <input type="checkbox" onClick={()=>setchecks(ele.id)}  className="form-checkbox absolute left-0 top-0 focus:ring-0 checked:bg-yellow-500"  checked={checkss.includes(ele.id)?true:false} />
                  
                  <img src={`${ele.image}`} className="w-full" alt="" />
                  <span className="text-xs text-right self-start px-2 numbers" style={{fontWeight:"bold"}}>
                    {ele.price}
                  </span>
                  <span className="text-xs text-right discount text-gray-500 relative self-start mr-2 numbers">
                    {ele.offer_price}
                  </span>
              </div>
          </SwiperSlide>
         
          )}
     
       
       
  </Swiper>
    </div>
    :<></>
  )
}