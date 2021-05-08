import React, { useCallback, useEffect, useRef, useState } from 'react';
import {Row, Title} from '../Tabs/Tabs.style';
import {HorizontalCategoryCardMenu} from './HorizontalCategoryCardMenu';
import {Ele} from './Featured.style';
interface Props {}

export const Featured: React.FC<Props> = () => {
 
  return (
      <>
        <Row>
            <Title style={{marginBottom:"20px"}}>تصنيفات مميزة</Title>
            <Ele>
                <HorizontalCategoryCardMenu  type="grocery"></HorizontalCategoryCardMenu>
            </Ele>
        </Row>
      </>
  );

}