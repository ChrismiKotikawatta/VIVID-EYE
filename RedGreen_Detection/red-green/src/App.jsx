import { useState, useEffect } from "react";
import "./App.css";

function Questionnaire() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [usedImages, setUsedImages] = useState([]);
  const [score, setScore] = useState(0);

  const images = [
    { src: "./images/1.jpg", numbers: [2, 1] },
    { src: "./images/3.jpg", numbers: [0, 4] },
    { src: "./images/4.jpg", numbers: [4, 6] },
    { src: "./images/7.jpg", numbers: [9, 2] },
    { src: "./images/8.jpg", numbers: [5, 4] },
    { src: "./images/9.jpg", numbers: [9, 6] },
    { src: "./images/10.jpg", numbers: [0, 2] },
    { src: "./images/11.jpg", numbers: [6, 4] },
    { src: "./images/15.jpg", numbers: [5, 6] },
    { src: "./images/21.jpg", numbers: [6, 2] },
    { src: "./images/27.jpg", numbers: [4, 4] },
    { src: "./images/31.jpg", numbers: [1, 6] },
    { src: "./images/35.jpg", numbers: [2, 2] },
    { src: "./images/36.jpg", numbers: [7, 4] },
    { src: "./images/41.jpg", numbers: [2, 6] },
    { src: "./images/46.jpg", numbers: [1, 2] },
    { src: "./images/61.jpg", numbers: [8, 4] },
    { src: "./images/84.jpg", numbers: [8, 6] },
    { src: "./images/87.jpg", numbers: [3, 2] },
    { src: "./images/90.jpg", numbers: [3, 4] },
  ];

  useEffect(() => {
    if (usedImages.length === images.length) {
      // Resetting used images when all images have been used
      setUsedImages([]);
    }
  }, [currentQuestionIndex, usedImages, images.length]);

  const getRandomImage = () => {
    const remainingImages = images.filter(
      (image) => !usedImages.includes(image)
    );
    return remainingImages[Math.floor(Math.random() * remainingImages.length)];
  };

  const handleAnswerSubmission = () => {
    const correctNumbers = currentImage.numbers;
    const userEnteredNumber = parseInt(userAnswer);

    if (correctNumbers.includes(userEnteredNumber)) {
      setIsCorrect(true);
      setScore(score + 10);
    } else {
      setIsCorrect(false);
    }
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setUserAnswer("");
    setIsCorrect(null);
    const currentImage = getRandomImage(); // Accesing the new image here
    setUsedImages([...usedImages, currentImage]);
  };

  const currentImage =
    currentQuestionIndex < images.length ? images[currentQuestionIndex] : null;

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
              <br /><br></br>
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
                  <button onClick={handleAnswerSubmission}>
                    Submit Answer
                  </button>
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
          <p>Congratulations! You have completed the questionnaire.</p>
        )}
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default Questionnaire;
=======
export default App;
>>>>>>> fd1fa9c5ff8bee2bc142da7661df31f13f327d1e
