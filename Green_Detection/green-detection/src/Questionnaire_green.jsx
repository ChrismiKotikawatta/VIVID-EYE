import { useState, useEffect } from "react";
import "./Questionnaire_green.css";
import Lottie from "lottie-react";
import animation from "./assets/Animation - 1710694005762.json";


function Questionnaire_green() {
  // Initalizing a state variable 'usedImages' and function 'setUsedImages' that keeps track on images that used.
  const [usedImages, setUsedImages] = useState([]);
  const [question, setQuestion] = useState(0);
  // checks if user entered the correct answer
  const [isCorrect, setIsCorrect] = useState(null);
  // tracks the users score
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");

  const greenImages = [
    { src: "./images/2.jpg", answer: [1, 0] },
    { src: "./images/16.jpg", answer: [9, 1] },
    { src: "./images/21.jpg", answer: [6, 3] },
    { src: "./images/32.jpg", answer: [3, 5] },
    { src: "./images/77.jpg", answer: [2, 7] },
    { src: "./images/83.jpg", answer: [7, 2] },
    { src: "./images/103.jpg", answer: [4, 1] },
    { src: "./images/129.jpg", answer: [5, 2] },
    { src: "./images/148.jpg", answer: [0, 0] },
    { src: "./images/179.jpg", answer: [8, 2] },
  ];

  // rests the usedImages array when the length of usedImages array is equal to greenImages's length
  useEffect(() => {
    if (usedImages.length === greenImages.length) {
      setUsedImages([]);
    }
  }, [question, usedImages, greenImages.length]);

  // displays the images randomly which is not used in useImages array.
  const getRandomImage = () => {
    const remainingImages = greenImages.filter(
      (image) => !usedImages.includes(image)
    );
    return remainingImages[Math.floor(Math.random() * remainingImages.length)];
  };

  // function that is used to handle users answer submission
  const handleSubmission = () => {
    const currentImage = greenImages[question];
    const correctAnswer = currentImage.answer;

    if (
      parseInt(userAnswer) === correctAnswer[0] ||
      parseInt(userAnswer) === correctAnswer[1]
    ) {
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
    setUserAnswer("");
    setIsCorrect(null);
    const currentImage = getRandomImage();
    setUsedImages([...usedImages, currentImage]);
  };

  // holds image data until there are questions.
  const currentImage =
    question < greenImages.length ? greenImages[question] : null;

  // JSX code block that represents UI structure and behavior of the questionnaire
  return (
    <div className="questionnaire">
      <h1>ISHIHARA TEST</h1>
      <div className="test">
        {currentImage ? (
          <div className="imageDisplay">
            <div className="image">
              <img src={currentImage.src} alt="Number" />
            </div>
            <div className="inputContainer">
              <label name="answer">
                {" "}
                Enter the number displayed in the image
              </label>
              <br />
              <input
                type="text"
                name="answer"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                required
              />
            </div>
            <div className="buttonContainer">
              <div className="button">
                <div className="button1">
                  <button onClick={handleSubmission}>Submit Answer</button>
                </div>
                {isCorrect === true && <p>Correct Answer!</p>}
                {isCorrect === false && <p>Incorrect Answer!</p>}
                <div className="button2">
                  {isCorrect !== null && (
                    <button onClick={nextQuestion}>Next Question</button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="results">
            <p><span>Congratulations!</span> You have completed the test.</p>
            <div className="animation">
              <Lottie animationData={animation} />
            </div>
            <p>Score: {score}</p>
            <button className="result-btn">View Result</button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Questionnaire_green;
