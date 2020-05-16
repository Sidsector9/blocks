const { InnerBlocks } = wp.blockEditor;
import './accordion.scss';

const { registerBlockType } = wp.blocks;

registerBlockType( 'newsuk/accordion-container', {
	title: 'Accordion Container',
	icon: 'universal-access-alt',
	category: 'newsuk',
	supports: {
		align: [ 'full' ],
	},
	attributes: {
		align: {
			type: 'string',
			default: 'full',
		},
	},
	edit( props ) {
		const { attributes: { maxWidth }, isSelected } = props;

		const STYLE_ACC_CONT = {
			maxWidth: `${ maxWidth }px`,
			width: '100%',
			marginLeft: 'auto',
			marginRight: 'auto',
		};

		return (
			<div style={ STYLE_ACC_CONT } className="wp-block-newsuk-accordion-container--editor">
				<InnerBlocks
					renderAppender={ () => isSelected ? <InnerBlocks.ButtonBlockAppender /> : false }
				/>
			</div>
		);
	},
	save( props ) {
		const { attributes: { maxWidth } } = props;

		const STYLE_ACC_CONT = {
			maxWidth: `${ maxWidth }px`,
			width: '100%',
			marginLeft: 'auto',
			marginRight: 'auto',
		};

		return (
			<div style={ STYLE_ACC_CONT }>
				<InnerBlocks.Content />
			</div>
		);
	},
} );
