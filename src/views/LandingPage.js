import React from 'react';
import Team from '../components/Team';
import Tools from '../components/Tools'
import Explanation from '../components/Explanation';
import Features from '../components/Features';
import View from '../components/View';
import { Container } from 'reactstrap';

function LandingPage() {
    return (
        <Container>
            <Explanation />
            <Tools/>
            <Features/>
            <View/>
            <Team />
        </Container>
    )
}

export default LandingPage;