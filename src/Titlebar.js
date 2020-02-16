import React, { Component } from 'react';
import './Titlebar.css';

class Titlebar extends Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    return(
      <div>

        <div className="title">
          <div className="wrapper">
            <h4><a href="index.html">CityMarket</a></h4>
          </div>
        </div>

        <div className="navbar">
          <div className="wrapper">
            <div className="dropdown">
              <button className="dropbtn">Shopping
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <a href="index.html">Food</a>
                <a href="index.html">Clothing</a>
                <a href="index.html">Hardware</a>
                <a href="index.html">Services</a>
              </div>
            </div>

            <ul>
              <li><a href="index.html">About</a></li>
              <li><a href="index.html">Login</a></li>
              <li><a href="index.html">Sign Up</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Titlebar;
