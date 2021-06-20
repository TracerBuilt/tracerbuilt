const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const customProperties = require('postcss-custom-properties')
const fontMagician = require('postcss-font-magician')
const nesting = require('postcss-nesting')
const normalize = require('postcss-normalize')
const presetEnv = require('postcss-preset-env')
const stylelint = require('stylelint')

const mode = process.env.NODE_ENV
const dev = mode === 'development'

const config = {
	plugins: [
		stylelint(),
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
