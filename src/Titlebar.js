import React, { Component } from 'react';
import './Titlebar.css';
import fire from './config/fire';

class Titlebar extends Component{
  constructor(props){
    super(props);
    this.state = {
      loggedin: this.props.loggedin
    };
  }

  static getDerivedStateFromProps(nextProps, prevState){
    return{
      loggedin: nextProps.loggedin
    };
  }

  formChange(key){
    this.props.mergeState({form: key});
  }

  render(){
    if(this.state.loggedin){
      return(
        <div>
        <div className="account-container">
          <button className="account-button" style={{margin: "0px 2px 20px 93px"}} onClick={this.props.logout} href="#root"><a>Sign Out</a></button>
        </div>
          <div className="title">
            <div className="wrapper">
              <h4><a onClick={()=>{this.formChange("businesses")}} href="#root">CityMarket</a></h4>
            </div>
          </div>

          <div className="navbar">
            <div className="wrapper">
            <ul>
            <li><a onClick={()=>{this.formChange("businesses")}} href="#root">Home</a></li>
              <div className="dropdown">
                <button className="dropbtn">Shopping
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                  <a onClick={()=>{this.formChange("food")}} href="#root">Food</a>
                  <a onClick={()=>{this.formChange("clothing")}} href="#root">Clothing</a>
                  <a onClick={()=>{this.formChange("hardware")}} href="#root">Hardware</a>
                  <a onClick={()=>{this.formChange("services")}} href="#root">Services</a>
                </div>
              </div>
                <li><a onClick={()=>{this.formChange("profile")}} href="#root">Profile</a></li>
                <li><a onClick={()=>{this.formChange("about")}} href="#root">About</a></li>
              </ul>
            </div>
          </div>
        </div>
      );
    }else{
      return(
        <div>
          <div className="account-container">
            <button className="account-button" onClick={()=>{this.formChange("login")}} href="#root"><a>Login</a></button>
            <button className="account-button" onClick={()=>{this.formChange("signup")}} href="#root"><a>Sign Up</a></button>
          </div>
          <div className="title">
            <div className="wrapper">
              <h4><a onClick={()=>{this.formChange("businesses")}} href="#root">CityMarket</a></h4>
            </div>
          </div>

          <div className="navbar">
            <div className="wrapper">
            <ul>
            <li><a onClick={()=>{this.formChange("businesses")}} href="#root">Home</a></li>
              <div className="dropdown">
                <button className="dropbtn">Shopping
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                  <a onClick={()=>{this.formChange("food")}} href="#root">Food</a>
                  <a onClick={()=>{this.formChange("clothing")}} href="#root">Clothing</a>
                  <a onClick={()=>{this.formChange("hardware")}} href="#root">Hardware</a>
                  <a onClick={()=>{this.formChange("services")}} href="#root">Services</a>
                </div>
              </div>

              <li><a onClick={()=>{this.formChange("about")}} href="#root">About</a></li>
            </ul>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Titlebar;
