import {createActions} from '../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/redux-actions';

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

      FETCH_SUCCESS: [
        json => json,
        json => ({length: json.length})
      ],

      FETCH_FAILURE: undefined
  }
  }
});



console.log(fetchFireFlyEpisodsFailure)