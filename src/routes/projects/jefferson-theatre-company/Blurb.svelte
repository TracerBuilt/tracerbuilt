<script lang="ts">
	import Blurb from '../Blurb.svelte'
</script>

<Blurb href="/projects/jefferson-theatre-company">
	<picture slot="picture_desktop">
		<source srcset="/images/jefferson-home-desktop.avif" type="image/avif" />
		<source srcset="/images/jefferson-home-desktop.webp" type="image/webp" />
		<source srcset="/images/jefferson-home-desktop.jpg" type="image/jpeg" />
		<img
			src="/images/jefferson-theatre-company.jpg"
			alt="Home page of the Jefferson Theatre Company website on desktop"
			width="2540"
			height="1420"
		/>
	</picture>
	<picture slot="picture_mobile">
		<source srcset="/images/jefferson-home-mobile.avif" type="image/avif" />
		<source srcset="/images/jefferson-home-mobile.webp" type="image/webp" />
		<source srcset="/images/jefferson-home-mobile.jpg" type="image/jpeg" />
		<img
			src="/images/jefferson-home-mobile.jpg"
			alt="Home page of the Jefferson Theatre Company website on mobile"
			width="780"
			height="1688"
		/>
	</picture>

	<span slot="name">Jefferson Theatre Company</span>

	<span slot="text">
		<p>
			A completely custom SvelteKit-based site for a local, non-profit theater company, with
			ecommerce and Prismic CMS integration.
		</p>
		<p>
			Featured automatic Paypal payments for audition application forms, and Google sheets <span
				class="small-caps">api</span
			> access for storing application data.
		</p>
	</span>
	<ul slot="stack">
		<li>Svelte</li>
		<li>SvelteKit</li>
		<li>Prismic</li>
		<li>Snipcart</li>
		<li>Google APIs</li>
		<li>PayPal</li>
		<li>Netlify</li>
	</ul>
</Blurb>
