import React, { useState } from "react";
import "../src/styles.css";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./SignupValidation";
import axios from "axios";
import Lottie from "lottie-react";
import animation from "./images/Animation - 1710871653759.json";

function Signup() {
  const [values, setValues] = useState({
    name: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (
      errors.name === "" &&
      errors.username === "" &&
      errors.password === ""
    ) {
      axios
        .post("http://localhost:8081/signup", values)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="main-container">
        <div className="animation">
            <Lottie animationData={animation}></Lottie>
        </div>
        <div className="card">
            <h2>Sign-Up</h2>
            <form action="" onSubmit={handleSubmit}>

                <div className="inputs">
                    <label htmlFor="name">
                    <strong>Name</strong>
                    </label><br></br>
                    <input
                    type="text"
                    placeholder="Enter the Name"
                    name="name"
                    onChange={handleInput}
                   
                    className='form-control '                    />
                    {errors.name && <span className="text-danger"> {errors.name}</span>}
                </div>
                <div className="inputs">
                    <label htmlFor="username">
                    <strong>User Name</strong>
                    </label><br></br>
                    <input
                    type="username"
                    placeholder="Enter the User Name"
                    name="username"
                    onChange={handleInput} className='form-control '
                    
                    />
                    {errors.username && (
                    <span className="text-danger"> {errors.username}</span>
                    )}
                </div>
                <div className="inputs">
                    <label htmlFor="password">
                    <strong>Password</strong>
                    </label><br></br>
                    <input
                    type="password"
                    placeholder="Enter the password"
                    name="password"
                    onChange={handleInput} className='form-control '
                    
                    />
                    {errors.password && (
                    <span className="text-danger"> {errors.password}</span>
                    )}
                </div><br></br>
                <p>By signing in, you agree to our terms and policies.</p>
                <button type="submit" className="signup-btn">
                    Sign up
                </button>
                <br></br><br></br>
                <p className="login-link">Have an account? 
                    <Link
                        to="/"
                        className="">
                        Login
                    </Link>
                </p>
                
                
                {/* <Link
                    to="/"
                    className="btn btn-default border w-100 bg-secondary text-decoration-none">
                    Login
                </Link> */}
            </form>
        </div>
    </div>
  );
}

export default Signup;
