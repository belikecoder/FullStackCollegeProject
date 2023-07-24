import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Components/regis.css'
import regimg from '../Components//images/regiimg.jpg'

export default function Register() {
  const[id,setId]=useState('');
  const [fName, setFName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValidFName, setIsValidFName] = useState(true);
  const [isValidAddress, setIsValidAddress] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);
   const navigate = useNavigate();

  const handleFNameChange = (e) => {
    setFName(e.target.value);
    setIsValidFName(true);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    setIsValidAddress(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(true);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsValidPassword(true);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setIsValidConfirmPassword(true);
  };

  const validateForm = () => {
    let isValid = true;
    if (fName.trim() === '') {
      setIsValidFName(false);
      isValid = false;
    }
    if (address.trim() === '') {
      setIsValidAddress(false);
      isValid = false;
    }
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
      setIsValidEmail(false);
      isValid = false;
    }
    if (password.length < 8) {
      setIsValidPassword(false);
      isValid = false;
    }
    if (confirmPassword !== password) {
      setIsValidConfirmPassword(false);
      isValid = false;
    }

    return isValid;
  };

  async function handleSubmit  (e) {
    e.preventDefault();

    if (validateForm()) {
         
  
          
  try
  {
    
     
    
   await axios.post("http://localhost:8080/register/save",
  {
  
  userName:fName,
  address : address,
  email:email,
  mPassword:password,
  cPassword:confirmPassword

  });
  alert("Registration is SucessFull");
    setId("");
    setFName("");
    setAddress("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    
      localStorage.setItem('name', email);
      localStorage.setItem('pw', password);
      navigate('/form');

  
   
  
}

catch(err)
  {
    alert("User Registation Failed");
  }
  

 

}

  };

  const fNameInputStyle = {
    borderColor: isValidFName ? 'green' : 'red'
  };


  const emailInputStyle = {
    borderColor: isValidEmail ? 'green' : 'red'
  };

  const passwordInputStyle = {
    borderColor: isValidPassword ? 'green' : 'red'
  };

  const confirmPasswordInputStyle = {
    borderColor: isValidConfirmPassword ? 'green' : 'red'
    
  };

  return (
    <>
   
    <div class="wrapper1" >
<div class="inner">
<div class="image-holder">
<img src={regimg} alt="image"/>
</div>
<form action="">
<h3>Registration Form</h3>
<div class="form-wrapper">
<label for="username"></label>
<input type="text" placeholder="Username" class="form-control"  value={fName} id="fname" onChange={handleFNameChange}style={fNameInputStyle}/>

{!isValidFName && <p style={{ color: 'red' }}>Please enter your Username.</p>}
</div>
<div class="form-wrapper">
<label for="address"></label>
<input type="text" placeholder="Address" class="form-control"  value={address} id="add" onChange={handleAddressChange}style={fNameInputStyle}/>
{!isValidFName && <p style={{ color: 'red' }}>Please enter your Address.</p>}
</div>
<div class="form-wrapper">
<label for="email"></label>
<input type="text" placeholder="Email Address" class="form-control"  id ="email" value={email}onChange={handleEmailChange}
                    style={emailInputStyle}
                  />
                  {!isValidEmail && <p style={{ color: 'red' }}>Please enter a valid email address.</p>}
 
</div>
<div class="form-wrapper">
<label for="pw1"></label>
<input type="password" placeholder="Password" class="form-control" id="mpass" value={password}onChange={handlePasswordChange}
          style={passwordInputStyle}
        />
        {!isValidPassword && <p style={{ color: 'red' }}>Password should be at least 8 characters long.</p>}
 
</div>
<div class="form-wrapper">
<label for="pw2"></label>
<input type="password" placeholder="Confirm Password" class="form-control"id="cpass"  value={confirmPassword}
            onChange={handleConfirmPasswordChange }
               
          style={confirmPasswordInputStyle}
        />
        {!isValidConfirmPassword && <p style={{ color: 'red' }}>Passwords do not match.</p>}
</div>
<Link to="/form"><button onClick={handleSubmit}>Register
 
</button>
</Link>
<div class="sign_in">
        You Have an Account?<Link to="/form">Signin</Link> 
      </div>
</form>
</div>
</div>

    </>
  )
}
