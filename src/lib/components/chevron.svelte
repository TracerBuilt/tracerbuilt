<script lang="ts">
	import { fade } from 'svelte/transition'
	import { tweened } from 'svelte/motion'
	import { cubicInOut } from 'svelte/easing'
	import { onMount } from 'svelte'

	const pulse = tweened(0.3, {
		duration: 1600,
		easing: cubicInOut
	})

	const loop = () =>
		pulse
			.set(0.3)
			.then(() => pulse.set(0.5))
			.then(() => loop())

	onMount(() => {
		loop()
	})
</script>

<svg
	version="1.1"
	id="Layer_1"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	x="0px"
	y="0px"
	viewBox="0 0 407.437 407.437"
	style="enable-background:new 0 0 407.437 407.437;"
	xml:space="preserve"
	in:fade={{ duration: 1600, delay: 2000, easing: cubicInOut }}
	out:fade={{ duration: 200, easing: cubicInOut }}
>
	<g>
		<polygon
			style:fill={`hsl(0 0% 10% / ${$pulse})`}
			points="203.718,322.929 21.179,140.984 0,162.232 203.718,365.287 407.437,162.232 386.258,140.984 	"
		/>
	</g>
</svg>

<style lang="scss">
	svg {
		width: 3rem;
	}
</style>
