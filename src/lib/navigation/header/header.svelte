<script lang="ts">
	import NavIcon from './navIcon.svelte'
	import { page } from '$app/stores'
	import { onMount } from 'svelte'

	let currentPage: string
	let windowWidth: number

	export let open = false

	$: if (currentPage && currentPage !== $page.path && windowWidth < 960) {
		open = false
	}

	onMount(() => {
		currentPage = $page.path
	})
</script>

<svelte:window bind:innerWidth={windowWidth} />

<header>
	{#if windowWidth < 960}
		<NavIcon bind:open />
	{/if}
	<a href="/">
		<h2>.tracerbuilt</h2>
	</a>
</header>

<style lang="scss">
	header {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding: var(--space-0) var(--space--6);

		a {
			text-decoration: none;
			color: var(--text);

			h2 {
				font-family: var(--mono);
				margin: 0 var(--space--2);
			}
		}
	}
</style>
