<script context="module" lang="ts">
	export const prerender = true
</script>

<script lang="ts">
	import Projects from './projects/_index.svelte'
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="h4">My name is Tyler, and I'm a</div>
<h1>Full-Stack Web Developer</h1>
<div class="main" id="about">
	<p>
		Which is a <em>very</em> fancy-sounding way of telling you that I think I'm a passable jack-of-all-trades
		when it comes to web development.
	</p>
	<p>
		I've created a few completely custom ecommerce sites, a bespoke non-profit site for a local high
		school theater company, and more abandoned side projects than I care to mention.
	</p>
	<p>
		And then there's this site itself, which should serve as an excellent example of the sort of
		things I'm enjoying working with at the moment, interesting problems I've found to solve, and
		any generally helpful information I feel called to share. Many of these things can be found in
		my <a href="/blog">blog</a> which, ever the optimist, I hope to update regularly.
	</p>
</div>
<div id="projects">
	<h2>Projects</h2>
	<Projects />
</div>

<style lang="scss">
	.h4:first-of-type {
		margin-top: 0;
	}
</style>
