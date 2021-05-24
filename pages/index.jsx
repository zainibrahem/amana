import React from 'react';
import Slider from '../components/slider/slider';
import SearchBar from '../components/seachbar/searchBar';
import Banners from '../components/banners/banners';
import Categories from '../components/categories/categories';
import Card from '../components/card/card';
export default function Home() {
  return (
    <>
      <SearchBar></SearchBar>
      <Slider></Slider>
      <Banners></Banners>
      <Categories></Categories>
      <Card color="pink" title="الشائع في أمانة"></Card>
      
    </>
  )
}
