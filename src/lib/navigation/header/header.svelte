<script lang="ts">
	import NavIcon from './navIcon.svelte'
	import { page } from '$app/stores'
	import { onMount } from 'svelte'

	let currentPage: string
	let windowWidth: number

	export let open = false

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
		z-index: 15;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--space--7) var(--space--7) var(--space--7) 0;
		grid-column: 2 / 3;
		grid-row: 1 / 2;

		a {
			color: var(--text);
			text-decoration: none;

			h2 {
				font-family: var(--mono);
			}
		}
	}
</style>
