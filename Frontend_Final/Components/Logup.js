
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Regi = () => {
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newUser = {
        username,
        address,
        email,
        password,
      };

      await axios.post('http://localhost:8080/register', newUser);
      navigate('/login');
    } catch (err) {
      alert('User Registration Failed');
    }
  };

  return (
    <>
      <h3>Registration Form</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div>
          <input type="text" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Register</button>
      </form>
      <div>
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </>
  );
};

export default Regi;