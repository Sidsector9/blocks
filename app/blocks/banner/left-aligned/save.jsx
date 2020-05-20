const { RichText } = wp.blockEditor;

export const save = ( props ) => {
	const {
		attributes: {
			title,
			subTitle,
			marginBottom,
			imageUrl,
			overlay,
		}
	} = props;

	const STYLE_BLA = {
		marginBottom: `${ marginBottom }px`,
		backgroundImage: `url(${ imageUrl })`,
	};

	return (
		<div style={ STYLE_BLA }>
			<div className="newsuk-bla__overlay" style={ { backgroundColor: `rgba( ${ Object.values( overlay ).join( ',' ) } )` } }></div>
			<div className="newsuk-bla__wrapper">
				<RichText.Content
					tagName="div"
					className="newsuk-bla__title"
					value={ title }
				/>
				<RichText.Content
					tagName="div"
					className="newsuk-bla__subtitle"
					value={ subTitle }
				/>
			</div>
		</div>
	);
};
