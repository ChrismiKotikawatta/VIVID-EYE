import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./loginSignup.css";
import { AiOutlineUnlock } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import Lottie from "lottie-react";
import animationLogin from "./assets/Animation - 1710871653759.json";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Proceed with form submission
      console.log("Login form submitted");
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.username.trim()) {
      errors.username = "*Username is required";
    }
    if (!data.password.trim()) {
      errors.password = "*Password is required";
    }
    if (!data.rememberMe) {
      errors.rememberMe = "*You must agree to the terms";
    }
    return errors;
  };

  return (
    <div className="main">
      <div className="animation">
        <Lottie animationData={animationLogin} />
      </div>
      <div className="login-form">
        <h1>Login</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <BiUser className="icons" />
            <label htmlFor="username">Username</label>
            <br />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter Username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <span className="error">{errors.username}</span>
            )}
          </div>
          <div>
            <AiOutlineUnlock className="icons" />
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>
          <div className="rememberMe">
            <div className="checkbox">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <br></br>
              <br></br>
              <label htmlFor="rememberMe">
                I've read and agree with <span>Terms of Service </span>and our{" "}
                <span>Privacy Policy</span>
              </label>
            </div>
            {errors.rememberMe && (
              <span className="error">{errors.rememberMe}</span>
            )}
          </div>
          <br />
          <button className="login-btn" type="submit">
            Login
          </button>
          <br />
          <br />
          <div>
            <span>
              New Here? <Link to="/Signup">Sign up</Link>
            </span>{" "}
            {/* Use to='/register' for the link */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
