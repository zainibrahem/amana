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
    transform:translate(-50.3%,100%);
    transition: all 0.3s ease;
  }
`;

export const CatsMenu = styled.div`
    width:94.7%;
    height:55px;
    border-bottom-right-radius:4px;
    border-bottom-left-radius:4px;
    padding-left:20px;
    position: absolute;
    left: 50%;
    transform: translateX(-50.3%);
    top:90px;
    background:#191919;
    box-shadow : 0px 27px 44px -24px #000;
    @media (max-width: 991px){
      display:none !important;
    }
    &.unSticky {
        opacity: 0;
        animation: ${positionAnim} 0.3s ease;
        }
        &.sticky {
            background-color: #191919;
            position: fixed;
            box-shadow: ${themeGet('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)')};
            padding-top: 5px !important;
            padding-bottom: 20px;
            transition: all 0.3s ease;
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
