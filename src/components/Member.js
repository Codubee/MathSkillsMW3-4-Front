import React, { Component } from 'react';

class Member extends Component {
    static defaultProps = {
        name: "anonymous",
        university: "unknown university",
        level: "unknown level",
        github: "www.google.com"
    }

    render() {
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