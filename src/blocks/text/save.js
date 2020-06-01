import {
	RichText
} from '@wordpress/block-editor';

export const save = ( props ) => {
	const {
		attributes: {
			text,
			textAlign,
			fontSize,
			maxWidth,
		},
	} = props;

	const STYLE_TEXT = {
		textAlign,
		fontSize,
		maxWidth,
		marginLeft: 'auto',
		marginRight: 'auto',
	}

	return (
		<div style={ STYLE_TEXT }>
			<RichText.Content
				tagName="div"
				value={ text }
			/>
		</div>
	);
};