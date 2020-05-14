import ContentEditable from 'react-contenteditable'
import './title.scss';

const { registerBlockType } = wp.blocks;

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
		align: {
			type: 'string',
			default: 'full',
		}
	},
	edit( props ) {
		const { attributes: { titleText }, setAttributes, className } = props;

		return (
			<ContentEditable
				className={ className }
				html={ titleText }
				onChange={ ( e ) => setAttributes( { titleText: e.target.value } ) }
			/>
		);
	},
	save( props ) {
		const { attributes: { titleText } } = props;
		return (
			<div className="newsuk__title" dangerouslySetInnerHTML={ { __html: titleText } } />
		);
	},
} );
