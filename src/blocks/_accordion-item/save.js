import { RichText, InnerBlocks } from '@wordpress/block-editor';

export const save = ( props ) => {

	const {
		attributes: {
			heading,
		}
	} = props;

	return (
		<div>
			<div className="nuk-acc-item__wrapper">
				<div className="nuk-acc-item__title">
					<RichText.Content value={ heading } />
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
};