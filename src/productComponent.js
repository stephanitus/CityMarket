import React, { Component } from 'react';


class ProductComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
          item: this.props.item,
        };
    }

    render() {
        return(
            <div>
                {this.state.item.productname}<br/>
                {this.state.item.productdescription}<br/>
                ${this.state.item.productprice}<br/>
                <img src={this.state.item.photourl} style={{width:"250px", height:"250px"}}/>
            </div>
        );
    }


}

export default ProductComponent;
