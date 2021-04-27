import React from 'react';
import { GET_CATEGORIES } from 'graphql/query/category.query';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import ErrorMessage from 'components/error-message/error-message';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Text } from 'components/text';
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
  Titles
} from './horizontal-category-card-menu.style';
import dynamic from 'next/dynamic';

SwiperCore.use([Navigation]);

interface Props {
  type: string;
  items:number,
  sliderType:string
}

export const HorizontalCategoryCardMenu = ({ type,items,sliderType }: Props) => {
  const router = useRouter();
  const { data, loading, error } = useQuery(GET_CATEGORIES, {
    variables: { type },
  });
  if (error) return <ErrorMessage message={error.message} />;
  if (loading) return <p>Loading...</p>;
  if (!data) return null;
  const { pathname, query } = router;
  const selectedQueries = query.category;

  const onCategoryClick = (slug: string) => {
    router.push({
      pathname,
      query: { ...query, category: slug },
    });
  };
   
  const breakpoints = sliderType=='products'? {
    320: {
      slidesPerView: 2,
    },

    440: {
      slidesPerView: 3,
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
  }:{
    320: {
      slidesPerView: 1,
    },

    440: {
      slidesPerView: 1,
    },

    620: {
      slidesPerView: 1,
    },

    820: {
      slidesPerView: 1,
    },

    1100: {
      slidesPerView: 1,
    },

    1280: {
      slidesPerView: 1,
    },
  };
  const GeneralCard = dynamic(
    import('components/product-card/product-card-one/product-card-one')
  );
  return (
    <CategoryWrapper>
      {sliderType == 'products'? 
      (<Titles>
          <h3>Most Viewed</h3>
          <div className="section">
            <h5 className="active">Category</h5>
            <h5>Category</h5>
          </div>
      </Titles>)
        : ''}
      <CategoryInner>
        <Swiper
          id='category-card-menu'
          navigation={{
            nextEl: '.banner-slider-next',
            prevEl: '.banner-slider-prev',
          }}
          breakpoints={breakpoints}
          slidesPerView={items}
          spaceBetween={10}
        >
          
          {data.categories.map((category, idx) => (
            <SwiperSlide key={idx}>
              {sliderType == 'products'?
              (
                <GeneralCard
                title="Product Title"
                description="description"
                image="https://www.pcspecialist.nl/images/landing/nvidia/rtx-laptops/30-laptops-feat1-sm.jpg"
                weight="unit"
                currency="$"
                price={1500}
                salePrice={2000}
                discountInPercent={10}
                data="20-2-2021"
                deviceType="desktop"
              />
                ):
                <img height="275" style={{width:"100%"}} src="https://www.pcspecialist.nl/images/landing/nvidia/rtx-laptops/30-laptops-feat1-sm.jpg" alt=""/>
               
            }
             
            </SwiperSlide>
          ))}
        </Swiper>
        <SliderNav className='banner-slider-next'>
          <ArrowNext />
        </SliderNav>
        <SliderNav className='banner-slider-prev'>
          <ArrowPrev />
        </SliderNav>
      </CategoryInner>
    </CategoryWrapper>
  );
};
