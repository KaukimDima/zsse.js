import {combineReducers} from 'redux';


const comments = (state = {count: 0, comments: []}, action) => {

    switch(action.type) {

        case "ADD_COMMENT":

        return {

            ...state, 
            comments: [...state.comments,action.payload],
            count:state.count+1
        }
    default:
    return state;
    }
}


const count = (state = 0,action) => {

    switch(action.type) {

        case "ADD_USER":

        return state+1;
    default:
    return state;
    }
}




const recordUser = (state = [] , action) => {

    switch(action.type) {

        case "ADD_USER":

        return [...state,action.payload];
        
    default:
    return state;
    }
};

const users = combineReducers({

    count,
    recordUser
})




export default (state = {}, action) => ({

    comments: comments(state.comments, action),

    users: users[state.users, action]

})

export const getCommentsCounts = state => state.comments.count;
export const getComments = state => state.comments.comments;
export const getCommentsFirst = state => state.comments.comments.slice(0,10);



