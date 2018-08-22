import React, { Component } from 'react';
import './App.css';
import AppNav from './AppNav';

class App extends Component {
  state = {
    numb: 12,
    accordion : [{
        innerText : "Inner txext",
        headerValue : "Header value"
    },
    {
      innerText : "Inner txext",
      headerValue : "Header value"
  }
  ],
  navData : [
    {
      "label" : "HOME",
      "icon" : "px-fea:home",
      "id" : "home"
    },
    {
      "label" : "Alerts",
      "icon" : "px-fea:alerts",
      "id" : "dashboard"
    }
  ]
  }
//  selectedRoute = (el) => {
//     return(
//       {el}
//     )
//   }
  
  componentDidMount() {
    console.log(this.$alertLabel)
    console.log(this.$accordion)
  }
  handleClick = e => {
    const randNumb = Math.floor(Math.random() * 100)
    this.setState({numb : randNumb}) 
  }


  render() {
    return (
      <div className="App">
      {/* <px-alert-label ref = {(n) => this.$alertLabel = n} label="Label text" type="healthy">
      </px-alert-label>
      <px-alert-label
      label="Label text"
      type="important">
      </px-alert-label>
 */}

      {/* <px-accordion-group >
        {this.state.accordion.map( (el, i) => 
        <px-accordion  key = {i}
        ref = {(n)=> this.$accordion = n}  
        
        header-value= {el.headerValue}
        >
       {el.innerText}
       
        </px-accordion>

         )}
        </px-accordion-group>

      <button type = "button" onClick = {this.handleClick}>CLICK </button>
      <px-gauge 
       ref = {(n)=> this.$gauge = n}
       error="[ [0, 12], [79, 100] ]"
    abnormal="[  [12, 32], [68, 79]  ]"
    anomaly="[ [32, 45],  [54, 68]  ]"
    normal="[ [45, 54] ]"
       value={this.state.numb}>
        </px-gauge> */}
{/* selectedRoute = {this.selectedRoute} */}
       <AppNav navData = {this.state.navData} />
        {this.selectedRoute}
      </div>


    );
  }
}

export default App;
