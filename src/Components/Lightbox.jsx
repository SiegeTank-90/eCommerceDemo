// eslint-disable-next-line no-unused-vars
import React, { useRef, useState, useEffect } from 'react';
import img1 from '../images/product1/image-product-1.jpg';
import img2 from '../images/product1/image-product-2.jpg';
import img3 from '../images/product1/image-product-3.jpg';
import img4 from '../images/product1/image-product-4.jpg';
import prev from '../images/icon-previous.svg';
import next from '../images/icon-next.svg';

function LightBox({
  isLightboxVisible,
  setIsLightboxVisible,
  currentImg,
  setCurrentImg,
}) {
  const LightboxRef = useRef();

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

  function handlePreview(e) {
    if (e.target.closest('button').className === 'LightBox--prev' && currentImg !== 1) {
      setCurrentImg(currentImg - 1);
    } else if (e.target.closest('button').className === 'LightBox--next' && currentImg !== 4) {
      setCurrentImg(currentImg + 1);
    }
  }
  function ClickOutside(e) {
    if (!LightboxRef.current || !LightboxRef.current.contains(e.target)) {
      setIsLightboxVisible(false);
    }
  }

  return (
    <div>
      {isLightboxVisible ? (
        <div role='button' tabIndex={0} onClick={ClickOutside} onKeyDown={ClickOutside} className='Lightbox'>
          <div ref={LightboxRef} type='button' className='Lightbox--content'>
            <div className='LightBox--arrows'>
              <button type='button' onClick={handlePreview} className='LightBox--prev'><img src={prev} alt='previous' /></button>
              <button type='button' onClick={handlePreview} className='LightBox--next'><img src={next} alt='next' /></button>
            </div>
            <img className='Lightbox--img' src={DisplayImg} alt='Lightbox Shoe' />
          </div>
        </div>
      )
        : (null)}
    </div>
  );
}

export default LightBox;
