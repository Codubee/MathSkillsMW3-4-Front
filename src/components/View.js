import React from 'react'
import { Spinner } from 'reactstrap';
import '../styles/View.css'

function View(props){
    
    if(props.problem.problem){
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
    else return <Spinner/>
    
}
export default View;