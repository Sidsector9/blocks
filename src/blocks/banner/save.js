import { InnerBlocks } from '@wordpress/block-editor';

export const save = ( props ) => {
	const {
		attributes: {
			isBgSelected,
			layout,
			backgroundColor,
			bgImageUrl,
			bgType,
			focalPoint,
			textWrapperWidth,
			textWrapperAlign,
		}
	} = props;

	const STYLE_TXT_INN_WR = {
		width: `${ textWrapperWidth }%`,
	}

	return (
		<InnerBlocks.Content />
	)
};
