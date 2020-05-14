import ContentEditable from 'react-contenteditable';
const { PanelBody, CheckboxControl, Icon, Button, ButtonGroup } = wp.components;
const { InspectorControls, MediaUpload } = wp.blockEditor;
const { registerBlockType } = wp.blocks;
import { removFromArray } from '../../_utility/_utility.jsx';
import './pack-default.scss';


registerBlockType( 'newsuk/pack-default', {
	title: 'Pack-default',
	icon: 'universal-access-alt',
	category: 'newsuk',
	supports: {
		align: true,
		className: false,
	},
	attributes: {
		banner: {
			type: 'boolean',
			default: true,
		},
		body: {
			type: 'boolean',
			default: true,
		},
		bannerDetails: {
			type: 'object',
			default: {
				title: 'Pack Title...',
				price: '£5',
				frequency: 'a week',
				subBillingInformation: 'Sub billing information...',
				image: '',
			},
		},
		moreDetails: {
			type: 'boolean',
			default: true,
		},
		bodyListArray: {
			type: 'array',
			default: [],
		},
		moreDetailsArray: {
			type: 'array',
			default: [],
		}
	},

	edit( props ) {
		const {
			setAttributes,
			attributes: {
				banner,
				bannerDetails,
				body,
				moreDetails,
				bodyListArray,
				moreDetailsArray,
			},
			isSelected
		} = props;

		const addBodyListRow = () => {
			setAttributes( {
				bodyListArray: [ ...bodyListArray, {
					icon: '',
					description: 'edit description...',
				} ]
			} );
		}

		const editBanner = ( value, property ) => {
			const temp = { ...bannerDetails };
			temp[ property ] = value;

			setAttributes( { bannerDetails: temp } );
		}

		const editBodyListRow = ( value, index, property ) => {
			const temp = [ ...bodyListArray ];
			temp[ index ][ property ] = value;

			setAttributes( {
				bodyListArray: temp,
			} )
		};

		const addMoreDetailsRow = () => {
			setAttributes( {
				moreDetailsArray: [ ...moreDetailsArray, {
					title: 'edit title...',
					description: 'edit description...',
				} ]
			} );
		}

		const editMoreDetailsRow = ( value, index, property ) => {
			const temp = [ ...moreDetailsArray ];
			temp[ index ][ property ] = value;

			setAttributes( {
				moreDetailsArray: temp,
			} )
		};

		const removeFromArrayWrapper = ( array, index, attribute ) => {
			setAttributes( { [ attribute ]: removFromArray( array, index ) } );
		}

		return (
			<>
				<InspectorControls>
					<PanelBody title="Pack Settings" initialOpen={ true }>
						<p>Pack sections:</p>
						<CheckboxControl
							label="Banner"
							checked={ banner }
							onChange={ ( banner ) => { setAttributes( { banner } ) } }
						/>
						<CheckboxControl
							label="Body"
							checked={ body }
							onChange={ ( body ) => { setAttributes( { body } ) } }
						/>
						<CheckboxControl
							label="More details"
							checked={ moreDetails }
							onChange={ ( moreDetails ) => { setAttributes( { moreDetails } ) } }
						/>
					</PanelBody>
				</InspectorControls>
				<div className="newsuk__pack-default">
					{ banner && <div className="newsuk__pack-default-section newsuk__pack-default-section--banner">
						<ContentEditable
							className="newsuk__pack-default-banner-title"
							html={ bannerDetails.title }
							onChange={ ( e ) => editBanner( e.target.value, 'title' ) }
						/>
						<MediaUpload
							onSelect={ ( value ) => editBanner( value.sizes.full.url, 'image' ) }
							render={ ( { open } ) => {
								return ( <div className="newsuk__pack-default-banner-image-wrapper">
									{ !! bannerDetails.image ? (
										<div className="newsuk__pack-default-banner-image-container">
											<div className={ `newsuk__pack-default-banner-image-controls ${ isSelected ? 'is-selected' : '' }` }>
												<Icon icon="edit" size="64" onClick={ open } />
												<Icon icon="no" size="64" onClick={ () => {
													const temp = { ... bannerDetails }
													temp.image = '';
													setAttributes( { bannerDetails: temp } )
												} } />
											</div>
											<img src={ bannerDetails.image } />
										</div> ) : (
										<div className="newsuk__pack-default-banner-image-placeholder" onClick={ open }>
											<Icon icon="camera" size="64" />
										</div> ) }
								</div> )
							} }
						/>
						<div className="newsuk__pack-default-banner-cost">
							<ContentEditable
								className="newsuk__pack-default-banner-price"
								html={ bannerDetails.price }
								onChange={ ( e ) => editBanner( e.target.value, 'price' ) }
								tagName="span"
							/>
							<ContentEditable
								className="newsuk__pack-default-banner-frequency"
								html={ bannerDetails.frequency }
								onChange={ ( e ) => editBanner( e.target.value, 'frequency' ) }
								tagName="span"
							/>
						</div>
						<div className="newsuk__pack-default-banner-billing-information">Billing Information</div>
						<ContentEditable
							className="newsuk__pack-default-banner-sub-billing-information"
							html={ bannerDetails.subBillingInformation }
							onChange={ ( e ) => editBanner( e.target.value, 'subBillingInformation' ) }
						/>
					</div> }
					{ body && <div className="newsuk__pack-default-section newsuk__pack-default-section--body">
						<div className={ `newsuk__pack-default-body-list-rows ${ isSelected ? 'is-selected' : '' }` }>
							{
								bodyListArray.map( ( row, index ) => {
									return (
										<div className={ `newsuk__pack-default-body-list-row ${ isSelected ? 'is-selected' : '' }` }>
											<div className="newsuk__pack-default-remove-button" onClick={ () => removeFromArrayWrapper( bodyListArray, index, 'bodyListArray' ) }><Icon icon="plus" size={ 32 } /></div>
											<MediaUpload
												onSelect={ ( value ) => editBodyListRow( value.sizes.full.url, index, 'icon' ) }
												render={ ( { open } ) => {
													return (
														<div className="newsuk__pack-default-body-list-icon">
															{ !! row.icon ? (
																<div className="newsuk__pack-default-body-list-icon-with-controls">
																	<ButtonGroup className="newsuk__media-upload-control-group">
																		<Icon icon="edit" size="16" onClick={ open } />
																		<Icon icon="no" size="16" onClick={ () => {
																			const temp = [ ...bodyListArray ];
																			temp[ index ].icon = '';
																			setAttributes( { bodyListArray: temp } );
																		} } />
																	</ButtonGroup>
																	<img src={ row.icon } />
																</div>
																) : (
																	<Icon icon="camera" onClick={ open } />
																)
															}
														</div>
													);
												} }
											/>
											<ContentEditable
												className="newsuk__pack-default-body-list-description"
												html={ row.description }
												onChange={ ( e ) => editBodyListRow( e.target.value, index, 'description' ) }
											/>
										</div>
									);
								} )
							}
							{ isSelected && <div className="button newsuk__pack-default-add-button" onClick={ addBodyListRow }><Icon icon="plus" />Add item</div> }
						</div>
					</div> }
					{ moreDetails && <div className="newsuk__pack-default-section newsuk__pack-default-section--more-details">
						{ moreDetails && ( banner || body ) && <div className="newsuk__pack-default-more-details-button">Hide details</div> }
						<div className={ `newsuk__pack-default-more-details-rows ${ isSelected ? 'is-selected' : '' }` }>
							{
								moreDetailsArray.map( ( row, index ) => {
									return (
										<div className={ `newsuk__pack-default-more-details-row ${ isSelected ? 'is-selected' : '' }` }>
											<div className="newsuk__pack-default-remove-button" onClick={ () => removeFromArrayWrapper( moreDetailsArray, index, 'moreDetailsArray' ) }><Icon icon="plus" size={ 32 } /></div>
											<ContentEditable
												className="newsuk__pack-default-more-details-title"
												html={ row.title }
												onChange={ ( e ) => editMoreDetailsRow( e.target.value, index, 'title' ) }
											/>
											<ContentEditable
												className="newsuk__pack-default-more-details-description"
												html={ row.description }
												onChange={ ( e ) => editMoreDetailsRow( e.target.value, index, 'description' ) }
											/>
										</div>
									);
								} )
							}
							{ isSelected && <div className="button newsuk__pack-default-add-button" onClick={ addMoreDetailsRow }><Icon icon="plus" />Add more details</div> }
						</div>
					</div> }
				</div>
			</>
		);
	},
	save( props ) {
		const {
			attributes: {
				bannerDetails,
				bodyListArray,
				moreDetailsArray,
			},
		} = props;

		return (
			<div className="newsuk__pack-default">
				<div className="newsuk__pack-default-section newsuk__pack-default-section--banner">
					<div className="newsuk__pack-default-banner-title">{ bannerDetails.title }</div>
					{ !! bannerDetails.image && (
						<div className="newsuk__pack-default-banner-image-wrapper">
							<div className="newsuk__pack-default-banner-image-container">
								<img src={ bannerDetails.image } />
							</div>
						</div>
					) }
					<div className="newsuk__pack-default-banner-cost">
						<span className="newsuk__pack-default-banner-price">{ bannerDetails.price }</span>
						<span className="newsuk__pack-default-banner-frequency">{ bannerDetails.frequency }</span>
					</div>
					{ !! bannerDetails.subBillingInformation && <>
						<div className="newsuk__pack-default-banner-billing-information">Billing Information</div>
						<div className="newsuk__pack-default-banner-sub-billing-information">{ bannerDetails.subBillingInformation }</div>
					</> }
				</div>
				{ !! bodyListArray && <div className="newsuk__pack-default-section newsuk__pack-default-section--body">
					<div className="newsuk__pack-default-body-list-rows">
						{ bodyListArray.map( ( row, index ) => {
							return (
								<div key={ index } className="newsuk__pack-default-body-list-row">
									<div className="newsuk__pack-default-body-list-icon"><img src={ row.icon } /></div>
									<div className="newsuk__pack-default-body-list-description" dangerouslySetInnerHTML={ { __html: row.description } } />
								</div>
							)
						} ) }
					</div>
				</div> }
				{ !! moreDetailsArray && <div className="newsuk__pack-default-section newsuk__pack-default-section--more-details">
					<div className="newsuk__pack-default-more-details-button">Hide details</div>
					<div className="newsuk__pack-default-more-details-rows">
						{ moreDetailsArray.map( ( row, index ) => {
							return (
								<div key={ index } className="newsuk__pack-default-more-details-row">
									<div className="newsuk__pack-default-more-details-title" dangerouslySetInnerHTML={ { __html: row.title } } />
									<div className="newsuk__pack-default-more-details-description" dangerouslySetInnerHTML={ { __html: row.description } } />
								</div>
							)
						} ) }
					</div>
				</div> }
			</div>
		);
	},
} );