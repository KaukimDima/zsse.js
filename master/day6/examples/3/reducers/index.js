import {combineReducers} from 'redux';


const comments = (
  state = {count: 0, comments : []},
  action
) => {
  return state;
};

const count = (state = 0, action) => {
  return state;
};

const posts = (state = [], action) => {
  return state;
};

const users = combineReducers({
  count, 
  posts
});


export default (state = {}, action) => ({
  comments: comments(state.comments, action),
  users: users(state.posts, action)
});