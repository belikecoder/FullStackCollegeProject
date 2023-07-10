import React, { useState } from 'react';
import '../Components/signin.css'
import { useNavigate,Link, Navigate } from 'react-router-dom';

const Signin = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(true);
  };

  const validateEmail = () => {
    const emailPattern = /\S+@\S+\.\S+/;
    setIsEmailValid(emailPattern.test(email));
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsPasswordValid(true);
  };


  const validatePassword = () => {
    setIsPasswordValid(password.length >= 8);
  };

  const emailInputStyle = {
    borderColor: isEmailValid ? 'green' : 'red'
  };

  const passwordInputStyle = {
    borderColor: isPasswordValid ? 'green' : 'red'
  };
  Navigate("/home")
  alert("Login SucessFull")


    return (
    <>
    <div class="split le">

  </div>
    <div class="split ri">
   <div class="main_div">
    <div class="title">
        <p>Login Form</p></div>
    <div class="social_icons">
      <a href="#"><i class="fab fa-facebook-f"></i> <span>Facebook</span></a>
      <a href="#"><i class="fab fa-twitter"></i><span>Google</span></a>
    </div>
    <form action="#">
      <div class="input_box">
        <input type="email" placeholder="Email or Phone"onChange={handleEmailChange}onBlur={validateEmail}style={emailInputStyle}/>
        {!isEmailValid && <p>Please enter a valid email address.</p>}
       <div></div>
        <div class="icon"><i class="fas fa-user"></i></div>
      </div>
      <br></br>
      <br></br>
      <div class="input_box">
        <input type="password" placeholder="Password"onChange={handlePasswordChange}onBlur={validatePassword}style={passwordInputStyle} />
        {!isPasswordValid && <p>Password should be at least 8 characters long.</p>}
        <div class="icon"><i class="fas fa-lock"></i></div>
      </div>
      <br></br>
      <br></br>
      <div class="option_div">
        <div class="check_box">
          <input type="checkbox"/>
          <a href="#">Forgot password?</a>
        </div>
      </div>
      <div class="input_box button">
        <input type="submit" value="Login"onClick={()=>{validateEmail()}}/>
      </div>
      <div class="sign_up">
        Not a member? <Link to="/regis">SignUp</Link>
      </div>
    </form>
  </div>
  </div>
    </>
  );
};

export default Signin;