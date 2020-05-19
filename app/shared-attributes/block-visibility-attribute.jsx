import { blocksWithSharedAttributes } from './blocks-wth-shared-attributes.jsx';
const { addFilter } = wp.hooks;

const addSharedAttributes = ( settings, name ) => {
	if ( ! blocksWithSharedAttributes.includes( name ) ) {
        return settings;
	}
	
	settings.attributes = Object.assign( settings.attributes, {
        blockVisibility: {
            type: 'string',
            default: '3',
		},
		maxWidth: {
            type: 'string',
            default: '1180',
		},
		marginBottom: {
			type: 'boolean',
			default: false,
		}
	} );

    return settings;
};

addFilter( 'blocks.registerBlockType', 'newsuk/attribute/sharedAttributes', addSharedAttributes );
