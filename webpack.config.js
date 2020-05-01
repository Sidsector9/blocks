const path = require('path');

module.exports = {
	entry: './app/blocks/_index.jsx',
	output: {
		path: path.resolve( __dirname, 'dist' ),
		filename: 'js/newsuk-blocks.min.js'
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				]
			}
		]
	}
};