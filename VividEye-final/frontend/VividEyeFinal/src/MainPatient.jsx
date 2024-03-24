import { useState } from 'react'
import './MainPatient.css'
import Lottie from "lottie-react";
import NewAnimation from "./assets/NewAnimation - 1710595640031.json";
import { useNavigate } from "react-router-dom";

function MainPatient() {
  const [count, setCount] = useState(0)

  const navigate = useNavigate();
  return (
      <div className='NewCard'>
        <div className='animation'>
          <Lottie animationData={NewAnimation}></Lottie>

        </div>
        <div className='cardDetails'>
          <h1>PATIENT REGISTRATION</h1>
          <button className='btnneww' onClick={() => navigate('Details')}>New Patient</button><br></br><br></br>
          <button className='btnex' onClick={() => navigate('PatientDetails')}>Existing Patient</button><br></br><br></br>
          <button className='btnexnew' onClick={() => navigate('/')}>Return Home</button>
        </div>
    </div>
  )
}

export default MainPatient;