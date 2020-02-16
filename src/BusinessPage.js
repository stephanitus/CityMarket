import React, { Component } from 'react'
import './BusinessPage.css'


class BusinessPage extends Component{
    constructor(props){
        super(props);
        this.state = {
          items: this.props.items,
          name: this.props.name,
          description: this.props.description
        };
      }

    render() {
        return (
            <div className="wrapper">
                <div className="business_title">
                    {this.state.name}
                </div>

                <div className="product_listing">

                </div>
            </div>
        )
    }
}

export default BusinessPage;
