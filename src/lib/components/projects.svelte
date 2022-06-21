<script lang="ts">
	import JeffersonTheatreCompany from '../../routes/projects/jefferson-theatre-company.svelte'
	import NdaEcommerceProject from '../../routes/projects/nda-ecommerce-project.svelte'

	import { fly } from 'svelte/transition'
</script>

<div class="main">
	<h2 in:fly={{duration: 300, x: -200, delay: 400}}>Projects</h2>
	<div in:fly={{duration: 400, x: 200, delay: 1000}} class="card">
		<JeffersonTheatreCompany isBlurb={true} />
	</div>
	<div in:fly={{duration: 400, x: 200, delay: 1600}} class="card">
		<NdaEcommerceProject isBlurb={true} />
	</div>
</div>

<style lang="scss">
	.main {
		z-index: 2;
		display: flex;
		flex-direction: column;
		margin-bottom: 2rem;
		gap: var(--space-0);
	}

	.card {
		z-index: 2;
		background: var(--white);
		padding: var(--space--4) var(--space--6) 0;
		border-radius: 0.2rem;
		box-shadow: var(--shadow-elevation-medium);
	}
</style>
