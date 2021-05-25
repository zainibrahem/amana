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

export default function Home() {
  return (
    <>
      <SearchBar></SearchBar>
      <div className="special-brands-slider">
        <Slider></Slider>
      </div>
      <Banners></Banners>
      <Categories></Categories>
      <Card color="pink" title="الشائع في أمانة"></Card>
      <Deal></Deal>
      <Card color="pink" title="وصل حديثا"></Card>
      <Specials></Specials>
      <Cat></Cat>
      <Cat></Cat>
      <Cat></Cat>
      <Proposals></Proposals>


    </>
  )
}
