<script lang="ts">
	import Nav from './nav.svelte'
	let windowWidth: number

	export let open = false
</script>

<svelte:window bind:innerWidth={windowWidth} />

<header>
	<a on:click={() => (open = false)} class="h3" href="/"> tracerbuilt </a>
	<Nav bind:open />
</header>

<style lang="scss">
	header {
		display: flex;
		width: 100%;
		height: 3rem;
		z-index: 15;
		align-items: baseline;
		justify-content: space-between;

		a {
			color: var(--text);
			text-decoration: none;
			font-family: var(--mono);
			margin: 0;
		}
	}
</style>
