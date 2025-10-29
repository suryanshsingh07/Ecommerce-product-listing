import { Routes, Route, Navigate} from "react-router-dom";
import { useEffect} from "react";

// product file
import product from "./pages/product";

// pages
import Home from "./pages/home";
import DetailedProduct from "./pages/detailedProduct";
import Wishlist from "./pages/wishlist";
import Cart from "./pages/cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


// recoil
import { useRecoilState } from "recoil";
import wishListBox from './recoil/wishListBox';
import productViewStatus from './recoil/productViewStatus';
import cartItemStatus from "./recoil/cartItemStatus";
import userinfoAtom from "./recoil/userinfoAtom";
import userSignAtom from "./recoil/userSignAtom";


function App() {
  const [wishlistStatus, setwishlistStatus] = useRecoilState(wishListBox);
  const [productStatus, setproductStatus] = useRecoilState(productViewStatus);
  const [cartStatus, setcartStatus] = useRecoilState(cartItemStatus);
  const [userInfo,setUserInfo]=useRecoilState(userinfoAtom);
  const [userSignup,setUserSignup]=useRecoilState(userSignAtom);
  


  // const productItem = product;
  // console.log(selectProduct);
  // console.log(productItem[selectProduct].id);
  // console.log(product[selectProduct-1].id);
  // console.log(userStatus);
  // useEffect(()=>{
  //   if (product[selectProduct-1].id !== selectProduct){
  //     setselectProduct(1);
  //     console.log(selectProduct);
  //   }
  // },[selectProduct]
  // console.log(productStatus);
  

  return (
    <div>  
       <Routes>
          <Route path="/Ecommerce-product-listing" element={ <Home />} />
          <Route path="/product" element={  productStatus ? <DetailedProduct /> : <Navigate to="/"/> } />
          <Route path="/wishlist" element={ wishlistStatus ? <Wishlist/> : <Navigate to="/"/> }/>
          <Route path="/cart" element={ cartStatus ? <Cart/> : <Navigate to="/"/>  }/>
          <Route path="/login" element={ userInfo ? <Login/> : <Navigate to="/"/>  }/>
          <Route path="/signup" element={ userSignup ? <Signup/> : <Navigate to="/"/>  }/>
       </Routes>
    </div>
  );
}

export default App;
