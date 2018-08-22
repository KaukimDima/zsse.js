import {combineReducers} from 'redux';

const budget = (
    state = [10000],
    action
  ) => {
    switch (action.type) {

        case "SUBMIT_ALL_PRODUCT":
        return  state;


        case "SELECT_RANDOM_PRODUCT":
        return  state;


        default:
      return state;
    }
  }

const products = (
    state = [
        {id : 1, item: 'Chai', quantity: 10, price: 1000, restQuantity: 10},
        {id : 2, item: 'Moloko', quantity: 15, price: 500, restQuantity: 15},
        {id : 3, item: 'Hleb', quantity: 15, price: 500, restQuantity: 15}
    ],
        
    action
     ) => {
    switch (action.type) {

        case "SUBMIT_ALL_PRODUCT":
        return  state;


        case "SELECT_RANDOM_PRODUCT":
        return  state;


        default:
      return state;
    }
  }


  export default combineReducers({
    budget,
    products
  });


export const getProducts = state => state.products;
export const getBudget = state => state.budget;