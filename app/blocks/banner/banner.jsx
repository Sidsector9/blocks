import ContentEditable from 'react-contenteditable'
import './banner.scss';

const { Icon, PanelBody, TextControl } = wp.components;
const { registerBlockType } = wp.blocks;
const {
	MediaUpload,
	InspectorControls,
	InnerBlocks,
} = wp.blockEditor;

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
		}
	},
	edit( props ) {
		const { attributes: { bannerImage, bannerTitle, bannerSubTitle }, setAttributes, className, isSelected } = props;

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
					<div className="newsuk__banner-text">
						<div className="newsuk__banner-text__title">{ bannerTitle }</div>
						<div className="newsuk__banner-text__subtitle">{ bannerSubTitle }</div>
					</div>
				</div>
			</>
		);
	},
	save( props ) {
		const { attributes: { bannerImage } } = props;

		return (
			<div className="newsuk__banner-image-bg" style={ {
				backgroundImage: `url( ${ bannerImage } )`,
			} }>
				<div className="newsuk__banner-text"></div>
			</div>
		);
	},
} );
