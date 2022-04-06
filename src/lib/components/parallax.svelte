<script lang="ts">
	let scroll: number
</script>

<svelte:head>
<style lang="scss">
	:root {
			--text: #fff;
		}
</style>
</svelte:head>

<svelte:window bind:scrollY={scroll} />

<div class="container" style="--text: #fff">
	<div class="box pin" style:transform={`translate3d(0, ${scroll}px, 0)`} style:background="blue" />
	<div
		class="box"
		style:transform={`translate3d(0, ${scroll * 0.5}px, 0)`}
		style:background="red"
	/>
	<div
		class="box"
		style:transform={`translate3d(0, ${scroll * 0.25}px, 0)`}
		style:background="green"
	/>
</div>

<style lang="scss">
	.container {
		position: absolute;
		height: 200vh;
		inset: 0;
	}
	.box {
		width: 100%;
		height: 25rem;
		margin: 1rem;
	}
	.pin {
		position: relative;
	}
</style>
