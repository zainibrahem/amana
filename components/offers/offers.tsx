import {Title} from '../title/title';
import ProductCard from '../productCard/productCard';
import React from "react";
import Slider from '../slider/slider';
import { useAppState } from '../../contexts/app/app.provider';

// import Slide1 from '../../public/images/slider/maher.png';
export default function Offers (props) {
    const isDrawerOpen = useAppState('isDrawerOpen');

    const title = 'اكتشف كل العروض';
    return (
        props.data?
        <>
        <Title title={title}></Title>
        <div className="grid grid-cols-12">
            <div className="col-span-12">
                <div className="proposals flex flex-row flex-wrap bg-white rounded pt-6 md:pt-2 pb-4 px-3 md:px-5 justify-around items-center">
                {props.data.map(eles => 
                        <>
                        <ProductCard card={eles} type={"proposals"}></ProductCard>
                        </>
                    )}
                </div>
            </div>
        </div>
        </>
            :
            <h1></h1>
   );

}