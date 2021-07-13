
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
    const [checkss,setCheckss] = useState([props.item.id]);
    const [price,setPrice] = useState(0);
    const [allprice,setAllPrice] = useState(0);
    const [height,setHeight] = useState(0);
    // let ids = [props.item.id];
    const [ids , setids]  = useState([props.item.id])
  useEffect(()=>{
    var prices = parseInt(props.item.raw_price);
    var allprices = parseInt(props.item.price);
      
          if(props.items){
            props.items.forEach((element,index) => {
              setCheckss(checkss => [...checkss,element.id]);
              prices +=  parseInt(element.raw_price);
              allprices +=  parseInt(element.price);
              setids(ids => [...ids,element.id])
            });
            setPrice(prices);
            setAllPrice(allprices);
          }
          var height = document.querySelector('.height').clientHeight;
          setHeight(height);
  },[])
  
  const setchecks = (id,pricee,fullp) =>{
    let fullPrice = price;
    let allPricee = allprice;
    let newLists = []
    if(checkss.includes(id)){
      const newList= checkss.filter((item) => item !== id);
      newLists = ids.filter((item) => item !== id);
      
      setCheckss(newList);
      

      fullPrice = fullPrice - parseInt(pricee);
      allPricee = allPricee - parseInt(fullp);
      setids(newLists);

    }
    else{
      // const newList= checkss.filter((item) => item !== id);
      setCheckss(checkss => [...checkss,id]);
      fullPrice = fullPrice + parseInt(pricee);
      allPricee = allPricee + parseInt(fullp);
      newLists = ids;
      newLists.push(id)
      setids(newLists);

    }
   
    console.log(newLists)
    setPrice(fullPrice)
    setAllPrice(allPricee)
    props.price(fullPrice,allPricee,newLists);
    
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
                <div className="height flex flex-col mt-2 w-full justify-center relative  rounded bg-white pb-2" >
                    <input type="checkbox" onClick={()=>setchecks(props.item.id,props.item.raw_price,props.item.price)}  className="form-checkbox absolute left-0 top-0 focus:ring-0 checked:bg-yellow-500"  checked={checkss.includes(props.item.id)?true:false} />
                    
                    <img src={`${props.image}`} className="w-full" alt="" />
                   
                    <span className="text-xs w-full mt-1 text-center self-start px-2 numbers" style={{fontWeight:"bold"}}>
                      {props.item.offer_price?props.item.offer_price:props.item.price}
                    </span>
                    <span  className="text-xs text-center mt-1 h-4 overflow-hidden text-gray-500 relative self-start  ">
                      {props.item.title}
                    </span>
                </div>
                <div className="flex text-2xl mx-3 text-gray-500 justify-center w-3/12 items-center" style={{height:height}}>
                    <div className="w-4/6 h-full" style={{background:"url(../images/icons/colors/Icon.svg)",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}}></div>
                </div>
              </div>
          </SwiperSlide>
      
        {props.items.map((ele,index)=>
          index!=props.items.length-1? 
          <>
        
           <SwiperSlide key={ele.id}>
              <div className="flex justify-between items-center">
                <div className="height flex flex-col mt-2 w-full justify-center relative  rounded bg-white pb-2" >
                    <input type="checkbox" onClick={()=>setchecks(ele.id,ele.raw_price,ele.price)}  className="form-checkbox absolute left-0 top-0 focus:ring-0 checked:bg-yellow-500"  checked={checkss.includes(ele.id)?true:false} />
                    
                    <img src={`${ele.image}`} className="w-full" alt="" />
                    <span className="text-xs w-full mt-1 text-center self-start px-2 numbers" style={{fontWeight:"bold"}}>
                      {ele.offer_price?ele.offer_price:ele.price}
                    </span>
                    <span className="text-xs mt-1 h-4 overflow-hidden text-center text-gray-500 relative self-start  ">
                      {ele.title}
                    </span>
                </div>
                <div className="flex text-2xl mx-3 text-gray-500 justify-center w-3/12 items-center" style={{height:height}}>
                    <div className="w-4/6 h-full" style={{background:"url(../images/icons/colors/Icon.svg)",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}}></div>
                </div>
              </div>
          </SwiperSlide>
        </>
       :  <SwiperSlide key={ele.id}>
       <div className="flex justify-between items-center">
         <div className="height flex flex-col mt-2 w-full justify-center relative  rounded bg-white pb-2" >
             <input type="checkbox" onClick={()=>setchecks(ele.id,ele.raw_price,ele.price)}  className="form-checkbox absolute left-0 top-0 focus:ring-0 checked:bg-yellow-500"  checked={checkss.includes(ele.id)?true:false} />
             
             <img src={`${ele.image}`} className="w-full" alt="" />
             <span className="text-xs w-full mt-1 text-center self-start px-2 numbers" style={{fontWeight:"bold"}}>
             {ele.offer_price?ele.offer_price:ele.price}
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
                  <div className="height flex flex-col mt-2 w-full justify-center relative  rounded bg-white pb-2" >
                      <input type="checkbox" onClick={()=>setchecks(props.item.id,props.item.raw_price,props.item.price)}  className="form-checkbox absolute left-0 top-0 focus:ring-0 checked:bg-yellow-500"  checked={checkss.includes(props.item.id)?true:false} />
                      
                      <img src={`${props.image}`} className="w-full" alt="" />
                     
                      <span className="text-xs w-full mt-1 text-center self-start px-2 numbers" style={{fontWeight:"bold"}}>
                        {props.item.offer_price?props.item.offer_price:props.item.price}
                      </span>
                      <span   className="text-xs text-center mt-1 h-4 overflow-hidden text-gray-500 relative self-start  ">
                        {props.item.title}
                      </span>
                  </div>
                  <div className="flex text-2xl mx-3 text-gray-500 justify-center w-3/12 items-center" style={{height:height}}>
                      <div className="w-4/6 h-full" style={{background:"url(../images/icons/colors/Icon.svg)",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}}></div>
                  </div>
                </div>
            </SwiperSlide>
        
          {props.items.map((ele,index)=>
          
            <SwiperSlide key={ele.id}>
              <div className="flex justify-between items-center">
                <div className="height flex flex-col mt-2 w-full justify-center relative  rounded bg-white pb-2" >
                    <input type="checkbox" onClick={()=>setchecks(ele.id,ele.raw_price,ele.price)}  className="form-checkbox absolute left-0 top-0 focus:ring-0 checked:bg-yellow-500"  checked={checkss.includes(ele.id)?true:false} />
                    
                    <img src={`${ele.image}`} className="w-full" alt="" />
                    <span className="text-xs w-full mt-1 text-center self-start px-2 numbers" style={{fontWeight:"bold"}}>
                    {ele.offer_price?ele.offer_price:ele.price}
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
           
            )}
       
         
         
    </Swiper>
      </div>
      :<></>
  )
}