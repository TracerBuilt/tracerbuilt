import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`../posts/${params.slug}.md`)

		return {
			Content: post.default,
			meta: { ...post.metadata, slug: params.slug }
		}
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
}
