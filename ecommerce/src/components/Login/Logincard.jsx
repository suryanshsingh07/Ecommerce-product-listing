import React, { useState } from 'react';

// recoil js
import { useRecoilState } from 'recoil';
import userinfoAtom from "../../recoil/userinfoAtom";


const Logincard = () => {
//global variables
  const [userInfo,setUserInfo]=useRecoilState(userinfoAtom);
  const [username, setUsername] = useState('');

  return (
    <div> 
        <div className='login-card-container'>
          <div>
            <div className="title1">
              <img src="images/logo/logo.png" alt="logo" height="40"/>
              <h1>MyShop</h1>
            </div>
            <h3 className="title2">Log in</h3>
          </div>
          <form>
            <input className="login-input" type="text" placeholder="Enter Username" />
            <br></br>
            <input className="login-input" type="password" placeholder="Enter Password" />
            <br></br>
            <button className="login-button" type="submit" onClick={() => alert("This service is currently unavailable")}>
              Login
            </button>
          </form>
        </div>
    </div>
  )
}

export default Logincard;