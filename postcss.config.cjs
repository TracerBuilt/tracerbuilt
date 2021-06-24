const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const customProperties = require('postcss-custom-properties')
const nesting = require('postcss-nesting')
const normalize = require('postcss-normalize')

const stylelint = require('stylelint')

const mode = process.env.NODE_ENV
const dev = mode === 'development'

const config = {
	plugins: [
		stylelint(),
		normalize(),
		customProperties(),
		nesting(),
		autoprefixer(),

		!dev &&
			cssnano({
				preset: 'default'
			})
	]
}

module.exports = config
