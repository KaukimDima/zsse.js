import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
  state = {
    counter: 0,
    error: null,
    errorInfo: null
  };
  constructor(props) {
    super(props);
    console.log('App constructor');
  }

  componentWillMount() {
    console.log('App componentWillMount');
  }

  componentDidMount() {
    console.log('App componentDidMount');
  }

  componentWillUnmount() {
    console.log('App componentWillUnmount');
    clearInterval(this.intervalId);
  }

  handleClick = () => {
    this.setState(state => ({counter: state.counter + 1}));
  };

  componentWillReceiveProps(nextProps) {
    console.log('App componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('App shouldComponentUpdate');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('App componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);

    // rollbar.error(error, {stackTrace: errorInfo});
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    console.log('App render');
    const {counter, error} = this.state;
    if (error) {
      return <p>Что то пошло не так</p>;
    }
    return (
      <div>
        <button onClick={this.handleClick}>Update counter</button>
        <UpdateComponent counter={counter} />
      </div>
    );
  }
}

class UpdateComponent extends Component {
  constructor(props) {
    super(props);
    console.log('UpdateComponent constructor');
  }

  componentWillMount() {
    console.log('UpdateComponent componentWillMount');
  }

  componentDidMount() {
    console.log('UpdateComponent componentDidMount');
  }

  componentWillUnmount() {
    console.log('UpdateComponent componentWillUnmount');
    clearInterval(this.intervalId);
  }

  componentWillReceiveProps(nextProps) {
    console.log('UpdateComponent componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('UpdateComponent shouldComponentUpdate');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('UpdateComponent componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('UpdateComponent componentDidUpdate');
  }

  render() {
    console.log('UpdateComponent render');
    const {counter} = this.props;
    if (counter === 10) {
      throw new Error('karamba!');
    } else {
      return <p className="counter-p">{counter}</p>;
    }
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
