import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./loginSignup.css";
import { AiOutlineUnlock } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import Lottie from "lottie-react";
import animationLogin from "./assets/loginAnimation- 1710871653759.json";
import axios from "axios"; // Import axios for making HTTP requests

const Signup = () => {
  const [formData, setFormData] = useState({
    Username: "",
    Password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [signupMessage, setSignupMessage] = useState(""); // State variable for signup message
  const [submitting, setSubmitting] = useState(false); // State variable to track form submission

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true); // Set submitting state to true during form submission
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post("http://localhost:8081/admin?action=signup", formData);
        setSignupMessage(response.data.message); // Set signup message from server response
        console.log("Signup Successful.");
      } catch (error) {
        setSignupMessage("Signup failed. Please try again."); // Set signup message for error cases
        console.error("Signup failed. Please try again.", error.response?.data);
      }
    } else {
      setErrors(validationErrors);
    }
    setSubmitting(false); // Set submitting state back to false after form submission
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
    return errors;
  };

  return (
    <div className="main">
      <div className="animation">
        <Lottie animationData={animationLogin}></Lottie>
      </div>
      <div className="login-form">
        <h1>Signup</h1>
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
              placeholder="Enter Username"
              value={formData.Username}
              onChange={handleChange}
            />
            {errors.username && <span className="error">{errors.username}</span>}
          </div>
          <div>
            <AiOutlineUnlock className="icons" />
            <label htmlFor="Password">Password</label>
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
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <div className="rememberMe">
            <div className="checkbox">
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              /><br></br><br></br>
              <label htmlFor="rememberMe">
                I've read and agree with <span>Terms of Service </span>and our{" "}
                <span>Privacy Policy</span>
              </label>
            </div>
            {errors.rememberMe && <span className="error">{errors.rememberMe}</span>}
          </div>

          {submitting && <p>Submitting...</p>}
          <br></br>

          <button className="login-btn" type="submit" disabled={submitting}>
            Sign Up
          </button>
          <br />
          {signupMessage && <span className="signup-message">{signupMessage}</span>}
          <br />
          <br />
          <div>
            <span>
              Already Have an Account? <Link to="/Login">Login</Link>
            </span>{" "}
            {/* Use to='/register' for the link */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
