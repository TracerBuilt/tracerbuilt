<script lang="ts">
	import Atlas_Blurb from './projects/atlas-global-aid/Blurb.svelte'
	import Jefferson_Blurb from './projects/jefferson-theatre-company/Blurb.svelte'

	import { fly } from 'svelte/transition'
	import { cubicInOut } from 'svelte/easing'
</script>

<section id="work" class="relative z-10 mb-16 text-center">
	<h2
		class="mx-auto mb-12 w-11/12 text-3xl"
		in:fly={{ duration: 300, x: -200, easing: cubicInOut, delay: 100 }}
	>
		My Work
	</h2>
	<div class="mx-auto flex max-w-4xl flex-col gap-16 text-left">
		<div
			in:fly={{ duration: 400, x: -200, easing: cubicInOut, delay: 300 }}
			class="z-20"
		>
			<Atlas_Blurb />
		</div>
		<div
			in:fly={{ duration: 400, x: -200, easing: cubicInOut, delay: 600 }}
			class="z-20"
		>
			<Jefferson_Blurb />
		</div>
	</div>
</section>
