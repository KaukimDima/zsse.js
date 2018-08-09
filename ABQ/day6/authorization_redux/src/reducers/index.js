import {combineReducers} from 'redux';
import {ADD_COMMENT} from '../actions/commentsTypes';




const comments = (
  state = [{id : '', text: ''}],
  action
) => {
  switch (action.type) {

    case ADD_COMMENT:
      
    
      //console.log("stateeee",state)
      return [...state, action.payload]
      
      

    case "DELETE_COMMENT":
    //console.log("deletteeee", state.comments )
    //console.log("asdfsafasfas",action.payload);
      const newarr = state.filter((el , i)=> 
        // console.log("asdfsafasfas", el)
          el.id != action.payload
      )
      //console.log("deletteeee",newarr )
      state = [...newarr]
      return state;
      

    default:
      return state;
  }
};


const loginState = (state = false, action ) => {
  switch (action.type) {
  case "LOG_IN":
  console.log("stateeee login",state)
 return true

 case "LOG_OUT":
 //console.log("stateeee",state)
return false

default:
 return state;
}
}


export default combineReducers({
  comments,
  loginState
});


export const getComments = state => state.comments;
export const getFlagLogin = state => state.loginState;
export const getFirst10Comments = state =>
  state.comments.comments.slice(0, 10);
