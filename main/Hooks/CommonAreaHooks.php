<?php
/**
 * Common Area Hooks
 */

namespace BFWOO\Hooks;

use BFWOO\Controllers\APIController;
use BFWOO\Controllers\AssetsController;
use BFWOO\Traits\SingletonTrait;

/**
 * CommonAreaHooks
 */
class CommonAreaHooks {
	/**
	 * Single Trait
	 */
	use SingletonTrait;

	/**
	 * Constructor
	 */
	private function __construct() {
		$this->load_assets();
	}
	/**
	 * Load Assets
	 *
	 * @return void
	 */
	public function load_assets() {
		add_action( 'admin_enqueue_scripts', [ AssetsController::instance(), 'register_admin_assets' ] );
		add_action( 'wp_enqueue_scripts', [ AssetsController::instance(), 'register_frontend_assets' ] );
		add_action( 'rest_api_init', [ APIController::instance(), 'register_rest_api_init' ] );
	}
}
