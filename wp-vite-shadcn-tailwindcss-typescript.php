<?php
/**
 * Plugin Name: Badges For Woocommerce
 * Plugin URI: #
 * Description: Vite shadcn tailwindcss typescript
 * Version: 0.0.1
 * Author: wptinysolution
 * Text Domain: badges-for-woo
 * Author URI: https://github.com/wptinysolution
 * License: GPLv3
 * License URI: http://www.gnu.org/licenses/gpl-3.0.html
 */

use BFWOO\BadgesForWoo;

define( 'BFWOO_VERSION', '0.0.1' );

define( 'BFWOO_FILE', __FILE__ );

define( 'BFWOO_FILE_BASENAME', plugin_basename( BFWOO_FILE ) );

define( 'BFWOO_FILE_URL', plugins_url( '', BFWOO_FILE ) );

define( 'BFWOO_DIR_URL', plugin_dir_url( BFWOO_FILE ) );

define( 'BFWOO_FILE_ABSPATH', dirname( BFWOO_FILE ) );

define( 'BFWOO_FILE_PATH', plugin_dir_path( __FILE__ ) );


/**
 * App Init.
 */

require_once BFWOO_FILE_PATH . 'vendor/autoload.php';

/**
 * @return BadgesForWoo
 */
function BFWOO_main() {
	return BadgesForWoo::instance();
}

add_action( 'plugins_loaded', 'BFWOO_main' );
