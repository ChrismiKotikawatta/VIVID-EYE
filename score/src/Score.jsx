import 'react';
import { useState } from 'react';
import Confetti from 'react-confetti';
import './Score.css';

function Score({ finalScore }) {
  const [confettiActive, setConfettiActive] = useState(true);

  return (
    
    <div className="score-container">
      <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={200} recycle={false} run={confettiActive} />
      <div className="score-content">
        <h2 className="score-title">Congratulations!</h2>
        <p className="score-text">Your final score is: {finalScore}</p>
      </div>
    </div>
  );

  
}

export default Score;