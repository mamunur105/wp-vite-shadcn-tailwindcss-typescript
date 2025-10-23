<?php

namespace BFWOO\Controllers;

use BFWOO\Helpers\Config;
use BFWOO\Helpers\Fns;
use BFWOO\Traits\SingletonTrait;

/**
 * AdminController
 */
class AdminController {
	/**
	 * SingletonTrait
	 */
	use SingletonTrait;

	/**
	 * Menu
	 */
	public function add_menu_page() {
		add_submenu_page(
			'woocommerce',
			'Badges Settings',
			'Badges Settings',
			'manage_options',
			Config::MENU_PAGE_SLUG,
			[ $this, 'render_custom_page_callback' ]
		);
	}

	/**
	 * @return void
	 */
	public function render_custom_page_callback() {
		wp_dequeue_script( 'common' );
		wp_dequeue_script( 'svg-painter' );
		wp_enqueue_script( 'bfwoo-settings' );
		wp_enqueue_style( 'bfwoo-settings' );
		wp_localize_script( 'bfwoo-settings', 'bfwoo_settings', Fns::get_options() );
		?>
		<div id="bfwoo-settings">Hello</div>
		<?php
	}
}
