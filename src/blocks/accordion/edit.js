import {
	InnerBlocks,
} from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';
import { auto } from 'async';

const ALLOWED_BLOCKS = [ 'nuk/int-accordion-item' ];
const TEMPLATE = [
	[ 'nuk/int-block-title', { textAlign: 'center', fontSize: 36 } ],
	[ 'nuk/int-accordion-item' ]
];

export const edit = ( props ) => {

	const {
		attributes: {
			maxWidth,
			paddingTop,
			paddingBottom,
			backgroundColor,
		}
	} = props;

	const STY_ACC_WR = {
		paddingTop,
		paddingBottom,
		backgroundColor,
	}

	const STYLE_ACC = {
		maxWidth,
		marginLeft: 'auto',
		marginRight: 'auto',
	};

	return (
		<div style={ STY_ACC_WR } className="wp-block-nuk-accordion--editor">
			<div style={ STYLE_ACC }>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					template={ TEMPLATE }
					renderAppender={ () => (
						<InnerBlocks.ButtonBlockAppender />
					) }
				/>
			</div>
		</div>
	);
};