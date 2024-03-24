import { useState, useEffect } from "react";
import "./Questionnaire_green.css";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animationWelldone from "./assets/Animation - 1710694005762.json";

function Questionnaire_green() {
  // Initalizing a state variable 'usedImages' and function 'setUsedImages' that keeps track on images that used.
  const [usedImages, setUsedImages] = useState([]);
  const [question, setQuestion] = useState(0);
  // checks if user entered the correct answer
  const [isCorrect, setIsCorrect] = useState(null);
  // tracks the users score
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [resultDisplay, setResultDisplay] = useState("");

  const greenImages = [
    { src: "src/images/2.jpg", answer: [1, 0] },
    { src: "src/images/16.jpg", answer: [9, 1] },
    { src: "src/images/21.jpg", answer: [6, 3] },
    { src: "src/images/32.jpg", answer: [3, 5] },
    { src: "src/images/77.jpg", answer: [2, 7] },
    { src: "src/images/83.jpg", answer: [7, 2] },
    { src: "src/images/103.jpg", answer: [4, 1] },
    { src: "src/images/129.jpg", answer: [5, 2] },
    { src: "src/images/148.jpg", answer: [0, 2] },
    { src: "src/images/179.jpg", answer: [8, 2] },
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

  const showResult = () => {
    if (score >= 75) {
      setResultDisplay("Normal color vision");
    } else if (score >= 50) {
      setResultDisplay("Mild color blindness");
    } else if (score >= 25) {
      setResultDisplay("Moderate color blindness");
    } else {
      setResultDisplay("Severe color blindness");
    }
  };

  const getRecommendation = () => {
    if (resultDisplay === "Severe color blindness") {
      return (
        <div>
          <p>
            You have severe color blindness, complete deuteranopia or
            protanopia, cannot perceive differences between red and green
            (deuteranopia) or green and other colors (protanopia). This severe
            deficiency extends to other colors in the spectrum as well.
          </p>
          <p>
            <strong>Recommendation:</strong> Specialized lenses with advanced
            green color correction technology are recommended to enhance color
            perception and improve the ability to differentiate between colors.
          </p>
        </div>
      );
    } else if (resultDisplay === "Moderate color blindness") {
      return (
        <div>
          <p>
            You have moderate color blindness, such as deuteranomaly or
            protanomaly, have difficulty distinguishing between certain shades
            of red and green (deuteranomaly) or green and other colors
            (protanomaly). This difficulty may extend to other colors in the
            spectrum to a lesser extent.
          </p>
          <p>
            <strong>Recommendation:</strong> Color blind lenses tailored for
            moderate green color blindness are recommended to enhance color
            perception and improve color differentiation.
          </p>
        </div>
      );
    } else if (resultDisplay === "Mild color blindness") {
      return (
        <div>
          <p>
            You have mild color blindness, such as mild deuteranomaly or
            protanomaly, can perceive most colors but with reduced sensitivity
            or accuracy in distinguishing certain shades of red and green
            (deuteranomaly) or green and other colors (protanomaly).
          </p>
          <p>
            <strong>Recommendation:</strong> Color blind lenses designed for
            mild color blindness are recommended to enhance color perception and
            improve color discrimination.
          </p>
        </div>
      );
    } else if (resultDisplay === "Normal color vision") {
      return (
        <p>
          You have normal color vision, with the ability to perceive a wide
          range of colors accurately. No specific lens recommendation is needed
          for individuals with normal color vision.
        </p>
      );
    }
  };

  const navigate = useNavigate();

  // holds image data until there are questions.
  const currentImage =
    question < greenImages.length ? greenImages[question] : null;

  // JSX code block that represents UI structure and behavior of the questionnaire
  return (
    <div className="NewQuestionnaire">
      <h1>Ishihara Test</h1>
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
          <div>
            <p>Congratulations! You have completed the questionnaire.</p>
            <div className="animation">
              <Lottie animationData={animationWelldone} />
            </div>
            <p>Score: {score}</p>
            <button className="resultbtn" onClick={showResult}>
              View Result
            </button>
          </div>
        )}
      </div>
      <div className="resultCard">
        {resultDisplay && (
          <div className="resultContainer">
            <br></br>
            <h3>Your Result:</h3>
            <p>
              <span>{resultDisplay}</span>
            </p>
            {getRecommendation()}
            <div className="button3">
              <button className="returnHomeBtn" onClick={() => navigate("/")}>
                Return Home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Questionnaire_green;
