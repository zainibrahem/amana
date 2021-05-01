import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const MobileCarouselDropdown = styled.div`
  @media (min-width: 990px) {
    display: none;
  }
`;

const OfferPageWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${themeGet('colors.gray.200', '#f7f7f7')};
  position: relative;
  padding: 100px 60px 60px;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 100px 30px 60px;
  }

  @media (max-width: 1199px) {
    padding: 100px 30px 60px;
  }
`;
export const Brands = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  min-height:521px;
  padding-top:70px;
  position:relative;
  padding-bottom:200px;

  h1{
    width:100%;
    text-align:center;
    position:relative;
    :after{
      content: "";
    width: 7px;
    height: 28px;
    background: #F39C12;
    position: absolute;
    border-top-right-radius: 97px;
    right: 46%;
    border-bottom-left-radius: 97px;
    top: 48px;
    -webkit-transform: translateX(1200%);
    -ms-transform: translateX(1200%);
    transform: translateX(1200%);
    @media (max-width:1399px){
      right: 44%;
    }
}
    :before{
      content: "";
      width: 13px;
      height: 41px;
      background: #F39C12;
      position: absolute;
      border-top-right-radius: 97px;
      left: 49%;
      border-bottom-left-radius: 97px;
      top: -26px;
      -webkit-transform: translateX(-1200%);
      -ms-transform: translateX(-1200%);
      transform: translateX(-1200%);
  }
  }
  p{
    width:700px;
    margin-top:30px;
    font-size:18px;
    text-align:center;
  }
`;
export const Lis = styled.li`
  border-bottom:0px solid !important;
`;
export const Buttons = styled.button`
  background:transparent;
  padding:0px;
  margin:0px;
  border:0px solid;
  height:20px;
`;
export const Tabs = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  ul{
    display:flex;
    justify-content:space-between;
    align-items:center;
    
    li{
      padding-left: 10px;
      padding-right: 10px;
      border-bottom: 1px solid #000;
      padding-bottom: 23px;
      cursor:pointer;
    }
    .actives{
      font-weight:bold;
      border-bottom: 3px solid #000;
    }
    .brand-image{
      width:70px;
      height:70px;
      border-radius:100%;
      box-shadow:0px 0px 9px -3px #000;
      padding:2px;
      
    }
    .no-border{
      border-bottom:0px solid;
    }

    &.ul-brands{
      position:absolute;
      margin-top:250px !important;
      opacity:0;
      transition:1s all ease;
    }
    &.active-ul{
      transition:1s all ease;
      opacity:1;
      z-index:1;
    }
  }
`;
const HeaderSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 400px;
  background-color: ${themeGet('colors.gray.300', '#f4f4f4')};
`;

const MainContentArea = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: ${themeGet('colors.gray.200', '#f7f7f7')};
  padding-right: 0;
  transition: padding-right 0.35s ease-in-out;

  @media (max-width: 990px) {
    background-color: ${themeGet('colors.white', '#ffffff')};
  }
`;

const SidebarSection = styled.div`
  background-color: ${themeGet('colors.white', '#ffffff')};
  width: 280px;

  @media (max-width: 990px) {
    display: none;
  }
`;

const ContentSection = styled.div`
  width: calc(100%);
  height: auto;
  min-height: 100vh;
  padding: 30px 0px 50px;

  @media (max-width: 1199px) and (min-width: 991px) {
    padding: 15px 0px 50px;
  }

  @media (max-width: 1367px) and (min-width: 1200px) {
    padding: 13px 0px 50px;
  }

  @media (max-width: 990px) {
    width: 100%;
    padding: 0px 0px 100px;
  }

  @media (max-width: 768px) {
    min-height: auto;
  }

  .offer-slider {
    padding: 0 0 30px 30px;
  }
`;

const OfferSection = styled.div`
  width: 100%;
  display: block;
  padding: 60px;
  background-color: ${themeGet('colors.white', '#ffffff')};
  position: relative;
  border-bottom: 1px solid ${themeGet('colors.gray.500', '#f1f1f1')};

  @media (max-width: 1199px) and (min-width: 991px) {
    padding: 20px 15px;
    .prevButton {
      left: 0;
    }

    .nextButton {
      right: 0;
    }
  }
  @media (max-width: 990px) {
    padding: 15px;
    border-bottom: 0;

    .prevButton {
      left: 5px;
    }

    .nextButton {
      right: 5px;
    }
  }
`;

const Heading = styled.h2`
  font-size: ${themeGet('fontSizes.xl', '24')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.primary.regular', '#F39C12')};
  padding: 0px 20px 20px;
  margin: 50px 10px 20px;
  border-bottom: 2px solid ${themeGet('colors.primary.regular', '#F39C12')};
  width: auto;
  display: inline-block;
`;

export const ProductsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  background-color: ${themeGet('colors.gray.200', '#f7f7f7')};

  @media (max-width: 768px) {
    margin-left: -7.5px;
    margin-right: -7.5px;
    margin-top: 15px;
  }
`;

const ProductsCol = styled.div`
  flex: 0 0 20%;
  max-width: 20%;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 30px;

  @media (max-width: 1650px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
  @media (max-width: 1300px) {
    flex: 0 0 33.3333333%;
    max-width: 33.3333333%;
  }
  @media (max-width: 1199px) and (min-width: 900px) {
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 20px;
  }
  @media (max-width: 899px) and (min-width: 769px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (max-width: 768px) {
    padding-left: 7.5px;
    padding-right: 7.5px;
    margin-bottom: 15px;
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (max-width: 490px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export {
  OfferPageWrapper,
  HeaderSection,
  MainContentArea,
  SidebarSection,
  ContentSection,
  OfferSection,
  Heading,
  ProductsCol,
};
