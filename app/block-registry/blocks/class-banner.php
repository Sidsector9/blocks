<?php
namespace NewsUk\BlockRegistry\Blocks;
use \NewsUk\Helper_Methods as HM;

class Banner implements \NewsUk\BlockRegistry\Block_Registry {
	public function __construct() {
		add_action( 'init', array( $this, 'register_block' ) );
	}

	public static function get_block_attributes() {
		return array(
			'align' => array(
				'type' => 'string',
				'default' => 'full',
			),
			'backgroundColor' => array(
				'type' => 'string',
				'default' => '#f3f3f4',
			),
			'isBgSelected' => array(
				'type' => 'boolean',
				'default' => false,
			),
			'bgImageUrl' => array(
				'type' => 'string',
				'default' => '',
			),
			'bgType' => array(
				'type' =>'string',
				'default' => '',
			),
			'focalPoint' => array(
				'type' => 'object',
				'default' => array(
					'x' => 0.5,
					'y' => 0.5,
				),
			),
			'bannerTextPosition' => array(
				'type' => 'string',
				'default' => '1',
			),
			'layout' => array(
				'type' => 'string',
				'default' => 'nuk-fit-container',
			),
			'textWrapperWidth' => array(
				'type' => 'number',
				'default' => 100,
			),
			'textWrapperAlign' => array(
				'type' => 'string',
				'default' => 'flex-start',
			),
		);
	}

	public function register_block() {
		register_block_type( 'nuk/banner', array(
			'editor_script' => 'nuk-blocks-js',
			'editor_style' => 'nuk-blocks-css',
			'style' => 'nuk-blocks-css',
			'attributes' => self::get_block_attributes(),
			'render_callback' => array( $this, 'render_callback' )
		) );
	}

	public function render_callback( $attributes, $content ) {
		$style_banner = array(
			'background-color' => $attributes['backgroundColor'],
			'background-image' => "url( {$attributes['bgImageUrl']} )",
			'min-height' => $attributes['isBgSelected'] ? '400px' : null,
			'background-position' => sprintf( "%s%% %s%%", $attributes['focalPoint']['x'] * 100, $attributes['focalPoint']['y'] * 100 ),
		);

		$style_text_out_wr = array(
			'justify-content' => $attributes['textWrapperAlign'],
		);

		$style_text_in_wr = array(
			'width' => "{$attributes['textWrapperWidth']}%",
		);

		$style_banner = HM::assoc_array_to_inline_style( $style_banner );
		$style_text_out_wr = HM::assoc_array_to_inline_style( $style_text_out_wr );
		$style_text_in_wr = HM::assoc_array_to_inline_style( $style_text_in_wr );

		return require_once PLUGIN_BLOCK_VIEW_PATH . 'banner.php';
	}
}
