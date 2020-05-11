<?php
namespace NewsUk;

class Register_Blocks {
	public function __construct() {
		add_action( 'init', array( $this, 'register_blocks' ) );
		add_action( 'after_setup_theme', array( $this, 'add_theme_support' ) );
		add_filter( 'block_categories', array( $this, 'register_custom_category' ), 10, 2);
	}

	/**
	 * Loads JS/CSS assets on the block editor.
	 */
	public function register_blocks() {
		wp_register_script( 'newsuk-blocks-js', PLUGIN_DIR_URL . 'dist/js/newsuk-blocks.min.js', array( 'wp-blocks', 'wp-element' ), '1.0', true );
		wp_register_style( 'newsuk-blocks-css', PLUGIN_DIR_URL . 'dist/css/newsuk-blocks.min.css', array(), '1.0', 'all' );

		register_block_type( 'newsuk/title', array(
			'editor_script' => 'newsuk-blocks-js',
			'editor_style' => 'newsuk-blocks-css',
			'style' => 'newsuk-blocks-css',
		) );

		register_block_type( 'newsuk/subscription-card', array(
			'editor_script' => 'newsuk-blocks-js',
			'editor_style' => 'newsuk-blocks-css',
			'style' => 'newsuk-blocks-css',
		) );

		register_block_type( 'newsuk/banner', array(
			'editor_script' => 'newsuk-blocks-js',
			'editor_style' => 'newsuk-blocks-css',
			'style' => 'newsuk-blocks-css',
		) );

		register_block_type( 'newsuk/columns', array(
			'editor_script' => 'newsuk-blocks-js',
			'editor_style' => 'newsuk-blocks-css',
			'style' => 'newsuk-blocks-css',
		) );

		register_block_type( 'newsuk/pack-default', array(
			'editor_script' => 'newsuk-blocks-js',
			'editor_style' => 'newsuk-blocks-css',
			'style' => 'newsuk-blocks-css',
		) );
	}

	public function register_custom_category( $categories, $post ) {
		return array_merge(
			array(
				array(
					'slug' => 'newsuk',
					'title' => __( 'News Uk', 'newsuk-blocks' ),
				),
			),
			$categories
		);
	}

	public function add_theme_support() {
		add_theme_support( 'align-wide' );
	}
}