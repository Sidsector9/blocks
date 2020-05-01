import './title.scss';

const { registerBlockType } = wp.blocks;
const {
	RichText,
	InspectorControls
} = wp.blockEditor;

const {
	PanelBody,
	ColorPicker,
	TextControl
} = wp.components;

registerBlockType( 'newsuk/title', {
	title: 'Title',
	icon: 'universal-access-alt',
	category: 'newsuk',
	supports: {
		align: true,
	},
	attributes: {
		titleText: {
			type: 'array',
            source: 'children',
            selector: 'h3',
		},
		backgroundColor: {
			type: 'object',
		},
	},
	edit( props ) {
		const { attributes: { titleText, backgroundColor }, setAttributes } = props;
		return (
			<>
				<InspectorControls>
					<PanelBody title="Title Settings" initialOpen={ true }>
						<p>Background Color</p>
						<ColorPicker
							color={ backgroundColor }
							onChangeComplete={ ( value ) => setAttributes( { backgroundColor: value } ) }
						/>
					</PanelBody>
				</InspectorControls>
				<div className="newsuk__title" style={ {
					backgroundColor: backgroundColor?.hex,
				} }>
					<RichText
						tagName="h3"
						onChange={ ( value ) => setAttributes( { titleText: value } ) }
						value={ titleText }
					/>
				</div>
			</>
		);
	},
	save( props ) {
		return (
			<div className="newsuk__title" style={ {
				backgroundColor: props.attributes.backgroundColor?.hex,
			} }>
				<RichText.Content tagName="h3" value={ props.attributes.titleText } />
				{/* <h1>{ props.attributes?.titleText }</h1> */}
			</div>
		);
	},
} );
