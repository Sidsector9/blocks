export const attributes = {
	align: {
		type: 'string',
		default: 'full',
	},
	backgroundColor: {
		type: 'string',
		default: '#f3f3f4',
	},
	isBgSelected: {
		type: 'boolean',
		default: false,
	},
	bgImageUrl: {
		type: 'string',
		default: '',
	},
	bgType: {
		type:'string',
		default: '',
	},
	focalPoint: {
		type: 'object',
		default: {
			x: 0.5,
			y: 0.5,
		}
	},
	bannerTextPosition: {
		type: 'string',
		default: '1',
	},
	layout: {
		type: 'string',
		default: 'nuk-fit-container',
	},
	textWrapperWidth: {
		type: 'number',
		default: 100,
	},
	textWrapperAlign: {
		type: 'string',
		default: 'flex-start',
	},
};