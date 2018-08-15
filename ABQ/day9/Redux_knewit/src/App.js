import React, { Component } from 'react';
import {ClientWithRedux}  from './index';
import {CustomerWithRedux} from './index';
import {CompanyWithRedux} from './index';

import Client from "./components/client";

class App extends Component {

  state = {
    showProducts : false,
    showApprove : false
  }
  
  handleClickSelect = (e) => {
    e.preventDefault();
    const randIdProduct = Math.floor(Math.random() * 3) + 1;

    // return (

    //   <div>
    //     <ClientWithRedux randIdProduct = {randIdProduct}/>
    //   <Client />
    //      {/* <p>Item:{itemOfRandomProduct}</p>
    //      <p>Price:{itemOfRandomProduct}</p>
    //      <p>Quantity:{selectedQuantity}</p>
    //      <p>Total amount money to pay for it:{totalAmount}</p> */}
    //    </div>
    // )



  }
  
  handleClickSubmit = (e) => {
    
    
  }
  
  
  
  render() {
   // console.log(this.props);
   const randIdProduct = Math.floor(Math.random() * 3) + 1;
    return (
      <div className="App">
      
      <div style={{display : "inline-block"}}>
      <button type="select" onClick = {() => this.setState({showProducts:true})}>SELECT </button>
      <button type="submit" onClick = {this.handleClickSubmit}>SUBMIT </button>
      {this.state.showProducts ? <ClientWithRedux randIdProduct = {randIdProduct}/> : <CustomerWithRedux/> }
        </div>

        <div  style={{display : "inline-block", padding: 100}}>
      <CustomerWithRedux/>

      </div>

      </div>
    );
  
  }
  
}

export default App;


// Client сделал заявку? подтвердил -> увелисил budget  
// Customer получил заявку? подтвердил -> уменьшил budget  