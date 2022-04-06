<script lang="ts">
	import JeffersonTheatreCompany from './jefferson-theatre-company.svelte'
</script>

<div class="main">
	<JeffersonTheatreCompany isBlurb={true} />
	<JeffersonTheatreCompany isBlurb={true} />
</div>

<style lang="scss">
	.main {
		display: grid;
		margin-bottom: 2rem;
		grid-gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	}
</style>
