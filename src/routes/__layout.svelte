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
<div class="sidebar-right" />
<Footer />

<style lang="scss">
	:global(body) {
		width: 100vw;
		height: 100vh;
		margin: 0;
	}

	:global(#svelte) {
		position: relative;
		display: grid;
		width: 100%;
		height: 100%;
		background: var(--white);
		grid-template-columns: minmax(3px, 1fr) minmax(10px, 4fr) minmax(3px, 1fr);
		grid-template-rows: auto 1fr auto;

		@media (max-width: 960px) {
			grid-template-columns: var(--space-0) auto var(--space-0);
		}
	}

	main {
		padding: var(--space--7);
		grid-column: 2 / 3;
		grid-row: 2 / 3;
	}

	.sidebar-right {
		grid-column: 3 / 4;
		grid-row: 2 / 3;
	}
</style>
