
import React from 'react'
import '../styles/View.css'

function View(props){
    
    return(
        // Gets data from the javascript object and displays the data
        <div className="View">
            <h1 className="Problem">{props.question.problem.problem}</h1>
            <h2 className="Solution">Is the answer {props.answer}?</h2>
        </div>
    )
    
}
export default View;