<?php
/**
 * Functions
 */
namespace WPVSTT\Helpers;

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
		return trailingslashit( WPVSTT_DIR_URL . 'assets' ) . $file;
	}
	/**
	 * Options
	 */
	public static function get_options() {
		return get_option( 'wpvstt_settings', [] );
	}

	/**
	 * Action.
	 *
	 * @param string $action action.
	 * @return void
	 */
	public static function add_to_scheduled_hook_list( $action ) {
		if ( empty( $action ) ) {
			return;
		}
		$schedule   = get_option( 'wpvstt_cron_schedule', [] );
		$schedule[] = $action;
		update_option( 'wpvstt_cron_schedule', array_unique( $schedule ) );
	}
	/**
	 * Clear Scheduled Events
	 *
	 * @return void
	 */
	public static function clear_scheduled_events() {
		$schedule = get_option( 'wpvstt_cron_schedule', [] );
		if ( empty( $schedule ) ) {
			return;
		}
		foreach ( $schedule as $v ) {
			wp_clear_scheduled_hook( $v );
		}
	}
}
