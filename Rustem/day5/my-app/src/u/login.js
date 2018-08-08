import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Link } from "react-router-dom";

class Login extends Component {

    state = {
    
      name: "name",
    
      password: "password"
    
    };
    
    handleInput = (e) => {
    
    
      const info = e.target.value;
    
      console.log();
    
    }
    
    
      render() {
            
        return (
          <div>
             <form>
             <label>
               Name:
              <input  type = "text" onChange = {this.handleInput} placeholder = " Name "/> 
              </label>
    
              <br/>
    
              <label>
               pass:
              <input type = "password" onChange = {this.handleInput} placeholder = "password"/>
    
              </label>
    
    
              <input type="submit" value="Submit" />
    
            
             </form>
       
          </div>
        );
    
      }

    }

    export default Login
    
        