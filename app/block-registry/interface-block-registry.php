<?php
namespace NewsUk\BlockRegistry;

interface Block_Registry {
	public function register_block();
	public function render_callback( $attributes, $content );
}

