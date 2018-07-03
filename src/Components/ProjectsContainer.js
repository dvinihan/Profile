import React, { Component } from "react";
import { Project } from "./Project";
import "./Project.css";

export class ProjectsContainer extends Component {
  render() {
    return (
      <main>
        <div className="projectsWrapper">
          <p className="github">
            <a target="blank" href="https://github.com/dvinitsky/Profile">
              https://github.com/dvinitsky/Profile
            </a>
          </p>

          <h1 className="projectHeader">Professional Projects</h1>
          <div className="professionalProjectsContainer">
            {this.props.projects
              .filter(project => project.scope === "professional")
              .map(element => {
                return <Project project={element} />;
              })}
          </div>

          <h2 className="projectHeader">Major Projects</h2>
          <div className="majorProjectsContainer">
            {this.props.projects
              .filter(project => project.scope === "major")
              .map(element => {
                return <Project project={element} />;
              })}
          </div>

          <h2 className="projectHeader">Small Projects</h2>
          <div className="minorProjectsContainer">
            {this.props.projects
              .filter(project => project.scope === "minor")
              .map(element => {
                return <Project project={element} />;
              })}
          </div>
        </div>
      </main>
    );
  }
}
