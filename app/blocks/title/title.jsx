import './title.scss';

const { registerBlockType } = wp.blocks;
const {
	RichText,
} = wp.blockEditor;

registerBlockType( 'newsuk/title', {
	title: 'Title',
	icon: 'universal-access-alt',
	category: 'newsuk',
	supports: {
		align: true,
	},
	attributes: {
		titleText: {
			type: 'string',
            source: 'text',
			selector: '.newsuk__title',
			default: '',
		},
	},
	edit( props ) {
		const { attributes: { titleText }, setAttributes, className, isSelected } = props;

		return (
			<>
				{ isSelected ? <input className={ className } type="text" value={ titleText } onChange={ ( e ) => setAttributes( { titleText: e.target.value } ) } /> : <div className={ className } >{ titleText }</div> }
			</>
		);
	},
	save( props ) {
		return (
			<div className="newsuk__title">{ props.attributes.titleText }</div>
		);
	},
} );
