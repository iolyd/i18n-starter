import type { LanguageTag } from '$lib/i18n/types';

export const db = {
	queryCount: 0,
	translations: {
		fr: 'This is french data, supposedly.',
		en: 'This is english data',
		es: 'This is spanish data'
	} satisfies Record<LanguageTag, string>
};
