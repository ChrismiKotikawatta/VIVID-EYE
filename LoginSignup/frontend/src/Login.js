import React, { useState } from 'react'
import "../src/styles.css"
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation';
import axios from 'axios';
import Lottie from 'lottie-react';
import animation from "./images/Animation - 1710871653759.json"

function Login() {
    const [values, setValues] = useState({
        username: '',
        password: ''
    })
    const navigate = useNavigate();

    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(Validation(values))
        if(errors.username === "" && errors.password === ""){
            axios.post('http://localhost:8081/login', values)
            .then(res => {
                if(res.data === "Success"){
                    navigate('/home');
                }else{
                    alert("No record existed");
                }
            })
            .catch(err => console.log(err));
        }
    }
  return (
    <div className='main-container'>
        <div className="animation">
            <Lottie animationData={animation}></Lottie>
        </div>
        <div className='card'>
            <h2>Login</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='inputs'>
                    <label htmlFor="username"><strong>User Name</strong></label>
                    <input type="username" placeholder='Enter the User Name' name='username'
                    onChange={handleInput} className='form-control '/>
                    {errors.username && <span className='text-danger'> {errors.username}</span>}
                </div>
                <div className='inputs'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder='Enter the password' name='password'
                    onChange={handleInput} className='form-control'/>
                    {errors.password && <span className='text-danger'> {errors.password}</span>}

                </div><br></br>
                
            
                <p>By logging in, you agree to our terms and policies.</p>
                <button type='submit' className='signup-btn'><strong>Log in</strong></button><br></br><br></br>
                <p className='signup-link'>Dont have an account?
                    <Link to='/signup' className=''>Create an account
                    </Link>
                </p>
                
            </form>
        </div>
    </div>
    
  )
}

export default Login