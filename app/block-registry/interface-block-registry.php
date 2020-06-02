<?php
namespace NewsUk\BlockRegistry;

interface Block_Registry {
	public static function get_block_attributes();
	public function register_block();
	public function render_callback( $attributes, $content );
}

