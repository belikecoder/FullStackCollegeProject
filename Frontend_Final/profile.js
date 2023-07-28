import React from 'react'
import './Components/prof.css'
import {useSelector } from 'react-redux/es/hooks/useSelector'
import { logout, selectUser } from './Components/redux/userSlice'
import Nav from './Components/NavBar'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
  const user=useSelector(selectUser)
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleLogout=()=>
  {
    dispatch(logout());
 
    navigate("/");
  }
  if(!user)
  {
    navigate('/')
    return null;
  }
  return (
    <>
  
<Nav/>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<center><h1>Your Profile</h1></center>
  <div class="profile-card">
    <div className="mh">
    <img src="https://static8.depositphotos.com/1207999/1027/i/450/depositphotos_10275817-stock-photo-business-man.jpg" alt="Profile Picture"/>
    </div>
    <h1>{user.username}</h1>
    <ul>
      <li><strong>Email:</strong>{user.email}</li>
      <li><strong>Phone:</strong> 123-456-7890</li>
      <li><strong>Location:</strong> New York, USA</li>
    </ul>
    <button onClick={handleLogout}>Logout</button>
   
  </div>

    </>
  )
}
