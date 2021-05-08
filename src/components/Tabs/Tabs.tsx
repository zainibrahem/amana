import React, { useCallback, useEffect, useRef, useState } from 'react';
import {Row,Title,UlTabs,UIElements} from './Tabs.style';
import dynamic from 'next/dynamic';
import {HorizontalCategoryCardMenu} from 'layouts/horizontal-category-menu/horizontal-category-card-menu';
interface Props {}

export const Tabs: React.FC<Props> = () => {
  const [Active , setActive] = useState(1);
  const ref = useRef(null);
  const news = useRef(null);

  let calc;

  const handleClick = (number) =>{
    setActive(number);
      calc = ref.current.offsetWidth / 4 * (number-1);
      console.log(calc);
      news.current.style=`right:${calc}px;transition:.4s all ease`;
      
  }
 
  return (
  <>
    <Row>
        <Title>الأكثر بحثا في أمانة</Title>

        <UlTabs ref={ref} className="active">
          <li ref={news} className="active"></li>
            <li onClick={()=>{handleClick(1)}}>كهربائيات</li>
            <li onClick={()=>{handleClick(2)}}>الكترونيات</li>
            <li onClick={()=>{handleClick(3)}}>ألبسة</li>
            <li onClick={()=>{handleClick(4)}}>أحذية</li>
        </UlTabs>
        <UIElements>
          <div className={Active==1?"element actives":"element"}>
            <HorizontalCategoryCardMenu  type="grocery"></HorizontalCategoryCardMenu>
          </div>
          <div className={Active==2?"element actives":"element"}>
            <HorizontalCategoryCardMenu  type="grocery"></HorizontalCategoryCardMenu>
          </div>
          <div className={Active==3?"element actives":"element"}>
            <HorizontalCategoryCardMenu  type="grocery"></HorizontalCategoryCardMenu>
          </div>
          <div className={Active==4?"element actives":"element"}>
            <HorizontalCategoryCardMenu  type="grocery"></HorizontalCategoryCardMenu>
          </div>
          <div className={Active==5?"element actives":"element"}>
            <HorizontalCategoryCardMenu  type="grocery"></HorizontalCategoryCardMenu>
          </div>
        </UIElements>
    </Row>
  </>
  );
}