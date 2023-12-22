import base from '@arbendium/eslint-config';
import globals from 'globals';

export default [
	...base,
	{
		files: ['eslint.config.js'],
		rules: {
			'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
		}
	},
	{
		files: ['rollup.config.js', 'components/**'],
		rules: {
			camelcase: 'off',
			'import/prefer-default-export': 'off',
			'max-len': 'off',
			'no-multi-assign': 'off',
			'no-nested-ternary': 'off',
			'no-underscore-dangle': 'off',
			'no-unused-expressions': 'off',
			'react/button-has-type': 'off',
			'react/jsx-props-no-spreading': 'off'
		},
		languageOptions: {
			globals: globals.browser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				}
			}
		}
	}
];
