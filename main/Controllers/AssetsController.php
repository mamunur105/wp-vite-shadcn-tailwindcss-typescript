<?php
namespace BFWOO\Controllers;

use BFWOO\Helpers\Config;
use BFWOO\Helpers\Fns;
use BFWOO\Traits\SingletonTrait;

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
		wp_localize_script( 'bfwoo-settings', 'bfwooParams', $commonParams );
	}

	/**
	 * @return void
	 */
	public function register_admin_assets() {
		$styles = [
			[
				'handle' => 'bfwoo-settings',
				'src'    => Fns::get_assets_uri( 'admin/css/settings.css' ),
			],
		];
		// Register public styles.
		foreach ( $styles as $style ) {
			wp_register_style( $style['handle'], $style['src'], '', BFWOO_VERSION );
		}
		$scripts = [
			[
				'handle' => 'bfwoo-settings',
				'src'    => Fns::get_assets_uri( 'admin/js/settings.js' ),
				'deps'   => [ 'jquery' ],
				'footer' => true,
			],
		];
		// Register public scripts.
		foreach ( $scripts as $script ) {
			wp_register_script( $script['handle'], $script['src'], $script['deps'], BFWOO_VERSION, $script['footer'] );
		}
		$this->register_common_assets();
	}

	/**
	 * @return void
	 */
	public function register_frontend_assets() {
		$styles = [
			[
				'handle' => 'bfwoo-frontend',
				'src'    => Fns::get_assets_uri( 'frontend/css/frontend.css' ),
			],
		];
		// Register public styles.
		foreach ( $styles as $style ) {
			wp_register_style( $style['handle'], $style['src'], '', BFWOO_VERSION );
		}
		$this->register_common_assets();
	}
}
