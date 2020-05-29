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
		wp_register_script( 'nuk-blocks-js', PLUGIN_DIR_URL . 'build/index.js', array( 'wp-blocks', 'wp-polyfill' ), '1.0', true );
		wp_register_style( 'nuk-blocks-css', PLUGIN_DIR_URL . 'build/index.css', array(), '1.0', 'all' );

		register_block_type( 'newsuk/title', array(
			'editor_script' => 'nuk-blocks-js',
			'editor_style' => 'nuk-blocks-css',
			'style' => 'nuk-blocks-css',
		) );

		register_block_type( 'newsuk/int-title', array(
			'editor_script' => 'nuk-blocks-js',
			'editor_style' => 'nuk-blocks-css',
			'style' => 'nuk-blocks-css',
		) );

		register_block_type( 'newsuk/banner', array(
			'editor_script' => 'nuk-blocks-js',
			'editor_style' => 'nuk-blocks-css',
			'style' => 'nuk-blocks-css',
		) );
	}

	public function register_custom_category( $categories, $post ) {
		return array_merge(
			array(
				array(
					'slug' => 'nuk',
					'title' => __( 'News Uk', 'nuk-blocks' ),
				),
			),
			$categories
		);
	}

	public function add_theme_support() {
		add_theme_support( 'align-wide' );
	}
}