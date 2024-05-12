import type { LayoutLoad } from './$types'

const url = 'https://api.github.com/repos/TracerBuilt/tracerbuilt'

export const prerender = true

export const load: LayoutLoad = ({ params }) => {
	return fetch(url, { headers: { 'Content-Type': 'application/json' } })
		.then((res) => res.json())
		.then((data) => {
			return {
				stars: data.stargazers_count,
				forks: data.forks_count
			}
		})
}
