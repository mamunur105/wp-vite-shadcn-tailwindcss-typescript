<?php
/**
 * Admin Area Hooks
 */

namespace BFWOO\Hooks;

use BFWOO\Controllers\AdminController;
use BFWOO\Traits\SingletonTrait;

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
