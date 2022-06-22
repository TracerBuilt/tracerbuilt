<script lang="ts">
	import { fly } from 'svelte/transition'
</script>

<div id="about">
	<h2 in:fly={{ duration: 400, x: -200, delay: 200 }}>About Me</h2>
	<p in:fly={{ duration: 400, x: -200, delay: 400 }}>
		I've created a few completely custom ecommerce sites, a bespoke non-profit site for a local high
		school theater company, and more silly side projects than I care to mention.
	</p>
	<p in:fly={{ duration: 400, x: -200, delay: 600 }}>
		And then there's this site itself, which should serve as an excellent example of the sort of
		things I'm enjoying working with at the moment, interesting problems I've found to solve, and
		any generally helpful information I feel called to share.
	</p>
</div>
