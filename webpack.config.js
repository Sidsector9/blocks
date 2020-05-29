const path = require( 'path' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

module.exports = {
	entry: {
		'newsuk-banner-block' : './app/blocks/banner/banner.jsx',
	},
	output: {
		path: path.resolve( __dirname, 'dist' ),
		filename: 'js/[name].min.js',
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
				test: /\.(scss|sass|css)$/i,
				use: [
					// 'style-loader',
					{
						loader: MiniCssExtractPlugin.loader
					},
					'css-loader',
					'resolve-url-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						}
					},
					// {
					// 	loader: 'sass-resources-loader',
					// 	options: {
					// 		sourceMap: true,
					// 		resources: [ './app/blocks/_essentials/_essentials.scss' ],
					// 	}
					// },
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: 'fonts/[name].[ext]',
						},
					}
				],
			},
		]
	},
	plugins: [
		new MiniCssExtractPlugin( {
			filename: 'css/[name].min.css',
		} )
	]
};