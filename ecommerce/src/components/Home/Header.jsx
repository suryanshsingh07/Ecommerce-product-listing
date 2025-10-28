import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// M U I
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import InventoryIcon from '@mui/icons-material/Inventory';
import MovingIcon from '@mui/icons-material/Moving';
import CardGiftcardTwoToneIcon from '@mui/icons-material/CardGiftcardTwoTone';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LogoutIcon from '@mui/icons-material/Logout';
// recoil
import { useRecoilState } from 'recoil';
import searchtextAtom from '../../recoil/searchTextAtom';
import wishListBox from '../../recoil/wishListBox';
import cartItemStatus from '../../recoil/cartItemStatus';

const Header = () => {
  const [inputData, setinputData] = useRecoilState(searchtextAtom);
  const [wishlistStatus, setwishlistStatus] = useRecoilState(wishListBox);
  const [cartStatus, setcartStatus] = useRecoilState(cartItemStatus);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleCartClick = () => {
    setcartStatus(true);
    navigate('/cart'); 
  };

  const handleWishlistClick = () => {
    setwishlistStatus(true);
    navigate('/wishlist'); 
  };
  
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const handleMenuItemClick = (path) => {
    setShowDropdown(false);
    navigate(path);
  };
  useEffect(() => {
  function handleClickOutside(event) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  }

  if (showDropdown) {
    document.addEventListener('mousedown', handleClickOutside);
  } else {
    document.removeEventListener('mousedown', handleClickOutside);
  }

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [showDropdown]);

  
  return (
    <div className='home-header-container'>
        <div className='header-logo-text'>
            <img src="images/logo/logo.png" alt="logo" height="40"/>
            <h1>MyShop</h1>
        </div>
        <div className='search-container'>
            <SearchIcon/>
            <input type="text" placeholder='Search for itmes on MyShop . . . . .' className='search-input' value={inputData}
            onChange={(e) => setinputData(e.target.value)}/>
        </div>
        <div className='wishlist-container' onClick={handleWishlistClick}>
          <FavoriteBorderIcon />
          <h3>Wishlist</h3>
        </div>
        <div className='cart-container' onClick={handleCartClick}>
          <ShoppingCartOutlinedIcon />
          <h3>Cart</h3>
        </div>
        <div className='profile-container'>
          <PersonOutlineOutlinedIcon/>
          <h3>Profile</h3>
        </div>
        <div className='three-dot-icon' onClick={toggleDropdown} ref={dropdownRef}>
        <MoreVertOutlinedIcon />
        {showDropdown && (
          <div className='dropdown-menu'>
            <div onClick={() => handleMenuItemClick('/notifications')}>
              <NotificationsNoneOutlinedIcon/>
              Notification
            </div>
            <div onClick={() => handleMenuItemClick('/coupons')}>
              <LocalOfferIcon/>
              Coupon
            </div>
            <div onClick={() => handleMenuItemClick('/orders')}>
              <InventoryIcon/>
              My Orders
            </div>
            <div onClick={() => handleMenuItemClick('/advertise')}>
              <MovingIcon/>
              Advertise
            </div>
            <div onClick={() => handleMenuItemClick('/giftcards')}>
              <CardGiftcardTwoToneIcon/>
              Gift Card
            </div>
            <div onClick={() => handleMenuItemClick('/support')}>
              <SupportAgentIcon/>
              Customer Support
            </div>
            <div onClick={() => handleMenuItemClick('/logout')}>
              <LogoutIcon/>
              Log Out
            </div>
          </div>
        )}
      </div>
    </div>
  )
};

export default Header;