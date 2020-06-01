import {
	InnerBlocks,
	ColorPalette,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export const edit = ( props ) => {
	const {
		attributes: {
			backgroundColor,
		},
		setAttributes,
	} = props;

	const STYLE_ROW = {
		backgroundColor,
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={  __( 'Colors', 'nuk-blocks' ) }>
					<p>{ __( 'Background color:', 'nuk-blocks' ) }</p>
					<ColorPalette
						disableCustomColors={ false }
						clearable={ true }
						onChange={ ( backgroundColor ) => setAttributes( {
							backgroundColor,
						} ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div className="wp-block-nuk-row--editor" style={ STYLE_ROW }>
				<div className="nuk-row__wrapper">
					<InnerBlocks
						renderAppender={ () => <InnerBlocks.ButtonBlockAppender /> }
					/>
				</div>
			</div>
		</>
	);
};
