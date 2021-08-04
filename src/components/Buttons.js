import React from 'react'
import {Button} from 'reactstrap'
import "../styles/Buttons.css"

class Buttons extends React.Component{
    
    handleClick(){
        alert("Hello! This is an alert!");
    }

    render(){
        return (
            <div id="Buttons">
                <div className = "header">
                    Is this answer correct?
                </div>
                <div className = "yNButton">
                    <Button  outline color = "success" size = "lg" onClick = {this.handleClick.bind(this)} >YES</Button>
                    <Button  outline color = "danger"  size = "lg" onClick = {this.handleClick.bind(this)}>NO</Button>
                </div>
            </div>
        )
    }
}

export default Buttons