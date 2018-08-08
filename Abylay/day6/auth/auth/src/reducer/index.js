import { combineReducers } from 'redux';
let id=0;
const createId = () => {
    id =id + 1;
    return id;
}
const handleblogs = (state=[], action) => {
    const createId=this.state;
    switch (action.type) {
        case "ADD_BLOG" :
        return [
        ...state,
        {
            id:createId(),
            text:action.payload
        }
        ]
        case "REMOVE_BLOG" :
        let newstate = state.filter( el => id !== el.id);
        return newstate;
        default:
        return state;
    }
}

const count = (state=0,action) => {
    switch (action.type) {
        case "ADD_BLOG" :
        return state +1   ;

        case "REMOVE_BLOG" :
        return state -1   ;
        
        default:
        return state;
    }
}

const users = combineReducers({
    count,
    handleblogs
})




export default users;

export const getBlogs = state => state.handleblogs.text;
export const getBlogsCount = state => state.handleblogs.count;
