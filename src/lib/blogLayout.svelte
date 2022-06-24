<script>
	import { onMount } from 'svelte'

	export let title
	export let date
	let formattedDate = ''

	onMount(() => {
		const parsedDate = new Date(date)

		function getSuffix(numericDay) {
			const day = numericDay.toString()
			switch (day.charAt(day.length - 1)) {
				case '1':
					return day + 'st'
				case '2':
					return day + 'nd'
				case '3':
					return day + 'rd'
				default:
					return day + 'th'
			}
		}

		formattedDate = `
			${Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(parsedDate)}, the ${getSuffix(
			parsedDate.getDate()
		)} of ${Intl.DateTimeFormat('en-US', { month: 'long' }).format(
			parsedDate
		)}, ${Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(parsedDate)}`
	})
</script>

<div class="post">
	<h1>{title}</h1>
	<h5>{formattedDate}</h5>
	<slot />
</div>

<style>
	.post {
		max-width: var(--text-block-width);
		margin: 0 auto;
	}

	h1 {
		margin-bottom: 0;
	}

	h5 {
		margin-top: 0;
		color: var(--blue-grey-500);
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
		position: relative;
		right: 50%;
		left: 50%;
		width: 100vw;
		margin-right: -50vw;
		margin-left: -50vw;
	}
</style>
