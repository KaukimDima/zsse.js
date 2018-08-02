import React, { Component } from 'react';

class UserList extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  state = {
    users: []
  };

  componentDidMount() {
    console.log("componentdidmount");
    const self = this;
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then(response => response.json())
      .then(function(data) {
        self.setState({ users: data });
      });
  }

  componentDidCatch(error, info) {
    console.log(error, info)
  };

  render() {
    console.log("render");
    const { users } = this.state;
    if(error) {
        return render(
            <div>
                <h1>Что-то пошло не так</h1>
            </div>
        );
    }
    return (
      <div>
        <div>
          <h1>Нажми чтобы получить всех пользователй</h1>
        </div>
        <ul>
          {users.map(el => (
            <li key={el.id}>
              <hr />
              <div>{el.name}</div>
              <div>{el.phone}</div>
              <div>{el.email}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;

