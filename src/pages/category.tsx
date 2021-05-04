import styled from 'styled-components';
import css from '@styled-system/css';
import { Banner } from 'components/banner/banner';
import { Bannerss } from 'components/banner/Bannerss';

import { ProductGrid } from 'components/product-grid/product-grid-two';
import { Modal } from '@redq/reuse-modal';
import { HorizontalCategoryCardMenu } from 'layouts/horizontal-category-menu/horizontal-category-card-menu';
import { MobileBanner } from 'components/banner/mobile-banner';
import { Box } from 'components/box';
import { useCallback, useState } from 'react';
import { useAppDispatch } from 'contexts/app/app.provider';
import {Header} from 'components/banner/categorybanner.style';
import {CategoryBanner} from 'components/banner/categoryBanner';
import { useRouter } from 'next/router';
import React from 'react';
import dynamic from 'next/dynamic';
import { Brands, Buttons, ContentSections, Lis, MainContentArea, MobileCarouselDropdown, OfferSection, SidebarSection, Tabs } from 'assets/styles/pages.style';
import { useRefScroll } from 'utils/use-ref-scroll';
import { sitePages } from 'site-settings/site-pages';
import Carousel from 'react-multi-carousel';
import { ModalProvider } from 'contexts/modal/modal.provider';
import { siteOffers } from 'site-settings/site-offers';
import { Titles } from 'layouts/horizontal-category-menu/horizontal-category-card-menu.style';
import { Waypoint } from 'react-waypoint';
const Sidebar = dynamic(() => import('layouts/sidebar/sidebar'));
const CartPopUp = dynamic(() => import('features/carts/cart-popup'), {
  ssr: false,
});
const Products = dynamic(() =>
  import('components/product-grid/product-list/product-list')
);
export const Main = styled.div<any>(
  css({
    backgroundColor: 'gray.200',
    position: 'relative',
  })
);

export default function Category({ deviceType }) {
    const { query } = useRouter();
    const { elRef: targetRef, scroll } = useRefScroll({
      percentOfElement: 0,
      percentOfContainer: 0,
      offsetPX: -110,
    });
    const [active, setActive] = useState(1);
  
    React.useEffect(() => {
      if (query.text || query.category) {
        scroll();
      }
    }, [query.text, query.category]);
    const PAGE_TYPE: any = query.type;
    const page = sitePages['grocery'];
    const toggleHover = (el) =>{
      console.log(page);
      el.currentTarget.children[0].style.width="100px";
      el.currentTarget.children[0].style.height="100px"
      el.currentTarget.children[0].style.transition=".3s all ease"
      el.currentTarget.children[0].style.boxShadow="0px 0px 15px -3px #000"
  
      if(el.currentTarget.nextElementSibling){
        el.currentTarget.nextElementSibling.children[0].style.width="90px"
        el.currentTarget.nextElementSibling.children[0].style.height="90px"
        el.currentTarget.nextElementSibling.children[0].style.transition=".3s all ease"
        
      }
      
      if(el.currentTarget.previousElementSibling){
        el.currentTarget.previousElementSibling.children[0].style.width="90px"
        el.currentTarget.previousElementSibling.children[0].style.height="90px"
        el.currentTarget.previousElementSibling.children[0].style.transition=".3s all ease"
        
      }
  
    }
    const outhover = (el) =>{
      el.currentTarget.children[0].style.width="70px";
      el.currentTarget.children[0].style.height="70px"
      el.currentTarget.children[0].style.boxShadow="0px 0px 9px -3px #000"
      el.currentTarget.children[0].style.transition=".3s all ease"
      if(el.currentTarget.nextElementSibling){
        el.currentTarget.nextElementSibling.children[0].style.width="70px"
        el.currentTarget.nextElementSibling.children[0].style.height="70px"
        el.currentTarget.nextElementSibling.children[0].style.transition=".3s all ease"
      }
    
  
      if(el.currentTarget.previousElementSibling){
        el.currentTarget.previousElementSibling.children[0].style.width="70px"
        el.currentTarget.previousElementSibling.children[0].style.height="70px"
        el.currentTarget.previousElementSibling.children[0].style.transition=".3s all ease"
      }
    }
    const dispatch = useAppDispatch();

    const setSticky = useCallback(() => dispatch({ type: 'SET_STICKY_NEW' }), [
        dispatch,
    ]);
    const removeSticky = useCallback(() => dispatch({ type: 'REMOVE_STICKY_NEW' }), [
        dispatch,
    ]);
    if (!page) return null;
  
      return (
        <>
         <ModalProvider>
        <Modal>
          <MobileBanner intlTitleId={page?.banner_title_id} type={PAGE_TYPE} />
          <MobileCarouselDropdown>
            <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
          </MobileCarouselDropdown>
          <MainContentArea>
            <SidebarSection>
              <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
            </SidebarSection>
            <ContentSections>
                <HorizontalCategoryCardMenu  sliderType="slider" id="firstslider" items={1} page="categories"  type="grocery" ></HorizontalCategoryCardMenu>

              {/* <HorizontalCategoryCardMenu sliderType="products" id="newone" items={5} page="categories"  type="grocery" ></HorizontalCategoryCardMenu> */}
                <div ref={targetRef}>
              <Titles>
                  <h3>Most Viewed</h3>
                  <div className="section">
                    <h5 className="active">Category</h5>
                    <h5>Category</h5>
                  </div>
              </Titles>
              <Waypoint onEnter={setSticky} onLeave={removeSticky}
              ></Waypoint>
                <Products
                  type={PAGE_TYPE}
                  deviceType={deviceType}
                  fetchLimit={20}
                />
              </div>
            </ContentSections>
          </MainContentArea>
        </Modal>
      </ModalProvider>
        </>
      );
}


