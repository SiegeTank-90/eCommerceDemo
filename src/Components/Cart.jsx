import React from 'react';
import ShoppingCart from '../images/icon-cart.svg';

function Cart(props) {
  return (
    <div className='Navbar--cart'>
      <p className='Navbar--cart--items'>{props.itemsCount}</p>
      <img clasName='Navbar--cart--icon' src={ShoppingCart} alt='Shopping Cart' />
    </div>
  );
}

export default Cart;
