<script lang="ts">
	import Header from '$lib/Header/index.svelte'
	import '../app.postcss'

</script>

<Header>
	<main>
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</Header>
<slot />
