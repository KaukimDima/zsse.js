import {
  fetchFireFlyEpisodsRequest,
  fetchFireFlyEpisodsSuccess,
  fetchFireFlyEpisodsFailure
} from './actions';
import {combineReducers} from 'redux';
import {handleAction, handleActions} from 'redux-actions';

const result = handleAction(
  fetchFireFlyEpisodsSuccess,
  (state, action) => action.payload,
  []
);

const error = handleAction(
  fetchFireFlyEpisodsFailure,
  (state, action) => action.error,
  null
);

const isFetching = handleActions(
  {
    [fetchFireFlyEpisodsRequest]: () => true,
    [fetchFireFlyEpisodsSuccess]: () => false,
    [fetchFireFlyEpisodsFailure]: () => false
  },
  false
);

const isFetched = handleActions(
  {
    [fetchFireFlyEpisodsRequest]: () => false,
    [fetchFireFlyEpisodsSuccess]: () => true,
    [fetchFireFlyEpisodsFailure]: () => true
  },
  false
);

export default combineReducers({
  error,
  result,
  isFetched,
  isFetching
});

export const getEpisodes = state => state.result;
export const getIsFetching = state => state.isFetching;
export const getIsFetched = state => state.isFetched;
export const getError = state => state.error;
