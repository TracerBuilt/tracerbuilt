<script lang="ts">
	import { fly } from 'svelte/transition'
	import { elasticOut, cubicInOut } from 'svelte/easing'

	const easing = cubicInOut
</script>

<section id="stack" class="text-center mb-16">
	<h2 in:fly={{ duration: 400, x: -200, easing: cubicInOut, delay: 200 }} class="text-3xl">
		Stack
	</h2>
	<p in:fly={{ duration: 400, x: -200, easing: cubicInOut, delay: 500 }} class="mb-4">
		Technologies I'm currently enjoying working with.
	</p>
	<div class="mx-auto justify-center flex gap-8 sm:gap-12 [&>figure]:w-1/12 [&>figure>img]:w-full">
		<figure in:fly={{ duration: 300, y: 50, easing: easing, delay: 600 }}>
			<img src="/icons/svelte.svg" width="512" height="512" alt="Svelte" />
			<figcaption>Svelte</figcaption>
		</figure>
		<figure in:fly={{ duration: 300, y: 50, easing: easing, delay: 750 }} class="relative right-1">
			<img src="/icons/typescript.svg" class="" width="512" height="512" alt="Typescript" />
			<figcaption>Typescript</figcaption>
		</figure>
		<figure in:fly={{ duration: 300, y: 50, easing: easing, delay: 900 }} class="relative ">
			<img src="/icons/javascript.svg" class="" width="512" height="512" alt="Javascript" />
			<figcaption>Javascript</figcaption>
		</figure>
		<figure in:fly={{ duration: 300, y: 50, easing: easing, delay: 1050 }}>
			<img src="/icons/node.svg" width="589.827" height="361.238" alt="Node" />
			<figcaption>Node</figcaption>
		</figure>
		<figure in:fly={{ duration: 300, y: 50, easing: easing, delay: 1200 }} class="relative right-1">
			<img src="/icons/react.svg" width="589.827" height="361.238" alt="React" />
			<figcaption>React</figcaption>
		</figure>
	</div>
</section>
