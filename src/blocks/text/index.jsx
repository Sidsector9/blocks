import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import { edit } from './edit';
import { save } from './save';

const supports = {
	align: [ 'wide', 'full' ]
};

registerBlockType(
	'nuk/text',
	{
		title: __( 'Text', 'nuk-blocks' ),
		category: 'nuk',
		supports,
		edit,
		save,
	}
);