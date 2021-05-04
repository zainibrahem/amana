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
import { Titles,Sort } from 'layouts/horizontal-category-menu/horizontal-category-card-menu.style';
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


export default function Categories({ deviceType }) {
  
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
            <Bannerss
                intlTitleId={page?.banner_title_id}
                intlDescriptionId={page?.banner_description_id}
                imageUrl={page?.banner_image_url}
              />
              <HorizontalCategoryCardMenu sliderType="products" id="newone" items={5} page="categories"  type="grocery" ></HorizontalCategoryCardMenu>
              <Brands>
              <h1>
                Our Brands
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio temporibus id quia unde quibusdam rerum, illo saepe porro aperiam quisquam aperiam quisquam</p>
              <Tabs>
                <ul>
                  <Buttons onClick={()=>{setActive(1)}}>
                    <li  className={active == 1?"actives":""}>Categry 1</li>
                  </Buttons>
                  <Buttons onClick={()=>{setActive(2)}}>
                    <li  className={active == 2?"actives":""}>Categry 2</li>
                  </Buttons>
                  <Buttons onClick={()=>{setActive(3)}}>
                    <li  className={active == 3?"actives":""}>Categry 3</li>
                  </Buttons>
                  <Buttons onClick={()=>{setActive(4)}}>
                    <li  className={active == 4?"actives":""}>Categry 4</li>
                  </Buttons>
                  <Buttons onClick={()=>{setActive(5)}}>
                    <li  className={active == 5?"actives":""}>Categry 5</li>
                  </Buttons>
                  <Buttons onClick={()=>{setActive(6)}}>
                    <li  className={active == 6?"actives":""}>Categry 6</li>
                  </Buttons>
                  {/* <Lis onMouseEnter={()=>{isShown? setIsShown(false):setIsShown(true);alert('DONE')}} onMouseLeave={()=>{isShown? setIsShown(false):setIsShown(true);alert('NOT DONE')}}>
                    <img className="brand-image" src="https://www.fairsaintlouis.org/wp-content/uploads/2018/06/Major-Brands-spot-color-logo.png" alt=""/>
                  </Lis> */}
                </ul>
                
                <ul className={active == 1? "active-ul ul-brands":"ul-brands"}>
                  <Lis onMouseEnter={toggleHover} onMouseLeave={outhover}>
                    <img className="brand-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9UTUYT6nKH-op6a-4ajq6s--dV9F0X-AoAw&usqp=CAU" alt=""/>
                  </Lis>
                  <li onMouseEnter={toggleHover} onMouseLeave={outhover} className="no-border">
                    <img className="brand-image" src="https://miro.medium.com/max/3200/0*tDmpSG1CPJt3qy9S.png" alt=""/>
                  </li>
                  <li onMouseEnter={toggleHover} onMouseLeave={outhover} className="no-border">
                    <img className="brand-image" src="https://www.ideal.nl/img/logo/ideal-logo-1024.png" alt=""/>
                  </li>
                  <li onMouseEnter={toggleHover} onMouseLeave={outhover} className="no-border">
                    <img className="brand-image" src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/Adidas.png" alt=""/>
                  </li>
                  <li onMouseEnter={toggleHover} onMouseLeave={outhover} className="no-border">
                    <img className="brand-image" src="http://inkbotdesign.com/wp-content/uploads/2015/07/Levis-Logo-Design.png" alt=""/>
                  </li>
                  <li onMouseEnter={toggleHover} onMouseLeave={outhover} className="no-border">
                    <img className="brand-image" src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Mega_Brands_logo.png" alt=""/>
                  </li>
                  <li onMouseEnter={toggleHover} onMouseLeave={outhover} className="no-border">
                    <img className="brand-image" src="https://download.logo.wine/logo/Premium_Brands_Holdings_Corporation/Premium_Brands_Holdings_Corporation-Logo.wine.png" alt=""/>
                  </li>
                  <li onMouseEnter={toggleHover} onMouseLeave={outhover} className="no-border">
                    <img className="brand-image" src="https://logodix.com/logo/1270954.png" alt=""/>
                  </li>
                  <li onMouseEnter={toggleHover} onMouseLeave={outhover} className="no-border">
                    <img className="brand-image" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/3b4cb998417459.5edbafd1aeb69.png" alt=""/>
                  </li>
                </ul>
                <ul className={active == 2? "active-ul ul-brands":"ul-brands"} style={{marginTop:"40px"}}>
                  <li onMouseEnter={toggleHover} onMouseLeave={outhover} className="no-border">
                    <img className="brand-image" src="https://www.thebrandingjournal.com/wp-content/uploads/2019/05/chanel_logo_the_branding_journal.jpg" alt=""/>
                  </li>
                  <li onMouseEnter={toggleHover} onMouseLeave={outhover} className="no-border">
                    <img className="brand-image" src="https://www.foodengineeringmag.com/ext/resources/FE-Latest-Headlines/FE-latest-headlines-2/cocacola.jpg?1372262510" alt=""/>
                  </li>
                  <li onMouseEnter={toggleHover} onMouseLeave={outhover} className="no-border">
                    <img className="brand-image" src="https://inspirebrands.com/wp-content/uploads/2017/10/inspire-brands-featured-logo.jpg" alt=""/>
                  </li>
                  <li onMouseEnter={toggleHover} onMouseLeave={outhover} className="no-border">
                    <img className="brand-image" src="https://www.thelogocreative.co.uk/wp-content/uploads/rolex-min.jpg" alt=""/>
                  </li>
                  <li onMouseEnter={toggleHover} onMouseLeave={outhover} className="no-border">
                    <img className="brand-image" src="https://vectorlogoseek.com/wp-content/uploads/2018/11/spectrum-brands-vector-logo.png" alt=""/>
                  </li>
                  <li onMouseEnter={toggleHover} onMouseLeave={outhover} className="no-border">
                    <img className="brand-image" src="https://logos-download.com/wp-content/uploads/2016/09/Brands_logo.png" alt=""/>
                  </li>
                  <li onMouseEnter={toggleHover} onMouseLeave={outhover} className="no-border">
                    <img className="brand-image" src="http://www.marqueebrands.com/Marquee__social.jpg" alt=""/>
                  </li>
                  <li onMouseEnter={toggleHover} onMouseLeave={outhover} className="no-border">
                    <img className="brand-image" src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/Adidas.png" alt=""/>
                  </li>
                  <li onMouseEnter={toggleHover} onMouseLeave={outhover} className="no-border">
                    <img className="brand-image" src="https://seeklogo.com/images/C/constellation-brands-logo-9BA912DAFA-seeklogo.com.png" alt=""/>
                  </li>
                </ul>
              
              </Tabs>
            </Brands>
              <div ref={targetRef}>
              <Sort>
                <div className="ledtSide" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <h6 style={{fontWeight:"normal"}}>Sort</h6>
                  <span style={{fontWeight:"normal",border:"1px solid rgb(206,203,203)",padding:"1px 13px"}}>Recommended</span>
                  <span style={{fontWeight:"normal",padding:"1px 13px"}}>Display</span>

                </div>
                  <div className="section">
                    <h5 style={{fontWeight:"normal"}}>243434 Search Results for "Deals"</h5>
                  </div>
              </Sort>
              <Titles>
                  <h3>Most Viewed</h3>
                  <div className="section">
                    <h5 className="active">Category</h5>
                    <h5>Category</h5>
                  </div>
              </Titles>
              
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