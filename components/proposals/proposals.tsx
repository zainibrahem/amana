import {Title} from '../title/title';
import ProductCard from '../productCard/productCard';
import React from "react";
import Slider from '../slider/slider';
import { useAppState } from '../../contexts/app/app.provider';

// import Slide1 from '../../public/images/slider/maher.png';
export default function Proposals () {
    const isDrawerOpen = useAppState('isDrawerOpen');

    const title = 'اقترحنا لك';
    return (
        <>
        <div className="propos w-full mb-3 slider special-brands-slider pt-6 md:pt-0">
                <Slider></Slider>
            </div>
        <Title title={title}></Title>
        <div className="grid grid-cols-12">
            <div className="col-span-12">
                <div className="proposals flex flex-row flex-wrap bg-white rounded pt-6 md:pt-2 pb-4 px-3 md:px-5 justify-around items-center">
                    <ProductCard type={"proposals"}></ProductCard>
                    <ProductCard type={"proposals"}></ProductCard>
                    <ProductCard type={"proposals"}></ProductCard>
                    <ProductCard type={"proposals"}></ProductCard>
                    <ProductCard type={"proposals"}></ProductCard>
                    <ProductCard type={"proposals"}></ProductCard>
                    <ProductCard type={"proposals"}></ProductCard>
                    <ProductCard type={"proposals"}></ProductCard>
                    <ProductCard type={"proposals"}></ProductCard>
                    <ProductCard type={"proposals"}></ProductCard>
                    <ProductCard type={"proposals"}></ProductCard>
                    <ProductCard type={"proposals"}></ProductCard>
                    <ProductCard type={"proposals"}></ProductCard>
                    <ProductCard type={"proposals"}></ProductCard>
                    <ProductCard hidden={true} type={"proposals"}></ProductCard>
                </div>
            </div>
        </div>
        </>
    );

}