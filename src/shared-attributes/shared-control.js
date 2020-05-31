import { blocksWithSharedAttributes } from './blocks-wth-shared-attributes';

const { createHigherOrderComponent } = wp.compose;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, RadioControl, ToggleControl, RangeControl } = wp.components;
const { addFilter } = wp.hooks;

const withSharedAttributesControl = createHigherOrderComponent( ( BlockWithASharedAttribute ) => {
	return ( props ) => {

		if ( ! blocksWithSharedAttributes.includes( props.name ) ) {
			return <BlockWithASharedAttribute { ...props } />;
		}

		const {
			attributes: {
				blockVisibility,
				maxWidth,
			},
			setAttributes
		} = props;

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
							onChange={ ( blockVisibility ) => { setAttributes( { blockVisibility } ) } }
						/>

						<p>Max width</p>
						<RadioControl
							className="newsuk__banner-block-visibility"
							selected={ maxWidth }
							options={ [
								{ label: 'Fit container (100%)', value: '100%' },
								{ label: 'Medium (780px)', value: '780px' },
							] }
							onChange={ ( maxWidth ) => { setAttributes( { maxWidth } ) } }
						/>
					</PanelBody>
				</InspectorControls>
				<BlockWithASharedAttribute { ...props } />
			</>
		);
	}
}, 'withSharedAttributesControl' );
addFilter( 'editor.BlockEdit', 'newsuk/block-visibility-control', withSharedAttributesControl, 1 );