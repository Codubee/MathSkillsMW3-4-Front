import React from 'react'
import '../styles/View.css'

function View(props){
    
    
    return(
        // Gets data from the javascript object and displays the data
        <div className="View">
            <h1 className="Problem">{props.problem.problem}</h1>
            <h2 className="Solution">
                <h4>Equals</h4>
                <h4>{props.problem.answer}</h4>
            </h2>
        </div>
    )
    
}
export default View;