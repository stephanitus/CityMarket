import React, { Component } from 'react';
import './Business.css'

class Business extends Component{
  constructor(props){
    super(props);
    this.updateForm = this.updateForm.bind(this);
    this.state = {
      name: this.props.name,
      summary: this.props.summary,
      picloc: this.props.picloc
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
     this.setState({ name: nextProps.name, summary: nextProps.summary, picloc: nextProps.picloc });
   }

   updateForm(e){
     this.props.mergeState({form: this.state.name});
   }

  render(){
    return(
      <a href="#root" onClick={this.updateForm}>
        <div className="businesses">
          <img src={this.state.picloc} alt={this.state.summary}/>
          <p>{this.state.name}</p>
          <p>{this.state.summary}</p>
        </div>
      </a>
    )
  }
}

export default Business;
