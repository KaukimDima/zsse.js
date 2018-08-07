import {combineReducers} from 'redux';

const comments = ( state = { count :0, comments : []}, action) => {
    switch (action.type){
    case "ADD_COMMENT":
        return {
        ...state,
        comments : [...state, comments, action],
        count : state.count + 1
    }
    default:
    return state;
}
}


export default (state = {}, action) => ({
    comments : comments(state.comments, action)
})