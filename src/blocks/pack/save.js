import { InnerBlocks } from '@wordpress/block-editor';

export const save = ( props ) => {

	const {
		attributes: {
			title,
			description,
			price,
			frequency,
			cta,
			packType,
			entitlements,
		},
	} = props;

	return (
		<div className={ `wp-block-nuk-pack--editor wp-block-nuk-pack--editor--${ packType }` }>
			<div className="nuk-pack__intro">
				
			</div>
		</div>
	);
};