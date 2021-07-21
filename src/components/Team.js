import React, { Component } from 'react';
import Member from './Member';
import jocelyn from './imgs/jocelyn.jpg';

class Team extends Component {
    render() {
        const frontEnd = [
            {
                name: "Ayush",
                university: "University of Texas at Dallas",
                level: "unknown level",
                github: ""
            },
            {
                name: "Eduardo",
                university: "University of Texas at Dallas",
                level: "unknown level",
                github: "www.google.com"
            },
            {
                name: "Jocelyn",
                img: "jocelyn.jpg",
                university: "University of Texas at Dallas",
                level: "Sophomore",
                github: "https://github.com/JocelynHeckenkamp"
            },
            {
                name: "Quy",
                university: "University of Texas at Dallas",
                level: "Junior",
                github: "https://github.com/tqyn117"
            },
            {
                name: "Riya",
                university: "University of Texas at Dallas",
                level: "Sophomore",
                github: "https://github.com/rng190001"
            }
        ];

        const backEnd = [
            {
                name: "Jason",
                university: "university unknown",
                level: "level unknown",
                github: ""
            },
            {
                name: "Jesus",
                university: "University of Texas at Dallas",
                level: "Senior",
                github: "https://github.com/Martje55555"
            },
            {
                name: "Salman",
                university: "University of Texas at Dallas",
                level: "Sophomore",
                github: "https://github.com/salmanh123"
            },
            {
                name: "Suraj",
                university: "University of Texas at Dallas",
                level: "Junior",
                github: ""
            }
        ];

        return (
            <div className="Team">
                <h1>The Team</h1>
                <h2>Front-End</h2>
                {frontEnd.map(m => <Member
                    name={m.name}
                    img={m.img}
                    img="https://m.media-amazon.com/images/I/61U7aD1GDML._AC_SS450_.jpg"
                    university={m.university}
                    level={m.level}
                    github={m.github}
                />)}

                <h2>Back-End</h2>
                {backEnd.map(m => <Member
                    name={m.name}
                    img={m.img}
                    img="https://m.media-amazon.com/images/I/61U7aD1GDML._AC_SS450_.jpg"
                    university={m.university}
                    level={m.level}
                    github={m.github}
                />)}
            </div>
        );
    }
}

export default Team;