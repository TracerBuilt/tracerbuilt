<script context="module" lang="ts">
	export const prerender = true
</script>

<script lang="ts">
	import Projects from '$lib/components/projects.svelte'
	import About from '$lib/components/about.svelte'
	import Intro from '$lib/components/intro.svelte'
	import Stack from '$lib/components/stack.svelte'
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte'
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main>
	<Intro />
	<IntersectionObserver let:intersecting top={-100}>
		{#if intersecting}
			<About />
		{/if}
	</IntersectionObserver>
	<IntersectionObserver let:intersecting top={-200}>
		{#if intersecting}
			<Stack />
		{/if}
	</IntersectionObserver>

	<IntersectionObserver let:intersecting top={-200}>
		{#if intersecting}
			<Projects />
		{/if}
	</IntersectionObserver>
	<div class="swash" />
</main>

<style lang="scss">
	main {
		z-index: 2;
		min-height: 200vh;
	}

	.swash {
		position: absolute;
		z-index: -1;
		height: 50vh;
		max-height: 40%;
		background: linear-gradient(195deg, var(--white) 50%, transparent 50%),
			linear-gradient(45deg, var(--blue-500), var(--red-400));
		inset: auto 0 0 0;

		@media (min-width: 1024px) {
			height: 30rem;
			background: linear-gradient(188deg, var(--white) 50%, transparent 50%),
				linear-gradient(45deg, var(--blue-500), var(--red-400));
		}
	}
</style>
