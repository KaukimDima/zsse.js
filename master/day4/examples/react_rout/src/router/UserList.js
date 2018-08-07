import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
class UserList extends Component {
    
    
    state = {
        users : []
    }

    componentDidMount () {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(data => data.json())
          .then(json => this.setState({ users: json.slice(0, 10) }));

    }


    render() { 
        console.log(this.props);
        const {users} = this.state;
        return (
            <div>
                <div>
                    {users.map( (el, i) => 
                        <div key={i}>
                            <hr/>
                            <Link to={`getUser/${el.id}`}>{el.name}</Link> <br/>
                            <span>{el.username}</span> <br/>
                            <span>{el.email}</span>
                        </div> )}
                </div>
            </div>
        );
    }
}
 
export default UserList;