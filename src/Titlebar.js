import React, { Component } from 'react';
import './Titlebar.css';

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
          <div className="title">
            <div className="wrapper">
              <h4><a onClick={()=>{this.formChange("businesses")}} href="#root">CityMarket</a></h4>
            </div>
          </div>

          <div className="navbar">
            <div className="wrapper">
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

              <ul>
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
          <div className="title">
            <div className="wrapper">
              <h4><a onClick={()=>{this.formChange("businesses")}} href="#root">CityMarket</a></h4>
            </div>
          </div>

          <div className="navbar">
            <div className="wrapper">
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

              <ul>
                <li><a onClick={()=>{this.formChange("about")}} href="#root">About</a></li>
                <li><a onClick={()=>{this.formChange("login")}} href="#root" style={{align: "right"}}>Login</a></li>
                <li><a onClick={()=>{this.formChange("signup")}} href="#root" style={{align: "right"}}>Sign Up</a></li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Titlebar;
