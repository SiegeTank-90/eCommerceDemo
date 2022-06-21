import './App.css';
import React, { useState } from 'react';
import ContentItem from './Components/ContentItem';
import Navbar from './Components/Navbar';
import LightBox from './Components/Lightbox';

function App() {
  const [currentImg, setCurrentImg] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [isLightboxVisible, setIsLightboxVisible] = useState(false);

  return (
    <>
      <LightBox
        currentImg={currentImg}
        setCurrentImg={setCurrentImg}
        isLightboxVisible={isLightboxVisible}
        setIsLightboxVisible={setIsLightboxVisible}
      />
      <div className='App'>
        <Navbar cartItems={cartItems} setCartItems={setCartItems} />
        <ContentItem
          cartItems={cartItems}
          setCartItems={setCartItems}
          currentImg={currentImg}
          setCurrentImg={setCurrentImg}
          setIsLightboxVisible={setIsLightboxVisible}
        />
      </div>
    </>
  );
}

export default App;
