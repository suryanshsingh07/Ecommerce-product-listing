import React from 'react'
// css file
import './detailedProduct.css'
// component file
import Header from '../components/Home/Header';
import ProductDetailsScreen from '../components/product/ProductDetailsScreen';
import Product from '../components/Home/Product';

//recoil
import searchtextAtom from '../recoil/searchTextAtom';

const DetailedProduct = () => {

    

  return (
    <div>
        <div>
            {/* <Header/> */}
            <ProductDetailsScreen/>
        </div>
    </div>
  )
}

export default DetailedProduct;