import { blocksWithSharedAttributes } from '../blocks-wth-shared-attributes.jsx';
const { addFilter } = wp.hooks;

const addBlockVisibilityAttribute = ( settings, name ) => {
	if ( ! blocksWithSharedAttributes.includes( name ) ) {
        return settings;
	}
	
	settings.attributes = Object.assign( settings.attributes, {
        blockVisibility: {
            type: 'string',
            default: '3',
        },
	} );

    return settings;
};

addFilter( 'blocks.registerBlockType', 'newsuk/attribute/blockVisibility', addBlockVisibilityAttribute );
