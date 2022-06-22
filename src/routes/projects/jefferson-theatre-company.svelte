<script lang="ts">
	export let isBlurb = false
</script>

{#if isBlurb}
	<a href="projects/jefferson-theatre-company">
		<div class="blurb">
			<picture>
				<source srcset="/images/jefferson-theatre-company.webp" type="image/webp" />
				<source srcset="/images/jefferson-theatre-company.jpg" type="image/jpeg" />
				<img
					src="/images/jefferson-theatre-company.jpg"
					alt="Home page of the Jefferson Theatre Company website"
					width="1413"
					height="1316"
				/>
			</picture>
			<div class="blurb-text">
				<h3>Jefferson Theatre Company</h3>
				<p>
					A completely custom SvelteKit based site for a local high school theater company, with
					ecommerce and Prismic CMS integration.
				</p>
			</div>
		</div>
	</a>
{:else}
	<main>
		<h1>Jefferson Theatre Company</h1>
		<p style:margin-bottom="0">
			<strong>Stack</strong>: Svelte, Prismic, Snipcart, Google
			<span class="small-caps">api</span>s, Netlify
		</p>
		<p><a href="https://jeffersontheatrecompany.org"><strong>Live Site</strong></a></p>
		<p>
			This was my first official SvelteKit project, and my first time implementing a custom <span
				class="small-caps">cms</span
			> integration for less-technical clients. The entire site was redone from scratch, tossing out
			their wonky and slow Wordpress site and replacing it with something slick and more professional-looking.
		</p>
		<picture>
			<source srcset="/images/jefferson-theatre-company.webp" type="image/webp" />
			<source srcset="/images/jefferson-theatre-company.jpg" type="image/jpeg" />
			<img
				src="/images/jefferson-theatre-company.jpeg"
				alt="Home page of the Jefferson Theatre Company website"
				width="1413"
				height="1316"
			/>
		</picture>
		<p>
			Working with a less technically savvy client was particularly instructive. Walking them
			through potential implementations for different aspects of the site both helped to cement my
			own knowledge, and allowed me to look at the site and its functions from a broader, less
			developer-centric perspective.
		</p>

		<h2>Client Requirements</h2>

		<p>
			The client had a few major concerns about their current site that they wanted addressed in the
			new one:
		</p>
		<ul>
			<li>Very slow speeds</li>
			<li>Navigating the site was not easy</li>
			<li>Complicated plugin maintenance</li>
			<li>Difficult audition application process</li>
		</ul>
		<p>
			And my own goal for the new site was to simplify things for the client as much as possible.
			This was a non-profit company ran entirely by the parents of the theater students, so it was
			important to me that they'd need to spend as little as possible of their alreaady limited time
			keeping the site running.
		</p>
	</main>
{/if}

<style lang="scss">
	a {
		text-decoration: none;
	}

	.blurb {
		display: flex;
		width: 100%;
		flex-direction: column;
		border-radius: 0.2rem;
		color: var(--text);
		transition: all 0.2s ease-in-out;

		.blurb-text {
			@media (min-width: 720px) {
				padding-left: var(--space--4);
			}

			h3 {
				margin-top: 0;
			}
		}

		&:hover {
			.blurb-text {
				h3 {
					color: var(--blue-500);
				}
			}
		}

		picture {
			width: 100%;
			margin-bottom: var(--space-0);
			border-radius: 0.2rem;
			box-shadow: var(--shadow-elevation-low);

			img {
				width: 100%;
				height: auto;
				border-radius: 0.2rem;
			}

			@media (min-width: 720px) {
				width: 50%;
			}
		}

		@media (min-width: 720px) {
			flex-direction: row;
		}
	}

	main {
		margin: 0 auto;
		width: var(--text-block-width);

		h1 {
			display: inline;
			margin: 0;
			background-clip: text;
			background-image: linear-gradient(45deg, var(--blue-500), var(--red-400));
			color: transparent;
		}

		picture {
			img {
				width: 100%;
				height: auto;
			}

			margin-bottom: var(--space-0);
			box-shadow: 0px 1.2px 1.9px -14px rgba(0, 0, 0, 0.018),
				0px 2.7px 4.3px -14px rgba(0, 0, 0, 0.026), 0px 4.8px 7.7px -14px rgba(0, 0, 0, 0.032),
				0px 8px 12.8px -14px rgba(0, 0, 0, 0.038), 0px 13.2px 21.2px -14px rgba(0, 0, 0, 0.044),
				0px 23.1px 37px -14px rgba(0, 0, 0, 0.052), 0px 50px 80px -14px rgba(0, 0, 0, 0.07);
		}
	}
</style>
