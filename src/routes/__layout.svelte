<script lang="ts">
	import Header from '$lib/navigation/header/header.svelte'
	import Footer from '$lib/navigation/footer.svelte'
	import '../app.scss'
	import Sidebar from '$lib/navigation/sidebar.svelte'

	let navOpen = false
</script>

<Header bind:open={navOpen} />
<main>
	<Sidebar bind:open={navOpen} />
	<slot />
</main>
<Footer />

<style lang="scss">
	:global(body) {
		width: 100vw;
		height: 100vh;
		margin: 0;
	}

	:global(#svelte) {
		position: relative;
		display: flex;
		width: 100%;
		height: 100%;
		flex-direction: column;
		background: var(--white);
	}

	main {
		position: relative;
		display: flex;
		width: 100%;
		justify-content: center;
		padding: var(--space--7);
		margin: var(--space-0) auto 0;
	}
</style>
