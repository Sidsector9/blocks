import { RichText, InnerBlocks } from '@wordpress/block-editor';

export const save = ( props ) => {

	const {
		attributes: {
			heading,
		}
	} = props;

	return (
		<InnerBlocks.Content />
	);
};