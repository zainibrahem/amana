import React from 'react';
import { useRouter } from 'next/router';
import ErrorMessage from 'components/error-message/error-message';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'components/image/image';
import { ArrowNext } from 'assets/icons/ArrowNext';
import { ArrowPrev } from 'assets/icons/ArrowPrev';
import {
  CategoryWrapper,
  ItemCard,
  ImageWrapper,
  Title,
  SliderNav,
  Titles
} from './horizontal-category-card-menu.style';
import {Round,CategoryInner,RoundBack} from 'layouts/horizontal-category-menu/sidebarhorizintal.style'; 
import useCategory from 'data/use-category';
import dynamic from 'next/dynamic';
import BnaaerImage from 'assets/images/02.jpg';
import Brand1 from 'assets/images/dummy-img-3.png';
import Brand2 from 'assets/images/dummy-img-4.png';
import Brand3 from 'assets/images/dummy-img-5.png';
import Brand4 from 'assets/images/dummy-img-full.png';
import Brand5 from 'assets/images/med-1.jpg';
import Brand6 from 'assets/images/user.jpg';

import { Container } from 'components/upload/upload.style';


SwiperCore.use([Navigation]);

interface Props {
  type?: string;
  items?:number,
  sliderType?:string,
  id?:string,
  
  page?:string
}

export const Horizintal = ({ type,items,sliderType,id,page }: Props) => {
  const router = useRouter();
  const { data, error } = useCategory({ type });

  if (error) return <ErrorMessage message={error.message} />;
  if (!data) return null;
  const { pathname, query } = router;
  const selectedQueries = query.category;

  const onCategoryClick = (slug: string) => {
    // router.push({
    //   pathname,
    //   query: { ...query, category: slug },
    // });
    // alert(`.${id}-next`,)
  };
  const breakpoints = {
    320: {
      slidesPerView: 4,
    },

    440: {
      slidesPerView: 4,
    },

    620: {
      slidesPerView: 4,
    },

    820: {
      slidesPerView: 4,
    },

    1100: {
      slidesPerView: 4,
    },

    1280: {
      slidesPerView: 4,
    },
    1480: {
      slidesPerView: 4,
    },
  };
  const GeneralCard = dynamic(
    import('components/product-card/product-card-one/product-card-one')
  );

  return (
  
      <CategoryWrapper style={{marginTop:"15px"}}>
      <CategoryInner>
      <Swiper
        id="sidebarswipper"
        className="sidebarswipper"
        draggable={true}
        freeMode={true}
        allowSlideNext={true}
        allowSlidePrev={true}
        breakpoints={breakpoints}
        slidesPerView={4}
        spaceBetween={0}
      >
        <SwiperSlide className="swiper">
            <Round>
                <RoundBack style={{background:`url(${Brand1})`}}></RoundBack>
            </Round>
        </SwiperSlide>
        <SwiperSlide className="swiper">
            <Round>
                <RoundBack style={{background:`url(${Brand2})`}}></RoundBack>
            </Round>
        </SwiperSlide>
        <SwiperSlide className="swiper">
            <Round>
                <RoundBack style={{background:`url(${Brand3})`}}></RoundBack>
            </Round>
        </SwiperSlide>
        <SwiperSlide className="swiper">
            <Round>
                <RoundBack style={{background:`url(${Brand4})`}}></RoundBack>
            </Round>
        </SwiperSlide>
      </Swiper>
    </CategoryInner>
    </CategoryWrapper>
  );
};
