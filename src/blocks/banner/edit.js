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
	RadioControl,
} from '@wordpress/components';

import { __ } from '@wordpress/i18n';

const TEMPLATE = [
	[ 'nuk/int-text', { fontSize: 48, color: '#fff' } ],
	[ 'nuk/int-text', { fontSize: 32, color: '#fff' } ],
];

const computeBannerTextPosition = ( position ) => {
	switch( position ) {
		case '1':
			return {
				justifyContent: 'flex-start',
				alignItems: 'baseline',
				textAlign: 'left',
			}

		case '2':
			return {
				justifyContent: 'center',
				alignItems: 'baseline',
				textAlign: 'center',
			}

		case '3':
			return {
				justifyContent: 'flex-end',
				alignItems: 'baseline',
				textAlign: 'right',
			}

		case '4':
			return {
				justifyContent: 'flex-start',
				alignItems: 'center',
				textAlign: 'left',
			}

		case '5':
			return {
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'center',
			}

		case '6':
			return {
				justifyContent: 'flex-end',
				alignItems: 'center',
				textAlign: 'right',
			}

		case '7':
			return {
				justifyContent: 'flex-start',
				alignItems: 'flex-end',
				textAlign: 'left',
			}

		case '8':
			return {
				justifyContent: 'center',
				alignItems: 'flex-end',
				textAlign: 'center',
			}

		case '9':
			return {
				justifyContent: 'flex-end',
				alignItems: 'flex-end',
				textAlign: 'right',
			}
	}
}

export const edit = ( props ) => {

	const {
		attributes: {
			maxWidth,
			backgroundColor,
			isBgSelected,
			bgImageUrl,
			bgType,
			focalPoint,
			bannerTextPosition,
		},
		setAttributes,
	} = props;

	const STYLE_BANNER = {
		maxWidth,
		backgroundColor,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundImage: `url( ${ bgImageUrl } )`,
		backgroundPosition: Object.values( focalPoint ).map( ( val ) => `${ val * 100 }%` ).join( ' ' ),
		minHeight: isBgSelected ? '400px' : undefined,
		marginLeft: 'auto',
		marginRight: 'auto',
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

				<PanelBody>
					<p>{ __( 'Banner text position:', 'nuk-blocks' ) }</p>
					<RadioControl
						className="nuk-banner__text-position"
						selected={ bannerTextPosition }
						options={ [
							{ label: '', value: '1' },
							{ label: '', value: '2' },
							{ label: '', value: '3' },
							{ label: '', value: '4' },
							{ label: '', value: '5' },
							{ label: '', value: '6' },
							{ label: '', value: '7' },
							{ label: '', value: '8' },
							{ label: '', value: '9' },
						] }
						onChange={ ( value ) => { setAttributes( { bannerTextPosition: value } ) } }
					/>
				</PanelBody>
			</InspectorControls>

			<div style={ STYLE_BANNER } className="wp-block-nuk-banner--editor">
				{ isBgSelected && <div className="nuk-banner__text-wrapper" style={ computeBannerTextPosition( bannerTextPosition ) }>
					<div>
						<InnerBlocks
							templateLock="insert"
							template={ TEMPLATE }
						/>
					</div>
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
