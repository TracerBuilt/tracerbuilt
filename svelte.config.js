import preprocess from 'svelte-preprocess'
import netlify from '@sveltejs/adapter-netlify'
import { mdsvex } from 'mdsvex'
import mdsvexConfig from './mdsvex.config.js'
import wasmPack from 'vite-plugin-wasm-pack'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [
		mdsvex(mdsvexConfig),
		preprocess({
			postcss: true,
			scss: true
		})
	],

	kit: {
		adapter: netlify(),
		vite: {}
	}
}

export default config
