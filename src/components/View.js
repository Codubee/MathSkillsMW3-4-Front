import React from 'react'
import '../styles/View.css'

function View(){
    //Create a javascript object
    const mathProblem = {problem:"2+2",answer:"4"}
    
    return(
        // Gets data from the javascript object and displays the data
        <div className="View">
            <h1 className="Problem">{mathProblem.problem}</h1>
            <h2 className="Solution">Is the answer {mathProblem.answer}?</h2>
        </div>
    )
    
}
export default View;