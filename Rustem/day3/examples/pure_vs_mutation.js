import React, {Component, PureComponent} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
  state = {
    data: [1, 2, 3]
  };

  a  = {
    bbb : "str",
    str : [
      {
        1 : 11
      },
      {
        2 : 11
      },
    ]
  }

  handleClick = () => {
    const {data} = this.state;
    [...data, newdata]
    data.push(this.state.data.length + 1);
    this.setState({
      data: data
    });
  };

  render() {
    const {data} = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>Update!</button>
        <Updater data={data} />
      </div>
    );
  }
}

class Updater extends Component {
  render() {
    const {data} = this.props;
    return (
      <div>
        {data.map(element => (
          <p key={element}>{element}</p>
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
