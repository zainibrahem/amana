import React from 'react';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Modal } from '@redq/reuse-modal';
import Carousel from 'components/carousel/carousel';
import { Banner } from 'components/banner/banner';
import { MobileBanner } from 'components/banner/mobile-banner';
import { HorizontalCategoryCardMenu } from 'layouts/horizontal-category-menu/horizontal-category-card-menu';
import {Banners}  from 'layouts/horizontal-category-menu/banners';

import {
  MainContentArea,
  SidebarSection,
  ContentSection,
  OfferSection,
  Brands,
  Tabs,
  Buttons,
  MobileCarouselDropdown,
} from 'assets/styles/pages.style';
// Static Data Import Here
import { siteOffers } from 'site-settings/site-offers';
import { sitePages } from 'site-settings/site-pages';
import { SEO } from 'components/seo';
import { useRefScroll } from 'utils/use-ref-scroll';
import { initializeApollo } from 'utils/apollo';
import { GET_PRODUCTS } from 'graphql/query/products.query';
import { GET_CATEGORIES } from 'graphql/query/category.query';
import { ModalProvider } from 'contexts/modal/modal.provider';
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
              <HorizontalCategoryCardMenu sliderType="products" items={4} type={PAGE_TYPE} />
              <HorizontalCategoryCardMenu sliderType="products" items={4} type={PAGE_TYPE} />
              <HorizontalCategoryCardMenu sliderType="products" items={4} type={PAGE_TYPE} />

                {/* <Products
                  type={PAGE_TYPE}
                  deviceType={deviceType}
                  fetchLimit={20}
                /> */}

              <HorizontalCategoryCardMenu sliderType="slider" items={1} type={PAGE_TYPE} />
              
              


              <HorizontalCategoryCardMenu sliderType="products" items={4} type={PAGE_TYPE} />
              <HorizontalCategoryCardMenu sliderType="products" items={4} type={PAGE_TYPE} />


                
              <Banners images={page?.bann} title="Best promoters on Amana" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quod officiis quae suscipit, officia assumenda, unde eius a repellat neque ut. Sint possimus voluptas laboriosam necessitatibus eaque nisi cupiditate ipsam." />

              <HorizontalCategoryCardMenu sliderType="products" items={4} type={PAGE_TYPE} />
              <HorizontalCategoryCardMenu sliderType="products" items={4} type={PAGE_TYPE} />
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
                  </ul>
                  <ul className={active == 1? "active-ul ul-brands":"ul-brands"} style={{marginTop:"40px"}}>
                    <li className="no-border">
                      <img className="brand-image" src="https://logosdownload.com/logo/samsung-logo-512.png" alt=""/>
                    </li>
                    <li className="no-border">
                      <img className="brand-image" src="https://logosdownload.com/logo/samsung-logo-512.png" alt=""/>
                    </li>
                    <li className="no-border">
                      <img className="brand-image" src="https://logosdownload.com/logo/samsung-logo-512.png" alt=""/>
                    </li>
                    <li className="no-border">
                      <img className="brand-image" src="https://logosdownload.com/logo/samsung-logo-512.png" alt=""/>
                    </li>
                    <li className="no-border">
                      <img className="brand-image" src="https://logosdownload.com/logo/samsung-logo-512.png" alt=""/>
                    </li>
                    <li className="no-border">
                      <img className="brand-image" src="https://logosdownload.com/logo/samsung-logo-512.png" alt=""/>
                    </li>
                    <li className="no-border">
                      <img className="brand-image" src="https://logosdownload.com/logo/samsung-logo-512.png" alt=""/>
                    </li>
                    <li className="no-border">
                      <img className="brand-image" src="https://logosdownload.com/logo/samsung-logo-512.png" alt=""/>
                    </li>
                    <li className="no-border">
                      <img className="brand-image" src="https://logosdownload.com/logo/samsung-logo-512.png" alt=""/>
                    </li>
                  </ul>
                  <ul className={active == 2? "active-ul ul-brands":"ul-brands"} style={{marginTop:"40px"}}>
                    <li className="no-border">
                      <img className="brand-image" src="https://banner2.cleanpng.com/20180422/ogq/kisspng-samsung-galaxy-a8-2018-logo-samsung-electronics-arrow-sketch-5adc19b2a478b5.7637149715243739386737.jpg" alt=""/>
                    </li>
                    <li className="no-border">
                      <img className="brand-image" src="https://banner2.cleanpng.com/20180422/ogq/kisspng-samsung-galaxy-a8-2018-logo-samsung-electronics-arrow-sketch-5adc19b2a478b5.7637149715243739386737.jpg" alt=""/>
                    </li>
                    <li className="no-border">
                      <img className="brand-image" src="https://banner2.cleanpng.com/20180422/ogq/kisspng-samsung-galaxy-a8-2018-logo-samsung-electronics-arrow-sketch-5adc19b2a478b5.7637149715243739386737.jpg" alt=""/>
                    </li>
                    <li className="no-border">
                      <img className="brand-image" src="https://banner2.cleanpng.com/20180422/ogq/kisspng-samsung-galaxy-a8-2018-logo-samsung-electronics-arrow-sketch-5adc19b2a478b5.7637149715243739386737.jpg" alt=""/>
                    </li>
                    <li className="no-border">
                      <img className="brand-image" src="https://banner2.cleanpng.com/20180422/ogq/kisspng-samsung-galaxy-a8-2018-logo-samsung-electronics-arrow-sketch-5adc19b2a478b5.7637149715243739386737.jpg" alt=""/>
                    </li>
                    <li className="no-border">
                      <img className="brand-image" src="https://banner2.cleanpng.com/20180422/ogq/kisspng-samsung-galaxy-a8-2018-logo-samsung-electronics-arrow-sketch-5adc19b2a478b5.7637149715243739386737.jpg" alt=""/>
                    </li>
                    <li className="no-border">
                      <img className="brand-image" src="https://banner2.cleanpng.com/20180422/ogq/kisspng-samsung-galaxy-a8-2018-logo-samsung-electronics-arrow-sketch-5adc19b2a478b5.7637149715243739386737.jpg" alt=""/>
                    </li>
                    <li className="no-border">
                      <img className="brand-image" src="https://banner2.cleanpng.com/20180422/ogq/kisspng-samsung-galaxy-a8-2018-logo-samsung-electronics-arrow-sketch-5adc19b2a478b5.7637149715243739386737.jpg" alt=""/>
                    </li>
                    <li className="no-border">
                      <img className="brand-image" src="https://banner2.cleanpng.com/20180422/ogq/kisspng-samsung-galaxy-a8-2018-logo-samsung-electronics-arrow-sketch-5adc19b2a478b5.7637149715243739386737.jpg" alt=""/>
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
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_PRODUCTS,
    variables: {
      type: params.type,
      offset: 0,
      limit: 20,
    },
  });
  await apolloClient.query({
    query: GET_CATEGORIES,
    variables: {
      type: params.type,
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { type: 'grocery' } },
      { params: { type: 'makeup' } },
      { params: { type: 'bags' } },
      { params: { type: 'book' } },
      { params: { type: 'medicine' } },
      { params: { type: 'furniture' } },
      { params: { type: 'clothing' } },
    ],
    fallback: false,
  };
}
export default CategoryPage;
