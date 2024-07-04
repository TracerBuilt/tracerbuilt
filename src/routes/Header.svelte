<script lang="ts">
	import Linkedin from '$lib/icons/Linkedin.svelte'
	import Github from '$lib/icons/Github.svelte'
	import Twitter from '$lib/icons/Twitter.svelte'

	const routes = [
		{ path: '/#work', text: 'Work' },
		{ path: '/#about', text: 'About' },
		{ path: '/#contact', text: 'Contact' }
	]
	const links = [
		{
			href: 'https://github.com/TracerBuilt',
			Component: Github
		},
		{
			href: 'https://linkedin.com/in/TracerBuilt',
			Component: Linkedin
		},
		{
			href: 'https://x.com/Tracer_Built',
			Component: Twitter
		}
	]
</script>

<header
	class="z-20 mt-2 mx-auto mb-6 flex h-[3rem] w-full items-baseline justify-end px-1 px-2 leading-normal"
>
	<nav
		class=" flex flex-wrap items-baseline justify-end gap-2 text-sm sm:gap-4 sm:text-base"
	>
		<div class="flex gap-2 sm:gap-4">
			{#each routes as route, i}
				<a
					href={route.path}
					class="group inline-block text-base font-medium text-gray-700 ease-in-out hover:text-gray-800 active:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100 dark:active:text-gray-50"
					>{#each route.text as letter, j}<span
							class="group-hover:animate-letter-bounce relative inline-block ease-in-out"
							style:animation-delay={`${j / 20}s`}>{letter}</span
						>{/each}</a
				>
			{/each}
		</div>
		<div class="relative top-0.5 flex items-baseline gap-2 sm:gap-4">
			{#each links as { href, Component }}
				<div
					class="hover:animate-wiggle w-6 transition-all ease-in hover:scale-110"
				>
					<a {href}><Component /></a>
				</div>
			{/each}
		</div>
	</nav>
</header>
