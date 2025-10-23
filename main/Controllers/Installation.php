<?php


namespace WPVSTT\Controllers;

// Do not allow directly accessing this file.
use WPVSTT\Helpers\Fns;

if ( ! defined( 'ABSPATH' ) ) {
	exit( 'This script cannot be accessed directly.' );
}

/**
 * Installation class.
 */
class Installation {
	/**
	 * @return void
	 */
	public static function activate() {
	}
	/**
	 * @return void
	 */
	public static function deactivation() {
		Fns::clear_scheduled_events();
	}
	/**
	 * @return void
	 */
	public static function migration() {
	}
}
