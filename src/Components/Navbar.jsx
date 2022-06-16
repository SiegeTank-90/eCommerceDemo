import React, { useState } from 'react';
import Avatar from '../images/image-avatar.png';
import HamburgerMenu from './HamburgerMenu';
import Cart from './Cart';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='Navbar'>
      <div className='Navbar--spacer'>
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} isVisible={isVisible} />
        <h1 className='Navbar--title'>sneakers</h1>
        <ul className='Navbar--menu'>
          <li className='Navbar--menu--item'>Collections</li>
          <li className='Navbar--menu--item'>Men</li>
          <li className='Navbar--menu--item'>Women</li>
          <li className='Navbar--menu--item'>About</li>
          <li className='Navbar--menu--item'>Contact</li>
        </ul>
      </div>
      <div className='Navbar--spacer'>
        <Cart itemsCount={1} />
        <div className='Navbar--avatar'>
          <img className='Navbar--avatar--icon' src={Avatar} alt='avatar' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
