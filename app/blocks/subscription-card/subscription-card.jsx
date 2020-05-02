import ContentEditable from 'react-contenteditable'
import './subscription-card.scss';

const { Icon, PanelBody, ToggleControl, TextControl } = wp.components;
const { registerBlockType } = wp.blocks;
const {
	MediaUpload,
	InspectorControls,
} = wp.blockEditor;

registerBlockType( 'newsuk/subscription-card', {
	title: 'Subscription Card',
	icon: 'universal-access-alt',
	category: 'newsuk',
	supports: {
		align: true,
	},
	attributes: {
		subscriptionImage: {
			type: 'string',
			source: 'attribute',
			attribute: 'src',
			selector: '.newsuk__subscription-image',
			default: '',
		},
		subscriptionHeading: {
			type: 'string',
            source: 'text',
			selector: '.newsuk__subscription-heading',
			default: 'Headline...',
		},
		subscriptionDescription: {
			type: 'string',
            source: 'text',
			selector: '.newsuk__subscription-description',
			default: 'Description...',
		},
		openExternally: {
			type: 'boolean',
			default: false,
		},
		subscriptionHyperlink: {
			type: 'string',
		}
	},
	edit( props ) {
		const {
			attributes: {
				subscriptionHeading,
				subscriptionDescription,
				subscriptionImage,
				openExternally,
				subscriptionHyperlink,
			},
			className,
			setAttributes,
		} = props;

		return (
			<>
				<InspectorControls>
					<PanelBody title="Subscription Card Settings" initialOpen={ true }>
						<p>Hyperlink</p>
						<TextControl
							value={ subscriptionHyperlink }
							onChange={ ( value ) => { setAttributes( { subscriptionHyperlink: value } ) } }
						/>
						<ToggleControl
							label="Open in a tab"
							checked={ openExternally }
							onChange={ ( value ) => {
								setAttributes( { openExternally: value } )
							} }
						/>
					</PanelBody>
				</InspectorControls>
				<div class={ className }>
					<div class="newsuk__subscription-image-container">
						<MediaUpload 
							onSelect={ ( value ) => { setAttributes( { subscriptionImage: value.sizes.full.url } ); console.log( value.url ) } }
							render={ ( { open } ) => {
								return !! subscriptionImage ? <img src={ subscriptionImage } onClick={ open } /> : <div className="newsuk__subscription-image-placeholder" onClick={ open }><Icon icon="camera" /></div>
							} }
						/>
					</div>
					<div class="newsuk__subscription-details">
						<ContentEditable
							className="newsuk__subscription-heading"
							onChange={ ( e ) => setAttributes( { subscriptionHeading: e.target.value } ) }
							html={ subscriptionHeading }
							tagName="div"
						/>
						<ContentEditable
							className="newsuk__subscription-description"
							onChange={ ( e ) => setAttributes( { subscriptionDescription: e.target.value } ) }
							html={ subscriptionDescription }
							tagName="div"
						/>
					</div>
				</div>
			</>
		);
	},
	save( props ) {
		const { attributes: { subscriptionHeading, subscriptionDescription, subscriptionImage, openExternally, subscriptionHyperlink } } = props;

		return (
			<div>
				<div class="newsuk__subscription-image-container">
					<img className="newsuk__subscription-image" src={ subscriptionImage } />
				</div>
				<div class="newsuk__subscription-details">
					<div className="newsuk__subscription-heading" dangerouslySetInnerHTML={ { __html: subscriptionHeading } } />
					<div className="newsuk__subscription-description" dangerouslySetInnerHTML={ { __html: subscriptionDescription } } />
				</div>
			</div>
		)
	},
} );
