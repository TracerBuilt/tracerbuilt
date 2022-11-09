<script lang="ts">
	import PhotoBorder from '$lib/components/Photo_Border.svelte'
</script>

<div class="mx-2 relative mb-12">
	<PhotoBorder>
		<picture>
			<source srcset="/images/atlas-home-desktop.avif" type="image/avif" />
			<source srcset="/images/atlas-home-desktop.webp" type="image/webp" />
			<source srcset="/images/atlas-home-desktop.jpg" type="image/jpeg" />
			<img
				src="/images/atlas-theatre-company.jpg"
				alt="Home page of the Atlas website on desktop"
				width="2540"
				height="1420"
			/>
		</picture>
	</PhotoBorder>
	<PhotoBorder mobile>
		<picture>
			<source srcset="/images/atlas-home-mobile.avif" type="image/avif" />
			<source srcset="/images/atlas-home-mobile.webp" type="image/webp" />
			<source srcset="/images/atlas-home-mobile.jpg" type="image/jpeg" />
			<img
				src="/images/atlas-home-mobile.jpg"
				alt="Home page of the Atlas website on mobile"
				width="780"
				height="1688"
			/>
		</picture>
	</PhotoBorder>
</div>
<div class="max-w-prose font-serif mx-auto [&>p]:mb-4 [&>p]:leading-relaxed">
	<h1 class="text-3xl font-sans leading-none mb-4">Atlas Global Aid</h1>
	<div class="font-sans text-grey-9 leading-none mb-6">
		Svelte, SvelteKit, Prismic, PayPal, Netlify
	</div>
	<a
		href="https://atlasglobalaid.org"
		class="font-sans leading-none mb-8 inline-block text-lg text-blue-9 hover:text-blue-11 hover:underline transition-all ease-in-out active:text-blue-12 font-light"
		><strong>Live Site</strong></a
	>
	<p>
		Atlas, a non-profit providing non-lethal aid to Ukraine, needed a website that better reflected
		their vision for their organization.
	</p>
</div>
