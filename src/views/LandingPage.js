import React from 'react';
import Team from '../components/Team';
import Tools from '../components/Tools'
import Explanation from '../components/Explanation';
import { Container } from 'reactstrap';

function LandingPage() {
    return (
        <Container>
            <Explanation />
            <Tools/>
            <Team />
            <Weather />
        </Container>
    )
}

export default LandingPage;