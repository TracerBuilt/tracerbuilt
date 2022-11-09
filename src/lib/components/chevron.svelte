<script lang="ts">
	import { fade } from 'svelte/transition'
	import { cubicInOut } from 'svelte/easing'
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
	class="w-12 animate-pulse fill-grey-9"
>
	<g>
		<polygon
			points="203.718,322.929 21.179,140.984 0,162.232 203.718,365.287 407.437,162.232 386.258,140.984 	"
		/>
	</g>
</svg>
