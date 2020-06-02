<?php
namespace NewsUk\BlockRegistry\Blocks;

require_once 'attributes.php';

class People_Card implements \NewsUk\BlockRegistry\Block_Registry {
	public function __construct() {
		add_action( 'init', array( $this, 'register_block' ) );
	}

	public function register_block() {
		register_block_type( 'nuk/people-card', array(
			'editor_script' => 'nuk-blocks-js',
			'editor_style' => 'nuk-blocks-css',
			'style' => 'nuk-blocks-css',
			'attributes' => \NewsUk\BlockRegistry\Blocks\get_attributes(),
			'render_callback' => array( $this, 'render_callback' )
		) );
	}

	public function render_callback( $attributes, $content ) {
		return $content;
	}
}
