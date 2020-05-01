import './subscription-card.scss';

const { registerBlockType } = wp.blocks;
const {
	RichText,
	MediaUpload
} = wp.blockEditor;

const {
	PanelBody,
	ColorPicker,
} = wp.components;

registerBlockType( 'newsuk/subscription-card', {
	title: 'Subscription Card',
	icon: 'universal-access-alt',
	category: 'newsuk',
	supports: {
		align: true,
	},
	attributes: {
		titleText: {
			type: 'array',
            source: 'children',
            selector: 'h5',
		},
		subscriptionImage: {
			type: 'string',
		},
		subscriptionHeading: {
			type: 'string',
		},
		subscriptionDescription: {
			type: 'string',
		},
	},
	edit( props ) {
		const { attributes: { subscriptionHeading, subscriptionDescription, subscriptionImage }, setAttributes } = props;

		return (
			<>
				<div className="newsuk__subscription-card">
					<div className="newsuk__subscription-card-image">
						<MediaUpload 
							onSelect={ ( value ) => { setAttributes( { subscriptionImage: value.sizes.full.url } ); console.log( value.url ) } }
							render={ ( { open } ) => {
								return <div className="newsuk__subscription-card-image__container"
									style={ {
										background: `url( ${ subscriptionImage } )`
									} }
									onClick={ open }
								/>;
							} }
						/>
					</div>
					<RichText
						tagName="h5"
						onChange={ ( value ) => setAttributes( { subscriptionHeading: value } ) }
						value={ subscriptionHeading }
						placeholder="Heading..."
					/>
					<RichText
						tagName="div"
						onChange={ ( value ) => setAttributes( { subscriptionDescription: value } ) }
						value={ subscriptionDescription }
						placeholder="Description..."
					/>
				</div>
			</>
		);
	},
	save( props ) {
		const { attributes: { subscriptionHeading, subscriptionDescription, subscriptionImage } } = props;

		return (
			<div className="newsuk__subscription-card">
				<div className="newsuk__subscription-card-image">
					<div className="newsuk__subscription-card-image__container" style={ { background: `url( ${ subscriptionImage } )` } }></div>
				</div>
				<RichText.Content tagName="h5" value={ subscriptionHeading } />
				<RichText.Content tagName="div" value={ subscriptionDescription } />
			</div>
		);
	},
} );