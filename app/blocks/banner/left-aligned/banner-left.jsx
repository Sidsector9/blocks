const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

import { attributes } from './attributes';
import { edit } from './edit.jsx';
import { save } from './save.jsx';
import './banner-left.scss';

registerBlockType( 'newsuk/banner-left', {
	title: __( 'Banner - Left aligned', 'newsuk-block' ),
	category: 'newsuk',
	supports: {
		align: ['full'],
	},
	attributes,
	edit,
	save,
} );
