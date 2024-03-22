import React, { useState } from "react";
import Lottie from "lottie-react";
import animation from "./assets/Animation - 1710533876762.json";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
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
        <button className="login-btn">Login</button>
        <button className="signup-btn">SignUp</button>
      </div>
    </div>
  );
}

export default App;
