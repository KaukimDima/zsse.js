import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Link } from "react-router-dom";

class EachUser extends Component { 

    state = {
        id : []
    }

   

    render(){
        // const {id} = this.state;
        // this.setState({id:this.props.someprop})
        
        // const {name, email} = this.props.someprop;
       
        return(
            <h1> ID: {this.props.match.params.id} </h1>
  
        )
    }


};



export default EachUser;