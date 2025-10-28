import React from 'react'
// css file
import './wishlist.css';
//components file
import Header from '../components/Home/Header';
import WishlistScreen from '../components/wishlist/WishlistScreen';

const Wishlist = () => {
  return (
    <div>
        <Header/>
        <WishlistScreen/>
    </div>
  )
}

export default Wishlist;