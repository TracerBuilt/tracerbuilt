<script lang="ts">
	import Work from './Work.svelte'
	import About from './About.svelte'
	import Intro from './Intro.svelte'
	import Stack from './Stack.svelte'
	import Contact from './Contact.svelte'
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte'
</script>

<svelte:head>
	<title>Full Stack Web Developer</title>
	<meta name="description" content="A freelance, full-stack developer specializing in responsive and performant sites and apps, as well as ecommerce." />
	<meta name="keywords" content="HTML, CSS, TypeScript, JavaScript, Svelte, SvelteKit, React, Next.js, Web Developer, Full Stack, Freelance Developer" />
	<meta property="og:title" content="Full Stack Web Developer" />
	<meta property="og:url" content="https://tracerbuilt.dev" />
	<meta property="og:image" content="https://tracerbuilt.dev/og-home.jpg" />
	<meta property="og:type" content="website" />
	<meta property="og:description" content="A freelance, full-stack developer specializing in responsive and performant sites and apps, as well as ecommerce." />
	<meta property="og:locale" content="en_US" />

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
	<section id="contact" style:min-height={'5rem'}>
		<Contact />
	</section>
</div>
