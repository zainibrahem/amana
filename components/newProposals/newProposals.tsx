import {Title} from '../title/title';
import RowProductCard from '../rowProductCard/rowProductCard';
import React from "react";
import Slider from '../slider/slider';
import { useAppState } from '../../contexts/app/app.provider';

// import Slide1 from '../../public/images/slider/maher.png';
export default function newProposals (props) {
    const isDrawerOpen = useAppState('isDrawerOpen');

    const title = 'اقترحنا لك';
    return (
        props.data?
        <>
        <div className="propos w-full mb-3 slider special-brands-slider pt-6 md:pt-0">
                <Slider sliders={props.slider} ></Slider>
        </div>
        {/* <Title title={title}></Title> */}
        <div className="grid grid-cols-12">
                {props.data.map(eles => 
                        <>
                        <div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-end 2xl:justify-center items-center">
                            <RowProductCard card={eles} type={"proposals"}></RowProductCard>
                        </div>
                        </>
                    )}
        </div>
        </>
            :
            <h1></h1>
   );

}