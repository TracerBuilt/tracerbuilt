<script lang="ts" context="module">
	const getPosts = import.meta.glob('../*.svx')
	let body = []

	for (const path in getPosts) {
		const post = getPosts[path]().then(({ metadata }) => {
			return { ...metadata, slug: path.replace('.svx', '') }
		})
		body.push(post)
	}

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params }) {
		const allPosts = await Promise.all(body)
		const posts = allPosts.filter((post) => post.tags.includes(params.slug))

		return {
			props: {
				posts,
				tag: params.slug
			}
		}
	}
</script>

<script lang="ts">
	export let posts
	export let tag
</script>

<div class="main">
	<h1><strong>{tag}</strong> posts</h1>

	<ul>
		{#each posts as { title, tags, outline, slug }}
			<li>{title}</li>
		{/each}
	</ul>
</div>

<style lang="scss">
</style>
