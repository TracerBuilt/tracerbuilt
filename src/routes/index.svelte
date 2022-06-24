<script context="module" lang="ts">
	export const prerender = true
</script>

<script lang="ts">
	import Work from '$lib/components/work.svelte'
	import About from '$lib/components/about.svelte'
	import Intro from '$lib/components/intro.svelte'
	import Stack from '$lib/components/stack.svelte'
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte'
	import Chevron from '$lib/components/chevron.svelte'

	let footerColor = 'var(--white)'
</script>

<svelte:head>
	<title>Home</title>

	<style>
	:root {
		--footer-color: var(--white);
		}
	</style>
</svelte:head>

<div class="main" class:footerColor={footerColor}>
	<Intro />
	<IntersectionObserver let:intersecting top={-200}>
		<div style:min-height={'30rem'}>
			{#if intersecting}
				<About />
			{/if}
		</div>
	</IntersectionObserver>
	<IntersectionObserver let:intersecting top={-200}>
		<div style:min-height={'5rem'}>
			{#if intersecting}
				<Stack />
			{:else}
				<div class="chevron-container" style:height={'5rem'}>
					<Chevron />
				</div>
			{/if}
		</div>
	</IntersectionObserver>

	<IntersectionObserver let:intersecting top={-300}>
		<div style:min-height={'30rem'}>
			{#if intersecting}
				<Work />
			{:else}
				<div class="chevron-container" style:height={'20rem'}>
					<Chevron />
				</div>
			{/if}
		</div>
	</IntersectionObserver>
	<div class="swash" />
</div>

<style lang="scss">
	.main {
		z-index: 2;
	}

	.chevron-container {
			display: flex;
			width: 100%;
			align-items: center;
			justify-content: center;
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
