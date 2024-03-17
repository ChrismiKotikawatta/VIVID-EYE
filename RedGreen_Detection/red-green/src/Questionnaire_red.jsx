import { useState, useEffect } from 'react';
import './App.css';

function Questionnaire_red() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [usedImages, setUsedImages] = useState([]);
  const [score, setScore] = useState(0);

  const images = [
    { src: './images/9.jpg', numbers: [9, 7] },
    { src: './images/10.jpg', numbers: [0, 0] },
    { src: './images/15.jpg', numbers: [5, 3] },
    { src: './images/21.jpg', numbers: [6, 5] },
    { src: './images/27.jpg', numbers: [4, 9] },
    { src: './images/36.jpg', numbers: [7, 5] },
    { src: './images/41.jpg', numbers: [2, 7] },
    { src: './images/46.jpg', numbers: [1, 1] },
    { src: './images/61.jpg', numbers: [8, 3] },
    { src: './images/87.jpg', numbers: [3, 5] },
  ];

  useEffect(() => {
    if (usedImages.length === images.length) {
      // Reset the used images
      setUsedImages([]);
    }
  }, [currentQuestionIndex, usedImages, images.length]);


  const getRandomImage = () => {
    const remainingImages = images.filter(image => !usedImages.includes(image));
    return remainingImages[Math.floor(Math.random() * remainingImages.length)];
  };

  const handleAnswerSubmission = () => {
    const correctNumbers = currentImage.numbers;
    const userEnteredNumber = parseInt(userAnswer);
  
    if (correctNumbers.includes(userEnteredNumber)) {
      setIsCorrect(true);
      if (userEnteredNumber === correctNumbers[1]) {
        setScore(score + 5); // Adding 5 when the user enters an answer with the defficiency
      }
      if (userEnteredNumber === correctNumbers[0]) {
        setScore(score + 10); // Adding 10 when the user enters an answer with the defficiency
      }
    } else {
      setIsCorrect(false);
    }
  };
  

  const nextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setUserAnswer('');
    setIsCorrect(null);
    const currentImage = getRandomImage(); // Getting the new image
    setUsedImages([...usedImages, currentImage]);
  };

  const currentImage = currentQuestionIndex < images.length ? images[currentQuestionIndex] : null;

  return (
    <div className='questionnaire'>
    <h1>Ishihara Test</h1>
    <div className='test'>
      {currentImage ? (
      <div className='imageDisplay'>
        <div className='image'>
          <img src={currentImage.src} alt="Number" />
        </div>
        <div className='inputContainer'>
          <label name="answer"> Enter the number displayed in the image</label>
          <br/>
          <input
            type="text"
            name="answer"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            required
          />
        </div>
        <div className='buttonContainer'>
          <div className='button'>
            <div className='button1'>
              <button onClick={handleAnswerSubmission}>Submit Answer</button>
            </div>
            {isCorrect === true && <p>Correct Answer!</p>}
            {isCorrect === false && <p>Incorrect Answer!</p>}
            <div className='button2'>
              {isCorrect !== null && (
                <button onClick={nextQuestion}>Next Question</button>
              )}
            </div>
          </div>
        </div>
    </div>      
      ) : (
        <div>
          <p>Congratulations! You have completed the questionnaire.</p>
          <p>Score: {score}</p>
          <button>View Result</button>
        </div>
      )}
    </div>
    </div>
  );
}

export default Questionnaire_red;

