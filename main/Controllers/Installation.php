<?php


namespace WPVSTT\Controllers;

// Do not allow directly accessing this file.
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
		wp_clear_scheduled_hook( 'tsmlt_upload_dir_scan' );
	}
	/**
	 * @return void
	 */
	public static function migration() {
	}
}
