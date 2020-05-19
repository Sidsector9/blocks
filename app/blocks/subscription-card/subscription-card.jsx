const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

import { attributes } from './attributes';
import { edit } from './edit.jsx';
import { save } from './save.jsx';

registerBlockType(
	'newsuk/subscription-card',
	{
		title: __( 'Subscription Card', 'newsuk-blocks' ),
		category: 'newsuk',
		supports: {
			align: ['full'],
		},
		attributes,
		edit,
		save,
	},
);
