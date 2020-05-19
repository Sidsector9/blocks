export const attributes = {
	title: {
		type: 'string',
		source: 'html',
		selector: '.newsuk-sc__title',
		default: '',
	},
	description: {
		type: 'string',
		source: 'html',
		selector: '.newsuk-sc__description',
		default: '',
	},
	imageUrl: {
		type: 'string',
		default: '',
	},
};
