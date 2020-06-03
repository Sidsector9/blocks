import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import { attributes } from './attributes';
import { edit } from './edit';
import { save } from './save';
import './index.scss';

registerBlockType(
	'nuk/int-block-title',
	{
		title: __( '_Block Title', 'nuk-blocks' ),
		category: 'nuk',
		attributes,
		edit,
		save: () => null,
	}
);