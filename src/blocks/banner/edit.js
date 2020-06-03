import {
	InspectorControls,
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
	RangeControl,
} from '@wordpress/components';

import { __ } from '@wordpress/i18n';

const TEMPLATE = [
	[ 'nuk/int-block-title', { fontSize: 48, color: '#fff' } ],
	[ 'nuk/int-block-title', { fontSize: 32, color: '#fff' } ],
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
			isBgSelected,
			layout,
			backgroundColor,
			bgImageUrl,
			bgType,
			focalPoint,
			textWrapperWidth,
			textWrapperAlign,
		},
		setAttributes,
	} = props;

	const STYLE_BANNER = {
		backgroundColor,
		backgroundImage: `url( ${ bgImageUrl } )`,
		minHeight: isBgSelected ? '400px' : undefined,
		backgroundPosition: Object.values( focalPoint ).map( ( val ) => `${ val * 100 }%` ).join( ' ' ),
	}
	
	const STYLE_TXT_OUT_WR = {
		justifyContent: textWrapperAlign,
	};

	const STYLE_TXT_INN_WR = {
		width: `${ textWrapperWidth }%`,
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Banner settings', 'nuk-blocks' ) }>
					<p>{ __( 'Container width', 'nuk-blocks' ) }</p>
					<RadioControl
						selected={ layout }
						options={ [
							{ label: 'Fluid', value: 'nuk-is-fluid' },
							{ label: 'Fit container (1180px)', value: 'nuk-fit-container' },
							{ label: 'Medium (780px)', value: 'nuk-is-medium' },
						] }
						onChange={ ( layout ) => { setAttributes( { layout } ) } }
					/>

					<p>{ __( 'Text wrapper width', 'nuk-blocks' ) }</p>
					<RangeControl
						min={ 0 }
						max={ 100 }
						value={ textWrapperWidth }
						onChange={ ( textWrapperWidth ) => setAttributes( { textWrapperWidth } ) }
					/>

					<p>{ __( 'Text wrapper align', 'nuk-blocks' ) }</p>
					<RadioControl
						selected={ textWrapperAlign }
						options={ [
							{ label: 'Left', value: 'flex-start' },
							{ label: 'Center', value: 'center' },
							{ label: 'Right', value: 'flex-end' },
						] }
						onChange={ ( textWrapperAlign ) => { setAttributes( { textWrapperAlign } ) } }
					/>

					{
						'solid' === bgType && ( <>
							<p>{ __( 'Background color', 'nuk-blocks' ) }</p>
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
						</> )
					}

					{
						'image' === bgType && ( <>
							<p>{ __( 'Background image', 'nuk-blocks' ) }</p>
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
						</> )
					}
				</PanelBody>
			</InspectorControls>

			<div className="wp-block-nuk-banner--editor">
				{ ! isBgSelected ? ( <MediaPlaceholder
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
				</MediaPlaceholder> ) : (
					<div style={ STYLE_BANNER } className={ `nuk-banner__wrapper ${ layout }` }>
						<div style={ STYLE_TXT_OUT_WR } className="nuk-banner__text-wrapper">
							<div style={ STYLE_TXT_INN_WR }>
								<InnerBlocks
									templateLock="insert"
									template={ TEMPLATE }
								/>
							</div>
						</div>
					</div>
				) }
			</div>
		</>
	);
};
