<?php
namespace NewsUk\BlockRegistry\InternalBlocks;

class People_Card implements \NewsUk\BlockRegistry\Block_Registry {
	public function __construct() {
		add_action( 'init', array( $this, 'register_block' ) );
	}

	public static function get_block_attributes() {
		return array(
			'name' => array(
				'type' => 'string',
				'default' => '',
			),
			'info' => array(
				'type' => 'string',
				'default' => '',
			),
			'description' => array(
				'type' => 'string',
				'default' => '',
			),
			'backgroundColor' => array(
				'type' => 'string',
				'default' => '#fff',
			),
		);
	}
	

	public function register_block() {
		register_block_type( 'nuk/int-people-card', array(
			'editor_script' => 'nuk-blocks-js',
			'editor_style' => 'nuk-blocks-css',
			'style' => 'nuk-blocks-css',
			'attributes' => self::get_block_attributes(),
			'render_callback' => array( $this, 'render_callback' )
		) );
	}

	public function render_callback( $attributes, $content ) {
		return require PLUGIN_BLOCK_VIEW_PATH . 'people-card.php';
	}
}
