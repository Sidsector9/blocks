const path = require('path');

module.exports = {
	entry: './app/blocks/js/_index.jsx',
	output: {
		path: path.resolve( __dirname, 'dist' ),
		filename: 'js/newsuk-blocks.min.js'
	}
};