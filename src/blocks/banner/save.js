import { InnerBlocks } from '@wordpress/block-editor';

export const save = ( props ) => {
	const {
		attributes: {
			text
		},
	} = props;

	return (
		<div>
			<div className="nuk-banner__text-wrapper">
				<InnerBlocks.Content />
			</div>
		</div>
	);
};