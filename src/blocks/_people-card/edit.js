import {
	RichText,
} from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export const edit = ( props ) => {
	const {
		attributes: {
			name,
			info,
			description,
			backgroundColor,
		},
		setAttributes,
	} = props;

	const STYLE_PC = {
		backgroundColor,
	};

	return (
		<div style={ STYLE_PC } className="wp-block-nuk-int-people-card--editor">
			<RichText
				inlineToolbar
				className="nuk-pc__name"
				placeholder={ __( 'John Doe', 'nuk-blocks' ) }
				value={ name }
				onChange={ ( name ) => setAttributes( { name } ) }
			/>
			<RichText
				inlineToolbar
				className="nuk-pc__info"
				placeholder={ __( 'London, UK', 'nuk-blocks' ) }
				value={ info }
				onChange={ ( info ) => setAttributes( { info } ) }
			/>
			<RichText
				inlineToolbar
				className="nuk-pc__description"
				placeholder={ __( 'Description...', 'nuk-blocks' ) }
				value={ description }
				onChange={ ( description ) => setAttributes( { description } ) }
			/>
		</div>
	);
};