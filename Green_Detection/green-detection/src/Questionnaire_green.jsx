import { useState, useEffect } from 'react';
import './App.css';


function Questionnaire_green(){
    // Initalizing a state variable 'usedImages' and function 'setUsedImages' that keeps track on images that used.
    const[usedImages, setUsedImages] = useState([]);
    const[question, setQuestion] = useState(0);
    // chwcks if user entered the correct answer
    const [isCorrect, setIsCorrect] = useState(null);
    // tracks the users score
    const [score, setScore] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');

    const greenImages = [
        {src: './images/0.jpg', answer: [9, 7]},
        {src: './images/0.jpg', answer: [9, 7]},
        {src: './images/0.jpg', answer: [9, 7]},
        {src: './images/0.jpg', answer: [9, 7]},
        {src: './images/0.jpg', answer: [9, 7]},
        {src: './images/0.jpg', answer: [9, 7]},
        {src: './images/0.jpg', answer: [9, 7]},
        {src: './images/0.jpg', answer: [9, 7]},
        {src: './images/0.jpg', answer: [9, 7]},
        {src: './images/0.jpg', answer: [9, 7]},
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
        const correctAnswer = currentImage.answer();
        const userAnswer = parseInt(question);

        if(correctAnswer.includes(userAnswer)){
            setIsCorrect(true);
            if(userAnswer === correctAnswer[1]){
                setScore(score + 5);
            }
            else if(userAnswer === correctAnswer[0]){
                setScore(score + 10);
            }
            else{
                setIsCorrect(false);
            }
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

    
}
export default Questionnaire_green;