<script lang="ts">
	import { onMount } from 'svelte'

	import init, { Universe } from 'wasm-game-of-life'

	export let pre
	export let universe

	function generateUniverse() {
		init().then(() => {
			universe = Universe.new()
		})
	}

	onMount(() => {
		generateUniverse()

		const renderLoop = () => {
			if (universe) {
				pre.textContent = universe.render()
				universe.tick()
			}

			requestAnimationFrame(renderLoop)
		}

		requestAnimationFrame(renderLoop)
	})
</script>

<div class="main">
	<pre id="game-of-life-canvas" bind:this={pre} />
</div>

<style lang="scss">
	.main {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		inset: 0;
	}
	pre {
		font-size: 0.5rem;
		line-height: 0.6;
	}
</style>
