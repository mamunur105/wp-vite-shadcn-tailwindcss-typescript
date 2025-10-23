<?php

namespace WPVSTT\Controllers;

use WPVSTT\Traits\SingletonTrait;
use WPVSTT\Helpers\Fns;

/**
 * APIController
 */
class APIController {
	/**
	 * SingletonTrait
	 */
	use SingletonTrait;

	/**
	 * @return void
	 */
	public function register_rest_api_init() {
		$route_namespace = 'wpvstt/v1/api';
		register_rest_route(
			$route_namespace,
			'/updateOptions',
			[
				'methods'             => 'POST',
				'callback'            => [ $this, 'save_settings' ],
				'permission_callback' => function () {
					return current_user_can( 'manage_options' );
				},
			],
		);
		register_rest_route(
			$route_namespace,
			'/getOptions',
			[
				'methods'             => 'GET',
				'callback'            => [ $this, 'get_options' ],
				'permission_callback' => function () {
					return current_user_can( 'manage_options' );
				},
			]
		);
	}

	/**
	 * @param object $request request.
	 *
	 * @return array
	 */
	public function save_settings( $request ) {
		$params = $request->get_params();
		update_option( 'wpvstt_settings', $params );
		return Fns::get_options();
	}
	/**
	 * @return array
	 */
	public function get_options() {
		return Fns::get_options();
	}
}
