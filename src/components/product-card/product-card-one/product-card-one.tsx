// product card for general
import dynamic from 'next/dynamic';
import React from 'react';
import Image from 'components/image/image';
import { Button } from 'components/button/button';
import {
  ProductCardWrapper,
  ProductImageWrapper,
  ProductInfo,
  DiscountPercent,
  ButtonText,
} from '../product-card.style';
import { useCart } from 'contexts/cart/use-cart';
import { Counter } from 'components/counter/counter';
import { cartAnimation } from 'utils/cart-animation';
import { FormattedMessage } from 'react-intl';
import { CartIcon } from 'assets/icons/CartIcon';
import { useModal } from 'contexts/modal/use-modal';
import { useRouter } from 'next/router';
import Extra from 'assets/images/extra.svg';
import Speed from 'assets/images/speed.svg';
import Slow from 'assets/images/slow.svg';
const QuickViewMobile = dynamic(
  () => import('features/quick-view/quick-view-mobile')
);

type ProductCardProps = {
  title: string;
  image: any;
  weight: string;
  currency: string;
  description: string;
  price: number;
  salePrice?: number;
  discountInPercent?: number;
  data: any;
  onChange?: (e: any) => void;
  increment?: (e: any) => void;
  decrement?: (e: any) => void;
  cartProducts?: any;
  addToCart?: any;
  updateCart?: any;
  value?: any;
  deviceType?: any;
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  image,
  weight,
  price,
  salePrice,
  discountInPercent,
  cartProducts,
  addToCart,
  updateCart,
  value,
  currency,
  onChange,
  increment,
  decrement,
  data,
  deviceType,
  ...props
}) => {
  const router = useRouter();
  const [showModal, hideModal] = useModal(
    () => (
      <QuickViewMobile
        modalProps={data}
        hideModal={hideModal}
        deviceType={deviceType}
      />
    ),
    {
      onClose: () => {
        const { pathname, query, asPath } = router;
        const as = asPath;
        router.push(
          {
            pathname,
            query,
          },
          as,
          {
            shallow: true,
          }
        );
      },
    }
  );
  const { addItem, removeItem, getItem, isInCart } = useCart();
  const handleAddClick = (e) => {
    e.stopPropagation();
    addItem(data);
    if (!isInCart(data.id)) {
      cartAnimation(e);
    }
  };
  const handleRemoveClick = (e) => {
    e.stopPropagation();
    removeItem(data);
  };
  const handleQuickViewModal = () => {
    const { pathname, query } = router;
    const as = `/product/${data.slug}`;
    if (pathname === '/product/[slug]') {
      router.push(pathname, as);
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }
      return;
    }
    showModal();
    router.push(
      {
        pathname,
        query,
      },
      {
        pathname: as,
      },
      {
        shallow: true,
      }
    );
  };

  return (
    <ProductCardWrapper onClick={handleQuickViewModal} className="product-card">
      <ProductImageWrapper>
      <div className="extra" style={{background:`url(${Extra})`,backgroundRepeat:"no-repeat"}}>
        Extra 10% off
      </div>
        <Image
          url={image}
          className="product-image"
          style={{ position: 'relative' }}
          alt={title}
        />
               
        {discountInPercent ? (
          <DiscountPercent>{discountInPercent}%</DiscountPercent>
        ) : null}

      </ProductImageWrapper>
      <ProductInfo>
     
        <h3 className="product-title" style={{fontSize:'18px'}} >{title}</h3>
        <p style={{fontSize:'12px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut qui soluta mollitia cumque hic ea,</p>
        <h3 className="product-title" style={{fontSize:'16px',fontWeight:"bold",marginTop:'0px',display:"flex",justifyContent:"space-between"}} >
          {currency}
          {price}
          <span style={{color:"#909090",fontWeight:"normal",fontSize:"12px"}}>
            {currency}
            {price}
          </span>
        </h3>
      
        {/* <span className="product-weight" style={{fontSize:'12px'}}>
          {currency}
          {price}
        </span> */}
        <div className="product-meta">
          <div className="productPriceWrapper" style={{justifyContent:"center"}}>
            <div className="onhover" style={{fontSize:".8rem",textAlign:"left"}}>
                Lorem ipsum dolor sit amet
                <div className="shipping">
                  <div className="speed">
                    <img src={Speed} alt=""/>
                    <span style={{fontWeight:"bold",marginTop:"6px"}}>Speed Delivery</span>
                  </div>
                  {/* <div className="speed">
                    <span>Speed Delivery</span>
                    <img src={Slow} alt=""/>
                  </div> */}
                </div>
            </div>


            <Button
              className="hidd"
              variant="secondary"
              borderRadius={100}
              onClick={handleAddClick}
            >
               <ButtonText>
                <FormattedMessage id="addCartButtons" defaultMessage="+ Add To Cart" />
              </ButtonText>
             
            </Button>

            {/* {discountInPercent ? (
              <span className="discountedPrice">
                {currency}
                {price}
              </span>
            ) : null}

            <span className="product-price">
              {currency}
              {salePrice ? salePrice : price}
            </span> */}
          </div>

          {/* {!isInCart(data.id) ? (
            <Button
              className="cart-button"
              variant="secondary"
              borderRadius={100}
              onClick={handleAddClick}
            >
              <CartIcon mr={2} />
              <ButtonText>
                <FormattedMessage id="addCartButton" defaultMessage="Cart" />
              </ButtonText>
            </Button>
          ) : (
            <Counter
              value={getItem(data.id).quantity}
              onDecrement={handleRemoveClick}
              onIncrement={handleAddClick}
              className="card-counter"
            />
          )} */}
        </div>
      </ProductInfo>
    </ProductCardWrapper>
  );
};

export default ProductCard;
