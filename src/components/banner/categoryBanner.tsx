import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import {
    Header
} from './categorybanner.style';
import { useRouter } from 'next/router';
import itemImage from 'assets/images/dummy-img-5.png';
import {Hover} from './Hover';
import { Waypoint } from 'react-waypoint';
import { useAppDispatch } from 'contexts/app/app.provider';
import Search from 'features/search/search';
import { url } from 'node:inspector';
import { useState } from 'react';
import Drawer from 'components/drawer/drawer';
import dynamic from 'next/dynamic';
import { ContentSection, MainContentArea, SidebarSection } from 'assets/styles/pages.style';
import Products from 'components/product-grid/product-list/product-list';
import { useRefScroll } from 'utils/use-ref-scroll';
import { sitePages } from 'site-settings/site-pages';
const Sidebar = dynamic(() => import('layouts/sidebar/sidebar'));


export const CategoryBanner: React.FC<any> = ({
  deviceType
}) => {
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
    if (!page) return null;
  return (
      <>
         <MainContentArea>
            <SidebarSection>
              <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
            </SidebarSection>
            <ContentSection>
              <div ref={targetRef}>
                <Products
                  type={PAGE_TYPE}
                  deviceType={deviceType}
                  fetchLimit={20}
                />
              </div>
            </ContentSection>
          </MainContentArea>
      </>
  );
}