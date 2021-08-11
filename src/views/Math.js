import React from 'react'
import { Container } from 'reactstrap';
import View from '../components/View'
import ShowMatches from '../components/ShowMatches'
import Buttons from '../components/Buttons';
import MatchesCollapse from '../components/MatchesCollapse';

function Math (){
    return (
        <Container>
            <View/>
            <Buttons/>
            <MatchesCollapse/>
        </Container>
    )
}

export default Math