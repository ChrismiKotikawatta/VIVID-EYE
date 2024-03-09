import { useState, useEffect } from 'react';

function Questionnaire() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  // Main questions and their associated images and sub-questions
  const questions = [
    { 
      src: "../assets/bg1.jpg", 
      numbers: [1, 2, 3],
      subQuestions: [
        {src: 'subImage1.jpg', number: 1 },
        { src: 'subImage2.jpg', number: 2 },
        { src: 'subImage3.jpg', number: 3 }
      ]
    },
    { src: 'image2.jpg', numbers: [9, 4] },
    { src: 'image3.jpg', numbers: [5, 6, 7] }
  ];

  useEffect(() => {
    setCurrentQuestion(getRandomQuestion());
  }, [currentQuestionIndex]); // Update currentQuestion whenever currentQuestionIndex changes

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  };

  const handleAnswerSubmission = () => {
    const correctNumbers = currentQuestion.numbers;
    const userEnteredNumber = parseInt(userAnswer);

    if (correctNumbers.includes(userEnteredNumber)) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const nextQuestion = () => {
    if (isCorrect === null) return; // Prevent advancing without answering
    
    if (currentQuestionIndex === 0) {
      if (parseInt(userAnswer) === 1 || parseInt(userAnswer) === 2) {
        // If the user answers 1 or 2, show sub-questions
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        // If the user answers 3, move on to the next main question
        setCurrentQuestionIndex(currentQuestionIndex + 2);
      }
    } else if (currentQuestionIndex === 1) {
      // For the second question, move to the next main question regardless of the answer
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Move to the next main question for subsequent questions
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }

    setUserAnswer('');
    setIsCorrect(null);
  };

  if (!currentQuestion) {
    return <div>Loading...</div>; // Handle loading state if currentQuestion is null
  }

  return (
    <div>
      <h1>Ishihara Test</h1>
      <div>
        <img src={currentQuestion.src} alt="Number" />
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
    </div>
  );
}

export default Questionnaire;
