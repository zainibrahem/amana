import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
    transform:translateY(0%)
  }

  to {
    opacity: 0;
    transform:translateY(100%)
    transition: all 0.3s ease;
  }
`;

export const CatsMenu = styled.div`
    width:100%;
    height:auto;
    border-bottom-right-radius:4px;
    border-bottom-left-radius:4px;
    position:absolute;
    top:90px;
    background:white;
    box-shadow : 0px 27px 44px -24px #000;
  
    &.unSticky {
        opacity: 0;
        animation: ${positionAnim} 0.3s ease;
        }
        &.sticky {
            background-color: ${themeGet('colors.white', '#ffffff')};
            position: fixed;
            box-shadow: ${themeGet('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)')};
            padding-top: 20px;
            padding-bottom: 20px;
            transition: all 0.3s ease;
            @media (max-width: 1400px) {
              padding-top: 20px;
              padding-bottom: 20px;
            }
        }
        
    
`;
export const CatsNav = styled.ul`
    width:100%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    padding:20px;
`;
export const Catsli = styled.li`
    margin:5px;
    cursor:pointer;
    padding:3px;
    color:#000;
    font-weight:bold;
    &.active{
        color:#F39C12;
    }
`;
