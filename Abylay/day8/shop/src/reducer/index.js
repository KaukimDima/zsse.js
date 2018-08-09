import { combineReducers } from 'redux';

const products = (state={count:0, products:[]}, action) => {
    switch (action.type) {
        case "ADD_PRODUCT" :
        return {
            ...state,
            products :[...state, products, action.payload],
            count: state.count+1
        }
        default:
        return state;
    }
}
// const count = (state=0,action) => {
//     switch (action.type) {
//         case "ADD_PRODUCT " :
//         return state + action.payload.count   ;
        
//         case "REMOVE_PRODUCT " :
//         return state - action.payload.count;

//         default:
//         return state;
//     }
// }

// const users = combineReducers({
//     count,
//     users_record
// })

export default (state={},action) => ({
products: products(state.products, action),
}
)
//export const getProductsCount = state => state.comments.count;
export const getProducts = state => state.products.products;