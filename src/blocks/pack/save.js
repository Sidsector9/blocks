import {
	InnerBlocks
} from '@wordpress/block-editor';

export const save = ( props ) => {

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
		<div style={ STY_ACC_WR }>
			<div style={ STYLE_ACC }>
				<InnerBlocks.Content />
			</div>
		</div>
	);
};