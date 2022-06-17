import React, { useState } from 'react';
import Avatar from '../images/image-avatar.png';
import CloseIcon from '../images/icon-close.svg';
import Hamburger from '../images/icon-menu.svg';
import Cart from './Cart';
import 'animate.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState('hidden');

  function handleKeyboard(e) {
    if (isOpen === 'animate__animated animate__slideInLeft' && e.target.value === 'x') {
      setIsOpen('hidden');
    } else setIsOpen('animate__animated animate__slideInLeft');
  }
  function ToggleNavbar() {
    if (isOpen === 'animate__animated animate__slideInLeft') {
      setIsOpen('hidden');
    } else setIsOpen('animate__animated animate__slideInLeft');
  }
  return (
    <>
      <div className={`Navbar-collapsible ${isOpen}`}>
        <button className='Navbar-collapsible--close-icon' type='button' onClick={ToggleNavbar} onKeyDown={handleKeyboard}>
          <img src={CloseIcon} alt='close' />
        </button>
        <ul className='Navbar-collapsible--menu'>
          <li className='Navbar-collapsible--menu--item'>Collections</li>
          <li className='Navbar-collapsible--menu--item'>Men</li>
          <li className='Navbar-collapsible--menu--item'>Women</li>
          <li className='Navbar-collapsible--menu--item'>About</li>
          <li className='Navbar-collapsible--menu--item'>Contact</li>
        </ul>
      </div>
      <div className={`Nabvar-collapsible--background ${isOpen}`} />
      <div className='Navbar'>
        <div className='Navbar--spacer'>
          <button type='button' className='Navbar--Hamburger-Menu' onClick={ToggleNavbar}>
            <img
              className='Navbar--Hamburger-Menu--icon'
              src={Hamburger}
              alt='HamburgerMenu'
            />
          </button>
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
    </>
  );
}

export default Navbar;
