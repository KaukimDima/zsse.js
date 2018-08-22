import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { EnhancedApp1 } from "./index";

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
    if (isFetching) {
      return <p>Идет загрузка</p>;
    }

    if (error !== null) {
      return <p style={{ color: 'red' }}>Ошибка! {error}</p>;
    }
    return (
      <div>
        {/* {episodes.map((el, i) => (
          <div key={i}>
            {el.text}
          </div>
        ))} */}
        <EnhancedApp1 />
      </div>
    );
  }
}
export default App;
