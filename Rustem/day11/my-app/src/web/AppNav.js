import React, { Component } from 'react';

class AppNav extends Component {

  constructor(props) {
    super(props);
    this._handleSelectedRouteChanged = e => {
      const {value} = e.detail;
      console.log(e);
      console.log(e.detail);
      if (this.props.onSelectedRouteChanged && JSON.stringify(value) !== JSON.stringify(this.props.selectedRoute)) {
        this.props.onSelectedRouteChanged(e.detail.value);
      }
    };
  }

    state = {
     
    }

    componentDidMount(){

      console.log(this)
      this.$appNav.items = this.props.items;
      this.$appNav.addEventListener('selected-route-changed', (e) => this.props.onSelected(e.detail.value), false);

    }

    
    render() {


       

      return (


  <div className="App">


  <px-app-nav ref={n => {this.$appNav = n}}></px-app-nav>

  
          
        </div>
  
  
  
      );
    }
  }
  
  export default AppNav;