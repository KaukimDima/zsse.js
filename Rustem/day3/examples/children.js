import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
  state = {
    data: [1, 2, 3]
  };

  handleClick = () => {
    const {data} = this.state;
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
        <Title>
          <span>
            <b>Karamba</b>
          </span>
        </Title>
      </div>
    );
  }
}

const Title = props => {
  console.log(props.children);
  return (
    <div>
      <h3 className="Title">
        {React.Children.map(props.children, el => (
          <p>{el}</p>
        ))}
      </h3>
      <hr />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
