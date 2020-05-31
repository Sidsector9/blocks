import {
	RichText,
	InnerBlocks,
} from '@wordpress/block-editor';

import { useState } from '@wordpress/element';

import { __ } from '@wordpress/i18n';

export const edit = ( props ) => {

	const {
		attributes: {
			imageUrl,
			heading,
			description,
		},
		setAttributes,
	} = props;

	const [ isItemOpen, setIsItemOpen ] = useState( false );

	return (
		<div className="wp-block-nuk-int-accordion-item--editor">
			<div className="nuk-acc-item__wrapper">
				<div className="nuk-acc-item__text">
					<div className="nuk-acc-item__heading-wrapper" onClick={ () => setIsItemOpen( ! isItemOpen ) }>
						<RichText
							className="nuk-acc-item__heading"
							placeholder={ __( 'Add heading...', 'nuk-blocks' ) }
							value={ heading }
							onChange={ ( heading ) => setAttributes( { heading } ) }
						/>
						<div class={ `nuk-acc-item__arrow ${ isItemOpen ? 'is-open' : '' }` }>
							<svg xmlns="http://www.w3.org/2000/svg" width="14" height="8"><path fill="#069" fill-rule="evenodd" d="M13.119 1.23L6.594 4.594.127.775.09 1.797 6.435 8l6.648-5.75z"/></svg>
						</div>
					</div>
					{ isItemOpen && <div className="nuk-acc-item__description">
						<InnerBlocks
							renderAppender={ () => <InnerBlocks.ButtonBlockAppender /> }
						/>
					</div> }
				</div>
			</div>
		</div>
	);
};