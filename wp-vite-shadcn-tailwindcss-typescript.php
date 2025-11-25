<?php
/**
 * Plugin Name: Vite Shadcn tailwindcss typescript zustand
 * Plugin URI: https://github.com/mamunur105/wp-vite-shadcn-tailwindcss-typescript
 * Description: Vite Shadcn tailwindcss typescript
 * Version: 0.0.1
 * Author: Mamunur Rashid
 * Text Domain: wp-vite-shadcn-tailwindcss-typescript
 * Author URI: https://profiles.wordpress.org/mamunur105/
 * License: GPLv3
 * License URI: http://www.gnu.org/licenses/gpl-3.0.html
 */

use WPVSTT\WPVSTT_Main;

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
 * @return WPVSTT_Main
 */
function WPVSTT_main() {
	return WPVSTT_Main::instance();
}

add_action( 'plugins_loaded', 'WPVSTT_main' );
