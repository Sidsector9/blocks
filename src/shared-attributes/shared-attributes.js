import { blocksWithSharedAttributes } from './blocks-wth-shared-attributes.js';
import { addFilter } from '@wordpress/hooks';
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
            default: '100%',
		},
	} );
	
    return settings;
};

addFilter( 'blocks.registerBlockType', 'newsuk/attribute/sharedAttributes', addSharedAttributes );

const extendColumnAttributes = ( settings, name ) => {

	if ( 'core/columns' === name ) {
		settings.attributes = Object.assign( settings.attributes, {
			alignItems: {
				type: 'string',
				default: 'flex-start',
			}
		} );

	}
	
    return settings;
};

addFilter( 'blocks.registerBlockType', 'newsuk/attribute/extendColumnAttributes', extendColumnAttributes );
