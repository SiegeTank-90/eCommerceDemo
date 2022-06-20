import React, { useState } from 'react';
import ShoppingCart from '../images/icon-cart.svg';
import Delete from '../images/icon-delete.svg';

function Cart({ cartItems, setCartItems }) {
  const [displayCart, setDisplayCart] = useState('');
  const items = [];
  let totalitems = 0;
  function Deleteitem(i) {
    const cartItemsClone = [...cartItems];
    cartItemsClone.splice(i, 1);
    setCartItems(cartItemsClone);
  }

  function BuildCart() {
    if (totalitems !== 0) {
      for (let i = 0; i < cartItems.length; i += 1) {
        const totalprice = (cartItems[i].price * cartItems[i].itemCount).toFixed(2);
        items.push(
          <div className='cart--item'>
            <div className='cart--item--image'><img src={cartItems[i].photo} alt='thumbnail' /></div>
            <div className='cart--item--details'>
              <h3 className='cart--item--details-title'>{cartItems[i].name}</h3>
              <p className='cart--item--price'>
                {`$${cartItems[i].price.toFixed(2)} x ${cartItems[i].itemCount}`}
                <span className='cart--item--total'>{` = $${totalprice}`}</span>
              </p>
            </div>
            <button type='button' onClick={() => Deleteitem(i)} className='cart--item--delete'><img src={Delete} alt='trashcan' /></button>
          </div>,
        );
      }
      items.push(<button type='button' className='cart--checkout-button'> Checkout </button>);
    } else {
      items.push(<h3 className='Navbar--cart-activeItems--empty'>Your cart is empty.</h3>);
    }
  }

  for (let i = 0; i < cartItems.length; i += 1) {
    totalitems += cartItems[i].itemCount;
  }
  let active = '';
  if (totalitems === 0) {
    active = ' hidden';
  }
  function OpenCart() {
    if (displayCart === '') {
      setDisplayCart('hidden');
    } else setDisplayCart('');
  }
  BuildCart();
  return (
    <>
      <button type='button' onClick={OpenCart} className='Navbar--cart'>
        <p className={`Navbar--cart--itemsCount ${active}`}>{totalitems}</p>
        <img
          className='Navbar--cart--icon'
          src={ShoppingCart}
          alt='Shopping Cart'
        />
      </button>
      <div className={`Navbar--cart-activeItems ${displayCart}`}>
        <h2 className='Navbar--cart-activeItems--header'>Cart</h2>
        <ul className='Navbar--cart-activeItems--list'>
          {items}
        </ul>
      </div>
    </>

  );
}

export default Cart;
