import { RichText } from '@wordpress/block-editor';

export const save = ( props ) => {
	const {
		attributes: {
			text
		},
	} = props;

	return (
		<RichText.Content />
	);
};