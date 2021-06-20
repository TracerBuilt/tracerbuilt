<script context="module">
	const posts = import.meta.glob('./*.svx')
	let body = []
	for (const path in posts) {
		const post = posts[path]().then(({ metadata }) => {
			return { ...metadata, slug: path.replace('.svx', '') }
		})
		body.push(post)
	}
	console.log(body)
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch }) {
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

<ul>
	{#each posts as { title, tags, outline, slug }}
		<li>
			<a rel="prefetch" href="blog/{slug}">
				<h2>
					{title}
				</h2>

				<p>
					{outline}
				</p>

				<p>
					Tags: {#each tags as tag}
						<span>{tag}</span>
					{/each}
				</p>
			</a>
		</li>
	{/each}
</ul>
