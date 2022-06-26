<script lang="ts">
	import { fly, fade } from 'svelte/transition'
	import NavIcon from './navIcon.svelte'

	export let open = false
	let windowWidth: number

	const routes = [
		{ path: '/blog', text: 'Blog' },
		{ path: '/contact', text: 'Contact'}
	]

	let scrollable = true

	const wheel = (node, options) => {
		let { scrollable } = options

		const handler = (e) => {
			if (!scrollable) e.preventDefault()
		}

		node.addEventListener('wheel', handler, { passive: false })

		return {
			update(options) {
				scrollable = options.scrollable
			},
			destroy() {
				node.removeEventListener('wheel', handler, { passive: false })
			}
		}
	}

	function handleKeydown(event) {
		if (event.key === 'Escape') {
			open = false
		}
	}

	$: if (windowWidth >= 960) {
		open = false
	}

	$: open ? (scrollable = false) : (scrollable = true)
</script>

<svelte:window
	bind:innerWidth={windowWidth}
	use:wheel={{ scrollable }}
	on:keydown={handleKeydown}
/>

{#if windowWidth < 960}
	<NavIcon bind:open />
	{#if open}
		<div class="overlay" on:click={() => (open = false)} transition:fade={{ duration: 300 }}>
			<nav class="sidebar" class:open transition:fly={{ duration: 300, x: 700, opacity: 0.5 }}>
				<ul>
					{#each routes as route, i}
						<li in:fly={{ duration: 300, x: 200, delay: 100 + i * 100 }}>
							<div class="hover-wrapper">
								<a href={route.path} on:click={() => (open = false)}
									>{#each route.text as letter, j}<span
											class="letter"
											style="animation-delay: {j / 20}s;">{letter}</span
										>{/each}</a
								>
							</div>
						</li>
					{/each}
					<li class="image" in:fly={{ duration: 300, x: 200, delay: 200 }}>
						<a href="https://github.com/TracerBuilt"><img src="/icons/github.svg" alt="Github" /></a
						>
					</li>
					<li class="image" in:fly={{ duration: 300, x: 200, delay: 300 }}>
						<a href="https://linkedin.com/in/TracerBuilt"
							><img src="/icons/linkedin.svg" alt="Linkedin" /></a
						>
					</li>
					<li class="image" in:fly={{ duration: 300, x: 200, delay: 400 }}>
						<a href="https://twitter.com/Tracer_Built"
							><img src="/icons/twitter.svg" alt="Twitter" /></a
						>
					</li>
				</ul>
			</nav>
		</div>
	{/if}
{:else}
	<ul>
		{#each routes as route, i}
			<li in:fly={{ duration: 300, x: 200, delay: 100 + i * 100 }}>
				<div class="hover-wrapper">
					<a href={route.path} on:click={() => (open = false)}
						>{#each route.text as letter, j}<span class="letter" style="animation-delay: {j / 20}s;"
								>{letter}</span
							>{/each}</a
					>
				</div>
			</li>
		{/each}
		<li class="image" in:fly={{ duration: 300, x: 200, delay: 200 }}>
			<a href="https://github.com/TracerBuilt"><img src="/icons/github.svg" alt="Github" /></a>
		</li>
		<li class="image" in:fly={{ duration: 300, x: 200, delay: 300 }}>
			<a href="https://linkedin.com/in/TracerBuilt"
				><img src="/icons/linkedin.svg" alt="Linkedin" /></a
			>
		</li>
		<li class="image" in:fly={{ duration: 300, x: 200, delay: 400 }}>
			<a href="https://twitter.com/Tracer_Built"><img src="/icons/twitter.svg" alt="Twitter" /></a>
		</li>
	</ul>
{/if}

<style lang="scss">
	ul {
		padding-right: var(--space--4);
		margin: 0;
		list-style: none;
		text-align: right;
	}

	li {
		line-height: var(--space-0);
	}

	li:first-of-type {
		margin-top: 0;
	}

	a {
		font-family: var(--sans);
		font-weight: 300;
	}

	@media (min-width: 960px) {
		ul {
			display: flex;
			align-items: baseline;
			gap: var(--space-0);
		}

		.image a {
			display: inline-block;
		}
	}

	.letter {
		position: relative;
		animation-timing-function: ease;
	}

	.hover-wrapper {
		display: inline-block;
		&:hover {
			a {
				color: var(--blue-600);
			}

			.letter {
				animation: bounce 0.3s forwards;
			}
		}
	}
	a {
		color: var(--text);
		font-size: var(--step-1);
		text-decoration: none;
		transition: all 0.5s ease;
	}

	img {
		width: var(--step-1);
		height: var(--step-1);
		transition: 0.1s ease-in-out;

		&:hover {
			animation: wiggle 0.5s 1;
			transform: scale(1.1);
		}
	}

	.overlay {
		z-index: 10;
		position: absolute;
		inset: 0;
		height: 100vh;
		backdrop-filter: blur(10px);
		background-color: hsl(208 92% 5% / 25%);
	}

	.sidebar {
		z-index: 20;
		position: absolute;
		inset: 0 0 0 auto;
		padding-top: var(--space-4);
		width: 33%;
		height: 100vh;
		background-color: var(--background);
		text-align: right;

		&.open {
			ul {
				padding: 0;
			}

			a {
				font-size: var(--step-3);
			}

			li {
				margin: var(--space--2);
				line-height: var(--space-1);
			}

			img {
				width: var(--step-2);
				height: var(--step-2);
			}

			.image {
				margin: var(--space--6) var(--space--2);
			}
		}
	}

	@keyframes wiggle {
		0% {
			transform: rotate(0deg) scale(1.1);
		}
		33% {
			transform: rotate(5deg) scale(1.1);
		}
		66% {
			transform: rotate(-5deg) scale(1.1);
		}
		100% {
			transform: rotate(0deg) scale(1.1);
		}
	}

	@keyframes bounce {
		0% {
			bottom: 0;
		}
		30% {
			bottom: 0.15em;
		}
		100% {
			bottom: 0;
		}
	}
</style>
