import { combineReducers } from 'redux';

const records = ( state = [], action ) => {
	switch(action.type) {
		case 'ADD_RECORD':
			return [ 
				...state, { 
				id : action.payload.id,
				text: action.payload.text
				}
			]
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
