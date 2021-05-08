import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import css from '@styled-system/css';

const StyledBox = styled.div(
  css({
    py: [30, 50],
    px: ['1rem', 0],
  }),
  {
    width: '100%',
  }
);

export const ProductCardWrapper = styled.div(
  css({
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    position: 'relative',
    fontFamily: 'inherit',
    borderRadius: 'base',
    cursor: 'pointer',
    '.ads':{
      width:"100%",
      height:"100%",
      position:"absolute",
      left:"0px",
      top:"0px",
      backgroundRepeat:"no-repeat !important",
      backgroundSize:"cover !important",
      backgroundPosition:"center center !important",

    },
    '@media (min-width:400px)':{
      ":hover  .before-hover":{
        opacity:"0",
        transition:".4s all ease"
      },
      ":hover  .product-meta":{
        opacity:"1",
        transition:".4s all ease"
      },
    },
   
    '.card-counter': {
      '@media (max-width: 767px)': {
        width: 30,
        height: 90,
        flexDirection: 'column-reverse',
        position: 'absolute',
        bottom: 0,
        right: 0,
      },
    },
  })
);

export const ProductImageWrapper = styled.div`
  height: 240px;
  padding: 5px;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
    max-height: 100%;
    display: inline-block;
  }
  @media (max-width: 640px) {
    height: 145px;
  }
`;

export const SaleTag = styled.span`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.white', '#ffffff')};
  background-color: ${themeGet('colors.yellow.regular', '#FFAD5E')};
  padding: 0 10px;
  line-height: 24px;
  border-radius: ${themeGet('radii.medium', '12px')};
  display: inline-block;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const DiscountPercent = styled.div`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.white', '#ffffff')};
  line-height: 24px;
  // background-color: ${themeGet('colors.yellow.regular', '#FFAD5E')};
  padding-left: 10px;
  padding-right: 10px;
  height:90px;
  width:90px;
  background-repeat:no-repeat;
  position: relative;
  display: inline-block;
  position: absolute;
  top: 0px;
  left: 0px;
  justify-content: flex-end;
  display: flex;
  align-items: flex-start;
  padding-top: 12px;
  // border-radius: ${themeGet('radii.medium', '12px')};
  z-index: 2;
  span{
    transform:rotateY(180deg);
    @media (min-width:1800px){
      font-size: ${themeGet('fontSizes.sm', '15')}px;
    }
  }
`;

export const ProductInfo = styled.div`
  padding: 20px 25px 64px;

  @media (max-width: 990px) {
    padding: 15px;
    padding-bottom:64px;
    min-height: 123px;
  }
  .product-title {
    font-family: ${themeGet('fonts.body', 'sans-serif')};
    font-size: ${themeGet('fontSizes.base', '15')}px;
    font-weight: ${themeGet('fontWeights.bold', '700')};
    color: ${themeGet('colors.text.bold', '#0D1136')};
    margin: 0 0 7px 0;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    @media (max-width: 767px) {
      font-size: 14px;
      margin: 0 0 5px 0;
    }
  }
  .descriptions{
    @media (max-width:400px){
      display:none;
    }
  }
  .before-hover{
    opacity:1;
    margin-top:10px;
    position: absolute;
    bottom: 10px;
    width:89%;
    transition:.4s all ease;
    @media (max-width:400px){
      opacity:0 !important;
      transition:.4s all ease;
      &.show{
        width:89%;
        opacity:1 !important;
        transition:.4s all ease;
      }
    }
    
  }
  .order-time{
    position:relative;
    left:50%;
    text-align:center;
    transform:translateX(-50%);
    color:#002100;
    @media (min-width: 1501px) {
      font-size:12px;
    }
    @media (min-width: 1301px) and (max-width: 1500px) {
      font-size:10px;
    }
    @media (max-width: 1300px) {
      font-size:12px;
    }
    @media (max-width:400px){
      left:44% !important;
    }
  }
  .speed{
    display:flex;
    justify-content:flex-start;
    align-items:center;
    margin-top:3px;
    @media (min-width: 1501px) {
      font-size:12px;
    }
    @media (min-width: 1301px) and (max-width: 1500px) {
      font-size:12px;
    }
    @media (max-width: 1300px) {
      font-size:12px;
    }
    img{
      @media (min-width: 1501px) {
        width:30px;
      }
      @media (min-width: 1301px) and (max-width: 1500px) {
        width:30px;
      }
      @media (max-width: 1300px) {
        width:20px;
      }
    }
  }
  .product-weight {
    font-family: ${themeGet('fonts.body', 'sans-serif')};
    font-size: ${themeGet('fontSizes.sm', '13')}px;
    font-weight: ${themeGet('fontWeights.regular', '400')};
    color: ${themeGet('colors.text.regular', '#77798c')};
    @media (max-width: 767px) {
      font-size: ${themeGet('fontSizes.xs', '12')}px;
    }
  }
  .productPriceWrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content:space-between;
    .product-price {
      font-family: ${themeGet('fonts.body', 'sans-serif')};
      font-size: ${themeGet('fontSizes.base', '15')}px;
      font-weight: ${themeGet('fontWeights.bold', '700')};
      color: #000;
      @media (max-width: 767px) {
        font-size: calc(${themeGet('fontSizes.base', '15')}px - 1px);
      }
    }
    .discountedPrice {
      font-family: ${themeGet('fonts.body', 'sans-serif')};
      font-size: ${themeGet('fontSizes.sm', '13')}px;
      font-weight: ${themeGet('fontWeights.regular', '400')};
      color:${themeGet('colors.text.regular', '#77798c')};
      font-style: italic;
      padding: 0 5px;
      position: relative;
      overflow: hidden;
      position: relative;
      top: 0px;
      left: -4px;
      &:before {
        content: '';
        width: 100%;
        height: 1px;
        display: inline-block;
        background-color: ${themeGet('colors.text.regular', '#77798c')};
        position: absolute;
        top: 50%;
        left: 0;
      }
    }
  }
  .mobile-cart{
    display:flex;
    justify-content:center;
    @media (max-width:400px){
      display:flex;
      .cart-button{
        width:27px;
      }
    }
    @media (min-width:400px){
      display:none;
    }
  }
  .product-meta {
    margin-top: 0px;
    bottom:25px;
    left: 50%;
    transition:.4s all ease;
    transform: translateX(-50%);
    opacity:0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;

    @media (max-width: 767px) {
      min-height: 36px;
    }
   
    .cart-button {
      @media (min-width:400px){
          border: 2px solid ${themeGet('colors.primary.regular', '#009e7f')};
          border-radius: ${themeGet('radii.big', '15px')};
          height: 27px;
          padding-left: 17px;
          color:${themeGet('colors.white', '#ffffff')};
          padding-right: 17px;
          background-color:${themeGet('colors.primary.regular', '#009e7f')};
          font-size: ${themeGet('fontSizes.sm', '13')}px;
          font-weight: ${themeGet('fontWeights.bold', '700')};
          @media (max-width: 767px) {
            width: 36px;
            height: 27px;
            padding: 0;
            border-radius: 50%;
          }
          .btn-text {
            padding: 0 0 0 6px;
            @media (max-width: 767px) {
              display: none;
            }
          }
        }
          @media (max-width:400px){
            border-radius: 18px;
            height: 36px;
            padding-left: 17px;
            padding-right: 17px;
            font-size: ${themeGet('fontSizes.1', '13')} px;
            font-weight: ${themeGet('fontWeights.bold', '700')};
            @media (max-width: 767px) {
              width: 32px;
              height: 32px;
              padding: 0;
              border-radius: 50%;
            }
            .btn-text {
              padding: 0 0 0 6px;
              @media (max-width: 767px) {
                display: none;
              }
          }
      }
    }
    
      svg {
        fill: currentColor;
        @media (max-width: 767px) {
          margin: 0;
        }
      }
    }
    @media (max-width: 767px) {
      .quantity {
        width: 32px;
        height: 90px;
        display: block;
        flex-shrink: 0;
        position: absolute;
        bottom: 15px;
        right: 15px;
        z-index: 1;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.16);
      }
      button {
        width: 100%;
        height: 27px;
      }
      .incBtn {
        top: 0;
        justify-content: center;
      }
      .decBtn {
        top: auto;
        bottom: 0;
        justify-content: center;
      }
      input[type='number'] {
        left: 0;
        font-size: calc(${themeGet('fontSizes.base', '15')}px - 1px);
        height: calc(100% - 54px);
        position: absolute;
        top: 27px;
        width: 100%;
        color: ${themeGet('colors.white', '#ffffff')};
      }
    }
  }
`;

export const ButtonText = styled.span`
  @media (max-width: 767px) {
    display: none;
  }
`;

export const BookImageWrapper = styled.div`
  height: 275px;
  padding: 0;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  img {
    max-width: 100%;
    max-height: 100%;
    display: inline-block;
  }
  @media (max-width: 767px) {
    height: 215px;
  }
  ${DiscountPercent} {
    top: 0;
    right: 0;
  }
`;

export const BookInfo = styled.div`
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) {
    padding: 15px 0px 0px;
  }
`;

export const ProductName = styled.span`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  margin: 0 0 7px 0;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  display: block;
  &:only-child {
    margin: 0;
  }
  @media (max-width: 767px) {
    font-size: calc(${themeGet('fontSizes.base', '15')}px - 1px);
    margin: 0 0 5px 0;
  }
`;

export const AuthorInfo = styled.span`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.regular', '#77798c')};
  @media (max-width: 767px) {
    font-size: ${themeGet('fontSizes.sm', '13')}px;
  }
`;

// export const AddCartBox = styled.div`
//   width: calc(100% - 40px);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 20px;
//   border-radius: 6px;
//   background-color: #ffffff;
//   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.16);
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   opacity: 0;
//   transition: all 0.3s;

//   .cart-button {
//     border-radius: 18px;
//     height: 36px;
//     padding-left: 17px;
//     padding-right: 17px;
//     font-size: ${themeGet('fontSizes.1', '13')} px;
//     font-weight: ${themeGet('fontWeights.bold', '700')};
//     @media (max-width: 767px) {
//       width: 32px;
//       height: 32px;
//       padding: 0;
//       border-radius: 50%;
//     }
//     .btn-text {
//       padding: 0 0 0 6px;
//       @media (max-width: 767px) {
//         display: none;
//       }
//     }
//     &:hover {
//       color: #fff;
//       background-color: ${themeGet('colors.primary.regular', '#009e7f')};
//       border-color: #009e7f;
//     }
//     svg {
//       fill: currentColor;
//     }
//   }
// `;

export const PriceWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.primary.regular', '#009E7F')};
  @media (max-width: 767px) {
    font-size: calc(${themeGet('fontSizes.base', '15')}px - 1px);
  }
`;

export const DiscountedPrice = styled.span`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.sm', '13')} px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.yellow.regular', '#FFAD5E')};
  font-style: italic;
  padding: 0 5px;
  position: relative;
  overflow: hidden;
  margin-bottom: 5px;
  margin-left: -4px;
  z-index: 2;
  &:before {
    content: '';
    width: 100%;
    height: 1px;
    display: inline-block;
    background-color: ${themeGet('colors.yellow.regular', '#FFAD5E')};
    position: absolute;
    top: 50%;
    left: 0;
  }
`;

export const BookCardWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 30px;
  background-color: ${themeGet('colors.white', '#ffffff')};
  position: relative;
  font-family: ${themeGet('fonts.body', 'Lato')};
  border-radius: ${themeGet('radii.base', '6px')};
  cursor: pointer;
  @media (max-width: 767px) {
    padding: 15px;
  }
`;

export const FoodCardWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 0;
  background-color: ${themeGet('colors.white', '#ffffff')};
  position: relative;
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  border-radius: ${themeGet('radii.base', '6px')};
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  @media (max-width: 990px) {
    border-radius: 0;
  }
`;

export const FoodImageWrapper = styled.div`
  height: 230px;
  padding: 0;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    display: flex;
    background-color: rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  @media (max-width: 767px) {
    height: 145px;
  }
`;

export const ProductMeta = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DeliveryOpt = styled.span`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  white-space: nowrap;
`;

export const Category = styled.span`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.bold', '400')};
  color: ${themeGet('colors.text.regular', '#77798c')};
`;

export const Duration = styled.span`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.white', '#ffffff')};
  background-color: ${themeGet('colors.primary.regular', '#009E7F')};
  border-radius: ${themeGet('radii.big', '18px')};
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 20px;
  padding-right: 20px;
  height: 36px;
  width: auto;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  @media (max-width: 600px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;
