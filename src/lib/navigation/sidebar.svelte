<script lang="ts">
	import { fly, fade } from 'svelte/transition'

	export let open = false
	let windowWidth: number

	const routes = [{ path: '/blog', text: 'Blog' }]

	$: if (windowWidth >= 960) {
		open = false
	}
</script>

<svelte:window bind:innerWidth={windowWidth} />
{#if open || windowWidth >= 960}
	{#if windowWidth < 960}
		<div class="overlay" transition:fade={{ duration: 300 }} />
		<div class="sidebar" class:open transition:fly={{ duration: 300, x: 700, opacity: 0.5 }}>
			<ul>
				<li in:fly={{ duration: 300, x: 200, delay: 100 }}>
					<div class="hover-wrapper">
						<a href="/blog" on:click={() => (open = false)}
							>{#each 'Blog' as letter, j}<span class="letter" style="animation-delay: {j / 20}s;"
									>{letter}</span
								>{/each}</a
						>
					</div>
				</li>
				<li class="image" in:fly={{ duration: 300, x: 200, delay: 200 }}>
					<a href="https://github.com/TracerBuilt"><img src="/icons/github.svg" alt="Github" /></a>
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
		</div>
	{:else}
		<div class="sidebar" class:open in:fly={{ duration: 300, x: -700, opacity: 1 }}>
			<ul>
				<li in:fly={{ duration: 300, x: -200, delay: 100 }}>
					<div class="hover-wrapper">
						<a href="/blog" on:click={() => (open = false)}
							>{#each 'Blog' as letter, j}<span class="letter" style="animation-delay: {j / 20}s;"
									>{letter}</span
								>{/each}</a
						>
					</div>
				</li>
				<li class="image" in:fly={{ duration: 300, x: -200, delay: 200 }}>
					<a href="https://github.com/TracerBuilt"><img src="/icons/github.svg" alt="Github" /></a>
				</li>
				<li class="image" in:fly={{ duration: 300, x: -200, delay: 300 }}>
					<a href="https://linkedin.com/in/TracerBuilt"
						><img src="/icons/linkedin.svg" alt="Linkedin" /></a
					>
				</li>
				<li class="image" in:fly={{ duration: 300, x: -200, delay: 400 }}>
					<a href="https://twitter.com/Tracer_Built"
						><img src="/icons/twitter.svg" alt="Twitter" /></a
					>
				</li>
			</ul>
		</div>
	{/if}
{/if}

<style lang="scss">
	ul {
		padding-right: var(--space--4);
		margin: 0;
		list-style: none;
		text-align: right;
	}

	li {
		margin: var(--space--6) 0;
		line-height: var(--space-0);
	}

	li:first-of-type {
		margin-top: 0;
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
		font-size: var(--step-2);
		text-decoration: none;
		transition: all 0.5s ease;
	}

	.image {
		margin: var(--space--4) 0;
	}

	img {
		width: var(--space-0);
		height: var(--space-0);
		transition: 0.1s ease-in-out;

		&:hover {
			animation: wiggle 0.5s 1;
			transform: scale(1.1);
		}
	}

	.overlay {
		z-index: 10;
		display: grid;
		background: hsl(208 92% 5% / 50%);
		grid-column: 1 / span 7;
		grid-row: 2 / span 2;
	}

	.sidebar {
		z-index: 20;
		background-color: var(--background);
		grid-column: 4 / span 4;
		grid-row: 2 / span 2;
		text-align: right;

		&.open {
			ul {
				padding: 0 ;
			}

			a {
				font-size: var(--step-4);
			}

			li {
				margin: var(--space--2) var(--space-5);
				line-height: var(--space-1);
			}

			li:first-of-type {
				margin-top: 0;
			}

			img {
				width: var(--space-1);
				height: var(--space-1);
			}
		}

		@media (min-width: 960px) {
			grid-column: 1 / span 1;
			background: none;

			ul {
				margin-top: var(--space-0);
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
