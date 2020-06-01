import {
	RichText, InnerBlocks,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const TEMPLATE = [
	[ 'nuk/int-block-title' ],
	[ 'core/columns', {} ]
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

	const STY_PACK_WR = {
		paddingTop,
		paddingBottom,
		backgroundColor,
	}

	const STYLE_PACK = {
		maxWidth,
		marginLeft: 'auto',
		marginRight: 'auto',
	};

	return (
		<div style={ STY_PACK_WR }>
			<div style={ STYLE_PACK }>
				<InnerBlocks
					template={ TEMPLATE }
					templateLock="insert"
				/>
			</div>
		</div>
	);
};