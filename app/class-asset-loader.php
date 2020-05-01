<?php
namespace App;

class Asset_Loader {
	public function __construct() {
		add_action( 'enqueue_block_editor_assets', array( $this, 'block_assets_loader' ) );
	}

	/**
	 * Loads JS/CSS assets on the block editor.
	 */
	public function block_assets_loader() {
		wp_enqueue_script( 'newsuk-blocks-js', PLUGIN_DIR_URL . 'dist/js/newsuk-blocks.min.js' );
	}
}
