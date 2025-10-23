<?php
/**
 * Functions
 */
namespace BFWOO\Helpers;

// Do not allow directly accessing this file.

if ( ! defined( 'ABSPATH' ) ) {
	exit( 'This script cannot be accessed directly.' );
}

/**
 * Fns class
 */
class Fns {
	/**
	 * @var array
	 */
	private static $cache = [];
	/**
	 * Assets url generate with given assets file
	 *
	 * @param string $file File.
	 *
	 * @return string
	 */
	public static function get_assets_uri( $file ) {
		$file = ltrim( $file, '/' );
		return trailingslashit( BFWOO_DIR_URL . 'assets' ) . $file;
	}
	/**
	 * Options
	 */
	public static function get_options() {
		return get_option( 'bfwoo_settings', [] );
	}
}
