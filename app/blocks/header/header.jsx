import ContentEditable from 'react-contenteditable'
import './header.scss';

const { Icon } = wp.components;
const { registerBlockType } = wp.blocks;
const {
	MediaUpload
} = wp.blockEditor;

registerBlockType( 'newsuk/header', {
	title: 'Header',
	icon: 'universal-access-alt',
	category: 'newsuk',
	supports: {
		align: true,
	},
	attributes: {
		headerImage: {
			type: 'string',
		}
	},
	edit( props ) {
		const { attributes: { headerImage }, setAttributes, className, isSelected } = props;

		return (
			<div className={ className } style={ {
				backgroundImage: `url( ${ headerImage } )`,
			} }>
				<MediaUpload
					onSelect={ ( value ) => { setAttributes( { headerImage: value.sizes.full.url } ); console.log( value.url ) } }
					render={ ( { open } ) => {
						return isSelected && <div className="newsuk__header-image-bg" onClick={ open }><Icon icon="camera" /></div>
					} }
				/>
			</div>
		);
	},
	save( props ) {
		const { attributes: { headerImage } } = props;

		return (
			<div className="newsuk__header-image-bg" style={ {
				backgroundImage: `url( ${ headerImage } )`,
			} } />
		);
	},
} );
