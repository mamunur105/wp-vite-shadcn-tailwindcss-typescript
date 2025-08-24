<?php
/**
 * Plugin Name: Vite shadcn tailwindcss typescript
 * Plugin URI: #
 * Description: Vite shadcn tailwindcss typescript
 * Version: 1.0
 * Author: mamunur105
 * Text Domain: wp-vite-shadcn-tailwindcss-typescript
 * Author URI: https://github.com/mamunur105
 * License: GPLv3
 * License URI: http://www.gnu.org/licenses/gpl-3.0.html
 */

define( 'PPNINJA_VERSION', '0.0.1' );

define( 'PPNINJA_FILE', __FILE__ );

define( 'PPNINJA_FILE_BASENAME', plugin_basename( PPNINJA_FILE ) );

define( 'PPNINJA_FILE_URL', plugins_url( '', PPNINJA_FILE ) );

define( 'PPNINJA_DIR_URL', plugin_dir_url(  PPNINJA_FILE ) );

define( 'PPNINJA_FILE_ABSPATH', dirname( PPNINJA_FILE ) );

define( 'PPNINJA_FILE_PATH', plugin_dir_path( __FILE__ ) );

class WVSTT {

	public function __construct() {
		add_action( 'admin_menu', [ $this, 'add_menu_page' ] );
		add_action( 'admin_enqueue_scripts', [ $this, 'register_admin_assets' ] );
	}
	/*
	 * Menu
	 */
	public function add_menu_page() {
		add_submenu_page(
			'woocommerce',
			'Product Variation',
			'Product Variation',
			'manage_options',
			'custom-menu',
			[ $this, 'wcv2sp_render_custom_page_callback' ]
		);
	}
	
	/**
	 * @return void
	 */
	public function register_admin_assets() {
		$styles = [
			[
				'handle' => 'wcv2sp-settings',
				'src'    => PPNINJA_FILE_URL . '/assets/admin/css/settings.css',
			],
		];
		// Register public styles.
		foreach ( $styles as $style ) {
			wp_register_style( $style['handle'], $style['src'], '', PPNINJA_VERSION );
		}
		$scripts = [
			[
				'handle' => 'wcv2sp-settings',
				'src'    => PPNINJA_FILE_URL . '/assets/admin/js/settings.js',
				'deps'   => [],
				'footer' => true,
			],
		];
		// Register public scripts.
		foreach ( $scripts as $script ) {
			wp_register_script( $script['handle'], $script['src'], $script['deps'], PPNINJA_VERSION, $script['footer'] );
		}
	}
	
	/**
	 * @return void
	 */
	public function wcv2sp_render_custom_page_callback() {
		wp_enqueue_script( 'wcv2sp-settings' );
		wp_enqueue_style( 'wcv2sp-settings' );
		?>
		<div class="wrap">
			<form method="post" action="admin.php?page=custom-menu" style="position: relative;">
				<div id="root_int"></div>
				<div id="wcv2sp_submit_button">
					<input type="submit" name="submit" id="submit" class="button button-primary" value="Save Changes">
				</div>
			</form>
		</div>
		<?php
	}
}


new WVSTT();