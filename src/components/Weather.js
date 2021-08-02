import React from 'react';
import './Weather.css';
import { WiThermometer } from 'react-icons/wi';

function Weather() {
    return (
        <div className="weather-div">
            <p>Right now it is</p>
            <p className="weather-temperature">42</p>
            <p>degrees in Dallas, TX</p>
        </div>
    );
}

export default Weather;