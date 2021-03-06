<?php
/**
 * Plugin Name:     Newsuk Blocks
 * Plugin URI:      PLUGIN SITE HERE
 * Description:     PLUGIN DESCRIPTION HERE
 * Author:          Siddharth Thevaril
 * Author URI:      YOUR SITE HERE
 * Text Domain:     newsuk-blocks
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Newsuk_Blocks
 */

if ( ! defined( 'PLUGIN_DIR_PATH' ) ) {
	define( 'PLUGIN_DIR_PATH', plugin_dir_path( __FILE__ ) );
}

if ( ! defined( 'PLUGIN_BLOCK_VIEW_PATH' ) ) {
	define( 'PLUGIN_BLOCK_VIEW_PATH', plugin_dir_path( __FILE__ ) . '/app/block-registry/views/' );
}

if ( ! defined( 'PLUGIN_DIR_URL' ) ) {
	define( 'PLUGIN_DIR_URL', plugin_dir_url( __FILE__ ) );
}

if ( file_exists( PLUGIN_DIR_PATH . 'vendor/autoload.php' ) ) {
	require_once 'vendor/autoload.php';
}

require_once 'instances.php';
