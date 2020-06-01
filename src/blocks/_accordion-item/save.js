import { RichText, InnerBlocks } from '@wordpress/block-editor';

export const save = ( props ) => {

	const {
		attributes: {
			heading,
		}
	} = props;

	return (
		<div>
			<div className="nuk-acc-item__wrapper">
				<div className="nuk-acc-item__text">
					<div className="nuk-acc-item__heading-wrapper">
						<RichText.Content
							tagName="div"
							className="nuk-acc-item__heading"
							value={ heading }
						/>
						<div class={ `nuk-acc-item__arrow` }>
							<svg xmlns="http://www.w3.org/2000/svg" width="14" height="8"><path fill="#069" fill-rule="evenodd" d="M13.119 1.23L6.594 4.594.127.775.09 1.797 6.435 8l6.648-5.75z"/></svg>
						</div>
					</div>
					<div className="nuk-acc-item__description">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		</div>
	);
};