import ContentEditable from 'react-contenteditable'
import './columns.scss';

const { PanelBody, RangeControl, Icon } = wp.components;
const { registerBlockType } = wp.blocks;
const {
	MediaUpload,
	InspectorControls,
} = wp.blockEditor;

registerBlockType( 'newsuk/columns', {
	title: 'Columns',
	icon: 'universal-access-alt',
	category: 'newsuk',
	supports: {
		align: true,
	},
	attributes: {
		columnCount: {
			type: 'number',
			default: 1,
		},
		columnItems: {
			type: 'array',
			default: []
		}
	},
	edit( props ) {
		const { attributes: { columnCount, columnItems }, setAttributes, className } = props;
		const columnsArray = [];

		for ( let i = 0; i < columnCount; i++ ) {
			columnsArray.push( 
				<div className="newsuk__column-item">
					<div class="newsuk__column-image-container" style={ {
						backgroundImage: `url( ${ columnItems[ i ]?.columnImage } )`
					} }>
						<MediaUpload 
							onSelect={ ( value ) => {
								const updatedColumnItems = [ ...columnItems ];
								if ( ! updatedColumnItems[ i ] ) {
									updatedColumnItems[ i ] = {
										columnImage: value.sizes.full.url,
									}
								} else {
									updatedColumnItems[ i ].columnImage = value.sizes.full.url;
								}
								setAttributes( { columnItems: updatedColumnItems } )
							} }
							render={ ( { open } ) => {
								return <div className="newsuk__column-image-placeholder" onClick={ open }><Icon icon="camera" /></div>
							} }
						/>
					</div>
					<div className="newsuk__column-meta">
						<ContentEditable
							className="newsuk__column-title"
							onChange={ ( e ) => {
								const updatedColumnItems = [ ...columnItems ];
								if ( ! updatedColumnItems[ i ] ) {
									updatedColumnItems[ i ] = {
										columnTitle: e.target.value,
									}
								} else {
									updatedColumnItems[ i ].columnTitle = e.target.value;
								}
								setAttributes( { columnItems: updatedColumnItems } )
							} }
							html={ columnItems[ i ]?.columnTitle ? columnItems[ i ].columnTitle : '' }
							tagName="div"
						/>
						<ContentEditable
							className="newsuk__column-description"
							onChange={ ( e ) => {
								const updatedColumnItems = [ ...columnItems ];
								if ( ! updatedColumnItems[ i ] ) {
									updatedColumnItems[ i ] = {
										columnDescription: e.target.value,
									}
								} else {
									updatedColumnItems[ i ].columnDescription = e.target.value;
								}
								setAttributes( { columnItems: updatedColumnItems } )
							} }
							html={ columnItems[ i ]?.columnDescription ? columnItems[ i ].columnDescription : '' }
							tagName="div"
						/>
					</div>
				</div>
			);
		}

		return (
			<>
				<InspectorControls>
					<PanelBody title="Columns Settings" initialOpen={ true }>
						<p>Column count</p>
						<RangeControl
							label="Columns"
							value={ columnCount }
							onChange={ ( value ) => setAttributes( { columnCount: value } ) }
							min={ 1 }
							max={ 4 }
						/>
					</PanelBody>
				</InspectorControls>
				<div className={ className }>
					{ columnsArray }
				</div>
			</>
		);
	},
	save( props ) {
		const { attributes: { columnCount, columnItems } } = props;
		const columnsArray = [];

		for ( let i = 0; i < columnCount; i++ ) {
			columnsArray.push(
				<div className="newsuk__column-item">
					<div class="newsuk__column-image-container" style={ {
						backgroundImage: `url( ${ columnItems[ i ]?.columnImage } )`
					} }>
					</div>
					<div className="newsuk__column-meta">
						<div className="newsuk__column-title" dangerouslySetInnerHTML={ { __html: columnItems[ i ].columnTitle } } />
						<div className="newsuk__column-description" dangerouslySetInnerHTML={ { __html: columnItems[ i ].columnDescription } } />
					</div>
				</div>
			);
		}

		return (
			<div>
				{ columnsArray }
			</div>
		)
	},
} );
