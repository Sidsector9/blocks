<?php
namespace NewsUk\BlockRegistry\Blocks;

class Pack implements \NewsUk\BlockRegistry\Block_Registry {
	public function __construct() {
		add_action( 'init', array( $this, 'register_block' ) );
	}

	public static function get_block_attributes() {
		return array(
			'title' => array(
				'type' => 'string',
			),
			'description' => array(
				'type' => 'string',
			),
			'price' => array(
				'type' => 'string',
			),
			'frequency' => array(
				'type' => 'string',
			),
			'cta' => array(
				'type' => 'object',
				'default' => array(
					'text' => '',
					'url' => '',
				),
			),
			'packType' => array(
				'type' => 'string',
				'default' => 'no',
			),
			'packHighlightText' => array(
				'type' => 'string',
				'default' => ''
			),
			'entitlements' => array(
				'type' => 'array',
				'default' => [],
			),
		);
	}

	public function register_block() {
		register_block_type( 'nuk/int-pack', array(
			'editor_script' => 'nuk-blocks-js',
			'editor_style' => 'nuk-blocks-css',
			'style' => 'nuk-blocks-css',
			'attributes' => self::get_block_attributes(),
			'render_callback' => array( $this, 'render_callback' )
		) );
	}

	public function render_callback( $attributes, $content ) {
		return require PLUGIN_BLOCK_VIEW_PATH . 'pack.php';
	}
}
