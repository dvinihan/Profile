import React, { Component } from 'react';
import './App.css';
import {Project} from './Components/Project.js';
import {NavItem} from './Components/NavItem.js';


class App extends Component {
  constructor(props){
    super(props);
    this.setIntroText = this.setIntroText.bind(this);
    this.state = {
        projects: [
          {
            projectName: "Forum",
            projectURL: "https://github.com/dvinitsky/forum",
            techUsed: "React"
          },
          {
            projectName: "Jammin",
            projectURL: "https://github.com/dvinitsky/Jammin-React",
            techUsed: "React"
          },
          {
            projectName: "Tic-Tac-Toe",
            projectURL: "https://github.com/dvinitsky/Tic-Tac-Toe",       
            techUsed: "React"
          },
          {
            projectName: "Pong",
            projectURL: "https://github.com/dvinitsky/Pong-game",
            techUsed: "Javascript"
          },
          {
            projectName: "War",
            projectURL: "https://github.com/dvinitsky/War",
            techUsed: "Javascript"
          },
          {
            projectName: "Task Manager",
            projectURL: "https://github.com/dvinitsky/my-task-manager",
            techUsed: "Javascript"
          },
          {
            projectName: "Text Editor",
            projectURL: "https://github.com/dvinitsky/text-editor-js",
            techUsed: "Javascript"
          }
        ],
        pageIntros: {
          home: "This is the Home Page. Welcome!",
          about: "My name is Daniel, I'm a guy.",
          contact: "Email or call me!"
        },
        navItems: ['home', 'about', 'portfolio', 'contact'],

      }
    }
  
    setIntroText(section) {
      if(section === "portfolio"){
        document.getElementsByClassName('projectsContainer')[0].style.display = "block";
        document.getElementsByClassName('introText')[0].innerHTML = "";
      }
      else {
        document.getElementsByClassName('projectsContainer')[0].style.display = "none";
        document.getElementsByClassName('introText')[0].innerHTML = this.state.pageIntros[section];
      }

    }
  

  render() {
   
    return (
      <div>
        <header>
          <h1>Daniel Vinitsky</h1>

          <NavItem onClick={this.setIntroText} navItems={this.state.navItems} />
          
        </header>

        <main>
          <p className="introText">{this.state.pageIntros.home}</p>

          <Project projects={this.state.projects}/>

        </main>
      </div>
    );
  }
}


export default App;
