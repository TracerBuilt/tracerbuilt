<script lang="ts">
	import { fly } from 'svelte/transition'

	export let open = false
	let windowWidth: number

	const routes = [
		{ path: '/#about', text: 'About Me' },
		{ path: '/#projects', text: 'Projects' },
		{ path: '/blog', text: 'Blog' }
	]
</script>

<svelte:window bind:innerWidth={windowWidth} />
{#if open || windowWidth >= 960}
	<div class="sidebar" class:open transition:fly={{ duration: 300, x: -700, opacity: 1 }}>
		<ul>
			{#each routes as route, i}
				<li in:fly={{ duration: 300, x: -200, delay: (i + 1) * 100 }}>
					<a href={route.path} on:click={() => (open = false)}>{route.text}</a>
				</li>
			{/each}
			<li in:fly={{ duration: 300, x: -200, delay: 400 }}>
				<a href="https://github.com/TracerBuilt"><img src="/icons/github.svg" alt="Github" /></a>
			</li>
			<li in:fly={{ duration: 300, x: -200, delay: 500 }}>
				<a href="https://github.com/TracerBuilt"><img src="/icons/twitter.svg" alt="Twitter" /></a>
			</li>
			<li in:fly={{ duration: 300, x: -200, delay: 600 }}>
				<a href="https://github.com/TracerBuilt"><img src="/icons/linkedin.svg" alt="LinkedIn" /></a
				>
			</li>
		</ul>
	</div>
{/if}

<style lang="scss">
	.sidebar {
		background-color: var(--white);

		&.open {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;

			ul {
				text-align: left;
				padding: 0 0 0 var(--space--4);
			}
			a {
				font-size: var(--step-4);
			}
			li {
				margin: var(--space-0) 0;
			}
			img {
				width: 2rem;
			}
		}
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0 var(--space-2) 0 0;
		text-align: right;
	}

	li {
		margin: var(--space--4) 0;
	}

	a {
		text-decoration: none;
		color: var(--text);
		font-size: var(--step-0);
	}

	img {
		width: 1.5rem;
		height: auto;
	}
</style>
