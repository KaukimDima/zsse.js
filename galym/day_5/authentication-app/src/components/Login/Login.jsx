import React, { Component } from 'react';
import './Login.css';
/* import axios from 'axios'; */
import { Route, Redirect } from "react-router-dom";
import { Blog } from '../Blog/Blog';

class Login extends Component {
	
	state = {
		auth: false,
		form : {},
	}

	handleChange = (e) => {
		const name = e.target.name;
		const { form } = this.state; 
		form[name] = e.target.value;
		this.setState({ form : { ...form } });
	}

	handleSubmit = (e) => {
		const { auth } = this.state
		e.preventDefault();
		/* axios.post(`URL`, {this.state.form} )
			.then( res => console.log(res.data) ); */
		/* if( username === form.username && password === form.password ) this.setState({ auth : true }); */
		this.setState({ auth : !auth });
		if(this.state.auth) {
			<Route
				render = { props => logged ? <Login /> : <Redirect to='/' /> }
				exact
				path='/products/:id'
			/>
		}
	}
	
	render() {
    return (
      <div className="Login">
				<h1>Sign In</h1>

        <form onSubmit={this.handleSubmit}>
					<input type="text" className="form-control" onChange={this.handleChange} placeholder="Username" aria-label="Username" name="username" aria-describedby="basic-addon1" />
					<input type="password" className="form-control" onChange={this.handleChange} placeholder="Password" aria-label="Password" name="password" aria-describedby="basic-addon1" />
					<input type="submit" className="btn btn-primary" value="Sign In" />
				</form>
      </div>
    );
  }
}

export default Login;
