<script lang="ts">
	import { fly } from 'svelte/transition'
	import { elasticOut, cubicInOut } from 'svelte/easing'

	const easing = cubicInOut
</script>

<div id="stack">
	<h2
		in:fly={{ duration: 400, x: -200, easing: cubicInOut, delay: 200 }}
		style:align-self={'center'}
	>
		Stack
	</h2>
	<p in:fly={{ duration: 400, x: -200, easing: cubicInOut, delay: 500 }}>
		Technologies I'm currently enjoying working with.
	</p>
	<div class="container">
		<figure in:fly={{ duration: 300, y: 50, easing: easing, delay: 600 }}>
			<img src="/icons/svelte.svg" width="512" height="512" alt="Svelte" />
			<figcaption>Svelte</figcaption>
		</figure>
		<figure in:fly={{ duration: 300, y: 50, easing: easing, delay: 750 }}>
			<img src="/icons/typescript.svg" class="smaller" width="512" height="512" alt="Typescript" />
			<figcaption>Typescript</figcaption>
		</figure>
		<figure in:fly={{ duration: 300, y: 50, easing: easing, delay: 900 }}>
			<img src="/icons/javascript.svg" class="smaller" width="512" height="512" alt="Javascript" />
			<figcaption>Javascript</figcaption>
		</figure>
		<figure in:fly={{ duration: 300, y: 50, easing: easing, delay: 1050 }}>
			<img src="/icons/node.svg" width="589.827" height="361.238" alt="Node" />
			<figcaption>Node</figcaption>
		</figure>
		<figure in:fly={{ duration: 300, y: 50, easing: easing, delay: 1200 }}>
			<img src="/icons/react.svg" width="589.827" height="361.238" alt="React" />
			<figcaption>React</figcaption>
		</figure>
	</div>
</div>

<style lang="scss">
	#stack {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		max-width: 60ch;
		margin: var(--space-0) auto 0;

		@media (min-width: 960px) {
			max-width: 80ch;
		}
	}

	.container {
		display: grid;
		align-items: center;
		justify-content: center;
		gap: var(--space-0);
		grid-template-columns: repeat(auto-fill, 1fr);
	}

	figure {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0;
		margin: 0;
		grid-row: 1;
		justify-self: center;
	}

	img {
		width: var(--step-4);
		height: var(--step-4);
	}

	figcaption {
		margin-top: var(--space--6);
		font-family: var(--sans);
		font-size: var(--step--1);
	}
</style>
