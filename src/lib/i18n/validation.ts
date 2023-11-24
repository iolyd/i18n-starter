import { availableLanguageTags } from '../../paraglide/runtime';
import type { LanguageTag } from './types';

/**
 * Validate that a value is a valid and expected language tag according to paraglide's config.
 */
export function isLanguageTag(maybeLanguageTag: unknown): maybeLanguageTag is LanguageTag {
	return availableLanguageTags.indexOf(maybeLanguageTag as LanguageTag) > -1;
}
