import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Link } from "react-router-dom";

class GetUser extends Component { 


render(){
    console.log(this.props.match);
    return(
        <div className="GetUser">
            {`Your id ${this.props.match.params.id}`}
        </div>
    )
}


}

export default GetUser;