<div class="intro">
	<div class="h4">Hey, I'm Tyler, a</div>
	<h1>Full-Stack Web Developer,</h1>
	<div class="h2">and I love to build <span class="fancy-text">cool stuff</span> for the web.</div>
	<div class="swoosh" />
</div>

<style lang="scss">
	.intro {
		display: flex;
		height: 92vh;
		flex-direction: column;
		justify-content: center;
	}
	.h4 {
		margin-bottom: 0;
	}

	h1 {
		margin-top: 0;
		margin-bottom: var(--step-0);
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

	.swoosh {
		position: absolute;
		top: 50vh;
		right: 0;
		width: 20rem;
		height: 30rem;
		background-image: linear-gradient(180deg, var(--blue-500), var(--red-400));
		clip-path: polygon(100% 0%, 50% 50%, 100% 100%);
	}
</style>
