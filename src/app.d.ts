// See https://kit.svelte.dev/docs/types#app

import type { LanguageTag } from '$lib/i18n/types';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			lang: LanguageTag;
		}
		interface PageData {
			lang: LanguageTag;
		}
		// interface Platform {}
	}
}

export {};
