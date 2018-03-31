module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true
	},
	extends: ["plugin:vue/essential"],
	parserOptions: {
		parser: "babel-eslint",
		ecmaFeatures: {
			experimentalObjectRestSpread: true
		},
		sourceType: "module"
	},
	plugins: ["vue"],
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "never"],
		"linebreak-style": 0
	}
}
