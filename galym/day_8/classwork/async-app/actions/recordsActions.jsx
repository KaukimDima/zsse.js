import { ADD_RECORD, REMOVE_RECORD, LOG_OUT, LOG_IN } from './recordsTypes';

export const addRecord = payload => ({
	type: ADD_RECORD,
	payload
});

export const removeRecord = payload => ({
	type: REMOVE_RECORD,
	payload
});

export const login = payload => ({
	type: LOG_IN,
	payload
});

export const logout = payload => ({
	type: LOG_OUT,
	payload
});