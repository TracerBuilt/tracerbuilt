<script context="module" lang="ts">
	export const prerender = true
</script>

<script lang="ts">
	import Projects from './projects/_index.svelte'
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="main">
	<div class="h4">My name is Tyler, and I'm a</div>
	<h1>Full-Stack Web Developer</h1>
	<div id="about">
		<p>
			I've created a few completely custom ecommerce sites, a bespoke non-profit site for a local
			high school theater company, and more silly side projects than I care to mention.
		</p>
		<p>
			And then there's this site itself, which should serve as an excellent example of the sort of
			things I'm enjoying working with at the moment, interesting problems I've found to solve, and
			any generally helpful information I feel called to share.
		</p>
	</div>
	<div id="projects">
		<h2>Projects</h2>
		<Projects />
	</div>
</div>
<div class="swash" />

<style lang="scss">
	.h4:first-of-type {
		margin-top: 0;
	}

	h1 {
		background-clip: text;
		background-image: linear-gradient(135deg, var(--blue-500), var(--red-400));
		color: transparent;
	}

	.swash {
		position: absolute;
		z-index: 1;
		height: 50vh;
		background: linear-gradient(165deg, var(--white) 50%, transparent 50%),
			linear-gradient(45deg, var(--blue-500), var(--red-400));
		inset: auto 0 0 0;

		@media (min-width: 1024px) {
			height: 30rem;
			background: linear-gradient(172deg, var(--white) 50%, transparent 50%),
				linear-gradient(45deg, var(--blue-500), var(--red-400));
		}
	}
</style>
