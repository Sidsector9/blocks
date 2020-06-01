import {
	RichText,
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export const edit = ( props ) => {
	const {
		attributes: {
			text,
			textAlign,
			fontSize,
			maxWidth,
		},
		setAttributes,
	} = props;

	const STYLE_TEXT = {
		textAlign,
		fontSize,
		maxWidth,
		marginLeft: 'auto',
		marginRight: 'auto',
	}

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={ textAlign }
					onChange={ ( textAlign ) => setAttributes( { textAlign } ) }
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody>
					<p>{ __( 'Font size:', 'nuk-blocks' ) }</p>
					<RangeControl
						min={ 8 }
						max={ 96 }
						step={ 4 }
						value={ fontSize }
						onChange={ ( fontSize ) => setAttributes( { fontSize } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div style={ STYLE_TEXT } className="wp-block-nuk-int-block-title--editor">
				<RichText
					placeholder={ __( 'Add a title', 'nuk-blocks' ) }
					value={ text }
					onChange={ ( text ) => setAttributes( { text } ) }
				/>
			</div>
		</>
	);
};