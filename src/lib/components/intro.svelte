<script>
	import Chevron from './chevron.svelte'

	let scroll
</script>

<svelte:window bind:scrollY={scroll} />

<div class="intro">
	<div class="text">
		<div class="h4">Hey, my name is</div>
		<h1>Tyler Ward.</h1>
		<div class="h2">
			I build <span class="fancy-text">cool stuff</span> for the web.
		</div>
	</div>
</div>

{#if scroll === 0}
	<div class="chevron">
		<Chevron />
	</div>
{/if}

<div class="swoosh" />

<style lang="scss">
	.intro {
		display: flex;
		height: 95vh;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
	}

	.text {
		margin-top: -10rem;
		text-align: left;
	}

	.h4 {
		margin: 0;
	}

	h1 {
		margin-top: 0;
		margin-bottom: 0;
	}

	.h2 {
		margin-top: 0;
		margin-bottom: 0;
		color: var(--blue-grey-500);
	}

	.fancy-text {
		background-clip: text;
		background-image: linear-gradient(135deg, var(--blue-500), var(--red-400));
		color: transparent;
	}

	.chevron {
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		right: 0;
		bottom: 2rem;
		left: 0;
	}

	.swoosh {
		z-index: -1;
		position: absolute;
		top: 60vh;
		right: 0;
		width: 10rem;
		height: 30rem;

		&::before,
		&::after {
			position: absolute;
			right: 0;
			display: block;
			content: '';
		}

		&::before {
			width: 20rem;
			height: 30rem;
			background-image: linear-gradient(0deg, var(--blue-500), var(--red-400));
			clip-path: polygon(100% 0%, 50% 50%, 100% 100%);
		}

		&::after {
			top: 7rem;
			width: 10rem;
			height: 15rem;
			background-image: linear-gradient(0deg, hsl(0 0% 100% / 0.25), transparent);
			clip-path: polygon(100% 0%, 50% 50%, 100% 100%);
		}

		@media (min-width: 960px) {
			width: 30rem;
			height: 45rem;

			&::before {
				width: 30rem;
				height: 45rem;
			}
			&::after {
				top: 10rem;
				width: 15rem;
				height: 22.5rem;
			}
		}
	}
</style>
