<script lang="ts">
	import * as m from '$paraglide/messages';

	export let data;
</script>

<article>
	<h1>{m.langAgnostic()}</h1>
	<p>
		Check the server console to see the query count increase only on initial load, unaffected by
		language changes.
	</p>
</article>
