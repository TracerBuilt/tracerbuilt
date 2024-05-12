<script lang="ts">
	const routes = [
		{ path: '/#work', text: 'Work' },
		{ path: '/#about', text: 'About' },
		{ path: '/#contact', text: 'Contact' }
	]
	const links = [
		{
			href: 'https://github.com/TracerBuilt',
			src: '/icons/github.svg',
			alt: 'Github'
		},
		{
			href: 'https://linkedin.com/in/TracerBuilt',
			src: '/icons/linkedin.svg',
			alt: 'LinkedIn'
		},
		{
			href: 'https://twitter.com/Tracer_Built',
			src: '/icons/twitter.svg',
			alt: 'Twitter'
		}
	]
</script>

<div class="mx-2">
	<header
		class="z-20 mt-2 mx-auto mb-6 flex h-[3rem] max-w-4xl items-baseline justify-end px-1 leading-normal"
	>
		<nav
			class=" flex flex-wrap items-baseline justify-end gap-2 text-sm sm:gap-4 sm:text-base"
		>
			<div class="flex gap-2 sm:gap-4">
				{#each routes as route, i}
					<div
						class="group text-grey-8 dark:text-grey-4 dark:hover:text-grey-2 dark:active:text-grey-0 hover:text-grey-10 active:text-grey-12 inline-block font-medium ease-in-out"
					>
						<a href={route.path} class=""
							>{#each route.text as letter, j}<span
									class="group-hover:animate-letter-bounce relative ease-in-out"
									style:animation-delay={`${j / 20}s`}>{letter}</span
								>{/each}</a
						>
					</div>
				{/each}
			</div>
			<div class="relative top-0.5 flex items-baseline gap-2 sm:gap-4">
				{#each links as link}
					<div
						class="hover:animate-wiggle w-6 transition-all ease-in hover:scale-110"
					>
						<a href={link.href}><img src={link.src} alt={link.alt} /></a>
					</div>
				{/each}
			</div>
		</nav>
	</header>
</div>
