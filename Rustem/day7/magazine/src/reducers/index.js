import { combineReducers } from 'redux';



const productsAll = [
    {
            
            product: "tea",

            cost: 1000,

            number:10 
        },

      {

        product: "milk",     
        cost: 500,
        number:15 



    },

    {

           product: "bread", 

           cost: 500,
    
           number:15


    }
]

const products = (state = productsAll, action) => {

    switch (action.type) {

        case 'TEA':

        return {

            // ...state,
            // tea : {...state.tea, tea: state.tea.number - action.payload}

            //T
         };

         case 'MILK':

         return {

            //M

         };

         case 'BREAD':

         return {

            //M
         };

         default:

         return state;

    }
};



export default combineReducers({
	products
})

export const getProducts = state => state.products;

//var getRecords = function(state) {return state.records}
