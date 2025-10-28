import React, { useState } from 'react'
import product from '../../pages/product';
//recoil js
import { useRecoilState } from 'recoil';
import activateFilter from '../../recoil/activateFilter';

const Categories = () => {
  const [activeFilter, setactiveFilter] = useRecoilState(activateFilter);


  return (
    <div className='main-category-container'>
      <div onClick={() => setactiveFilter('')}>
        <button>
          <img src='images/categorey/All.png' alt='All' height={50} />
          <h5>All itmes</h5>
        </button>
      </div>
      <div onClick={()=> setactiveFilter('Accessories')}>
        <button className={`${activeFilter === 'Accessories' ? 'active-filter' : ""}`}>
          <img src='images/categorey/Accessories.png' alt='Accessories' height={50}/>
          <h5>Accessories</h5>
        </button>
      </div>
      <div onClick={()=> setactiveFilter('Electronics')}>
        <button className={`${activeFilter === 'Electronics' ? 'active-filter' : ""}`}>
          <img src='images/categorey/Electronics.png' alt='Electronics' height={50}/>
          <h5>Electronics</h5>
        </button>
      </div>
      <div onClick={()=> setactiveFilter('Clothing')}>
        <button className={`${activeFilter === 'Clothing' ? 'active-filter' : ""}`}>
          <img src='images/categorey/Clothing.png' alt='Clothing' height={50}/>
          <h5>Clothing</h5>
        </button>
      </div>
      <div onClick={()=> setactiveFilter('Appliances')}>
        <button className={`${activeFilter === 'Appliances' ? 'active-filter' : ""}`}>
          <img src='images/categorey/Appliances.png' alt='Appliances' height={50}/>
          <h5>Appliances</h5>
        </button>
      </div>
      <div onClick={()=> setactiveFilter('Grocery')}>
        <button className={`${activeFilter === 'Grocery' ? 'active-filter' : ""}`}>
          <img src='images/categorey/Grocery.png' alt='Grocery' height={50}/>
          <h5>Grocery</h5>
        </button>
      </div>
      <div onClick={()=> setactiveFilter('Mobiles')}>
        <button className={`${activeFilter === 'Mobiles' ? 'active-filter' : ""}`}>
          <img src='images/categorey/Mobiles.png' alt='Mobiles' height={50}/>
          <h5>Mobiles</h5>
        </button>
      </div>
      <div onClick={()=> setactiveFilter('Furniture')}>
        <button className={`${activeFilter === 'Furniture' ? 'active-filter' : ""}`}>
          <img src='images/categorey/Furniture.png' alt='Furniture' height={50}/>
          <h5>Furniture</h5>
        </button>
      </div>
    </div>
  )
};

export default Categories;