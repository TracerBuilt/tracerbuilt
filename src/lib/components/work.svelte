<script lang="ts">
	import JeffersonTheatreCompany from '../../routes/projects/jefferson-theatre-company.svelte'
	import NdaEcommerceProject from '../../routes/projects/nda-ecommerce-project.svelte'

	import { fly } from 'svelte/transition'
	import { cubicInOut } from 'svelte/easing'
</script>

<div id="work">
	<h2 in:fly={{ duration: 300, x: -200, easing: cubicInOut, delay: 200 }}>My Work</h2>
	<div class="container">
		<div in:fly={{ duration: 400, x: -200, easing: cubicInOut, delay: 500 }} class="card">
			<JeffersonTheatreCompany isBlurb={true} />
		</div>
		<div in:fly={{ duration: 400, x: -200, easing: cubicInOut, delay: 1000 }} class="card">
			<NdaEcommerceProject isBlurb={true} />
		</div>
	</div>
</div>

<style lang="scss">
	h2 {
		margin-bottom: var(--space-0);
	}

	#work {
		z-index: 2;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: var(--space-2);
	}

	.container {
		display: flex;
		max-width: 50rem;
		flex-direction: column;
		gap: var(--space-0);
	}

	.card {
		z-index: 2;
		width: 100%;
		background: var(--white);
		border-radius: 0.2rem;
		box-shadow: var(--shadow-elevation-medium);
	}
</style>
