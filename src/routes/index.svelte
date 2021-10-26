<script context="module" lang="ts">
	export const prerender = true
</script>

<script lang="ts">
	let m = { x: 0, y: 0 }

	let element
	let rect

	$: {
		element = document.getElementById('thing')
		rect = element.getBoundingClientRect()
	}

	function handleMouseMove(event) {
		m.x = event.clientX
		m.y = event.clientY
	}
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="main" id="about">
	<div class="h4">My name is Tyler, and I'm a</div>
	<h1>Full-Stack Web Developer</h1>
	<p>
		Which is a <em>very</em> fancy-sounding way of telling you that I think very highly of myself.
	</p>
	<div class="thing-container" on:mousemove={handleMouseMove}>
		<div id="thing" />
	</div>
</div>

<style lang="scss">
	.main {
		max-width: 60ch;

		.h4:first-of-type {
			margin-top: 0;
		}
	}

	.thing-container {
		position: relative;

		#thing {
			position: absolute;
			width: 5rem;
			height: 5rem;
			background: var(--yellow-400);
			border-radius: 5px;
			content: '';
		}
	}
</style>
