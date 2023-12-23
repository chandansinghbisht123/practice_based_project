'use client'
import React from 'react'
import { useState } from 'react'
import './login.css'
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
      <button type='submit' style={{ marginLeft: '40%', marginTop: '30px' }}>Submit</button>
    </div>
  )
}

export default Login