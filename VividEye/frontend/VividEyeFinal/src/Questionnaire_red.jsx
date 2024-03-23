import { useState, useEffect } from 'react';
import './Questionnaire_green.css';


function Questionnaire_green(){
    // Initalizing a state variable 'usedImages' and function 'setUsedImages' that keeps track on images that used.
    const[usedImages, setUsedImages] = useState([]);
    const[question, setQuestion] = useState(0);
    // checks if user entered the correct answer
    const [isCorrect, setIsCorrect] = useState(null);
    // tracks the users score
    const [score, setScore] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');

    const greenImages = [
        { src: './images/9.jpg', numbers: [9, 7] },
        { src: './images/10.jpg', numbers: [0, 0] },
        { src: './images/15.jpg', numbers: [5, 3] },
        { src: './images/11.jpg', numbers: [6, 5] },//
        { src: './images/27.jpg', numbers: [4, 9] },
        { src: './images/36.jpg', numbers: [7, 5] },
        { src: './images/41.jpg', numbers: [2, 7] },
        { src: './images/46.jpg', numbers: [1, 1] },
        { src: './images/61.jpg', numbers: [8, 3] },
        { src: './images/87.jpg', numbers: [3, 5] },
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

      if (parseInt(userAnswer) === correctAnswer[0] || parseInt(userAnswer) === correctAnswer[1]) {
          setIsCorrect(true);
          if (parseInt(userAnswer) === correctAnswer[1]) {
              setScore(score + 5);
          } else if (parseInt(userAnswer) === correctAnswer[0]) {
              setScore(score + 10);
          }
      } else {
          setIsCorrect(false);
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
export default Questionnaire_green;