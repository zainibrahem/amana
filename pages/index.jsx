import React, { useState,useEffect } from 'react';
import { useAppState, useAppDispatch } from '../contexts/app/app.provider';
import Slider from '../components/slider/slider';
import SearchBar from '../components/seachbar/searchBar';
import Banners from '../components/banners/banners';
import Categories from '../components/categories/categories';
import Card from '../components/card/card';
import Deal from '../components/deal/deal';
import Specials from '../components/specials/specials';
import Cat from '../components/cat/cat';
import Proposals from '../components/proposals/proposals';
import { Waypoint } from 'react-waypoint';

export default function Home() {
  const [widths,setWidths] = useState(0);
  const dispatch = useAppDispatch();

  const togglesearch = React.useCallback(() => {
    dispatch({
      type: 'NoSearch',
    });
  }, [dispatch]
  );
  const toggleIcon = React.useCallback(() => {
    dispatch({
      type: 'toggleIcon',
    });
  }, [dispatch]
  );
  const NotoggleIcon = React.useCallback(() => {
    dispatch({
      type: 'NotoggleIcon',
    });
  }, [dispatch]
  );
  
  

  useEffect(() => {
     setWidths(window.innerWidth);
  });
  return (
    <>
      <SearchBar></SearchBar>
      <Waypoint
      onEnter={NotoggleIcon}
      onLeave={toggleIcon}
      />
      
      <div className="special-brands-slider">
        <Slider></Slider>
        </div>
        <Banners></Banners>
    
      <Waypoint
      onEnter={toggleIcon}
      >
        <div>
        </div>
      </Waypoint>

      <Waypoint
        onEnter={togglesearch}
      >
        <div>
        <Categories></Categories>
        </div>
      </Waypoint>
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
