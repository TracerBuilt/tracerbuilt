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
		<section id="work" style:min-height={'30rem'}>
			{#if intersecting}
				<Work />
			{:else}
				<div class="h-screen" />
			{/if}
		</section>
	</IntersectionObserver>
	<IntersectionObserver let:intersecting top={-200}>
		<section id="about" style:min-height={'20rem'}>
			{#if intersecting}
				<About />
			{:else}
				<div class="h-screen" />
			{/if}
		</section>
	</IntersectionObserver>
	<IntersectionObserver let:intersecting top={-200}>
		<section id="stack" style:min-height={'5rem'}>
			{#if intersecting}
				<Stack />
			{:else}
				<div class="h-screen" />
			{/if}
		</section>
	</IntersectionObserver>
	<IntersectionObserver let:intersecting top={-200}>
		<section id="get_in_touch" style:min-height={'5rem'}>
			{#if intersecting}
				<Contact />
			{:else}
				<div class="h-screen" />
			{/if}
		</section>
	</IntersectionObserver>
</div>
