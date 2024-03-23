import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import animationTestPage from "./assets/Animation - 1711143545416.json"
import Lottie from "lottie-react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='mainContainer'>
        <h1>Hello</h1>
        <h2>Lets Start the Test</h2>
        <Lottie animationData ={animationTestPage}/>

        <div>
          <button type='submit'>START TEST</button>
        </div>

      </div>
    </>
  )
}

export default App
