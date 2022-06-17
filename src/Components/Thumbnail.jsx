import React from 'react';
import PropTypes from 'prop-types';
import img1 from '../images/product1/image-product-1-thumbnail.jpg';
import img2 from '../images/product1/image-product-2-thumbnail.jpg';
import img3 from '../images/product1/image-product-3-thumbnail.jpg';
import img4 from '../images/product1/image-product-4-thumbnail.jpg';

function Thumbnail(
  {
    index, currentImg, setCurrentImg,
  },
) {
  let activeImg = '';
  let thumb = '';
  if (index === 1) {
    thumb = img1;
  } else if (index === 2) {
    thumb = img2;
  } else if (index === 3) {
    thumb = img3;
  } else if (index === 4) {
    thumb = img4;
  }

  if (index === currentImg) {
    activeImg = 'active';
  }
  function handleClick() {
    setCurrentImg(index);
  }
  return (
    <button onClick={handleClick} type='button' className={`Main-Content--display--thumbnails--button ${activeImg}`}>
      <img src={thumb} alt='thumbnail' className={`Main-Content--display--thumbnails--image ${activeImg}`} />
    </button>
  );
}

Thumbnail.propTypes = {
  index: PropTypes.number.isRequired,
  currentImg: PropTypes.number.isRequired,
  setCurrentImg: PropTypes.elementType.isRequired,
};

export default Thumbnail;
