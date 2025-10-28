import React from 'react';
// css file
import './home.css';
// component file
import Header from '../components/Home/Header';
import Categories from '../components/Home/Categories';
import Product from '../components/Home/Product';
import Footer from '../components/Home/Footer';


const Home = () => {
  return (
    <div>
        <div>
            <Header/>
            <Categories/>
            <Product/>
            <Footer/>
        </div>
    </div>
  )
}

export default Home;