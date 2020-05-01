import './title.scss';

const { registerBlockType } = wp.blocks;

registerBlockType( 'newsuk/title', {
	title: 'Title',
	icon: 'universal-access-alt',
	category: 'newsuk',
	supports: {
		align: true,
	},
	edit() {
		return <h3 className='newsuk__title'>Hello World, step 1 (from the editor).</h3>;
	},
	save() {
		return null;
	},
} );