<script lang="ts">
	import { fly } from 'svelte/transition'
</script>

<div id="stack">
	<h2 in:fly={{ duration: 400, x: -200, delay: 200 }}>Stack</h2>
	<p in:fly={{ duration: 400, x: -200, delay: 500 }}>
		Technologies I'm currently enjoying working with.
	</p>
	<div class="container">
		<img
			in:fly={{ duration: 200, x: -200, delay: 600 }}
			src="/icons/svelte.svg"
			width="512"
			height="512"
			alt="Svelte"
		/>
		<img
			in:fly={{ duration: 200, x: -200, delay: 700 }}
			src="/icons/javascript.svg"
			class="smaller"
			width="512"
			height="512"
			alt="Javascript"
		/>
		<img
			in:fly={{ duration: 200, x: -200, delay: 800 }}
			src="/icons/typescript.svg"
			class="smaller"
			width="512"
			height="512"
			alt="Typescript"
		/>
		<img
			in:fly={{ duration: 200, x: -200, delay: 900 }}
			src="/icons/node.svg"
			width="589.827"
			height="361.238"
			alt="Node"
		/>
		<img
			in:fly={{ duration: 200, x: -200, delay: 1000 }}
			src="/icons/react.svg"
			width="512"
			height="512"
			alt="React"
		/>
		<img
			in:fly={{ duration: 200, x: -200, delay: 1100 }}
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
		align-items: center;
	}

	.container {
		display: grid;
		align-items: center;
		justify-content: center;
		gap: var(--space--4);
		grid-template-columns: repeat(auto-fill, 1fr);
		grid-template-rows: 1fr;
	}

	img {
		width: 3rem;
		height: 3rem;
		border-radius: 0.5rem;
		box-shadow: var(--shadow-elevation-medium);
		grid-row: 1;
		justify-self: center;

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
