import {createActions} from 'redux-actions';

export const {
  firefly: {
    episods: {
      fetchRequest: fetchFireFlyEpisodsRequest,
      fetchSuccess: fetchFireFlyEpisodsSuccess,
      fetchFailure: fetchFireFlyEpisodsFailure
    }
  }
} = createActions({
  FIREFLY: {
    EPISODS: {
      FETCH_REQUEST: undefined,

      FETCH_SUCCESS: [
        episods => episods,
        episods => ({length: episods.length})
      ],

      FETCH_FAILURE: undefined
    }
  }
});
