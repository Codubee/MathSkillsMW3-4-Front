import React from 'react'
import { Container,Button } from 'reactstrap';
import View from '../components/View'
import MatchesCollapse from '../components/MatchesCollapse';
import '../styles/Math.css'

class Math extends React.Component{
    constructor(props){
        super(props)
        this.handleNo = this.handleNo.bind(this)
        this.handleYes = this.handleYes.bind(this)
    }

    handleNo(){
        alert("Hello! This is an alert!");
    }
    handleYes(){
        alert("Hello! This is an alert!");
    }

    render(){
        return (
            <Container>
                <View/>
                <div className="text-center" id="Buttons">
                    <div className = "header">
                        Is this answer correct?
                    </div>
                    <div className = "yNButton">
                        <Button  outline color = "success" size = "lg" onClick = {this.handleNo} >YES</Button>
                        <Button  outline color = "danger"  size = "lg" onClick = {this.handleYes}>NO</Button>
                    </div>
                </div>
                <MatchesCollapse/>
            </Container>
        )
    }
    
}

export default Math