import React, { Component } from 'react';
import './Business.css'

class Business extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      summary: this.props.summary,
      picloc: this.props.picloc
    };
  }

  render(){
    return(
      <div className="businesses">
        <img src={this.state.picloc}/>
        <p>{this.state.name}</p>
        <p>{this.state.summary}</p>
      </div>
    )
  }
}

export default Business;
