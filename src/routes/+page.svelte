<script lang="ts">
	import { cubicInOut } from 'svelte/easing'
	import { fade, fly } from 'svelte/transition'

	import Chevron from '$lib/components/Chevron.svelte'

	import Contact from './contact/+page.svelte'

	let scrollY: number | undefined = $state()

	let hobbies = [
		'Camper',
		'DIY-er',
		'Enjoyer of books',
		'Occasional poet',
		'Dog leash follower'
	]

	let hobby_index = $state(0)
	let hobby = $derived(hobbies[hobby_index])

	$effect(() => {
		setInterval(() => {
			hobby_index >= hobbies.length - 1 ? (hobby_index = 0) : (hobby_index += 1)
		}, 3000)
	})
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
	<meta property="twitter:image:alt" content={``} />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:site" content="@Tracer_Built" />
</svelte:head>

<svelte:window bind:scrollY />

<section
	class="relative z-10 mb-12 flex h-[calc(100dvh-7rem)] flex-col items-start px-2"
>
	<h1 class="text-6xl">Tyler Ward</h1>
	<div class="mb-4 text-3xl leading-10">Full-Stack Web Developer</div>
	<div class="mb-8 flex w-full">
		{#key hobby_index}
			<div
				in:fly={{ duration: 400, easing: cubicInOut, x: -200 }}
				out:fly={{ duration: 150, easing: cubicInOut, x: 200 }}
				class="text-xl"
			>
				{hobby}
			</div>
		{/key}
	</div>
	<button>Get in touch</button>
</section>

{#if !scrollY || scrollY === 0}
	<div
		transition:fade
		class="fixed right-0 bottom-4 left-0 flex items-center justify-center"
	>
		<Chevron />
	</div>
{/if}

<section id="contact">
	<Contact />
</section>
