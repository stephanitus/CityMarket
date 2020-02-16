import React, { Component } from 'react';
import './App.css';
import Titlebar from './Titlebar';
import Business from './Business';

class App extends Component {
  constructor(props){
    super(props);
    this.mergeState = this.mergeState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmptySubmit = this.handleEmptySubmit.bind(this);
    this.state = {
      form: "businesses",
      loggedin: false,
      selectedOption: "customer",
      items: [],
      businesses: [
        {
          businessname: "Schmidt's Poultry",
          businessdescription: "Raw chicken, soups, and salads",
          photourl: "https://previews.123rf.com/images/valery121283/valery1212831907/valery121283190700777/127749137-raw-chicken-legs-isolated-on-white-background.jpg",
          producttype: "food"
        },{
          businessname: "Kenny's Clothing",
          businessdescription: "Shirts, shoes, and pants",
          photourl: "https://chilledworld.com/image/cache/hoodies/designer%20Hoodie%20b-600x600.jpg",
          producttype: "clothing"
        },{
          businessname: "Penny's Propane",
          businessdescription: "Grilling essentials",
          photourl: "https://cdn11.bigcommerce.com/s-vmvni2zq0j/images/stencil/1280x1280/products/44568/56220/6902027__85991.1500584805.jpg?c=2&imbypass=on",
          producttype: "hardware"
        },{
          businessname: "Papa's Hardware",
          businessdescription: "Better than Lowe's",
          photourl: "https://images-na.ssl-images-amazon.com/images/I/71tTWyypTKL._AC_SX522_.jpg",
          producttype: "hardware"
        }
      ]
    };
  }

  mergeState(partialState){
    if(partialState){
      this.setState(Object.assign(this.state, partialState));
    }
  }

  handleEmptySubmit(e){
    this.setState({form: "businesses", loggedin: true});
  }

  handleSubmit(e){
    const business = {
      businessname: e.target[5].value,
      businessdescription: e.target[6].value,
      producttype: e.target[11].value,
      photourl: e.target[10].value
    };

    const product = {
      productname: e.target[7].value,
      productdescription: e.target[8].value,
      productprice: e.target[9].value,
      producttype: e.target[11].value
    };
    const products = [...this.state.items, product]
    const businesses = [...this.state.businesses, business]
    console.log(businesses);
    console.log(products);
    this.setState({form: "businesses", loggedin: true, items: products, businesses: businesses });
  }

  render(){
    const cards = [];
    for (const business of this.state.businesses){
      cards.push(<Business key={business.businessname} name={business.businessname} summary={business.businessdescription} picloc={business.photourl}/>);
    }

    const foodcards = [];
    for (const business of this.state.businesses){
      if(business.producttype==="food"){
        foodcards.push(<Business key={business.businessname} name={business.businessname} summary={business.businessdescription} picloc={business.photourl}/>);
      }
    }

    const clothingcards = [];
    for (const business of this.state.businesses){
      if(business.producttype==="clothing"){
        clothingcards.push(<Business key={business.businessname} name={business.businessname} summary={business.businessdescription} picloc={business.photourl}/>);
      }
    }

    const hardwarecards = [];
    for (const business of this.state.businesses){
      if(business.producttype==="hardware"){
        hardwarecards.push(<Business key={business.businessname} name={business.businessname} summary={business.businessdescription} picloc={business.photourl}/>);
      }
    }

    const servicescards = [];
    for (const business of this.state.businesses){
      if(business.producttype==="services"){
        servicescards.push(<Business key={business.businessname} name={business.businessname} summary={business.businessdescription} picloc={business.photourl}/>);
      }
    }

    if(this.state.form==="businesses"){
      return(
        <div className="App">
          <Titlebar loggedin={this.state.loggedin} mergeState={this.mergeState} />
          <div className="Body">
            {cards}
          </div>
        </div>
      );
    }else if(this.state.form==="login"){
      return(
        <div className="App">
          <Titlebar loggedin={this.state.loggedin} mergeState={this.mergeState} />
          <div className="Body">
            <form onSubmit={this.handleSubmit}>
              <label>
                Email:
                <input type="text"  />
              </label><br/>
              <label>
                Password:
                <input type="password"  />
              </label><br/>
            <input type="submit" onClick={()=>{this.setState({form: "businesses", loggedin: true})}} value="Submit" />
            </form>
          </div>
        </div>
      );
    }else if(this.state.form==="food"){
      return(
        <div className="App">
          <Titlebar loggedin={this.state.loggedin} mergeState={this.mergeState} />
          <div className="Body">
            {foodcards}
          </div>
        </div>
      );
    }else if(this.state.form==="clothing"){
      return(
        <div className="App">
          <Titlebar loggedin={this.state.loggedin} mergeState={this.mergeState} />
          <div className="Body">
            {clothingcards}
          </div>
        </div>
      );
    }else if(this.state.form==="hardware"){
      return(
        <div className="App">
          <Titlebar loggedin={this.state.loggedin} mergeState={this.mergeState} />
          <div className="Body">
            {hardwarecards}
          </div>
        </div>
      );
    }else if(this.state.form==="services"){
      return(
        <div className="App">
          <Titlebar loggedin={this.state.loggedin} mergeState={this.mergeState} />
          <div className="Body">
            {servicescards}
          </div>
        </div>
      );
    }else if(this.state.form==="profile"){
      return(
        <div className="App">
          <Titlebar loggedin={this.state.loggedin} mergeState={this.mergeState} />
          <div className="Body">

          </div>
        </div>
      );
    }else if(this.state.form==="about"){
      return(
        <div className="App">
          <Titlebar loggedin={this.state.loggedin} mergeState={this.mergeState} />
          <div className="Body">

          </div>
        </div>
      );
    }else if(this.state.form==="signup" && this.state.selectedOption==="localbusiness"){
      return(
        <div className="App">
          <Titlebar loggedin={this.state.loggedin} mergeState={this.mergeState} />
          <div className="Body">
            <form onSubmit={this.handleSubmit}>
              <label>
                Email:
                <input type="text"  />
              </label><br/>
              <label>
                Password:
                <input type="password"  />
              </label><br/>
              <label>
                Confirm password:
                <input type="password"  />
              </label><br/>

              <div className="radio">
                <label>
                  <input type="radio" onChange={(e)=>{this.setState({selectedOption: e.target.value})}} checked={this.state.selectedOption === 'localbusiness'}/>
                  Local Business
                </label>
                <label>
                  <input type="radio" onChange={(e)=>{this.setState({selectedOption: e.target.value})}} checked={this.state.selectedOption === 'customer'}/>
                  Customer
                </label>
              </div>

              <label>
                Business name:
                <input type="text" name="businessname"  />
              </label><br/>
              <label>
                Business description:
                <input type="text" name="businessdescription"  />
              </label><br/>
              <label>
                Product name:
                <input type="text" name="productname"  />
              </label><br/>
              <label>
                Product description:
                <input type="text" name="productdescription"  />
              </label><br/>
              <label>
                Product price:
                <input type="text" name="price"  />
              </label><br/>
              <label>
                Photo URL:
                <input type="text" name="url"  />
              </label><br/>
            <select name="type" >
                <option value="food">Food</option>
                <option value="clothing">Clothing</option>
                <option value="hardware">Hardware</option>
                <option value="services">Service</option>
              </select><br/>

            <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      );
    }else if(this.state.form==="signup"){
      return(
        <div className="App">
          <Titlebar loggedin={this.state.loggedin} mergeState={this.mergeState} />
          <div className="Body">
            <form>
              <label>
                Email:
                <input type="text"  />
              </label><br/>
              <label>
                Password:
                <input type="password"  />
              </label><br/>
              <label>
                Confirm password:
                <input type="password"  />
              </label><br/>
              <div className="radio">
                <label>
                  <input type="radio" value="localbusiness" onChange={(e)=>{this.setState({selectedOption: e.target.value})}} checked={this.state.selectedOption === 'localbusiness'}/>
                  Local Business
                </label>
                <label>
                  <input type="radio" value="customer" onChange={(e)=>{this.setState({selectedOption: e.target.value})}} checked={this.state.selectedOption === 'customer'}/>
                  Customer
                </label>
              </div>
            <input type="submit" onClick={this.handleEmptySubmit} value="Submit" />
            </form>
          </div>
        </div>
      );
    }else{
      console.log("state.form error");
    }
  }
}

export default App;
