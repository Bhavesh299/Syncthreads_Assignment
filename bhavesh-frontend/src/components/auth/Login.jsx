import React, { useEffect, useState } from 'react'
import './Login.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { login1 } from '../Redux/action'
import { useDispatch } from 'react-redux'



const Login = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value,
    })
  }

  const login = () => {
    axios.post('http://localhost:1020/login', user).then((res) => {
      console.log(res.data)
      dispatch(login1(res.data.user.name))
        alert(res.data.message)
        navigate("/")
 
    }).catch(function(err){
      alert("invalid credentials")
    })
  }


  return (
    <div className="login">
      <h1 >Login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
      ></input>
     
        {' '}
        <div  onClick={()=>{login()}}>
         Login
        </div>
  

      <div>or</div>
      <Link to="/register">
        <div className="button">
          Register
        </div>
      </Link>
    </div>
   
  )
}

export default Login
