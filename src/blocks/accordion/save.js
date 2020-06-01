import { RichText, InnerBlocks } from '@wordpress/block-editor';

export const save = ( props ) => {

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
		<div style={ STYLE_ACC }>
			<InnerBlocks.Content />
		</div>
	);
};