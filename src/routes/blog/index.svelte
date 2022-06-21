<script lang="ts" context="module">
	const getPosts = import.meta.glob('./*.svx')
	let body = []
	for (const path in getPosts) {
		const post = getPosts[path]().then(({ metadata }) => {
			return { ...metadata, slug: path.replace('.svx', '') }
		})
		body.push(post)
	}

	export async function load() {
		const posts = await Promise.all(body)
		return {
			props: {
				posts
			}
		}
	}
</script>

<script>
	export let posts
</script>

<main>
	<h1 style:margin-top="0">Blog</h1>
	<ul class="post-list">
		{#each posts as { title, date, tags, outline, slug }}
			<li class="post-wrapper">
				<div class="post">
					<a rel="prefetch" href="blog/{slug}">
						<h2>
							{title}
						</h2>

						<p>
							{outline}
						</p>
					</a>
					<div class="tags">
						{#if tags}
							{#each tags as tag, i}
								{tag}{#if i < tags.length - 1}<span>, </span>{/if}
							{/each}
						{/if}
					</div>
				</div>
			</li>
		{/each}
	</ul>
</main>

<style lang="scss">
	main {
		grid-column: 1 / span 7;
		grid-row: 2 / span 2;

		p {
			max-width: 60ch;
			white-space: wrap;
		}
	}

	.post {
		min-height: 10rem;
		padding: 0.5rem;
		background: var(--white);
		border-radius: 0.4rem;
	}

	.post-wrapper {
		padding: 0.1rem;
		margin: 1rem 0;
		background: linear-gradient(
			19deg,
			var(--blue-600),
			var(--blue-500),
			var(--blue-400),
			var(--blue-300),
			var(--blue-200),
			var(--blue-100),
			var(--blue-transparent) 50%
		);
		border-radius: 0.5rem;
		box-shadow: -0.2rem 0.4rem 0.5rem var(--blue-shadow);
	}

	ul {
		padding: 0;
		list-style: none;
	}

	a {
		color: var(--text);
		text-decoration: none;

		&:hover {
			color: var(--blue-600);
		}
	}
</style>
