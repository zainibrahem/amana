import styled from 'styled-components';
import css from '@styled-system/css';


export const Round = styled.div`
    width:47px;
    height:47px;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    border-radius:100%;
    background:white;
    box-shadow:0px 0px 3px black;
`;
export const RoundBack = styled.div`
    width:42px;
    height:42px;
    border-radius:100%;
    position:relative;
    left:50%;
    top:50%;
    background-size:cover !important;
    transform:translate(-50%,-50%)
`;
export const CategoryInner = styled.div<any>({
    position: 'relative',
    marginLeft:"0px",
    marginRight:"0px",
    height:"60px",
    '.hoverss':{
      height:"200px"
    },
    '.sidebarswipper':{
        width:"100%",
        height:"60px"
    },

    '.swiper-wrapper':{
        justifyContent:"center"
    },
    '&.pages':{
      '.swiper-container-horizontal':{
        height:"175px"
      }
    },
    '.imageheight':{
      '@media (max-width:1920x)':{
        height:"275px"
      },
      '@media (max-width:1399px)':{
        height:"250px"
      }
    }
  });