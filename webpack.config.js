const path = require( 'path' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

module.exports = {
	entry: {
		'newsuk-blocks' : './app/blocks/_index.jsx',
	},
	output: {
		path: path.resolve( __dirname, 'dist' ),
		filename: 'js/[name].min.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// 'style-loader',
					{
						loader: MiniCssExtractPlugin.loader
					},
					'css-loader',
					'sass-loader',
					{
						loader: 'sass-resources-loader',
						options: {
							resources: [ './app/blocks/_essentials/_essentials.scss' ],
						}
					}
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin( {
			filename: 'css/[name].min.css',
		} )
	]
};