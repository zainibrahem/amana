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
import AllCatsSlider from '../components/allcatsSlider/allCatsSlider';
import Discover from '../components/discover/discover';
export default function Home() {
    interface Data {
        banners:[]
        categories_groups:[]
    }
    const [data,setData] = useState<Data>();
    useEffect(() => {
        
        fetch(`https://amanacart.com/api/all_categories`)
         .then(res => res.json())
         .then(result =>{
            setData(result.data);
            console.log('first data');
            console.log(result.data);
         })
         .catch(e => {
           console.log(e);
       });
     },[])
     const all = ()=>{
        fetch(`https://amanacart.com/api/all_categories`)
        .then(res => res.json())
        .then(result =>{
           setData(result.data);
           console.log('first data');
           console.log(result.data);
        })
        .catch(e => {
          console.log(e);
      });
     }
     const sort = (sorts) =>{
         console.log(sorts.target.dataset.id);
            fetch(`https://amanacart.com/api/all_categories_filter?&sort=${sorts.target.dataset.id}`)
             .then(res => res.json())
             .then(result =>{
                setData(result.data);
             })
             .catch(e => {
               console.log(e);
           });
     }
     const sortletters = (letter) =>{
         console.log(letter.target.innerText)
            fetch(`https://amanacart.com/api/all_categories_filter?&key=${letter.target.innerText}`)
             .then(res => res.json())
             .then(result =>{
                setData(result.data);
                console.log('second data');
                console.log(result.data);
             })
             .catch(e => {
               console.log(e);
           });
     }
    return(
        <>
            <SearchBar></SearchBar>
            <AllCatsSlider data={data?data.banners:""}></AllCatsSlider>
            <Discover all={()=>all} sortletters={()=>sortletters} sort={()=>sort} data={data?data.categories_groups:""}></Discover>
        </>
    );
}