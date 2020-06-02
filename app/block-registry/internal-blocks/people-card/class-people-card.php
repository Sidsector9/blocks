<?php
namespace NewsUk\BlockRegistry\InternalBlocks;

require_once 'attributes.php';

class People_Card implements \NewsUk\BlockRegistry\Block_Registry {
	public function __construct() {
		add_action( 'init', array( $this, 'register_block' ) );
	}

	public function register_block() {
		register_block_type( 'nuk/int-people-card', array(
			'editor_script' => 'nuk-blocks-js',
			'editor_style' => 'nuk-blocks-css',
			'style' => 'nuk-blocks-css',
			'attributes' => \NewsUk\BlockRegistry\InternalBlocks\get_attributes(),
			'render_callback' => array( $this, 'render_callback' )
		) );
	}

	public function render_callback( $attributes, $content ) {
		return sprintf(
			'
				<div class="%s" style="background-color: %s">
					<div class="nuk-pc__name">%s</div>
					<div class="nuk-pc__info">%s</div>
					<div class="nuk-pc__description">%s</div>
				</div>
			',
			esc_attr( $attributes['className'] ),
			esc_attr( $attributes['backgroundColor'] ),
			wp_kses_post( $attributes['name'] ),
			wp_kses_post( $attributes['info'] ),
			wp_kses_post( $attributes['description'] ),
		);
	}
}
