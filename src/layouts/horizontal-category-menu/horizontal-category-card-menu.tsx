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
  Titles
} from './horizontal-category-card-menu.style';
import useCategory from 'data/use-category';
import dynamic from 'next/dynamic';
import BnaaerImage from 'assets/images/02.jpg';
import { Container } from 'components/upload/upload.style';


SwiperCore.use([Navigation]);

interface Props {
  type: string;
  items:number,
  sliderType:string,
  id:string
}

export const HorizontalCategoryCardMenu = ({ type,items,sliderType,id }: Props) => {
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
  const breakpoints = sliderType=='products'? {
    320: {
      slidesPerView: 2,
    },

    440: {
      slidesPerView: 3,
    },

    620: {
      slidesPerView: 3,
    },

    820: {
      slidesPerView: 5,
    },

    1100: {
      slidesPerView: 5,
    },

    1280: {
      slidesPerView: 5,
    },
    1480: {
      slidesPerView: 6,
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
    id?(<CategoryWrapper>
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
          id={id}
          navigation={{
            nextEl: `.${id}-next`,
            prevEl: `.${id}-prev`
          }}
          
          className={id}
          draggable={sliderType=="slider"?false :  true}
          freeMode={sliderType=="slider"?false :  true}
          allowSlideNext={sliderType=="slider"?false :  true}
          allowSlidePrev={sliderType=="slider"?false :  true}
          breakpoints={breakpoints}
          slidesPerView={6}
          spaceBetween={13}
        >
          {data.map((category, idx) => (
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
                    <img className="imageheight" onClick={ ()=>{onCategoryClick}} style={{width:"100%"}} src={BnaaerImage} alt=""/>
                   
                }
                 
                </SwiperSlide>
          ))}
        </Swiper>
   
            <SliderNav className={`${sliderType=="slider"?""+`${id}-next`+" none banner-slider-next":""+`${id}-next`+" banner-slider-next"}`}>
                <ArrowNext />
            </SliderNav>
            <SliderNav className={`${sliderType=="slider"?""+`${id}-prev`+" none banner-slider-prev":""+`${id}-prev`+" banner-slider-prev"}`}>
              <ArrowPrev />
            </SliderNav>
        
       
      </CategoryInner>
    </CategoryWrapper>):(<Container></Container>)
    
  );
};
