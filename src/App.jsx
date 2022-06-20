import './App.css';
import React, { useState } from 'react';
import ContentItem from './Components/ContentItem';
import Navbar from './Components/Navbar';
import LightBox from './Components/Lightbox';

function App() {
  const [currentImg, setCurrentImg] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className='App'>
      <LightBox currentImg={currentImg} setCurrentImg={setCurrentImg} />
      <Navbar cartItems={cartItems} setCartItems={setCartItems} />
      <ContentItem
        cartItems={cartItems}
        setCartItems={setCartItems}
        currentImg={currentImg}
        setCurrentImg={setCurrentImg}
      />
    </div>
  );
}

export default App;
