import {
  fetchFireFlyEpisodsRequest,
  fetchFireFlyEpisodsSuccess,
  fetchBlogFail
} from './actions';
import {combineReducers} from 'redux';
import {handleAction, handleActions} from 'redux-actions';

const episodes = handleAction(
  fetchFireFlyEpisodsSuccess,
  (state, action) => action.payload,
  []
);

const error = handleAction(
  fetchBlogFail,
  (state, action) => action.error,
  null
);


const isFetching = handleActions(
  {
    [fetchFireFlyEpisodsRequest]: () => true,
    [fetchFireFlyEpisodsSuccess]: () => false,
    [fetchBlogFail]: () => false
  },
  true
);

const isFetched = handleActions(
  {
    [fetchFireFlyEpisodsRequest]: () => false,
    [fetchFireFlyEpisodsSuccess]: () => true,
    [fetchBlogFail]: () => true
  },
  false
);

export default combineReducers({
  error,
  episodes,
  isFetched,
  isFetching
});

export const getEpisodes = state => state.episodes;
export const getIsFetching = state => state.isFetching;
export const getIsFetched = state => state.isFetched;
export const getError = state => state.error;
