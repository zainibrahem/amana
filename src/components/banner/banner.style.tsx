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
    fontFamily:"'Cairo', sans-serif;",
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    // backgroundColor: #f7f7f7;

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
export const Trends = styled.div`
  height:100px;
  margin-top:30px;
 
  position:relative;
  left:50%;
  transform:translateX(-50%);
  display:flex;
  justify-content:space-between;
  align-items:center;
  @media (min-width: 1501px) {
    width:30%;
  }
  @media (min-width: 1301px) and (max-width: 1500px) {
    width:45%;
  }
  @media (min-width: 768px) and (max-width: 1300px) {
  }

  .shadow{
    filter: drop-shadow(rgba(50, 50, 0, 0.3) -1px 6px 3px);
  }
  .clipped{
    cursor:pointer;
    width:85px;
    position:relative;
    background-size:120% !important;
    background-position:center !important;
    height:100px;
    clip-path:polygon(50% 0, 100% 26%, 100% 72%, 50% 100%, 0 72%, 0 26%);
    transition:.4s all ease;
    :hover{
      transition:.4s all ease;
      box-shadow:inset 0px 0px 5px #fff;
      width:100px;
      height:118px;
     
    }
    :hover .white-border{
      opacity:1;
      transition:.9s all ease;
    }
    .white-border{
      opacity:0;
      transition:.1s all ease;
      width: 101px;
      height: 100px;
      border-right: 1px solid white;
      border-left: 2px solid white;
      position: absolute;
      top: 8px;
      right: 0px;
    }
    .border1{
      transform:rotateZ(58deg)
    }
    .border2{
      transform:rotateZ(122deg);
      border-right: 3px solid white;
      border-left: 2px solid white;
      width:102px;
    }
    .border3{
      transform:rotateZ(-58deg);
      border-right:1px solid #FFF;
    }
    .overlay{
      position:absolute;
      left:0px;
      transition:.4s all ease;
      top:0px;
      width:100%;
      height:100%;
      background:rgb(0,0,0,0.7);
      color:white;
      display:flex;
      justify-content:center;
      align-items:center;
      opacity:0;
     
    }
    :hover .svg{
      opacity:1;
      transition:.4s all ease;
    }
    .svg{
      opacity:0;
      transition:.4s all ease;
      width: 100%;
      height: 20px;
      overflow: hidden;
      position: absolute;
      z-index: 1;
      left: 50%;
      bottom: 0px;
      transform: translateX(-50%);
      svg{
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
    }
    :hover .overlay{
      width:100%;
      height:100%;
      opacity:1;
      transition:.4s all ease;
    }
  }
`;
export const HashTag = styled.h2`
  margin-top:25px;
  font-size:18px;
  width:20%;
  font-family:'Cairo', sans-serif;
  position:relative;
  color:rgb(119, 121, 140);
  text-align:right;
  transform:translateX(-50%);
  .yellow{
    font-size:18px;
    margin-right:10px;
    color:rgb(243,156,18)
  }
  @media (min-width: 1501px) {
    right:-30%;
  }
  @media (min-width: 1301px) and (max-width: 1500px) {
    right:-29%;
    transform:translateX(-63%) !important;
  }
  @media (min-width: 768px) and (max-width: 1300px) {
    right:66%;
  }
  @media {
   
  }
`;
export const Content = styled.div(
  css({
    px: ['20px', '20px', '15px'],
    pt: [0],
  }),
  {
    fontFamily:"'Cairo', sans-serif",
    marginBottom:"55px",
    position: 'relative',
    zIndex: 2,
    width: '100%',
  }
);
export const Title = styled.h2(
  css({
    fontSize: [17, '2xl', 45],
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
    fontSize: ['16px', '16px'],
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
  })
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
