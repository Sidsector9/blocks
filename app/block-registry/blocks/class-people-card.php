<?php
namespace NewsUk\BlockRegistry\Blocks;

class People_Card implements \NewsUk\BlockRegistry\Block_Registry {
	public function __construct() {
		add_action( 'init', array( $this, 'register_block' ) );
	}

	public static function get_block_attributes() {
		return array(
			'align' => array(
				'type' => 'string',
				'default' => '',
			),
			'text' => array(
				'type' => 'string',
				'default' => '',
			),
			'textAlign' => array(
				'type' => 'string',
				'default' => '',
			),
			'fontSize' => array(
				'type' => 'number',
				'default' => 16,
			),
		);
	}

	public function register_block() {
		register_block_type( 'nuk/people-card', array(
			'editor_script' => 'nuk-blocks-js',
			'editor_style' => 'nuk-blocks-css',
			'style' => 'nuk-blocks-css',
			'attributes' => self::get_block_attributes(),
			'render_callback' => array( $this, 'render_callback' )
		) );
	}

	public function render_callback( $attributes, $content ) {
		return $content;
	}
}
