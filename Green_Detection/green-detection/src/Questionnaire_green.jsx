import { useState, useEffect } from 'react';
import './App.css';


function Questionnaire_green(){

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

    useEffect(() =>{
        if(usedImages.length === greenImages.length){
            //Resetting the used images
            setUsedImages([]);
        }
    },[usedImages, greenImages.length]);

}
export default Questionnaire_green;