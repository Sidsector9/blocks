<?php
namespace NewsUk\BlockRegistry\InternalBlocks;

function get_attributes() {
	return array(
		'name' => array(
			'type' => 'string',
			'default' => '',
		),
		'info' => array(
			'type' => 'string',
			'default' => '',
		),
		'description' => array(
			'type' => 'string',
			'default' => '',
		),
		'backgroundColor' => array(
			'type' => 'string',
			'default' => '#fff',
		),
	);
}
