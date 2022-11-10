<script lang="ts">
</script>

<div class="max-w-prose font-serif mx-auto [&>p]:mb-4 [&>p]:leading-relaxed">
	<h1 class="text-3xl font-sans leading-none mb-4">NDA Ecommerce Project</h1>
	<div class="font-sans text-grey-9 dark:text-grey-4 leading-none mb-8">
		React, Next.js, Typescript, Netlify, Stripe, Easypost, Sendgrid, Mailchimp
	</div>
	<p>
		My first large project, this site required quite a bit of backend shenanigans to allow for a
		custom ecommerce solution that provided all the needed functionality for sales and calculating
		tax/shipping, without using any of the simpler, but much more costly solutions like Shopify or
		Avatax.
	</p>

	<h2 class="text-2xl font-sans mb-4 mt-8">Client Requirements</h2>
	<p>
		Being my first major project, this site had quite a few big challenges to solve, the most
		difficult included:
	</p>

	<ul class="list-disc pl-4 sm:pl-0">
		<li>
			Functional ecommerce, including:
			<ul class="list-circle pl-4">
				<li>A site-wide shopping cart</li>
				<li>Tax and shipping calculation</li>
				<li>Payments integration</li>
				<li>Order fulfillment</li>
			</ul>
		</li>
		<li>Legacy Browser Support</li>
		<li>Typescript, for keeping things consistent</li>
		<li>Completely fluid typography</li>
	</ul>

	<h2 class="text-2xl font-sans mt-8 mb-4">Solutions</h2>

	<h3 class="text-xl font-sans mb-2">Ecommerce</h3>
	<p>
		By far and away the vast majority of the work for this project, the custom ecommerce was a
		multi-faceted problem:
	</p>
	<h4 class="text-lg font-sans mb-2">A Shopping Cart</h4>
	<p>
		The first big task with any ecommerce solution, I needed a way for people to select and store
		items for purchase that would work site-wide and persist if the page was refreshed
	</p>
	<p>
		I settled on a combination of React's context and reducers, along with local storage, to make a
		cart on mostly functional principles.
	</p>
	<h4 class="text-lg font-sans mb-2">Tax and Shipping</h4>
	<p>
		This information is difficult to find, and constantly changing, but luckily the client wasn't
		big enough to need to worry about <span class="small-caps">vat</span> on global orders yet, which
		simplified things considerably.
	</p>
	<p>
		For <span class="small-caps">u.s.</span> tax, I was able to use Avatax's free tax <span class="small-caps">api</span> at order time,
		to calculate and apply accurate tax rates without incurring any fees for the client.
	</p>
	<p>
		And for shipping, we went with Easypost, which I wired up to create shipping labels on
		successful receipt of payment.
	</p>
	<h4 class="text-lg font-sans mb-2">Payments and Fulfillment</h4>
	<p>
		We used Stripe for payment processing, which was pretty straightforward. And a serverless
		function attached to a Stripe webhook for successful payments that would purchase a shipping
		label from Easypost and send an email receipt to the customer via Sendgrid.
	</p>

	<h3 class="text-xl font-sans mb-2">Supporting Legacy Browsers</h3>
	<p>
		For the most part, Next.js makes this pretty trivial with a browserslist, but the kicker was the
		Intl library, which I was using for formatting currencies. There <em>is</em> a polyfill for it, but
		it's old and was thus tricky to find and implement. In any case, it works as far back as Firefox
		52, the last version to ship for Windows XP, so I think this was a success.
	</p>

	<h3 class="text-xl font-sans mb-2">Adding TypeScript</h3>
	<p>
		This was my first time creating such a complex app, and passing data between so many different <span
			class="small-caps">api</span
		>s meant that there were a lot of instances where data had to be converted from the expected
		structure for one place to a completely different structure for another. With all the moving
		parts involved, and having just learned the basics of Typescript on my own, I decided about
		halfway through the project to implement it for the whole thing.
	</p>
	<p>
		Adding Typescript to an existing project is not easy, and the whole process took a while, but it
		helped me catch quite a few obscure bugs before they could happen so I consider it quite worth
		the effort.
	</p>

	<h3 class="text-xl font-sans mb-2">Making the Typography Fluid</h3>
	<p>
		The client were sticklers for harmony in the design, and it went as far as the spacing between
		elements, and even the relation of the text area to the blank areas on the page.
	</p>
	<p>
		It took quite a bit of research to find a solution that would fit, before I finally landed on
		completely fluid typography. Basically, the html font size was set to a calculated value between
		16px and 19px, that would grow or shrink along with the page width (setting the base size for
		this calculation as 100% even allowed for the whole thing to be resized based on a users browser
		preferences). A series of sizing steps for type and space are calculated from this base value,
		allowing the entire page to grow and shrink in tandem, keeping the harmonious proportions
		between elements (a technique I've since adopted for all the sites I build).
	</p>

	<h2 class="text-2xl font-sans mt-8 mb-4">Subsequent Work</h2>

	<p>Since the site was first published, I've also added:</p>

	<ul class="list-disc pl-4 sm:pl-0">
		<li>A mailing list sign-up powered by Mailchimp</li>
		<li><span class="small-caps">pdf</span> download support</li>
	</ul>
</div>
