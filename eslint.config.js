import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import svelte from 'eslint-plugin-svelte'
import globals from 'globals'
import ts from 'typescript-eslint'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs['flat/recommended'],
	{
		plugins: {
			'simple-import-sort': simpleImportSort
		},
		rules: {
			'simple-import-sort/imports': [
				'error',
				{
					groups: [
						// Svelte type imports.
						['^svelte(.*)\\u0000$'],
						// SvelteKit type imports.
						['^(.*)\\$(.*)\\u0000$'],
						// Other type imports.
						['^(.*)\\u0000$'],
						// Node.js builtins prefixed with `node:`.
						['^node:'],
						// Svelte imports.
						['^svelte(.*)$'],
						// SvelteKit imports.
						['^(.*)\\$(.*)$'],
						// Side effect imports.
						['^\\u0000'],
						// Packages.
						// Things that start with a letter (or digit or underscore), or `@` followed by a letter.
						['^@?\\w'],
						// Absolute imports and other imports such as Vue-style `@/foo`.
						// Anything not matched in another group.
						['^'],
						// Relative imports.
						// Anything that starts with a dot.
						['^\\.']
					]
				}
			],
			'simple-import-sort/exports': 'error'
		}
	},
	prettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: ts.parser
			}
		}
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/']
	}
]
