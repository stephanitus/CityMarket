import React, { Component } from 'react';
import './App.css';

class CartItem extends Component{

  render(){
    return(
      <div className="cartitem">
        <img src={this.props.item.photourl} alt={this.props.item.productdescription}/>
        {this.props.item.productname}
        {this.props.item.productprice}
      </div>
    );
  }
}

export default CartItem;
