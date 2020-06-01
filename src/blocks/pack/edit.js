import {
	RichText,
	MediaUpload,
	InspectorControls,
} from '@wordpress/block-editor';

import { useState } from '@wordpress/element';

import { 
	Button,
	Popover,
	TextControl,
	PanelBody,
	Icon,
	ButtonGroup,
	Tooltip,
	RadioControl,
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
			packHighlightText,
		},
		setAttributes,
		isSelected,
	} = props;

	const [ ctaPopupStatus, setCtaPopupStatus ] = useState( false );

	return (
		<>
			<InspectorControls>
				<PanelBody>
					<p>{ __( 'Highlight block:', 'nuk-blocks' ) }</p>
					<RadioControl
						selected={ packType }
						options={ [
							{ label: __( 'Yes', 'nuk-blocks' ), value: 'yes' },
							{ label: __( 'No', 'nuk-blocks' ), value: 'no' },
						] }
						onChange={ ( packType ) => setAttributes( { packType } ) }
					/>

					<p>{ __( 'Highlight Text:', 'nuk-blocks' ) }</p>
					{ 'yes' === packType && <TextControl
						value={ packHighlightText }
						onChange={ ( packHighlightText ) => setAttributes( { packHighlightText } ) }
					/> }
				</PanelBody>
			</InspectorControls>
			<div className={ `wp-block-nuk-pack--editor wp-block-nuk-pack--editor--${ packType }` }>
				{ 'yes' === packType && packHighlightText && <div className="nuk-pack__highlight-text">{ packHighlightText }</div> }
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
								isImage,
							} = entitlement;

							return (
								<div className="nuk-pack__entitlement-row">
									<div className={ `nuk-pack__entitlement-row-wrapper nuk-pack__entitlement-row-wrapper--${ icon }` }>
										{ ! icon && <Icon
											className="nuk-pack__entitlement-icon"
											icon="instagram"
											size={ 32 }
										/> }
										{ 'yes' === icon && <Icon className="nuk-pack__entitlement-icon" icon="yes" size={ 32 } /> }
										{ 'no' === icon && <Icon className="nuk-pack__entitlement-icon" icon="no-alt" size={ 32 } /> }
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
									<div className="nuk-pack__entitlement-control">
										<ButtonGroup>
											<Tooltip text={ __( 'Available', 'nuk-blocks' ) } position="bottom center">
												<Button
													isSmall
													icon="yes"
													className="nuk-pack__button-yes"
													{ ...( 'yes' === icon ? { isPrimary: true } : {} ) }
													onClick={ () => {
														const temp = [ ...entitlements ];
														temp[ index ].icon = 'yes';
														temp[ index ].isImage = false;
														setAttributes( { entitlements: temp } );
													} }
												/>
											</Tooltip>

											<Tooltip text={ __( 'Not available', 'nuk-blocks' ) } position="bottom center">
												<Button
													isSmall
													icon="no"
													className="nuk-pack__button-no"
													{ ...( 'no' === icon ? { isPrimary: true } : {} ) }
													onClick={ () => {
														const temp = [ ...entitlements ];
														temp[ index ].icon = 'no';
														temp[ index ].isImage = false;
														setAttributes( { entitlements: temp } );
													} }
												/>
											</Tooltip>
											<MediaUpload
												onSelect={ () => { console.log( 'Hello' ) } }
												render={ ( { open } ) => (
													<Tooltip text={ __( 'Use custom icon', 'nuk-blocks' ) } position="bottom center">
														<Button
															isSmall
															icon="camera"
															{ ...( isImage ? { isPrimary: true } : {} ) }
															onClick={ open }
														/>
													</Tooltip>
												)
											}/>
											<Tooltip text={ __( 'Reset icon', 'nuk-blocks' ) } position="bottom center">
												<Button
													isSmall
													icon="controls-repeat"
													onClick={ () => {
														const temp = [ ...entitlements ];
														temp[ index ].icon = undefined;
														temp[ index ].isImage = undefined;
														setAttributes( { entitlements: temp } );
													} }
												/>
											</Tooltip>
										</ButtonGroup>
									</div>
									</div>
									<Tooltip text={ __( 'Delete entitlement', 'nuk-blocks' ) } position="bottom center">
										<div className="nuk-pack__remove-button">
											<Icon
												icon="no"
												size={ 32 }
												onClick={ () => setAttributes( { entitlements: entitlements.filter( ( item, itemIndex ) => itemIndex !== index ) } ) }
											/>
										</div>
									</Tooltip>
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
		</>
	);
};