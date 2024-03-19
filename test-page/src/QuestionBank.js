import testImage from "C:/Users/user/OneDrive - University of Westminster/Desktop/VIVID-EYE/test-page/src/image/pallete.png";
let x = Math.floor((Math.random() * 31)+1);
let y = Math.floor((Math.random() * 31)+1);
let z = Math.floor((Math.random() * 31)+1);
const qBank = [
  {
    id: 1,
    question: "Enter the number you see in the below image?",
    image: testImage,
    options: ["74", x, y, z],
    answer: "Chandigarh",
  },
  {
    id: 2,
    question: "What is the capital of Punjab?",
    image: testImage,
    options: ["Patiala", "Ludhiana", "Amritsar", "Chandigarh"],
    answer: "Chandigarh",
  },
  {
    id: 3,
    question: "What is the capital of India?",
    image: testImage,
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Delhi",
  },
  {
    id: 4,
    question: "What is the capital of Uttarakhand?",
    image: testImage,
    options: ["Roorkee", "Haridwar", "Dehradun", "Nanital"],
    answer: "Dehradun",
  },
  {
    id: 5,
    question: "What is the capital of Uttar Pradesh?",
    image: testImage,
    options: ["GB Nagar", "Lucknow", "Prayagraj", "Agra"],
    answer: "Lucknow",
  },
];



export default qBank;
