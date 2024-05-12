<script lang="ts">
	import Fork from '$lib/icons/Fork.svelte'
	import Star from '$lib/icons/Star.svelte'

	let { stars, forks } = $props()
</script>

<footer class="flex-start relative z-0 mt-12 flex justify-center pt-24 pb-12">
	<a
		href="https://github.com/TracerBuilt/tracerbuilt"
		class="flex flex-col items-center fill-gray-400 text-gray-400 transition-all ease-in-out hover:fill-blue-700 hover:text-blue-700 dark:fill-gray-500 dark:text-gray-500"
	>
		<p class="mb-2">Created by tracerbuilt</p>
		<div class="flex items-center gap-4">
			<div class="flex flex-col items-center">
				<Star class="h-auto w-6" />
				{stars}
			</div>
			<div class="flex flex-col items-center">
				<Fork class="h-auto w-6" />
				{forks}
			</div>
		</div>
	</a>
</footer>
