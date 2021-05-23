import React from 'react';
import Slider from '../components/slider/slider';
import SearchBar from '../components/seachbar/searchBar';
import Banners from '../components/banners/banners';
export default function Home() {
  return (
    <>
      <SearchBar></SearchBar>
      <Slider></Slider>
      <Banners></Banners>
    </>
  )
}
