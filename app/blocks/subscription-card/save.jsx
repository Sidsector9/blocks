const { RichText } = wp.blockEditor;
const { __ } = wp.i18n;

export const save = ( props ) => {
	const {
		attributes: {
			imageUrl,
			title,
			description,
			maxWidth,
			marginBottom,
		},
	} = props;

	const STYLE_SC = {
		maxWidth: `${ maxWidth }px`,
		marginLeft: 'auto',
		marginRight: 'auto',
		marginBottom: marginBottom ? '40px' : undefined,
	}

	return (
		<div style={ STYLE_SC }>
			<div className="newsuk-sc__image-wrapper">
			<img src={ imageUrl } />
		</div>
			<div className="newsuk-sc__meta">
				<RichText.Content
					tagName="div"
					className="newsuk-sc__title"
					value={ title }
				/>
				<RichText.Content
					tagName="div"
					className="newsuk-sc__description"
					value={ description }
				/>
			</div>
		</div>
	);
};
