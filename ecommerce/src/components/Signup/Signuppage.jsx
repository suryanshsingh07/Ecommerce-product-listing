import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import userSignAtom from "../../recoil/userSignAtom";

const Signuppage = () => {
  const [userSignup, setUserSignup] = useRecoilState(userSignAtom);

  // Local state for form step and inputs
  const [step, setStep] = useState(1);
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setemail] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [username, setUsername] = useState('');
  const [Address, setAddress] = useState('');
  const [pinCode, setpinCode] = useState('');
  const [password, setPassword] = useState('');
  const [verifypassword, setverifyPassword] = useState('');

  const handleNext1 = (e) => {
    e.preventDefault();
    if(mobileNumber.length>=10 && email.length>=11) {
      setStep(2);
    }else{
      alert("Please enter a valid mobile number or Email address.");
    }
  };
  const handleNext2 = (e) => {
    e.preventDefault();
    if(firstname.length>0 && lastname.length>0) {
      setStep(3);
    }else{
      alert("Please enter a valid Name.");
    }
  };
  const handleNext3 = (e) => {
    e.preventDefault();
    if(Address.length>0 && pinCode.length == 6) {
      setStep(4);
    }else{
      alert("Please enter a valid Address or PIN Code.");
    }
  };
  const handleSignup = (e) => {
    e.preventDefault();
    if(username.length>0 && password === verifypassword) {
      alert("This service is currently unavailable");
    }else{
      alert("Please enter a valid Username or Password.");
    }
  };

  return (
    <div>
      <div className='login-card-container'>
        <div>
          <div className="title1">
            <img src="images/logo/logo.png" alt="logo" height="40"/>
            <h1>MyShop</h1>
          </div>
          <h3 className="title2">Sign Up</h3>
        </div>
        
        <form>
          {step === 1 && (
            <>
                <input className="login-input" type="tel" placeholder="Enter Mobile Number" value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}/>
                <br/>
                <input className="login-input" type="text" placeholder="Enter Email Address" value={email}
                    onChange={(e) => setemail(e.target.value)}/> 
                <br/>
                <button className="login-button" onClick={handleNext1}>Next</button>
            </>
          )}
          {step === 2 && (
            <>
                <input className="login-input" type="text" placeholder=" Enter First Name" value={firstname}
                    onChange={(e) => setfirstname(e.target.value)}/>
                <br/>
                <input className="login-input" type="text" placeholder="Enter Last Name" value={lastname}
                    onChange={(e) => setlastname(e.target.value)}/>
                <br/>
                <button className="login-button" onClick={handleNext2}>Next</button>
            </>
          )}
          {step === 3 && (
            <>
                <input className="login-input" type="text" placeholder=" Enter Address" value={Address}
                    onChange={(e) => setAddress(e.target.value)}/>
                <br/>
                <input className="login-input" type="number" placeholder=" Enter PIN Code" value={pinCode}
                    onChange={(e) => setpinCode(e.target.value)}/>
                <br/>
                <button className="login-button" onClick={handleNext3}>Next</button>
            </>
          )}
          {step === 4 && (
            <>
                <input className="login-input" type="text" placeholder="Enter Username" value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                <br/>
                <input className="login-input" type="text" placeholder="Enter Password" value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                <br/>
                <input className="login-input" type="password" placeholder="Re-Enter Password" value={verifypassword}
                    onChange={(e) => setverifyPassword(e.target.value)}/>
                <br/>
                <button className="login-button" onClick={handleSignup}>Sign Up</button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signuppage;
