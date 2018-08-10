import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, HashRouter, Route, Link, Redirect, Switch } from "react-router-dom";


const isLoggedInState= {
   flag : false
}

const loginAttributes = {
  name:"name",
  password:"password"
}


class App extends Component {
  
  state = {
    flag: false
  }

  componentDidlMount(){
    const flag = isLoggedInState.flag
    this.setState({flag : {flag}})
  }
  render() {

    return ( 
      <Routing stateApp = {this.state}/>
    );
  }
}


class Routing extends Component{

  render(){
    const {stateApp} = this.props;
  //   if(!stateApp.flag) {
  //     return (
  //       <Login stateApp = {this.stateApp}/>
  //  );}
     
   return (
        <Router>
         <Route path="/login" component={Login} />
          <Route path="/" component={MainContent} />
          <Route path="*" component={MainContent} />
        </Router>
      )
    


  
}}




class Login extends Component{
  
  handleClick = (e) => {
    const {stateApp} = this.props;
    const inputName = document.getElementsByTagName("input")[0].value;
    const inputPassword = document.getElementsByTagName("input")[1].value;
    console.log(inputName,loginAttributes.name, inputPassword,inputPassword )
    if(inputName==loginAttributes.name && inputPassword == loginAttributes.password){
      this.stateApp.flag = true;
      console.log("TRUEEEE")
      console.log(isLoggedInState.flag)
      // return()
    }else{
      this.stateApp.flag = false
      
      console.log("false")
      alert('wrong')
      // return(
      //   <Router>
      //   <Redirect to="/login"/>
      //   </Router>
      // )
    }

  } 
  render(){
    return(

      <div className="Login">
        <input type="Name"/>
        <input type="Password"/>
        <button className = "button" onClick={this.handleClick}>Submit</button>
      </div>
      
     


    )
  }
}

class MainContent extends Component{
  
  render(){
    
    const {flag} = isLoggedInState;
    return(
      
      <div className="MainContent">
      <h1>Header</h1>
       <p>MAIN CONTENT</p>
      <h2>Footer</h2>
      </div>

    )}

  }


export default App;
