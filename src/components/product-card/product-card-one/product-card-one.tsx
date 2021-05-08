// product card for general
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
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
import Discount from 'assets/images/newimages/discount.svg';
import Speed from 'assets/images/newimages/speed.svg';
import { CartButton } from '../product-card-five/product-card-five.style';
import { PlusOutline } from 'assets/icons/PlusOutline';
import ADS from 'assets/images/newimages/ads.jpg';

const QuickViewMobile = dynamic(() =>
  import('features/quick-view/quick-view-mobile')
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
  ads?:boolean,
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
  description,
  discountInPercent,
  cartProducts,
  addToCart,
  updateCart,
  value,
  ads,
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
  const { addItem, removeItem, getItem, isInCart, items } = useCart();
  const [show,setShow] = useState(false)
  const handleAddClick = (e) => {
    setShow(true);
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
      {ads?(
        <>
          <div className="ads" style={{background:`url(${ADS})`}}></div>
          <ProductImageWrapper style={{opacity:"0"}}>
        <Image
          url={image}
          className="product-image"
          style={{ position: 'relative' }}
          alt={title}
        />
        {discountInPercent ? (
          <DiscountPercent style={{transform:"rotateY(180deg)",background:`url(${Discount})`,backgroundRepeat:"no-repeat"}}><span>{discountInPercent}%</span></DiscountPercent>
        ) : null}
      </ProductImageWrapper>
         <ProductInfo style={{opacity:"0"}}>
            <h3 className="product-title">{title}</h3>
            <p className="descriptions">{description}</p>
            <div className="productPriceWrapper">
                <span className="product-price">
                  {currency}
                  {salePrice ? salePrice : price}
                </span>
                {discountInPercent ? (
                  <span className="discountedPrice">
                    {currency}
                    {price}
                  </span>
                ) : null}
              </div>
            
                <div className={isInCart(data?.id) ? "before-hover" :"show before-hover" }>
                  <p className="order-time">تصلك يوم الثلاثاء 20-05 </p>
                  <div className="speed">
                    <img width="30" src={Speed} alt=""/>
                      توصيل سريع
                  </div>
                </div>
              
            {/* <span className="product-weight">{weight}</span> */}
            <div className="mobile-cart">
              <CartButton  className={!isInCart(data?.id) ?"cart-button": "hidden-btn cart-button"} onClick={handleAddClick}>
                <PlusOutline />
              </CartButton>
              {isInCart(data.id)?(
                <Counter
                className={!isInCart(data?.id) ?"hide":"show"}
                value={getItem(data?.id).quantity}
                onDecrement={handleRemoveClick}
                onIncrement={handleAddClick}
                />
                ):""}
            </div>
            <div className="product-meta">
              {!isInCart(data.id) ? (
                <Button
                  className="cart-button"
                  variant="secondary"
                  borderRadius={100}
                  onClick={handleAddClick}
                >
                
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
              )}
            </div>
          </ProductInfo>
        </>
      ):(
        <>
         <ProductImageWrapper>
        <Image
          url={image}
          className="product-image"
          style={{ position: 'relative' }}
          alt={title}
        />
        {discountInPercent ? (
          <DiscountPercent style={{transform:"rotateY(180deg)",background:`url(${Discount})`,backgroundRepeat:"no-repeat"}}><span>{discountInPercent}%</span></DiscountPercent>
        ) : null}
      </ProductImageWrapper>
         <ProductInfo>
            <h3 className="product-title">{title}</h3>
            <p className="descriptions">{description}</p>
            <div className="productPriceWrapper">
                <span className="product-price">
                  {currency}
                  {salePrice ? salePrice : price}
                </span>
                {discountInPercent ? (
                  <span className="discountedPrice">
                    {currency}
                    {price}
                  </span>
                ) : null}
              </div>
            
                <div className={isInCart(data?.id) ? "before-hover" :"show before-hover" }>
                  <p className="order-time">تصلك يوم الثلاثاء 20-05 </p>
                  <div className="speed">
                    <img width="30" src={Speed} alt=""/>
                      توصيل سريع
                  </div>
                </div>
              
            {/* <span className="product-weight">{weight}</span> */}
            <div className="mobile-cart">
              <CartButton  className={!isInCart(data?.id) ?"cart-button": "hidden-btn cart-button"} onClick={handleAddClick}>
                <PlusOutline />
              </CartButton>
              {isInCart(data.id)?(
                <Counter
                className={!isInCart(data?.id) ?"hide":"show"}
                value={getItem(data?.id).quantity}
                onDecrement={handleRemoveClick}
                onIncrement={handleAddClick}
                />
                ):""}
            </div>
            <div className="product-meta">
              {!isInCart(data.id) ? (
                <Button
                  className="cart-button"
                  variant="secondary"
                  borderRadius={100}
                  onClick={handleAddClick}
                >
                
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
              )}
            </div>
          </ProductInfo>
        </>
      )}
     </ProductCardWrapper>
  );
};

export default ProductCard;
