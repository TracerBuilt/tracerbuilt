<script lang="ts">
	import Intro from './Intro.svelte'
	import Contact from './contact/+page.svelte'
</script>

<svelte:head>
	<title>Tyler Ward</title>
	<meta
		name="description"
		content="A freelance, full-stack developer specializing in responsive and performant sites and apps, as well as ecommerce."
	/>
	<meta
		name="keywords"
		content="HTML, CSS, TypeScript, JavaScript, Svelte, SvelteKit, React, Next.js, Web Developer, Full Stack, Freelance Developer"
	/>
	<meta property="og:title" content="Tyler Ward - Full Stack Web Developer" />
	<meta property="og:url" content="https://tracerbuilt.dev" />
	<meta
		property="og:image"
		content="https://tracerbuilt.dev/images/home.jpeg"
	/>
	<meta property="og:type" content="website" />
	<meta
		property="og:description"
		content="A freelance, full-stack developer specializing in responsive and performant sites and apps, as well as ecommerce."
	/>
	<meta property="og:site_name" content="Tracerbuilt" />
	<meta
		property="twitter:image"
		content="https://tracerbuilt.dev/images/home.jpeg"
	/>
	<meta
		property="twitter:image:alt"
		content={`The front page of my portfolio website, with white and gradient text on a dark background that says: "Hey, I'm Tyler I build cool stuff for the web"kand a gradient double triangle in the corner.`}
	/>
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:site" content="@Tracer_Built" />
</svelte:head>

<div class="mx-2">
	<Intro />
	<section id="contact">
		<Contact />
	</section>
</div>
