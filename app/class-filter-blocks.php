<?php
namespace NewsUk;

class Filter_Blocks {
	public function __construct() {
		add_filter( 'render_block', array( $this, 'render_block' ), 10, 2 );
	}

	public function render_block( $block_content, $block ) {
		switch ( $block['attrs']['blockVisibility'] ) {
			case '0':
				return '';

			case '1':
				if ( is_user_logged_in() ) {
					return $block_content;
				} else {
					return '';
				}

			case '2':
				if ( ! is_user_logged_in() ) {
					return $block_content;
				} else {
					return '';
				}

			case '3':
				return $block_content;
		}

		return $block_content;
	}
}
