<?php
/**
 * Config
 */

namespace BFWOO\Helpers;

// Do not allow directly accessing this file.
if ( ! defined( 'ABSPATH' ) ) {
	exit( 'This script cannot be accessed directly.' );
}

/**
 * Fns class
 */
class Config {
	/**
	 * Parent Menu Page Slug
	 */
	const MENU_PAGE_SLUG = 'bfwoo-variation';
	
	/**
	 * Nonce id
	 *
	 * @var string
	 */
	const NONCE_ID = 'bfwoo_wpnonce';
	/**
	 * Nonce Text
	 *
	 * @var string
	 */
	const NONCE_TEXT = 'bfwoo_nonce';
}
