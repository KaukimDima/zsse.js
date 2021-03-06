import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import createStore from './store';
import {connect} from 'react-redux';
import {fetchFireFlyEpisodsRequest} from './actions';

import {
  getEpisodes,
  getError,
  getIsFetching,
  getIsFetched
} from './reducers';

const store = createStore();

class App extends Component {

  state = {

    show:false
  }


  handleClick = e => {

    const {
      isFetched,
    } = this.props;
    if (!isFetched) fetchFireFlyEpisodsRequest();

    this.setState({show:true})

  }
  componentDidMount() {
    const {
      isFetched,
      fetchFireFlyEpisodsRequest
    } = this.props;

    if (!isFetched) fetchFireFlyEpisodsRequest();
  }

  render() {
    const {isFetching, error, episodes} = this.props;

    console.log(episodes)

    if (isFetching) {
      return <p>Идет загрузка</p>;
    }

    if (error !== null) {
      return <p style={{color: 'red'}}>Ошибка! {error}</p>;
    }

    return (
      
      <div>

        <button onClick = {this.handleClick}> click me! </button>
          {episodes.map((el, i) => (
            <h3 key={i}>
            {el.title}
            </h3>
          ))}

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
