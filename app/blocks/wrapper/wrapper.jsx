const { InnerBlocks, InspectorControls } = wp.blockEditor;
const { PanelBody, TextControl } = wp.components;
import './wrapper.scss';

const { registerBlockType } = wp.blocks;

registerBlockType( 'newsuk/wrapper', {
	title: 'Wrapper',
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
		maxWidth: {
			type: 'string',
			default: '1180',
		}
	},
	edit( props ) {
		const { className, attributes: { maxWidth }, setAttributes } = props;

		const STYLE_WRAPPER = {
			maxWidth: `${ maxWidth }px`,
			margin: '0 auto',
		};

		return (
			<>
				<InspectorControls>
					<PanelBody>
						<p>Max-width of the wrapper (in pixels)</p>
						<TextControl
							value={ maxWidth }
							onChange={ ( maxWidth ) => setAttributes( { maxWidth } ) }
						/>
					</PanelBody>
				</InspectorControls>
				<div className={ className } style={ STYLE_WRAPPER }>
					<InnerBlocks
						renderAppender={ () => <InnerBlocks.ButtonBlockAppender /> }
					/>
				</div>
			</>
		);
	},
	save( props ) {
		const { attributes: { maxWidth } } = props;

		const STYLE_WRAPPER = {
			maxWidth: `${ maxWidth }px`,
			margin: '0 auto',
		};

		return (
			<div style={ STYLE_WRAPPER }>
				<InnerBlocks.Content />
			</div>
		);
	},
} );
