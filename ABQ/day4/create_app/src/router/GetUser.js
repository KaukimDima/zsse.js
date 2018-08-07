import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Link } from "react-router-dom";

class GetUser extends Component { 


render(){
    return(
        <div className="GetUser">
            <input type=" " placeholder="Type id..."/> 
            <button type="button" className = "button" onClick = {this.handleClick}> Submit</button>
        </div>
    )
}


}

export default GetUser;