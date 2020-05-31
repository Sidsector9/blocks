import {
	RichText,
} from '@wordpress/block-editor';

import { useState } from '@wordpress/element';

import { 
	Button,
	Popover,
	TextControl,
	PanelBody,
	Icon,
} from '@wordpress/components';

import { __ } from '@wordpress/i18n';

export const edit = ( props ) => {

	const {
		attributes: {
			title,
			description,
			price,
			frequency,
			cta,
			packType,
			entitlements,
		},
		setAttributes,
		isSelected,
	} = props;

	const [ ctaPopupStatus, setCtaPopupStatus ] = useState( false )

	return (
		<div className={ `wp-block-nuk-pack--editor wp-block-nuk-pack--editor--${ packType }` }>
			<div className="nuk-pack__intro">
				<RichText
					className="nuk-pack__pack-title"
					placeholder={ __( 'Title...', 'nuk-blocks' ) }
					inlineToolbar
					value={ title }
					onChange={ ( title ) => setAttributes( { title } ) }
					/>
				<RichText
					className="nuk-pack__pack-description"
					placeholder={ __( 'Description...', 'nuk-blocks' ) }
					inlineToolbar
					value={ description }
					onChange={ ( description ) => setAttributes( { description } ) }
				/>
			</div>
			<div className="nuk-pack__pricing">
				<RichText
					className="nuk-pack__price"
					placeholder={ __( '£15.00.', 'nuk-blocks' ) }
					allowedFormats={ [] }
					value={ price }
					onChange={ ( price ) => setAttributes( { price } ) }
				/>
				<RichText
					className="nuk-pack__frequency"
					placeholder={ __( 'a month, monthly rolling contract', 'nuk-blocks' ) }
					allowedFormats={ [] }
					value={ frequency }
					onChange={ ( frequency ) => setAttributes( { frequency } ) }
				/>
				<a href={ cta.url } className="nuk-pack__cta" onClick={ ( e ) => {
					e.preventDefault();
					! e.target.closest( '.components-popover__content' ) && setCtaPopupStatus( ! ctaPopupStatus );
				} }>
					{ cta.text ? cta.text : __( 'Subscribe now' ) }
					{ ctaPopupStatus && <Popover onFocusOutside={ () => { setCtaPopupStatus( ! ctaPopupStatus ) } }>
						<PanelBody>
							<TextControl
								placeholder={ __( 'CTA Text', 'newsuk-blocks' ) }
								onChange={ ( text ) => {
									const temp = { ...cta };
									temp.text = text,

									setAttributes( { cta: temp } );
								} }
							/>
							<TextControl
								placeholder={ __( 'CTA Url', 'newsuk-blocks' ) }
								onChange={ ( url ) => {
									const temp = { ...cta };
									temp.url = url,

									setAttributes( { cta: temp } );
								} }
							/>
						</PanelBody>
					</Popover> }
				</a>
			</div>
			<div className="nuk-pack__entitlements">
				<div className="nuk-pack__entitlements-title">{ __( "What's included", 'nuk-blocks' ) }</div>
				{
					entitlements.map( ( entitlement, index ) => {
						const {
							text,
							icon,
						} = entitlement;
						return (
							<div className="nuk-pack__entitlement-row">
								<RichText
									className="nuk-pack__entitlement-item"
									placeholder={ __( 'Add description...', 'nuk-blocks' ) }
									inlineToolbar
									value={ text }
									onChange={ ( text ) => {
										const temp = [ ...entitlements ];
										temp[ index ].text = text;

										setAttributes( { entitlements: temp } );
									} }
								/>
								<Icon
									icon="no"
									className="nuk-pack__remove-button"
									size={ 32 }
									onClick={ () => setAttributes( { entitlements: entitlements.filter( ( item, itemIndex ) => itemIndex !== index ) } ) }
								/> 
							</div>
						);
					} )
				}
			</div>
			{ isSelected && (
				<Button
					isSecondary
					className="nuk-pack__add-button"
					icon="plus"
					onClick={ () => {
						setAttributes( {
							entitlements: [
								...entitlements,
								{
									text: __( 'Add description...', 'nuk-blocks' ),
								}
							]
						} )
					} }
				>
					{ __( 'Add entitlement', 'nuk-blocks' ) }
				</Button>
			) }
		</div>
	);
};