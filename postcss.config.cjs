const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const presetEnv = require('postcss-preset-env')

const mode = process.env.NODE_ENV
const dev = mode === 'development'

const config = {
	plugins: [
		autoprefixer(),

		!dev &&
			cssnano({
				preset: 'default'
			}),
		!dev &&
			presetEnv({
				stage: 2
			})
	]
}

module.exports = config
