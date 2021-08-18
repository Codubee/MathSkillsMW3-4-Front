import React from 'react'
import { Container,Button } from 'reactstrap';
import View from '../components/View'
import MatchesCollapse from '../components/MatchesCollapse';
import '../styles/Math.css'
import axios from 'axios';

let answerQuery = '5' // set this to a random number

let resp =  { // temp value for getting from the db
    "userId":"99",
    "problem":{"problem":"5+2","answer":"4","problemId":"3"}
}

class Math extends React.Component{
    constructor(props){
        super(props)
        this.handleNo = this.handleNo.bind(this)
        this.handleYes = this.handleYes.bind(this)
    }

    handleYes(){
        if (answerQuery !== resp.problem.answer) {
            alert('INCORRECT! its wrong')
        }
        else {
            axios.post("https://mathskills-mw5-6-back.herokuapp.com/addProblem", resp)
            .then(() => {
            alert("INDEED YES! posted: " + resp.problem.problemId)
            })
            // get new problem
        }
    }

    handleNo(){
        if (answerQuery !== resp.problem.answer) {
            axios.post("https://mathskills-mw5-6-back.herokuapp.com/addProblem", resp)
            .then(() => {
            alert("INDEED NO! posted: " + resp.problem.problemId)
            })
            // get new problem
        }
        else {
            alert('INCORRECT! its wrong')
        }
    }

    render(){
        return (
            <Container>
                <View answer={answerQuery} question={resp}/>
                <div className="text-center" id="Buttons">
                    <div className = "header">
                        Is this answer correct?
                    </div>
                    <div className = "yNButton">
                        <Button  outline color = "success" size = "lg" onClick = {this.handleYes} >YES</Button>
                        <Button  outline color = "danger"  size = "lg" onClick = {this.handleNo}>NO</Button>
                    </div>
                </div>
                <MatchesCollapse/>
            </Container>
        )
    }
    
}

export default Math