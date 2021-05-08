import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Sticky from 'react-stickynode';
import { useAppState } from 'contexts/app/app.provider';
import Header from './header/header';
import { LayoutWrapper } from './layout.style';
import { isCategoryPage } from './is-home-page';
import CatsMenu from './category menu/CatsMenu';
import Footers from './header/footer';
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
    
    const isHomePage = isCategoryPage(query.type) || pathname === '/bakery';
    const footers = isHomePage || pathname === '/product';
  return (
    <LayoutWrapper className={`layoutWrapper ${className}`}>
      <Sticky enabled={isSticky} innerZ={1001}>
        <MobileHeader
          className={`${isSticky ? 'sticky' : 'unSticky'} ${
            isHomePage ? 'home' : ''
          } desktop`}
        />

        <Header
          className={`${isSticky ? 'sticky' : 'unSticky'} ${
            isHomePage ? 'home' : ''
          }`}
        />
        <CatsMenu className={`${isSticky ? 'sticky' : 'unSticky'}`}></CatsMenu>
      </Sticky>
      {children}
      {footers? (
      
      <Footers className="unSticky">
        </Footers>
        ):""}
    </LayoutWrapper>
  );
};

export default Layout;
