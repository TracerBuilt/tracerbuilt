<script lang="ts">
	export let isBlurb = false
</script>

{#if isBlurb}
	<a href="projects/nda-ecommerce-project">
		<div class="blurb">
			<div class="blurb-text">
				<h3>NDA Ecommerce Project</h3>
				<p>
					A Next.js ecommerce site for a small startup with limited funds that required creativity
					in weaving <span class="small-caps">api</span>s together to provide a low-cost and
					maintainable solution for them to be able to sell and ship themselves while charging
					appropriate sales tax without an unsustainable amount of overhead for a small business.
				</p>
			</div>
		</div>
	</a>
{:else}
	<main>
		<h1>NDA Ecommerce Project</h1>
		<p>
			<strong>Stack</strong>: Next.js, Typescript, Netlify, Stripe
		</p>
		<p>
			My first large project, this site required quite a bit of backend shenanigans to allow for a
			custom ecommerce solution that provided all the needed functionality for sales and calculating
			tax/shipping, without using any of the simpler, but much more costly solutions like Shopify or
			Avatax.
		</p>
		<p>
			The site is based on Next.js and Typescript and hosted on Netlify. It uses <span
				class="small-caps">api</span
			>s from Stripe, Easypost, Avatax (their free sales tax <span class="small-caps">api</span> for
			the <span class="small-caps">u.s.</span>, not the paid, all-inclusive version), Vatlayer, and
			MailChimp (for their mailing list); and a custom shopping cart based on React hooks, context,
			and local storage.
		</p>
		<p>
			Being my first major project, this site had quite a few big challenges to solve, the most
			difficult included:
		</p>

		<ul>
			<li>
				implementing a system of fluid typography to govern the spacing and sizing for the entire
				site (the client were sticklers for consistency)
			</li>
			<li>
				learning the ins and outs of React context and reducers to be able to implement a
				fully-functional ecommerce experience across the entire site
			</li>
			<li>
				learning Typescript in order to keep data consistent when being passed between the various <span
					class="small-caps">api</span
				>s.
			</li>
		</ul>
	</main>
{/if}

<style lang="scss">
	a {
		text-decoration: none;
	}

	.blurb {
		display: flex;
		flex-direction: column;
		border-radius: 0.2rem;
		color: var(--text);
		transition: all 0.2s ease-in-out;

		picture {
			width: 100%;
			margin-bottom: var(--space-0);

			img {
				width: 100%;
				height: auto;
			}

			@media (min-width: 960px) {
				width: 40%;
			}
		}

		.blurb-text {
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

		@media (min-width: 960px) {
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
