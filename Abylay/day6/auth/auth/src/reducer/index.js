import { combineReducers } from 'redux';
let id=0;
const createId = () => {
    id =id + 1;
    return id;
}
const handleblogs = (state={'result' : [], count : 0 }, action) => {
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

export default combineReducers({
    count,
    handleblogs
})


export const getBlogs = state => state.handleblogs;
export const getBlogsCount = state => state.handleblogs.count;
