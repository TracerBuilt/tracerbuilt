<script lang="ts">
	import Blurb from '../Blurb.svelte'
</script>

<Blurb href="/projects/atlas-global-aid">
	<picture slot="picture_desktop">
		<source srcset="/images/atlas-home-desktop.avif" type="image/avif" />
		<source srcset="/images/atlas-home-desktop.webp" type="image/webp" />
		<source srcset="/images/atlas-home-desktop.jpg" type="image/jpeg" />
		<img
			src="/images/atlas-theatre-company.jpg"
			alt="Home page of the Atlas Global Aid website on desktop"
			width="2540"
			height="1420"
		/>
	</picture>
	<picture slot="picture_mobile">
		<source srcset="/images/atlas-home-mobile.avif" type="image/avif" />
		<source srcset="/images/atlas-home-mobile.webp" type="image/webp" />
		<source srcset="/images/atlas-home-mobile.jpg" type="image/jpeg" />
		<img
			src="/images/atlas-home-mobile.jpg"
			alt="Home page of the Atlas Global Aid website on mobile"
			width="780"
			height="1688"
		/>
	</picture>

	<span slot="name">Atlas Global Aid</span>

	<span slot="text">
		<p>
			A custom SvelteKit-based site for a non-profit providing non-lethal aid to Ukraine, with
			Prismic CMS integration and PayPal donations and fundraising campaigns.
		</p>
	</span>

	<ul slot="stack">
		<li>Svelte</li>
		<li>SvelteKit</li>
		<li>Prismic</li>
		<li>Tailwind</li>
		<li>PayPal</li>
		<li>Netlify</li>
	</ul>
</Blurb>
