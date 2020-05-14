import ContentEditable from 'react-contenteditable'
import './title.scss';

const { registerBlockType } = wp.blocks;
const { RichText, BlockControls, AlignmentToolbar } = wp.blockEditor;

registerBlockType( 'newsuk/title', {
	title: 'Title',
	icon: 'universal-access-alt',
	category: 'newsuk',
	supports: {
		align: ['full'],
	},
	attributes: {
		titleText: {
			type: 'string',
            source: 'html',
			selector: '.newsuk__title',
			default: '',
		},
		align: {
			type: 'string',
			default: 'full',
		},
		alignment: {
            type: 'string',
            default: 'none',
        },
	},
	edit( props ) {
		const { attributes: { titleText, alignment }, setAttributes, className } = props;

		return (
			<>
				<BlockControls>
					<AlignmentToolbar
						value={ alignment }
						onChange={ ( newAlignment ) => setAttributes( { alignment: newAlignment === undefined ? 'none' : newAlignment } ) }
					/>
				</BlockControls>
				<RichText
					tagName="div"
					style={ { textAlign: alignment } }
					value={ titleText }
					className={ className }
					onChange={ ( titleText ) => setAttributes( { titleText } ) }
				/>
			</>
		);
	},
	save( props ) {
		const { attributes: { titleText, alignment } } = props;

		return (
			<RichText.Content
				tagName="div"
				style={ { textAlign: alignment } }
				className="newsuk__title"
				value={ titleText }
			/>
		);
	},
} );
