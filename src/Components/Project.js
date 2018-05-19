import React, { Component } from 'react';
import './Project.css';


export class Project extends Component {

	render(){
		return(
				<div className="projectsContainer pageContent">
					{this.props.projects.map(element => {
						return (
							<div key={element.projectName} className="project">
									<div className="projectName">{element.projectName}</div>
									<div className="techUsed">Built with {element.techUsed}</div>
									<div className="projectURL" ><a target="_blank" href={element.projectURL}>{element.projectURL}</a></div>
									<div className="description">{element.description}</div>
							</div>
						)
					})}
				</div>
		);
	}
}