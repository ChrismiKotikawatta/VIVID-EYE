import { useState, useEffect } from 'react';
import './App.css';

function Questionnaire() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [usedImages, setUsedImages] = useState([]);

  const images = [
    { src: 'image1.jpg', numbers: [1, 2] },
    { src: 'image2.jpg', numbers: [3, 4] },
    { src: 'image3.jpg', numbers: [5, 6, 7] },
    // Add more images as needed
  ];

  useEffect(() => {
    if (usedImages.length === images.length) {
      // Reset used images when all images have been used
      setUsedImages([]);
    }
  }, [currentQuestionIndex, usedImages, images.length]);

  const getRandomImage = () => {
    const remainingImages = images.filter(image => !usedImages.includes(image));
    return remainingImages[Math.floor(Math.random() * remainingImages.length)];
  };

  const currentImage = getRandomImage();

  const handleAnswerSubmission = () => {
    const correctNumbers = currentImage.numbers;
    const userEnteredNumber = parseInt(userAnswer);

    if (correctNumbers.includes(userEnteredNumber)) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setUserAnswer('');
    setIsCorrect(null);
    setUsedImages([...usedImages, currentImage]);
  };

  return (
    <div className='test'>
      <h1>Ishihara Test</h1>
      {currentQuestionIndex < images.length ? (
        <div>
          <img src={currentImage.src} alt="Number" />
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
          />
          <button onClick={handleAnswerSubmission}>Submit Answer</button>
          {isCorrect === true && <p>Correct Answer!</p>}
          {isCorrect === false && <p>Incorrect Answer!</p>}
          {isCorrect !== null && (
            <button onClick={nextQuestion}>Next Question</button>
          )}
        </div>
      ) : (
        <p>Congratulations! You have completed the questionnaire.</p>
      )}
    </div>
  );
}

export default Questionnaire;
  