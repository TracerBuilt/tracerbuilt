<script lang="ts">
	import { fly } from 'svelte/transition'
	import ScrollIndicator from '$lib/Components/ScrollIndicator.svelte'

	const hobbies = [
		'Builder of cool things',
		'Reader of books',
		'Connoisseur of camping',
		'Writer of poetry',
		'Bringer of old-man vibes'
	]
	let currentHobbyIndex = $state(0)
	let currentHobby = $derived(hobbies[currentHobbyIndex])
	let interval: NodeJS.Timeout

	$effect(() => {
		interval = setInterval(() => {
			currentHobbyIndex = (currentHobbyIndex + 1) % hobbies.length
			currentHobby = hobbies[currentHobbyIndex]
		}, 4000) // Change hobby every 5 seconds

		return () => clearInterval(interval)
	})
</script>

<div class="relative h-full min-h-screen w-full">
	<div class="pointer-events-none absolute inset-0 z-0 flex justify-end select-none">
		<enhanced:img
			class="fade-bottom max-h-screen w-auto max-w-screen opacity-15 md:opacity-50"
			src="./headshot.png"
			alt="A headshot of a moderately attractive, mustachioed man."
		/>
	</div>
	<div class="mx-4 flex min-h-screen flex-col">
		<h1 class="font-casl-5 mt-6 text-4xl">Tyler Ward</h1>
		<h3 class="mt-auto text-2xl">Full-Stack Developer</h3>
		<div class="relative mb-16 h-10 overflow-hidden">
			{#key currentHobby}
				<h4
					class="font-casl-10 absolute top-0 bottom-0 left-0 bg-gradient-to-tl from-purple-900 to-blue-500 bg-clip-text text-xl font-bold text-transparent"
					in:fly={{ y: -50, duration: 500 }}
					out:fly={{ y: 50, duration: 500 }}
				>
					{currentHobby}
				</h4>
			{/key}
		</div>
	</div>
</div>

<ScrollIndicator />

<style>
	.fade-bottom {
		mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
	}
</style>
