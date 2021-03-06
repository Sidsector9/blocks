import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import { attributes } from './attributes';
import { edit } from './edit';
import { save } from './save';
import './index.scss';

registerBlockType(
	'nuk/int-accordion-item',
	{
		title: __( '_Accordion Item', 'nuk-blocks' ),
		category: 'nuk',
		attributes,
		edit,
		save,
	}
);