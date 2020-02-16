import React, { Component } from 'react';
import './App.css';
import Titlebar from './Titlebar';
import Business from './Business';
import BusinessPage from './BusinessPage';
import CartItem from './CartItem';

class App extends Component {
  constructor(props){
    super(props);
    this.mergeState = this.mergeState.bind(this);
    this.getState = this.getState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmptySubmit = this.handleEmptySubmit.bind(this);
    this.state = {
      cart: [],
      form: "businesses",
      loggedin: false,
      selectedOption: "customer",
      items: [
        {
          productname: "Chicken Drumsticks",
          productdescription: "4 raw chicken drumsticks",
          productprice: "4.99",
          photourl: "https://previews.123rf.com/images/valery121283/valery1212831907/valery121283190700777/127749137-raw-chicken-legs-isolated-on-white-background.jpg",
          producttype: "food",
          producer: "Schmidt's Poultry"
        },{
          productname: "Designer Hoodie",
          productdescription: "Comfy and stylish hoodie!",
          productprice: "49.99",
          photourl: "https://chilledworld.com/image/cache/hoodies/designer%20Hoodie%20b-600x600.jpg",
          producttype: "clothing",
          producer: "Kenny's Clothing"
        },{
          productname: "Propane Tank",
          productdescription: "Fuel for your grill.",
          productprice: "39.99",
          photourl: "https://cdn11.bigcommerce.com/s-vmvni2zq0j/images/stencil/1280x1280/products/44568/56220/6902027__85991.1500584805.jpg?c=2&imbypass=on",
          producttype: "hardware",
          producer: "Penny's Propane"
        },{
          productname: "Hammer",
          productdescription: "A sturdy tool for anyone.",
          productprice: "6.99",
          photourl: "https://images-na.ssl-images-amazon.com/images/I/71tTWyypTKL._AC_SX522_.jpg",
          producttype: "hardware",
          producer: "Jack's Hardware"
        },{
          productname: "House Cleaning Service",
          productdescription: "Indepth house cleaning.",
          productprice: "99.99",
          photourl: "https://images-na.ssl-images-amazon.com/images/I/81KBr70-REL._AC_SL1500_.jpg",
          producttype: "services",
          producer: "Laury's Housekeeping"
        },{
          productname: "Beehive Tending",
          productdescription: "Have us tend to beehives for you and collect honey!",
          productprice: "49.99",
          photourl: "https://images.ctfassets.net/cnu0m8re1exe/6NeDywiU9G0nkD4OAMi83J/2a73d55ca6bb977f7f6e61d39513d682/Honeybee.jpg?w=650&h=433&fit=fill",
          producttype: "services",
          producer: "Beekeeping Professionals"
        },{
          productname: "Small Fries",
          productdescription: "Small order. Big taste.",
          productprice: "2.99",
          photourl: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Fries-Small-Medium.jpg",
          producttype: "food",
          producer: "Minidonalds"
        },{
          productname: "Mega Burger",
          productdescription: "Massive whopping cheeseburger!",
          productprice: "8.99",
          photourl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/1200px-RedDot_Burger.jpg",
          producttype: "food",
          producer: "King's Burgers"
        }
      ],
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
          businessname: "Jack's Hardware",
          businessdescription: "Better than Lowe's",
          photourl: "https://images-na.ssl-images-amazon.com/images/I/71tTWyypTKL._AC_SX522_.jpg",
          producttype: "hardware"
        },{
          businessname: "Laury's Housekeeping",
          businessdescription: "Get your house clean before the end of Winter!",
          photourl: "https://images-na.ssl-images-amazon.com/images/I/81KBr70-REL._AC_SL1500_.jpg",
          producttype: "services"
        },{
          businessname: "Beekeeping Professionals",
          businessdescription: "You've never had real honey until now.",
          photourl: "https://images.ctfassets.net/cnu0m8re1exe/6NeDywiU9G0nkD4OAMi83J/2a73d55ca6bb977f7f6e61d39513d682/Honeybee.jpg?w=650&h=433&fit=fill",
          producttype: "services"
        },{
          businessname: "Minidonalds",
          businessdescription: "Not at all related to McDonalds",
          photourl: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Fries-Small-Medium.jpg",
          producttype: "food"
        },{
          businessname: "King's Burgers",
          businessdescription: "Best burgers in the city",
          photourl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/1200px-RedDot_Burger.jpg",
          producttype: "food"
        }
      ]
    };
  }

  getDesc(){
    var desc = "";
    for (const business of this.state.businesses){
      if(this.state.form===business.businessname){
        desc = business.businessdescription;
        break;
      }
    }
    return desc;
  }

  getItems(){
    const items = [];
    for (const item of this.state.items){
      if(item.producer===this.state.form){
        items.push(item);
      }
    }
    return items;
  }

  getState(){
    return this.state;
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
      photourl: e.target[10].value,
      producttype: e.target[11].value,
      producer: e.target[5].value
    };
    const products = [...this.state.items, product]
    const businesses = [...this.state.businesses, business]
    console.log(businesses);
    console.log(products);
    this.setState({form: "businesses", loggedin: true, items: products, businesses: businesses });
  }

  render(){
    const cartitems = [];
    for(const cartitem of this.state.cart){
      cartitems.push(<CartItem key={cartitem.productname} item={cartitem} />)
    }

    const cards = [];
    for (const business of this.state.businesses){
      cards.push(<Business key={business.businessname} name={business.businessname} summary={business.businessdescription} picloc={business.photourl} mergeState={this.mergeState}/>);
    }

    const foodcards = [];
    for (const business of this.state.businesses){
      if(business.producttype==="food"){
        foodcards.push(<Business key={business.businessname} name={business.businessname} summary={business.businessdescription} picloc={business.photourl} mergeState={this.mergeState}/>);
      }
    }

    const clothingcards = [];
    for (const business of this.state.businesses){
      if(business.producttype==="clothing"){
        clothingcards.push(<Business key={business.businessname} name={business.businessname} summary={business.businessdescription} picloc={business.photourl} mergeState={this.mergeState}/>);
      }
    }

    const hardwarecards = [];
    for (const business of this.state.businesses){
      if(business.producttype==="hardware"){
        hardwarecards.push(<Business key={business.businessname} name={business.businessname} summary={business.businessdescription} picloc={business.photourl} mergeState={this.mergeState}/>);
      }
    }

    const servicescards = [];
    for (const business of this.state.businesses){
      if(business.producttype==="services"){
        servicescards.push(<Business key={business.businessname} name={business.businessname} summary={business.businessdescription} picloc={business.photourl} mergeState={this.mergeState}/>);
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
            <form>
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
    }else if(this.state.form==="cart"){
      return(
        <div className="App">
          <Titlebar loggedin={this.state.loggedin} mergeState={this.mergeState} />
          <div className="Body">
            {cartitems}
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

              <h2>Mission Statement</h2>
              <h3>Empower local businesses with the resources necessary to thrive</h3>

              <h2>Who are We?</h2>
              <h3>We are three Boston University students looking to Bridge the Gap between
                local businesses and large corporations.
              </h3>


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
      return(
        <div className="App">
          <Titlebar loggedin={this.state.loggedin} mergeState={this.mergeState} />
          <div className="Body">
            <BusinessPage name={this.state.form} items={this.getItems()} description={this.getDesc()} mergeState={this.mergeState}  getState={this.getState}/>
          </div>
        </div>
      );
    }
  }
}

export default App;
