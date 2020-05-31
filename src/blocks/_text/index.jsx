import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import { attributes } from './attributes';
import { edit } from './edit';
import { save } from './save';

registerBlockType(
	'nuk/int-text',
	{
		title: __( '_Text', 'nuk-blocks' ),
		category: 'nuk',
		attributes,
		edit,
		save,
	}
);