<script lang="ts">
</script>

<div class="post">
	<slot />
</div>

<style lang="scss">
	.post {
		max-width: var(--text-block-width);
		margin: 0 auto;
	}

	:global(.post pre) {
		max-width: var(--text-block-width);
		border-radius: 0.5rem;

		@media (min-width: 960px) {
			max-width: 80ch;
			margin-left: -10ch;
			margin-right: -10ch;
		}
	}

	:global(.post p img) {
		width: 100vw;
		position: relative;
		left: 50%;
		right: 50%;
		margin-left: -50vw;
		margin-right: -50vw;
	}
</style>
