import type { LayoutLoad } from './$types'

import { error } from '@sveltejs/kit'

const url = 'https://api.github.com/repos/TracerBuilt/tracerbuilt'

export const prerender = true

export const load: LayoutLoad = async ({ fetch }) => {
	const data = await fetch(url, {
		headers: { 'Content-Type': 'application/json' }
	})
		.then((res) => res.json())
		.then((data) => {
			return {
				stars: data.stargazers_count,
				forks: data.forks_count
			}
		})

	if (!data) {
		error(404, 'Github could not be reached')
	}

	return data
}
