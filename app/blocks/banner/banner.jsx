import './banner.scss';

const { Icon, PanelBody, TextControl, RadioControl } = wp.components;
const { registerBlockType } = wp.blocks;
const {
	MediaUpload,
	InspectorControls,
} = wp.blockEditor;

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

registerBlockType( 'newsuk/banner', {
	title: 'Banner',
	icon: 'universal-access-alt',
	category: 'newsuk',
	supports: {
		align: true,
	},
	attributes: {
		bannerImage: {
			type: 'string',
		},
		bannerTitle: {
			type: 'string',
		},
		bannerSubTitle: {
			type: 'string',
		},
		bannerTextPosition: {
			type: 'string',
			default: '5',
		}
	},
	edit( props ) {
		const { attributes: { bannerImage, bannerTitle, bannerSubTitle, bannerTextPosition }, setAttributes, className, isSelected } = props;

		return (
			<>
				<InspectorControls>
					<PanelBody title="Banner Settings" initialOpen={ true }>
						<p>Banner title</p>
						<TextControl
							className="newsuk__banner-title"
							value={ bannerTitle }
							onChange={ ( value ) => setAttributes( { bannerTitle: value } ) }
						/>

						<p>Banner subtitle</p>
						<TextControl
							className="newsuk__banner-subtitle"
							value={ bannerSubTitle }
							onChange={ ( value ) => setAttributes( { bannerSubTitle: value } ) }
						/>

						<p>Banner text position</p>
						<RadioControl
							className="newsuk__banner-text-positions"
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
				<div className={ className } style={ {
					backgroundImage: `url( ${ bannerImage } )`,
				} }>
					<MediaUpload
						onSelect={ ( value ) => { setAttributes( { bannerImage: value.sizes.full.url } ); console.log( value.url ) } }
						render={ ( { open } ) => {
							return isSelected && <div className="newsuk__banner-image-bg" onClick={ open }><Icon icon="camera" /></div>
						} }
					/>
					<div className="newsuk__banner-text" style={ computeBannerTextPosition( bannerTextPosition ) }>
						<div className="newsuk__banner-text-container">
							<div className="newsuk__banner-text__title">{ bannerTitle }</div>
							<div className="newsuk__banner-text__subtitle">{ bannerSubTitle }</div>
						</div>
					</div>
				</div>
			</>
		);
	},
	save( props ) {
		const { attributes: { bannerImage, bannerTitle, bannerSubTitle, bannerTextPosition } } = props;

		return (
			<div className="newsuk__banner-image-bg" style={ {
				backgroundImage: `url( ${ bannerImage } )`,
			} }>
				<div className="newsuk__banner-text" style={ computeBannerTextPosition( bannerTextPosition ) }>
					<div className="newsuk__banner-text-container">
						<div className="newsuk__banner-text__title">{ bannerTitle }</div>
						<div className="newsuk__banner-text__subtitle">{ bannerSubTitle }</div>
					</div>
				</div>
			</div>
		);
	},
} );
