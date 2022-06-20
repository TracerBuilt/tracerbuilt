<script lang="ts">
	import JeffersonTheatreCompany from './jefferson-theatre-company.svelte'
	import NdaEcommerceProject from './nda-ecommerce-project.svelte'
</script>

<div class="main">
	<div class="card">
		<JeffersonTheatreCompany isBlurb={true} />
	</div>
	<div class="card">
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
