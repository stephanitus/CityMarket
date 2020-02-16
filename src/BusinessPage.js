import React, { Component } from 'react'
import './BusinessPage.css'
import ProductComponent from './ProductComponent';



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
        var comps = [];
        for (let i = 0; i < this.state.items.length; i++){
            comps.push(<ProductComponent key={i} item={this.state.items[i]} mergeState={this.props.mergeState} getState={this.props.getState}/>);
        }

        return (
            <div className="wrapper">
                <div className="business_title">
                    {this.state.name}
                </div>

                <div className="product_listing">
                    <div className="flex-container">
                        {comps}
                    </div>

                </div>
            </div>
        )
    }
}

export default BusinessPage;
