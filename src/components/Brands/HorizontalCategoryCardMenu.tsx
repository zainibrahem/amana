import React from 'react';
import { useRouter } from 'next/router';
import ErrorMessage from 'components/error-message/error-message';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image1 from 'assets/images/newimages/brands/s.png';
import { ArrowNext } from 'assets/icons/ArrowNext';
import { ArrowPrev } from 'assets/icons/ArrowPrev';
import {
  CategoryWrapper,
  CategoryInner,
  ItemCard,
  ImageWrapper,
  Title,
  SliderNav,
  Round
} from './HorizontalCategoryCardMenu.style';
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
      slidesPerView: 3,
    },

    820: {
      slidesPerView: 5,
    },

    1100: {
      slidesPerView: 7,
    },

    1280: {
      slidesPerView: 7,
    },
    1366: {
      slidesPerView: 9,
    },
    1900: {
      slidesPerView: 9,
    },
  };
  const toggleHover = (el) =>{
    console.log('asdasd')
    el.currentTarget.children[0].style.transform="translate(50%,-50%) scale(1.2)";
    // el.currentTarget.children[0].style.height="120px"
    el.currentTarget.children[0].style.transition=".3s all ease"
    el.currentTarget.children[0].style.boxShadow="0px 0px 15px -3px #000"

    if(el.currentTarget.nextElementSibling){
      el.currentTarget.nextElementSibling.children[0].style.transform="translate(50%,-50%) scale(1.1)";
      // el.currentTarget.nextElementSibling.children[0].style.height="110px";
      el.currentTarget.nextElementSibling.children[0].style.transition=".3s all ease";
      
    }
    
    if(el.currentTarget.previousElementSibling){
      el.currentTarget.previousElementSibling.children[0].style.transform="translate(50%,-50%) scale(1.1)";
      // el.currentTarget.previousElementSibling.children[0].style.height="110px"
      el.currentTarget.previousElementSibling.children[0].style.transition=".3s all ease"
      
    }


  }
  const outhover = (el) =>{
    el.currentTarget.children[0].style.transform="translate(50%,-50%) scale(1)";
    // el.currentTarget.children[0].style.height="90px"
    el.currentTarget.children[0].style.boxShadow="0px 0px 9px -3px #000"
    el.currentTarget.children[0].style.transition=".3s all ease"
    if(el.currentTarget.nextElementSibling){
      el.currentTarget.nextElementSibling.children[0].style.transform="translate(50%,-50%) scale(1)"
      // el.currentTarget.nextElementSibling.children[0].style.height="90px"
      el.currentTarget.nextElementSibling.children[0].style.transition=".3s all ease"
    }
  

    if(el.currentTarget.previousElementSibling){
      el.currentTarget.previousElementSibling.children[0].style.transform="translate(50%,-50%) scale(1)"
      // el.currentTarget.previousElementSibling.children[0].style.height="100px"
      el.currentTarget.previousElementSibling.children[0].style.transition=".3s all ease"
    }
  }
  const GeneralCard = dynamic(
    import('components/product-card/product-card-one/product-card-one')
  );
  return (
    <CategoryWrapper>
      <CategoryInner>
        <Swiper
          id="category-card-menu"
          style={{height:"170px"}}
          navigation={{
            nextEl: '.banner-slider-next',
            prevEl: '.banner-slider-prev',
          }}
          breakpoints={breakpoints}
          slidesPerView={9}
          spaceBetween={15}
        >
              <SwiperSlide onMouseEnter={toggleHover} onMouseLeave={outhover}>
                <Round   style={{background:`url(${Image1})`}}></Round>
              </SwiperSlide>
              <SwiperSlide onMouseEnter={toggleHover} onMouseLeave={outhover}>
                <Round   style={{background:`url(${Image1})`}}></Round>
              </SwiperSlide>
              <SwiperSlide onMouseEnter={toggleHover} onMouseLeave={outhover}>
                <Round   style={{background:`url(${Image1})`}}></Round>
              </SwiperSlide>
              <SwiperSlide onMouseEnter={toggleHover} onMouseLeave={outhover}>
                <Round   style={{background:`url(${Image1})`}}></Round>
              </SwiperSlide>
              <SwiperSlide onMouseEnter={toggleHover} onMouseLeave={outhover}>
                <Round   style={{background:`url(${Image1})`}}></Round>
              </SwiperSlide>
              <SwiperSlide onMouseEnter={toggleHover} onMouseLeave={outhover}>
                <Round   style={{background:`url(${Image1})`}}></Round>
              </SwiperSlide>
              <SwiperSlide onMouseEnter={toggleHover} onMouseLeave={outhover}>
                <Round   style={{background:`url(${Image1})`}}></Round>
              </SwiperSlide>
              <SwiperSlide onMouseEnter={toggleHover} onMouseLeave={outhover}>
                <Round   style={{background:`url(${Image1})`}}></Round>
              </SwiperSlide>
              <SwiperSlide onMouseEnter={toggleHover} onMouseLeave={outhover}>
                <Round   style={{background:`url(${Image1})`}}></Round>
              </SwiperSlide>
              <SwiperSlide onMouseEnter={toggleHover} onMouseLeave={outhover}>
                <Round   style={{background:`url(${Image1})`}}></Round>
              </SwiperSlide>
            
        </Swiper>
      </CategoryInner>
    </CategoryWrapper>
  );
};
