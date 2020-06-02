import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import { attributes } from './attributes';
import { edit } from './edit';
import './index.scss';

registerBlockType(
	'nuk/int-people-card',
	{
		title: __( '_People Card', 'nuk-blocks' ),
		category: 'nuk',
		attributes,
		edit,
		save: () => null,
	}
);