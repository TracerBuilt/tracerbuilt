<script lang="ts">
	import NavIcon from './navIcon.svelte'
	import { page } from '$app/stores'
	import { onMount } from 'svelte'

	let currentPage: string
	let windowWidth: number

	export let open = false

	$: if (currentPage && currentPage !== $page.url.pathname && windowWidth < 960) {
		open = false
	}

	onMount(() => {
		currentPage = $page.url.pathname
	})
</script>

<svelte:window bind:innerWidth={windowWidth} />

<header>
	<a href="/">
		<h2>.tracerbuilt</h2>
	</a>
	{#if windowWidth < 960}
		<NavIcon bind:open />
	{/if}
</header>

<style lang="scss">
	header {
		z-index: 5;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--space-0) var(--space--6);
		grid-column: 1 / 3;
		grid-row: 1 / 2;

		a {
			color: var(--text);
			text-decoration: none;

			h2 {
				margin: 0 var(--space--2);
				font-family: var(--mono);
			}
		}
	}
</style>
