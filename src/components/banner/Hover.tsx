import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Box,
  Image,
  Content,
  Title,
  Description,
  SearchWrapper,
  HashTags,
  ProfileWrapper,
  RoundWrapper,
  RoundProfile,
  Hash,
  Hashs
} from './banner.style';

import { Waypoint } from 'react-waypoint';
import { useAppDispatch } from 'contexts/app/app.provider';
import Search from 'features/search/search';
import { url } from 'node:inspector';
import {Parent,Divs} from './hover.style';
import { useState } from 'react';
// import * from "./";
interface Props {
  style?: any;
  imageUrl?: string;
  intlTitleId?: string;
  intlDescriptionId?: string;
  className?:string
  itemImage?:string
}

export const Hover: React.FC<Props> = ({
  style,
  imageUrl,
  intlTitleId,
  intlDescriptionId,
  className,
  itemImage
}) => {
  const [isShown, setIsShown] = useState(false);

    return (
      <div className={intlTitleId=="ddd"?"pages":""}  style={{width:intlTitleId=="ddd"?"70%":intlTitleId=="sss"?"16%":"23%",   height:"175px",}}>
        <Divs>
        <Parent className={className} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} >
            <div className="child" style={{background:`url(${itemImage})`,backgroundSize:"cover",height:"100%"}}>
              <div className="overlay">
                  <h5># IPhone</h5>
              </div>
            </div>
          <div className={isShown?"package shown":"package"} style={{height:"104%"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="160" viewBox="0 0 91.992 128.526">
              <g id="Group_884" data-name="Group 884" transform="translate(-629.5 -790.05)">
                <path id="Path_4436" data-name="Path 4436" d="M-4300.356,1041.215c.336-.225.067-.814-.283-.619-11.629,6.5-30.767,13.84-35.536,13.84-4.908,0-22.239-6.857-32.616-12.494-.3-.166-.535.345-.243.54l29.442,20.758a6.848,6.848,0,0,0,7.731,0Z" transform="translate(5011.938 -145.859)" fill="#f39c12"/>
              </g>
            </svg>
          </div>
        </Parent>
        </Divs>
        </div>
        );
};