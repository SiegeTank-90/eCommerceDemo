/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable quotes */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-indent */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';
import defaultImg from '../images/product1/image-product-1-thumbnail.jpg';
import img1 from '../images/product1/image-product-1.jpg';
import img2 from '../images/product1/image-product-2.jpg';
import img3 from '../images/product1/image-product-3.jpg';
import img4 from '../images/product1/image-product-4.jpg';
import minus from '../images/icon-minus.svg';
import plus from '../images/icon-plus.svg';
import cart from '../images/icon-cart-white.svg';
import prev from '../images/icon-previous.svg';
import next from '../images/icon-next.svg';

function ContentItem({
  currentImg,
  setCurrentImg,
  cartItems,
  setCartItems,
  setIsLightboxVisible,
}) {
  const imageArray = [];
  let item = {
    photo: defaultImg,
    brand: 'SNEAKER COMPANY',
    name: 'Fall Limited Editions Sneakers',
    desc: `These low-profile sneakers are your perfect casual wear companion. Featureing a durable rubber out sole, they'll withstand everything the weather can offer.`,
    price: 125,
    discount: '50%',
    orgPrice: '$250.00',
    // eslint-disable-next-line comma-dangle
    itemCount: 0
  };
  let DisplayImg = '';

  const [itemCounter, setItemCounter] = useState(1);
  function incrementItemCounter(e) {
    if (e.target.closest('button').className === 'Main-Content--Shopping--item-counter--plus') {
      setItemCounter(itemCounter + 1);
    } else if (e.target.closest('button').className === 'Main-Content--Shopping--item-counter--minus' && itemCounter > 1) {
      setItemCounter(itemCounter - 1);
    }
  }
  function addToCart() {
    item = { ...item, itemCount: itemCounter };
    setCartItems(cartItems = [...cartItems, item]);
    setItemCounter(1);
  }
  function ThumbnailsBuilder() {
    for (let i = 1; i < 5; i += 1) {
      imageArray.push(<Thumbnail
        index={i}
        currentImg={currentImg}
        setCurrentImg={setCurrentImg}
      />);
    }
    if (currentImg === 1) {
      DisplayImg = img1;
    } else if (currentImg === 2) {
      DisplayImg = img2;
    } else if (currentImg === 3) {
      DisplayImg = img3;
    } else if (currentImg === 4) {
      DisplayImg = img4;
    }
  }
  ThumbnailsBuilder();
  function handlePreview(e) {
    if (e.target.closest('button').className === 'Main-Content--prev-arrow' && currentImg !== 1) {
      setCurrentImg(currentImg - 1);
      if (currentImg < 1) {
        setCurrentImg(1);
      }
    }
    if (e.target.closest('button').className === 'Main-Content--next-arrow' && currentImg !== 4) {
      setCurrentImg(currentImg + 1);
      if (currentImg > 4) {
        setCurrentImg(4);
      }
    }
  }
  function handleLightbox() {
    const { innerWidth: width } = window;
    if (width > 1000) {
      setIsLightboxVisible(true);
    }
  }

  return (

    <div className='Main-Content'>
      <div className='Main-Content--arrow-spacer'>
        <button onClick={handlePreview} type='button' className='Main-Content--prev-arrow'><img src={prev} alt='prev arrow' /></button>
        <button onClick={handlePreview} type='button' className='Main-Content--next-arrow'><img src={next} alt='next arrow' /></button>
      </div>
      <div className='Main-Content--display'>
        <img onClick={handleLightbox} onKeyDown={handleLightbox} className='Main-Content--display--image' src={DisplayImg} alt='Display' />
        <div className='Main-Content--display--thumbnails'>{imageArray}</div>
      </div>
      <div className='Main-Content--details'>
        <h2 className='Main-Content--details--brand'>{item.brand}</h2>
        <h1 className='Main-Content--details--product-name'>{item.name}</h1>
        <p className='Main-Content--details--description'>{item.desc}</p>
        <h1 className='Main-Content--details--price'>{`$${item.price.toFixed(2)}`}</h1>
        <p className='Main-Content--details--discount'>{item.discount}</p>
        <h2 className='Main-Content--details--old-price'>{item.orgPrice}</h2>
        <div className='Main-Content--Shopping'>
          <div className='Main-Content--Shopping--item-counter'>
            <button onClick={incrementItemCounter} className='Main-Content--Shopping--item-counter--minus' type='button'><img className='minus' src={minus} alt='-' /></button>
            <div className='Main-Content--Shopping--item-counter--count'>{itemCounter}</div>
            <button onClick={incrementItemCounter} className='Main-Content--Shopping--item-counter--plus' type='button'><img className='plus' src={plus} alt='+' /></button>
          </div>
          <button onClick={addToCart} type='button' className='Main-Content--Shopping--atc-button'>
            <img className='Main-Content--Shopping--atc-button--cart' src={cart} alt='cart' />
            <span className='Main-Content--Shopping--atc-button--text'>Add to cart</span>
          </button>
        </div>

      </div>
    </div>
  );
}
ContentItem.propTypes = {
  currentImg: PropTypes.number.isRequired,
  setCurrentImg: PropTypes.elementType.isRequired,
  setCartItems: PropTypes.elementType.isRequired,
  cartItems: PropTypes.array.isRequired,
};

export default ContentItem;
