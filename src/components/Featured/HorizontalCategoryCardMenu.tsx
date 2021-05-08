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
  CategoryInner,
  ItemCard,
  ImageWrapper,
  Title,
  SliderNav,
  Img
} from './HorizontalCategoryCardMenu.style';
import useCategory from 'data/use-category';
import dynamic from 'next/dynamic';
import Image1 from 'assets/images/newimages/f1.png';
import Image2 from 'assets/images/newimages/f2.png';
import Image3 from 'assets/images/newimages/f3.png';
import Image4 from 'assets/images/newimages/f4.png';
import Image5 from 'assets/images/newimages/f5.png';






SwiperCore.use([Navigation]);

interface Props {
  type: string;
}

export const HorizontalCategoryCardMenu = ({ type }: Props) => {

  const breakpoints = {
    320: {
      slidesPerView: 1,
    },

    440: {
      slidesPerView: 1,
    },

    620: {
      slidesPerView: 2,
    },

    820: {
      slidesPerView: 2,
    },

    1100: {
      slidesPerView: 3,
    },

    1280: {
      slidesPerView: 4,
    },
    1366: {
      slidesPerView: 5,
    },
    1900: {
      slidesPerView: 6,
    },
  };
  const GeneralCard = dynamic(
    import('components/product-card/product-card-one/product-card-one')
  );
  return (
    <CategoryWrapper>
      <CategoryInner>
        <Swiper
          id="category-card-menu"
          navigation={{
            nextEl: '.banner-slider-next',
            prevEl: '.banner-slider-prev',
          }}
          breakpoints={breakpoints}
          slidesPerView={5}
          spaceBetween={15}
        >
              <SwiperSlide>
                <Img style={{backgroundImage:`url(${Image1})`}}></Img>
              </SwiperSlide>
              <SwiperSlide>
              <Img style={{backgroundImage:`url(${Image2})`}}></Img>
              </SwiperSlide>
              <SwiperSlide>
              <Img style={{backgroundImage:`url(${Image3})`}}></Img>
              </SwiperSlide>
              <SwiperSlide>
              <Img style={{backgroundImage:`url(${Image4})`}}></Img>
              </SwiperSlide>
              <SwiperSlide>
              <Img style={{backgroundImage:`url(${Image5})`}}></Img>
              </SwiperSlide>
              <SwiperSlide>
              <Img style={{backgroundImage:`url(${Image3})`}}></Img>
              </SwiperSlide>
            
        </Swiper>
        <SliderNav className="banner-slider-next">
          <ArrowNext />
        </SliderNav>
        <SliderNav className="banner-slider-prev">
          <ArrowPrev />
        </SliderNav>
      </CategoryInner>
    </CategoryWrapper>
  );
};
