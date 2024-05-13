import adapter from '@sveltejs/adapter-cloudflare'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { mdsvex } from 'mdsvex'
import mdsvexConfig from './mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config}*/
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	preprocess: [ mdsvex(mdsvexConfig), vitePreprocess() ],

	kit: {
		adapter: adapter()
	}
}
export default config
