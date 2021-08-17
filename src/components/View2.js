import React from 'react'
import '../styles/View.css'

class View2 extends React.Component{
    randInt(){
        const  randomNum = Math.floor(Math.random() * 101);
        return randomNum;
    }

    render(){
        return(
            // Gets data from the javascript object and displays the data
            <div className="View">
                <h1 className="Problem">{this.props.problem}</h1>
                <h2 className="Solution">Is the answer {this.randInt()}?</h2>
            </div>
        )
    }
}
export default View2;