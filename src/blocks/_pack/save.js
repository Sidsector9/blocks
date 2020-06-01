import {
	RichText,
} from '@wordpress/block-editor';

import { Icon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export const save = ( props ) => {

	const {
		attributes: {
			title,
			description,
			price,
			frequency,
			cta,
			packType,
			entitlements,
			packHighlightText,
		},
	} = props;

	return (
		<div className={ `wp-block-nuk-pack--${ packType }` }>
			{ 'yes' === packType && packHighlightText && <div className="nuk-pack__highlight-text">{ packHighlightText }</div> }
			<div className="nuk-pack__intro">
				<RichText.Content
					tagName="div"
					className="nuk-pack__pack-title"
					value={ title }
				/>
				<RichText.Content
					tagName="div"
					className="nuk-pack__pack-description"
					value={ description }
				/>
			</div>
			<div className="nuk-pack__pricing">
				<RichText.Content
					tagName="div"
					className="nuk-pack__price"
					value={ price }
				/>
				<RichText.Content
					tagName="div"
					className="nuk-pack__frequency"
					value={ frequency }
				/>
				<a href={ cta.url } className="nuk-pack__cta">{ cta.text }</a>
			</div>
			<div className="nuk-pack__entitlements">
				<div className="nuk-pack__entitlements-title">{ __( "What's included", 'nuk-blocks' ) }</div>
				{
					entitlements.map( ( entitlement, index ) => {
						const {
							text,
							icon,
							isImage,
						} = entitlement;

						return (
							<div className="nuk-pack__entitlement-row">
								<div className={ `nuk-pack__entitlement-row-wrapper nuk-pack__entitlement-row-wrapper--${ icon }` }>
									{ 'yes' === icon && <Icon className="nuk-pack__entitlement-icon" icon="yes" size={ 32 } /> }
									{ 'no' === icon && <Icon className="nuk-pack__entitlement-icon" icon="no-alt" size={ 32 } /> }
									<RichText.Content
										tagName="div"
										className="nuk-pack__entitlement-item"
										value={ text }
									/>
								</div>
							</div>
						);
					} )
				}
			</div>
		</div>
	);
};