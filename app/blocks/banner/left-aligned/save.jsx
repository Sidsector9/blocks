const { RichText } = wp.blockEditor;

export const save = ( props ) => {
	const {
		attributes: {
			title,
			subTitle,
			alignment,
			maxWidth
		}
	} = props;

	const STYLE_TITLE = {
		width: '100%',
		marginLeft: 'auto',
		marginRight: 'auto',
		maxWidth: `${ maxWidth }px`,
		textAlign: alignment,
	};

	return (
		<div>
			<div className="newsuk__bla-wrapper">
				<RichText.Content
					tagName="div"
					className="newsuk__bla-title"
					value={ title }
				/>
				<RichText.Content
					tagName="div"
					className="newsuk__bla-subtitle"
					value={ subTitle }
				/>
			</div>
		</div>
	);
};
