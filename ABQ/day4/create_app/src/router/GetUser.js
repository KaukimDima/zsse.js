import React, { Component } from 'react';


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