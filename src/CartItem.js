import React, { Component } from 'react';
import './App.css';

class CartItem extends Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div className="cartitem">
        <img src={this.props.item.photourl}/>
        {this.props.item.productname}
        {this.props.item.productprice}
      </div>
    );
  }
}

export default CartItem;
