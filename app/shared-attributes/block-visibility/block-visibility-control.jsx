import { blocksWithSharedAttributes } from '../blocks-wth-shared-attributes.jsx';

const { createHigherOrderComponent } = wp.compose;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, RadioControl } = wp.components;
const { addFilter } = wp.hooks;

const withBlockVisibilityControl = createHigherOrderComponent( ( BlockWithASharedAttribute ) => {
	return ( props ) => {

		if ( ! blocksWithSharedAttributes.includes( props.name ) ) {
			return <BlockWithASharedAttribute { ...props } />;
		}

		const { attributes: { blockVisibility }, setAttributes } = props;

		return (
			<>
				<InspectorControls>
					<PanelBody title="Shared settings" initialOpen={ true }>
						<p>Block visibility</p>
						<RadioControl
							className="newsuk__banner-block-visibility"
							selected={ blockVisibility }
							options={ [
								{ label: 'Disable', value: '0' },
								{ label: 'Only to logged in users', value: '1' },
								{ label: 'Only to logged off users', value: '2' },
								{ label: 'To everyone', value: '3' },
							] }
							onChange={ ( value ) => { setAttributes( { blockVisibility: value } ) } }
						/>
					</PanelBody>
				</InspectorControls>
				<BlockWithASharedAttribute { ...props } />
			</>
		);
	}
}, 'withBlockVisibilityControl' );

addFilter( 'editor.BlockEdit', 'newsuk/block-visibility-control', withBlockVisibilityControl, 1 );
