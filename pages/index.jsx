import React, { useState,useEffect } from 'react';
import { useAppState, useAppDispatch } from '../contexts/app/app.provider';
import Slider from '../components/slider/slider';
import SearchBar from '../components/seachbar/searchBar';
import Banners from '../components/banners/banners';
import Categories from '../components/categories/categories';
import Card from '../components/card/card';
import Recent from '../components/recent/recent';
import Deal from '../components/deal/deal';
import Specials from '../components/specials/specials';
import Cat from '../components/cat/cat';
import Proposals from '../components/proposals/proposals';
import { Waypoint } from 'react-waypoint';

export default function Home() {
  const [widths,setWidths] = useState(0);
  const dispatch = useAppDispatch();
  const [data,setData] = useState();
  const [datas,setDatas] = useState(null);
  const [userId,setUserId] = useState(0);
  const togglesearch = React.useCallback(() => {
    dispatch({
      type: 'NoSearch',
    });
  }, [dispatch]
  );
  const toggleLoader = React.useCallback(() => {
    dispatch({
      type: 'Loaded',
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
  const Loaded = React.useCallback(() => {
    dispatch({
      type: 'Loaded',
    });
  }, [dispatch]
  );
  useEffect(() => {
     fetch("https://amanacart.com/api/home")
      .then(res => res.json())
      .then(result =>{
        setData(result.data);
      })
      .catch(e => {
    });
  },[userId])
  const loaded = useAppState('loaded');

  useEffect(() => {
    setWidths(window.innerWidth);
    
  })

  return (
    <>
    {loaded?
      <SearchBar sliders={data?data.first_slider:""}></SearchBar>
      :<></>
    }
      <Waypoint
      onEnter={NotoggleIcon}
      onLeave={toggleIcon}
      />
      
      <div className="special-brands-slider mt-6 md:mt-0">
        <Slider sliders={data?data.first_slider:""}></Slider>
      </div>
        <Banners data={data?data.banners:""}></Banners>
      
      
      <Waypoint
      onEnter={toggleIcon}
      >
        <div>
        </div>
      </Waypoint>

      <Waypoint
        onEnter={togglesearch}
      >
        <div className="categories">
        <Categories data={data?data.banners_slider:""}></Categories>
        </div>
      </Waypoint>
      <Card color="pink" title="الشائع في أمانة" data={data?data.trending_now:""}></Card>
      <Deal data={data?data.deal_of_the_day:""}></Deal>
      <Recent color="pink" title="وصل حديثا" data={data?data.recent:""}></Recent>
      <Specials cats={data?data.featured_categories:""} brands={data?data.featured_brands:""}></Specials>
      {data?
      data.categories_sections.map((ele,index) => 
        <Cat key={ele.id} data={ele}></Cat>
      ):""}

    
      <Proposals slider={data?data.second_slider:""} data={data?data.suggested_items:""}></Proposals>


    </>
  
 
  )
}
