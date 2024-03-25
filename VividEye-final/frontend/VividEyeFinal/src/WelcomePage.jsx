import React, { useState } from "react";
import Lottie from "lottie-react";
import animation from "./assets/WelcomeAnimation - 1710533876762.json";
import "./WelcomePage.css";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  document.title = 'VIVID-EYE';

  return (
    <div className="content">
      <div className="container">
        <div>
          <h1>Welcome</h1>
          <h3>to</h3>
          <h2>VIVID EYE</h2>
          <p>The Color Blindeness Detection and Lens Recommendation Software</p>
        </div>
        <div className="lottie-animation">
          <Lottie animationData={animation} />
        </div>
        <div className="btn">
          <button className="start-btn" onClick = {() => navigate('Login')}>Start</button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage