import {
	RichText,
	MediaUpload,
} from '@wordpress/block-editor';

import { useState } from '@wordpress/element';

import { 
	Button,
	Popover,
	TextControl,
	PanelBody,
	Icon,
	ButtonGroup,
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

	const [ ctaPopupStatus, setCtaPopupStatus ] = useState( false );
	// const [ iconPopupStatus, setIconPopupStatus ] = useState( [] );

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

						const [ iconPopup, setIconPopup ] = useState( false );

						return (
							<div className="nuk-pack__entitlement-row">
								<div className="nuk-pack__entitlement-row-wrapper">
									<div className="nuk-pack__icon-picker" onClick={ ( e ) => ! e.target.closest( '.nuk-pack__button-yes, .nuk-pack__button-no' ) && setIconPopup( ! iconPopup ) }>
											{ iconPopup && <Popover>
												<PanelBody>
													<p>{ __( 'Choose an icon' ) }</p>
													<ButtonGroup>
														<Button
															isSecondary
															icon="yes"
															className="nuk-pack__button-yes"
															{ ...( 'yes' === icon ) ? { isPrimary: true } : { isSecondary: true } }
															onClick={ () => {
																const temp = [ ...entitlements ];
																temp[ index ].icon = 'yes';
																temp[ index ].isImage = false;
																setAttributes( { entitlements: temp } );
															} }
														/>
														<Button
															isSecondary
															icon="no"
															className="nuk-pack__button-no"
															{ ...( 'no' === icon ) ? { isPrimary: true } : { isSecondary: true } }
															onClick={ () => {
																const temp = [ ...entitlements ];
																temp[ index ].icon = 'no';
																temp[ index ].isImage = false;
																setAttributes( { entitlements: temp } );
															} }
														/>
														<MediaUpload
															// onSelect={ () => { console.log( 'Hello' ) } }
															render={ ( { open } ) => (
																<Button
																	isSecondary
																	icon="camera"
																	onClick={ open }
																/>
															)
														}/>
													</ButtonGroup>
													<p>
														<Button
															isLink
															onClick={ () => {
																const temp = [ ...entitlements ];
																temp[ index ].icon = undefined;
																temp[ index ].isImage = undefined;
																setAttributes( { entitlements: temp } );
															} }
														>
															{ __( 'Remove icon', 'nuk-blocks' ) }
														</Button>
													</p>
												</PanelBody>
											</Popover> }
										<Icon icon="camera">
										</Icon>
									</div>
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
								</div>
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