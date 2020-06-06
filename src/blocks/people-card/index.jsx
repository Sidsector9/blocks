import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import { attributes } from './attributes';
import { edit } from './edit';
import { save } from './save';
import './index.scss';

const supports = {
	align: [ 'wide', 'full' ]
};

registerBlockType(
	'nuk/people-card',
	{
		title: __( 'People Card', 'nuk-blocks' ),
		category: 'nuk',
		supports,
		attributes,
		edit,
		save,
	}
);