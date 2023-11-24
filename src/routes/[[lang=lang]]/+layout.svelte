<script lang="ts">
	import { browser } from '$app/environment';
	import { invalidate } from '$app/navigation';
	import { page } from '$app/stores';
	import { LOAD_DEPENDENCIES } from '$lib/constants';
	import { delocalizedCurrentHref, href, localize } from '$lib/i18n/link';
	import * as m from '$paraglide/messages';
	import { derived } from 'svelte/store';
	import { availableLanguageTags, setLanguageTag } from '../../paraglide/runtime';

	setLanguageTag($page.data.lang);

	// Deriving the lang in its own store to simplify reactive block below
	// and avoid self-invoking loop between invalidate and $page update.
	const lang = derived(page, ($p) => $p.data.lang);

	$: if (browser) {
		setLanguageTag($lang);
		invalidate(LOAD_DEPENDENCIES.Lang);
	}
</script>

<header>
	<nav id="lang-switch">
		{#each availableLanguageTags as lang}
			<a
				href={localize($delocalizedCurrentHref, lang)}
				hreflang={lang}
				data-current
				data-sveltekit-keepfocus
				data-sveltekit-noscroll
				data-sveltekit-replacestate
				data-sveltekit-preload-data="off"
			>
				{m.languageName({}, { languageTag: lang })}
			</a>
		{/each}
	</nav>
	<nav id="db-nav">
		<a href={$href('/')}>{m.home()}</a>
		<a href={$href('/lang-agnostic')} data-sveltekit-preload-data="off">{m.langAgnostic()}</a>
		<a href={$href('/lang-specific')} data-sveltekit-preload-data="off">{m.langSpecific()}</a>
	</nav>
</header>
<slot />

<style lang="postcss">
	header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	nav {
		padding: 0.5rem;
		display: flex;
		gap: 3px;
	}

	#db-nav a {
		background: #e2e8f0;
		border: none;

		&:hover {
			color: var(--base-fg);
			background: #94a3b8;
		}
	}

	a {
		color: #475569;
		padding: 1em 1.25em;
		border-radius: var(--base-radius);
		border: 1px solid #cbd5e1;
		font-size: var(--size-sm);
		text-decoration: none;
		font-weight: 400;
		transition: all 0.15s ease-out;

		&:hover {
			border-color: transparent;
			color: var(--base-fg);
			background: #cbd5e1;
		}
	}
</style>
