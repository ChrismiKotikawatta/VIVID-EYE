import { useState, useEffect } from 'react';
import './MainQuestionnaire.css';
import { useNavigate } from "react-router-dom";

function MainQuestionnaire(){
    // Initalizing a state variable 'usedImages' and function 'setUsedImages' that keeps track on images that used.
    const[usedImages, setUsedImages] = useState([]);
    const[question, setQuestion] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
    // checks if user entered the correct answer
    const [isCorrect, setIsCorrect] = useState(null);
    // tracks the users score
    const [userAnswer, setUserAnswer] = useState('');

    const greenImages = [
        {src: './images/710.jpg', answer: [5]},
        {src: './images/557.jpg', answer: [7]},
        {src: './images/1267.jpg', answer: [8]},
    ]

    
    // rests the usedImages array when the length of usedImages array is equal to greenImages's length
    useEffect(() =>{
        if(usedImages.length === greenImages.length){
            setUsedImages([]);
        }
    },[question,usedImages, greenImages.length]);

    // displays the images randomly which is not used in useImages array.
    const getRandomImage = () => {
        const remainingImages = greenImages.filter(image => !usedImages.includes(image));
        return remainingImages[Math.floor(Math.random() * remainingImages.length)];
    };    

    // function that is used to handle users answer submission
    const handleSubmission = () => {
      const currentImage = greenImages[question];
      const correctAnswer = currentImage.answer;
      const userEnteredNumber = parseInt(userAnswer);
      const isAnswerCorrect = correctAnswer.includes(userEnteredNumber);
      setIsCorrect(isAnswerCorrect);

      if (!isAnswerCorrect) {
          // Increment incorrectAnswers count if the answer is wrong
          setIncorrectAnswers(prev => prev + 1);
      }
    };
    const navigate = useNavigate();

    const handleStartTest = () => {
      // Navigate to the appropriate page based on the number of incorrect answers
      if (incorrectAnswers >= 2) {
          navigate('Questionnaire_green');
      } else if (incorrectAnswers >= 1) {
          navigate('Questionnaire_red');
      } else {
          // If no incorrect answers, navigate to the first question
          setQuestion(0);
      }
  };

    //

    // This function is used to go to the next question and resets previus answer
    const nextQuestion = () => {
        setQuestion(question + 1);
        setUserAnswer('');
        setIsCorrect(null);
        const currentImage = getRandomImage();
        setUsedImages([...usedImages, currentImage]);
    };

    // holds image data until there are questions.
    const currentImage = question < greenImages.length ? greenImages[question] : null;


    
    // JSX code block that represents UI structure and behavior of the questionnaire
    return (
        <div className='NewQuestionnaire'>
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
                  onChange={(e) => {
                    const inputText = e.target.value;
                    // validating the input to allow only numbers to enter
                    if (/^\d*$/.test(inputText)) {
                      setUserAnswer(inputText);
                    }
                  }}
                  autoComplete="off" // Preventing browser to recommend answers                
                  required
                />
              </div>
              <div className='buttonContainer'>
                <div className='button'>
                  <div className='button1'>
                    <button onClick={handleSubmission}>Submit Answer</button>
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
              <div className='next'>
                <p>You have completed the Demo</p>
                <button onClick={handleStartTest}>Start Test</button>
              </div>
          )}
        </div>
        </div>
    );
}
export default MainQuestionnaire;