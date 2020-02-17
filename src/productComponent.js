import React, { Component } from 'react';


class ProductComponent extends Component{
    constructor(props){
        super(props);
        this.addToCart = this.addToCart.bind(this);
        this.state = {
          item: this.props.item,
        };
    }

    addToCart(e){
      var cartlist = [];
      cartlist = this.props.getState().cart;
      cartlist.push(this.state.item);
      this.props.mergeState({cart: cartlist});
    }

    render() {
        return(
            <div>
                {this.state.item.productname}<br/>
                {this.state.item.productdescription}<br/>
                ${this.state.item.productprice}<br/>
              <img src={this.state.item.photourl} alt={this.state.item.productname} style={{width:"250px", height:"250px"}}/>
                <button type="button" onClick={this.addToCart} style={{margin:"10px"}}>Add To Cart!</button>
            </div>
        );
    }


}

export default ProductComponent;
