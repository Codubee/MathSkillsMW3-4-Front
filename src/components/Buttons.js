import axios from 'axios'
import React from 'react'
import {Button} from 'reactstrap'
import "../styles/Buttons.css"

// MOVED TO MATH.JS FILE

class Buttons extends React.Component{

    constructor(props) {
        super(props)
        this.triggerApi = this.triggerApi.bind(this)
    }

    triggerApi() {
        let resp =  {
                            "userId":"99",
                            "problem":{"problem":"5+2","answer":"4","problemId":"3"}
                        }
        axios.post("https://mathskills-mw5-6-back.herokuapp.com/addProblem", resp)
        .then((response) => {
            alert("posted: " + resp.problem.answer)
        })
    }

    render(){
        return (
            <div id="Buttons">
                <div className = "header">
                    Is this answer correct?
                </div>
                <div className = "yNButton">
                    <Button  outline color = "success" size = "lg" onClick = {this.triggerApi} >YES</Button>
                    <Button  outline color = "danger"  size = "lg" onClick = {this.triggerApi} >NO</Button>
                </div>
            </div>
        )
    }
}

export default Buttons