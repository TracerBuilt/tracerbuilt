<script lang="ts">
</script>

<div class="max-w-prose font-serif mx-auto [&>p]:mb-4 [&>p]:leading-relaxed">
	<h1 class="text-3xl font-sans leading-none mb-4">NDA Ecommerce Project</h1>
	<div class="font-sans text-grey-9 dark:text-grey-4 leading-none mb-6">
		React, Next.js, Typescript, Netlify, Stripe
	</div>
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

	<ul class="list-disc pl-4 sm:pl-0">
		<li>
			Implementing a system of fluid typography to govern the spacing and sizing for the entire site
			(the client were sticklers for consistency)
		</li>
		<li>
			Learning the ins and outs of React context and reducers to be able to implement a
			fully-functional ecommerce experience across the entire site
		</li>
		<li>
			Learning Typescript in order to keep data consistent when being passed between the various <span
				class="small-caps">api</span
			>s.
		</li>
	</ul>
</div>
