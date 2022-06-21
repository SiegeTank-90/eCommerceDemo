// eslint-disable-next-line no-unused-vars
import React from 'react';
import img1 from '../images/product1/image-product-1.jpg';
import img2 from '../images/product1/image-product-2.jpg';
import img3 from '../images/product1/image-product-3.jpg';
import img4 from '../images/product1/image-product-4.jpg';
import prev from '../images/icon-previous.svg';
import next from '../images/icon-next.svg';

function LightBox({ currentImg, setCurrentImg }) {
  let DisplayImg = img1;
  if (currentImg === 1) {
    DisplayImg = img1;
  } else if (currentImg === 2) {
    DisplayImg = img2;
  } else if (currentImg === 3) {
    DisplayImg = img3;
  } else if (currentImg === 4) {
    DisplayImg = img4;
  }

  return (
    <div className='Lightbox'>
      <div className='LightBox--prev'><img src={prev} alt='previous' /></div>
      <img className='Lightbox--img' src={DisplayImg} alt='Lightbox Shoe' />
      <div className='LightBox--mext'><img src={next} alt='next' /></div>
    </div>
  );
}

export default LightBox;
