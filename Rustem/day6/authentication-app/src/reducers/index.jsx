import { combineReducers, applyMiddleware } from 'redux';

let id = 0;
const getId = () => {
	return id += 1;
}


const records = ( state = [], action ) => {
	switch(action.type) {
		case 'ADD_RECORD':
			return [ 
				...state, { 
				id : getId(),
				text: action.payload
				}
			];
		case 'REMOVE_RECORD':
			const arr = state.filter((el) => el.id != action.payload);
			return arr;
		default:
			return state;
	}
}

export default combineReducers({
	records
})

export const getRecords = state => state.records;


//var getRecords = function(state) {return state.records}

// var arr = function(state.filter(el) {


// 	return el.id != action.payload
// })