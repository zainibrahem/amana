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

export const Box = styled.div<any>(
  css({
    height: ['auto', 'auto', '600px', '100vh'],
  }),
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    paddingBottom:"50px",
    position: 'relative',
    '@media (max-width: 990px)': {
      padding: '80px 0 25px',
    },
  },
  compose(space, color, layout, position, flexbox, border)
);
export const Image = styled.div<any>(
  css({
    backgroundSize: ['cover'],
  }),
  {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    top: 0,
    left: 0,
    '@media (max-width: 990px) and (min-width: 768px)': {
      backgroundPosition: 'inherit',
    },
  },
  background
);

export const Content = styled.div(
  css({
    px: ['20px', '20px', '15px'],
    pt: [0],
  }),
  {
    position: 'relative',
    zIndex: 2,
    width: '100%',
  }
);
export const Title = styled.h2(
  css({
    fontSize: [17, '2xl', 35],
    color: 'text.bold',
    fontWeight: 'bold',
  }),
  {
    marginBottom: 15,
    textAlign: 'center',
  }
);
export const Description = styled.p(
  css({
    fontSize: ['base', 'md'],
    color: 'text.regular',
    marginBottom: [null, null, 60],
    display: ['block'],
    fontWeight: 'regular',
    lineHeight: 'body',
    textAlign: ['left', 'left', 'center'],

    '@media (max-width: 990px)': {
      width: '100%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      paddingRight: '15px',
    },
  })
);

export const ContentRow = styled.div(
  css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,

    button: {
      padding: 0,

      ':before': {
        content: '""',
        width: 5,
        height: 5,
        display: 'block',
        borderRadius: '50%',
        backgroundColor: 'yellow.regular',
        marginRight: '7px',
      },
    },
  })
);

export const SearchWrapper = styled.div(
  css({
    display: 'flex',
    justifyContent: 'center',
    width:"570px",
    position:"relative",
    left:"50%",
    transform:"translateX(-50%)"
  })
);
export const ProfileWrapper = styled.div(
  css({
    width:"569px",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    marginTop:"30px",
    position:"relative",
    left:"50%",
    transform:"translateX(-50%)",
   
    
  })
);
export const Hashs = styled.span(
  css({
      marginTop:"0px",
      opacity:"0",
      textAlign:"center",
      color:"#191919",
      fontSize:"12px",
      transition:".4s all ease"
  })
);
export const RoundWrapper = styled.div(
  css({
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"center",
    height:"95px"
  })
);
export const RoundProfile = styled.div(
  css({
      width:"50px",
      height:"50px",
      borderRadius:"100%",
      boxShadow:"0px 0px 12px rgb(0,0,0,.2)",
      border:"1px solid white",
      transition:'.4s all ease',
      transformOrigin:"center center",
      cursor:'pointer',
      ':hover' : {
        width:"70px !important",
        height:"70px !important",
        boxShadow:"0px 0px 28px rgb(0,0,0,.4)",
        transform:"translate(0%,-7%)",
        transformOrigin:"center center",
        transition:'.4s all ease'
        
      },
      ':hover + .bannerstyle__Hashs-sc-1wl29p7-8':{
        opacity:"1",
        transition:".4s all ease"
      }
  })
);
export const Hash = styled.span(
  css({
    color:"#F39C12",
    fontSize:"25px",
    marginRight:"3px",
    marginTop:"7px",
    fontWeight:"bolder",

  })
);
export const HashTags = styled.div(
  css({
    width:"570px",
    position:"relative",
 
    color:"text.regular",
    fontSize:".8xl",
    fontWeight:"bold",
    left:"50%",
    transform:"translateX(-50%)",
    textAlign:"left",
    marginTop:"20px",
  }),
);
export const SliderNav = styled.button(
  css({
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

    '&.banner-slider-prev': {
      left: 20,
    },

    '&.banner-slider-next': {
      right: 20,
    },
  })
);
