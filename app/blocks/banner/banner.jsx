import ContentEditable from 'react-contenteditable'
import './banner.scss';

const { Icon } = wp.components;
const { registerBlockType } = wp.blocks;
const {
	MediaUpload
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
		}
	},
	edit( props ) {
		const { attributes: { bannerImage }, setAttributes, className, isSelected } = props;

		return (
			<div className={ className } style={ {
				backgroundImage: `url( ${ bannerImage } )`,
			} }>
				<MediaUpload
					onSelect={ ( value ) => { setAttributes( { bannerImage: value.sizes.full.url } ); console.log( value.url ) } }
					render={ ( { open } ) => {
						return isSelected && <div className="newsuk__banner-image-bg" onClick={ open }><Icon icon="camera" /></div>
					} }
				/>
			</div>
		);
	},
	save( props ) {
		const { attributes: { bannerImage } } = props;

		return (
			<div className="newsuk__banner-image-bg" style={ {
				backgroundImage: `url( ${ bannerImage } )`,
			} } />
		);
	},
} );
