import React, { Component } from 'react'

class productComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
          items: this.props.item,
        };
    }

    renderItem(i) {
        return(
            <div>
                {this.state.items[i].productname}
                {this.state.items[i].productdescription}
                {this.state.items[i].productprice}
                {this.state.items[i].photourl}
                {this.state.items[i].producttype}
            </div>
        )
    }
   
    render() {
        let rendered_items = [];
        let i;
        for (i=0;i < this.state.items.length; i++) {
            rendered_items.push(this.renderItem(i))
        }  

        return(
            {rendered_items}
        )      
    }


}
