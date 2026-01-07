/**
 * WordPress localized global object.
 * Provided via wp_localize_script().
 */
declare global {
    interface RtrsParams {
        ajaxurl: string
        admin_nonce: string
        settings: []
    }

    const rtrsParams: RtrsParams
}

export {}