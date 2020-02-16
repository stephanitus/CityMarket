import React, { Component } from 'react'
import './BusinessPage.css'


class BusinessPage extends Component{
    constructor(props){
        super(props);
        this.state = {
<<<<<<< HEAD
          items: this.props.items,
          name: this.props.name,
          description: this.props.description
=======
          items: this.props.item,
          name: this.props.name,
          description: this.props/description
>>>>>>> f94196ebb62916cdcc019a528644601015cf8c4a
        };
      }

      
    render() {
        return (
            <div className="wrapper">
                <div className="business_title">
                    {this.state.name}
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

export default BusinessPage;
