const { RichText, MediaUpload } = wp.blockEditor;
const { Icon } = wp.components;
const { __ } = wp.i18n;

import './subscription-card.scss';

export const edit = ( props ) => {
	// console.log( props.attributes )
	const {
		attributes: {
			imageUrl,
			title,
			description,
			maxWidth,
			marginBottom,
		},
		setAttributes,
	} = props;

	const STYLE_SC = {
		maxWidth: `${ maxWidth }px`,
		marginLeft: 'auto',
		marginRight: 'auto',
		marginBottom: 0 === marginBottom ? undefined : `${ marginBottom }px`,
	}

	return (
		<div style={ STYLE_SC } className="wp-block-newsuk-subscription-card--editor">
			<MediaUpload
				onSelect={ ( value ) => { setAttributes( { imageUrl: value.sizes.full.url } ); } }
				render={ ( { open } ) => {
					return !! imageUrl ? (
						<div className="newsuk-sc__image-wrapper">
							<div className="newsuk-sc__image-controls">
								<Icon className="newsuk-sc__control-button" icon="edit" size="32" onClick={ open } />
								<Icon className="newsuk-sc__control-button" icon="no" size="32" onClick={ () => setAttributes( { imageUrl: '' } ) } />
							</div>
							<img src={ imageUrl } />
						</div>
					) : (
						<div className="newsuk-sc__image-wrapper" onClick={ open }>
							<div className="newsuk-sc__image-placeholder">
								<Icon icon="camera" size="64" />
							</div>
						</div>
					)
				} }
			/>
			<div className="newsuk-sc__meta">
				<RichText
					tagName="div"
					className="newsuk-sc__title"
					formattingControls={ [ 'bold', 'italic' ] }
					value={ title }
					placeholder={ __( 'Edit title...', 'newsuk-blocks' ) }
					onChange={ ( ( title ) => setAttributes( { title } ) ) }
				/>
				<RichText
					tagName="div"
					className="newsuk-sc__description"
					formattingControls={ [ 'bold', 'italic' ] }
					value={ description }
					placeholder={ __( 'Edit description...', 'newsuk-blocks' ) }
					onChange={ ( ( description ) => setAttributes( { description } ) ) }
				/>
			</div>
		</div>
	);
};
