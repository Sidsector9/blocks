import {
	InspectorControls,
	BlockControls,
	InnerBlocks,
	MediaPlaceholder,
	ColorPalette,
} from '@wordpress/block-editor';

import {
	PanelBody,
	PanelRow,
	Button,
	FocalPointPicker,
} from '@wordpress/components';

import { __ } from '@wordpress/i18n';

const TEMPLATE = [
	[ 'nuk/int-text' ],
	[ 'nuk/int-text' ],
];

export const edit = ( props ) => {

	const {
		attributes: {
			backgroundColor,
			isBgSelected,
			bgImageUrl,
			bgType,
			focalPoint,
		},
		setAttributes,
	} = props;

	const STYLE_BANNER = {
		backgroundColor,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundImage: `url( ${ bgImageUrl } )`,
		backgroundPosition: Object.values( focalPoint ).map( ( val ) => `${ val * 100 }%` ).join( ' ' ),
		minHeight: isBgSelected ? '400px' : undefined,
	};

	return (
		<>
			<InspectorControls>
				{ 'solid' === bgType && <PanelBody title={ __( 'Solid Background' ) }>
					<ColorPalette
						value={ backgroundColor }
						disableCustomColors={ true }
						clearable={ false }
						onChange={ ( backgroundColor ) => setAttributes( {
							backgroundColor,
							isBgSelected: true,
						} ) }
					/>
					<PanelRow>
						<Button
							isSecondary
							isSmall
							onClick={ () => setAttributes( {
								backgroundColor: undefined,
								bgImageUrl: undefined,
								isBgSelected: false,
								bgType: undefined,
							} ) }
						>
							{ __( 'Clear', 'nuk-blocks' ) }
						</Button>
					</PanelRow>
				</PanelBody> }

				{ 'image' === bgType && <PanelBody title={ __( 'Background Image Settings', 'nuk-blocks' ) }>
					<FocalPointPicker
						label={ __( 'Focal point picker', 'nuk-blocks' ) }
						url={ bgImageUrl }
						value={ focalPoint }
						onChange={ ( focalPoint ) => { setAttributes( { focalPoint } ) } }
					>
					</FocalPointPicker>

					<Button
						isSecondary
						isSmall
						onClick={ () => setAttributes( {
							backgroundColor: undefined,
							bgImageUrl: undefined,
							isBgSelected: false,
							bgType: undefined,
						} ) }
					>
						{ __( 'Clear', 'nuk-blocks' ) }
					</Button>
				</PanelBody> }
			</InspectorControls>

			<div style={ STYLE_BANNER } className="wp-block-nuk-banner--editor">
				{ isBgSelected && <div className="nuk-banner__text-wrapper">
					<InnerBlocks
						templateLock="insert"
						template={ TEMPLATE }
					/>
				</div> }
				{ ! isBgSelected && ( <>
					<MediaPlaceholder
						onSelect = { ( obj ) => setAttributes( {
							bgImageUrl: obj.url,
							isBgSelected: true,
							bgType: 'image',
						} ) }
						allowedTypes = { [ 'image' ] }
						multiple = { false }
						labels = { { title: __( 'The Image', 'nuk-blocks' ) } }
					>
					<ColorPalette
						disableCustomColors={ true }
						clearable={ false }
						onChange={ ( backgroundColor ) => setAttributes( {
							backgroundColor,
							isBgSelected: true,
							bgType: 'solid',
						} ) }
					/>
					</MediaPlaceholder>
				</> ) }
			</div>
		</>
	);
};