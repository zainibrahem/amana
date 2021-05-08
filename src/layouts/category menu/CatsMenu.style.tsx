import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    opacity: 0;
    transition: all 0.3s ease;
  }
`;
export const Wrapper = styled.div`
    height:37px;
    @media (min-width: 1501px) {
        width:1850px;
    }
    @media (min-width: 1301px) and (max-width: 1500px) {
        width:1290px;
    }
    @media (min-width: 768px) and (max-width: 1300px) {
    }
    @media (max-width:600px){
        display:none;
    }
    border-bottom-left-radius:4px;
    border-bottom-right-radius:4px;
    position:absolute;
    left:50%;
    opacity:0;
    transition: .6s all ease;
    color:white;
    transform:translateX(-50%);
    display:flex;
    cursor:pointer;
   
    align-items:center;
    justify-content:flex-start;
    span{
        margin-left:20px;
        padding:20px;
        :hover{
            color:rgb(243,156,18)
        }
        @media (min-width: 1501px) {
            padding:0px;
            width:110px;
        }
        @media (min-width: 1301px) and (max-width: 1500px) {
            padding:20px;
            width:145px;
        }
        @media (min-width: 768px) and (max-width: 1300px) {
            padding:20px;
            width:132px;
        }
    }
    .active{
        color: rgb(243,156,18); 
    }
    &.unSticky {
        top:0px;
        animation: ${positionAnim} 0.3s ease;
      }
    
    &.sticky {
        opacity:1;
        transition: .6s all ease;
        background-color: ${themeGet('colors.black', '#000000')};
        position: fixed;
        box-shadow: ${themeGet('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)')};
        padding-top: 20px;
        padding-bottom: 20px;
        @media (min-width: 1501px) {
            top:80px;
        }
        @media (min-width: 1301px) and (max-width: 1500px) {
            top:55px;
            padding-top: 7px;
            padding-bottom: 8px;
        }
        @media (min-width: 768px) and (max-width: 1300px) {
            padding-top: 7px;
            padding-bottom: 8px;
        }
     
    
       
`;