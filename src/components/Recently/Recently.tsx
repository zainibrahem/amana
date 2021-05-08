import React, { useCallback, useEffect, useRef, useState } from 'react';
import {Row, Title} from '../Tabs/Tabs.style';
import {HorizontalCategoryCardMenu} from 'layouts/horizontal-category-menu/horizontal-category-card-menu';
import {Ele} from './Recently.style';
interface Props {}

export const Recently: React.FC<Props> = () => {
 
  return (
      <>
        <Row>
            <Title style={{marginBottom:"20px"}}>وصلنا مؤخرا</Title>
            <Ele>
                <HorizontalCategoryCardMenu  type="grocery"></HorizontalCategoryCardMenu>
            </Ele>
        </Row>
      </>
  );

}