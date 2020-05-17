import { blocksWithSharedAttributes } from './blocks-wth-shared-attributes.jsx';

const { createHigherOrderComponent } = wp.compose;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, RadioControl } = wp.components;
const { addFilter } = wp.hooks;

const withSharedAttributesControl = createHigherOrderComponent( ( BlockWithASharedAttribute ) => {
	return ( props ) => {

		if ( ! blocksWithSharedAttributes.includes( props.name ) ) {
			return <BlockWithASharedAttribute { ...props } />;
		}

		const { attributes: { blockVisibility, maxWidth }, setAttributes } = props;
		const isCoreBlock = props.name.includes( 'core/' ) ? props.name : false;
		const STYLE_CORE_BL = {
			maxWidth: `${ maxWidth }px`,
			marginLeft: 'auto',
			marginRight: 'auto',
		};

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
								{ label: 'Wide ( 1180px )', value: '1180' },
								{ label: 'Medium ( 780px )', value: '780' },
							] }
							onChange={ ( maxWidth ) => { setAttributes( { maxWidth } ) } }
						/>
					</PanelBody>
				</InspectorControls>

				{ isCoreBlock ? (
					<div className={ `wp-block-${ props.name.split( '/' ).join( '-' ) }` } style={ STYLE_CORE_BL }>
						<BlockWithASharedAttribute { ...props } />
					</div>
				) : <BlockWithASharedAttribute { ...props } /> }
			</>
		);
	}
}, 'withSharedAttributesControl' );

addFilter( 'editor.BlockEdit', 'newsuk/block-visibility-control', withSharedAttributesControl, 1 );

function addWrapperToSelectedCoreBlocksOnSave( element, blockType, attributes ) {
	if ( ! blocksWithSharedAttributes.includes( blockType.name ) || ! blockType.name.includes( 'core/' ) ) {
		return element;
	}

	const { maxWidth } = attributes;
	const STYLE_CORE_BL = {
		maxWidth: `${ maxWidth }px`,
		marginLeft: 'auto',
		marginRight: 'auto',
		marginBottom: '40px',
	};

	return (
        <div className={ `sidlol wp-block-${ blockType.name.split( '/' ).join( '-' ) }` } style={ STYLE_CORE_BL }>
			{ element }
        </div>
    );
}

wp.hooks.addFilter( 'blocks.getSaveElement', 'extend-block-example/custom-save', addWrapperToSelectedCoreBlocksOnSave );