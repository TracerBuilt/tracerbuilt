<script lang="ts">
	import Blurb from '../Blurb.svelte'
</script>

<Blurb href="/projects/nda-ecommerce-project">
	<span slot="name">NDA Ecommerce Site</span>

	<span slot="text">
		<p>
			A Next.js ecommerce site for a small startup with limited funds that required creativity in
			weaving <span class="small-caps">api</span>s together to provide a low-cost and maintainable
			solution for them to be able to sell and ship themselves while charging appropriate sales tax
			without an unsustainable amount of overhead for a small business.
		</p>
	</span>

	<ul slot="stack">
		<li>React</li>
		<li>Next.js</li>
		<li>Stripe</li>
		<li>Easypost</li>
		<li>Mailchimp</li>
		<li>Netlify</li>
	</ul>
</Blurb>
