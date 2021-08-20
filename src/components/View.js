import React from 'react'
import '../styles/View.css'

function View(props){
    
    return(
        // Gets data from the javascript object and displays the data
        <div className="View">
            <h1 className="Problem">2+2</h1>
            <h2 className="Solution">
                <h4>Equals</h4>
                <h4>4</h4>
            </h2>
        </div>
    )
    
}
export default View;