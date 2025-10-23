<?php
/**
 * Frontend Area Hooks
 */

namespace BFWOO\Hooks;

use BFWOO\Traits\SingletonTrait;

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
