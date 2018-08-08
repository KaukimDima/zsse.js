import { combineReducers } from 'redux';

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
			state.splice(action.payload, 1);
			console.log(state);
			return state;
		default:
			return state;
	}
}

export default combineReducers({
	records
})

export const getRecords = state => state.records;

/* const id = ( state = [], action) => {
	switch(action.type) {
		case "ADD_RECORD":
			return state + 1;
		default:
			return state;
	}
};

const record = ( state = [], action) => {
	switch(action.type) {
		case "ADD_RECORD":
			return [ ...state, action.payload ]
		default: 
			return state;
	}
}

const records = combineReducers({
	id,
	record
});

export default (state = {}, action) => ({
	records: records(state.records, action)
})

export const getRecords = state => ({ 
	id : state.records.id,
	record : state.records.record
}) */
