<?php
/**
 * Main initialization class.
 *
 * @package BFWOO
 */

namespace BFWOO;

// Do not allow directly accessing this file.
use BFWOO\Hooks\AdminHooks;
use BFWOO\Hooks\CommonAreaHooks;
use BFWOO\Hooks\FrontEndHooks;
use BFWOO\Traits\SingletonTrait;

if ( ! defined( 'ABSPATH' ) ) {
	exit( 'This script cannot be accessed directly.' );
}

/**
 * Main initialization class.
 */
final class BadgesForWoo {
	/**
	 * Post Type.
	 *
	 * @var string
	 */
	public $current_theme;

	/**
	 * Singleton
	 */
	use SingletonTrait;

	/**
	 * Class Constructor
	 */
	private function __construct() {
		$this->init();
	}

	/**
	 * Init
	 *
	 * @return void
	 */
	public function init() {
		do_action( 'bfwoo/before_init' );
		AdminHooks::instance();
		CommonAreaHooks::instance();
		FrontEndHooks::instance();
		do_action( 'bfwoo/after_init' );
	}
	/**
	 * Checks if Pro version installed
	 *
	 * @return boolean
	 */
	public function has_pro() {
		return function_exists( 'BFWOO_PRO' );
	}
	/**
	 * PRO Version URL.
	 *
	 * @return string
	 */
	public function pro_version_link() {
		return '#';
	}
}
