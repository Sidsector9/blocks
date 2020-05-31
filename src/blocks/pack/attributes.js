export const attributes = {
	title: {
		type: 'string',
	},
	description: {
		type: 'string',
	},
	price: {
		type: 'string',
	},
	frequency: {
		type: 'string',
	},
	cta: {
		type: 'object',
		default: {
			text: '',
			url: '',
		}
	},
	packType: {
		type: 'string',
		default: 'no',
	},
	entitlements: {
		type: 'array',
		default: [],
	},
};