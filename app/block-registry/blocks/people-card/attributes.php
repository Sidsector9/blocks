<?php
namespace NewsUk\BlockRegistry\Blocks;

function get_attributes() {
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
