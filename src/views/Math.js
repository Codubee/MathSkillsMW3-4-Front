import React from 'react'
import { Container } from 'reactstrap';
import View from '../components/View'
import ShowMatches from '../components/ShowMatches'
import Buttons from '../components/Buttons';
import MatchesCollapse from '../components/MatchesCollapse';
import View2 from '../components/View2';
import axios from 'axios'

class Math extends React.Component{

    constructor(props){
        super(props);

        this.state = {problem: " "};
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


   render(){
        return (
            <Container>
                <View2 problem = {this.state.problem}/>
                <Buttons/>
                <MatchesCollapse/>
            </Container>
        ) 
   } 
}

export default Math