import React from 'react'
import {useState} from 'react'

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
      <form>
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
    </div>
  )
}

export default Login