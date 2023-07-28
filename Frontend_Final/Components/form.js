import React, { useState } from 'react';
import '../Components/signin.css'
import { useNavigate,Link, } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from './redux/userSlice.js';
import formimg from './images/formimg.png';

const Signin = () => {

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [userError, setUserError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUserError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setUserError('Please enter your name');
      return;
    }

    if (!email) {
      setEmailError('Please enter your email.');
      return;
    }

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    if (!password) {
      setPasswordError('Please enter your password.');
      return;
    } else if (password.length < 8) {
      setPasswordError('Password should be at least 8 characters long.');
      return;
    }

    console.log('Login submitted:', email, password);

    navigate('/');
    alert('You successfully Login');
    dispatch(login({ username,email }));
  };
  


    return (
    <>
   
<div class="wrapper" >
<div class="inner">
<div class="image-holder">
<img src={formimg} alt="image"/>
</div>
<form action="">
<h3>Login Form</h3>
<div class="form-wrapper">
<input type="text" placeholder="Username" class="form-control" id='username'
                value={username}
                onChange={handleUsernameChange}/>
                  {userError && <p className="error-message" style={{ color: 'red' }}>{userError}</p>}
 
</div>
<div class="form-wrapper">
<input type="text" placeholder="Email Address" class="form-control"  id='email'
                value={email}
                onChange={handleEmailChange}/>
                 {emailError && <p className="error-message" style={{ color: 'red' }}>{emailError}</p>}

</div>

<div class="form-wrapper">
<input type="password" placeholder="Password" class="form-control"   id='password'
                value={password}
                onChange={handlePasswordChange}/>
{passwordError && <p className='error-message' style={{ color: 'red' }}>{passwordError}</p>}
</div>
<Link to="/layout"><button onClick={handleSubmit}>Login

</button>
</Link>
<br></br>
<div className='gw'>
Not a member? <Link to="/regis">SignUp</Link>
</div>
</form>
</div>
</div>

    </>
  );
};

export default Signin;