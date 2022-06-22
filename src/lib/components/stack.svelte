<script lang="ts">
	import { fly } from 'svelte/transition'
</script>

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

<style lang="scss">
	.container {
		display: grid;
		width: 100%;
		grid-template-columns: repeat(7, 1fr);
		gap: var(--space--6);
		align-items: center;
	}

	img {
		width: 3rem;
		height: auto;
		justify-self: center;

		&.smaller {
			width: 2.25rem;
		}

		@media (min-width: 640px) {
			width: 4rem;

			&.smaller {
				width: 3rem;
			}
		}

		@media (min-width: 960px) {
			width: 4.5rem;

			&.smaller {
				width: 3.5rem;
			}
		}
	}
</style>
