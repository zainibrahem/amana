import React from 'react';
import Router, { useRouter } from 'next/router';
import { openModal } from '@redq/reuse-modal';
import { AuthContext } from 'contexts/auth/auth.context';
import AuthenticationForm from 'features/authentication-form';
import LogoImage from 'assets/images/logo.png';
import UserImage from 'assets/images/user.jpg';
import { isCategoryPage } from '../is-home-page';
import {Wrapper} from './CatsMenu.style';
type Props = {
  className?: string;
};

const CatsMenu: React.FC<Props> = ({ className }) => {
  const {
    authState: { isAuthenticated },
    authDispatch,
  } = React.useContext<any>(AuthContext);
  const { pathname, query } = useRouter();
  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('access_token');
      authDispatch({ type: 'SIGN_OUT' });
      Router.push('/');
    }
  };

  const handleJoin = () => {
    authDispatch({
      type: 'SIGNIN',
    });

    openModal({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: true,
      component: AuthenticationForm,
      closeComponent: '',
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'quick-view-modal',
        width: 458,
        height: 'auto',
      },
    });
  };
  const showSearch =
    isCategoryPage(query.type) ||
    pathname === '/furniture-two' ||
    pathname === '/grocery-two' ||
    pathname === '/bakery';
  return (
        <Wrapper className={className}>
            <span className="active">كل التصنيفات</span>
            <span>الكترونيات</span>
            <span>أجهزة كهربائية</span>
            <span>ألبسة</span>
            <span>أحذية</span>
        </Wrapper>
  );
};

export default CatsMenu;
