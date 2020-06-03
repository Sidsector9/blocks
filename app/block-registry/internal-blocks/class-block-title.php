<?php
namespace NewsUk\BlockRegistry\InternalBlocks;
use \NewsUk\Helper_Methods as HM;

class Block_Title implements \NewsUk\BlockRegistry\Block_Registry {
	public function __construct() {
		add_action( 'init', array( $this, 'register_block' ) );
	}

	public static function get_block_attributes() {
		return array(
			'text' => array(
				'type' => 'string',
				'default' => '',
			),
			'textAlign' => array(
				'type' => 'string',
				'default' => 'left',
			),
			'fontSize' => array(
				'type' => 'number',
				'default' => 16,
			),
		);
	}
	

	public function register_block() {
		register_block_type( 'nuk/int-block-title', array(
			'editor_script' => 'nuk-blocks-js',
			'editor_style' => 'nuk-blocks-css',
			'style' => 'nuk-blocks-css',
			'attributes' => self::get_block_attributes(),
			'render_callback' => array( $this, 'render_callback' )
			) );
		}
		
	public function render_callback( $attributes, $content ) {
		$style_text = array(
			'font-size' => "{$attributes['fontSize']}px",
			'text-align' => "{$attributes['textAlign']}",
		);
		
		$style_text = HM::assoc_array_to_inline_style( $style_text );

		return require PLUGIN_BLOCK_VIEW_PATH . 'block-title.php';
	}
}
