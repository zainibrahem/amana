import React, { useCallback, useEffect, useRef, useState } from 'react';
import {Row, Title} from '../Tabs/Tabs.style';
import {HorizontalCategoryCardMenu} from './HorizontalCategoryCardMenu';
import {Ele} from './Proposals.style';
interface Props {}

export const Proposals: React.FC<Props> = () => {
 
  return (
      <>
        <Row>
            <Title style={{marginBottom:"20px"}}>مقترحات لك</Title>
            <Ele>
                <HorizontalCategoryCardMenu margin="30px"  type="grocery"></HorizontalCategoryCardMenu>
                <HorizontalCategoryCardMenu margin="10px" type="grocery"></HorizontalCategoryCardMenu>
            </Ele>
        </Row>
      </>
  );

}