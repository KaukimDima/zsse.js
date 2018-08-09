import {ADD_COMMENT} from './commentsTypes';

export const addComment = payload => {

  return {
    type: ADD_COMMENT,
     payload : payload
  }
}


export const deleteComment = payload => ({
  type: "DELETE_COMMENT",
  payload
});


