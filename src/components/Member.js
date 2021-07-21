import React, { Component } from 'react';
import Jocelyn from './imgs/jocelyn.jpg';

class Member extends Component {
    static defaultProps = {
        name: "anonymous",
        university: "unknown university",
        level: "unknown level",
        github: "www.google.com"
    }

    render() {
        console.log(this.props.img);
        console.log({ Jocelyn });
        return (
            <div className="Member">
                <img src={this.props.img} alt={this.props.name} className="Member-img" />
                <p>{this.props.name}</p>
                <p>{this.props.university}</p>
                <p>{this.props.level}</p>
                <a href={this.props.github}><p>Github</p></a>
            </div>
        );
    }
}

export default Member;