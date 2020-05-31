import { RichText, InnerBlocks } from '@wordpress/block-editor';

export const save = ( props ) => {
	return (
		<div>
			<InnerBlocks.Content />
		</div>
	);
};