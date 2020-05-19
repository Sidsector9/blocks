const { InnerBlocks, InspectorControls } = wp.blockEditor;
const { PanelBody, ColorPicker } = wp.components;
import './row.scss';

const { registerBlockType } = wp.blocks;

registerBlockType( 'newsuk/row', {
	title: 'Row',
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
		color: {
			type: 'object',
			default: {
				r: 0,
				g: 0,
				b: 0,
			},
		}
	},
	edit( props ) {
		const { attributes: { color, marginBottom }, setAttributes, isSelected } = props;

		const STYLE_ROW = {
			backgroundColor: `rgba( ${ Object.values( color ).join( ',' ) } )`,
			marginBottom: 0 === marginBottom ? undefined : `${ marginBottom }px`,
		};

		return (
			<>
				<InspectorControls>
					<PanelBody>
						<ColorPicker
							color={ color }
							onChangeComplete={ ( color ) => {
								setAttributes( { color: color.rgb } );
							} }
							disableAlpha
						/>
					</PanelBody>
				</InspectorControls>
				<div className="wp-block-newsuk-row--editor" style={ STYLE_ROW }>
					<InnerBlocks
						renderAppender={ () => isSelected ? <InnerBlocks.ButtonBlockAppender /> : false }
					/>
				</div>
			</>
		);
	},
	save( props ) {
		const { attributes: { color, marginBottom } } = props;

		const STYLE_ROW = {
			backgroundColor: `rgba( ${ Object.values( color ).join( ',' ) } )`,
			marginBottom: 0 === marginBottom ? undefined : `${ marginBottom }px`,
		};

		return (
			<div style={ STYLE_ROW }>
				<InnerBlocks.Content />
			</div>
		);
	},
} );
