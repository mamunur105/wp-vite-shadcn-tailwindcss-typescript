<?php
namespace WPVSTT\Controllers;

use WPVSTT\Helpers\Config;
use WPVSTT\Helpers\Fns;
use WPVSTT\Traits\SingletonTrait;

/**
 * AssetsController
 */
class AssetsController {
	/**
	 * SingleTon
	 */
	use SingletonTrait;

	/**
	 * @return void
	 */
	private function register_common_assets() {
		$commonParams = [
			'ajaxUrl'        => esc_url( admin_url( 'admin-ajax.php' ) ),
			'adminUrl'       => esc_url( admin_url() ),
			'restApiUrl'     => esc_url_raw( rest_url() ),
			'rest_nonce'     => wp_create_nonce( 'wp_rest' ),
			Config::NONCE_ID => wp_create_nonce( Config::NONCE_ID ),
		];
		wp_localize_script( 'wpvstt-settings', 'wpvsttParams', $commonParams );
	}

	/**
	 * @return void
	 */
	public function register_admin_assets() {
		$styles = [
			[
				'handle' => 'wpvstt-settings',
				'src'    => Fns::get_assets_uri( 'admin/css/settings.css' ),
			],
		];
		// Register public styles.
		foreach ( $styles as $style ) {
			wp_register_style( $style['handle'], $style['src'], '', WPVSTT_VERSION );
		}
		$scripts = [
			[
				'handle' => 'wpvstt-settings',
				'src'    => Fns::get_assets_uri( 'admin/js/settings.js' ),
				'deps'   => [ 'jquery' ],
				'footer' => true,
			],
		];
		// Register public scripts.
		foreach ( $scripts as $script ) {
			wp_register_script( $script['handle'], $script['src'], $script['deps'], WPVSTT_VERSION, $script['footer'] );
		}
		$this->register_common_assets();
	}

	/**
	 * @return void
	 */
	public function register_frontend_assets() {
		$styles = [
			[
				'handle' => 'wpvstt-frontend',
				'src'    => Fns::get_assets_uri( 'frontend/css/frontend.css' ),
			],
		];
		// Register public styles.
		foreach ( $styles as $style ) {
			wp_register_style( $style['handle'], $style['src'], '', WPVSTT_VERSION );
		}
		$this->register_common_assets();
	}
}
