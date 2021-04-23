import React from 'react';
import Router, { useRouter } from 'next/router';
import { openModal } from '@redq/reuse-modal';
import { AuthContext } from 'contexts/auth/auth.context';
import AuthenticationForm from 'features/authentication-form';
import { RightMenu } from './menu/right-menu/right-menu';
import { LeftMenu } from './menu/left-menu/left-menu';
import HeaderWrapper from './header.style';
import LogoImage from 'assets/images/logo.svg';
import UserImage from 'assets/images/user.jpg';
import { isCategoryPage } from '../is-home-page';
import {CatsMenu,CatsNav} from './category.style';
import Catsli from "./CatsLi";
type Props = {
  className?: string;
};

const CategoryHeader: React.FC<Props> = ({ className }) => {
    return (
        <CatsMenu className={className}>
            <CatsNav>
                <Catsli className="active" Label="All Categories"></Catsli>
                <Catsli Label="Fruits"></Catsli>
                <Catsli Label="Vegetables"></Catsli>
                <Catsli Label="Technicals"></Catsli>
            </CatsNav>
        </CatsMenu>
    );
}
export default CategoryHeader;
