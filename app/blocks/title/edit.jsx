const { RichText, BlockControls, AlignmentToolbar } = wp.blockEditor;
const { __ } = wp.i18n;

export const edit = ( props ) => {
	const {
		attributes: {
			titleText,
			alignment,
			maxWidth
		},
		setAttributes,
	} = props;

	const STYLE_TITLE = {
		maxWidth: `${ maxWidth }px`,
		width: '100%',
		marginLeft: 'auto',
		marginRight: 'auto',
		textAlign: alignment,
	};

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={ alignment }
					onChange={ ( newAlignment ) => setAttributes( { alignment: newAlignment === undefined ? 'none' : newAlignment } ) }
				/>
			</BlockControls>
			<RichText
				tagName="div"
				style={ STYLE_TITLE }
				value={ titleText }
				className="wp-block-newsuk-title--editor"
				onChange={ ( titleText ) => setAttributes( { titleText } ) }
				placeholder={ __( 'Add title...', 'newsuk-blocks' ) }
			/>
		</>
	);
};
