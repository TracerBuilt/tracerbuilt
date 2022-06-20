<script lang="ts">
	import Header from '$lib/navigation/header/header.svelte'
	import Footer from '$lib/navigation/footer.svelte'
	import '../app.scss'
	import Sidebar from '$lib/navigation/sidebar.svelte'

	let navOpen = false
</script>

<Header bind:open={navOpen} />
<Sidebar bind:open={navOpen} />
<main>
	<slot />
</main>
<Footer />

<style lang="scss">
	:global(body) {
		position: relative;
		width: 100vw;
		height: 100vh;
		margin: 0 auto;

		@media (min-width: 960px) {
			margin: 0;
		}
	}

	:global(#svelte) {
		display: grid;
		width: 100%;
		max-width: 100vw;
		background: var(--white);
		grid-template-columns: auto minmax(90%, var(--text-block-width)) auto;
		grid-template-rows: auto 1fr auto;

		@media (min-width: 960px) {
			grid-template-columns: minmax(3px, 1fr) minmax(10px, var(--text-block-width)) minmax(3px, 1fr);
		}
	}

	main {
		padding: var(--space--7);
		grid-column: 2 / 3;
		grid-row: 2 / 3;
	}
</style>
