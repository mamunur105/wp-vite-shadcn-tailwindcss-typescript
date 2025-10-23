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

use WPVSTT\BadgesForWoo;

define( 'WPVSTT_VERSION', '0.0.1' );

define( 'WPVSTT_FILE', __FILE__ );

define( 'WPVSTT_FILE_BASENAME', plugin_basename( WPVSTT_FILE ) );

define( 'WPVSTT_FILE_URL', plugins_url( '', WPVSTT_FILE ) );

define( 'WPVSTT_DIR_URL', plugin_dir_url( WPVSTT_FILE ) );

define( 'WPVSTT_FILE_ABSPATH', dirname( WPVSTT_FILE ) );

define( 'WPVSTT_FILE_PATH', plugin_dir_path( __FILE__ ) );


/**
 * App Init.
 */

require_once WPVSTT_FILE_PATH . 'vendor/autoload.php';

/**
 * @return BadgesForWoo
 */
function WPVSTT_main() {
	return BadgesForWoo::instance();
}

add_action( 'plugins_loaded', 'WPVSTT_main' );
