import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import product from '../../pages/product';
// M U I
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplyIcon from '@mui/icons-material/Reply';
import BoltIcon from '@mui/icons-material/Bolt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//recoil
import { useRecoilState } from 'recoil';
import wishListitem from '../../recoil/wishListitem';
import productView from '../../recoil/productView';
import wishListBox from '../../recoil/wishListBox';
import cartItem from '../../recoil/cartItem';
import cartItemStatus from '../../recoil/cartItemStatus';


const ProductDetailsScreen = () => {
    const [likedItems, setLikedItems] = useRecoilState(wishListitem);
    const [selectProduct, setselectProduct] = useRecoilState(productView);
    const [wishlistStatus, setwishlistStatus] = useRecoilState(wishListBox);
    const [cartProduct, setcartProduct] = useRecoilState(cartItem);
    const [cartStatus, setcartStatus] = useRecoilState(cartItemStatus);
    const navigate = useNavigate();

    useEffect(() => {
        setwishlistStatus(false);
    }, []);

    const handleCartClick = () => {
        setcartStatus(true);
        navigate('/cart'); 
    };

    const toggleCart = (id) => {
        setcartProduct(prev => {
            if (!prev.includes(id)) {
            return [...prev, id];
            }
            return prev;
        });
    };

    const toggleLike = (id) => {
        setLikedItems(prev =>
        prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

  return (
    <div className='product-item-main-container'>
        <div className='product-item-container' key={product[selectProduct-1].id}>
            <div className='icon-wrapper'>
                <div className='favoutire-icon' onClick={() => toggleLike(product[selectProduct-1].id)}>
                    {likedItems.includes(product[selectProduct-1].id)
                    ? <FavoriteIcon style={{ color: 'red' }} />
                    : <FavoriteBorderIcon style={{ color: 'gray' }} />}
                    <p>Wishlist</p>
                </div>
                <div className='share-icon' onClick={() => alert("This service is currently unavailable")}>
                    <ReplyIcon style={{ transform: 'scaleX(-1)', color: 'GrayText', cursor: 'pointer' }}/>
                    <p>Share</p>
                </div>
            </div>
            <div className='product-detail-container'>
                <div className='product-media'>
                    <div className='image'>
                        <img src={product[selectProduct-1].image} alt={product[selectProduct-1].name} width={370}/>
                    </div>
                    <div className='shopping-buttons'>
                        <button className='cart-button'  onClick={() => {
                            toggleCart(product[selectProduct-1].id);
                            handleCartClick()}}>
                            <ShoppingCartIcon/> 
                            <p>ADD TO CART</p>
                        </button>
                        <button className='buy-button' onClick={() => alert("This service is currently unavailable")}>
                            <BoltIcon/> 
                            <p>BUY NOW</p>
                        </button>
                    </div>
                </div>
                <div className='product-details'>
                    <h3>{product[selectProduct-1].name}</h3>
                    <p className='price'>₹ {product[selectProduct-1].price}</p>
                    <p className='category'>{product[selectProduct-1].category}</p>
                    <p><i> General Details</i></p>
                    <p className='detail'>{product[selectProduct-1].details}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetailsScreen;