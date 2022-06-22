<script lang="ts">
	import Header from '$lib/navigation/header.svelte'
	import Footer from '$lib/navigation/footer.svelte'
	import '../app.scss'

	let navOpen = false
	let windowWidth: number
</script>

<svelte:window bind:innerWidth={windowWidth} />

<Header bind:open={navOpen} />
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

</style>
