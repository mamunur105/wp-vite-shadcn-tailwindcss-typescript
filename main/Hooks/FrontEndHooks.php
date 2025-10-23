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
	}
}
