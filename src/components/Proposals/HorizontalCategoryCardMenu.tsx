
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
import Image1 from 'assets/images/newimages/aa.jpg';
import Image2 from 'assets/images/newimages/dd.jpg';
import Image3 from 'assets/images/newimages/ss.jpg';
import Image4 from 'assets/images/newimages/vv.jpg';
import Image5 from 'assets/images/newimages/xx.png';






SwiperCore.use([Navigation]);

interface Props {
  type: string;
  margin?: string;
}

export const HorizontalCategoryCardMenu = ({ type , margin}: Props) => {

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
    <CategoryWrapper style={{marginTop:margin}}>
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
                      ads={true}
                      title="Product Title"
                      description="description"
                      image="https://z.nooncdn.com/products/tr:n-t_240/v1611138575/N41910684A_1.jpg"
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
                      title="Product Title"
                      description="description"
                      image="https://z.nooncdn.com/products/tr:n-t_240/v1611747840/N43923454A_1.jpg"
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
                      title="Product Title"
                      description="description"
                      image="https://z.nooncdn.com/products/tr:n-t_240/v1612944610/N44278658A_1.jpg"
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
                      title="Product Title"
                      description="description"
                      image="https://z.nooncdn.com/products/tr:n-t_240/v1612159035/N44080243A_1.jpg"
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
                    ads={true}
                      title="Product Title"
                      description="description"
                      image="https://z.nooncdn.com/products/tr:n-t_240/v1615642614/N13337242A_1.jpg"
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
                      title="Product Title"
                      description="description"
                      image="https://z.nooncdn.com/products/tr:n-t_240/v1618918783/N16393522A_1.jpg"
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
