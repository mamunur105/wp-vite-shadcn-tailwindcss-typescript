<?php
/**
 * Frontend Area Hooks
 */

namespace WPVSTT\Hooks;

use WPVSTT\Traits\SingletonTrait;

/**
 * FrontEndHooks
 */
class FrontEndHooks {
	/**
	 * SingleTon
	 */
	use SingletonTrait;

	/**
	 * Constructor
	 */
	private function __construct() {
		$this->frontendmenu();
	}
	/**
	 * @return void
	 */
	public function frontendmenu() {
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_frontend_assets' ] );
	}

	/**
	 * Enqueue frontend assets.
	 *
	 * @return void
	 */
	public function enqueue_frontend_assets() {
		wp_enqueue_style( 'wpvstt-frontend' );
	}
}
