import {
	InnerBlocks
} from '@wordpress/block-editor';

export const save = ( props ) => {
	const {
		attributes: {
			backgroundColor,
		},
	} = props;

	const STYLE_ROW = {
		backgroundColor,
	}

	return (
		<div style={ STYLE_ROW }>
			<div className="nuk-row__wrapper">
				<InnerBlocks.Content />
			</div>
		</div>
	);
};
