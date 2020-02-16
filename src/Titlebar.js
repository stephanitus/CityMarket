import React, { Component } from 'react';
import './Titlebar.css';

class Titlebar extends Component{
  render(){
    return(
      <div>
        <div className="title">
          CityMarket
        </div>
        <div className="navbar">
          <ul>
            <li><a href="">Login</a></li>
            <li><a href="">Sign Up</a></li>
            <li><a href="">About</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Titlebar;
