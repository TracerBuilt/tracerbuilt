<script lang="ts">
	import PhotoBorder from '$lib/components/Photo_Border.svelte'
</script>

<div class="mx-2 relative mb-12">
	<PhotoBorder format="desktop">
		<picture>
			<source srcset="/images/atlas-home-desktop.avif" type="image/avif" />
			<source srcset="/images/atlas-home-desktop.webp" type="image/webp" />
			<source srcset="/images/atlas-home-desktop.jpg" type="image/jpeg" />
			<img
				src="/images/atlas-home-desktop.jpg"
				alt="Home page of the Atlas website on desktop"
				width="2540"
				height="1420"
			/>
		</picture>
	</PhotoBorder>
	<PhotoBorder format="mobile">
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
	<div class="font-sans text-grey-9 dark:text-grey-4 leading-none mb-6">
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

	<h2 class="text-2xl font-sans mb-2">Client Requirements</h2>
	<p>Coming from a more generic site, the client wanted something that stood out:</p>

	<ul class="list-disc pl-4 sm:pl-0 mb-4">
		<li>Fast</li>
		<li>Secure</li>
		<li>Cleanly designed</li>
		<li>Simple donations</li>
	</ul>

	<h2 class="text-2xl font-sans mb-2">Solutions</h2>

	<h3>Rewrite the Thing</h3>

	<p>
		The site was entirely rewritten in Svelte and Sveltekit, to take advantage of the built-in
		performance of Svelte, and both the static and SSR capabilities of Sveltekit so the site could
		be as fast as possible.
	</p>

	<h3 class="text-xl font-sans mb-2">Make it Secure by Default</h3>

	<p>
		The site was hosted on Netlify's global CDN, to reduce its susceptibility to attack as much as
		possible. As well as taking full advantage of SvelteKit's CSRF protection, and a strict CSP to
		guard against XSS attacks.
	</p>

	<h3 class="text-xl font-sans mb-2">Redesign the Thing</h3>

	<p>
		Worked closely with the client to find a clean, minimal design that would highlight the
		strengths of the organization.
	</p>

	<PhotoBorder>
		<picture>
			<source srcset="/images/atlas-about.avif" type="image/avif" />
			<source srcset="/images/atlas-about.webp" type="image/webp" />
			<source srcset="/images/atlas-about.jpg" type="image/jpeg" />
			<img
				src="/images/atlas-about.jpg"
				alt="Atlas' new 'About' page, with images of their operations with overlaying titles and descriptions highlighting the work they do"
				width="2540"
				height="1420"
			/>
		</picture>
	</PhotoBorder>

	<p>And be as focused as possible:</p>

	<PhotoBorder>
		<picture>
			<source srcset="/images/atlas-partner.avif" type="image/avif" />
			<source srcset="/images/atlas-partner.webp" type="image/webp" />
			<source srcset="/images/atlas-partner.jpg" type="image/jpeg" />
			<img
				src="/images/atlas-partner.jpg"
				alt="Atlas' new 'Partners' page, with logos and descriptions of their partners and what they do, arranged as a two-column grid"
				width="2540"
				height="1420"
			/>
		</picture>
	</PhotoBorder>

	<h3 class="text-xl font-sans mb-2">Make Donations Easy</h3>

	<p>Finally, the donation process had to be simple to find and easy to complete. With a prominent 'donate' button at the head of every page, and front-and-center on the landing page, people could be easily directed to where they can support Atlas' mission.</p>

	<p>And the donation page itself is as concise as possible, allowing people to donate to specific fundraising campaigns or just to Atlas' operation in general.</p>

	<PhotoBorder>
		<picture>
			<source srcset="/images/atlas-donations.avif" type="image/avif" />
			<source srcset="/images/atlas-donations.webp" type="image/webp" />
			<source srcset="/images/atlas-donations.jpg" type="image/jpeg" />
			<img
				src="/images/atlas-donations.jpg"
				alt="Atlas' new 'Donation' page, with logos and descriptions of their partners and what they do, arranged as a two-column grid"
				width="2540"
				height="1420"
			/>
		</picture>
	</PhotoBorder>

	<h3 class="text-xl font-sans mb-2">Future Work</h3>

	<p>Atlas has contracted me to help them set up an online store on this site for merch. I'll update this page as the work gets nearer to completion.</p>
</div>
