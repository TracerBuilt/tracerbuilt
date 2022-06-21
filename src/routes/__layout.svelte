<script lang="ts">
	import Header from '$lib/navigation/header.svelte'
	import Footer from '$lib/navigation/footer.svelte'
	import '../app.scss'
	import Sidebar from '$lib/navigation/sidebar.svelte'
	import NavIcon from '$lib/navigation/navIcon.svelte'

	let navOpen = false
	let windowWidth: number
</script>

<svelte:window bind:innerWidth={windowWidth} />

<Header bind:open={navOpen} />
{#if windowWidth < 960}
	<NavIcon bind:open={navOpen} />
{/if}
<Sidebar bind:open={navOpen} />
<slot />
<Footer />

<style lang="scss">
	:global(body) {
		position: relative;
		display: border-box;
		padding: var(--space--6);
		z-index: -1;
		background-color: var(--background-color);
	}

	:global(#svelte) {
		display: grid;
		width: 100%;
		gap: var(--space--6);
		grid-template-columns: repeat(7, 1fr);
		grid-template-rows: auto repeat(auto-fit, minmax(12rem, 1fr)) auto;
	}
</style>
