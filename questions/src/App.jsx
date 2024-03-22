import { useState, useEffect } from 'react';
import './App.css';

function Questionnaire() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [usedImages, setUsedImages] = useState([]);

  const initialImages = [
    { src: "/src/assets/img1.jpg", numbers: [8, 5, 6, 3] },
    { src: "/src/assets/img2.jpg", numbers: [2, 7] },
    { src: "/src/assets/img3.jpg", numbers: [5, 6] },
    // Add more images as needed
  ];

  const [images, setImages] = useState([]);

  useEffect(() => {
    // Shuffle the initial images array when the component mounts
    const shuffledImages = shuffleArray(initialImages);
    setImages(shuffledImages);
  }, []);

  useEffect(() => {
    if (usedImages.length === images.length) {
      // Reset used images when all images have been used
      setUsedImages([]);
    }
  }, [usedImages, images]);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleAnswerSubmission = () => {
    const correctNumbers = images[currentQuestionIndex].numbers;
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
    setUsedImages([...usedImages, images[currentQuestionIndex]]);
  };

  const currentImage = images[currentQuestionIndex];

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
