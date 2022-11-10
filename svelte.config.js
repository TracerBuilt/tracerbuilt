import preprocess from 'svelte-preprocess'
import netlify from '@sveltejs/adapter-netlify'
import { mdsvex } from 'mdsvex'
import mdsvexConfig from './mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [
		mdsvex(mdsvexConfig),
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: netlify(),
		csp: {
			directives: {
				'script-src': ['strict-dynamic', 'unsafe-inline', 'https:'],
				'object-src': ['none'],
				'base-uri': ['self']
			}
		}
	}
}

export default config
