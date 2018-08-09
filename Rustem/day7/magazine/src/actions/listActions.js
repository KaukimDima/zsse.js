import { TEA } from './listTypes';
import { MILK } from './listTypes';
import { BREAD } from './listTypes';

export const buyTea = payload => ({
	type: TEA,
	payload
});

export const buyMilk = payload => ({
	type: MILK,
	payload
});
export const buyBread = payload => ({
	type: BREAD,
	payload
});
