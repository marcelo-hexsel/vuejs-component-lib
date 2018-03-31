var path = require("path")
var utils = require("./utils")
var webpack = require("webpack")
var config = require("../config")
var merge = require("webpack-merge")
var baseWebpackConfig = require("./webpack.base.conf")
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var UglifyJSPlugin = require("uglifyjs-webpack-plugin")

var env = config.lib.env

baseWebpackConfig.entry = {}
baseWebpackConfig.entry[config.lib.libName] = "./src/lib.js"

var webpackConfig = merge(baseWebpackConfig, {
	module: {
		rules: utils.styleLoaders({
			sourceMap: config.lib.productionSourceMap,
			extract: true
		})
	},
	devtool: config.lib.productionSourceMap ? "#source-map" : false,
	output: {
		path: config.lib.assetsRoot,
		filename: utils.assetsLibPath(config.lib.libName + ".min.js"),
		library: config.lib.libName,
		libraryTarget: "umd"
	},
	plugins: [
		// http://vuejs.github.io/vue-loader/en/workflow/production.html
		new webpack.DefinePlugin({
			"process.env": env
		}),
		// keep module.id stable when vendor modules does not change
		new webpack.HashedModuleIdsPlugin(),
		// enable scope hoisting
		new webpack.optimize.ModuleConcatenationPlugin(),
		// split vendor js into its own file
		new UglifyJSPlugin({
			sourceMap: true,
			uglifyOptions: {
				compress: true
			}
		}),
		// extract css into its own file
		new ExtractTextPlugin({
			filename: utils.assetsLibPath(config.lib.libName + ".min.css")
		})
	]
})

if (config.lib.productionGzip) {
	var CompressionWebpackPlugin = require("compression-webpack-plugin")

	webpackConfig.plugins.push(
		new CompressionWebpackPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: new RegExp("\\.(" + config.lib.productionGzipExtensions.join("|") + ")$"),
			threshold: 10240,
			minRatio: 0.8
		})
	)
}

module.exports = webpackConfig
