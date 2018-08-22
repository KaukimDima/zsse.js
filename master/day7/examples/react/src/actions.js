import {createActions} from 'redux-actions';

export const  {
  some: {
  some: {
      fetchRequest: fetchFireFlyEpisodsRequest,
      fetchSuccess: fetchFireFlyEpisodsSuccess,
      fetchFailure: fetchBlogFail
  }
  }
} = createActions({
  SOME: {
  SOME: {
      FETCH_REQUEST: undefined,

      FETCH_SUCCESS: json => json,
     

      FETCH_FAILURE: undefined
  }
  }
});

export const  {
  fetch: {
    todos: {
        fetchRequest: fetchTodosRequest,
        fetchSuccess: fetchTodosSuccess,
      fetchFailure: fetchTodosFail
    }
  }
} = createActions({
  FETCH: {
    TODOS: {
        FETCH_REQUEST: undefined,

        FETCH_SUCCESS: json => json,
      

        FETCH_FAILURE: undefined
    }
  }
});


console.log(fetchFireFlyEpisodsRequest)


