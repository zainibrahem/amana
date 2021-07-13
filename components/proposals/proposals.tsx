import {Title} from '../title/title';
import ProductCard from '../productCard/productCard';
import React from "react";
import Slider from '../slider/slider';
import { useAppState } from '../../contexts/app/app.provider';

// import Slide1 from '../../public/images/slider/maher.png';
export default function Proposals (props) {
    const isDrawerOpen = useAppState('isDrawerOpen');

    const title = props.title;
    return (
        props.data?
        <>
        <div className="propos w-full mb-3 slider special-brands-slider pt-6 md:pt-0">
                <Slider sliders={props.slider} ></Slider>
        </div>
        <Title title={title}></Title>
        <div className="grid grid-cols-12">
            <div className="col-span-12">
                <div className="proposals flex flex-row flex-wrap bg-white rounded pt-6 md:pt-2 pb-4 px-3 md:px-5 justify-end items-center" style={{minHeight:"24rem"}}>
                {props.data.length>0?props.data.map(eles => 
                        <>
                        <ProductCard card={eles} type={"proposals"}></ProductCard>
                        </>
                    ):
                        <span className="text-center text-md w-full">
                            لا توجد منتجات حسب ما تم تحديده
                        </span>
                    }
                </div>
            </div>
        </div>
        </>
            :
            <h1></h1>
   );

}