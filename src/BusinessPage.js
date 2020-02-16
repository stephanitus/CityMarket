import React, { Component } from 'react'
import './BusinessPage.css'


class BusinessPage extends Component{
    constructor(props){
        super(props);
        this.state = {
          items: this.props.item,
          name: this.props.name,
          description: this.props/description
        };
      }

      
    render() {
        return (
            <div className="wrapper">
                <div className="business_title">
                    {this.props.name}
                </div>

                <div className="product_listing">
                    <div className="flex-container">
                        <div>
                            Test
                        </div>
                        <div>
                            Test
                        </div>
                    </div>

                </div>







            </div>



        )
    }




}