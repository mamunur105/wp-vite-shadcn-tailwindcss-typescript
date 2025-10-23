<?php
/**
 * Admin Area Hooks
 */

namespace WPVSTT\Hooks;

use WPVSTT\Controllers\AdminController;
use WPVSTT\Traits\SingletonTrait;

/**
 * Admin Hooks
 */
class AdminHooks {

	use SingletonTrait;

	/**
	 * Constructor
	 */
	private function __construct() {
		$this->adminmenu();
	}

	/**
	 * @return void
	 */
	public function adminmenu() {
		add_action( 'admin_menu', [ AdminController::instance(), 'add_menu_page' ], 15 );
	}
}
