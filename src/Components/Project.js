import React, { Component } from 'react';
import './Project.css';


export class Project extends Component {

	render(){
		return(
			<div key={this.props.project.projectName} className="project">
					<div className="projectName">{this.props.project.projectName}</div>
					<div className="techUsed">Built with {this.props.project.techUsed}</div>
					<div className="projectURL" ><a target="_blank" href={this.props.project.projectURL}>{this.props.project.projectURL}</a></div>
					<div className="description">{this.props.project.description}</div>
			</div>
		);
	}
}