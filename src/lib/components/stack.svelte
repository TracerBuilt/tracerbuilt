<script lang="ts">
	import { fly } from 'svelte/transition'
	import { elasticOut, cubicInOut } from 'svelte/easing'

	const easing = elasticOut
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
		<img
			in:fly={{ duration: 600, y: 300, easing: easing, delay: 600 }}
			src="/icons/svelte.svg"
			width="512"
			height="512"
			alt="Svelte"
		/>
		<img
			in:fly={{ duration: 600, y: 300, easing: easing, delay: 750 }}
			src="/icons/javascript.svg"
			class="smaller"
			width="512"
			height="512"
			alt="Javascript"
		/>
		<img
			in:fly={{ duration: 600, y: 300, easing: easing, delay: 900 }}
			src="/icons/typescript.svg"
			class="smaller"
			width="512"
			height="512"
			alt="Typescript"
		/>
		<img
			in:fly={{ duration: 600, y: 300, easing: easing, delay: 1050 }}
			src="/icons/node.svg"
			width="589.827"
			height="361.238"
			alt="Node"
		/>
		<img
			in:fly={{ duration: 600, y: 300, easing: easing, delay: 1200 }}
			src="/icons/react.svg"
			width="512"
			height="512"
			alt="React"
		/>
		<img
			in:fly={{ duration: 600, y: 300, easing: easing, delay: 1350 }}
			src="/icons/sass.svg"
			class="smaller"
			width="512"
			height="512"
			alt="Sass"
		/>
	</div>
</div>

<style lang="scss">
	#stack {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		max-width: 60ch;
		margin: 0 auto;

		@media (min-width: 960px) {
			max-width: 80ch;
		}
	}

	.container {
		display: grid;
		align-items: center;
		justify-content: center;
		gap: var(--space--4);
		grid-template-columns: repeat(auto-fill, 1fr);
		grid-template-rows: repeat(auto-fill, 1fr);
	}

	img {
		width: 3rem;
		height: 3rem;
		border-radius: 0.5rem;
		box-shadow: var(--shadow-elevation-medium);
		grid-row: 1;
		justify-self: center;

		@media (max-width: 370px) {
			&:nth-last-child(-n + 3) {
				grid-row: 3;
			}
		}

		@media (min-width: 640px) {
			width: 4rem;
			height: 4rem;
			border-radius: 0.65rem;
		}

		@media (min-width: 960px) {
			width: 4.5rem;
			height: 4.5rem;
			border-radius: 0.75rem;
		}
	}
</style>
