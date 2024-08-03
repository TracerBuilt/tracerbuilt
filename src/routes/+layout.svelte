<script lang="ts">
	import { onMount } from 'svelte'

	import { dev } from '$app/environment'

	import '@fontsource-variable/eb-garamond'
	import '@fontsource-variable/oswald'
	import '@fontsource-variable/jetbrains-mono'
	import '../app.css'

	import posthog from 'posthog-js'

	import Footer from './Footer.svelte'
	import Header from './Header.svelte'

	let { data, children } = $props()

	onMount(() => {
		if (!dev) {
			posthog.init('phc_ccE2fsK0bnxAPL5S08FF1GSQsqI8puUFwiw2hjqIaGY', {
				api_host: 'https://app.posthog.com'
			})
		}
	})
</script>

<Header />
<main class="flex-1">
	{@render children()}
</main>
<Footer {data} />
