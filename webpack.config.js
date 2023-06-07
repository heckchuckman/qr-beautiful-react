const path = require("path")
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
	entry: "./src/index.ts",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js",
		libraryTarget: "umd",
		library: "react-qrbtf",
		umdNamedDefine: true,
		clean: true,
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},
	// plugins: [new CleanWebpackPlugin()],
	optimization: {
		minimizer: [
			new TerserPlugin({
				test: /\.js$/,
			}),
		],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	externals: {
		react: "react",
		"react-dom": "react-dom",
	},
}
