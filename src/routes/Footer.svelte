<script lang="ts">
	import Fork from '$lib/components/icons/fork.svelte'
	import Star from '$lib/components/icons/star.svelte'
	const url = 'https://api.github.com/repos/TracerBuilt/tracerbuilt'
	let stars: number
	let forks: number

	fetch(url, { headers: { 'Content-Type': 'application/json' } })
		.then((res) => res.json())
		.then((data) => {
			stars = data.stargazers_count
			forks = data.forks_count
		})
</script>

<footer
	class="relative z-0 flex flex-start justify-center bg-gradient-to-br dark:from-blue-11 dark:via-purple-11 dark:to-red-11 from-blue-9 via-purple-9 to-red-9 pt-24 mt-12 pb-12"
	style:clip-path="polygon(0px 100px, 100% 0px, 100% 100%, 0% 100%)"
>
	<a
		href="https://github.com/TracerBuilt/tracerbuilt"
		class="flex flex-col items-center text-grey-3 dark:text-grey-4 dark:fill-grey-4 fill-grey-3 transition-all ease-in-out hover:text-blue-7 hover:fill-blue-7"
	>
		<p class="mb-2">Created by tracerbuilt</p>
		<div class="flex items-center gap-4 [&>div]:flex [&>div]:items-center [&>div]:gap-1">
			<div>
				<Star class="w-6 h-auto" />
				{stars}
			</div>
			<div>
				<Fork class="w-6 h-auto" />
				{forks}
			</div>
		</div>
	</a>
</footer>
