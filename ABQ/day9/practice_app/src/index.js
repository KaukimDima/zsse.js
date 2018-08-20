import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import createStore from './store';
import {connect} from 'react-redux';
import {fetchFireFlyEpisodsRequest} from './actions';
import GetJson from './GetJson';

import {
  getEpisodes,
  getError,
  getIsFetching,
  getIsFetched
} from './reducers';

const store = createStore();

class App extends Component {
  state = {
    click : false
   }
  // hadleClcik = e => {
  //   const {
  //     isFetched,
  //     fetchFireFlyEpisodsRequest
  //   } = this.props;

  //   if (!isFetched) fetchFireFlyEpisodsRequest();

  // }
  // componentDidMount() {
  //   const {
  //     isFetched,
  //     fetchFireFlyEpisodsRequest
  //   } = this.props;

  //   if (!isFetched) fetchFireFlyEpisodsRequest();
  // }

  render() {
    

    return (
      <div>

        <button type = "button" onClick = { () => this.setState({ click : !this.state.click}) }> CLick it </button>
        { this.state.click ? <GetJson /> : () => ""}
        {/* {episodes.map((el, i) => (
          <div key={i}>
            <p>{el.text}</p>
          </div>
        ))} */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  episodes: getEpisodes(state),
  error: getError(state),
  isFetching: getIsFetching(state),
  isFetched: getIsFetched(state)
});

const mapDispatchToProps = {
  fetchFireFlyEpisodsRequest
};

const EnhancedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

ReactDOM.render(
  <Provider store={store}>
    <EnhancedApp />
  </Provider>,
  document.getElementById('root')
);
