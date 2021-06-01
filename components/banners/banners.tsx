
import React, { useEffect, useState } from 'react';
import { useAppState } from '../../contexts/app/app.provider';
export default function Banners (props) {
    const [Loading,setLoading] = useState(true);
    const [Loading2,setLoading1] = useState(true);
    const [Loading3,setLoading2] = useState(true);
    const [Loading4,setLoading3] = useState(true);
    
    const Loading1 = () =>{
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }
    const setsLoading1 = () =>{
        
        setTimeout(() => {
            setLoading1(false)
            console.log('after 10')
        }, 1000);
    }
    const setsLoading2 = () =>{
        setTimeout(() => {
            setLoading2(false)
        }, 1000);
    }
    const setsLoading3 = () =>{
        setTimeout(() => {
            setLoading3(false)
        }, 1000);
    }


    return (
    
        <div className="grid grid-cols-12 gap-4 mt-2 sm:mt-4">
            <div className="hidden md:block col-span-6">
                {/* <div className={`w-full  banner1 rounded shadow-md ${Loading?"skeleton-box h-90":"h-full"}`} style={Loading?{}:{background:"url("+props.data[0].image+") "}}></div> */}
                <div className={`w-full h-80 skeleton-box ${Loading?"block":"hidden"}`}></div>    
                <img onLoad={()=>Loading1()} src={props.data&&props.data[0]?props.data[0].image:""} className={`w-full  banner1 rounded shadow-md h-full ${Loading?"hidden":"block"}`} alt="" />
            </div>
            <div className="col-span-12 md:col-span-6">
                <div className={`grid grid-cols-12 ${Loading?"h-full":""} gap-2 sm:gap-4`}>
                    <div className=" col-span-12">
                        <div className={`w-full h-full skeleton-box ${Loading2?"block":"hidden"}`}></div>    
                        <img onLoad={()=>setsLoading1()} src={props.data&&props.data[1]?props.data[1].image:""} className={`w-full h-full banner1 rounded shadow-md ${Loading2?"hidden":"block"}`} alt="" />
                    </div>
                    <div className="col-span-6">
                        <div className={`w-full h-full skeleton-box ${Loading3?"block":"hidden"}`}></div>    
                        <img onLoad={()=>setsLoading2()} src={props.data&&props.data[2]?props.data[2].image:""} className={`w-full h-full banner1 rounded shadow-md ${Loading3?"hidden":"block"}`} alt="" />
                    </div>
                    <div className="col-span-6">
                    <div className={`w-full h-full skeleton-box ${Loading4?"block":"hidden"}`}></div>    
                    <img onLoad={()=>setsLoading3()} src={props.data&&props.data[3]?props.data[3].image:""} className={`w-full h-full banner1 rounded shadow-md ${Loading4?"hidden ":"block"}`} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}