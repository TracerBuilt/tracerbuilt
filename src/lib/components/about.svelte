<script lang="ts">
	import { fly, scale } from 'svelte/transition'
	import { cubicInOut, expoInOut } from 'svelte/easing'
</script>

<div id="about">
			<h2 in:fly={{ duration: 400, x: -200, easing: cubicInOut, delay: 200 }}>About Me</h2>
	<div class="wrapper">
		<div class="text">
			<p in:fly={{ duration: 400, x: -200, easing: cubicInOut, delay: 400 }}>
				I'm Tyler, I have always loved technology, and even studied computer engineering in college,
				but nothing I created in C or Java ever felt tangible enough. I left school, and moved to
				New York for five years before relocating to the Twin Cities during the pandemic, where I
				discovered my love of creating things for the web.
			</p>
			<p in:fly={{ duration: 400, x: -200, easing: cubicInOut, delay: 600 }}>
				I've created a few completely custom ecommerce sites, a bespoke site for a local, non-profit
				theater company, and more silly side projects than I care to mention.
			</p>
			<p in:fly={{ duration: 400, x: -200, easing: cubicInOut, delay: 800 }}>
				And then there's this site itself, which should serve as an excellent example of the sort of
				things I'm enjoying working with at the moment, interesting problems I've found to solve,
				and any generally helpful information I feel called to share.
			</p>
		</div>
		<picture in:scale={{ duration: 400, easing: expoInOut, delay: 1000}}>
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
			align-items: center;
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
		align-items: center;
		justify-content: center;
		border: solid 0.1em var(--blue-grey-50);
		border-radius: 50%;
		box-shadow: var(--shadow-elevation-medium);
		background-color: hsl(0 0% 100% / 0.7);

		@supports (backdrop-filter: none) {
		background-color: hsl(0 0% 100% / 0.2);
		backdrop-filter: blur(0.5em);
			}

		@media (min-width: 420px) {
			width: 20rem;
			height: 20rem;
		}
	}

	img {
		width: 97%;
		height: auto;
		border-radius: 50%;
	}
</style>
