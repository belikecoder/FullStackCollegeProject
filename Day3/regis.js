import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Components/regis.css'

export default function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValidFullName, setIsValidFullName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
    setIsValidFullName(true);
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
    if (fullName.trim() === '') {
      setIsValidFullName(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert('Registration successful!');
    }
  };

  const fullNameInputStyle = {
    borderColor: isValidFullName ? 'green' : 'red'
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
    <div class="split left">

</div>
  <div class="split right">
 
    <div class="container">
      <h1 class="form-title">Registration</h1>
      <form action="#"onSubmit={handleSubmit}>
        <div class="main-user-info">
          <div class="user-input-box">
            <label for="fullName">FullName</label>
            <input type="text"
                    id="fullName"
                    placeholder="Enter FullName" onChange={handleFullNameChange}style={fullNameInputStyle}/>
                    {!isValidFullName && <p>Please enter your full name.</p>}
          </div>
          <div class="user-input-box">
            <label for="username">Address</label>
            <input type="text"
                    id="username"
                    name="username"
                    placeholder="Enter Address"/>
          </div>
          <div class="user-input-box">
            <label for="email">Email</label>
            <input type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Email"onChange={handleEmailChange}
                    style={emailInputStyle}
                  />
                  {!isValidEmail && <p>Please enter a valid email address.</p>}
          </div>
          <div class="user-input-box">
            <label for="phoneNumber">Phone Number</label>
            <input type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter Phone Number"/>
          </div>
          <div class="user-input-box">
            <label for="password">Password</label>
            <input type="password"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    onChange={handlePasswordChange}
          style={passwordInputStyle}
        />
        {!isValidPassword && <p>Password should be at least 8 characters long.</p>}
      </div>
          </div>
          <div class="user-input-box">
            <label for="confirmPassword">Confirm Password</label>
            <input type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={handleConfirmPasswordChange}
          style={confirmPasswordInputStyle}
        />
        {!isValidConfirmPassword && <p>Passwords do not match.</p>}
        </div>
        <div class="form-submit-btn">
          <input type="submit" value="Register"/>
        </div>
        <div class="sign_in">
        You Have an Account?<Link to="/form">Signin</Link> 
      </div>
      </form>
    </div>
    </div>

    </>
  )
}
