import React, { Component } from 'react';
import './NavItem.css';


export class NavItem extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            
        }
    }

    handleClick(e){
        this.props.onClick(e.target.innerHTML);
    }

    render(){
        return(
            <div className="navMenu">
                {this.props.navItems.map(element => {
                    return <div key={element} onClick={this.handleClick} className="navItem">{element}</div>
                    
                })}
            </div>
        );
    }
}