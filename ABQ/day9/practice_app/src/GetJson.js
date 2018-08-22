import React, {Component} from 'react';
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
export default class GetJson extends Component {
   
   
    componentDidMount() {
    const {
      isFetched,
      fetchFireFlyEpisodsRequest
    } = this.props;

    if (!isFetched) fetchFireFlyEpisodsRequest();
  }





    render(){
        
        
        const {isFetching, error, episodes} = this.props;
        console.log(this.props);
        if (isFetching) {
          return <p>Идет загрузка</p>;
        }
    
        if (error !== null) {
          return <p style={{color: 'red'}}>Ошибка! {error}</p>;
        }

        
        return(

            <div>
                dsfsafsa

                </div>
        )
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
  
  const EnhancedGetJson = connect(
    mapStateToProps,
    mapDispatchToProps
  )(GetJson);


    