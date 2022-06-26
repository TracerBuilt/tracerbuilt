<script lang="ts">
	import { fly, scale } from 'svelte/transition'
	import { cubicInOut, expoInOut } from 'svelte/easing'
</script>

<div id="about">
	<h2 in:fly={{ duration: 400, x: -200, easing: cubicInOut, delay: 200 }}>About Me</h2>
	<div class="wrapper">
		<div class="text">
			<p in:fly={{ duration: 400, x: -200, easing: cubicInOut, delay: 400 }}>
				I'm Tyler, I have always loved technology, and even studied computer engineering in college
				for a bit, before leaving to move to New York. Five years later I relocated to the Twin
				Cities during the pandemic, where I discovered my love of creating things for the web.
			</p>
			<p in:fly={{ duration: 400, x: -200, easing: cubicInOut, delay: 600 }}>
				I've been working as a freelance developer for two years now, creating everything from
				simple contact forms to complete ecommerce platforms built entirely from scratch.
			</p>
		</div>
		<picture in:scale={{ duration: 400, easing: expoInOut, delay: 1000 }}>
			<source srcset="/images/profile-picture.webp" type="image/webp" />
			<source srcset="/images/profile-picture.jpg" type="image/jpeg" />
			<img
				src="/images/profile-picture.jpg"
				alt="Me, in a painted style, with a moustache. I look pretty good."
				width="1031"
				height="1031"
			/>
		</picture>
	</div>
</div>

<style lang="scss">
	#about {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;

		@media (min-width: 960px) {
			flex-direction: row;
			align-items: flex-start;
		}
	}

	h2 {
		align-self: center;
		margin-bottom: var(--space-0);
	}

	picture {
		display: flex;
		width: 15rem;
		height: 15rem;
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
		border: solid 0.1em var(--blue-grey-50);
		background-color: hsl(0 0% 100% / 0.7);
		border-radius: 50%;
		box-shadow: var(--shadow-elevation-medium);

		@supports (backdrop-filter: none) {
			backdrop-filter: blur(0.5em);
			background-color: hsl(0 0% 100% / 0.2);
		}
	}

	img {
		width: 97%;
		height: auto;
		border-radius: 50%;
	}
</style>
