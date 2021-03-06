import {createActions} from 'redux-actions';

export const  {
  some: {
  some: {
      fetchRequest: fetchFireFlyEpisodsRequest,
      fetchSuccess: fetchFireFlyEpisodsSuccess,
      fetchFailure: fetchFireFlyEpisodsFailure
  }
  }
} = createActions({
  SOME: {
  SOME: {
      FETCH_REQUEST: undefined,

      FETCH_SUCCESS:  json => json,

      FETCH_FAILURE: undefined
  }
  }
});



console.log(fetchFireFlyEpisodsFailure.toString())