import type { LoadEvent, RequestEvent, ServerLoadEvent } from '@sveltejs/kit';
import { sourceLanguageTag } from '../../paraglide/runtime';
import { isLanguageTag } from './validation';

/**
 * Parse a client router load event or server-side request event and consistently extract a valid locale.
 * Add your own logic for user lang cookie handling or routing fallback.
 */
export function getEventLanguageTag<E extends RequestEvent | ServerLoadEvent | LoadEvent>(
	event: E
) {
	const param = event.params['lang'];
	if (param && isLanguageTag(param)) {
		return param;
	}
	// Fallback to default locale if the url has no lang param.
	return sourceLanguageTag;
}
