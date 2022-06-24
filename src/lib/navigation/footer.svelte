<script lang="ts">
	import Fork from '$lib/components/icons/fork.svelte'
	import Star from '$lib/components/icons/star.svelte'
	const url = 'https://api.github.com/repos/TracerBuilt/tracerbuilt'
	let stars
	let forks: number

	fetch(url, { headers: { 'Content-Type': 'application/json' } })
		.then((res) => res.json())
		.then((data) => {
			stars = data.stargazers_count
			forks = data.forks_count
		})
</script>

<footer>
	<p>Created by Tyler Ward</p>
	<div class="icons">
		<div class="icon">
			<Star width="var(--step--2)" />
			{stars}
		</div>
		<div class="icon">
			<Fork width="var(--step--2)" />
			{forks}
		</div>
	</div>
</footer>

<style lang="scss">
	:root {
		--footer-color: var(--text);
	}

	footer {
		position: absolute;
		display: flex;
		height: 5rem;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: var(--footer-color);
		fill: var(--footer-color);
		font-size: var(--step--1);
		inset: auto 0 0 0;
	}

	p {
		margin-bottom: 0;
	}

	.icons {
		display: flex;
		gap: var(--space--4);
	}

	.icon {
		display: flex;
		align-items: center;
		gap: var(--space--7);
	}
</style>
