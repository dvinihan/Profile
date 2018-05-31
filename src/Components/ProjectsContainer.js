import React, { Component } from 'react';
import {Project} from './Project';
import './Project.css';


export class ProjectsContainer extends Component {

	render(){
		return(
				<div className="pageContent">

          <div className="projectsWrapper">
            <h1 className="projectHeader">Major Projects</h1>

              <div className="majorProjectsContainer">
                {this.props.projects.filter(project => project.scope === "major").map(element => {
                  return (
                    <Project project = {element} />
                  )
                })}
              </div>


            <h2 className="projectHeader">Small Projects</h2>
            <div className="minorProjectsContainer">
                {this.props.projects.filter(project => project.scope === "minor").map(element => {
                  return (
                    <Project project = {element} />
                  )
                })}
            </div>
          </div>
    
				</div>
		);
	}
}