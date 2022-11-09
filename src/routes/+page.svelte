<script context="module" lang="ts">
	export const prerender = true
</script>

<script lang="ts">
	import Work from './Work.svelte'
	import About from './About.svelte'
	import Intro from './Intro.svelte'
	import Stack from './Stack.svelte'
	import Contact from './Contact.svelte'
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte'
</script>

<svelte:head>
	<title>Home</title>

	<style>
		:root {
			--footer-color: var(--white) !important;
		}
	</style>
</svelte:head>

<div class="mx-2">
	<Intro />
	<IntersectionObserver let:intersecting top={-300}>
		<div id="work" style:min-height={'30rem'}>
			{#if intersecting}
				<Work />
			{:else}
				<div class="h-screen" />
			{/if}
		</div>
	</IntersectionObserver>
	<IntersectionObserver let:intersecting top={-200}>
		<div id="about" style:min-height={'20rem'}>
			{#if intersecting}
				<About />
			{:else}
				<div class="h-screen" />
			{/if}
		</div>
	</IntersectionObserver>
	<IntersectionObserver let:intersecting top={-200}>
		<div style:min-height={'5rem'}>
			{#if intersecting}
				<Stack />
			{:else}
				<div class="h-screen" />
			{/if}
		</div>
	</IntersectionObserver>
	<IntersectionObserver let:intersecting top={-200}>
		<div style:min-height={'5rem'}>
			{#if intersecting}
				<Contact />
			{:else}
				<div class="h-screen" />
			{/if}
		</div>
	</IntersectionObserver>
</div>
