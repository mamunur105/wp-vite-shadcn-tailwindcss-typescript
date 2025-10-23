<?php

namespace WPVSTT\Controllers;

use WPVSTT\Helpers\Config;
use WPVSTT\Helpers\Fns;
use WPVSTT\Traits\SingletonTrait;

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
		wp_enqueue_script( 'wpvstt-settings' );
		wp_enqueue_style( 'wpvstt-settings' );
		wp_localize_script( 'wpvstt-settings', 'wpvstt_settings', Fns::get_options() );
		?>
		<div id="wpvstt-settings">Hello</div>
		<?php
	}
}
