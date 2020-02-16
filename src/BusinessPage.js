import React, { Component } from 'react'
import './BusinessPage.css'


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

                <div className="product_listing">

                </div>







            </div>



        )
    }




}