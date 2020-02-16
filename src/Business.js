import React, { Component } from 'react';
import './Business.css'

class Business extends Component{
  constuctor(props){
    super(props);
    this.state = {
      name: this.props.name,
      summary: this.props.summary
    }
  }

  render(){

  }
}
