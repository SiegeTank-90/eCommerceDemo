import React from "react";
import propTypes from "prop-types";
import ShoppingCart from "../images/icon-cart.svg";

function Cart({ itemsCount, active }) {
  return (
    <div className="Navbar--cart">
      <p className="Navbar--cart--items">{itemsCount}</p>
      <img
        className="Navbar--cart--icon" 
        src={ShoppingCart}
        alt="Shopping Cart"
      />
    </div>
  );
}

Cart.propTypes = {
  itemsCount: propTypes.number.isRequired,
  active: propTypes.bool.isRequired
};

export default Cart;
