module.exports = {
	env: {
		'browser': true,
		'commonjs': true,
		'es2020': true,
		'jest': true,
		'jquery': true,
	},
	extends: [
		'eslint:recommended',
		'plugin:jest/all',
	],
	plugins: [
		'jest',
	],
	parserOptions: {
		'ecmaVersion': 12
	},
	rules: {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	}
};
