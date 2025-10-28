import React from 'react'
import Logincard from '../components/Login/Logincard';
import "./login.css";



const login = () => {
  return (
    <div>
        <div className='login-container'>
            <Logincard/>

        </div>
    </div>
  )
}

export default login;