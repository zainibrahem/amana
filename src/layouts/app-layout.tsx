import React, { useCallback } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Sticky from 'react-stickynode';
import { useAppDispatch, useAppState } from 'contexts/app/app.provider';
import Header from './header/header';
import { LayoutWrapper } from './layout.style';
import { isCategoryPage } from './is-home-page';
import Footers  from '../layouts/header/footers';
import CategoryHeader from './header/category';
import CatsMenunews from './header/newCatMenu';

import { Waypoint } from 'react-waypoint';

const MobileHeader = dynamic(() => import('./header/mobile-header'), {
  ssr: false,
});

type LayoutProps = {
  className?: string;
  token?: string;
};

const Layout: React.FunctionComponent<LayoutProps> = ({
  className,
  children,
  token,
}) => {
  const { pathname, query } = useRouter();
  const isSticky =
    useAppState('isSticky') ||
    pathname === '/furniture-two' ||
    pathname === '/grocery-two';
    pathname === '/categories';
    pathname === '/category';
    const isStickyNew = useAppState('isStickyNew')

  const isHomePage = isCategoryPage(query.type) || pathname === '/bakery';
  const dispatch = useAppDispatch();
  const setSticky = useCallback(() => dispatch({ type: 'SET_STICKY' }), [
    dispatch,
  ]);
  const removeSticky = useCallback(() => dispatch({ type: 'REMOVE_STICKY' }), [
    dispatch,
  ]);
  const onWaypointPositionChange = ({ currentPosition }) => {
    if (!currentPosition || currentPosition === 'above') {
      setSticky();
    }
  };
  return (
    
    <LayoutWrapper className={`layoutWrapper ${className}`}>
      <Sticky enabled={isSticky} innerZ={1001}>
        <MobileHeader
          className={`${isSticky ? 'sticky' : 'unSticky'} desktop`}
        />
        {pathname=='/[type]'?(
          <>
          <Header
          className={`${isSticky ? 'sticky' : 'unSticky'} `}
          />
          <CategoryHeader className={`${isSticky ? 'sticky' : 'unSticky'}`}></CategoryHeader>
          </>
          ):(
            <>
          <Header
            className="sticky"
            />
            <CategoryHeader   className="sticky pages" ></CategoryHeader>
            <CatsMenunews  className={`${isStickyNew ? 'sticky pages' : 'unSticky pages'}`}></CatsMenunews>
            </>
            )}  
        
      </Sticky>
      {pathname=='/grocery'?(
        <Waypoint
        onEnter={removeSticky}
        onLeave={setSticky}
        onPositionChange={onWaypointPositionChange}
        />
        ):""}
      {children}
    {isHomePage? (
      
      <Footers className="unSticky">
        </Footers>
        ):""}
 
    </LayoutWrapper>
  );
};

export default Layout;
