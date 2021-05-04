import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Title,
} from './banner.style';
import {Boxs} from './categorybanner.style';
import itemImage from 'assets/images/dummy-img-5.png';
import {Hover} from './Hover';
import { Waypoint } from 'react-waypoint';
import { useAppDispatch } from 'contexts/app/app.provider';
import Search from 'features/search/search';
import { url } from 'node:inspector';
import { useState } from 'react';
import { Horizontal } from 'layouts/horizontal-category-menu/horizintal';
import { useRouter } from 'next/router';
import { useRefScroll } from 'utils/use-ref-scroll';
import { HorizontalCategoryCardMenu } from 'layouts/horizontal-category-menu/horizontal-category-card-menu';
import BoatImage from 'assets/images/02.jpg';
import Back from 'assets/images/images/BG3.png';

interface Props {
  style?: any;
  imageUrl: string;
  intlTitleId: string;
  intlDescriptionId: string;
}

export const Bannerss: React.FC<Props> = ({
  style,
  imageUrl,
  intlTitleId,
  intlDescriptionId,
}) => {
  const { query } = useRouter();
  const { elRef: targetRef, scroll } = useRefScroll({
    percentOfElement: 0,
    percentOfContainer: 0,
    offsetPX: -110,
  });
  React.useEffect(() => {
    if (query.text || query.category) {
      scroll();
    }
  }, [query.text, query.category]);
  const PAGE_TYPE: any = query.type;

  return (
    <Boxs style={{background:`url(${Back})`,backgroundRepeat:"no-repeat !important",backgroundPosition:"right center !important"}}>
        <Title className="category-title">Discover all Categories</Title>
        <Horizontal  className="categoryhor"  sliderType="hover" id="hover" items={5} type="grocery" ></Horizontal>
        <img className="bannerimage" style={{marginTop:"40px"}}  src={BoatImage} alt=""/>
    </Boxs>
  );
};
