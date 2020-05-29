import { InnerBlocks } from '@wordpress/block-editor';

export const save = ( props ) => {
	const {
		attributes: {
			text
		},
	} = props;

	return (
		<InnerBlocks.Content />
	);
};