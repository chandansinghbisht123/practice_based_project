'use client'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './signup.css'
const Signup = () => {
    const [data, setData] = useState({
        userName: '',
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
    const signupPage = async (e) => {
        e.preventDefault()
        let res = await axios.post('/api/user/signup', data)
        console.log(res,'this is response coming from backend')
        setData({
            userName: '',
            email: '',
            password: ''
        })
    }
    return (
        <div className='form'>
            <div className='container'>Signup Form</div>
            <form className='input'>
                <label forhtml='username'> Username</label>
                <input type='text'
                    placeholder='Username'
                    onChange={handleChange}
                    name='userName'
                    id='userName' />

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
                <input type='submit' placeholder='submit' className='signup-button' onClick={signupPage} />
            </div>
        </div>
    )
}

export default Signup