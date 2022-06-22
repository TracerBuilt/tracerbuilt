<script lang="ts">
	import { onMount } from 'svelte'

	export let title
	export let date
	let formattedDate = ''

	onMount(() => {
		const parsedDate = new Date(Date.parse(date))

		const options = {
			weekday: "long",
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		}

		formattedDate = parsedDate.toLocaleString('en-US', options)
	})
</script>

<div class="post">
	<h1>{title}</h1>
	<h5><span class="published">Published:</span> {formattedDate}</h5>
	<slot />
</div>

<style lang="scss">
	.post {
		max-width: var(--text-block-width);
		margin: 0 auto;
	}

	h1 {
		margin-bottom: 0;
	}
	h5 {
		margin-top: 0;

		.published {
			color: var(--blue-grey-500);
		}
	}

	:global(.post pre) {
		border-radius: 0.5rem;
	}

	@media (min-width: 960px) {
		:global(.post pre) {
			margin-right: -5ch;
			margin-left: -5ch;
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
