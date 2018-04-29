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
            projectURL: "example"
          },
          {
            projectName: "Jammin",
            projectURL: "example2"
          },
          {
            projectName: "Tic-Tact-Toe",
            projectURL: "example3"
          }
        ],
        pageIntros: {
          home: "This is the Home Page. Welcome!",
          about: "My name is Daniel, I'm a guy.",
          portfolio: "I'm working on the following things.",
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
