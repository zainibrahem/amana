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
    transition: opcaity 0.7s ease transform 0.6 ease;
  }
`;
export const Foot = styled.div`
width:100%;
height:45px;
display:flex;
justify-content:space-between;
align-items:flex-end;
z-index:1001;
border-top-right-radius:4px;
border-top-left-radius:4px;
padding-left:20px;
padding-right:20px;
position: relative;
transition: height .4s;
bottom:0px;
background:#fff;
box-shadow : 0 1px 8px -3px #000;
@media (max-width: 991px){
  display:none !important;
}
&.full{
    height:280px;
    transition:all .4s ease;
}

&.unSticky {
    opacity: 1;
    animation: ${positionAnim} 0.3s ease;
    }
    &.sticky {
        background-color: #fff;
        position: fixed;
        box-shadow:0 1px 8px -3px #000;
        padding-top: 5px !important;
        padding-bottom: 20px;
        transition: opcaity 0.3s ease transform 0.6s ease height .4s;
        @media (max-width: 1400px) {
          padding-top: 5px;
          padding-bottom: 5px;
        }
            }
        
   
`;
export const Logos = styled.div`
    align-self:flex-start;
    margin-left:10px;
    margin-top:20px;
    position:absolute;
    &.hidden{
        opacity:0;
    }
`;
export const Rows = styled.div`
    width:100%;
    display:flex;
    padding-left:20px;
    height:69%;
    justify-content:space-between;
    align-items:flex-start;
    align-self:center;
    &.hidden{
        opacity:0;
    }
`;
export const Bottoms = styled.div`
    display:flex;
    width:98%;
    justify-content:space-between;
    padding:5px 30px 10px 10px;
    align-items:center;
    position:absolute;
    bottom:0px;
`;
export const Cols = styled.div`
    width:30%;
    display:flex;
    height:100%;
    flex-direction :column;
    justify-content:felx-start;
    align-items:flex-start;
    h6{
        margin-top:20px;
        font-weight:normal;
        font-size:14px;
    }
    p{
        margin-top:9px;
        font-size:12px;
        :hover{
            color:#F39C12;
            cursor:pointer;
        }
    }
    label{
        margin-top:10px;
        
        font-size:10px;
    }
    input{
        margin-top:5px;
        width:100%;
        padding:7px;
        background:transparent;
        border:1px solid #878787;
    }
    .subscibe{
        margin-top:13px;
        align-self:flex-end;
        background:#191919;
        color:#F39C12;
        border:0px solid;
        padding:5px 35px;
        text-align:left;
    }
`;
export const Sections = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    width:35%;
`;
export const Images = styled.div`
    display:flex;
    padding-top:10px;
    justify-content:center;
    align-items:space-between;
    flex-wrap:wrap;
    img{
        width:60px;
        height:60px;
        border-radius:5px;
        margin:2px 9px;
        margin-left:0px !important;
    }
`;
export const SocialIcon = styled.div`
    width:20px;
    height:20px;
    margin:0px 10px;
    font-size:14px;
    align-self:flex-start;
    margin-top:5px;
    
    &.under{
        transform:rotateZ(180deg);
    }
    
    &.zindex{
        z-index:111;
    }
    .no-style{
        background:transparent !important;
        padding:0px !important;
        margin:0px !important;
        height:100%;
    }
`;

export const SocialIcons = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;

`;

export const Title = styled.div`
    font-size:12px;
    color:#878787;
    text-align:center;
    
    @media screen (min-width:1024) and (max-width:1400px){
        font-size:12px;
    }
`;