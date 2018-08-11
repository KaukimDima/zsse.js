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
			return state.filter( (el) => el.id !== action.payload );
		case 'LOG_IN':
			return state.login = true;
		case 'LOG_IN':
			return state.logout = false;
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
