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
    
      const newarr = state.filter((el , i)=> 
        // console.log("asdfsafasfas", el)
         //console.log("asdfsafasfas",action.payload);
          el.id != action.payload
      )
      console.log("deletteeee",newarr )
      return [
       
        newarr
      ];
      
    default:
      return state;
  }
};





export default combineReducers({
  comments
});


export const getComments = state => state.comments;
export const getFirst10Comments = state =>
  state.comments.comments.slice(0, 10);
