import styled from 'styled-components';
import css from '@styled-system/css';

export const CategoryWrapper = styled.div<any>(
  css({
    // padding: ['30px 5px', '30px 15px', '30px'],
    paddingTop:"0px !important",
    paddingLeft:"5px !important",
    paddingRight:"5px !important",
    paddingBottom:"6px !important",
    "&.categoryhor":{
      width:"800px !important",
    },
    ".swiper-wrapper":{
    },
    ".pages":{
        position:"relative",
        left:"50%",
        transform:"translateX(-50%)"
    }
  })
);
export const CategoryWrappers = styled.div<any>(
  css({
    // padding: ['30px 5px', '30px 15px', '30px'],
    paddingTop:"0px !important",
    paddingLeft:"5px !important",
    paddingRight:"5px !important",
    paddingBottom:"6px !important",
    "&.categoryhor":{
      width:"800px !important",
    },
    "@media (max-width:1980px)":{
      marginTop:"45px"
    },
    "@media (max-width:1400px)":{
      marginTop:"92px"
    },
    "&.firstslider":{
      "@media (max-width:1980px)":{
          marginTop:"145px !important"
      },
    },
  })
);

export const CategoryInner = styled.div<any>({
  position: 'relative',
  marginLeft:"50px",
  marginRight:"50px",
  '.hoverss':{
    height:"200px"
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
export const CategoryInners = styled.div<any>({
  position: 'relative',
  marginLeft:"50px",
  marginRight:"50px",
  '@media (max-width:1990px)':{
    width:"1600px",
    marginLeft:"15px",
  },
  '@media (max-width:1400px)':{
    width:"1034px",
    marginLeft:"15px",
  },
  '.hoverss':{
    height:"200px"
  },
  ".parents":{
    position:"relative",
    left:"50%",
    transform:"translateX(-50%)"
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
})
export const ItemCard = styled.div<any>((props) =>
  css({
    textAlign: 'center',
    borderRadius: 6,
    backgroundColor: '#fff',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    border: props.active ? '2px solid' : '2px solid #fff',
    borderColor: props.active ? 'primary.regular' : '#fff',
  })
);
export const Titles = styled.div`
  background:#ededed;
  padding:8px;
  margin-left:21px;
  margin-right:15px;
  padding-left:20px;
  margin-bottom:3px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  h3{
    font-size:14px !important;
  }
  .section{
    display:flex;
    justify-content:space-between; 
    .active{
      color:#F39C12;
    }
    h5{
      color:#000;
      font-size:12px !important;
      margin-left:20px;
      margin-right:20px;
      cursor:pointer;
      &:hover{
        color:#F39C12;
      }
    }
  }
`;
export const Titless = styled.div`
  background:#ededed;
  padding:8px;
  margin-left:50px;
  margin-right:50px;
  padding-left:20px;
  margin-bottom:3px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  h3{
    font-size:14px !important;
  }
  @media (max-width:1980px){
    margin-left:61px;
    margin-right:15px
  }
  @media (max-width:1400px){
    margin-left:15px !important;
    margin-right:10px !important
  }
  .section{
    display:flex;
    justify-content:space-between; 
    .active{
      color:#F39C12;
    }
    h5{
      color:#000;
      font-size:12px !important;
      margin-left:20px;
      margin-right:20px;
      cursor:pointer;
      &:hover{
        color:#F39C12;
      }
    }
  }
`;
export const ImageWrapper = styled.div<any>({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 120,
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  marginBottom: 10,

  img: {
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

export const Title = styled.span<any>(
  css({
    fontSize: 'base',
    fontWeight: 'semiBold',
    color: 'text.bold',
    textAlign: 'center',
    padding: '0 15px 15px',
    display: 'block',
  })
);

export const SliderNav = styled.button({
  width: 30,
  height: 30,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'text.bold',
  backgroundColor: 'white',
  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16)',
  outline: 0,
  padding: 0,
  border: 0,
  borderRadius: '50%',
  position: 'absolute',
  top: '50%',
  marginTop: '-15px',
  zIndex: 1,
  cursor: 'pointer',

  svg: {
    width: 18,
    maxHeight: 18,
  },

  '&.swiper-button-disabled': {
    display: 'none',
  },
  '&.none':{
  display:"none"
  },
  '&.banner-slider-prev': {
    left: -15,
  },

  '&.banner-slider-next': {
    right: -15,
  },
});