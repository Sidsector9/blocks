const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

import { attributes } from './attributes';
import { edit } from './edit.jsx';
import { save } from './save.jsx';
import './title.scss';

registerBlockType( 'newsuk/title', {
	title: __( 'Title', 'newsuk-block' ),
	category: 'newsuk',
	supports: {
		align: ['full'],
	},
	attributes,
	edit,
	save,
} );
