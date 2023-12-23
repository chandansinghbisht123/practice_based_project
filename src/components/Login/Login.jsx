'use client'
import React from 'react'
import { useState } from 'react'
import './login.css'
import axios from 'axios'

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    })
  };
  const login = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/user/login', data);
    console.log(res, ' this is res form backend')
  }

  return (
    <div className='form'>
      <div className='container'>Login Form</div>
      <form className='input'>
        <label forhtml='email'> Email</label>
        <input type='text'
          placeholder='Email'
          onChange={handleChange}
          name='email'
          id='email' />

        <label forhtml='password'> Password</label>
        <input type='text'
          placeholder='Password'
          onChange={handleChange}
          name='password'
          id='password' />
      </form>
      <div className='signup-button'>
        <input type='submit' placeholder='submit' className='signup-button' onClick={login} />
      </div>
    </div>
  )
}

export default Login