import React, { Component } from 'react';
import './Project.css';


export class Project extends Component {

    render(){
        return(
            <div className="projectsContainer introText">
                {this.props.projects.map(element => {
                    return (
                        <div key={element.projectName} className="group">
                            <div className="projectName">{element.projectName}</div>
                            <div className="projectURL">{element.projectURL}</div>
                        </div>
                    )
                })}
            </div>
        );
    }
}