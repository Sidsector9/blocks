const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
const { Icon, PanelRow, PanelBody, ColorPicker } = wp.components;
const { __ } = wp.i18n;

export const edit = ( props ) => {
	const {
		attributes: {
			title,
			subTitle,
			marginBottom,
			imageUrl,
			overlay,
		},
		setAttributes,
		isSelected,
	} = props;

	const STYLE_BLA = {
		marginBottom: `${ marginBottom }px`,
		backgroundImage: `url(${ imageUrl })`,
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Banner settings', 'newsuk-blocks' ) }>
					<p>{ __( 'Overlay', 'newsuk-blocks' ) }</p>
					<ColorPicker
						onChangeComplete={ ( color ) => setAttributes( { overlay: color.rgb } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div style={ STYLE_BLA } class="wp-block-newsuk-banner-left--editor">
				<div className="newsuk-bla__overlay" style={ { backgroundColor: `rgba( ${ Object.values( overlay ).join( ',' ) } )` } }></div>
				<MediaUpload
					onSelect={ ( value ) => { setAttributes( { imageUrl: value.sizes.full.url } ); } }
					render={ ( { open } ) => {
						return !! imageUrl ? (
							isSelected && ( <div className="newsuk-bla__image-wrapper">
								<div className="newsuk-bla__image-controls">
									<Icon className="newsuk-bla__control-button" icon="edit" size="32" onClick={ open } />
									<Icon className="newsuk-bla__control-button" icon="no" size="32" onClick={ () => setAttributes( { imageUrl: '' } ) } />
								</div>
							</div> )
						) : (
							isSelected && ( <div className="newsuk-bla__image-wrapper" onClick={ open }>
								<div className="newsuk-bla__image-controls">
									<Icon icon="camera" size="64" />
								</div>
							</div> )
						)
					} }
				/>
				<div className="newsuk-bla__wrapper">
					{ ( isSelected || !! title || subTitle ) && ( <>
						<RichText
							className="newsuk-bla__title"
							tagName="div"
							value={ title }
							onChange={ ( title ) => setAttributes( { title } ) }
							placeholder={ __( 'Add title...', 'newsuk-blocks' ) }
						/>
						<RichText
							className="newsuk-bla__subtitle"
							tagName="div"
							value={ subTitle }
							onChange={ ( subTitle ) => setAttributes( { subTitle } ) }
							placeholder={ __( 'Add subtitle...', 'newsuk-blocks' ) }
						/>
					</> ) }
				</div>
			</div>
		</>
	);
};
