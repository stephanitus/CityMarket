import React, { Component } from 'react'

class BusinessPage extends Component{
    constructor(props){
        super(props);
        this.state = {
          name: this.props.name
        };
      }

    render() {
        return (
            <div className="wrapper">
                <div className="business_title">
                    {this.props.name}
                </div>

                <div>

                </div>







            </div>



        )
    }




}