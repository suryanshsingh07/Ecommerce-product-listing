import React from 'react'
import { useNavigate } from 'react-router-dom';
import product from '../../pages/product'
// M U I
import CloseIcon from '@mui/icons-material/Close';
//recoil
import { useRecoilState } from 'recoil';
import cartItem from '../../recoil/cartItem';

const CartScreen = () => {
    const [cartProduct,setcartProduct] = useRecoilState(cartItem);
    const navigate = useNavigate();

    const cartProducts = product.filter((p) => cartProduct.includes(p.id));

    const totalPrice = cartProducts.reduce((acc, item) => acc + item.price, 0);


    const handleRemove = (id) => {
        setcartProduct(prev => prev.filter(itemId => itemId !== id));
    };

     const handleShopClick = () => {
        navigate('/'); 
    };

  return (
    <div className='cart-main-container'>
        {cartProducts.length > 0 ? (
        cartProducts.map((item) => (
            <div className='cart-product-container' key={item.id}>
                <div className='cart-detail-container'>
                    <div className='cart-media'>
                        <div className='cart-image'>
                        <img src={item.image} alt={item.name} height={100}/>
                        </div>
                    </div>
                    <div className='cart-product-details'>
                        <h3 className='cart-product-name'>{item.name}</h3>
                        <p className='cart-product-price'>₹ {item.price}</p>
                        <p className='cart-product-category'>{item.category}</p>
                    </div>
                    <div className='cart-del-icon'>
                        <i onClick={() => handleRemove(item.id)}>
                            <CloseIcon />
                        </i>
                    </div>
                </div>
            </div>

            ))
            ) : (
                <div className='empty-cart-container'>
                    <img src='images/assests/empty_cart.png' alt='Empty Cart' width={300}/>
                    <h3>Your cart is empty!</h3>
                    <h5>Add items to it now.</h5>
                    <button className='start-shoping-container' onClick={handleShopClick}>
                        <p>Shop Now</p>
                    </button>
                </div>
            )}
        {cartProducts.length > 0 && (
            <div className='place-order-container'>
                 <div className='total-price'>
                    <h4>Total Amount: ₹ {totalPrice}</h4>
                </div>
                <button onClick={() => alert("This service is currently unavailable")}>
                    PLACE ORDER
                </button>
            </div>
        )}
    </div>
  )
}

export default CartScreen;