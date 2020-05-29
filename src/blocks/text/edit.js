import {
	InspectorControls,
	BlockControls,
	InnerBlocks,
} from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';

export const edit = ( props ) => {

	return (
		<div>
			<InnerBlocks
				templateLock="insert"
				template={
					[
						[ 'core/heading', { placeholder: __( 'Add Text', 'nuk-blocks' ) } ],
					]
				}
			/>
		</div>
	);
};