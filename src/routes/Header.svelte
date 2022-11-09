<script lang="ts">
	import { fly, fade } from 'svelte/transition'
	const routes = [
		{ path: '/#work', text: 'Work' },
		{ path: '/#about', text: 'About' },
		{ path: '/#contact', text: 'Contact' }
	]
	const links = [
		{ href: 'https://github.com/TracerBuilt', src: '/icons/github.svg', alt: 'Github' },
		{ href: 'https://linkedin.com/in/TracerBuilt', src: '/icons/linkedin.svg', alt: 'LinkedIn' },
		{ href: 'https://twitter.com/Tracer_Built', src: '/icons/twitter.svg', alt: 'Twitter' }
	]
</script>

<div class="mx-2">
	<header
		class="flex max-w-4xl mb-6 mt-2 px-1 mx-auto h-[3rem] z-20 items-baseline justify-between"
	>
		<a href="/" class="font-mono text-xl"> tracerbuilt </a>
		<nav class="flex justify-end flex-wrap gap-2 sm:gap-4 ml-4">
			<div class="flex gap-2 sm:gap-4">
				{#each routes as route, i}
					<div class="ease-in inline-block group">
						<a href={route.path} class=""
							>{#each route.text as letter, j}<span
									class="relative group-hover:animate-letter-bounce"
									style="animation-delay: {j / 20}s;">{letter}</span
								>{/each}</a
						>
					</div>
				{/each}
			</div>
			<div class="flex items-end sm:gap-4 gap-2">
				{#each links as link}
					<div class="w-6 hover:animate-wiggle hover:scale-110 transition-all ease-in">
						<a href={link.href}><img src={link.src} alt={link.alt} /></a>
					</div>
				{/each}
			</div>
		</nav>
	</header>
</div>
