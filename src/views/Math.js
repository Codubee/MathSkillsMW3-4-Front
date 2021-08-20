import React from 'react'
import { Container, Button } from 'reactstrap';
import View from '../components/View'
import MatchesCollapse from '../components/MatchesCollapse';
import '../styles/Math.css'
import axios from 'axios';

class Math extends React.Component {
    constructor(props) {
        super(props)
        this.state = {problem: " "};
        this.handleNo = this.handleNo.bind(this)
        this.handleYes = this.handleYes.bind(this)
    }
  
    componentDidMount(){
        axios.get("https://mathskills-mw5-6-back.herokuapp.com/getProblem")

        .then((response) => {
            console.log(response.data);

            this.setState({
                problem: response.data.problem
            })
        })
    }

    handleYes() {

        let tempBody = { // temp value for getting from the db
            "userId": "99",
            "problem": { "problem": "5+2", "answer": "7", "problemId": "3" }
        }
        axios.post("https://mathskills-mw5-6-back.herokuapp.com/addProblem", tempBody)
            .then(() => {
                // alert("INDEED YES! posted: " + response.problem.problemId)
            })
    }

    handleNo() {
        alert('clicked no')
    }

    render() {
        return (
            <Container>
                <View problem = {this.state.problem}/>
                <div className="text-center" id="Buttons">
                    <div className="header">
                        Is this answer correct?
                    </div>
                    <div className="yNButton">
                        <Button outline color="success" size="lg" onClick={this.handleYes} >YES</Button>
                        <Button outline color="danger" size="lg" onClick={this.handleNo}>NO</Button>
                    </div>
                </div>
                <MatchesCollapse />
            </Container>
        )
    }
}

export default Math