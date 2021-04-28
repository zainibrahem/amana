
import styled from 'styled-components';
import {
  background,
  compose,
  space,
  color,
  layout,
  position,
  flexbox,
  border,
} from 'styled-system';
import css from '@styled-system/css';

export const Parent = styled.div(
    css({
      width:"72px",
      height:"84px",
      filter:"drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.3))",
    ':hover':{
    transition:".4s all ease",
    width:"88px",
    height:"100px",
    transform:"translateX(-3px)",
    filter:"drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))"
    },
    ".package":{
      height:"135%",
      bottom:"9px",
      left:"18px",
    },
    ':hover .overlay':{
    transition:".4s all ease",
    display:"block",
    },
  
    '.overlay':{
    clipPath:"polygon(50% 0%, 100% 20%, 100% 75%, 50% 100%, 0 76%, 0 21%)",
    width:"100%",
    transition:".7s all ease",
    height:"100%",
    display:"none",
    background:"rgb(0,0,0,.7)",
    'h5':{
        position: "relative",
        transition:".7s all ease",
        left: "15%",
        top: "50%",
        color: "#ffffff",
        fontSize: "14px",
        transform: "translateY(-50%)",
    }
    },
    '.child':{
        width:"100%",
        clipPath:"polygon(50% 0%, 100% 20%, 100% 75%, 50% 100%, 0 76%, 0 21%)",
      },
  
      ".shown":{
          opacity:"1 !important",
          display:"block !important",
        }
    })
)

    
