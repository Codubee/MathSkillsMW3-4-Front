import React from 'react';
import Member from './Member';
import '../styles/Team.css'

function Team() {
    const frontEnd = [
        {
            name: "Ayush",
            img: "https://cdn.discordapp.com/attachments/869305525945368657/869318856454311956/IMG_20201128_215604_619.jpg",
            university: "University of Texas at Dallas",
            level: "Junior",
            github: "https://github.com/Ayush-Gopisetty"
        },
        {
            name: "Eduardo",
            img: "https://cdn.discordapp.com/attachments/867627997413376000/867628923587526666/IMG-20210109-WA0003_2.jpg",
            university: "University of Texas at Dallas",
            level: "Junior",
            github: "https://github.com/trexrush"
        },
        {
            name: "Jocelyn",
            img: "https://cdn.discordapp.com/attachments/858807182206959649/869304730738884659/img_4.png",
            university: "University of Texas at Dallas",
            level: "Sophomore",
            github: "https://github.com/JocelynHeckenkamp"
        },
        {
            name: "Quy",
            img: "https://cdn.discordapp.com/attachments/858807182206959649/869304725839970314/img_1.png",
            university: "University of Texas at Dallas",
            level: "Junior",
            github: "https://github.com/tqyn117"
        },
        {
            name: "Riya",
            img: "https://cdn.discordapp.com/attachments/858807182206959649/869304724254511115/img.png",
            university: "University of Texas at Dallas",
            level: "Sophomore",
            github: "https://github.com/rng190001"
        }
    ];

    const backEnd = [
        {
            name: "Jason",
            img: "https://m.media-amazon.com/images/I/61U7aD1GDML._AC_SS450_.jpg",
            university: "university unknown",
            level: "level unknown",
            github: ""
        },
        {
            name: "Jesus",
            img: "https://cdn.discordapp.com/attachments/858807182206959649/869304728125861948/img_2.png",
            university: "University of Texas Rio Grande Valley",
            level: "Senior",
            github: "https://github.com/Martje55555"
        },
        {
            name: "Salman",
            img: "https://cdn.discordapp.com/attachments/858807182206959649/869304729124106310/img_3.png",
            university: "University of Texas at Dallas",
            level: "Sophomore",
            github: "https://github.com/salmanh123"
        },
        {
            name: "Suraj",
            img: "https://m.media-amazon.com/images/I/61U7aD1GDML._AC_SS450_.jpg",
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
                university={m.university}
                level={m.level}
                github={m.github}
            />)}

            <h2>Back-End</h2>
            {backEnd.map(m => <Member
                name={m.name}
                img={m.img}
                university={m.university}
                level={m.level}
                github={m.github}
            />)}
        </div>
    );
}

export default Team;
