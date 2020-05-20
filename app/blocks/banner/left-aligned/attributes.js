export const attributes = {
	title: {
		type: 'string',
		default: '',
	},
	subTitle: {
		type: 'string',
		default: '',
	},
	align: {
		type: 'string',
		default: 'full',
	},
	alignment: {
		type: 'string',
		default: 'none',
	},
	imageUrl: {
		type: 'string',
		default: '',
	},
	overlay: {
		type: 'object',
		default: {
			r: 0,
			g: 0,
			b: 0,
			a: 0,
		}
	}
};
