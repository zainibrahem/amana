
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
export const Divs = styled.div`
.pages{
  .package{
    left: 37px !important;
  }
}
`;
export const Parent = styled.div(
    css({
      width:"72px",
      height:"84px",
      filter:"drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.3))",
      transition:".4s all ease",
    ':hover':{
    transition:".4s all ease",
    width:"88px",
    height:"100px",
    transform:"translateX(-3px)",
    filter:"drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))"
    },
    "&.pages":{
      "@media (max-width:1920px)":{
        width:"100px",
        height:"120px",
        ':hover':{
          width:"130px",
          height:"160px",
          transform:"translate(-13px, -1px)"
        },
      },
    },
    ".package":{
      height:"135%",
      position:"relative",
      bottom:"114px",
      left:"23px",
      display:"none",
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
        width:"100%",
        textAlign:"center",
        transition:".7s all ease",
        top: "50%", 
        color: "#ffffff",
        fontSize: "14px",
        transform: "translateY(-50%)",
    }
    },
    '.child':{
        width:"100%",
        backgroundSize:"cover !important",
        backgroundPosition: "center center",
        clipPath:"polygon(50% 0%, 100% 20%, 100% 75%, 50% 100%, 0 76%, 0 21%)",
      },
  
      ".shown":{
          position:"relative",
          opacity:"1 !important",
          display:"block !important",
          bottom:"114px",
          left:"14px",
          
          "@media (max-width:1400px)":{
            left:"17px",
          }
        }
    })
)

    
