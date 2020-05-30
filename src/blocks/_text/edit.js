import {
	RichText,
	InspectorControls,
} from '@wordpress/block-editor';

import {
	RangeControl,
	PanelBody
} from '@wordpress/components';

import { __ } from '@wordpress/i18n';

export const edit = ( props ) => {

	const {
		attributes: {
			text,
			fontSize,
			color,
		},
		setAttributes,
	} = props;

	const STYLE_INTTEXT = {
		fontSize: `${ fontSize }px`,
		color,
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Text Settings', 'nuk-blocks' ) }>
					<p>{ __( 'Font size:', 'nuk-blocks' ) }</p>
					<RangeControl
						min={ 8 }
						max={ 96 }
						step={ 8 }
						value={ fontSize }
						onChange={ ( fontSize ) => setAttributes( { fontSize } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<RichText
				value={ text }
				style={ STYLE_INTTEXT }
				onChange={ ( text ) => setAttributes( { text } ) }
				placeholder={ __( 'Add text...', 'nuk-blocks' ) }
			/>
		</>
	);
};