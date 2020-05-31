import {
	InnerBlocks,
} from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';
import { auto } from 'async';

const ALLOWED_BLOCKS = [ 'nuk/int-accordion-item' ];
const TEMPLATE = [
	[ 'nuk/int-accordion-item' ]
];

export const edit = ( props ) => {

	const {
		attributes: {
			maxWidth
		}
	} = props;

	const STYLE_ACC = {
		maxWidth,
		marginLeft: 'auto',
		marginRight: 'auto',
	};

	return (
		<div style={ STYLE_ACC } className="wp-block-nuk-accordion--editor">
			<InnerBlocks
				allowedBlocks={ ALLOWED_BLOCKS }
				template={ TEMPLATE }
				renderAppender={ () => (
					<InnerBlocks.ButtonBlockAppender />
				) }
			/>
		</div>
	);
};