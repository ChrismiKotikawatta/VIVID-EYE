// Question.js

import React, {Component} from "react";
import Options from "./Option";
import './TestStyle.css';


class Question extends Component{
	render() {
		const {question, selectedOption, onOptionChange, onSubmit} = this.props;

		return(
			<div className="Question">
				<h3 className="question_no">Question {question.id}</h3>
				<h5 className="mt-2">{question.question}</h5>
				<img className = "color-pallet" src={question.image} alt="Test Image" />

                
				<form onSubmit={onSubmit} className="options">
					<Options
						options={question.options}
						selectedOption={selectedOption}
						onOptionChange={onOptionChange}
					/>
					<br></br>
					<button type="submit" className="submit-btn">
						SUBMIT
					</button>
				</form>
				
				
				
			
			</div>
		
			
		)
	}
}

export default Question;
