<script lang="ts">
	export let isBlurb = false
</script>

{#if isBlurb}
	<div class="blurb">
		<a href="projects/jefferson-theatre-company">
			<img
				src="/images/jefferson-theatre-company.webp"
				alt="Home page of the Jefferson Theatre Company website"
				width="1413"
				height="1316"
			/>
			<div class="blurb-text">
				<h3>Jefferson Theatre Company</h3>
				<p>
					A completely custom SvelteKit based site for a local high school theater company, with
					ecommerce and Prismic CMS integration.
				</p>
			</div>
		</a>
	</div>
{:else}
	<div class="main">
		<h1>Jefferson Theatre Company</h1>
		<p>
			This was my first official SvelteKit project, and my first time implementing a custom <span
				class="small-caps">cms</span
			> integration for less-technical clients. The entire site was redone from scratch, tossing out
			their wonky and slow Wordpress site and replacing it with something slick and more professional-looking.
		</p>
		<img
			src="/images/jefferson-theatre-company.webp"
			alt="Home page of the Jefferson Theatre Company website"
			width="1413"
			height="1316"
		/>
		<p>
			Working with the client was particularly instructive. Walking them through potential
			implementations for different aspects of the site both helped to cement my own knowledge, and
			allowed me to look at the site and its functions from a broader, less developer-centric
			perspective.
		</p>
	</div>
{/if}

<style lang="scss">
	a {
		color: var(--text);
		text-decoration: none;
	}
	.blurb {
		border-radius: 0.2rem;
		transition: all 0.2s ease-in-out;
		&:hover {
			box-shadow: 0px 1.2px 1.9px -14px rgba(0, 0, 0, 0.018),
				0px 2.7px 4.3px -14px rgba(0, 0, 0, 0.026), 0px 4.8px 7.7px -14px rgba(0, 0, 0, 0.032),
				0px 8px 12.8px -14px rgba(0, 0, 0, 0.038), 0px 13.2px 21.2px -14px rgba(0, 0, 0, 0.044),
				0px 23.1px 37px -14px rgba(0, 0, 0, 0.052), 0px 50px 80px -14px rgba(0, 0, 0, 0.07);
			transform: scale(1.05);
		}

		img {
			width: 100%;
			height: auto;
			box-shadow: -0.2rem 0.4rem 0.5rem var(--blue-shadow);
		}

		.blurb-text {
			padding: var(--space--7);
		}
	}
	.main {
		h1 {
			margin-top: 0;
		}

		img {
			width: 100%;
			height: auto;
			margin-bottom: var(--space-0);
			box-shadow: 0px 1.2px 1.9px -14px rgba(0, 0, 0, 0.018),
				0px 2.7px 4.3px -14px rgba(0, 0, 0, 0.026), 0px 4.8px 7.7px -14px rgba(0, 0, 0, 0.032),
				0px 8px 12.8px -14px rgba(0, 0, 0, 0.038), 0px 13.2px 21.2px -14px rgba(0, 0, 0, 0.044),
				0px 23.1px 37px -14px rgba(0, 0, 0, 0.052), 0px 50px 80px -14px rgba(0, 0, 0, 0.07);
		}
	}
</style>
