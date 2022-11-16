<script lang="ts">
	import Header from './Header.svelte'
	import Footer from './Footer.svelte'
	import '../app.css'
	import posthog from 'posthog-js'
	import { onMount } from 'svelte'

	onMount(() => {
		if (!window.location.href.includes('127.0.0.1')) {
			posthog.init('phc_ccE2fsK0bnxAPL5S08FF1GSQsqI8puUFwiw2hjqIaGY', {
				api_host: 'https://app.posthog.com'
			})
		}
	})
</script>

<Header />
<main class="flex-grow">
	<slot />
</main>
<Footer />
