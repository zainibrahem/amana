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
} from './horizontal-category-card.style';
import useCategory from 'data/use-category';
import dynamic from 'next/dynamic';
import BnaaerImage from 'assets/images/02.jpg';
import { Container } from 'components/upload/upload.style';
import {Hover} from 'components/banner/Hover';
import itemImage1 from 'assets/images/images/fasion.jpg';
import itemImage2 from 'assets/images/images/335screen.jpg';
import itemImage3 from 'assets/images/images/22.jpg';
import itemImage4 from 'assets/images/images/pepsi.png';
import itemImage5 from 'assets/images/images/iPhone-6-6-Plus-hero-2000px-1000x1200@2x.jpg';

SwiperCore.use([Navigation]);

interface Props {
  type: string;
  items:number,
  sliderType:string,
  id:string
  className?:string
}

export const Horizontal = ({ type,items,sliderType,id,className }: Props) => {
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
  const breakpoints =  {
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
      slidesPerView: 5,
    },
  };
  const GeneralCard = dynamic(
    import('components/product-card/product-card-one/product-card-one')
  );

  return (
    id?(<CategoryWrapper className={className} style={{width:"700px",marginTop:"50px"}}>
      <CategoryInner className="pages">
        <Swiper
          id={id}
          navigation={{
            nextEl: `.${id}-next`,
            prevEl: `.${id}-prev`
          }}
          className="hoverss"
          draggable={sliderType=="slider"?false :  true}
          freeMode={sliderType=="slider"?false :  true}
          allowSlideNext={sliderType=="slider"?false :  true}
          allowSlidePrev={sliderType=="slider"?false :  true}
          breakpoints={breakpoints}
          slidesPerView={5}
          spaceBetween={5}
        >
        
            <SwiperSlide style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
              <Hover className="parents" itemImage={itemImage1} intlTitleId="ddd"></Hover>
            </SwiperSlide>
            <SwiperSlide style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
              <Hover className="parents"  itemImage={itemImage2} intlTitleId="ddd"></Hover>
            </SwiperSlide>
            <SwiperSlide style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
              <Hover className="parents"  itemImage={itemImage3} intlTitleId="ddd"></Hover>
            </SwiperSlide>
            <SwiperSlide style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
              <Hover className="parents"  itemImage={itemImage4} intlTitleId="ddd"></Hover>
            </SwiperSlide>
            <SwiperSlide style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
              <Hover className="parents"  itemImage={itemImage5} intlTitleId="ddd"></Hover>
            </SwiperSlide>
         
     
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
