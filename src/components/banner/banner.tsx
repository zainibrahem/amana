import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Box,
  Image,
  Content,
  Title,
  Description,
  SearchWrapper,
  Trends,
  HashTag
} from './banner.style';

import { Waypoint } from 'react-waypoint';
import { useAppDispatch } from 'contexts/app/app.provider';
import Search from 'features/search/search';
import Prod from 'assets/images/newimages/hex1.png';
import Prod1 from 'assets/images/newimages/hex2.png';
import Prod2 from 'assets/images/newimages/hex3.png';
import Prod3 from 'assets/images/newimages/hex4.png';
import Prod4 from 'assets/images/newimages/hex5.png';
interface Props {
  style?: any;
  imageUrl: string;
  intlTitleId: string;
  intlDescriptionId: string;
}

export const Banner: React.FC<Props> = ({
  style,
  imageUrl,
  intlTitleId,
  intlDescriptionId,
}) => {
  const dispatch = useAppDispatch();
  const setSticky = useCallback(() => dispatch({ type: 'SET_STICKY' }), [
    dispatch,
  ]);
  const removeSticky = useCallback(() => dispatch({ type: 'REMOVE_STICKY' }), [
    dispatch,
  ]);
  const onWaypointPositionChange = ({ currentPosition }) => {
    if (!currentPosition || currentPosition === 'above') {
      setSticky();
    }
  };
  return (
    <Box display={['none', 'none', 'flex']} style={style}>
      <Image backgroundImage={`url(${imageUrl})`} />
      <Content>
        <Title>
          <FormattedMessage
            id={intlTitleId}
            defaultMessage='Set Your Title Through Language File'
            values={{ minute: 90 }}
          />
        </Title>
        <Description>
          <FormattedMessage
            id={intlDescriptionId}
            defaultMessage='Set Your Description Through Language File'
          />
        </Description>
        <SearchWrapper>
          <Search
            className='banner-search'
            shadow='0 21px 36px rgba(0,0,0,0.05)'
          />
        </SearchWrapper>
        <HashTag>
          <span className="yellow">#</span>
          يبحث_عنها_العملاء
        </HashTag>
        <Trends>
          <div className="shadow">
            <div className="clipped" style={{background:`url(${Prod})`,backgroundSize:"120%",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}}>
              <div className="overlay">#Iphone</div>
              <div className="svg" style={{width:"100%",height:"20px",overflow:"hidden"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="91.992" height="128.526" viewBox="0 0 91.992 128.526">
                  <g id="Group_884" data-name="Group 884" transform="translate(-629.5 -790.05)">
                    <path id="Path_4436" data-name="Path 4436" d="M-4300.356,1041.215c.336-.225.067-.814-.283-.619-11.629,6.5-30.767,13.84-35.536,13.84-4.908,0-22.239-6.857-32.616-12.494-.3-.166-.535.345-.243.54l29.442,20.758a6.848,6.848,0,0,0,7.731,0Z" transform="translate(5011.938 -145.859)" fill="#f39c12"/>
                  </g>
                </svg>
              </div>
              <div className="white-border border1"></div>
              <div className="white-border border2"></div>
              <div className="white-border border4"></div>
            </div>
          </div>
          <div className="shadow">
            <div className="clipped" style={{background:`url(${Prod1})`,backgroundSize:"120%",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}}>
              <div className="overlay">#Iphone</div>
              <div className="svg" style={{width:"100%",height:"20px",overflow:"hidden"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="91.992" height="128.526" viewBox="0 0 91.992 128.526">
                  <g id="Group_884" data-name="Group 884" transform="translate(-629.5 -790.05)">
                    <path id="Path_4436" data-name="Path 4436" d="M-4300.356,1041.215c.336-.225.067-.814-.283-.619-11.629,6.5-30.767,13.84-35.536,13.84-4.908,0-22.239-6.857-32.616-12.494-.3-.166-.535.345-.243.54l29.442,20.758a6.848,6.848,0,0,0,7.731,0Z" transform="translate(5011.938 -145.859)" fill="#f39c12"/>
                  </g>
                </svg>
              </div>
              <div className="white-border border1"></div>
              <div className="white-border border2"></div>
              <div className="white-border border4"></div>
            </div>
          </div>
          <div className="shadow">
            <div className="clipped" style={{background:`url(${Prod2})`,backgroundSize:"120%",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}}>
              <div className="overlay">#Iphone</div>
              <div className="svg" style={{width:"100%",height:"20px",overflow:"hidden"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="91.992" height="128.526" viewBox="0 0 91.992 128.526">
                  <g id="Group_884" data-name="Group 884" transform="translate(-629.5 -790.05)">
                    <path id="Path_4436" data-name="Path 4436" d="M-4300.356,1041.215c.336-.225.067-.814-.283-.619-11.629,6.5-30.767,13.84-35.536,13.84-4.908,0-22.239-6.857-32.616-12.494-.3-.166-.535.345-.243.54l29.442,20.758a6.848,6.848,0,0,0,7.731,0Z" transform="translate(5011.938 -145.859)" fill="#f39c12"/>
                  </g>
                </svg>
              </div>
              <div className="white-border border1"></div>
              <div className="white-border border2"></div>
              <div className="white-border border4"></div>
            </div>
          </div>
          <div className="shadow">
            <div className="clipped" style={{background:`url(${Prod3})`,backgroundSize:"120%",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}}>
              <div className="overlay">#Iphone</div>
              <div className="svg" style={{width:"100%",height:"20px",overflow:"hidden"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="91.992" height="128.526" viewBox="0 0 91.992 128.526">
                  <g id="Group_884" data-name="Group 884" transform="translate(-629.5 -790.05)">
                    <path id="Path_4436" data-name="Path 4436" d="M-4300.356,1041.215c.336-.225.067-.814-.283-.619-11.629,6.5-30.767,13.84-35.536,13.84-4.908,0-22.239-6.857-32.616-12.494-.3-.166-.535.345-.243.54l29.442,20.758a6.848,6.848,0,0,0,7.731,0Z" transform="translate(5011.938 -145.859)" fill="#f39c12"/>
                  </g>
                </svg>
              </div>
              <div className="white-border border1"></div>
              <div className="white-border border2"></div>
              <div className="white-border border4"></div>
            </div>
          </div>
          <div className="shadow">
            <div className="clipped" style={{background:`url(${Prod4})`,backgroundSize:"120%",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}}>
              <div className="overlay">#Iphone</div>
              <div className="svg" style={{width:"100%",height:"20px",overflow:"hidden"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="91.992" height="128.526" viewBox="0 0 91.992 128.526">
                  <g id="Group_884" data-name="Group 884" transform="translate(-629.5 -790.05)">
                    <path id="Path_4436" data-name="Path 4436" d="M-4300.356,1041.215c.336-.225.067-.814-.283-.619-11.629,6.5-30.767,13.84-35.536,13.84-4.908,0-22.239-6.857-32.616-12.494-.3-.166-.535.345-.243.54l29.442,20.758a6.848,6.848,0,0,0,7.731,0Z" transform="translate(5011.938 -145.859)" fill="#f39c12"/>
                  </g>
                </svg>
              </div>
              <div className="white-border border1"></div>
              <div className="white-border border2"></div>
              <div className="white-border border4"></div>
            </div>
          </div>
        </Trends>
        <Waypoint
          onEnter={removeSticky}
          onLeave={setSticky}
          onPositionChange={onWaypointPositionChange}
        />
      </Content>
    </Box>
  );
};
