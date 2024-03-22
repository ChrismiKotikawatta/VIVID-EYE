import { useState } from 'react'
import './App.css'
import Lottie from "lottie-react";
import animation from "./assets/Animation - 1710753897308.json";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='card'>
        <div className='animation'>
          <Lottie animationData={animation}></Lottie>

        </div>
        <div className='cardDetails'>
          <h1>PATIENT REGISTRATION</h1>
          <button className='btnnew'>New Patient</button><br></br><br></br>
          <button className='btnex'>Existing Patient</button>

        </div>
        
      </div>
      
    </>
  )
}

export default App
