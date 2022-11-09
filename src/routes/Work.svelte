<script lang="ts">
	import Atlas_Blurb from './projects/atlas-global-aid/Blurb.svelte'
	import Jefferson_Blurb from './projects/jefferson-theatre-company/Blurb.svelte'
	import Nda_Blurb from './projects/nda-ecommerce-project/Blurb.svelte'

	import { fly } from 'svelte/transition'
	import { cubicInOut } from 'svelte/easing'
</script>

<section id="work" class="relative z-10 text-center mb-16">
	<h2
		class="text-3xl w-11/12 mx-auto mb-12"
		in:fly={{ duration: 300, x: -200, easing: cubicInOut, delay: 100 }}
	>
		My Work
	</h2>
	<div class="flex max-w-4xl text-left mx-auto flex-col gap-16">
		<div in:fly={{ duration: 400, x: -200, easing: cubicInOut, delay: 300 }} class="z-20">
			<Atlas_Blurb />
		</div>
		<div in:fly={{ duration: 400, x: -200, easing: cubicInOut, delay: 600 }} class="z-20">
			<Jefferson_Blurb />
		</div>
		<div in:fly={{ duration: 400, x: -200, easing: cubicInOut, delay: 1000 }} class="z-20">
			<Nda_Blurb />
		</div>
	</div>
</section>
