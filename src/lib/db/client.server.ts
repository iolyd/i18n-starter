import { LOAD_DEPENDENCIES } from '$lib/constants';
import type { ServerLoadEvent } from '@sveltejs/kit';
import { db } from './db.server';

export const client = {
	get() {
		db.queryCount++;
		return db.translations;
	},
	getWithLang(event: ServerLoadEvent) {
		event.depends(LOAD_DEPENDENCIES.Lang);
		db.queryCount++;
		return db.translations[event.locals.lang];
	}
};
