import React, { Component } from "react";
import "./App.css";
import { ProjectsContainer } from "./Components/ProjectsContainer.js";
import { NavItem } from "./Components/NavItem.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.setpageContent = this.setpageContent.bind(this);

    this.state = {
      projects: [
        {
          projectName: "SpotTempo (in progress)",
          projectURL: "http://spottempo.surge.sh",
          techUsed: "React, Spotify API",
          scope: "major",
          description:
            "For my first major application, I set out to solve a problem from my everyday life- finding music on Spotofy to fit my current running speed. This app will allow Spotify users to select a specific personal playlist, and search for songs by BPM in that playlist. Challenges I encountered on this project were maintaining login state for the user, connecting properly to each Spotify API endpoint, and creating an app flow that allows users to smoothly log in and then access their music."
        },
        {
          projectName: "Blue Forum",
          projectURL: "http://blue-forum.surge.sh",
          techUsed: "React",
          scope: "minor",
          description:
            "My first independent React app. Employs props, state, and components to render a sleek interface for writing comments. My next goal with this project is to add a backend with MongoDB so that posts can be preserved between sessions."
        },
        {
          projectName: "Jammin",
          projectURL: "http://daniel_v_jammin.surge.sh/",
          techUsed: "React",
          scope: "minor",
          description:
            "Created as a part of the Codecademy React certificate. Employed newly acquired skills including passing props, setting state, and watching for text input."
        },
        {
          projectName: "Tic-Tac-Toe",
          projectURL: "http://dv-tictactoe.surge.sh",
          techUsed: "React",
          scope: "minor",
          description:
            "Simple Tic-Tac-Toe game using CSS Grid for layout, and React to implement square components."
        },
        {
          projectName: "Pong",
          projectURL: "http://dv-pong.surge.sh",
          techUsed: "Javascript",
          scope: "minor",
          description:
            "Built entirely in JavaScript, HTML and CSS, this project uses event watchin on the DOM to process arrow key input."
        },
        {
          projectName: "War (in progress)",
          projectURL: "http://dv-war.surge.sh/",
          techUsed: "Javascript",
          scope: "minor",
          description:
            "WORKING -- Simple War game that generates random cards for the user and the computer player."
        },
        {
          projectName: "Task Manager",
          projectURL: "http://dv-task-manager.surge.sh/",
          techUsed: "Javascript",
          scope: "minor",
          description: ""
        },
        {
          projectName: "Text Editor",
          projectURL: "http://dv-text-editor.surge.sh",
          techUsed: "Javascript",
          scope: "minor",
          description: ""
        }
      ],
      pageContent: {
        home: [
          "Welcome! I am a Software Developer with skills in HTML, CSS, JavaScript, ReactJS, Node.js, and more.",
          "I'm currently looking for a Software or Web Development position at a company or consulting agency in the Greater Minneapolis/St. Paul area. I enjoy learning on the job and extending my knowledge of varied technologies.",
          "I possess excellent organizational and technical skills, as well as highly developed communication skills. I love working independently, but also thrive in environments where teamwork and collaboration are prioritized.",
          "I'm always expanding my knowledge of HTML, CSS, JavaScript, ReactJS, Java, Ruby, and Salesforce technologies, and looking to build a network and a career in the Twin Cities. Currently my favorite resources include Codefights.com, Codecademy.com, Codeschool.com, FreeCodeCamp.org and its podcast, and the JS Jabber podcast.",
          "I have several years of professional experience, though my background is in singing and acting. I hold both a Bachelor of Arts and a Bachelor of Music from Lawrence University in Appleton, WI."
        ],
        contact: [
          'Email: <a href="mailto:daniel.vinitsky@gmail.com">daniel.vinitsky@gmail.com</a>',
          'Phone: <a href="tel:952-913-7157">952-913-7157</a>',
          'LinkedIn: <a target="blank" href="https://www.linkedin.com/in/daniel-vinitsky-80159488">https://www.linkedin.com/in/daniel-vinitsky-80159488</a>'
        ]
      },
      navItems: ["home", "contact", "portfolio"]
    };
  }

  setpageContent(section) {
    if (section === "portfolio") {
      document.getElementsByClassName("projectsWrapper")[0].style.display =
        "block";

      document.getElementsByClassName("pageContent")[0].innerHTML = "";
    } else {
      document.getElementsByClassName("projectsWrapper")[0].style.display =
        "none";

      let fullHTML = "";
      this.state.pageContent[section].forEach(paragraph => {
        fullHTML += "<p>" + paragraph + "</p>";
      });

      document.getElementsByClassName("pageContent")[0].innerHTML = fullHTML;
    }
  }

  render() {
    return (
      <div>
        <header>
          <img
            src={require("./self_picture.jpg")}
            alt="Daniel Vinitsky"
            className="profilePicture"
          />
          <h1>Daniel Vinitsky</h1>

          <NavItem
            onClick={this.setpageContent}
            navItems={this.state.navItems}
          />
        </header>

        <main>
          <div className="pageContent">
            {this.state.pageContent.home.map(paragraph => {
              return <p key={paragraph}>{paragraph}</p>;
            })}
          </div>

          <ProjectsContainer projects={this.state.projects} />
        </main>
      </div>
    );
  }
}

export default App;
