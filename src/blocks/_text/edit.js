import {
	RichText,
} from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';

export const edit = ( props ) => {

	const {
		attributes: {
			text,
		},
		setAttributes,
	} = props;

	return (
		<RichText
			value={ text }
			onChange={ ( text ) => setAttributes( text ) }
			placeholder={ __( 'Add text...', 'nuk-blocks' ) }
		/>
	);
};