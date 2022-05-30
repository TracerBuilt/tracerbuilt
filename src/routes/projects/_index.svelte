<script lang="ts">
	import JeffersonTheatreCompany from './jefferson-theatre-company.svelte'
	import NdaEcommerceProject from './nda-ecommerce-project.svelte'
</script>

<div class="main">
	<JeffersonTheatreCompany isBlurb={true} />
	<NdaEcommerceProject isBlurb={true} />
</div>

<style lang="scss">
	.main {
		display: flex;
		flex-direction: column;
		margin-bottom: 2rem;
		gap: var(--space-0);
	}
</style>
