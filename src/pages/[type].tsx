import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Modal } from '@redq/reuse-modal';
import Carousel from 'components/carousel/carousel';
import { Banner } from 'components/banner/banner';
import { MobileBanner } from 'components/banner/mobile-banner';
import {
  MainContentArea,
  SidebarSection,
  ContentSection,
  OfferSection,
  Brands,
  Tabs,
  Buttons,
  Lis,
  MobileCarouselDropdown,
} from 'assets/styles/pages.style';
// Static Data Import Here
import { siteOffers } from 'site-settings/site-offers';
import { sitePages } from 'site-settings/site-pages';
import { SEO } from 'components/seo';
import { useRefScroll } from 'utils/use-ref-scroll';
import { ModalProvider } from 'contexts/modal/modal.provider';
import { HorizontalCategoryCardMenu } from 'layouts/horizontal-category-menu/horizontal-category-card-menu';
import {Banners}  from 'layouts/horizontal-category-menu/banners';
import { useState } from 'react';

const Sidebar = dynamic(() => import('layouts/sidebar/sidebar'));
const Products = dynamic(() =>
  import('components/product-grid/product-list/product-list')
);
const CartPopUp = dynamic(() => import('features/carts/cart-popup'), {
  ssr: false,
});

const CategoryPage: React.FC<any> = ({ deviceType }) => {
  const { query } = useRouter();
  const { elRef: targetRef, scroll } = useRefScroll({
    percentOfElement: 0,
    percentOfContainer: 0,
    offsetPX: -110,
  });
  React.useEffect(() => {
    if (query.text || query.category) {
      scroll();
    }
  }, [query.text, query.category]);
  const PAGE_TYPE: any = query.type;
  const page = sitePages[PAGE_TYPE];
  const [active, setActive] = useState(1);
  const [isShown, setIsShown] = useState(false);
  const toggleHover = (el) =>{
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
    <SEO title={page?.page_title} description={page?.page_description} />
    <ModalProvider>
      <Modal>
        <MobileBanner intlTitleId={page?.banner_title_id} type={PAGE_TYPE} />
        <Banner
          intlTitleId={page?.banner_title_id}
          intlDescriptionId={page?.banner_description_id}
          imageUrl={page?.banner_image_url}
        />
        <OfferSection>
          <div style={{ margin: '0 -10px' }}>
            <Carousel deviceType={deviceType} data={siteOffers} />
          </div>
        </OfferSection>
        <MobileCarouselDropdown>
          <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
        </MobileCarouselDropdown>
        <MainContentArea>
          {/* <SidebarSection>
            <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
          </SidebarSection> */}
          <ContentSection>
            <div ref={targetRef}>
            <HorizontalCategoryCardMenu id="most-viewd" sliderType="products" items={5} type={PAGE_TYPE} />
            <HorizontalCategoryCardMenu id="most-rated" sliderType="products" items={5} type={PAGE_TYPE} />
            <HorizontalCategoryCardMenu id="vendors" sliderType="products" items={5} type={PAGE_TYPE} />

              {/* <Products
                type={PAGE_TYPE}
                deviceType={deviceType}
                fetchLimit={20}
              /> */}

            <HorizontalCategoryCardMenu id="banner" sliderType="slider" items={1} type={PAGE_TYPE} />
            
            


            <HorizontalCategoryCardMenu id="products" sliderType="products" items={5} type={PAGE_TYPE} />
            <HorizontalCategoryCardMenu id="most-sale" sliderType="products" items={5} type={PAGE_TYPE} />


              
            <Banners  title="Best promoters on Amana" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quod officiis quae suscipit, officia assumenda, unde eius a repellat neque ut. Sint possimus voluptas laboriosam necessitatibus eaque nisi cupiditate ipsam." />

            <HorizontalCategoryCardMenu id="best-sale" sliderType="products" items={5} type={PAGE_TYPE} />
            <HorizontalCategoryCardMenu id="more-info" sliderType="products" items={5} type={PAGE_TYPE} />
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
            </div>
          </ContentSection>
        </MainContentArea>
        {/* <CartPopUp deviceType={deviceType} /> */}


      </Modal>
    </ModalProvider>
  </>
  );
};

export default CategoryPage;
