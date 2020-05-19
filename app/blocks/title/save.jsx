const { RichText } = wp.blockEditor;

export const save = ( props ) => {
	const { attributes: { titleText, alignment, maxWidth } } = props;

	const STYLE_TITLE = {
		width: '100%',
		marginLeft: 'auto',
		marginRight: 'auto',
		maxWidth: `${ maxWidth }px`,
		textAlign: alignment,
	};

	return (
		<RichText.Content
			tagName="div"
			style={ STYLE_TITLE }
			className="newsuk__title"
			value={ titleText }
		/>
	);
};
