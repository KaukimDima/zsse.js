import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    const {
      isFetched,
      fetchFireFlyEpisodsRequest
    } = this.props;

    if (!isFetched) fetchFireFlyEpisodsRequest();
  }

  render() {
    const { isFetching, error, episodes } = this.props;
    console.log(isFetching);
    if (isFetching) {
      return <p>Идет загрузка</p>;
    }

    if (error !== null) {
      return <p style={{ color: 'red' }}>Ошибка! {error}</p>;
    }
    console.log(this.props.episodes);
    return (
      <div>
        {/* {episodes.map((el, i) => (
          <div key={i}>
            {el.text}
          </div>
        ))} */}
      </div>
    );
  }
}
export default App;
