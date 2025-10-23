<?php
/**
 * Main initialization class.
 *
 * @package WPVSTT
 */

namespace WPVSTT;

// Do not allow directly accessing this file.
use WPVSTT\Hooks\AdminHooks;
use WPVSTT\Hooks\CommonAreaHooks;
use WPVSTT\Hooks\FrontEndHooks;
use WPVSTT\Traits\SingletonTrait;

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
		do_action( 'wpvstt/before_init' );
		AdminHooks::instance();
		CommonAreaHooks::instance();
		FrontEndHooks::instance();
		do_action( 'wpvstt/after_init' );
	}
	/**
	 * Checks if Pro version installed
	 *
	 * @return boolean
	 */
	public function has_pro() {
		return function_exists( 'WPVSTT_PRO' );
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
