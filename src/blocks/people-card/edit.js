import {
	RichText, InnerBlocks,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const TEMPLATE = [
	[ 'nuk/int-block-title', { textAlign: 'center', fontSize: 36 } ],
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

	const STY_PC_WR = {
		paddingTop,
		paddingBottom,
		backgroundColor,
	}

	const STYLE_PC = {
		maxWidth,
		marginLeft: 'auto',
		marginRight: 'auto',
	};

	return (
		<div style={ STY_PC_WR }>
			<div style={ STYLE_PC }>
				<InnerBlocks
					template={ TEMPLATE }
					templateLock="insert"
				/>
			</div>
		</div>
	);
};