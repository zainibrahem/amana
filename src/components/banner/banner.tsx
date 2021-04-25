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
import ItemImage from 'assets/images/dummy-img-5.png';

import { Waypoint } from 'react-waypoint';
import { useAppDispatch } from 'contexts/app/app.provider';
import Search from 'features/search/search';

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
      <Image backgroundImage={`url(${imageUrl})`}  style={{backgroundPosition:"top"}} />
      <Content>
        <Title>
          <FormattedMessage
            id={intlTitleId}
            defaultMessage="Set Your Title Through Language File"
            values={{ minute: 90 }}
          />
        </Title>
        <Description>
          <FormattedMessage
            id={intlDescriptionId}
            defaultMessage="Set Your Description Through Language File"
          />
        </Description>
        <SearchWrapper>
          <Search
            className="banner-search"
            shadow="0 21px 36px rgba(0,0,0,0.05)"
          />
        </SearchWrapper>
        <HashTags>
          <Hash>
            #
          </Hash>
        <FormattedMessage
            id="hash"
            defaultMessage="Get_yout_healthy_foods"
          />
        </HashTags>
        <ProfileWrapper>
          <RoundWrapper>
            <RoundProfile style={{background:`url(${ItemImage})`,backgroundSize:"cover"}}></RoundProfile>
            <Hashs>
            <FormattedMessage
            id="hashing"
            defaultMessage="# iPhone"
            /></Hashs>
          </RoundWrapper>
          <RoundWrapper>
            <RoundProfile style={{background:`url(${ItemImage})`,backgroundSize:"cover"}}></RoundProfile>
            <Hashs>
            <FormattedMessage
            id="hashing"
            defaultMessage="# iPhone"
            /></Hashs>
          </RoundWrapper>
          <RoundWrapper>
            <RoundProfile style={{background:`url(${ItemImage})`,backgroundSize:"cover"}}></RoundProfile>
            <Hashs>
            <FormattedMessage
            id="hashing"
            defaultMessage="# iPhone"
            /></Hashs>
          </RoundWrapper>
          <RoundWrapper>
            <RoundProfile style={{background:`url(${ItemImage})`,backgroundSize:"cover"}}></RoundProfile>
            <Hashs>
            <FormattedMessage
            id="hashing"
            defaultMessage="# iPhone"
            /></Hashs>
          </RoundWrapper>
          <RoundWrapper>
            <RoundProfile style={{background:`url(${ItemImage})`,backgroundSize:"cover"}}></RoundProfile>
            <Hashs>
            <FormattedMessage
            id="hashing"
            defaultMessage="# iPhone"
            /></Hashs>
          </RoundWrapper>
          <RoundWrapper>
            <RoundProfile style={{background:`url(${ItemImage})`,backgroundSize:"cover"}}></RoundProfile>
            <Hashs>
            <FormattedMessage
            id="hashing"
            defaultMessage="# iPhone"
            /></Hashs>
          </RoundWrapper>
          <RoundWrapper>
            <RoundProfile style={{background:`url(${ItemImage})`,backgroundSize:"cover"}}></RoundProfile>
            <Hashs>
            <FormattedMessage
            id="hashing"
            defaultMessage="# iPhone"
            /></Hashs>
          </RoundWrapper>
          <RoundWrapper>
            <RoundProfile style={{background:`url(${ItemImage})`,backgroundSize:"cover"}}></RoundProfile>
            <Hashs>
            <FormattedMessage
            id="hashing"
            defaultMessage="# iPhone"
            /></Hashs>
          </RoundWrapper>
          <RoundWrapper>
            <RoundProfile style={{background:`url(${ItemImage})`,backgroundSize:"cover"}}></RoundProfile>
            <Hashs>
            <FormattedMessage
            id="hashing"
            defaultMessage="# iPhone"
            /></Hashs>
          </RoundWrapper>
        </ProfileWrapper>
        <Waypoint
          onEnter={removeSticky}
          onLeave={setSticky}
          onPositionChange={onWaypointPositionChange}
        />
      </Content>
    </Box>
  );
};
