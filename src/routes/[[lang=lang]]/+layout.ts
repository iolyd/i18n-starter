import { getEventLanguageTag } from '$lib/i18n/event';

export async function load(event) {
	return {
		lang: getEventLanguageTag(event)
	} satisfies App.PageData;
}
