import React from 'react';
import Tools from '../components/Tools'
import Explanation from '../components/Explanation';
import Weather from '../components/Weather';

function LandingPage() {
    return (
        <div>
            <Tools />
            <Explanation />
            <Weather />
        </div>
    )
}

export default LandingPage;