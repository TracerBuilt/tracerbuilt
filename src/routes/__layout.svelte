<script lang="ts">
	import Header from '$lib/navigation/header.svelte'
	import Footer from '$lib/navigation/footer.svelte'
	import '../app.scss'
	import posthog from 'posthog-js'
	import { onMount } from 'svelte'

	let navOpen = false
	let windowWidth: number

	onMount(() => {
		posthog.init('phc_ccE2fsK0bnxAPL5S08FF1GSQsqI8puUFwiw2hjqIaGY', {
			api_host: 'https://app.posthog.com'
		})
	})
</script>

<svelte:window bind:innerWidth={windowWidth} />

<Header bind:open={navOpen} />
<main>
	<slot />
</main>
<Footer />

<style lang="scss">
	:global(html) {
		position: relative;
		min-height: 100vh;
		background-color: var(--background-color);
	}

	:global(body) {
		z-index: -1;
		min-height: 100vh;
		box-sizing: border-box;
		padding: var(--space--6);
	}

	:global(#svelte) {
		max-width: 80ch;
		margin: 0 auto;
	}

	main {
		margin-bottom: 5rem;
	}
</style>
