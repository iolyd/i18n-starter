import type { Handle } from '@sveltejs/kit';
import { setLanguageTag } from '../../paraglide/runtime';
import { getEventLanguageTag } from './event';

const handle = (async ({ event, resolve }) => {
	event.locals.lang = getEventLanguageTag(event);
	setLanguageTag(() => event.locals.lang);

	const res = resolve(event, {
		transformPageChunk(input) {
			return input.html.replace('%lang%', event.locals.lang);
		}
	});
	return res;
}) satisfies Handle;

export default handle;
