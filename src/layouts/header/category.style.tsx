import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
    transform:translate(-50.3%,0%)
  }

  to {
    opacity: 0;
    transform:translate(-50.3%,-100%);
    transition: opcaity 0.7s ease transform 0.6 ease;
  }
`;

export const CatsMenu = styled.div`
    
    height:55px;
    border-bottom-right-radius:4px;
    border-bottom-left-radius:4px;
    padding-left:20px;
    position: absolute;
    top:64px;
    background:#191919;
    box-shadow : 0px 27px 44px -24px #000;
    @media (min-width:1400px){
      top:86px !important;
      width:1810px;
      margin-left:55px;
    }
    @media (max-width:1399px){
      width:1256px;
      margin-left:55px;
    }
    @media (max-width: 991px){
      display:none !important;
    }    &.unSticky {
        opacity: 0;
        animation: ${positionAnim} 0.3s ease;
        }
        &.sticky {
            background-color: #191919;
            position: fixed;
            box-shadow: ${themeGet('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)')};
            padding-top: 5px !important;
            padding-bottom: 20px;
            transition: opcaity 0.3s ease transform 0.6 ease;
            @media (max-width: 1400px) {
              padding-top: 5px;
              padding-bottom: 20px;
            }
        }
       
        
    
`;
export const CatsNav = styled.ul`
    width:100%;
    display:flex;
    padding-left:20px;
    justify-content:flex-start;
    align-items:center;
    padding:3px;
`;
export const Catsli = styled.li`
    margin:5px;
    cursor:pointer;
    padding:3px;
    color:#eaeaea;
    font-weight:normal;
    letter-spacing:1px;
    font-size:14px;
    &.active{
        color:#F39C12;
    }
`;
