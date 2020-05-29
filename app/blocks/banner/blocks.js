const { __ } = wp.i18n;

export const block = {
	title: __( 'Banner - Left aligned', 'newsuk-block' ),
	category: 'newsuk',
	supports: {
		align: ['full'],
	},
	attributes,
	edit,
	save,
}