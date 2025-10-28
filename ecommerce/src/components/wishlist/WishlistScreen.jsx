import React, { useEffect } from 'react'
import product from '../../pages/product'
// M U I
import DeleteIcon from '@mui/icons-material/Delete';
//recoil
import { useRecoilState } from 'recoil';
import wishListitem from '../../recoil/wishListitem';

const WishlistScreen = () => {
    const [likedItems, setLikedItems] = useRecoilState(wishListitem);

    const likedProducts = product.filter((p) => likedItems.includes(p.id));

    const handleRemove = (id) => {
        setLikedItems(prev => prev.filter(itemId => itemId !== id));
    };

  return (
    <div className='wishlist-main-container'>
        <div className='wishlist-header-container'>
            <h2>My Wishlist ({likedItems.length})</h2>
        </div>
        <hr/>
        {likedProducts.length > 0 ? (
        likedProducts.map((item) => (
            <div className='wishlist-product-container' key={item.id}>
                <div className='wishlist-detail-container'>
                    <div className='wishlist-media'>
                        <div className='wishlist-image'>
                        <img src={item.image} alt={item.name} height={100}/>
                        </div>
                    </div>
                    <div className='wishlist-product-details'>
                        <h3 className='wishlist-product-name'>{item.name}</h3>
                        <p className='wishlist-product-price'>₹ {item.price}</p>
                        <p className='wishlist-product-category'>{item.category}</p>
                    </div>
                    <div className='wishlist-del-icon'>
                        <i onClick={() => handleRemove(item.id)}>
                            <DeleteIcon />
                        </i>
                    </div>
                </div>
                <hr/>
            </div>
            ))
            ) : (
                <div className='empty-wishlist-container'>
                    <img src='images/assests/empty_wishlist.png' alt='Empty Wishlist'/>
                    <h3>Empty Wishlist</h3>
                    <h5>You have no items in your wishlist. Start adding!</h5>
                </div>
            )}
    </div>
  )
}

export default WishlistScreen;