module.exports = {
	extends: [
		'stylelint-config-standard-scss',
		'stylelint-config-css-modules',
		'stylelint-config-idiomatic-order',
		'stylelint-config-prettier'
	],
	plugins: ['stylelint-order'],
	overrides: [{ files: ['**/*.svelte'], customSyntax: 'postcss-html' }],
	rules: {
		'custom-property-pattern': null,
		'custom-property-empty-line-before': null,
		'scss/operator-no-newline-after': null,
		'length-zero-no-unit': null,
		'max-nesting-depth': 5,
		'order/properties-alphabetical-order': null,
		'selector-class-pattern': null,
		'selector-no-qualifying-type': null,
		'selector-max-id': null,
		'hue-degree-notation': null,
		'color-function-notation': null,
		'alpha-value-notation': null
	}
}
