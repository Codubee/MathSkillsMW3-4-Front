import React from 'react'
import { Container, Button } from 'reactstrap';
import View from '../components/View'
import MatchesCollapse from '../components/MatchesCollapse';
import '../styles/Math.css'
import axios from 'axios';

class MathPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {problem: {},userId:Math.floor(Math.random() * 99999)};
        this.handleNo = this.handleNo.bind(this)
        this.handleYes = this.handleYes.bind(this)
        this.getProblem = this.getProblem.bind(this)
    }
  
    componentDidMount(){
        this.getProblem();
    }

    getProblem(){
        axios.get("https://mathskills-mw5-6-back.herokuapp.com/getProblem")

        .then((response) => {

            var random = Math.random();
            console.log(random)
            if(random >.5){
                var problem = response.data
                problem['answer'] = Math.floor(Math.random()*99);
            }

            this.setState({
                problem: response.data
            })
        })
    }

    handleYes() {
        var question = eval(this.state.problem.problem);
        var answer = this.state.problem.answer;
        console.log(this.state.userId)
        if(question === answer){
            var body = {
                userId: this.state.userId,
                problem:this.state.problem
            }
            axios.post("https://mathskills-mw5-6-back.herokuapp.com/addProblem", body)
            .then(() => {
                alert('Correct!')
                this.getProblem();
            })
        }else{
            alert('incorrect')
            this.getProblem()
        }
        
    }

    handleNo() {
        this.getProblem();
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
                <MatchesCollapse userId={this.state.userId}/>
            </Container>
        )
    }
}

export default MathPage