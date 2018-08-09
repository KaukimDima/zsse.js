import { ADD_RECORD } from './recordsTypes';
import { REMOVE_RECORD } from './recordsTypes';

export const addRecord = payload => ({
	type: ADD_RECORD,
	payload
});

export const removeRecord = payload => ({
	type: REMOVE_RECORD,
	payload
});