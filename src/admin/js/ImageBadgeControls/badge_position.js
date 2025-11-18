jQuery(document).ready(function($){
    function toggleBadgeField(){
        if( $('#shop_badge_position_option').val() === 'custom' ){
            $('#shop_custom_badge_position_field').show();
        } else {
            $('#shop_custom_badge_position_field').hide();
        }
        if( $('#single_badge_position_option').val() === 'custom' ){
            $('#single_page_custom_badge_position_field').show();
        } else {
            $('#single_page_custom_badge_position_field').hide();
        }
    }

    toggleBadgeField();
    $('#shop_badge_position_option, #single_badge_position_option').on('change', toggleBadgeField);
});