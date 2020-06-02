<?php
namespace NewsUk\BlockRegistry\InternalBlocks;

class Accordion_Item implements \NewsUk\BlockRegistry\Block_Registry {
	public function __construct() {
		add_action( 'init', array( $this, 'register_block' ) );
	}

	public static function get_block_attributes() {
		return array(
			'heading' => array(
				'type' => 'string',
				'default' => '',
			)
		);
	}

	public function register_block() {
		register_block_type( 'nuk/int-accordion-item', array(
			'editor_script' => 'nuk-blocks-js',
			'editor_style' => 'nuk-blocks-css',
			'style' => 'nuk-blocks-css',
			'attributes' => self::get_block_attributes(),
			'render_callback' => array( $this, 'render_callback' )
		) );
	}

	public function render_callback( $attributes, $content ) {
		return sprintf(
			'
			<div class="wp-block-nuk-int-accordion-item">
				<div class="nuk-acc-item__wrapper">
					<div class="nuk-acc-item__text">
						<div class="nuk-acc-item__heading-wrapper">
							<div class="nuk-acc-item__heading">%s</div>
							<div class="nuk-acc-item__arrow">
								<svg xmlns="http://www.w3.org/2000/svg" width="14" height="8"><path fill="#069" fill-rule="evenodd" d="M13.119 1.23L6.594 4.594.127.775.09 1.797 6.435 8l6.648-5.75z"/></svg>
							</div>
						</div>
						<div class="nuk-acc-item__description">%s</div>
					</div>
				</div>
			</div>
			',
			wp_kses_post( $attributes['heading'] ),
			wp_kses_post( $content )
		);
	}
}
