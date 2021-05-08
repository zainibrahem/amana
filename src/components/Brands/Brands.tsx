import React, { useCallback, useEffect, useRef, useState } from 'react';
import {Row,Title,UlTabs,UIElements} from '../Tabs/Tabs.style';
import {P} from '../Brands/Brands.style';

import dynamic from 'next/dynamic';
import {HorizontalCategoryCardMenu} from './HorizontalCategoryCardMenu';
interface Props {}

export const Brands: React.FC<Props> = () => {
  const [Active , setActive] = useState(1);
  const ref = useRef(null);
  const news = useRef(null);

  let calc;

  const handleClick = (number) =>{
    setActive(number);
      calc = ref.current.offsetWidth / 3 * (number-1);
      console.log(calc);
      news.current.style=`right:${calc+10}px;transition:.4s all ease`;
      
  }
 
  return (
  <>
    <Row>
        <Title>شركاء النجاح</Title>
        <P>
        مع شاشة حماية 5G ومزود بتطبيق فيس تايم، لون ذهبي  مع شاشة حماية 5G ومزود بتطبيق فيس تايم، لون ذهبي  مع شاشة حماية 5G ومزود بتطبيق فيس تايم، لون ذهبي  
        </P>
        <UlTabs style={{width:"17%"}} ref={ref} className="active">
          <li ref={news} className="active"></li>
            <li onClick={()=>{handleClick(1)}}>وكالات</li>
            <li onClick={()=>{handleClick(2)}}>متاجر</li>
            <li onClick={()=>{handleClick(3)}}>مسوقون</li>
        </UlTabs>
        <UIElements style={{marginBottom:"0px",marginTop:"0px",height:"230px"}}>
          <div className={Active==1?"element actives":"element"}>
            <HorizontalCategoryCardMenu  type="grocery"></HorizontalCategoryCardMenu>
          </div>
          <div className={Active==2?"element actives":"element"}>
            <HorizontalCategoryCardMenu  type="grocery"></HorizontalCategoryCardMenu>
          </div>
          <div className={Active==3?"element actives":"element"}>
            <HorizontalCategoryCardMenu  type="grocery"></HorizontalCategoryCardMenu>
          </div>
        </UIElements>
    </Row>
  </>
  );
}