import { useState, useEffect } from 'react';
import './App.css';


function Questionnaire_green(){
    // Initalizing a state variable 'usedImages' and function 'setUsedImages' that keeps track on images that used.
    const[usedImages, setUsedImages] = useState([]);

    

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
    },[usedImages, greenImages.length]);

    // displays the images randomly which is not used in useImages array.
    const getRandomImage = () => {
        const remainingImages = greenImages.filter(image => !usedImages.includes(image));
        return remainingImages[Math.floor(Math.random() * remainingImages.length)];
    };    

}
export default Questionnaire_green;