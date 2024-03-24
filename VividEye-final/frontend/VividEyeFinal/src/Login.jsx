import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useNavigate } from "react-router-dom";
import "./loginSignup.css";
import { AiOutlineUnlock } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import Lottie from "lottie-react";
import animationLogin from "./assets/loginAnimation- 1710871653759.json";
import axios from "axios";


const Login = () => {
  const [formData, setFormData] = useState({
    Username: "",
    Password: "",
    rememberMe: false,
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [loginMessage, setLoginMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("http://localhost:8081/admin?action=login", formData)
        .then((res) => {
          if (res.data.success) {
            setLoginMessage("Logged In Successfully."); // Set login message
            console.log("Login Successful.");
            navigateToMainPatient(); // Redirect to MainPatient upon successful login
          } else {
            setLoginMessage("Incorrect username or password."); // Set login message
            console.log("Login Failed: Incorrect username or password.");
          }
        })
        .catch((err) => {
          setLoginMessage("Login failed. Please try again."); // Set login message
          console.error("Login failed. Please try again.", err.response?.data);
          // Handle error response if needed
        });
    } else {
      setErrors(validationErrors);
    }
  };
  
  const navigateToMainPatient = () => {
    // Perform any other actions needed upon successful login
    // For example, set authentication state
    navigate('MainPatient');
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
    if (!data.Username.trim()) {
      errors.username = "*Username is required";
    }
    if (!data.Password.trim()) {
      errors.password = "*Password is required";
    }
    if (!data.rememberMe) {
      errors.rememberMe = "*You must agree to the terms";
    }
    if (data.Username.trim() && data.Password.trim() && data.Username === data.Password) {
      errors.password = "*Password should not match username";
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
            <label htmlFor="Username">Username</label>
            <br />
            <input
              type="text"
              id="Username"
              name="Username"
              className="text"
              autoComplete="off"
              placeholder="Enter Username"
              value={formData.Username}
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
              id="Password"
              name="Password"
              className="text"
              placeholder="Enter Password"
              value={formData.Password}
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
          {loginMessage && <span className="signup-message">{loginMessage}</span>}
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
