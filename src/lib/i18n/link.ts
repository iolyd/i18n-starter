import { page } from '$app/stores';
import { sourceLanguageTag } from '$paraglide/runtime';
import { resolvePath } from '@sveltejs/kit';
import { derived } from 'svelte/store';
import type { LanguageTag } from './types';

function tail(url: URL) {
	const str = url.toString();
	return str.split(url.origin)[1];
}

/**
 * Create a localizer for un-localized app-oriented hrefs.
 */
export function localize<T extends string | URL>(location: T, lang: LanguageTag) {
	const str = typeof location === 'string' ? location : tail(location);
	return resolvePath(`/[[lang]]${str}`, {
		lang: lang === sourceLanguageTag ? '' : lang
	});
}

/**
 * Derived store to compose locale-specific url strings.
 */
export const href = derived(page, ($page) => {
	return <H extends string>(href: H, lang: LanguageTag = $page.data.lang) => {
		return localize(href, lang);
	};
});

/**
 * Remove the locale segment form the current route url.
 */
export const delocalizedCurrentHref = derived(page, ($page) => {
	let path = $page.url.href.replace($page.url.origin, '');
	const param = $page.params.lang;
	if (param) {
		path = path.replace(`/${param}`, '');
	}
	return path;
});
