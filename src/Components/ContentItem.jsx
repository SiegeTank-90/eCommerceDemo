/* eslint-disable quotes */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-indent */

import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';
import img1 from '../images/product1/image-product-1.jpg';
import img2 from '../images/product1/image-product-2.jpg';
import img3 from '../images/product1/image-product-3.jpg';
import img4 from '../images/product1/image-product-4.jpg';
import minus from '../images/icon-minus.svg';
import plus from '../images/icon-plus.svg';
import cart from '../images/icon-cart-white.svg';
import prev from '../images/icon-previous.svg';
import next from '../images/icon-next.svg';

function ContentItem({ currentImg, setCurrentImg }) {
  const imageArray = [];
  let DisplayImg = '';
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
    console.log(e.target.className);
    if (e.target.className === 'Main-Content--prev-arrow' && currentImg !== 1) {
      setCurrentImg(currentImg - 1);
    }
    if (e.target.className === 'Main-Content--next-arrow' && currentImg !== 4) {
      setCurrentImg(currentImg + 1);
    }
  }
  return (
    <div className='Main-Content'>
      <div className='Main-Content--arrow-spacer'>
         <button onClick={handlePreview} type='button' className='Main-Content--prev-arrow'><img src={prev} alt='prev arrow' /></button>
         <button onClick={handlePreview} type='button' className='Main-Content--next-arrow'><img src={next} alt='next arrow' /></button>
      </div>
      <div className='Main-Content--display'>
        <img className='Main-Content--display--image' src={DisplayImg} alt='Display' />
        <div className='Main-Content--display--thumbnails'>{imageArray}</div>
      </div>
      <div className='Main-Content--details'>
        <h2 className='Main-Content--details--brand'>SNEAKER COMPANY</h2>
        <h1 className='Main-Content--details--product-name'>Fall Limited Editions Sneakers</h1>
        <p className='Main-Content--details--description'>
            {`These low-profile sneakers are your perfect casual wear companion. Featureing a durable rubber out sole, they'll withstand everything the weather can offer.`}
        </p>
        <h1 className='Main-Content--details--price'>$125.00</h1>
        <p className='Main-Content--details--discount'> 50%</p>
        <h2 className='Main-Content--details--old-price'>$250.00</h2>
        <div className='Main-Content--Shopping'>
            <div className='Main-Content--Shopping--item-counter'>
                <button className='Main-Content--Shopping--item-counter--minus' type='button'><img src={minus} alt='-' /></button>
                <div className='Main-Content--Shopping--item-counter--count'>1</div>
                <button className='Main-Content--Shopping--item-counter--plus' type='button'><img src={plus} alt='+' /></button>
            </div>
            <button type='button' className='Main-Content--Shopping--atc-button'>
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
};

export default ContentItem;
