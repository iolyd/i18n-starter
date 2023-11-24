import { client } from '$lib/db/client.server';
import { db } from '$lib/db/db.server';

export const load = async () => {
	const translations = client.get();
	console.log('Query count', db.queryCount);
	return {
		translations
	};
};
