<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	const counts = writable<Record<string, number>>({});
</script>

<script lang="ts">
	export let key: string;

	onMount(() => {
		counts.update((v) => {
			return { ...v, [key]: (v[key] ?? 0) + 1 };
		});
	});
</script>

{$counts[key]}
