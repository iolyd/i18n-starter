import { client } from '$lib/db/client.server';
import { db } from '$lib/db/db.server';

export const load = async (event) => {
	const translation = client.getWithLang(event);
	console.log('Query count', db.queryCount);
	return {
		translation
	};
};
