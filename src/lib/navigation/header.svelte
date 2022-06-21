<script lang="ts">
	let windowWidth: number

	export let open = false
</script>

<svelte:window bind:innerWidth={windowWidth} />

<header>
	<a on:click={() => (open = false)} class="h2" href="/"> tracerbuilt </a>
</header>

<style lang="scss">
	header {
		z-index: 15;
		align-items: baseline;
		justify-content: space-between;
		grid-column: 1 / span 4;
		grid-row: 1 / 2;

		@media (min-width: 960px) {
			grid-column: 2 / span 4;
		}

		a {
			color: var(--text);
			text-decoration: none;
			font-family: var(--mono);
		}
	}
</style>
