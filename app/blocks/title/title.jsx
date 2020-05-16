const { registerBlockType } = wp.blocks;
const { RichText, BlockControls, AlignmentToolbar } = wp.blockEditor;

import './title.scss';

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
		const { attributes: { titleText, alignment, maxWidth }, setAttributes, className } = props;

		const STYLE_TITLE = {
			maxWidth: `${ maxWidth }px`,
			width: '100%',
			marginLeft: 'auto',
			marginRight: 'auto',
			textAlign: alignment,
		};

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
					style={ STYLE_TITLE }
					value={ titleText }
					className="wp-block-newsuk-title--editor"
					onChange={ ( titleText ) => setAttributes( { titleText } ) }
				/>
			</>
		);
	},
	save( props ) {
		const { attributes: { titleText, alignment, maxWidth } } = props;

		const STYLE_TITLE = {
			maxWidth: `${ maxWidth }px`,
			width: '100%',
			marginLeft: 'auto',
			marginRight: 'auto',
			textAlign: alignment,
		};

		return (
			<RichText.Content
				tagName="div"
				style={ STYLE_TITLE }
				className="newsuk__title"
				value={ titleText }
			/>
		);
	},
} );
