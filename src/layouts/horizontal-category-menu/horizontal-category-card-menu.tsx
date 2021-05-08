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
} from './horizontal-category-card-menu.style';
import useCategory from 'data/use-category';
import dynamic from 'next/dynamic';

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
                <GeneralCard
                      title="بلايستيشن 5 "
                      description="مع شاشة حماية 5G ومزود بتطبيق فيس تايم، لون ذهبي  "
                      image="https://z.nooncdn.com/products/tr:n-t_240/v1610036835/N42342017A_1.jpg"
                      weight="unit"
                      currency="$"
                      price={1500}
                      salePrice={2000}
                      discountInPercent={10}
                      data="20-2-2021"
                      deviceType="desktop"
                    />
              </SwiperSlide>
              <SwiperSlide>
                <GeneralCard
                       title="هاتف آيفون 12 برو"
                       description="مع شاشة حماية 5G ومزود بتطبيق فيس تايم، لون ذهبي  "
                      image="https://z.nooncdn.com/products/tr:n-t_240/v1605988778/N41247239A_1.jpg"
                      weight="unit"
                      currency="$"
                      price={1500}
                      salePrice={2000}
                      discountInPercent={10}
                      data="20-2-2021"
                      deviceType="desktop"
                    />
              </SwiperSlide>
              <SwiperSlide>
            
                <GeneralCard
                     title="سماعات ايفون "
                     description="مع شاشة حماية 5G ومزود بتطبيق فيس تايم، لون ذهبي  "
                      image="https://z.nooncdn.com/products/tr:n-t_240/v1612332491/N31748281A_1.jpg"
                      weight="unit"
                      currency="$"
                      price={1500}
                      salePrice={2000}
                      discountInPercent={10}
                      data="20-2-2021"
                      deviceType="desktop"
                    />
              </SwiperSlide>
              <SwiperSlide>
          
                <GeneralCard
                     title="هاتف آيفون 12 برو "
                     description="مع شاشة حماية 5G ومزود بتطبيق فيس تايم، لون ذهبي  "
                      image="https://z.nooncdn.com/products/tr:n-t_240/v1611316703/N41247235A_1.jpg"
                      weight="unit"
                      currency="$"
                      price={1500}
                      salePrice={2000}
                      discountInPercent={10}
                      data="20-2-2021"
                      deviceType="desktop"
                    />
              </SwiperSlide>
              <SwiperSlide>
           
                <GeneralCard
                       title="زيت العناية بالشعر "
                       description="مع شاشة حماية 5G ومزود بتطبيق فيس تايم، لون ذهبي  "
                      image="https://z.nooncdn.com/products/tr:n-t_240/v1611316566/N43853253A_1.jpg"
                      weight="unit"
                      currency="$"
                      price={1500}
                      salePrice={2000}
                      discountInPercent={10}
                      data="20-2-2021"
                      deviceType="desktop"
                    />
              </SwiperSlide>
              <SwiperSlide>
            
                <GeneralCard
                       title="مرطب للبشرة "
                       description="مع شاشة حماية 5G ومزود بتطبيق فيس تايم، لون ذهبي  "
                      image="https://z.nooncdn.com/products/tr:n-t_240/v1555044551/N23112455A_1.jpg"
                      weight="unit"
                      currency="$"
                      price={1500}
                      salePrice={2000}
                      discountInPercent={10}
                      data="20-2-2021"
                      deviceType="desktop"
                    />
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
