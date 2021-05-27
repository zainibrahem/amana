import React from 'react';
import Slider from '../components/slider/slider';
import SearchBar from '../components/seachbar/searchBar';
import Banners from '../components/banners/banners';
import Categories from '../components/categories/categories';
import Card from '../components/card/card';
import Deal from '../components/deal/deal';
import Specials from '../components/specials/specials';
import Cat from '../components/cat/cat';
import Proposals from '../components/proposals/proposals';
import Brands from '../components/brands/brands';
import Brands1 from '../components/brands1/brands1';
import Cards from '../components/cards/cards';
import Price from '../components/price/price';

export default function Catgories() {
    return (
        <div className="mt-8">
            <div className="special-brands-slider">
                <Slider></Slider>
            </div>
            <div className="mt-12">
                <Brands></Brands>
            </div>
            <Brands1></Brands1>
            <Cards title={"الشائع في الكترونيات"}></Cards>
            <Banners></Banners>
            <Deal></Deal>
            <Price></Price>
            <Proposals></Proposals>
            <Categories></Categories>
            <Proposals></Proposals>


        </div>
    );
}