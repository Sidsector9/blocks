<?php
namespace NewsUk;

class Helper_Methods {
	public static function assoc_array_to_inline_style( $assoc_array ) {
		if ( ! is_array( $assoc_array ) ) {
			return;
		}
	
		return implode( array_map( function( $key, $value ) {;
			return sprintf( '%s:%s', $key, $value );
		}, array_keys( $assoc_array ), $assoc_array ), ';' );
	}
}
