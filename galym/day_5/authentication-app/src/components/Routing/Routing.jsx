import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
	Link,
} from "react-router-dom";
import Blog from '../Blog/Blog';
import Login from '../Login/Login';
/* import urls from './urls' */

class Routing extends Component {
  render() {
    return (
      <div className="Routing">
        <Router>
					<div>
						<ul>
							<li>
								<Link to="/">Blog</Link>
							</li>
						</ul>

						<hr />

						{/* <Route path="*" render={ () => <Redirect to="/login" />} /> */}
						<Route exact path="/blog" component={ Blog } />
						<Route path="/login" component={ Login } />
					</div>
        </Router>
      </div>
    );
  }
}

export default Routing;
