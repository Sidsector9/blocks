import { InnerBlocks } from '@wordpress/block-editor';

export const save = ( props ) => {
	return (
		<div>
			<div className="nuk-banner__text-wrapper">
				<InnerBlocks.Content />
			</div>
		</div>
	);
};