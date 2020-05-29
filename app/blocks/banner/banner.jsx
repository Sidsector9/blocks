const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

registerBlockType( 'newsuk/banner-left', {
	title: __( 'Banner - Left aligned', 'newsuk-block' ),
	category: 'newsuk',
	supports: {
		align: ['full'],
	},
	edit: function( props ) {
		return <h1>Hello</h1>
	},
	save: function( props ) {
		return <h1>Hello</h1>
	},
} );