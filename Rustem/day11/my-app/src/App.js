import React, { Component } from 'react';
import AppNav from './web/AppNav'

const navItems = [
  {
    "label": "Dashboard",
    "icon": "px-fea:home",
    "id": "dashboard"
  },
  {
    "label": "Analytics",
    "icon": "px-fea:analysis",
    "id": "analytics"
  },
  {
    "label": "Alerts",
    "icon": "px-fea:ealerts",
    "id": "alerts"
  }
];

class App extends Component {

  
    state = {

      "selectedItems":"Dashboard"
     
    }


  
  
    ComponentDidMount(){
      
      console.log(this.$appNav);

      this.$appNav.items = this.navItems;
  
      this.$appNav.addEventListener('selected-route-changed', this._handleSelectedRouteChanged, false);

    }


  
    
    render() {



      return (


  <div className="App">


  <AppNav
              items={navItems}
              onSelected = {this._handleSelectedRouteChanged} />
  
  <px-app-nav 
  
  ref =  {(n)=>{this.$appNav = n} }>

 </px-app-nav>

       
  </div>
  
  
  
      );
    }
  }
  
  export default App;