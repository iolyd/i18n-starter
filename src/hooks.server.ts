import handleLang from '$lib/i18n/hook.server';
import { sequence } from '@sveltejs/kit/hooks';

export const handle = sequence(handleLang /*Append your own handlers here */);
