var path = require("path")

module.exports = {
	lib: {
		env: "production",
		libName: "vuejs-component-lib",
		assetsRoot: path.resolve(__dirname, "../dist"),
		assetsSubDirectory: "lib",
		assetsPublicPath: "/",
		productionSourceMap: true,
		productionGzip: false,
		productionGzipExtensions: ["js", "css"]
	}
}
