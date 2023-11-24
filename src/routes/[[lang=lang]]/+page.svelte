<script>
	import { page } from '$app/stores';
	import MountCount from '$lib/components/MountCount.svelte';
	import * as m from '$paraglide/messages';
	import { fly } from 'svelte/transition';
</script>

<article>
	{#key $page.data.lang}
		<h1 in:fly={{ y: 6 }}>{m.helloWorld()}</h1>
		<p>
			{m.body()}
		</p>
		<MountCount key="remount" />
	{/key}
	<p>This paragraph should not remount on language change. Mount count is:</p>
	<MountCount key="no-remount" />
</article>
