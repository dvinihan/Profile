import React, { Component } from 'react';
import './App.css';
import {Project} from './Components/Project.js';
import {NavItem} from './Components/NavItem.js';


class App extends Component {
  constructor(props){
    super(props);
    this.setpageContent = this.setpageContent.bind(this);
    this.state = {
        projects: [
          {
            projectName: "Blue Forum",
            projectURL: "https://github.com/dvinitsky/forum",
            techUsed: "React",
            description: 'My first independent React app. Employs props, state, and components to render a sleek interface for writing comments. My next goal with this project is to add a backend with MongoDB so that posts can be preserved between sessions.'
          },
          {
            projectName: "Jammin",
            projectURL: "https://github.com/dvinitsky/Jammin-React",
            techUsed: "React",
            description: 'Created as a part of the Codecademy React certificate. Employed newly acquired skills including passing props, setting state, and watching for text input.'
          },
          {
            projectName: "Tic-Tac-Toe",
            projectURL: "https://github.com/dvinitsky/Tic-Tac-Toe",
            techUsed: "React",
            description: 'Simple Tic-Tac-Toe game using CSS Grid for layout, and React to implement square components.'
          },
          {
            projectName: "Pong",
            projectURL: "https://github.com/dvinitsky/Pong-game",
            techUsed: "Javascript",
            description: 'Built entirely in JavaScript, HTML and CSS, this project uses event watchin on the DOM to process arrow input.'
          },
          {
            projectName: "War",
            projectURL: "https://github.com/dvinitsky/War",
            techUsed: "Javascript",
            description: 'Simple War game that generates random cards for the user and the computer player.'
          },
          {
            projectName: "Task Manager",
            projectURL: "https://github.com/dvinitsky/my-task-manager",
            techUsed: "Javascript",
            description: ''
          },
          {
            projectName: "Text Editor",
            projectURL: "https://github.com/dvinitsky/text-editor-js",
            techUsed: "Javascript",
            description: ''
          }
        ],
        pageContent: {
          home: ["Welcome! I am a Software Developer with skills in HTML, CSS, JavaScript, ReactJS, Node.js, and more.", 
          "I'm currently looking for a Software or Web Development position at a company or consulting agency in the Greater Minneapolis/St. Paul area. I enjoy learning on the job and extending my knowledge of varied technologies."],
          about: ["Hi! I'm an up-and-coming Web and Software Developer learning on an independent path. I possess excellent organizational and technical skills, as well as highly developed communication skills. I love working independently, but also thrive in environments where teamwork and collaboration are prioritized.",
          "I'm always expanding my knowledge of HTML, CSS, JavaScript, ReactJS, Java, Ruby, and Salesforce technologies, and looking to build a network and a career in the Twin Cities. Currently my favorite resources include Codefights.com, Codecademy.com, Codeschool.com, FreeCodeCamp.org and its podcast, and the JS Jabber podcast.",
          "I have several years of professional experience, though my background is in singing and acting. I hold both a Bachelor of Arts and a Bachelor of Music from Lawrence University in Appleton, WI."],
          contact: ["Email: <a href='mailto:daniel.vinitsky@gmail.com'>daniel.vinitsky@gmail.com</a>", "Phone: <a href='tel:952-913-7157'>952-913-7157</a>", "LinkedIn: <a href= 'https://www.linkedin.com/in/daniel-vinitsky-80159488'>https://www.linkedin.com/in/daniel-vinitsky-80159488</a>"]
        },
        navItems: ['home', 'about', 'portfolio', 'contact']
      }
    }
  
    setpageContent(section) {
      if(section === "portfolio"){
        document.getElementsByClassName('projectsContainer')[0].style.display = "grid";
        document.getElementsByClassName('pageContent')[0].innerHTML = "";
      }
      else {
        document.getElementsByClassName('projectsContainer')[0].style.display = "none";
        let fullHTML = '';
        this.state.pageContent[section].forEach(paragraph => {
          fullHTML += '<p>' + paragraph + '</p>';
        });

        document.getElementsByClassName('pageContent')[0].innerHTML = '<p>' + fullHTML + '</p>';
      }

    }
  

  render() {
   
    return (
      <div>
        <header>
          <h1>Daniel Vinitsky</h1>

          <NavItem onClick={this.setpageContent} navItems={this.state.navItems} />
          
        </header>

        <main>
          <p className="pageContent">{this.state.pageContent.home}</p>

          <Project projects={this.state.projects}/>

        </main>
      </div>
    );
  }
}


export default App;
