const { RichText, BlockControls, AlignmentToolbar } = wp.blockEditor;
const { Modal } = wp.components;
const { __ } = wp.i18n;

export const edit = ( props ) => {
	const {
		attributes: {
			title,
			subTitle,
			alignment,
			maxWidth,
			marginBottom,
		},
		setAttributes,
		isSelected,
	} = props;

	const STYLE_BLA = {
		width: '100%',
		maxWidth: `${ maxWidth }px`,
		marginBottom: `${ marginBottom }px`
	};

	return (
		<div class="wp-block-newsuk-banner-left--editor">
			<div className="newsuk__bla-wrapper">
				{ ( isSelected || !! title || subTitle ) && ( <>
					<RichText
						className="newsuk__bla-title"
						tagName="div"
						value={ title }
						onChange={ ( title ) => setAttributes( { title } ) }
						placeholder={ __( 'Add title...', 'newsuk-blocks' ) }
					/>
					<RichText
						className="newsuk__bla-subtitle"
						tagName="div"
						value={ subTitle }
						onChange={ ( subTitle ) => setAttributes( { subTitle } ) }
						placeholder={ __( 'Add subtitle...', 'newsuk-blocks' ) }
					/>
				</> ) }
			</div>
		</div>
	);
};
