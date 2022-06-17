import React from 'react';
import propTypes from 'prop-types';
import ShoppingCart from '../images/icon-cart.svg';

function Cart({ itemsCount }) {
  let active = '';
  if (itemsCount === 0) {
    active = ' hidden';
  }
  return (
    <div className='Navbar--cart'>
      <p className={`Navbar--cart--items ${active}`}>{itemsCount}</p>
      <img
        className='Navbar--cart--icon'
        src={ShoppingCart}
        alt='Shopping Cart'
      />
    </div>
  );
}
Cart.propTypes = {
  itemsCount: propTypes.number.isRequired,
};

export default Cart;
