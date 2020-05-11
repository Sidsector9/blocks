import ContentEditable from 'react-contenteditable';
const { PanelBody, CheckboxControl, Icon } = wp.components;
const { InspectorControls, MediaUpload } = wp.blockEditor;
const { registerBlockType } = wp.blocks;

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

		const editBodyListRow = ( value, index, property ) => {
			console.log( value, index, property )
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
					{/* { banner && <div className="newsuk__pack-default-section newsuk__pack-default-section--banner">

					</div> } */}
					{ body && <div className="newsuk__pack-default-section newsuk__pack-default-section--body">
						<div className="newsuk__pack-default-body-list-rows">
							{
								bodyListArray.map( ( row, index ) => {
									return (
										<div className={ `newsuk__pack-default-body-list-row ${ isSelected ? 'is-selected' : '' }` }>
											<div className="newsuk__pack-default-remove-button" onClick={ addBodyListRow }><Icon icon="plus" size={ 32 } /></div>
											<MediaUpload
												onSelect={ ( value ) => editBodyListRow( value.sizes.full.url, index, 'icon' ) }
												render={ ( { open } ) => {
													return <div className="newsuk__pack-default-body-list-icon" onClick={ open }>{ !! row.icon ? <img src={ row.icon } /> : <Icon icon="camera" /> }</div>
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
						<div className="newsuk__pack-default-more-details-button">Show More</div>
						<div className="newsuk__pack-default-more-details-rows">
							{
								moreDetailsArray.map( ( row, index ) => {
									return (
										<div className={ `newsuk__pack-default-more-details-row ${ isSelected ? 'is-selected' : '' }` }>
											<div className="newsuk__pack-default-remove-button" onClick={ addBodyListRow }><Icon icon="plus" size={ 32 } /></div>
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
				banner,
				body,
				moreDetails,
				bodyListArray,
				moreDetailsArray,
			},
			className
		} = props;

		return (
			<div className="newsuk__pack-default">
				<div className="newsuk__pack-default-section newsuk__pack-default-section--body">
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
				</div>
				<div className="newsuk__pack-default-section newsuk__pack-default-section--more-details">
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
				</div>
			</div>
		);
	},
} );
