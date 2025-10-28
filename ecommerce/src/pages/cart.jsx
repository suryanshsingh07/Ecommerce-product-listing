import React from 'react'
// css file
import './cart.css';
//components file
import Header from '../components/Home/Header';
import CartScreen from '../components/cart/cartScreen';


const Cart = () => {
  return (
    <div>
        <Header/>
        <CartScreen/>
    </div>
  )
}

export default Cart;